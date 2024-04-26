import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// importando as páginas do projeto
import Home from './components/routes/Home.jsx';
import ErrorPage from './routes/ErrorPage.jsx';


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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

