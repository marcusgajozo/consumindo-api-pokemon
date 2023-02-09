import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "./style";

export default function Pokemon({ data }) {
  const [Pokemon, setPokemon] = useState([]);
  const [ImagemPokemon, setImagemPokemon] = useState('');

  useEffect(() => {
    axios.get(data.url).then((response) => {
      setImagemPokemon(response.data.sprites.other.dream_world.front_default)
      setPokemon(response.data);
    });
  }, []);


  return (
    <Card>
      <span>{Pokemon.name}</span>
      <span>
        <img
          className='pokemon'
          src={ImagemPokemon}
          alt={`imagem do pokemon ${Pokemon.name}`}
        />
      </span>
    </Card>
  );
}
