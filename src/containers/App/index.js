import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Container from 'components/Container';

import Header from './Header';

library.add(fab);
const title = 'alacritty palette';

const App = () => {
  return (
    <Container>
      <Header text={title} />
    </Container>
  );
};

export default App;
