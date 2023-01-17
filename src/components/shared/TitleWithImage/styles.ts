import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
`;

export const Image = styled.img`
  width: 100vw;
  height: 60vh;
  object-fit: cover;
  object-position: center;

  filter: brightness(0.5);

  @media (max-width: 600px) {
    height: 40vh;
  }
`;

export const Title = styled.span`
  text-align: center;
  font-size: 6rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #f1f5f9;

  @media (max-width: 700px) {
    font-size: 3rem;
  }

  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.span`
  text-align: center;
  color: #f1f5f9;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const TextDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Back = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  padding: 1rem;

  font-size: 2rem;
  color: #f1f5f9;

  border: solid 2px transparent;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
