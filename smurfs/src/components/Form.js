import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'


const Form = props => {

  const { formValues, changeInput } = props
  console.log(formValues)

  const onValueChange = evt => {
    changeInput(evt.target)
  }

  return (
    <div>
      <h3>Add Smurfs below!</h3>

      <div>
        <input
          name="name"
          value={formValues.name}
          placeholder="Enter Name..."
          onChange={onValueChange}
        /><br /><br />

        <input
          name="age"
          value={formValues.age}
          placeholder="Enter Age..."
          onChange={onValueChange}
        /><br /><br />

        <input
          name="height"
          value={formValues.height}
          placeholder="Enter Height..."
          onChange={onValueChange}
        /><br /><br />

        <button>Join Village!</button>
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    formValues: state.formValues
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(Form);