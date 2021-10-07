import { Header } from '../../components/header';
import { CardList } from '../../components/card-list';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <CardList />
    </Container>
  )
}
