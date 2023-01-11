import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { HistoryType } from "../../services/history";
import * as S from "./styles";

const monthName = (month: string) => {
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "June";
    case "07":
      return "July";
    case "08":
      return "Aug";
    case "09":
      return "Sept";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
  }
};

const HistoryCard = (props: { children?: ReactNode; event: HistoryType }) => {
  const router = useRouter();

  const year = props.event?.event_date_utc.slice(0, 4);
  const month = props.event?.event_date_utc.slice(5, 7);
  const day = props.event?.event_date_utc.slice(8, 10);

  return (
    <S.Wrapper>
      <S.DateDiv>
        <S.DateString>{day}</S.DateString>
        <S.DateString>{monthName(month)}</S.DateString>
        <S.DateString>{year}</S.DateString>
      </S.DateDiv>

      <S.InfoDiv>
        <S.Title>{props.event.title}</S.Title>
        <S.Description>{props.event.details}</S.Description>
      </S.InfoDiv>

      <S.ButtonDiv
        onClick={() =>
          router.push(
            props.event.links.article == null
              ? "/history"
              : props.event.links.article
          )
        }
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </S.ButtonDiv>
    </S.Wrapper>
  );
};

export default HistoryCard;
