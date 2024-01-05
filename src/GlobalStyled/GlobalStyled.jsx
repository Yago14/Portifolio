import { createGlobalStyle } from "styled-components"

export const GorbalStyled = createGlobalStyle`


    *{
        magin:0;
        padding:0;
        box-sizing: border-box;
       
    }
    body,html{
        background-color:var(--cor-primaria);
        margin:0;
        color:#fff;
        width:100vw;
        heigth:100vh;

     
        
        
    }
    #root{
        width:100%;
        heigth:100vh;
        
    }
    a{
        color:#fff;
        text-transform:uppercase;
    }
    h1{
        text-align:center;
        margin: 5rem 0;
        font-weight: 400;
        color: var(--cor-areia);
        letter-spacing: 5px;
        font-weight: 400;
        text-transform:uppercase;
        width:100vw;
        
        

    }
    footer{
        text-align:center;
        letter-spacing: 2px;
        margin:0;
       
       
    }

      


`
