import { useEffect, useState } from 'react';

import { getPokemonsResponse, PokemonType } from '../../services/api';

import { Card } from '../card';
import { Loading } from '../loading';

import { Container, Empty } from './styles';

type Props = {
  search: string;
}

export function CardList(props: Props) {
  const [fullPokemons, setFullPokemons] = useState<PokemonType[]>([]);
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState(false);

  const requestPokemons = async () => {
    setLoading(true);
    const response = await getPokemonsResponse();
    setFullPokemons(response);
    setPokemons(response);
    setLoading(false);
  }

  const renderLoadingOrNoItens = () => {
    if (loading) {
      return <Loading />
    }
    if (!pokemons.length) {
      return (
        <Empty>
          <h2>No items found</h2>
        </Empty>
      )
    }
  }

  useEffect(() => {
    requestPokemons();
  }, []);
  
  useEffect(() => {
    if (!fullPokemons.length && !props.search) {
      requestPokemons();
      return;
    }
    const filtered = fullPokemons.filter(pokemon => {
      const normalizedName = pokemon.name.toLocaleLowerCase();
      const normalizedSearchText = props.search.toLocaleLowerCase();
      const searchIsNumber = Number.isInteger(Number(props.search));
      const sameNumber = searchIsNumber && Number(pokemon.num) === Number(props.search)
      return normalizedName.includes(normalizedSearchText) || sameNumber;
    });
    setPokemons(filtered);
  }, [props.search, fullPokemons]);

  return (
    <Container>
      <div>
        {pokemons.map(pekemon => (
          <Card key={pekemon.id} pokemon={pekemon} />
        ))}
        {renderLoadingOrNoItens()}
      </div>
    </Container>
  );
}
