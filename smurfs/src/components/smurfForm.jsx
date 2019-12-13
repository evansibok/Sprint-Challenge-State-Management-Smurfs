import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actionCreators";

export const SmurfForm = ({ form, onInputChange, submitForm }) => {
  const inputChange = evt => {
    onInputChange(evt.target.name, evt.target.value);
  };

  const submit = evt => {
    evt.preventDefault();
    submitForm();
  };
  return (
    <div className="formCon">
      <form className="formBody" onSubmit={submit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter Name..."
          onChange={inputChange}
        />
        <input
          type="text"
          name="age"
          value={form.age}
          placeholder="Enter Age..."
          onChange={inputChange}
        />
        <input
          type="text"
          name="height"
          value={form.height}
          placeholder="Enter Height..."
          onChange={inputChange}
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

export default connect(mapStateToProps, actionCreators)(SmurfForm);
