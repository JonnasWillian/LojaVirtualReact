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

function Main() {
    return ( 
      <div>
  
        <Menu/>

        <h1>Conheça os nossos Serviços</h1>
  
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
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os">COMPRAR</a></button>
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
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os">COMPRAR</a></button>
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
            <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os">COMPRAR</a></button>
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
          <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os">COMPRAR</a></button>
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
          <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os">COMPRAR</a></button>
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
          <button><a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20os%20seus%20servi%C3%A7os">COMPRAR</a></button>
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