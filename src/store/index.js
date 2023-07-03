import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cashReducer from "./slices/cashSlice";
import customerReducer from "./slices/customerSlice";

export const store = configureStore(
  {
    reducer: combineReducers({
      cash: cashReducer,
      customers: customerReducer
    })
  },
);
