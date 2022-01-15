import {Link} from 'react-router-dom';
import IcoSoftware from '../public/Icons/desenvolvimento-de-software.png';
import IcoHospedagem from '../public/Icons/hospedagem-e-dominio.png';
import IcoMarketing from '../public/Icons/marketing-e-trafego.png';
import IcoUiUx from '../public/Icons/ui-ux.png';
import IcoApis from '../public/Icons/apis.png';
import IcoContrato from '../public/Icons/pagamento-e-contrato.png';

export default function Banner() {

    return (
      <section className="services">
        <div id="servicos"  className="container">
          <h2>Serviços</h2>
          <h1>Tudo que você precisa para alcançar o seu sucesso</h1>
          <div className="services-wrap">
            <Link to="/servico/software" className="service-single paralax">
                
                <div className="service-icon">
                    <img src={IcoSoftware} alt="icon" />
                    <h3>Desenvolvimento de software</h3>
                </div>
                <p>Aplicativos (iOS | ANDROID).</p>
                <p>Sites e sistemas WEB.</p>
                <p>Desktop (Windows | Linux | Mac).</p>
                <p>Backend e frontend.</p>
            </Link>

            <Link to="/servico/hospedagem" className="service-single paralax">
                <div className="service-icon">
                    <img src={IcoHospedagem} alt="icon" />
                    <h3>Hospedagem e domínio</h3>
                </div>
                <p>Oferecemos serviço de hospedagem
                para nossos clientes</p>
                <p>Serviços desde o desenvolvimento,
                até seu projeto em produção</p>
            </Link>

            <Link to="/servico/marketing"  className="service-single paralax">
                <div className="service-icon">
                    <img src={IcoMarketing} alt="icon" />
                    <h3>Marketing e tráfego</h3>
                </div>
                <p>Alavanque seu negócio, criaremos
                estratégias para melhorar a presença
                da sua empresa na internet.</p>
                <p>Divulgaremos sua marca para
                todo o Brasil.</p>
            </Link>

            <Link to="/servico/uiux" className="service-single paralax">
                <div className="service-icon">
                    <img src={IcoUiUx} alt="icon" />
                    <h3>UI/UX</h3>
                </div>
                <p>Tenha a melhor experiência com
                a interface do usuário.</p>
                <p>Interfaces modernas e
                super interativas.</p>
            </Link>

            <Link to="/servico/apis" className="service-single paralax">
                <div className="service-icon">
                    <img src={IcoApis} alt="icon" />
                    <h3>Integrações e API's</h3>
                </div>
                
                <p>Integração com gateways
                de pagamento.</p>
                <p>Integração com outras APIs.</p>
            </Link>

            <Link to="/servico/contrato" className="service-single paralax">
                <div className="service-icon">
                    <img src={IcoContrato} alt="icon" />
                    <h3>Pagamento e contrato</h3>
                </div>
                
                <p>Nós aceitamos os diversos tipos de
                pagamento. Cartão de crédito
                (à vista e parcelado), boleto,
                recorrência, PIX.</p>
                <p>Contrato de prestação de serviço.</p>
            </Link>

          </div>
        </div>
      </section>
    );
}