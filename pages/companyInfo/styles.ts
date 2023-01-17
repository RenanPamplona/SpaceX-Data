import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 10%;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LinkButton = styled.button`
  font-size: 1.2rem;
  font-weight: 700;

  padding: 1rem 2rem;

  border: transparent 2px solid;
  border-radius: 5px;

  color: #f1f5f9;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: #f1f5f9;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MainInfo = styled.div`
  padding: 4rem 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: 1.3rem;
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
