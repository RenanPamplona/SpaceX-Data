import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const LowOpacityScreen = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 105vw;
  height: 105vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const MainContent = styled.div``;

export const CloseButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;

  padding: 1rem;

  font-size: 2rem;
  color: #f1f5f9;
  font-weight: 700;

  background-color: transparent;

  border: solid 2px transparent;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
  z-index: 3;
`;
