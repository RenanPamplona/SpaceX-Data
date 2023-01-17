import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 10%;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 670px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const MainInfo = styled.div`
  padding: 4rem 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: 1.3rem;

  @media (max-width: 800px) {
    padding: 4rem 10%;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    padding: 4rem 5%;
  }

  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

export const LabelAndInfo = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Info = styled.span``;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 2rem 0;
`;
