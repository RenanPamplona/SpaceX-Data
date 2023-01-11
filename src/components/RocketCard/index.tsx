import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { RocketType } from "../../services/rocket";
import * as S from "./styles";

const RocketCard = (props: { children?: ReactNode; rocket: RocketType }) => {
  const router = useRouter();

  return (
    <>
      <S.Wrapper>
        <S.MainDiv>
          <S.InfoDiv>
            <S.Name>{props.rocket.name}</S.Name>
            <S.Info>{props.rocket.description}</S.Info>
            <S.Info>
              Cost per launch:{" "}
              {props.rocket.cost_per_launch.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </S.Info>
            <S.Info>Sucess rate: {props.rocket.success_rate_pct}%</S.Info>
          </S.InfoDiv>

          <S.ReadMore
            onClick={() => router.push(`/rockets/${props.rocket.id}`)}
          >
            Read More <FontAwesomeIcon icon={faArrowCircleRight} />
          </S.ReadMore>
        </S.MainDiv>

        <S.Image src={props.rocket.flickr_images[0]} />
      </S.Wrapper>
    </>
  );
};

export default RocketCard;
