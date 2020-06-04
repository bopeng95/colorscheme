import React from 'react';

import Flex from 'components/Flex';
import Text from 'components/Text';
import Icon from 'components/Icon';

const Header = (props) => {
  const { text } = props;
  const repo = 'https://github.com/bopeng95/colorscheme';
  return (
    <Flex justify="space-between" align="center" gutter>
      <Text type="title" color="white" boxed underline>
        {text}
      </Text>
      <Icon icon={['fab', 'github-alt']} link={repo} />
    </Flex>
  );
};

export default React.memo(Header);
