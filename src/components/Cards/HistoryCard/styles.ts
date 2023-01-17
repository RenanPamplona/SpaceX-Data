import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  gap: 0rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
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

  @media (max-width: 800px) {
    flex-direction: row;
    padding: 1rem;
  }
`;

export const DateString = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;

  @media (max-width: 630px) {
    font-size: 0.8rem;
  }
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
    background-color: #e0e4e8;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-left: none;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    padding: 0.5rem;
  }
`;
