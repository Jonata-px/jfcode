import IcoChecked from '../../public/Icons/checked.png';
import Banner from '../../public/images/pagamento-e-contrato.png';

export default function Contrato() {

    return (
          <div className="container">
          <div className="service-info">
            <h1>Pagamento e contrato</h1>
            <p>Aceitamos pagamentos com cartão de crédito (à vista e parcelado), boleto, recorrência, PIX. E para sua segurança, trabalhamos com contrato de prestação de serviço (digital).</p>
            <div className="service-info-wrap">
              <div className="info-service">
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> À vista</h2>
                  <p>Cartão de crédito e débito, boleto, PIX, recorrência.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Parcelado</h2>
                  <p>Cartão de crédito, recorrência.</p>
                </div>
                <div className="service-info-single">
                  <h2><img src={IcoChecked} alt="checked" /> Contrato de prestação de serviço</h2>
                  <p>Para a sua maior segurança, trabalhamos sob contrato, podendo ser assinado digitalmente.</p>
                </div>
              </div>
              <img src={Banner} alt="Hospedagem e domínio" />
            </div>
          </div>
         
      </div>
    );
  }
  
  