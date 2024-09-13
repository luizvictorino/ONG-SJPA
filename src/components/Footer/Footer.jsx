import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={`images/img/logo2.svg`} className="logo" alt="logo" />
      </Link>

      <p className="autorais">
        Todos os direitos reservados a - <br /> <small>Copyright © 2024</small>
      </p>
      <div className="redes">
        <h6 className="title-redes">Contato</h6>
        <a href="https://www.instagram.com/ong_sjpa/?igsh=MTR0cWNmM2hxbmpnbA%3D%3D">
          <i className="fa-brands fa-instagram fa-2"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=553299655493">
          <i className="fa-brands fa-whatsapp fa-2xm"></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
