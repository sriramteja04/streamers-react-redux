import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions/index';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '617693740640-mvtu1krrenai3d7t4djdh0aah10a7t8u.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //If user is signed in
          // then isSignedIn will set to true

          //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          //the isSignedIn value changes only when the App refreshes
          // In order to show dynamically we use the prototype method listen of isSignedIn object

          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Calling Action creators
  onAuthChange = isSignedIn => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId()); //sending user id to actionCreators
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn(); //build in methods on GoogleAuth object to Sign In.
  };
  onSignOutClick = () => {
    this.auth.signOut(); //build in methods on GoogleAuth object to Sign Out.
  };

  renderAuthButton = () => {
    if (this.props.isSignIn === null) {
      return null;
    } else if (this.props.isSignIn) {
      //If user Log In then show Sign Out option
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      //Logs out show Sign In
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignIn: state.auth.isSignIn
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
