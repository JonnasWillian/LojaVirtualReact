import React from "react";
import Menu from '../../conteudos/menu';
import Wathsapp from '../../conteudos/Wathsapp';
import Rodape from '../../conteudos/Rodape';
import '../../App.css';
import './index.css';
import Form from "../../conteudos/Form";
import imgWathsapp from '../../img/whatsapp.png';
import imgInstagram from '../../img/instagram.png';
import imgGithub from '../../img/github.png';
import imgemail from '../../img/Email2.png';
import imgLinkedin from '../../img/linkedin.png';
import imgLocal from '../../img/localizacao.png';
 
export const contato = () => {
    return(
        
        <div>

            <Menu/>

            <h1>Entre em contato conosco</h1>

            <div className="Contato">

                <table>

                    <tr>
                        <td><img src={imgWathsapp} alt="Telefone" /></td>
                        <td><img src={imgInstagram} alt="Instagram" /></td>
                    </tr>
                    <tr>
                        <td>(71)99969-7820</td>
                        <td>Jonnywf</td>
                    </tr>

                    <br/><br/>

                    <tr>
                        <td><img src={imgemail} alt="Email" /></td>
                        <td><img src={imgGithub} alt="Github" /></td>
                    </tr>
                    <tr>
                        <td>jonnasnogueira2@gmail.com</td>
                        <td>Jonnas Willian</td>
                    </tr>

                    <br /><br />

                    <tr>
                        <td><img src={imgLinkedin} alt="Linkedin" /></td>
                        <td><img src={imgLocal} alt="Localização" /></td>
                    </tr>

                    <tr>
                        <td>Jonnas Willian</td>
                        <td>Salvador</td>
                    </tr>

                </table>

            </div>

            <Form/>

            <Wathsapp/>

            <Rodape/>

        </div>

    );
}

export default contato;