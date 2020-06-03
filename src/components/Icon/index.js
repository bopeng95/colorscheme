import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconWrapper } from './styles';

const Icon = props => {
  const { icon, size = 26, link = '#' } = props;
  return (
    <IconWrapper href={link} size={size}>
      <FontAwesomeIcon icon={icon} />
    </IconWrapper>
  );
};

export default Icon;
