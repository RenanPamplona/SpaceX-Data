import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import PopUpSetup from "../../src/components/PopUpSetup";
import SearchBar from "../../src/components/SearchBar";
import SmallCard from "../../src/components/SmallCard";
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
  const [currentPopUp, setCurrentPopUp] = useState<string>("0");
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

  const starlinkPopUpObject: any = {
    0: <div></div>,
  };

  props.starlinkList?.forEach((starlink) => {
    starlinkPopUpObject[starlink.id] = (
      <PopUpSetup popUpState={setCurrentPopUp}></PopUpSetup>
    );
  });

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

      {starlinkPopUpObject[currentPopUp]}

      <S.Wrapper>
        {starlinksToCompile.map((starlink) => (
          <SmallCard
            key={starlink.id}
            name={starlink.spaceTrack.OBJECT_NAME}
            popUpState={setCurrentPopUp}
            id={starlink.id}
          />
        ))}
      </S.Wrapper>
    </>
  );
};

export default Starlink;
