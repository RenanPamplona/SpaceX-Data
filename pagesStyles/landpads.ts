import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  width: 100%;
  padding: 3rem 10%;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
