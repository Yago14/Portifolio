import './Biografia.css'
import { Card } from '../cards/Card'
import  iconLikedin from "./icons/linkedin.png"
import  iconGithub from "./icons/github.png"
import  iconEmail from "./icons/o-email.png"

import  iconHtml from "./icons/html.png"
import  iconGit from "./icons/git.png"
import  iconCss from "./icons/css-3.png"
import  iconJs from "./icons/script-java.png"
import  iconReact from "./icons/biblioteca.png"



export const Biografia = () => {
    return (
        <>
        <div className="biografia">
            <div className="foto-perfil">

            </div>
            <div className="descricacao">

                <h2>Desenvolvedor Front-end</h2>

                <p>Desenvolvedor Front-end | React | TypeScript | HTML | CSS | JavaScript | Bootstrap | Git | Github</p>
                <p>Olá me chamo Yago Thierrir, tenho 23 anos. Estou procurando emprego na área de desenvolvimento Front-end, onde eu possa colocar minhas habilidades e competência em prática e evoluir progressivamente na minha carreira como desenvolvedor web.</p>

             <div className="icons">

                <a target="blank" href="https://www.linkedin.com/in/yago-thierrir-836944224/"> <img width="45px" height="45px" src={iconLikedin}alt="icon linkedin" /></a>

                <a target="_blank" href="https://github.com/Yago14"> <img width="45px" height="45px" src={iconGithub} alt="icon do github" /></a>

                <a target="blank" href="#"> <img width="45px" height="45px" src={iconEmail} alt="icon do e-mil" /></a>

            </div>
            </div>
          


        </div>
        <h1 id='tituloTecnologia'>Tecnologias</h1>
        <div className="tecnologia">
           
          <Card>
            <div>
                <h3>HTML-5</h3>
                <img height="100px" width="100px" src={iconHtml} alt=" icon html" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
                <button>Saiba mais</button>
            </div>
          </Card>
          <Card>
            <div>
                <h3>CSS-3</h3>
                  <img height="100px" width="100px" src={iconCss} alt=" icon html" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
                <button>Saiba mais</button>
            </div>
          </Card>
          <Card>
            <div>
            <h3>JavaScript</h3>
            <img height="100px" width="100px" src={iconJs} alt=" icon html" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
            <button>Saiba mais</button>
            </div>
          </Card>
          <Card>
            <div>
                <h3>React</h3>
                <img height="100px" width="100px" src={iconReact}alt=" icon html" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
                <button>Saiba mais</button>
            </div>
          </Card>
          <Card>
            <div>
                <h3>Git</h3>
                <img height="100px" width="100px" src={iconGit} alt=" icon html" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
                <button>Saiba mais</button>
            </div>
          </Card>
        </div>
        </>
        
    )
}
