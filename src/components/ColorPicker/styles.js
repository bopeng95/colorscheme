import styled, { css } from 'styled-components';
import { EditableInput } from 'react-color/lib/components/common';

export const Wrapper = styled.div`
  position: relative;
  top: 10px;
  right: 3px;
  z-index: 2;
  width: 150px;
  padding: 10px;
  border-radius: 2px;
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

export const StyleInput = {
  input: {
    width: '100%',
    height: '30px',
    paddingLeft: '8px',
    fontSize: '14px',
    color: '#666',
    textDecoration: 'none',
    outline: 'none',
    border: '1px solid #f0f0f0',
    borderRadius: '0 4px 4px 0',
  },
};

export const Hash = styled.div`
  background: #f0f0f0;
  height: 30px;
  width: 50px;
  border-radius: 4px 0 0 4px;
  color: #98a1a4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
