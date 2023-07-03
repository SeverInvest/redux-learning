import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cash: 0,
  }
  
  const cashSlice = createSlice({
    name: "cash",
    initialState,
    reducers: {
      addCash(state, action) {
        state.cash = state.cash + action.payload;
      },
      getCash(state, action) {
        state.cash = state.cash - action.payload;
      }
    }
  })
  
  export const { 
    addCash, 
    getCash, 
  } = cashSlice.actions;
  
  export default cashSlice.reducer;