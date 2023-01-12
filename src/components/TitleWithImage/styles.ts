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
`;
export const Title = styled.span`
  text-align: center;
  font-size: 6rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #f1f5f9;
`;

export const Subtitle = styled.span`
  text-align: center;
  color: #f1f5f9;
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
  top: 1rem;
  left: 1rem;

  padding: 1rem;

  font-size: 2rem;
  color: #f1f5f9;

  border: solid 2px transparent;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
