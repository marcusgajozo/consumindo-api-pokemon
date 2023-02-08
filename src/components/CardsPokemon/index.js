import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Div } from "./style";

import Pokemon from "../Pokemon";

export default function CardsPokemon() {
  const [List, setList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((resposta) => {
      setList(resposta.data.results);
    });
  }, []);

  return (
    <Div>
      {List.map((item) => (
        <Pokemon className="card" key={item.name} data={item} />
      ))}
    </Div>
  );
}
