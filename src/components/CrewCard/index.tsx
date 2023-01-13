import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { CrewType } from "../../services/crew";
import * as S from "./styles";

const CrewCard = (props: { children?: ReactNode; crewMember?: CrewType }) => {
  return (
    <>
      <S.Wrapper>
        <S.Image src={props.crewMember?.image} />
        <S.NameDiv>{props.crewMember?.name}</S.NameDiv>
        <S.InfoHover>
          <FontAwesomeIcon icon={faInfoCircle} />
        </S.InfoHover>
      </S.Wrapper>
    </>
  );
};

export default CrewCard;
