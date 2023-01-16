import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import * as S from "./styles";

const SmallCard = (props: {
  children?: ReactNode;
  name: string;
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
        {props.name}
      </S.Wrapper>
    </>
  );
};

export default SmallCard;
