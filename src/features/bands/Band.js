import { useDispatch } from "react-redux";
import React from "react";
import { bandRemoved } from "./bandsSlice";

function Band({ band }) {
  const dispatch = useDispatch();
  function deleteHandler() {
    dispatch(bandRemoved(band.id));
  }
  return (
    <div>
      {band.name}
      <button onClick={deleteHandler}>Delete Band</button>
    </div>
  );
}

export default Band;