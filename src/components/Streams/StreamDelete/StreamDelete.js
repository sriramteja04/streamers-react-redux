import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../UI/Modal';
import history from '../../../history';
import { deleteStream, fetchStream } from '../../../store/actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  cancelButtonHandler = () => {
    history.push('/');
  };

  deleteButtonHandler = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    } else {
      return `Are you sure you want to delete this stream with title: ${
        this.props.stream.title
      }`;
    }
  }

  render() {
    const actions = (
      <React.Fragment>
        <button
          onClick={this.deleteButtonHandler}
          className="ui button negative"
        >
          Delete
        </button>
        <button onClick={this.cancelButtonHandler} className="ui green button">
          Cancel
        </button>
      </React.Fragment>
    );

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={actions}
        onDismiss={() => {
          //Clicking outside the modal
          history.push('/');
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { deleteStream, fetchStream }
)(StreamDelete);
