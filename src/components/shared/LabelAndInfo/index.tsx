import React, { ReactNode } from "react";
import * as S from "./styles";

const LabelAndInfo = (props: {
  children?: ReactNode;
  label: string;
  info: string;
  secondaryLabel?: string;
  secondaryInfo?: string;
}) => {
  return (
    <S.LabelAndInfo>
      <div>
        <S.Label>{props.label}</S.Label>
        {props.secondaryLabel ? (
          <S.Label> / {props.secondaryLabel}</S.Label>
        ) : (
          <></>
        )}
      </div>
      <div>
        <S.Info>{props.info}</S.Info>
        {props.secondaryInfo ? (
          <S.Info> / {props.secondaryInfo}</S.Info>
        ) : (
          <></>
        )}
      </div>
    </S.LabelAndInfo>
  );
};

export default LabelAndInfo;
