import Head from "next/head";
import React from "react";
import TitleWithImage from "../../src/components/TitleWithImage";
import * as S from "./styles";

const Launches = () => {
  return (
    <>
      <Head>
        <title>Launches</title>
      </Head>
      <TitleWithImage
        title="Launches"
        image="https://live.staticflickr.com/65535/52264517689_109fea17d1_k.jpg"
        goBackLink="/"
      />
    </>
  );
};

export default Launches;
