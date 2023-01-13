import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
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
      <S.Wrapper>
        {props.starlinkList?.map((starlink) => (
          <div key={starlink.id}>a</div>
        ))}
      </S.Wrapper>
    </>
  );
};

export default Starlink;
