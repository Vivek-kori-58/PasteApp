import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  pastes: localStorage.getItem("pastes") ? localStorage.getItem("pastes") : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {},
    updateToPaste: (state, action) => {},
    resetAllPastes: (state, action) => {},
    removeFromPaste: (state, action) => {},
  },
});
export const { addToPaste, updateToPaste, resetAllPastes, removeFromPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
