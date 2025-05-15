import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Color = {
  name: string;
  code: string;
};

interface ProductsState {
  colorSelection: Color;
  sizeSelection: string;
}

const initialState: ProductsState = {
  colorSelection: {
    name: "Brown",
    code: "bg-[#4F4631]",
  },
  sizeSelection: "Large",
};

export const productsSlice = createSlice({
  name: "products",

  initialState,
  reducers: {
    setColorSelection: (state, action: PayloadAction<Color>) => {
      state.colorSelection = action.payload;
    },
    setSizeSelection: (state, action: PayloadAction<string>) => {
      state.sizeSelection = action.payload;
    },
  },
});

export const { setColorSelection, setSizeSelection } = productsSlice.actions;

export default productsSlice.reducer;
