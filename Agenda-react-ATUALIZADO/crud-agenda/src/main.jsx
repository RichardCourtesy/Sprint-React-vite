import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// importando as páginas do projeto
import Home from './routes/Home.jsx';
import Add_contact from './routes/Add-contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Objetivo from './routes/Objetivo.jsx';
import DEV from './routes/Dev.jsx';
import Edit_contact from './routes/Edit-contact.jsx';

// configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// lugar onde criamos as rotas das páginas
const router = createBrowserRouter([
  {
    // path = caminho
    path: "/",
    // o maior na hierarquia. importa o arquivo que nunca muda, ou seja, ele trabalha com o OutLet que está no app.jsx
    element: <App />,
    // errorElement serve para dizer o que vai exibir quando for colocado uma rota inválida
    errorElement: <ErrorPage />,
    // chindren são as rotas de páginas que mudam, estão abaixo do App na hierarquia
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add_contact",
        element: <Add_contact />
      },
      {
        path: "/DEV",
        element: <DEV />
      },
      {
        path: "/Objetivo",
        element: <Objetivo />
      },
      // nested routes - para pag de edit e vizualizar
      {
        // faz com que a página primeiro seja composta pelo Edit-contact.jsx e depois o id do contact
        path: "/Edit-contact/:id",
        element: <Edit_contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

