import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'


const Form = props => {

  const { smurfState, getSmurfs } = props;

  return (
    <div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    // smurfState: state.smurfState
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(Form);