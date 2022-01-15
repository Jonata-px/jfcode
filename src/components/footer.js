import {Link} from 'react-router-dom';
import {FaMapMarkerAlt, FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import Logo from '../public/Icons/jf2.png';

export default function Footer() {


  const autoScroll = (to)=>{
    let timer = setInterval(()=>{
      let el = document.getElementById(to); 
      if(el !== undefined){
        window.scrollTo(0,el.offsetTop);
        clearInterval(timer);
      }
    })
  }

    return (
      <footer>
        <div className="container">
          <div className="logo">
            <Link to="/"><img src={Logo} title="jfcode" alt="logo"/></Link>
          </div>

          <nav>
            <ul>
              <h4>Serviços</h4>
              <li><Link to="">Desenvolvimento de software</Link></li>
              <li><Link to="">Hospedagem e domínio</Link></li>
              <li><Link to="">Marketing e tráfego</Link></li>
              <li><Link to="">UI/UX</Link></li>
              <li><Link to="">Integrações e API's</Link></li>
              <li><Link to="">Pagamento e contrato</Link></li>
            </ul>
            <ul>
              <h4>Links</h4>
              <li><Link to="/">Inicio</Link></li>
              <li><Link onClick={()=>autoScroll("sobre")} to="">Agência</Link></li>
              <li><p className="p-link" onClick={()=>autoScroll("contato")}>Contato</p></li>
            </ul>
            <ul>
              <h4>Contato</h4>
              <div className="contato-info-single contato-info-single-local">
                <FaMapMarkerAlt/>
                <p>Prestamos nossos serviços
                em todo Brasil</p>
              </div>
              <div className="contato-info-single">
                <a href="tel:+556496459874"><FaPhoneAlt/> (64) 9645-9874</a>
              </div>
              <div className="contato-info-single">
                <a href="mailto:contato@jfcode.com.br"><FaEnvelope/> contato@jfcode.com.br</a>
              </div>
            </ul>
          </nav>

          <small>© Copyright 2022. Todos os direitos reservados.</small>
        </div>
      </footer>
    );
}