
import './App.css';
import Wathsapp from './conteudos/Wathsapp';
import Rodape from './conteudos/Rodape';
import logo from  "./img/perfil.jpg" 
import Menu from './conteudos/menu';
import Routes from './routes';
function App() {
  return (
    <div>

      <Menu/>

      <div className="App">

        <div className="presentation">
          <section className="about" id="about">
            <div className="content">
              <br/>
              <div className="about-content">
                <div className="left">
                  <img src= {logo}  alt="Logo" width="100%" height="100%" />
                </div>
                <div className="right">
                  <h3>Então, Quem sou eu ?</h3>
                  <p>
                    Bem, meu nome é Jonnas Willian, atualmente tenho 22 anos e estou no 6º semestre de ciência da computação,
                    realizo aplicações Web, criação de site, criação de sistemas e Aplicativos, tenho habilidades em C#, Java, JavaScript,
                    ReactJS, React-Native e Expo. <br></br>
                    Além disso realizo trabalhos com SEO, Copy, integrações de Api, Conexão com GoogleAds e crio anúncios convidativos e diretos
                    para o GoogleAds
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

      <div className="funcoes">

        <div className="central">
  
        <div className="areaImagem">
          <img className="img" src="https://loupbr.com/wp-content/uploads/2017/12/imagem-criacao-de-sites-600x450px.png" alt="Site"/>
        </div>
  
        <div className="areaTexto">
          <h3>Criação De Sites</h3>
            <p> Desenvolvo Sites para divulgação pessoal ou venda de produtos, estes sites podem te ajudar a alcançar novos clientes,
                otimizar suas vendas, possui disponibilidade 7/24h, além dele ser indexado ao Google, maior plataforma de pesquisa do mundo,
                podendo ser divulgado e achado facilmente por atuais e novos clientes.<br/>
                O site inclui organização de SEO, configuração de GoogleAds, boa nota no pagespeed, configuração de pagamento dentro da página,
              integrações a rede sociais e formulários interativos.
            &nbsp;</p>
          </div>

        </div>

        <div className="central1">
  
        <div className="areaTexto">
          <h3>Criação De Aplicativos</h3>
            <p> Desenvolvo criações de aplicativos que exigem conhecimentos especializados em design de interface e desenvolvimento de software, utilizando tecnologia diferente da usualmente voltada à criação de sites. Cada sistema operacional como o IOS, Android e Windows possui as suas particularidades além da tradicional plataforma Web.

                Com esses conhecimentos, criar um aplicativo que tem o objetivo de fidelizar clientes facilitando a realização de novos negócios por meio do celular, não é considerada uma tarefa difícil para eu conseguir realizar.

                Elaboro projetos que conseguem reunir dados relevantes sobre variados nichos da sociedade, alavancando a audiência dos aplicativos e se tornando fortes agentes necessários.

                As minhas criações de aplicativos para as empresas proporcionam aos usuários a necessidade e o desejo de utilizá-lo de forma recorrente.
            &nbsp;</p>
          </div>

          <div className="areaImagem">
            <img className="img" src="https://image.freepik.com/vetores-gratis/web-design-producao-e-manutencao-de-sites-grafico-web-design-de-interface-site-responsivo-icone-colorido-de-engenharia-e-desenvolvimento-de-software_335657-2699.jpg" alt="Desenvolver Aplicativo" />
          </div>

        </div>

        <div className="central">
  
          <div className="areaImagem">
             <img className="img" src="https://loupbr.com/wp-content/uploads/2017/12/hospedagem-de-sites.png" alt="Criar Aplicação De Negócio"/>
          </div>

        <div className="areaTexto">
          <h3>Criação De Aplicações De Negócios</h3>
           <p> Desenvolvo aplicações e programas para ajudar e automatizar funções em sua empresa, sistemas de uso,
              ferramentas para cálculo de estoque, controle de ponto, cálculadoras de preços e taxas, 
              além de ferramentas que auxiliem o desenvolvimento da empresa
          &nbsp;</p>
        </div>

  </div>

      </div>

      <section className="about" id="about">
      <div className="content">
          <div className="card-wrapper">
            <div className="card-item">
              <img src="https://t4.ftcdn.net/jpg/01/99/30/85/240_F_199308539_uNyXqfehxKppMaVkkNJVCHxavZlldxZN.jpg" alt="Doces" width="20%" height="50%"/>
              <div className="card-content">
                <h3>Configuração De Hospedagem</h3>
                <p>

                </p>
              </div>
            </div>
            <div className="card-item">
              <img src="https://t4.ftcdn.net/jpg/01/99/30/85/240_F_199308539_uNyXqfehxKppMaVkkNJVCHxavZlldxZN.jpg" alt="Doces" width="20%" height="50%"/>
              <div className="card-content">
                <h3>Configuração De Email Profissional</h3>
                <p>

                </p>
              </div>
            </div>
            <div className="card-item">
              <img src="https://t4.ftcdn.net/jpg/01/99/30/85/240_F_199308539_uNyXqfehxKppMaVkkNJVCHxavZlldxZN.jpg" alt="Doces" width="20%" height="50%"/>
              <div className="card-content">
                <h3>Criação De Formulário Interativo</h3>
                <p>

                </p>
              </div>
            </div>
            <div className="card-item">
              <img src="https://cdn-icons-png.flaticon.com/128/4768/4768825.png" alt="Doces" width="20%" height="30%"/>
              <div className="card-content">
                <h3>Desenvolvimento De Sites</h3>
                <p>

                </p>
              </div>
            </div>
            <div className="card-item">
              <img src="https://cdn-icons-png.flaticon.com/128/4768/4768825.png" alt="Caixa Media De Brigadeiros" width="20%" height="30%" />
              <div className="card-content">
                <h3>Desenvolvimento De Aplicativos</h3>
                <p>
                  
                </p>
              </div>
            </div>
            <div className="card-item">
              <img src="https://cdn-icons-png.flaticon.com/128/4768/4768825.png" alt="Mini Caixa de brigadeiros" width="20%" height="30%"/>
              <div className="card-content">
                <h3>Criação De Aplicações</h3>
                <p>
                  
                </p>
              </div>
            </div>
            <div className="card-item">
              <img src="https://cdn-icons-png.flaticon.com/128/2201/2201235.png" alt="Kit Surpresa" width="20%" height="30%"/>
              <div className="card-content">
                <h3>Ajustes De CEO</h3>
                <p>
                  
                </p>
              </div>
            </div>
            <div className="card-item">
              <img src="https://cdn-icons-png.flaticon.com/128/2201/2201235.png" alt="Bolo de Brigadeiro" width="20%" height="30%" />
              <div className="card-content">
                <h3>Ajuste De Copy</h3>
                <p>
                  
                </p>
              </div>
            </div>
            <div className="card-item">
              <img src="https://cdn-icons-png.flaticon.com/128/2201/2201235.png" alt="Mini Bolo"  width="20%" height="30%"/>
              <div className="card-content">
                <h3>Configuração De GoogleAds</h3>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Wathsapp/>

      <Rodape/>

    </div>
  );
  
}

export default App;
