import BannerImg from '../public/images/banner.png';

export default function Banner() {

    return (
      <section className="banner">
        <div className="container">
          <div className="banner-text paralax-right">
            <h3>Experiência com várias tecnologias</h3>
            <h1>PROGRAMAÇÃO E <br/>AGÊNCIA DE MARKETING</h1>
            <p>Utilizamos das melhores e mais modernas
            tecnologias para agilizar e otimizar as tarefas
            e necessidades de seu negócio!</p>
            <div className="banner-contato">
              <button onClick={()=>document.getElementById('header-contato').click()} >Entrar em Contato</button>
            </div>
          </div>
          <div className="banner-img paralax-left">
            <img src={BannerImg} alt="banner" />
          </div>
          
        </div>
      </section>
    );
}