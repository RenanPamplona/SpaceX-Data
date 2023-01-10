import styled from "styled-components";

export const Wrapper = styled.div``;

export const Image = styled.img`
  width: 100vw;
  height: 60vh;
  object-fit: cover;
  object-position: center;

  position: relative;
`;

export const Subtitle = styled.span``;

export const Title = styled.span``;

export const TextDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
`;
