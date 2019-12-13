import React from "react";

export const SmurfCard = ({smurf}) => {
  return (
    <div>
      <h2>{smurf.name}</h2>
      <h4>{smurf.age}</h4>
      <h4>{smurf.height}</h4>
    </div>
  );
};

export default SmurfCard;
