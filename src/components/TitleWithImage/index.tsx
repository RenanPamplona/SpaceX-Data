import React, { ReactNode } from "react";
import * as S from "./styles";

const TitleWithImage = (props: {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
}) => {
  return (
    <S.Wrapper>
      <S.Image src={props.image} />
      <S.TextDiv>
        <S.Title>{props.title}</S.Title>
        {props.subtitle ? (
          <S.Subtitle>{props.subtitle}</S.Subtitle>
        ) : (
          <div></div>
        )}
      </S.TextDiv>
    </S.Wrapper>
  );
};

export default TitleWithImage;
