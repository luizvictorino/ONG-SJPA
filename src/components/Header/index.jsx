import './Header.css'
import { Link } from 'react-router-dom';

const MenuTopo = () =>{
  return (
    <header>
      <section className="menu-top">
      <div className="logo">
        <Link to="/">
        <span>
          <img src={`images/img/logo2.svg`} className="img-logo" id="logo" alt="logo" /> 
        </span>
        <span id="titulo-logo">ONG SJPA</span>
        </Link>
        
      </div>
      <nav id="menu">
        <ul>
          <li className="menu-item menu_link-doacao animate__animated ">
            <Link to="" className="menu-item_link animate__animated">Faça uma doação</Link>
          </li>
          <li className="menu-item menu_link-Apadrinhe animate__animated ">
            <Link to="" className="menu-item_link">Apadrinhe</Link>
          </li>
          <li className="menu-item menu_link-Adote animate__animated ">
            <Link to="" className="menu-item_link">Adote</Link>
          </li>
          <li className="menu-item menu_link-sobre animate__animated ">
            <Link to="" className="menu-item_link">Quem somos</Link>
          </li>
        </ul>
      </nav>
      <div className="redes">
        <a href="https://api.whatsapp.com/send?phone=553299655493">
          <i className="fa-brands animate__animated  fa-whatsapp fa-2xl"></i>
        </a>
        <a href="https://www.instagram.com/ong_sjpa/?igsh=MTR0cWNmM2hxbmpnbA%3D%3D">
          <i className="fa-brands animate__animated fa-instagram fa-2xl"></i>
        </a>
      </div>
        </section>
    </header>
  );
}


export default MenuTopo