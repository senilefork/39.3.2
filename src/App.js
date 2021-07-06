import logo from './logo.svg';
import  pokemon  from './pokemon';
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
