import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    // create reducer methods
    bandAdded(state, action) {
      state.entities.push({ id: uuid(), name: action.payload });
    },
    bandRemoved(state, action) {
      const removedBand = state.entities.findIndex(
        (band) => band.id === action.payload
      );
      state.entities.splice(removedBand, 1);
    },
  },
});

// export the action creators
export const { bandAdded, bandRemoved } = bandsSlice.actions;

export default bandsSlice.reducer;
