
import instagram from  ".././img/instagram.png" 
import github from  ".././img/github.png" 
import whatsap from  ".././img/whatsapp.png" 

function Rodape (){
    return(
        <footer>
      <div className="maiin">
        <div className="content footer-links">
          <div className="footer-company">
            <h4>Companhia</h4>
            <h6>jonnywf</h6>
            <h6>Desenvolvimento de Aplicações e Sistema</h6>
          </div>

         
          <div className="footer-social">
            <h4>Redes sociais</h4>
            <div className="social-icons">
              <a rel="noreferrer" href="https://www.instagram.com/jonnywf/" target="_blank"><img src={instagram} alt="Instagram"/></a>
              <a rel="noreferrer" href="https://github.com/JonnasWillian" target="_blank"><img src= {github} alt="Facebook" /></a>
              <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20vim%20pela%20sua%20p%C3%A1gina%20web" target="_blank"><img src={whatsap} alt="Wathsapp" /></a>
              
            </div>
          </div>
          <div className="footer-contact">
            <h4>Contato</h4>
            <h6>+55 71 99969-7820</h6>
            <h6>jonnasnogueira2@gmail.com</h6>
          </div>
        </div>
      </div>
      <div className="last">JONNYWF 2020 - Criação de Site, Aplicativos e Aplicações</div>
    </footer>

    )
}

export default Rodape;