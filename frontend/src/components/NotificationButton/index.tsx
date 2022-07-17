import axios from "axios";
import Vector from "../../assets/images/Vector.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  saleId: number;
};

function handleClick(id: Number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    console.log("djklada");
  });
}

export default function NotificationButton({ saleId }: Props) {
  return (
    <div className="meta__red__button" onClick={() => handleClick(saleId)}>
      <img src={Vector} alt="Notification" />
    </div>
  );
}
