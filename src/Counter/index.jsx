import { fetchCustomers } from "../asyncActions/customers";
import { addCashAction, getCashAction } from "../store/cashReducer";
import { addCustomerAction, removeCustomerAction, addManyCustomersAction } from "../store/customerReducer";
import "./style.scss";
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: name,
    }
    dispatch(addCustomerAction(customer))
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  };

  const addAllCustomers = async () => {
    try {
      const json = await fetchCustomers();
      dispatch(addManyCustomersAction(json))
    } catch (error) {
      console.log(error);
    }
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
        <button
          className="counter__button"
          onClick={() => addAllCustomers()}
        >
          Получить всех клиентов
        </button>
      </div>
      {customers.length > 0 ?
        < div >
          {
            customers.map((item) =>
              <div
                key={item.id}
                onClick={() => removeCustomer(item)}
              >
                {item.name}
              </div>
            )
          }
        </div>
        :
        <div>
          Клиенты отсутствуют!
        </div>
      }

    </div >
  );
}