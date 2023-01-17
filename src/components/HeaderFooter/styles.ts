import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export const MainContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  flex-grow: 1;
  max-width: 100vw;
  color: ${({ theme }) => theme.colors.text};
`;

export const ThemeButton = styled.button`
  font-size: 3rem;
  border: none;
  background-color: transparent;
  filter: ${({ theme }) => theme.imageFilter};
`;
