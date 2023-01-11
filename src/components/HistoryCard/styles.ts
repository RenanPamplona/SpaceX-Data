import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  gap: 0rem;
`;

export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  padding: 1rem 0rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const DateString = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
`;

export const InfoDiv = styled.div`
  padding: 1rem;

  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;

export const Description = styled.span``;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  font-size: 2rem;
  color: #f1f5f9;

  &:hover {
    background-color: #f1f5f9;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
