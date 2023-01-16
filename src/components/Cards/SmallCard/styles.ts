import styled from "styled-components";

export const Wrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.darker};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;

  text-align: center;
  padding: 1rem;

  &:hover {
    transform: scale(1.05);
    color: #f1f5f9;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
