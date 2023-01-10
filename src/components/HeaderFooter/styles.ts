import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const MainContent = styled.div`
  flex-grow: 1;
`;

export const ThemeButton = styled.button`
  font-size: 3rem;
  border: none;
  background-color: transparent;
  filter: ${({ theme }) => theme.imageFilter};
`;
