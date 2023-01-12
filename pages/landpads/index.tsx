import Head from "next/head";
import React from "react";
import TitleWithImage from "../../src/components/TitleWithImage";
import * as S from "./styles";

const Landpads = () => {
  return (
    <>
      <Head>
        <title>Landpads</title>
      </Head>
      <TitleWithImage
        title="Landpads"
        image="https://live.staticflickr.com/297/18610429514_e5d758edf3_h.jpg"
        goBackLink="/"
      />
    </>
  );
};

export default Landpads;
