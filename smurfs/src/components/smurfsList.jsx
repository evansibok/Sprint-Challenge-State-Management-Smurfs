import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actionCreators";
import { SmurfCard } from "./smurfCard";

export const SmurfsList = ({ smurfs, getSmurf }) => {
  useEffect(() => {
    getSmurf();
    return () => {};
  }, []);

  return (
    <div>
      {smurfs.map(smurf => (
        <SmurfCard smurf={smurf} key={smurf.id} />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}
export default connect(mapStateToProps, actionCreators)(SmurfsList);
