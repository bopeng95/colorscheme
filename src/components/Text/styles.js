import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  ${({
    theme,
    type,
    color = 'black',
    spanColor,
    gutter = false,
    asButton,
    underline,
    boxed,
  }) => css`
    ${theme.text[type].style};
    border-bottom: ${underline && `2px solid ${theme.colors.pink}`};
    margin-bottom: ${gutter && '18px'};
    color: ${theme.colors[color]};
    cursor: ${asButton && 'pointer'};
    display: ${boxed && 'inline-block'};
    & > * {
      text-decoration: none;
      color: ${spanColor && theme.colors[spanColor]};
    }
  `};
`;
