import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

export const Image = styled.img`
  width: 100vw;
  height: 50vh;
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
