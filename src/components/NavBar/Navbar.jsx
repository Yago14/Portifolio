import { Link } from "react-router-dom"
import "../../variaves/variaves.css"
import "./Nav.css"

export const NavBar = ()=>{
    return(
      <nav className="navBar">

        <Link><h1>YT</h1></Link>
        <Link to="/">Sobre mim</Link>
        <Link to="/projetos"> Projetos</Link>
        <Link to="/contatos">Contatos</Link>

      </nav>
    )
}