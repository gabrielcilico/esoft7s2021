import Hello from './components/Hello'
import Contador from './components/Contador'

function App() {
  return (
    <div className="App">
      <Hello />
      <Contador valorMinimo={10} valorMaximo={50}></Contador>
    </div>
  );
}

export default App;
