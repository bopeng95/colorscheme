import styled from 'styled-components';

const time = 0.2;

export const IconWrapper = styled.a`
  text-decoration: none;
  margin-left: 25px;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ size }) => size}px;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.pink};
    transition: color ${time}s;
  }
`;
