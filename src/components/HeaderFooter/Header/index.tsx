import React, { ReactNode } from "react";
import * as S from "./styles";

const Header = (props: { children?: ReactNode; themeButton: JSX.Element }) => {
  return (
    <S.Header>
      <S.LogoSection>
        <S.Logo />
      </S.LogoSection>

      <S.LinksSection>
        <S.Link>INFO</S.Link>
        <S.Link>ABOUT</S.Link>
      </S.LinksSection>

      <S.ButtonSection>{props.themeButton}</S.ButtonSection>
    </S.Header>
  );
};

export default Header;
