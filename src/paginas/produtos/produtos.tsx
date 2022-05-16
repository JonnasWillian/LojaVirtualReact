import React from "react";
import Wathsapp from '../../conteudos/Wathsapp';
import Rodape from '../../conteudos/Rodape';
import Menu from '../../conteudos/menu';
import '../../App.css';
import './index.css';
import aplicativo from '../../img/produtos/Aplicativo.jpg';
import landpage from '../../img/produtos/Landpage.jpg';
import nft from '../../img/produtos/NFT.jpg';
import sistemas from '../../img/produtos/Sistemas.jpg';
import site from '../../img/produtos/Site.jpg';
import suporte from '../../img/produtos/suporte.jpg';
import catalogo from '../../img/servicos/catalogo.png';
import consultoria from '../../img/servicos/consultoria.png';
import desenvolvimento_aplicacao from '../../img/servicos/desenvolvimento-aplicacao.png';
import desenvolvimento_de_aplicativos from '../../img/servicos/desenvolvimento-de-aplicativos.png';
import desenvolvimento_sistemas from '../../img/servicos/desenvolvimento-sistema.png';
import formulario from '../../img/servicos/formulario.png';
import googleAds from '../../img/servicos/googleAds.png';
import home from '../../img/servicos/home.png';
import otimizacao from '../../img/servicos/otimizacao.png';
import pagamento from '../../img/servicos/pagamento.png';
import seo from '../../img/servicos/seo.png';
import suportee from '../../img/servicos/suporte.png';

