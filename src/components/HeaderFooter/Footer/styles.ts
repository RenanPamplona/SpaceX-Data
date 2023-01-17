import styled from "styled-components";

export const Footer = styled.div`
  text-align: center;
  font-size: 0.9rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.darker};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;
