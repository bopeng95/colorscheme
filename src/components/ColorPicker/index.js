import React from 'react';
import { CustomPicker } from 'react-color';
import OutsideClickHandler from 'react-outside-click-handler';
import {
  Hue,
  EditableInput,
  Saturation,
} from 'react-color/lib/components/common';

import { Wrapper, Relative, StyleInput } from './styles';

const ColorPicker = (props) => {
  const { closePicker, onChange, hsl, hsv, hex } = props;
  return (
    <OutsideClickHandler onOutsideClick={closePicker}>
      <Wrapper>
        <Relative width="100%" height="100px">
          <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
        </Relative>
        <Relative width="100%" height="10px">
          <Hue hsl={hsl} onChange={onChange} />
        </Relative>
        <EditableInput
          style={StyleInput(hex)}
          value={hex}
          onChange={onChange}
        />
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default CustomPicker(ColorPicker);
