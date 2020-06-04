import styled, { css } from 'styled-components';
import { EditableInput } from 'react-color/lib/components/common';

export const Wrapper = styled.div`
  position: relative;
  top: 10px;
  right: 2px;
  z-index: 2;
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Fixed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Relative = styled.div`
  position: relative;
  margin-bottom: 10px;
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `};
`;

export const StyledInput = styled(EditableInput)`
  width: 100%;
  height: 50px;
  padding: 5px;
  text-outline: none;
  text-decoration: none;
`;

export const StyleInput = (color) => ({
  input: {
    width: '100%',
    height: '30px',
    padding: '5px',
    textDecoration: 'none',
    outline: 'none',
    border: `1px solid ${color}`,
    borderRadius: '5px',
  },
});
