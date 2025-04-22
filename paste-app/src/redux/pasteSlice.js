import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Successfully");
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if(index >= 0){
      state.pastes[index] = paste;
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
      toast.success("Paste Updated Successfully")
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item)=>item._id === pasteId);
      if(index >= 0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Deleted Successfully")
      }
    },
  },
});
export const { addToPaste, updateToPaste, resetAllPastes, removeFromPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
