import Head from "next/head";
import React from "react";
import TitleWithImage from "../../src/components/TitleWithImage";
import * as S from "./styles";

const Starlink = () => {
  return (
    <>
      <Head>
        <title>Starlink</title>
      </Head>
      <TitleWithImage
        title="Starlink"
        image="https://live.staticflickr.com/65535/52444210812_d44fa6f5d2_k.jpg"
        goBackLink="/"
      />
    </>
  );
};

export default Starlink;
