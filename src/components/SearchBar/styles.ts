import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.darker};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  border: solid 2px;
  border-radius: 5px;
`;
