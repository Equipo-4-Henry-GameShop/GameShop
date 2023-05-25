import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  imgScreen: [],
};

export const imgScreenState = createSlice({
  name: "imgScreen",
  initialState,
  reducers: {
    addImg: (state, action) => {
      state.imgScreen = action.payload;
    },

    removeImg: (state, action) => {
      state.imgScreen = action.payload;
    },
  },
});

export const { addImg , removeImg } = imgScreenState.actions;
export default imgScreenState.reducer;