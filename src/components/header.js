import {Link} from 'react-router-dom';
import {FaWhatsapp} from 'react-icons/fa';
import {CgMenu} from 'react-icons/cg';
import Logo from '../public/Icons/jf2.png';
import {useEffect} from 'react';

export default function Header() {

  var body = document.querySelector('html');

  const openMenu = (resize = false)=>{
    let menu = document.querySelector("ul.menu");
    let menuIco = document.querySelector(".menu-ico svg");
    if(menu.style.height !== '160px'){
      menu.style.height = '160px';
      // menu.style.paddingTop = '20px';
      menuIco.style.color = '#576ef2';
    }else if(!resize){
      menu.style.height = '0';
      // menu.style.paddingTop = '0';
      menuIco.style.color = '#0c2091';
    }
  }

  const autoScroll = (to)=>{
    let timer = setInterval(()=>{
      let el = document.getElementById(to); 
      if(el !== undefined){
        window.scrollTo(0,el.offsetTop);
        clearInterval(timer);
      }
    })
  }

  window.onresize = ()=>{
    if(window.innerWidth > '768')
      openMenu(true);
  }

  const getScroll = ()=>{
    window.addEventListener('scroll',()=>{
      var paralaxB = document.querySelectorAll('.paralax');
      var paralaxL = document.querySelectorAll('.paralax-left');
      var paralaxR = document.querySelectorAll('.paralax-right');
      var alturaJanela = body.offsetHeight;
      var alturaScroll = body.scrollTop;
      if(typeof paralaxB === 'object'){
        paralaxB.forEach(async(val,index)=>{
          var alturaDiv = paralaxB[index].offsetHeight;
          var distanciaTopo = paralaxB[index].offsetTop;
          if(parseInt(alturaScroll + alturaJanela) >= distanciaTopo && parseInt(alturaScroll) < (distanciaTopo + alturaDiv)){
            let time = ""+index+10;
            setTimeout(()=>{
              paralaxB[index].style.opacity = 1;
              paralaxB[index].style.bottom = 0;
            },time);
          }
        })
      }
      if(typeof paralaxL === 'object'){
        paralaxL.forEach((val,index)=>{
          var alturaDiv = paralaxL[index].offsetHeight;
          var distanciaTopo = paralaxL[index].offsetTop;
          if(parseInt(alturaScroll + alturaJanela) >= distanciaTopo && parseInt(alturaScroll) < (distanciaTopo + alturaDiv)){
            paralaxL[index].style.opacity = 1;
            paralaxL[index].style.left = 0;
          }
        })
      }
      if(typeof paralaxR === 'object'){
        paralaxR.forEach((val,index)=>{
          var alturaDiv = paralaxR[index].offsetHeight;
          var distanciaTopo = paralaxR[index].offsetTop;
          if(parseInt(alturaScroll + alturaJanela) >= distanciaTopo && parseInt(alturaScroll) < (distanciaTopo + alturaDiv)){
            paralaxR[index].style.opacity = 1;
            paralaxR[index].style.right = 0;
          }
        })
      }

    })
  }



  useEffect(()=>{
    getScroll();
    body.scrollTop = body.scrollTop + 1;
  },[])

    return (
      <header>
        <div className="container">
          <nav>
            <div className="menu-ico"><CgMenu onClick={()=>openMenu()}/></div>
            <div className="logo">
              <Link to="/"><img src={Logo} title="jfcode" alt="logo"/></Link>
            </div>
            <ul className="menu">
              <li><Link to="/">Início</Link></li>
              <li><Link onClick={()=>autoScroll('technologies')} to="">Soluções</Link></li>
              <li><Link onClick={()=>autoScroll("servicos")} to="">Serviços</Link></li>
              <li><p className="p-link" onClick={()=>autoScroll("contato")} id="header-contato">Contato</p></li>
            </ul>
            <div className="whatsApp">
              <a href="https://api.whatsapp.com/send?phone=556496459874&text=Olá, gostaria de fazer um orçamento" title="WhatsApp" ><FaWhatsapp /> WhatsApp</a>
            </div>
          </nav>
        </div>
      </header>
    );
  }
  
  