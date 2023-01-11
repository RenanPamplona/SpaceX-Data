import { GetServerSideProps, NextPage } from "next";
import React, { ReactNode } from "react";
import TitleWithImage from "../../src/components/TitleWithImage";
import { fetchHistory, HistoryType } from "../../src/services/history";
import * as S from "./styles";

export const getServerSideProps: GetServerSideProps = async () => {
  const historyArray = await fetchHistory();

  return {
    props: {
      historyArray,
    },
  };
};

const History: NextPage = (props: {
  children?: ReactNode;
  historyArray?: HistoryType[];
}) => {
  return (
    <>
      <TitleWithImage
        title={"History"}
        subtitle={
          "Here you can check SpaceX's main events in its existance as a company"
        }
        image={
          "https://live.staticflickr.com/8570/16698990475_7f69dca673_k.jpg"
        }
      />
      <p>sadsadkasjdaskdjskdjajdskk</p>
    </>
  );
};

export default History;
