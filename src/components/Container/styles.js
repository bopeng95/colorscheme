import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme, maxWidth }) => maxWidth || theme.display.desktop}px;
  margin: 0 auto;
  padding: 25px;
`;
