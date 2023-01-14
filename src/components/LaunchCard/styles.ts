import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text};

  background-color: ${({ theme }) => theme.colors.darker};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  transition: 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  margin: 1rem;
  width: 7rem;
`;

export const ImagePlaceHolder = styled.img`
  width: 7rem;
  margin: 1rem;
  padding: 0.5rem;
  background-color: #070707;
`;

export const NameDiv = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;

  padding: 1rem;
`;
