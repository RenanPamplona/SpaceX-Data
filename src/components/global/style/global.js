import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', arial
  }

  button, a {
    cursor: pointer
  }

  ::-webkit-scrollbar{
  width: 15px;
}

::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.colors.darker};
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.primary};
}

::-webkit-scrollbar-thumb:hover{
  background-color: ${({ theme }) => theme.colors.text};
}
`;
