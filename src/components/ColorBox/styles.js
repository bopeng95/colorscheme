import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 4px;
  border-radius: 2px;
  ${({ theme, size }) => css`
    width: ${size}px;
    height: ${size}px;
    background: ${theme.colors.white};
  `};
`;

export const BoxWrapper = styled.div.attrs((props) => ({
  style: { background: props.color },
}))`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  cursor: pointer;
  transition: transform 0.3s;
  :hover {
    transform: scale(1.16);
  }
`;
