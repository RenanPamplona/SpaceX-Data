import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 10%;
  display: flex;
  flex-direction: column;
`;

export const MainInfo = styled.div`
  padding: 0rem 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: 1.3rem;
  margin: 2rem 0;

  @media (max-width: 700px) {
    padding: 0rem 5%;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const ImagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.span`
  margin: auto;
  display: table;

  font-size: 1.5rem;
  font-weight: 700;

  margin-top: 2rem;
  margin-bottom: 2rem;
`;
