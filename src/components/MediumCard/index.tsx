import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import * as S from "./styles";

const MediumCard = (props: {
  children?: ReactNode;
  name: string;
  image: string;
  id: string;
  popUpState?: (string: string) => void;
  linkToPush?: string;
}) => {
  const router = useRouter();

  return (
    <>
      <S.Wrapper
        onClick={() => {
          if (props.popUpState) {
            props.popUpState(props.id!);
          }

          if (props.linkToPush) {
            router.push(props.linkToPush);
          }
        }}
      >
        <S.Image src={props.image == null ? "/images/logo.png" : props.image} />
        <S.NameDiv>{props.name}</S.NameDiv>
        <S.InfoHover>
          <FontAwesomeIcon icon={faInfoCircle} />
        </S.InfoHover>
      </S.Wrapper>
    </>
  );
};

export default MediumCard;
