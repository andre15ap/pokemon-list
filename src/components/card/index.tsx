import { getTypeColor } from '../../services/get-type-colors';

import { Container, ContentImage, ContentBody, Footer, Type } from './styles';

type PokemonProps = {
  pokemon: {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
  }
}

export function Card(props: PokemonProps) {
  const { pokemon } = props;

  return (
    <Container>
      <ContentImage>
        <img src={pokemon.img} alt={pokemon.name} />
      </ContentImage>
      <ContentBody>
        <span>#{pokemon.num}</span>
        <Footer>
          <h2>{pokemon.name}</h2>
          <div>
            {pokemon.type.map(type => (
              <Type key={type} typeColors={getTypeColor(type)}>{type}</Type>
            ))}
          </div>
        </Footer>

      </ContentBody>
    </Container>
  )
}