import './App.css'
import Header from './components/Header';

// reaproveitamento de estrutura (header e footer por exemplo)
import { Outlet } from 'react-router-dom';

function App() {
  return(
    <div className="App">
      <Header />
      {/* nesse Outlet, seria a única coisa que mudaria com o router, ou seja: */}
      {/* caso eu importe algo antes do outlet como um header, ele ficaria sempre antes do conteúdo das páginas */}
      <Outlet />
    </div>
  );
}

export default App;
