import './Biografia.css'
import { Card } from '../cards/Card'


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

                <a target="blank" href="https://www.linkedin.com/in/yago-thierrir-836944224/"> <img width="45px" height="45px" src="src/components/biografia/icons/linkedin.png" alt="icon linkedin" /></a>

                <a target="blank" href="https://github.com/Yago14"> <img width="45px" height="45px" src="src/components/biografia/icons/github.png" alt="icon do github" /></a>

                <a target="blank" href="#"> <img width="45px" height="45px" src="src/components/biografia/icons/o-email.png" alt="icon do e-mil" /></a>

            </div>
            </div>
          


        </div>
        <h1 id='tituloTecnologia'>Tecnologias</h1>
        <div className="tecnologia">
           
          <Card>
            <div>
                <h3>HTML-5</h3>
                <img height="100px" width="100px" src="src/components/biografia/icons/html.png" alt=" icon html" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
                <button>Saiba mais</button>
            </div>
          </Card>
          <Card>
            <div>
                <h3>CSS-3</h3>
                <img height="100px" width="100px" src="src/components/biografia/icons/css-3.png" alt=" icon html" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
                <button>Saiba mais</button>
            </div>
          </Card>
          <Card>
            <div>
            <h3>JavaScript</h3>
            <img height="100px" width="100px" src="src/components/biografia/icons/script-java.png" alt=" icon html" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
            <button>Saiba mais</button>
            </div>
          </Card>
          <Card>
            <div>
                <h3>React</h3>
                <img height="100px" width="100px" src="src/components/biografia/icons/biblioteca.png" alt=" icon html" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
                <button>Saiba mais</button>
            </div>
          </Card>
          <Card>
            <div>
                <h3>Git</h3>
                <img height="100px" width="100px" src="src/components/biografia/icons/git.png" alt=" icon html" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fugiat nulla eveniet, ad libero molestiae ut? Quo quisquam, iste illum temporibus quasi odit modi, nostrum rerum quidem voluptatum tempore.</p>
                <button>Saiba mais</button>
            </div>
          </Card>
        </div>
        </>
        
    )
}
