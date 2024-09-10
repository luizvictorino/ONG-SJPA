import './Home.css';
import MenuTopo from '../Header';
import Carrocel from '../Caroucel';
import Footer from '../Footer';
const Home = () =>{
  return (
    <>
  <div>
    <MenuTopo/>
    <section className="banner" style={{ backgroundImage: `url(${'/images/img/imgBanner.jpg'})` }}>
 <h1 className="animate__animated animate__backInLeft">Venha conhecer o <strong>Instituto SJPA</strong></h1>
</section>
    {/* SOBRE */}
      <section className="sobre" id="isobre" style={{ backgroundImage: `url(${'/images/img/backgroundSobre.png'})` }}>
      <div className="sobre-body">
        <h2 className="title-sessao">O Instituto SJPA</h2>
        <p className="sessao-parag">A <b>ONG SJPA</b> foi fundada há mais de 36 anos por um grupo de voluntários com o objetivo de criar
          um refúgio seguro e humanizado para animais abandonados. Atualmente, a ONG abriga cerca de 450 cães e gatos, e sua continuidade
          depende exclusivamente de doações da comunidade, pois não recebe apoio governamental ou de grandes patrocinadores.
          A SJPA se dedica a garantir que esses animais tenham alimentação, um lugar seguro para dormir e, principalmente, carinho e
          respeito, promovendo um futuro onde todos os animais possam viver com dignidade e amor.
          <a href="./assets/pages/sobre.html" className="btn btn-sobre">Saiba mais</a>
        </p>
    
        <div className="img-sobre" >
          <img src={`images/img/03.jpeg`} className="img-sobre" alt="visão do campo" /></div>
      </div>
    </section>
    <div>
    </div>
    {/* ADOCAO */}
    <section className="adocao" id="iadocao" style={{ backgroundImage: `url(${'/images/img/backgoundAdocao.png'})` }}>
      <h2 className="title-sessao">Ajude esses animaizinhos</h2>
      <a href="./assets/pages/doacao.html">
        <div className="card card-doe" style={{ backgroundImage: `url(${'/images/imagePets/pet9_resized.jpeg'})` }}><span className="card-title">DOE</span></div>
      </a>
      <a href="##">
        <div className="card card-apadrinhe" style={{ backgroundImage: `url(${'/images/imagePets/pet7_resized.jpeg'})` }}><span className="card-title">APADRINHE</span></div>
      </a>
      <a href="##">
        <div className="card card-adote" style={{ backgroundImage: `url(${'/images/imagePets/pet_resized.jpeg'})` }}><span className="card-title">ADOTE</span></div>
      </a>
    </section>
    {/* CARROCEL */}
    <Carrocel/>
    {/* VOLUNTARIOS */}
    <section className="voluntarios" style={{ backgroundImage: `url(${'/images/img/backgound-voluntarios.png'})` }}>
    <h2 className="title-sessao">Voluntários participantes</h2>
    <figure>
      <img src={`/images/img/User.svg`} alt="" className="voluntario" />
      <figcaption>Beatriz</figcaption>
    </figure>
    <figure>
      <img src={`/images/img/User.svg`} alt="" className="voluntario" />
      <figcaption>Fábio</figcaption>
    </figure>
    <figure>
      <img src={`/images/img/User.svg`} alt="" className="voluntario" />
      <figcaption>Clara</figcaption>
    </figure>
  </section>
  <section className='fornecedores' style={{ backgroundImage: `url(${'/images/img/backgroundFornecedores.png'})` }}>
    <h2 className="title-sessao">Principais fornecedores</h2>
    <figure className=' fornecedores_item'>
    <img src={`/images/img/imgLoremForne.png`} alt="" className="voluntario" />
<figcaption>lorem ipsum</figcaption>    
</figure>
    <figure className=' fornecedores_item'>
    <img src={`/images/img/imgLoremForne.png`} alt="" className="voluntario" />
    <figcaption>lorem ipsum</figcaption>
    </figure>
    <figure className=' fornecedores_item'>
    <img src={`/images/img/imgLoremForne.png`} alt="" className="voluntario" />
    <figcaption>lorem ipsum</figcaption>
    </figure>
  </section>
  {/* footer */}
  <Footer/>
  </div>
  </>
  );
}
export default Home