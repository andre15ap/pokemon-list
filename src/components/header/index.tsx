
import { FaSearch } from 'react-icons/fa';
import pokeball from '../../assets/images/pokeball.png';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={pokeball} alt="pokeball" />
        <div>
          <input type="text" placeholder="Name or Number" />
          <button type="button">
            <FaSearch />
          </button>
        </div>
      </Content>
    </Container>
  )
}