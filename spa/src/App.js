import Hello from './components/Hello'
import Contador from './components/Contador'
import ArCondicionado from './components/ArCondicionado'

function App() {
  return (
    <div>
      <Hello />
      <Contador valorMinimo={10} valorMaximo={15}></Contador>
      <ArCondicionado />
    </div>
  );
}

export default App;
