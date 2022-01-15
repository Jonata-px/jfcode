import BackSobre from '../public/images/segundo-background-index.png';
export default function AboutUs() {

    return (
      <section className="sobre">
        <div id="sobre" className="container">
          <img src={BackSobre} alt="" className="paralax-right"/>
          <article className="sobre-wrap paralax-left">
            <h1>Quem somos?</h1>
            <p>Somos uma startup com experiência em programação,
            consultoria de marketing, UI/UX design, com foco em ajudar
            você e sua empresa ter a melhor experiência com seu negócio
            na internet.</p>
            <p>Ajudamos as empresas automatizar e otimizar seus processos
            através de nossos serviços. Utilizamos as melhores
            tecnologias do mercado, interfaces que aumentarão a
            produtividade, integrações com gateways de pagamento e
            outras APIs. E também, você vai aprender a alavancar seu negócio.
            <em> E muito mais!</em></p>
          </article>
        </div>
      </section>
    );
}