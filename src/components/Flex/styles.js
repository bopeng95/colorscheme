import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ justify, align, gutter }) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    margin-bottom: ${gutter && '20px'};
  `};
`;
