import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Container from 'components/Container';
import Flex from 'components/Flex';
import ColorBox from 'components/ColorBox';

import Header from './Header';

library.add(fab);
const title = 'alacritty palette';

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Header text={title} />
      <Flex justify="space-between" align="center">
        <ColorBox
          isOpen={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </Flex>
    </Container>
  );
};

export default App;
