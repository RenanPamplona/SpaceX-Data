import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import BigCard from "../../src/components/BigCard";
import SearchBar from "../../src/components/SearchBar";
import TitleWithImage from "../../src/components/TitleWithImage";
import { fetchAllLandpads, LandpadType } from "../../src/services/landpads";
import * as S from "./styles";

export const getServerSideProps: GetServerSideProps = async () => {
  const landpadsArray = await fetchAllLandpads();

  return {
    props: {
      landpadsArray,
    },
  };
};

const Landpads = (props: {
  children?: ReactNode;
  landpadsArray: LandpadType[];
}) => {
  const [query, setQuery] = useState<string>();
  const landpadsToCompile: LandpadType[] = [];

  props.landpadsArray?.forEach((landpad) => {
    if (
      landpad.full_name.toLowerCase().includes(query?.toLowerCase()!) ||
      landpad.name.toLowerCase().includes(query?.toLowerCase()!)
    ) {
      landpadsToCompile.push(landpad);
    }
  });

  useEffect(() => {
    setQuery("");
  }, []);

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
      <SearchBar type="landpads" setStateMethod={setQuery} />
      <S.Wrapper>
        {landpadsToCompile.map((landpad) => (
          <BigCard
            key={landpad.id}
            name={landpad.full_name}
            image={landpad.images.large[0]}
            linkToPush={`/landpads/${landpad.id}`}
            infos={[
              landpad.details,
              `Success rate: ${(
                (landpad.landing_successes * 100) /
                landpad.landing_attempts
              ).toFixed(1)}%`,
            ]}
          />
        ))}
      </S.Wrapper>
    </>
  );
};

export default Landpads;
