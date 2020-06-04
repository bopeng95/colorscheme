import React, { useState } from 'react';

import ColorPicker from 'components/ColorPicker';

import { Wrapper, BoxWrapper } from './styles';

const ColorBox = (props) => {
  const { isOpen, handleOpen, handleClose } = props;
  const [color, setColor] = useState('#ffffff');
  const handleChange = ({ hex }) => setColor(hex);
  return (
    <Wrapper size={60} onClick={handleOpen}>
      <BoxWrapper color={color} />
      {isOpen && (
        <ColorPicker
          color={color}
          onChange={handleChange}
          closePicker={handleClose}
        />
      )}
    </Wrapper>
  );
};

export default ColorBox;
