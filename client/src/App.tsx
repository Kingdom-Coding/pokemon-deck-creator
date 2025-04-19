import "./App.css";
/* import Navbar from "./components/Navbar/Navbar"; */
import { PokemonProvider, usePokemonData } from "./hook/PokemonData";
import PokemonList from "./components/PokemonList/PokemonList";
import Deck from "./components/Deck/Deck";
import { useEffect, useRef } from "react";
import { Swapy, createSwapy, BeforeSwapEvent } from "swapy";

function App() {
  const { pokemon } = usePokemonData();
  const swapyRef = useRef<Swapy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || pokemon.length === 0) return;
    if (!containerRef.current) return;

    if (containerRef.current) {
      swapyRef.current = createSwapy(containerRef.current, {
        animation: "dynamic",
      });
      swapyRef.current?.onBeforeSwap((e: BeforeSwapEvent) => {
        console.log("before swap:", e);
        return true;
      });
    }

    swapyRef.current?.enable(true);

    return () => {
      swapyRef.current?.destroy();
    };
  }, [pokemon]);

  return (
    <PokemonProvider>
      <h1>Pokemon</h1>
      <div className="container" ref={containerRef}>
        <Deck />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;
