import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../../store/actions/index';
import StreamForm from '../../UI/StreamForm';
//Field is a Component, reduxForm is a function

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    //e.preventDefault(); => Redux form will do for us
    // console.log(formValues); {title: "reactsj crash course", description: "silver in color"}
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
