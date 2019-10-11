import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'


const CardList = () => {

  return (
    <div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfState: state.smurfState
  }
}

export default connect(mapStateToProps, actionCreators)(CardList);