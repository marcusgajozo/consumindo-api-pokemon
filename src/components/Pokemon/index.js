import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "./style";

export default function Pokemon({ data }) {
  const [Pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(data.url).then((response) => {
      console.log(response.data);
      setPokemon(response.data);
    });
  }, []);

  return (
    <Card>
      <span>{Pokemon.name}</span>
      <span>
        <img
          src={Pokemon.sprites.other.dream_world.front_default}
          alt={`imagem do pokemon ${Pokemon.name}`}
        />
      </span>
    </Card>
  );
}
