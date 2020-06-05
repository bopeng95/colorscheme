import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Text from 'components/Text';
import Container from 'components/Container';
import ColorContainer from 'components/ColorContainer';

import Header from './Header';
import { initialColors } from './fixtures';

library.add(fab);

const App = () => {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    const local = localStorage.getItem('colors');
    if (local) setColors(JSON.parse(local));
  }, []);

  useEffect(() => {
    const str = JSON.stringify(colors);
    localStorage.setItem('colors', str);
  }, [colors]);

  const reset = () => setColors(initialColors);

  const handleColor = (color) => ({ hex }) =>
    setColors((state) => ({ ...state, [color]: hex }));

  return (
    <Container>
      <Header text="alacritty palette" reset={reset} />
      <ColorContainer colors={colors} handleColor={handleColor} />
    </Container>
  );
};

export default App;
