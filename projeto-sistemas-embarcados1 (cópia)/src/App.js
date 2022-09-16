import 'bootstrap/dist/css/bootstrap.min.css'

import BotaoSucesso from './Components/BotaoSucesso/BotaoSucesso';
import BotaoDanger from './Components/BotaoDanger/BotaoDanger';

import './geral.css'

function App() {

  return (
    <div>
      <form id='parte3'>
        <h2>BOTÕES</h2>
        <BotaoSucesso ></BotaoSucesso>
        <BotaoDanger></BotaoDanger>
      </form>
    </div>
  );
}

export default App;
