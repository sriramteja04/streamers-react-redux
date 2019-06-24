import React from 'react';
import { Field, reduxForm } from 'redux-form';
//Field is a Component, reduxForm is a function

class StreamCreate extends React.Component {
  renderInput = formProps => {
    // formProps object which was senf by redux form
    // console.log(formProps);
    // {input: {…}, meta: {…}} // !input object on formProps
    // input:
    // name: "title"
    // onBlur: ƒ (event)
    // onChange: ƒ (event)
    // onDragStart: ƒ (event)
    // onDrop: ƒ (event)
    // onFocus: ƒ (event)
    // value: ""
    //__;proto__: Object
    const className = `field ${
      formProps.meta.touched && formProps.meta.error ? 'error' : ''
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
    //copy all the properties of input object and assigning to input element.
  };

  renderError = meta => {
    if (meta.touched && meta.error) {
      //If user some touched the input once then touched will be true
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  };

  onSubmit(formValues) {
    //e.preventDefault(); => Redux form will do for us
    // console.log(formValues); {title: "reactsj crash course", description: "silver in color"}
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'you must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'you must include a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);
