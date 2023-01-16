import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  border: 2px solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.primary};

  background-color: ${({ theme }) => theme.colors.darker};
  color: ${({ theme }) => theme.colors.text};
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
`;

export const InfoDiv = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Name = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;

export const Info = styled.div``;

export const ReadMore = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #e0e4e8;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
