import { addCustomerAction, removeCustomerAction } from "../store/customerReducer";
import "./style.scss";
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: name,
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="counter">
      <div className="counter__value">{cash}</div>
      <div className="counter__container">
        <button
          className="counter__button"
          onClick={() => addCash(Number(prompt("Пополнить счет")))}
        >
          Пополнить счет
        </button>
        <button
          className="counter__button"
          onClick={() => getCash(Number(prompt("Снять со счета")))}
        >
          Снять со счета
        </button>
      </div>
      <div className="counter__container">
        <button
          className="counter__button"
          onClick={() => addCustomer((prompt("Добавить клиента")))}
        >
          Добавить клиента
        </button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div
              onClick={() => removeCustomer(customer)}
            >
              {customer.name}
            </div>
          )}
        </div>
        :
        <div>
          Клиенты отсутствуют!
        </div>
      }

    </div>
  );
}