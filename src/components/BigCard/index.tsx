import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import * as S from "./styles";

const BigCard = (props: {
  children?: ReactNode;
  name: string;
  infos: string[];
  linkToPush: string;
  image: string;
}) => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.MainDiv>
        <S.InfoDiv>
          <S.Name>{props.name}</S.Name>

          {props.infos?.map((info) => (
            <S.Info key={""}>
              {info.length > 500 ? info.slice(0, 501) + "..." : info}
            </S.Info>
          ))}
        </S.InfoDiv>

        <S.ReadMore onClick={() => router.push(`${props.linkToPush}`)}>
          Read More <FontAwesomeIcon icon={faArrowCircleRight} />
        </S.ReadMore>
      </S.MainDiv>

      <S.Image src={props.image} />
    </S.Wrapper>
  );
};

export default BigCard;
