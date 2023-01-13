import React, { ReactNode } from "react";
import { StarlinkType } from "../../services/starlink";
import * as S from "./styles";

const StarlinkCard = (props: {
  children?: ReactNode;
  starlink?: StarlinkType;
}) => {
  return (
    <>
      <S.Wrapper>{props.starlink?.spaceTrack.OBJECT_NAME}</S.Wrapper>
    </>
  );
};

export default StarlinkCard;
