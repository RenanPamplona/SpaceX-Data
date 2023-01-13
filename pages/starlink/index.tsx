import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import SearchBar from "../../src/components/SearchBar";
import StarlinkCard from "../../src/components/StarlinkCard";
import TitleWithImage from "../../src/components/TitleWithImage";
import { fetchAllStarlinks, StarlinkType } from "../../src/services/starlink";
import * as S from "./styles";

export const getServerSideProps: GetServerSideProps = async () => {
  const starlinkList = await fetchAllStarlinks();
  return {
    props: {
      starlinkList,
    },
  };
};

const Starlink = (props: {
  children?: ReactNode;
  starlinkList?: StarlinkType[];
}) => {
  const [query, setQuery] = useState<string>();
  const starlinksToCompile: StarlinkType[] = [];

  props.starlinkList?.forEach((starlink) => {
    if (
      starlink.spaceTrack.OBJECT_NAME.toLowerCase().includes(
        query?.toLowerCase()!
      )
    ) {
      starlinksToCompile.push(starlink);
    }
  });

  useEffect(() => {
    setQuery("");
  }, []);

  return (
    <>
      <Head>
        <title>Starlink</title>
      </Head>
      <TitleWithImage
        title="Starlink"
        subtitle={`Starlink satellite count: ${props.starlinkList?.length}`}
        image="https://live.staticflickr.com/65535/52444210812_d44fa6f5d2_k.jpg"
        goBackLink="/"
      />
      <SearchBar setStateMethod={setQuery} type="starlinks" />
      <S.Wrapper>
        {starlinksToCompile.map((starlink) => (
          <StarlinkCard key={starlink.id} starlink={starlink} />
        ))}
      </S.Wrapper>
    </>
  );
};

export default Starlink;
