import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Container from 'components/Container';
import Text from 'components/Text';
import Flex from 'components/Flex';
import Icon from 'components/Icon';

library.add(fab);

const App = () => {
  const repo = 'https://github.com/bopeng95/colorscheme';
  return (
    <Container>
      <Flex justify="space-between" align="center" gutter>
        <Text type="title" color="white" boxed underline>
          colorscheme
        </Text>
        <Icon icon={['fab', 'github-alt']} link={repo} />
      </Flex>
    </Container>
  );
};

export default App;
