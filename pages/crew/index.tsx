import Head from "next/head";
import React from "react";
import TitleWithImage from "../../src/components/TitleWithImage";
import * as S from "./styles";

const Crew = () => {
  return (
    <>
      <Head>
        <title>Crew</title>
      </Head>
      <TitleWithImage
        title="Crew"
        subtitle="The people who collaborate to make this work"
        image="https://live.staticflickr.com/65535/52035158910_eed8ba4193_4k.jpg"
        goBackLink="/"
      />
    </>
  );
};

export default Crew;
