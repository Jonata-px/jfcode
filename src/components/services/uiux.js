import IcoChecked from '../../public/Icons/checked.png';
import Banner from '../../public/images/ui-ux.png';

export default function UiUx() {

    return (
          <div className="container">
          <div className="service-info">
            <h1>UI/UX</h1>
            <p>Tenha a melhor sensação ao utilizar nossas soluções de desenvolvimento. Interfaces interativas, simplificadas e modernas.</p>
            <div className="service-info-wrap">
              <div className="info-service">
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Interfaces modernas</h2>
                  <p>Layouts modernos e bem planejados para sua solução de software, que aumentarão a produtividade.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Impressione</h2>
                  <p>Impressione todas as pessoas que utilizarem sua solução, deixaremos seu negócio com a sua identidade.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Descomplique-se</h2>
                  <p>Deixaremos tudo que for necessário para você trabalhar diretamente em suas mãos, sob medida e com fluidez.</p>
                </div>
              </div>
              <img src={Banner} alt="Hospedagem e domínio" />
            </div>
          </div>
          <div className="service-tec">
            <h1>Tecnologias que utilizamos</h1>
            <div className="service-tec-wrap">
              <div className="service-tec-single">
                <h2>React</h2>
              </div>

              <div className="service-tec-single">
                <h2>JavaScript</h2>
              </div>

              <div className="service-tec-single">
                <h2>Visual Studio</h2>
              </div>
              
            </div>
          </div>
      </div>
    );
  }
  
  