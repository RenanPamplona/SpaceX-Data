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
`;

export const Image = styled.img`
  width: 100vw;
  height: 80vh;

  object-fit: cover;
  object-position: center;
`;
