import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cashReducer } from "../store/cashReducer";
import { customerReducer } from "../store/customerReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer
});

const store = configureStore(
  {reducer: rootReducer},
  composeWithDevTools()
)

export default store;