import IcoChecked from '../../public/Icons/checked.png';
import Banner from '../../public/images/integracoes-e-api.png';

export default function Apis() {

    return (
          <div className="container">
          <div className="service-info">
            <h1>Integrações e API's</h1>
            <p>Necessita utilizar meios de pagamento em sua plataforma? Não se preocupe, nós integramos gateways de pagamentos e muitos outros diversos serviços de APIs!</p>
            <div className="service-info-wrap">
              <div className="info-service">
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Gateways de pagamento</h2>
                  <p>Nós integramos várias soluções de pagamento que estão na internet.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Bots e chats em tempo real</h2>
                  <p>Precisa de um bot ou chat para redes socials, sua plataforma e mais? Nos desenvolvemos!</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Integrações por API's</h2>
                  <p>Precisa integrar sua plataforma com soluções externas? Deixe com a gente!</p>
                </div>
              </div>
              <img src={Banner} alt="Hospedagem e domínio" />
            </div>
          </div>
          <div className="service-tec">
            <h1>Tecnologias que utilizamos</h1>
            <div className="service-tec-wrap">
              <div className="service-tec-single">
                <h2>JavaScript</h2>
              </div>

              <div className="service-tec-single">
                <h2>Node.js</h2>
              </div>

              <div className="service-tec-single">
                <h2>Socket.io</h2>
              </div>

              <div className="service-tec-single">
                <h2>GoogleCloud</h2>
              </div>

              <div className="service-tec-single">
                <h2>AWS</h2>
              </div>
              
            </div>
          </div>
      </div>
    );
  }
  
  