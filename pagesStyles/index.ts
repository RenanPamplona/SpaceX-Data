import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem 25%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 920px) {
    padding: 3rem 10%;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem;

  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #f1f5f9;

  &:hover {
    background-color: #e0e4e8;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 460px) {
  }
`;
