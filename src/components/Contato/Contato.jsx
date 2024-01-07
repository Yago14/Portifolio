import { Form } from "./formulario/Form"
import "./Contato.css"
import Whatsapp from "./icon/whatsapp.png"
import Curriculo from "./Curriculo/curricu.pdf"

export const Contato = () => {
    return (
        <>
            <h1>Contatos</h1>
            <div className="contato">
                <div className="telefone">
                    <h3>Telefone de contato</h3>
                   <img height="30px" src={Whatsapp} alt="" /> <p>(83) 982171484</p>

                   <a target="_blank" href={Curriculo}><button>Vizualizar Currículo</button></a>
                </div>
                <Form />
            </div>
        </>

    )
}