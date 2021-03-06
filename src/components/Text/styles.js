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
    bold,
    hoverColor,
  }) => css`
    ${theme.text[type].style};
    border-bottom: ${underline && `2px solid ${theme.colors.pink}`};
    margin-bottom: ${gutter && '18px'};
    color: ${theme.colors[color]};
    cursor: ${asButton && 'pointer'};
    display: ${boxed && 'inline-block'};
    font-weight: ${bold && 'bold'};
    transition: color 0.2s;
    :hover {
      color: ${hoverColor && theme.colors.pink};
    }
    & > * {
      text-decoration: none;
      color: ${spanColor && theme.colors[spanColor]};
    }
  `};
`;
