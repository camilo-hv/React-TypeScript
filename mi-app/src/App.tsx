import { ContadorRed } from "./todo/components/ContadorRed";
import { Counter } from "./todo/components/Counter";
import { Formulario } from "./todo/components/Formulario";
import { Formulario2 } from "./todo/components/Formulario2";
import { TimerPadre } from "./todo/components/TimerPadre";
import { Usuario } from "./todo/components/Usuario";
import { Todo } from "./todo/Todo";
import './App.css';

function App() {
  return (
    // <div>
    //   <h1>React + TypeScript</h1>
    //   <hr />

    //   <Counter/>
    //   <hr />

    //   <Usuario/>
    //   <hr />

    //   <TimerPadre />
    //   <hr />

    //   <ContadorRed/>
    //   <hr />

    //   <Formulario/>
    //   <hr />

    //   <Formulario2/>
    //   <hr />      

    // </div>

    <div className="App App-header">
      <Todo/>
    </div>
  );
}

export default App;
