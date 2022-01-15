import IcoChecked from '../../public/Icons/checked.png';
import Banner from '../../public/images/desenvolvimento-de-software.png';

export default function Software() {

    return (
          <div className="container">
          <div className="service-info">
            <h1>Desenvolvimento de software</h1>
            <p>Nós transformaremos sua ideia em realidade.<br/> crie o seu software de acordo com sua necessidade Sites, aplicativos, sistemas WEB e desktop</p>
            <div className="service-info-wrap">
              <div className="info-service">
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> App</h2>
                  <p>Aplicativos híbridos e nativos. Com layout moderno e alta performance.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Sites e sistemas web</h2>
                  <p>Desde simples landing pages, até sistemas complexos como lojas virtuais, e-commerce, bots, chats.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Desktop</h2>
                  <p>Desenvolvemos as melhores soluções para todos os sistemas operacionais (Windows | Linux | Mac)</p>
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
                <h2>Apache</h2>
              </div>

              <div className="service-tec-single">
                <h2>MongoDB</h2>
              </div>
              
              <div className="service-tec-single">
                <h2>MySql</h2>
              </div>
              <div className="service-tec-single">
                <h2>Postgresql</h2>
              </div>
              <div className="service-tec-single">
                <h2>React</h2>
              </div>
              <div className="service-tec-single">
                <h2>Visual Studio</h2>
              </div>

              <div className="service-tec-single">
                <h2>ASP.NET</h2>
              </div>

              <div className="service-tec-single">
                <h2>AWS</h2>
              </div>

              <div className="service-tec-single">
                <h2>Nginx</h2>
              </div>

              <div className="service-tec-single">
                <h2>C#</h2>
              </div>

              <div className="service-tec-single">
                <h2>.NET</h2>
              </div>

              <div className="service-tec-single">
                <h2>Google Clound</h2>
              </div>

              <div className="service-tec-single">
                <h2>Typescript</h2>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  