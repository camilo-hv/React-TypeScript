import { ContadorRed } from "./Components/ContadorRed";
import { Counter } from "./Components/Counter";
import { TimerPadre } from "./Components/TimerPadre";
import { Usuario } from "./Components/Usuario";

function App() {
  return (
    <div>
      <h1>React + TypeScript</h1>
      <hr />

      <Counter/>
      <hr />

      <Usuario/>
      <hr />

      <TimerPadre />
      <hr />

      <ContadorRed/>
      <hr />

    </div>
  );
}

export default App;
