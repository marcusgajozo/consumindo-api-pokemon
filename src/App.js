import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Pokemon from "./components/Pokemon/";

function App() {
  const [List, setList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((resposta) => {
      setList(resposta.data.results);
    });
  }, []);

  return (
    <>

      <main>
        <header>
          
        </header>
        <section>
          <h2>Consumindo api Prokémon</h2>
          <div className="cards-pokemon">
            {List.map((item) => (
              <Pokemon key={item.name} data={item}/>
            ))}
          </div>
        </section>
        <footer>
          
        </footer>
      </main>
    </>
  );
}

export default App;
