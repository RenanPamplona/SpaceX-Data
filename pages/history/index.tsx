import { GetServerSideProps, NextPage } from "next";
import React, { ReactNode } from "react";
import { fetchHistory, HistoryType } from "../../src/services/history";
import TitleWithImage from "../../src/TitleWithImage";
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
    </>
  );
};

export default History;
