import "./styles.css";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import NotificationButton from "../NotificationButton";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

export default function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);

    axios
      .get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then((response) => {
        setSales(response.data.content);
      });
  }, [minDate, maxDate]);

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
              {sales.map((sale) => {
                return (
                  <tr key={sale.id}>
                    <td className="showId">#{sale.id}</td>
                    <td className="showDate">
                      {new Date(sale.date).toLocaleDateString()}
                    </td>
                    <td>{sale.sellerName}</td>
                    <td className="showFootfall">{sale.visited}</td>
                    <td className="showSales">{sale.deals}</td>
                    <td>R${sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="meta__red__button__container">
                        <div className="meta__red__button">
                          <NotificationButton saleId={sale.id} />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
