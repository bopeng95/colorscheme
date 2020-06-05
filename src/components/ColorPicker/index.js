import React from 'react';
import { CustomPicker } from 'react-color';
import {
  Hue,
  EditableInput,
  Saturation,
} from 'react-color/lib/components/common';

import Flex from 'components/Flex';
import { Wrapper, Relative, StyleInput, Hash } from './styles';

const ColorPicker = (props) => {
  const { onChange, hsl, hsv, hex } = props;
  return (
    <Wrapper>
      <Relative width="100%" height="100px">
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </Relative>
      <Relative width="100%" height="10px">
        <Hue hsl={hsl} onChange={onChange} />
      </Relative>
      <Flex justify="space-between">
        <Hash>#</Hash>
        <EditableInput
          style={StyleInput}
          value={hex.replace('#', '')}
          onChange={onChange}
        />
      </Flex>
    </Wrapper>
  );
};

export default CustomPicker(ColorPicker);
