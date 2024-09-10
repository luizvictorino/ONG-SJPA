import './Carrossel.css'
const Carrocel = () =>{
  return (
    <section className="caroucelAnimal">
    <div id="carouselAnimalDescripltion" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <section className="dog-description">
            <img src={`images/imagePets/pet(10).jpeg`} className="img-dogDescription" alt="Descrição do animal"/>
            <div className="dog-descri_body">
              <h3 className="title-sessao">Meu nome é José</h3>
              <p className="sessao-parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt sequi animi, ut nostrum rerum deleniti aut corrupti. Suscipit in eligendi doloremque quaerat? Deserunt aut harum repellendus voluptatum sit! In.
            
              </p>
            </div>
          </section>
        </div>
        <div className="carousel-item">
          <section className="dog-description">
            <img src={`images/imagePets/pet(18).jpeg`} className="img-dogDescription" alt=""/>
            <div className="dog-descri_body">
              <h3 className="title-sessao">Meu nome é Ivan</h3>
              <p className="sessao-parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt sequi animi, ut nostrum rerum deleniti aut corrupti. Suscipit in eligendi doloremque quaerat? Deserunt aut harum repellendus voluptatum sit! In.
              </p>
            </div>
          </section>
        </div>
        <div className="carousel-item active">
          <section className="dog-description">
            <img src={`images/imagePets/pet(9).jpeg`} className="img-dogDescription" alt=""/>
            <div className="dog-descri_body">
              <h3 className="title-sessao">Meu nome é José</h3>
              <p className="sessao-parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt sequi animi, ut nostrum rerum deleniti aut corrupti. Suscipit in eligendi doloremque quaerat? Deserunt aut harum repellendus voluptatum sit! In.
              </p>
            </div>
          </section>
        </div>
        <div className="carousel-item">
          <section className="dog-description">
            <img src={`images/imagePets/pet(24).jpeg`} className="img-dogDescription" alt=""/>
            <div className="dog-descri_body">
              <h3 className="title-sessao">Meu nome é José</h3>
              <p className="sessao-parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt sequi animi, ut nostrum rerum deleniti aut corrupti. Suscipit in eligendi doloremque quaerat? Deserunt aut harum repellendus voluptatum sit! In.
              </p>
            </div>
          </section>
        </div>
      </div>
      <a className="carousel-control-next carousel-control" href="#carouselAnimalDescripltion" role="button"
        data-slide="next"><i className="fa-solid fa-arrow-right arrowAdot fa-2xl animate__animated"></i></a>
      <a className="carousel-control-prev carousel-control" href="#carouselAnimalDescripltion" role="button"
        data-slide="prev"><i className="fa-solid fa-arrow-left arrowAdot fa-2xl animate__animated"></i></a>
    </div>
  </section>
  )
}
export default Carrocel