import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({
    justify = 'space-between',
    align = 'center',
    wrap,
    direction,
    gutter,
    gutterTop,
    width,
    fullWidth,
  }) => css`
    display: flex;
    width: ${fullWidth ? '100%' : width};
    flex-wrap: ${wrap && wrap};
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    margin-bottom: ${gutter && '30px'};
    margin-top: ${gutterTop && '30px'};
  `};
`;
