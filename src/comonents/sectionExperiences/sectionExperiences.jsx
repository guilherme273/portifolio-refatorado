import "./sectionExperiencesStyle.css";
function sectionExperiences() {
  return (
    <>
      <div className="cent">
        <section className="section-timeline">
          <div className="time-left">
            <h2>Formação</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-content">
                  <h3>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h3>
                  <p className="timeline-date">2022 - 2024</p>
                  <p className="timeline-institution">
                    UNIP - Universidade Paulista
                  </p>
                  <p className="timeline-description">
                    Desde 2022, venho me dedicando a explorar os fundamentos e
                    as práticas essenciais para o desenvolvimento de sistemas
                    eficientes e inovadores. Focado no desenvolvendo de
                    habilidades técnicas sólidas, bem como a capacidade de
                    analisar problemas complexos e propor soluções criativas.
                  </p>
                </div>
              </div>
            </div>
            <h2>Experiências Profissionais</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-content">
                  <h3>Analista e Desenvolvedor</h3>
                  <p className="timeline-date">Set 2023 – Out 2023</p>
                  <p className="timeline-institution">Each Tecnologia</p>
                  <p className="timeline-description">
                    Desenvolvimento de um sistema de vouchers para a Galeteria
                    Beira Lago. A plataforma abrangeu diversas funcionalidades,
                    incluindo pagamento online, envio de e-mails, geração de QR
                    code e validação através de leitores PDV. Utilizando a
                    linguagem JavaScript, com backend implementado em Node.js, e
                    banco de dados SQL para garantir a eficiência e segurança do
                    sistema. Integração a API de pagamentos do Mercado Pago para
                    oferecer aos clientes uma experiência de pagamento
                    simplificada e segura. Durante o projeto, trabalhei em
                    estreita parceria com meu sócio, contribuindo para todas as
                    etapas do desenvolvimento, desde a concepção do problema até
                    a implementação e o teste das funcionalidades. Garantindo a
                    entrega de uma solução robusta e funcional, atendendo às
                    necessidades específicas do cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="time-rigth">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-content">
                  <h3>Desenvolvedor Web</h3>
                  <p className="timeline-date">Nov 2023 - Mar 2024</p>
                  <p className="timeline-institution">
                    BBTS - BB TECNOLOGIA E SERVIÇOS
                  </p>
                  <p className="timeline-description">
                    Estagiário Desenvolvimento em equipe de uma ferramenta Web
                    utilizando o framework PHP, Yii2, MySQL, Bootstrap.
                    Utilização de ambiente de desenvolvimento com práticas de
                    DevOps com GIT e Docker, para garantir uma integração
                    contínua e eficiente. Auxílio na elaboração de documentos
                    digitais para documentar o processo de desenvolvimento e
                    facilitar a colaboração da equipe. Integração da ferramenta
                    ao ERP e Supravizio através de APIs, otimizando as
                    atividades administrativas dos colaboradores e promovendo
                    maior agilidade nas operações.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-content">
                  <h3>Analista e Desenvolvedor</h3>
                  <p className="timeline-date">Jun 2024 - Jul 2024</p>
                  <p className="timeline-institution">Each Tecnologia</p>
                  <p className="timeline-description">
                    Nesse projeto, foi desenvolvido um robô de automação para um
                    escritório de advocacia, projetado para otimizar a gestão de
                    documentos e atendimentos. O robô utiliza uma lista de nomes
                    armazenada no banco de dados, acessa um site governamental e
                    realiza buscas individuais para cada nome da lista.
                    Dependendo do status encontrado para cada nome no sistema
                    governamental, o robô baixa automaticamente um PDF
                    correspondente, extrai informações específicas e salva essas
                    informações no banco de dados. Após esse processo, o PDF é
                    excluído para economizar memória. Além dessas
                    funcionalidades, o sistema também oferece uma solução
                    completa de gestão de atendimentos, permitindo o registro
                    detalhado de todas as interações e atividades necessárias.
                    Esse projeto não apenas aumentou a eficiência operacional do
                    escritório de advocacia, mas também garantiu uma maior
                    precisão e organização na gestão de documentos e
                    atendimentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default sectionExperiences;
