import { useHistory } from "react-router-dom";

import { Header } from '../../components/header';

import pokeball from '../../assets/images/pokeball.png';

import { Container, Content, Title } from  './styles';

export function NotFound() {
  const history = useHistory();

  const handleHome = () => {
    history.push('/');
  }

  return (
    <Container>
      <Header actionSearch={handleHome} />
      <Content>
        <h2>4</h2>
        <img src={pokeball} alt="pokeball" onClick={handleHome} title="Go home" />
        <h2>4</h2>
      </Content>
      <Title>
        Page Not Found
      </Title>
    </Container>
  )
}