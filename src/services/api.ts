import axios from 'axios';

const BASE_URL = 'https://raw.githubusercontent.com';

export type PokemonType = {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
}

const api = axios.create({
  baseURL: BASE_URL,
});

export async function getPokemonsResponse() {
  try {
    const response =  await api.get('/Biuni/PokemonGO-Pokedex/master/pokedex.json');
    const { pokemon } = response.data;
    return pokemon;
  } catch (err) {
    return [];
  }
}
