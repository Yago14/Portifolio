import { Card } from "../cards/Card" 
import "./Projetos.css"


export const Projetos = ()=>{
    return(
        <>
         <h1>Projetos</h1>
        <div className="projetos">
           
            <Card>
            <h3>Escolha seu Pokemon</h3>
                <img width="100%"
                height="200px" src="src/components/projetos/imagem/pokemon.png" alt="" />
                <p>Ulitização de componentes funcionais para consumo de API atraves dos Hooks UseState e UseEffect + aplicação de sistema de rotas SPA </p>
                <a target="_blank"href="https://pokedex-eight-amber-66.vercel.app/"><button>Ver Projeto</button></a>
            </Card>
            <Card>
            <h3>GitHub-find</h3>
                <img width="100%"  height="200px" src="src/components/projetos/imagem/github-find.png" alt="" />
                <p>Buscando dados e eventos do usuário ultizando API do github</p>
                <a target="_blank"href="https://api-do-github.vercel.app/"><button>Ver Projeto</button></a>
            </Card>
            <Card>
            <h3>Validação de E-mail</h3>
                <img width="100%" height="200px"  src="src/components/projetos/imagem/validar-email.png" alt="" />
                <p>Validação de E-mail ultilizanodo manipulação de formulário com o DOM + aplicação de HTML semântico e estilação com CSS  </p>
                <a target="_blank"href="https://validar-email.vercel.app/"><button>Ver Projeto</button></a>
            </Card>
            <Card>
            <h3>Site Trailer do Filme Mario Bross</h3>
                <img width="100%"  height="200px" src="src/components/projetos/imagem/trailer-mario-bross.png" alt="" />
                <p>Site anúncio do filme Mario bross criado com manipulação de Elemento DOM, Ultilizando HTML-5, CSS-3 e JavaScript</p>
                <a target="_blank"href="https://projeto-mario-bross.vercel.app/"><button>Ver Projeto</button></a>
            </Card>
            <Card>
            <h3>Landing-page</h3>
                <img width="100%"  height="200px" src="src/components/projetos/imagem/hudlle.png" alt="" />
                <p>Landing-page criada com HTML-5 e CSS-3 uiltizando flex-box e Media-Query para disply responsivo </p>
                <a target="_blank"href="https://huddle-weld-rho.vercel.app/"><button>Ver Projeto</button></a>
            </Card>
        </div>
        </>
    )
}