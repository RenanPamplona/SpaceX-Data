import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import SearchBar from "../../src/components/SearchBar";
import TitleWithImage from "../../src/components/TitleWithImage";

const Rockets: NextPage = () => {
  const [query, setQuery] = useState<string>();

  return (
    <>
      <Head>
        <title>Rockets</title>
      </Head>

      <TitleWithImage
        title={query}
        image="https://live.staticflickr.com/65535/52568401533_0d06419f01_k.jpg"
      />
      <SearchBar type="rockets" state={query} setStateMethod={setQuery} />
    </>
  );
};

export default Rockets;
