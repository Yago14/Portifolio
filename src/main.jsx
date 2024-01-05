import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GorbalStyled } from './GlobalStyled/GlobalStyled.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Biografia } from './components/Biografia/Biografia.jsx'
import { Contato } from './components/Contato/Contato.jsx'
import { Projetos } from './components/Projetos/Projetos.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Biografia/>

      },
      {
        path:"contatos",
        element:<Contato/>
      },
      {
        path:"projetos",
        element: <Projetos/>
      }

    ]
    
  },

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GorbalStyled/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
