import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded,bandRemoved } from "./bandsSlice";
import Band from "./Band";


function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }
  function DeleteBand(band) {
    dispatch(bandRemoved(band.id));
  }

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        {bands.map((band) => (
          <Band key={band.id} band={band} DeleteBand={DeleteBand}/>
        ))}
      </ul>
    </div>
  );
}

export default BandsContainer;
