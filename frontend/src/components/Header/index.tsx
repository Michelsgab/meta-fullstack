import Logo from "../../assets/images/logo.svg";
import "./styles.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="meta__logo__container">
          <img src={Logo} alt="Meta's Logo" />
          <h1 className="meta__title">Meta</h1>
          <a href="https://github.com/Michelsgab" target="_blank">
            <i className="bx bxl-github"></i> Gabriel Michels
          </a>
        </div>
      </header>
    </>
  );
}
