import styled from "styled-components";

export const Footer = styled.div`
  text-align: center;
  font-size: 0.9rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

export const PreText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;
