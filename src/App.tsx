import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorReducer } from "./components/ContadorReducer";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <h1>React.js + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <Usuario />
      <hr />
      <h2>useEffect - useRef</h2>
      <TimerPadre/>
      <hr />
      <h2>useReducer</h2>
      <ContadorReducer />
      <hr />
      <h2>Custom Hooks</h2>
      <Formulario />
    </>
  );
}

export default App;
