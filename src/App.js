import React from "react";
import "./App.css";

import Header from "./components/Header";
import CardsPokemon from "./components/CardsPokemon";

function App() {
  return (
    <>
      <main>
        <Header />
        <section>
          <CardsPokemon></CardsPokemon>
        </section>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
