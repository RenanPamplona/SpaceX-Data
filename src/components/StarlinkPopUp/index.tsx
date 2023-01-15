import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { StarlinkType } from "../../services/starlink";
import * as S from "./styles";

const StarlinkPopUp = (props: {
  children?: ReactNode;
  starlink: StarlinkType;
  popUpState: (string: string) => void;
}) => {
  return (
    <div style={{ position: "relative" }}>
      <S.Wrapper>
        <S.MainContent>{props.starlink?.spaceTrack.OBJECT_NAME}</S.MainContent>
      </S.Wrapper>
      <S.CloseButton onClick={() => props.popUpState("0")}>
        <FontAwesomeIcon icon={faX} />
      </S.CloseButton>
    </div>
  );
};

export default StarlinkPopUp;
