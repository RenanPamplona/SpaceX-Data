import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import TitleWithImage from "../../src/components/TitleWithImage";
import { CompanyType, fetchCompanyData } from "../../src/services/company";
import * as S from "./styles";

export const getServerSideProps: GetServerSideProps = async () => {
  const companyInfo = await fetchCompanyData();

  return {
    props: {
      companyInfo,
    },
  };
};

const CompanyInfo: NextPage = (props: {
  children?: ReactNode;
  companyInfo?: CompanyType;
}) => {
  return (
    <>
      <Head>
        <title>Company Info</title>
      </Head>
      <TitleWithImage
        title="Company Data"
        subtitle={props.companyInfo?.summary}
        image="https://live.staticflickr.com/65535/52568149769_068064ebbd_3k.jpg"
      />
      <S.Wrapper>
        <S.ButtonsDiv>
          <Link href={props.companyInfo?.links.elon_twitter!}>
            <S.LinkButton>Elon Twitter</S.LinkButton>
          </Link>
          <Link href={props.companyInfo?.links.flickr!}>
            <S.LinkButton>SpaceX Flickr</S.LinkButton>
          </Link>
          <Link href={props.companyInfo?.links.twitter!}>
            <S.LinkButton>SpaceX Twitter</S.LinkButton>
          </Link>
          <Link href={props.companyInfo?.links.website!}>
            <S.LinkButton>SpaceX Website</S.LinkButton>
          </Link>
        </S.ButtonsDiv>

        <S.MainInfo>
          <S.LabelAndInfo>
            <S.Label>Founder</S.Label>
            <S.Info>{props.companyInfo?.founder}</S.Info>
          </S.LabelAndInfo>

          <S.LabelAndInfo>
            <S.Label>Foundation date</S.Label>
            <S.Info>{props.companyInfo?.founded}</S.Info>
          </S.LabelAndInfo>

          <S.LabelAndInfo>
            <S.Label>Employees</S.Label>
            <S.Info>{props.companyInfo?.employees}</S.Info>
          </S.LabelAndInfo>

          <S.LabelAndInfo>
            <S.Label>CEO</S.Label>
            <S.Info>{props.companyInfo?.ceo}</S.Info>
          </S.LabelAndInfo>

          <S.LabelAndInfo>
            <S.Label>CTO</S.Label>
            <S.Info>{props.companyInfo?.cto}</S.Info>
          </S.LabelAndInfo>

          <S.LabelAndInfo>
            <S.Label>COO</S.Label>
            <S.Info>{props.companyInfo?.coo}</S.Info>
          </S.LabelAndInfo>

          <S.LabelAndInfo>
            <S.Label>Valuation</S.Label>
            <S.Info>
              {props.companyInfo?.valuation.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </S.Info>
          </S.LabelAndInfo>
        </S.MainInfo>

        <S.Location>
          <S.Label>Headquarters</S.Label>
          <Link
            href={
              "https://www.google.com.br/maps/place/Spacex/@33.9213135,-118.3290723,17z/data=!4m13!1m7!3m6!1s0x80c2b5ded9a490b5:0x3095ae5795c500b3!2sRocket+Rd,+Hawthorne,+CA+90250,+EUA!3b1!8m2!3d33.9213135!4d-118.3268783!3m4!1s0x80c2b5dee46db32d:0x5589bf4232c10232!8m2!3d33.9207525!4d-118.3280246"
            }
          >
            <S.LinkButton>
              {props.companyInfo?.headquarters.address},{" "}
              {props.companyInfo?.headquarters.city},{" "}
              {props.companyInfo?.headquarters.state}
            </S.LinkButton>
          </Link>
        </S.Location>
      </S.Wrapper>
    </>
  );
};

export default CompanyInfo;
