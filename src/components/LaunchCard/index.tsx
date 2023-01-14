import React, { ReactNode } from "react";
import { LaunchType } from "../../services/launches";
import * as S from "./styles";

const LaunchCard = (props: { children?: ReactNode; launch: LaunchType }) => {
  return (
    <>
      <S.Wrapper>
        {props.launch.links.patch.small == null ? (
          <S.ImagePlaceHolder src="/images/logo.png" />
        ) : (
          <S.Image src={props.launch.links.patch.small} />
        )}

        <S.NameDiv>{props.launch.name}</S.NameDiv>
      </S.Wrapper>
    </>
  );
};

export default LaunchCard;
