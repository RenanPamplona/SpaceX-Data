import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import TitleWithImage from "../../../src/components/TitleWithImage";
import { fetchOneRocket, RocketType } from "../../../src/services/rocket";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (typeof id === "string") {
    const rocket = await fetchOneRocket(id);

    return {
      props: {
        rocket,
      },
    };
  }

  return {
    redirect: {
      destination: "/rockets",
      permanent: false,
    },
  };
};

const IndividualRocket = (props: {
  children?: ReactNode;
  rocket?: RocketType;
}) => {
  return (
    <>
      <Head>
        <title>{props.rocket?.name}</title>
      </Head>
      <TitleWithImage
        title={`${props.rocket?.name}`}
        image={`${props.rocket?.flickr_images[0]}`}
        goBackLink="/rockets"
      />
    </>
  );
};

export default IndividualRocket;
