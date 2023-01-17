import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import * as S from "../../../pagesStyles/rocketID";
import SmallCard from "../../../src/components/Cards/SmallCard";
import LabelAndInfo from "../../../src/components/shared/LabelAndInfo";
import Slider from "../../../src/components/shared/Slider";
import TitleWithImage from "../../../src/components/shared/TitleWithImage";
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

const IndividualRocket: NextPage = (props: {
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
        subtitle={props.rocket?.description}
      />
      <S.Wrapper>
        <S.Subtitle>Main Info</S.Subtitle>
        <S.MainInfo>
          <LabelAndInfo
            label="Height"
            info={`${props.rocket?.height.meters} m`}
            secondaryInfo={`${props.rocket?.height.feet} ft`}
          />
          <LabelAndInfo
            label="Diameter"
            info={`${props.rocket?.diameter.meters} m`}
            secondaryInfo={`${props.rocket?.diameter.feet} ft`}
          />
          <LabelAndInfo
            label="Mass"
            info={`${props.rocket?.mass.kg.toLocaleString("en-US")} kg`}
            secondaryInfo={`${props.rocket?.mass.lb.toLocaleString(
              "en-US"
            )} lb`}
          />
          <SmallCard
            name="Wikipedia"
            linkToPush={props.rocket?.wikipedia}
            id="0"
          />
        </S.MainInfo>
        <S.Subtitle>Images</S.Subtitle>
      </S.Wrapper>
      <S.ImagesDiv>
        <Slider imagesArray={props.rocket?.flickr_images!} />
      </S.ImagesDiv>
    </>
  );
};

export default IndividualRocket;
