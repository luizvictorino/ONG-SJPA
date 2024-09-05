import './Footer.css'
const Footer = () =>{
  return (
    <footer>
    <a href="#logo">
      <img src={`${process.env.PUBLIC_URL}images/img/logo2.svg`} class="logo" alt="logo" /></a>
      
    <p class="autorais">Todos os direitos reservados a - <br/> <small>Copyright © 2024</small></p>
    <div class="redes">
      <h6 class="title-redes">Contato</h6>
      <a href="https://www.instagram.com/ong_sjpa/?igsh=MTR0cWNmM2hxbmpnbA%3D%3D"><i class="fa-brands fa-instagram fa-2"></i></a>
      <a href="https://api.whatsapp.com/send?phone=553299655493"><i class="fa-brands fa-whatsapp fa-2xm"></i></a>
    </div>
  </footer>
  )
}
export default Footer