import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import MediumCard from "../../src/components/Cards/MediumCard";
import SearchBar from "../../src/components/SearchBar";
import TitleWithImage from "../../src/components/TitleWithImage";
import { fetchAllLaunches, LaunchType } from "../../src/services/launches";
import * as S from "./styles";

export const getServerSideProps: GetServerSideProps = async () => {
  const launchArray = await fetchAllLaunches();

  return {
    props: {
      launchArray,
    },
  };
};

const Launches = (props: {
  children?: ReactNode;
  launchArray: LaunchType[];
}) => {
  const [query, setQuery] = useState<string>();
  const launchesToCompile: LaunchType[] = [];

  props.launchArray?.forEach((launch) => {
    if (launch.name?.toLowerCase().includes(query?.toLowerCase()!)) {
      launchesToCompile.push(launch);
    }
  });

  useEffect(() => {
    setQuery("");
  }, []);

  return (
    <>
      <Head>
        <title>Launches</title>
      </Head>
      <TitleWithImage
        title="Launches"
        subtitle={`Launches count: ${props.launchArray.length}`}
        image="https://live.staticflickr.com/65535/52264517689_109fea17d1_k.jpg"
        goBackLink="/"
      />
      <SearchBar type="launches" setStateMethod={setQuery} />
      <S.WrapperWrapper>
        <S.Wrapper>
          {launchesToCompile.map((launch) => (
            <MediumCard
              key={launch.id}
              name={launch.name}
              image={launch.links.patch.small}
              id={launch.id}
            />
          ))}
        </S.Wrapper>
      </S.WrapperWrapper>
    </>
  );
};

export default Launches;
