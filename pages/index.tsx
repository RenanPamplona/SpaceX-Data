import {
  faFire,
  faHistory,
  faPerson,
  faRocket,
  faShip,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import TitleWithImage from "../src/components/shared/TitleWithImage";

const Wrapper = styled.div`
  padding: 3rem 25%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 920px) {
    padding: 3rem 10%;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem;

  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #f1f5f9;

  &:hover {
    background-color: #e0e4e8;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 460px) {
  }
`;

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>SpaceX Data</title>
      </Head>
      <TitleWithImage
        title="SpaceX"
        subtitle="Space Exploration Technologies Corp."
        image="https://live.staticflickr.com/4615/40143096241_bd658df7a5_k.jpg"
      />
      <Wrapper>
        <Button onClick={() => router.push("/rockets")}>
          <FontAwesomeIcon icon={faRocket} /> Rockets
        </Button>
        <Button onClick={() => router.push("/crew")}>
          <FontAwesomeIcon icon={faPerson} /> Crew
        </Button>
        <Button onClick={() => router.push("/history")}>
          <FontAwesomeIcon icon={faHistory} /> History
        </Button>
        <Button onClick={() => router.push("/starlink")}>
          <FontAwesomeIcon icon={faWifi} /> Starlink
        </Button>
        <Button onClick={() => router.push("/launches")}>
          <FontAwesomeIcon icon={faFire} /> Launches
        </Button>
        <Button onClick={() => router.push("/landpads")}>
          <FontAwesomeIcon icon={faShip} /> Landpads
        </Button>
      </Wrapper>
    </>
  );
};

export default HomePage;
