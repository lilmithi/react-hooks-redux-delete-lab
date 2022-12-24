import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded, bandRemoved } from "./bandsSlice";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  function handleDelete(id) {
    dispatch(bandRemoved(id));
  }

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        {bands.map((band) => (
          <div>
            <li key={band.id}>{band.name}</li>
            <button type="button" onClick={()=>handleDelete(band.id)}>
              Delete Band
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BandsContainer;
