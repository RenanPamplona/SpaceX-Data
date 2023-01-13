import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Image = styled.img`
  width: 15rem;
  height: 19rem;

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

  width: 15rem;
  height: 3rem;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const InfoHover = styled.div`
  width: 15rem;
  height: 22rem;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 3rem;
  color: #f1f5f9;

  position: absolute;
  opacity: 0;

  transition: linear 0.15s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;
