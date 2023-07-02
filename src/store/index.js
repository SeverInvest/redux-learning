import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cashReducer } from "../store/cashReducer";
import { customerReducer } from "../store/customerReducer";

const store = configureStore(
  {
    reducer: combineReducers({
      cash: cashReducer,
      customers: customerReducer
    })
  },
);

export default store;