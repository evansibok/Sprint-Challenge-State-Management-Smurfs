import React from "react";

export const SmurfCard = ({smurf}) => {
  return (
    <div className="smurfCard" key={smurf.id}>
      <h2>{smurf.name}</h2>
      <h4>Age: {smurf.age}</h4>
      <h4>Height: {smurf.height}</h4>
    </div>
  );
};

export default SmurfCard;