import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  transition: 0.15s linear;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 13rem;
  height: 13rem;

  object-fit: cover;
  object-position: center;

  border: solid 3px ${({ theme }) => theme.colors.primary};
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const NameDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #f1f5f9;
  font-size: 1.2rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 13rem;
  height: 3rem;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const InfoHover = styled.div`
  width: 13rem;
  height: 16rem;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 3rem;
  color: #f1f5f9;

  position: absolute;
  top: 0;
  opacity: 0;

  transition: linear 0.15s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;
