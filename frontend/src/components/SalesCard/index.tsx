import "./styles.css";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import NotificationButton from "../NotificationButton";
import { useEffect, useState } from "react";

export default function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  useEffect(() => {
    axios.get("https://meta-fullstack.herokuapp.com/sales").then(response => {
      console.log(response);
    })
  }, [])

  return (
    <>
      <div className="meta__card">
        <h2 className="meta__sales__title">Sales</h2>
        <div>
          <div className="meta__form__container">
            <DatePicker
              className="meta__form__controle"
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="meta__form__container">
            <DatePicker
              className="meta__form__controle"
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div>
          <table className="meta__sales__table">
            <thead>
              <tr>
                <th className="showId">Id</th>
                <th className="showDate">Date</th>
                <th>Saller</th>
                <th className="showFootfall">Footfall</th>
                <th className="showSales">Sales</th>
                <th>Total</th>
                <th>Notify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="showId">#001</td>
                <td className="showDate">10/07/2022</td>
                <td>Gabriel</td>
                <td className="showFootfall">1023</td>
                <td className="showSales">310</td>
                <td>R$34.000,00</td>
                <td>
                  <div className="meta__red__button__container">
                    <div className="meta__red__button">
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
