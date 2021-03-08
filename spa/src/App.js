import Hello from './components/Hello'
import Contador from './components/Contador'
import ArCondicionado from './components/ArCondicionado'
import Header from './components/Header'

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path='/hello'>
            <Hello />
          </Route>
          <Route path='/contador'>
            <Contador valorMinimo={10} valorMaximo={15}></Contador>
          </Route>
          <Route path='/arcondicionado'>
            <ArCondicionado />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
