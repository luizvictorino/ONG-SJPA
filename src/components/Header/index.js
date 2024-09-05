import './Header.css'

const MenuTopo = () =>{
  return (
    <header>
      <section className="menu-top">
      <div className="logo">
        <a href="./index.html"><span><img src={`${process.env.PUBLIC_URL}images/img/logo2.svg`} className="img-logo" id="logo" alt="logo" /> </span><span id="titulo-logo">ONG SJPA</span></a>
        
      </div>
      <nav id="menu">
        <ul>
          <li className="menu-item menu_link-doacao animate__animated "><a href="./assets/pages/doacao.html"
              className="menu-item_link animate__animated">Faça uma doação</a></li>
          <li className="menu-item menu_link-Apadrinhe animate__animated "><a href="./index.html#iadocao"
              className="menu-item_link">Apadrinhe</a></li>
          <li className="menu-item menu_link-Adote animate__animated "><a href="./index.html#iadocao"
              className="menu-item_link">Adote</a></li>
          <li className="menu-item menu_link-sobre animate__animated "><a href="./assets/pages/sobre.html"
              className="menu-item_link">Quem somos</a></li>
        </ul>
      </nav>
      <div className="redes">
        <a href="https://api.whatsapp.com/send?phone=553299655493"><i className="fa-brands animate__animated  fa-whatsapp fa-2xl"></i></a>
        <a href="https://www.instagram.com/ong_sjpa/?igsh=MTR0cWNmM2hxbmpnbA%3D%3D"><i className="fa-brands animate__animated fa-instagram fa-2xl"></i></a>
      </div>
        </section>
        <section className="banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img/imgBanner.jpg'})` }}>
          <h1 className="animate__animated animate__backInLeft">Venha conhecer o <strong>Instituto SJPA</strong></h1>
       </section>
    </header>
  );
}


export default MenuTopo;