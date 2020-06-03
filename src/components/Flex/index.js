import React from 'react';

import { Wrapper } from './styles.js';

const Flex = props => {
  const { children, ...rest } = props;
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Flex;
