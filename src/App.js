import React from "react";
import Global from "./styles/global";
import Header from "./components/Header";
import CardsPokemon from "./components/CardsPokemon";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Global />
      <main>
        <Header />
        <CardsPokemon></CardsPokemon>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
