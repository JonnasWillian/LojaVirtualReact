
function Form (){
    return(
        <div className="form">
        <h2>ENTRE EM CONTATO</h2>
          <form >
            <div className="items-form">
              <input placeholder="Seu nome" type="text"/>
              <input placeholder="Seu número"type="text"/>
              <textarea placeholder="Deixe sua mensagem" className="AreaMensagem" name=""></textarea><br /><br />
              <input type="submit"/>
            </div>
          </form>
        </div>
        
    )
}

export default Form;