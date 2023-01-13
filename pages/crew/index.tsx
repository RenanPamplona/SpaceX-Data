import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import CrewCard from "../../src/components/CrewCard";
import SearchBar from "../../src/components/SearchBar";
import TitleWithImage from "../../src/components/TitleWithImage";
import { CrewType, fetchAllCrew } from "../../src/services/crew";
import * as S from "./styles";

export const getServerSideProps: GetServerSideProps = async () => {
  const crewMembers = await fetchAllCrew();

  return {
    props: {
      crewMembers,
    },
  };
};

const Crew = (props: { children?: ReactNode; crewMembers?: CrewType[] }) => {
  const [query, setQuery] = useState<string>();
  const crewMembersToCompile: CrewType[] = [];

  props.crewMembers?.forEach((crewMember) => {
    if (crewMember.name.toLowerCase().includes(query?.toLowerCase()!)) {
      crewMembersToCompile.push(crewMember);
    }
  });

  useEffect(() => {
    setQuery("");
  }, []);

  return (
    <>
      <Head>
        <title>Crew</title>
      </Head>
      <TitleWithImage
        title="Crew"
        image="https://live.staticflickr.com/65535/52035158910_eed8ba4193_4k.jpg"
        goBackLink="/"
      />
      <SearchBar type="crew members" setStateMethod={setQuery} />
      <S.WrapperWrapper>
        <S.Wrapper>
          {crewMembersToCompile?.map((crewMember) => (
            <CrewCard crewMember={crewMember} key={crewMember.id} />
          ))}
        </S.Wrapper>
      </S.WrapperWrapper>
    </>
  );
};

export default Crew;
