import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4fr 4fr 1fr;

  padding: 1rem 10%;

  background-color: ${({ theme }) => theme.colors.darker};

  @media (max-width: 500px) {
  }
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.img`
  content: url("/images/logo.png");
  filter: ${({ theme }) => theme.imageFilter};
  cursor: pointer;

  width: 15rem;

  @media (max-width: 500px) {
    width: 10rem;
  }
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  padding: 0rem 1rem;
`;

export const Link = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
