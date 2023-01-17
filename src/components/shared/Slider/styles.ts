import styled from "styled-components";

export const Wrapper = styled.div`
  align-self: center;
  position: relative;
  display: flex;
`;

export const GoButton = styled.div`
  position: absolute;
  left: 0;
  width: 6rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 580px) {
    font-size: 2rem;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  right: 0;
  width: 6rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 580px) {
    font-size: 2rem;
  }
`;

export const Image = styled.img`
  width: 100vw;
  height: 80vh;

  object-fit: cover;
  object-position: center;

  @media (max-width: 700px) {
    height: 70vh;
  }

  @media (max-width: 580px) {
    height: 50vh;
  }

  @media (max-width: 400px) {
    height: 40vh;
  }
`;
