import React from "react";
import { fetchCustomers } from "../asyncActions/api";
import { addCash, getCash } from "../store/slices/cashSlice";
import { addCustomer, removeCustomer } from "../store/slices/customerSlice";
import "./style.scss";
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  return (
    <div className="counter">
      <div className="counter__value">{cash}</div>
      <div className="counter__container">
        <button
          className="counter__button"
          onClick={() => dispatch(addCash(Number(prompt("Пополнить счет"))))}
        >
          Пополнить счет
        </button>
        <button
          disabled={cash <= 0 ? true : false}
          className="counter__button"
          onClick={() => dispatch(getCash(Number(prompt("Снять со счета"))))}
        >
          Снять со счета
        </button>
      </div>
      <div className="counter__container">
        <button
          className="counter__button"
          onClick={() => dispatch(addCustomer(prompt("Добавить клиента")))}
        >
          Добавить клиента
        </button>
        <button
          className="counter__button"
          onClick={() => fetchCustomers(dispatch)}
        >
          Получить всех клиентов
        </button>
      </div>
      {Object.keys(customers).map((key) => key).length > 0 ?
        < div >
          {
            Object.keys(customers).map((key) =>
              <div
                key={key}
                onClick={() => dispatch(removeCustomer(key))}
              >
                {customers[key].name}
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