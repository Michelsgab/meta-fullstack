import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="meta__container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}
