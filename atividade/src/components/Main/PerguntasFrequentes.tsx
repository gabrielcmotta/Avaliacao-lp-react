function PerguntasFrequentes () {
    return(
        <div>
            <h4 id="tt-pf">Perguntas Frequentes</h4>

<div className="container-sm">

  <h6>Geral</h6>

  <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Preciso de algum computador/notbook para fazer os cursos?</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Não. Há vários notbooks de alta performace na escola disponíveis 100% do tempo para o aluno acompanhar as aulas e estudar no período em que não estiver assistindo aula.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Vou precisar faltar em uma aula. Posso repor para não perder o conteúdo?</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Sim. Se você perder alguma aula poderá assistir a gravação na sala virtual ou se preferir, repor na próxima turma, basta enviar um email para contato@protadeveloper.com.br informando sua ausência.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Minha empresa vai pagar o curso. É possível emitir o boleto e a nota fiscal em nome da empresa?</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Sim, a escola tem como gerar o boleto e a nota fiscal em nome da empresa e o certificado de conclusão sairá em seu nome.
        </div>
      </div>
    </div>
  </div>
</div>

<br/>

<div className="container-sm">

  <h6>Certificado</h6>

  <div className="accordion" id="accordionExample2">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
          <strong>Preciso ter presença mínima para receber o certificado?</strong>
        </button>
      </h2>
      <div id="collapseFour" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Sim, é exigido que você assista pelo menos 75% dos conteúdos para poder gerar seu certificado e solicitar seu o Selo Profissional.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          <strong>Vou receber meu certificado impresso ou por e-mail?</strong>
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          A Prota é amiga do meio ambiente. Somos uma escola digital e nossos certificados são digitais. Os certificados são gerados pelo portal do aluno, no formato PDF. Você pode imprimi-lo em qualquer gráfica.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          <strong>Como faço para gerar meu certificado ao final do curso?</strong>
        </button>
      </h2>
      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Basta entrar no portal do aluno, clicar no menu lateral à esquerda “certificados” e gerar seu certificado em PDF.
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default PerguntasFrequentes;