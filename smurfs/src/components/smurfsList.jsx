import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actionCreators";
import { SmurfCard } from "./smurfCard";

export const SmurfsList = ({ smurfs, getSmurfs }) => {
  useEffect(() => {
    getSmurfs();
    return () => {};
  }, [getSmurfs]);

  return (
    <div className="smurfList">
      {smurfs.map(smurf => (
        <SmurfCard key={smurf.id} smurf={smurf} />
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
