import IcoChecked from '../../public/Icons/checked.png';
import Banner from '../../public/images/marketing.png';

export default function Marketing() {

    return (
          <div className="container">
          <div className="service-info">
            <h1>Marketing e tráfego</h1>
            <p>Nós faremos tudo por você, nossa agência irá cuidar disso. criaremos toda estrutura de marketing do seu negócio</p>
            <div className="service-info-wrap">
              <div className="info-service paralax-right">
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Deseja aprender as melhores estratégias?</h2>
                  <p>Se você mesmo quiser fazer o marketing de seu negocio, temos o material e conhecimento que farão você sair do zero.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Tráfego pago</h2>
                  <p>Invista dinheiro com esta estratégia, anuncie seu negócio na internet, traga visitas e clientes para você.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Tráfego orgânico</h2>
                  <p>Nos oferecemos este serviço para você, utilizaremos as melhores estratégias e pouparemos da melhor forma o seu dinheiro.</p>
                </div>
              </div>
              <div className="img-wrap paralax-left">
                <img src={Banner} alt="Marketing e tráfego" />
              </div>
            </div>
          </div>
          
      </div>
    );
  }
  
  