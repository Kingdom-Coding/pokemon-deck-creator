import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Data = {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
  types: {
    name: string;
  };
};

function usePokemonDataSource() {
  const [pokemon, setPokemon] = useState<Data[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<Data[]>([]);
  const URL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setPokemon(data.results); // set names list
  
      const detailPromises = data.results.map(async (poke: { url: string }) => {
        const res = await fetch(poke.url);
        return res.json();
      });
  
      const details = await Promise.all(detailPromises);
      setPokemonDetails(details); // set all details at once
    };
  
    fetchPokemon();
  }, []);
  

  return { pokemon, pokemonDetails };
}

const PokemonContext = createContext<
  ReturnType<typeof usePokemonDataSource> | undefined
>(undefined);

export function usePokemonData() {
  return useContext(PokemonContext)!;
}

export function PokemonProvider({ children }: { children: ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonDataSource()}>
      {children}
    </PokemonContext.Provider>
  );
}

/* useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
      const dataResults = data.results;
      dataResults.forEach((result: Data) => {
        const pokemonData = [result.name, result.url];
        fetch(pokemonData[1])
          .then((res) => res.json())
          .then((data) => {
            const pokemonImg = data.sprites.front_default;
            const pokemonTypes = (data.types as pokemonTypes[]).map((t) => {
              return t.type.name;
            });
            result.image = pokemonImg;
            result.types = pokemonTypes;
          });
          console.log(result.types);
      });

      setPokemon(data.results);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
}, []); */
