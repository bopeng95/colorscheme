import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import ColorPicker from 'components/ColorPicker';

import { Wrapper, BoxWrapper } from './styles';

const ColorBox = (props) => {
  const { color, handleColor } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper size={60} onClick={handleOpen}>
      <BoxWrapper color={color} />
      {open && (
        <OutsideClickHandler onOutsideClick={handleClose}>
          <ColorPicker color={color} onChange={handleColor} />
        </OutsideClickHandler>
      )}
    </Wrapper>
  );
};

export default ColorBox;
