import "./App.css";
/* import Navbar from "./components/Navbar/Navbar"; */
import { PokemonProvider } from "./hook/PokemonData";
import PokemonList from "./components/PokemonList/PokemonList";
import Deck from "./components/Deck/Deck";
function App() {
  return (
    <PokemonProvider>
      <h1>Pokemon</h1>
      <div className="container">
        <Deck />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;
