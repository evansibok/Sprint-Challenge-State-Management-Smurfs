import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'


const CardList = props => {

  const { smurfState, getSmurfs } = props;
  console.log(smurfState)

  useEffect(() => {

    getSmurfs()
  }, [getSmurfs])

  return (
    <div>
      {
        smurfState.map(smurf => {
          return <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <div>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          </div>
        })
      }

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
)(CardList);