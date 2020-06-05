import React from 'react';

import Flex from 'components/Flex';
import Text from 'components/Text';
import Icon from 'components/Icon';

const Header = (props) => {
  const { text, reset } = props;
  const repo = 'https://github.com/bopeng95/colorscheme';
  return (
    <Flex justify="space-between" align="center" gutter>
      <Text type="title" color="white" boxed underline>
        {text}
      </Text>
      <Flex>
        <Text color="white" asButton type="subtitle" hoverColor onClick={reset}>
          reset
        </Text>
        <Icon icon={['fab', 'github-alt']} link={repo} />
      </Flex>
    </Flex>
  );
};

export default React.memo(Header);
