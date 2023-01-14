import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import * as S from "./styles";

const TitleWithImage = (props: {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  goBackLink?: string;
}) => {
  const router = useRouter();

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
      {props.goBackLink ? (
        <S.Back
          onClick={() =>
            router.push(
              `${
                window.history.back() == undefined ? "/" : window.history.back()
              }`
            )
          }
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.Back>
      ) : (
        <div></div>
      )}
    </S.Wrapper>
  );
};

export default TitleWithImage;
