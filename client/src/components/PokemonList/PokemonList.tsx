import { usePokemonData } from "../../hook/PokemonData";
import Searchbar from "../Searchbar/Searchbar";
import "./PokemonList.css";

function PokemonList() {
  const { pokemon, pokemonDetails } = usePokemonData();

  return (
    <div className="pokemon-container">
      <Searchbar />
      <h1 id="title">Pokemon List</h1>
      <ul>
        {pokemon.map((poke) => {
          const details = pokemonDetails.find((d) => d.name === poke.name);

          return (
            <li className="card-container" key={poke.name}>
              <p className="pokemon-name">{poke.name}</p>
              {details?.sprites.front_default ? (
                <img
                  className="pokemon-img"
                  src={details.sprites.front_default}
                  alt={poke.name}
                  width={100}
                />
              ) : (
                <p className="pokemon-loading-screen">Loading image...</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonList;
