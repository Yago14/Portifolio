
import "./Form.css"

export const Form =()=>{
    return(
      
          
        <form className="form" action="https://formsubmit.co/ggbravier@gmail.com"method="POST" > 
        <h3>Deixe seu feedback</h3>
        <input type="text" name="nome" placeholder="Digite seu Nome" required/>
        <input type="email" name="email" placeholder="Digite seu e-mail" required />

        <textarea name="messege"  cols="30" rows="10" placeholder="Deixe sua menssagem" required></textarea>

        <button type="submit">Enviar</button>

        <input type="hidden" name="_subject" value="Novo Contato." />
       
        <input type="hidden" name="_captcha" value="false" />

        </form>
        
    )
}