import { createSlice } from "@reduxjs/toolkit";

const shopSpaceSlice = createSlice({
  name: "space",
  initialState: null,
  reducers: {
    addShopSpaceList: (state, action) => {

      return action.payload
    },
    removeShopSpace: (state, action) => {
        return state?.filter((request) => {
          return request?._id !== action?.payload;
        });
      },
  },
});

export const { addShopSpaceList , removeShopSpace } = shopSpaceSlice.actions;
export default shopSpaceSlice.reducer;
