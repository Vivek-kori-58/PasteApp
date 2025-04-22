import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

let initialState = {
  pastes: localStorage.getItem("pastes") ? localStorage.getItem("pastes") : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast("Paste Created Successfully");
    },
    updateToPaste: (state, action) => {},
    resetAllPastes: (state, action) => {},
    removeFromPaste: (state, action) => {},
  },
});
export const { addToPaste, updateToPaste, resetAllPastes, removeFromPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
