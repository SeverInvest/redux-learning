import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: {},
  isLoading: false,
  error: ""
}

const generatorId = () => {
  const allSymbols = ["q", "w", "e", "r", "t", "y", "u", "i", "1", "2", "3"];
  let key = "";
  for (let i = 1; i < 7; i++) {
    key = key + allSymbols[Math.floor(Math.random() * 11)];
  }
  return key;
}

const buildSlice = (payload) => {
  if (!!payload && Array.isArray(payload) && payload.length > 0) {
    let tempObj = {};
    for (let item in payload) {
      tempObj = { ...tempObj, ...{ [generatorId()]: { "name": payload[item].name, "id": payload[item].id } } }
    }
    return tempObj;
  };
  if (!!payload && typeof String(payload) === "string") {
    return { [generatorId()]: { "name": String(payload), "id": generatorId() } };
  };
  return null;
}

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    customersFetching(state) {
      state.isLoading = true;
    },
    customersFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.customers = { ...(state.customers || {}), ...buildSlice(action.payload) };
    },
    customersFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addCustomer(state, action) {
      state.customers = { ...(state.customers || {}), ...buildSlice(action.payload) };
    },
    removeCustomer(state, action) {
      delete state.customers[action.payload];
    }
  }
})

export const {
  customersFetching,
  customersFetchingSuccess,
  customersFetchingError,
  addCustomer,
  removeCustomer
} = customerSlice.actions;

export default customerSlice.reducer;