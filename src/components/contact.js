import {FaMapMarkerAlt, FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import VMasker from "vanilla-masker";
import { useState } from 'react';

export default function Contact() {
  const [enviado,setEnviado] = useState(false);
  const [callback, setCallback] = useState(false);
  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [tel,setTel] = useState(null);
  const [msg,setMsg] = useState(null);

  const sendEmail = (e)=>{
    e.preventDefault();
    fetch('https://jfcoder.com.br',{
      method:'POST',
      body: JSON.stringify({
          nome:name,
          email: email,
          tel: tel,
          mensagem: msg,
          mailTo:"adm.jfcode@gmail.com"
      }),
      headers:{
          'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then((result) => {
        if(result === true){
          setEnviado(true)
          showCallback(true);
        }else{
          showCallback(false);
        }
    },
    (error) => {
      showCallback(false);
    });
          
  }

  const showCallback = (par)=>{
    setCallback(true);
    let el = document.querySelector('.callback-res');
    let res = '';
    if(par){
      res = `
      <h2 class="sucess">Enviado</h2>
      <p>Entraremos em contato o mais breve possível</p>      
      `
    }else{
      res = `
      <h2 class="error">Erro</h2>
      <p>Não foi possivel enviar no momento.<br/> use outro meio de contato por favor</p>      
      `
    }
    el.innerHTML = res;
  }

  const clearForm = ()=>{
    setCallback(false);
    if(enviado){
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('tel').value = '';
      document.getElementById('mensage').value = '';
      setEnviado(false);
    }
  }

      const maskCelular = (e)=>{
        let mask = VMasker.toPattern(e.target.value, "(99) 9 9999-9999"); // -> 999.111.111-01
        setTel(mask);
        e.target.value = mask;
      }

    return (
      <section className="contato">

        {
          callback?
          <div className="callback">
            <div className="callback-wrap">
              <div className="callback-res"></div>
              <button onClick={()=>clearForm()} className="callback-ok">Ok!</button>
            </div>
          </div>
          :
          <></>
        }
       

        <div id="contato" className="container">
          <h2>Contato</h2>
          <h1>Envie uma mensagem</h1>
          <div className="contato-wrap">
            <div className="contato-info">
            <h2>Entre em<br/>
                contato</h2>
              <div className="contato-info-single">
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
            </div>
            <form onSubmit={(e)=>sendEmail(e)}>
              <input id="name" type="text" onChange={(e)=>setName(e.target.value)} required placeholder="Nome *"/>
              <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} required placeholder="E-mail *"/>
              <input id="tel" type="text" onChange={(e)=>maskCelular(e)} required placeholder="Telefone *"/>
              <textarea id="mensage" onChange={(e)=>setMsg(e.target.value)} required placeholder="Mensagem *"></textarea>
              <small>Campo obrigatório (<span>*</span>)</small>
              <input type="submit" value="Enviar"/>
              
            </form>
          </div>
        </div>
      </section>
    );
}