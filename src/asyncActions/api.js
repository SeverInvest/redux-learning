import axios from "axios";
import { customersFetchingError, customersFetchingSuccess, customersFetching } from "../store/slices/customerSlice";

export async function fetchCustomers(dispatch) {
  try {
    dispatch(customersFetching());
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(customersFetchingSuccess(response.data))
  } catch (error) {
    dispatch(customersFetchingError(error.message));
  }
}
