import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'


const Form = props => {

  const { smurfState, changeInput } = props
  console.log(smurfState)

  const onValueChange = evt => {
    changeInput(evt.target)
  }

  return (
    <div>
      <h3>Add Smurfs below!</h3>

      <div>
        <input
          name="name"
          placeholder="Enter Name..."
          onChange={onValueChange}
        /><br /><br />
        <input
          name="age"
          placeholder="Enter Age..."
          onChange={onValueChange}
        /><br /><br />
        <input
          name="height"
          placeholder="Enter Height..."
          onChange={changeInput}
        /><br /><br />
        <button>Join Village!</button>
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfState: state.smurfState
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(Form);