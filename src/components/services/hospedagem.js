import IcoChecked from '../../public/Icons/checked.png';
import Banner from '../../public/images/hospedagem-e-dominio.png';

export default function Hospedagem() {

    return (
      <div className="container">
          <div className="service-info">
            <h1>Hospedagem e domínio</h1>
            <p>Não possui experiencia técnica? Deixe conosco,<br/>
            nós deixamos tudo preparado para você!</p>
            <div className="service-info-wrap">
              <div className="info-service paralax-right">
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Hospedagem</h2>
                  <p>Nós oferecemos serviço de hospedagem em nossos servidores.</p>
                  <p>Também trabalhamos com google Cloud, AWS e outros.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Do desenvolvimento a produção</h2>
                  <p>Se você não tem experiência técnica, nós deixamos tudo preparado para você.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Dominio grátis (<span>leia</span>)</h2>
                  <p>desenvolveu sua solução com a gente? Você ganha um domínio gratuito. <span>Somente para clientes que desenvolveram com a gente.</span></p>
                </div>
              </div>
              <div className="img-wrap paralax-left">
                <img src={Banner} alt="Hospedagem e domínio" />
              </div>
            </div>
          </div>
          <div className="service-tec">
            <h1>Tecnologias que utilizamos</h1>
            <div className="service-tec-wrap">
              <div className="service-tec-single paralax">
                <h2>AWS</h2>
              </div>

              <div className="service-tec-single paralax">
                <h2>Google Cloud Platform</h2>
              </div>
          
            </div>
          </div>
      </div>
    );
  }
  