function Main() {
    return ( 
      <div>
  
        <Menu/>

        <div className="ServiçosEmGeral">
            <div className="servicos" id="servicos">

            <h2>Pacotes de serviço</h2>

            <section className="catalog" id="catalog">
                <div className="content">
                <div className="title-wrapper-catalog">
                    
                </div>

                <div className="card-wrapper">
                    <div className="card-item">
                    <img src={home} alt="Dominio e Hospedagem"/>
                    <div className="card-content">
                        <h3>Dominio e Hospedagem</h3>
                        <p>
                        Realizamos a configuração do domínio e da hospedagem da aplicação, garantindo que a mesma 
                            continue ativa e funcionando corretamente.
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={seo} alt="Ajuste de Coppy e SEO" />
                    <div className="card-content">
                        <h3>Ajuste de Coppy e SEO</h3>
                        <p>
                        Realizamos a configuração das sua coppy para seus clientes auxiliando no modo de venda 
                            e também ajusto o CEO da aplicação para que seja facilmente anexada no google e 
                            apareça mais em pesquisas na internet.
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={googleAds} alt="GoogleAds" />
                    <div className="card-content">
                        <h3>GoogleAds</h3>
                        <p>
                        Realizamos a configuração de divulgação via GoogleAds, tanto as configurações do 
                            google, como configurações de redes sociais (como facebook, instagram, etc), 
                            para entregar sua aplicação para os clientes e pessoas que tenham interesse no 
                            seu nicho e produtos.
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={catalogo} alt="Catalogo De Produtos" />
                    <div className="card-content">
                        <h3>Catalogo De Produtos</h3>
                        <p>
                            Criação de um catalogo de produtos intuitivo e interativo para que seus 
                            clientes possam selecionar e visualizar os itens/serviços de compra para serem 
                            adquiridos.
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={pagamento} alt="Integração De Pagamento" />
                    <div className="card-content">
                        <h3>Integração De Pagamento</h3>
                        <p>
                            Configuração e automatização da venda para maquininhas, cartões, boletos e 
                            plataformas (paypal, mercado pago, etc ).
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={formulario} alt="Formulário" />
                    <div className="card-content">
                        <h3>Formulário</h3>
                        <p>
                            Formulário de envio ou pedidos para receber feedback, pedidos ou contatos dos 
                            seu clientes, para assim ter uma comunicação melhor com o consumidor.
                        </p>
                    </div>

                    </div>
                    <div className="card-item">
                    <img src={desenvolvimento_aplicacao} alt="Desenvolvimento De Aplicações" />
                    <div className="card-content">
                        <h3>Desenvolvimento De Aplicações</h3>
                        <p>
                            Criação de aplicações e soluções próprias para negócios, aplicações auxiliares 
                            para administração, controle de estoques, agendas e funções empresariais.
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={desenvolvimento_sistemas} alt="Desenvolvimento De Sistemas" />
                    <div className="card-content">
                        <h3>Desenvolvimento De Sistemas</h3>
                        <p>
                            Criação de sistemas pessoais ou empresarias para gestão de pessoas, gestão de 
                            processos, controles administrativos e funções relativas a cadastro em banco de 
                            dados e resolução de problemas pré-programados.
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={desenvolvimento_de_aplicativos} alt="Aplicativos Mobile" />
                    <div className="card-content">
                        <h3>Aplicativos Mobile</h3>
                        <p>
                            Desenvolvimento de aplicações para celulares e tablets, com funções e atribuições
                            de acordo com pedido do cliente. Facilitando o acesso do usuário através do 
                            próprio celular.
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={otimizacao} alt="Otimização de aplicações" />
                    <div className="card-content">
                        <h3>Otimização de aplicações</h3>
                        <p>
                        Realizamos otimização em suas aplicações para que elas possam rodar de uma maneira 
                            mais rápida e não consuma tanto processamento em sua execução
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={consultoria} alt="Consultoria e analises" />
                    <div className="card-content">
                        <h3>Consultoria e analises</h3>
                        <p>
                            Realizamos a analise e consultoria do seu negócio e serviços de forma que 
                            podemos auxiliar no crescimento e desenvolvimento do seu negócio para que 
                            cresça de forma mais segura
                        </p>
                    </div>
                    </div>

                    <div className="card-item">
                    <img src={suportee} alt="Suporte de serviços"/>
                    <div className="card-content">
                        <h3>Suporte de serviços</h3>
                        <p>
                            Realizamos suporte para manutenção e cuidado da sua aplicação, além de inspencionar 
                            a segurança do sistema e verificação da vida util da ferramenta
                        </p>
                    </div>
                    </div>

                </div>

                </div>

            </section>

            </div>
        </div>

        <h1>Conheça os nossos Serviços Especiais</h1>
  
        <div className="Produtos">

            <div className="produtos" id="produtos">

        <div className="produto">

        <div className="cont">
            <h2>LandPage</h2>
            <img src={landpage} alt="LandPage"/>
            <br/><br/>
            <span> <p>R$: 700,00</p> </span>
        </div>

        <p>Uma página de apresentação de produtos, serviços, lançamento ou serviços e ponto de 
            conversão de clientes
        </p>

        <div className="venda">
            <br/>
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os" target="_blank">COMPRAR</a></button>
        </div>

        </div>

        <div className="produto">

        <div className="cont">
            <h2>LandPage</h2>
            <img src={site} alt="Site Completo"/>
            <br/><br/>
            <span> <p>R$: 1.300,00</p> </span>
        </div>

        <p>Um site para venda e automatização do seu produtos e serviços, um local para que os 
            clientes possam apreciar e visualizar os itens e produtos para compra e ponto de conexão 
            com clientes
        </p>

        <div className="venda">
            <br/>
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os" target="_blank">COMPRAR</a></button>
        </div>
        
        </div>

        <div className="produto">

        <div className="cont">
            <h2>LandPage</h2>
            <img src={aplicativo} alt="Aplicativo"/>
            <br/><br/>
            <span> <p>R$: 2.000,00</p> </span>
        </div>

        <p>Uma página de apresentação de produtos, serviços, lançamento ou serviços e ponto 
            de conversão de clientes
        </p>

        <div className="venda">
            <br/>
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os" target="_blank">COMPRAR</a></button>
        </div>
        
        </div>

        
        
            </div>

            <div className="produtos-div">

        <div className="produto">

        <div className="cont">
            <h2>Sistemas</h2>
            <img src={sistemas} alt="Sistemas"/>
            <br/><br/>
            <span> <p>R$: 5.000,00</p> </span>
        </div>

        <p>Sistemas para funcionalidade e gerenciamento da sua empresa, ferramentas para criação e 
            cuidado funcionais da área organizacional como:
            <br/>
            <br/>
            – Controle de usuários
            <br/>
            – Controle de produtos logísticos
            <br/>
            – Sistema De Folha De Ponto
            <br/>
            – Entre outras aplicações
        </p>

        <div className="venda">
            <br/>
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os" target="_blank">COMPRAR</a></button>
        </div>
        
        </div>

        <div className="produto">

        <div className="cont">
            <h2>Suporte</h2>
            <img src={suporte} alt="Suporte"/>
            <br/><br/>
            <span> <p>R$: 500,00</p> </span>
        </div>

        <p>Suporte para sistemas e aplicações, afim de auxliiar em sua manutenção, otimização,
            segurança e auxilio sobre a utilização da ferramenta
        </p>

        <div className="venda">
            <br/>
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os" target="_blank">COMPRAR</a></button>
        </div>
        
        </div>

        <div className="produto">

        <div className="cont">
            <h2>Criação de coleção NFT</h2>
            <img src={nft} alt="NFT"/>
            <br/><br/>
            <span> <p>R$: 1.500,00</p> </span>
        </div>

        <p>Criação de coleção NFT, ajuda na venda, formação de portfolio, divulgação e todos 
            preparativos do inicio do projeto até o processo de venda
        </p>

        <div className="venda">
            <br/>
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os" target="_blank">COMPRAR</a></button>
        </div>
        
        </div>


            </div>

        </div>
  
        <Wathsapp/>
  
        <Rodape/>
  
      </div>

    );
    
  }
  
  export default Main;