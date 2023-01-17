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
import * as S from "../pagesStyles/index";
import TitleWithImage from "../src/components/shared/TitleWithImage";

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
      <S.Wrapper>
        <S.Button onClick={() => router.push("/rockets")}>
          <FontAwesomeIcon icon={faRocket} /> Rockets
        </S.Button>
        <S.Button onClick={() => router.push("/crew")}>
          <FontAwesomeIcon icon={faPerson} /> Crew
        </S.Button>
        <S.Button onClick={() => router.push("/history")}>
          <FontAwesomeIcon icon={faHistory} /> History
        </S.Button>
        <S.Button onClick={() => router.push("/starlink")}>
          <FontAwesomeIcon icon={faWifi} /> Starlink
        </S.Button>
        <S.Button onClick={() => router.push("/launches")}>
          <FontAwesomeIcon icon={faFire} /> Launches
        </S.Button>
        <S.Button onClick={() => router.push("/landpads")}>
          <FontAwesomeIcon icon={faShip} /> Landpads
        </S.Button>
      </S.Wrapper>
    </>
  );
};

export default HomePage;
