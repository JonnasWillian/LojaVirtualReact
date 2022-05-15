
import whatsap from  ".././img/whatsapp.png" 
function Wathsapp (){
    return(
    <a className="whatsapp-link"  rel="noreferrer"  href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20vim%20pela%20sua%20p%C3%A1gina" target="_blank">
      <img src={whatsap} alt='Imagem do wathsapp'/>
    </a>
    )
}

export default Wathsapp;