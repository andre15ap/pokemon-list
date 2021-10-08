
import { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import pokeball from '../../assets/images/pokeball.png';

import { Container, Content } from './styles';

type Props = {
  actionSearch: (value: string) => void;
}

export function Header(props: Props) {
  const [search, setSearch] = useState('');

  const { actionSearch } = props;

  const handleHomeLogo = () => {
    setSearch('');
    actionSearch('');
  }

  return (
    <Container>
      <Content>
        <img src={pokeball} alt="pokeball" onClick={handleHomeLogo} title="Go home" />
        <div>
          <input onChange={(val) => setSearch(val.target.value)} value={search} type="text" placeholder="Name or Number" />
          <button type="button" onClick={() => actionSearch(search)} title="Search">
            <FaSearch />
          </button>
        </div>
      </Content>
    </Container>
  )
}