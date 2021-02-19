import Hello from './components/Hello'
import Contador from './components/Contador'

function App() {
  return (
    <div className="App">
      <Hello />
      <Contador valorMinimo={10} valorMaximo={15}></Contador>
      <Contador valorMinimo={20} valorMaximo={35}></Contador>
      <Contador valorMinimo={45} valorMaximo={50}></Contador>
      <Contador valorMinimo={50} valorMaximo={100}></Contador>
      <Hello />
    </div>
  );
}

export default App;
