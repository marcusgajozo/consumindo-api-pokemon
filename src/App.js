import React from "react";
import "./App.css";

import Header from "./components/Header";
import CardsPokemon from "./components/CardsPokemon";

function App() {
  return (
    <>
      <main>
        <Header />
        <CardsPokemon></CardsPokemon>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
