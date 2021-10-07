import { Card } from '../card';

import { response } from '../../services/api';

import { Container } from './styles';

export function CardList() {
  const { pokemon: pokemons } = response;
  return (
    <Container>
      <div>
        {pokemons.map(pekemon => (
          <Card key={pekemon.id} pokemon={pekemon} />
        ))}
      </div>
    </Container>
  );
}
