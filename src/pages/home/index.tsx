import { useState } from 'react';

import { Header } from '../../components/header';
import { CardList } from '../../components/card-list';

import { Container } from './styles';

export function Home() {
  const [search, setSearch] = useState('');

  const actionSearch = (value: string) => {
    setSearch(value);
  }

  return (
    <Container>
      <Header actionSearch={actionSearch} />
      <CardList search={search} />
    </Container>
  )
}
