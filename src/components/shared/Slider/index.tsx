import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useState } from "react";
import * as S from "./styles";

const Slider = (props: { children?: ReactNode; imagesArray: string[] }) => {
  const [index, setIndex] = useState<number>(0);

  const handleIndexUp = () => {
    if (index == props.imagesArray.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => (index += 1));
    }
  };

  const handleIndexDown = () => {
    if (index == 0) {
      setIndex(props.imagesArray.length - 1);
    } else {
      setIndex((index) => (index -= 1));
    }
  };

  return (
    <>
      <S.Wrapper unselectable="on">
        <S.BackButton unselectable="on" onClick={() => handleIndexDown()}>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </S.BackButton>
        <S.Image unselectable="on" src={props.imagesArray[index]!} />
        <S.GoButton unselectable="on" onClick={() => handleIndexUp()}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </S.GoButton>
      </S.Wrapper>
    </>
  );
};

export default Slider;
