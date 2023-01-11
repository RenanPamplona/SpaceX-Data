import Link from "next/link";
import React, { ReactNode } from "react";
import * as S from "./styles";

const Header = (props: { children?: ReactNode; themeButton: JSX.Element }) => {
  return (
    <S.Header>
      <S.LogoSection>
        <Link href="/">
          <S.Logo />
        </Link>
      </S.LogoSection>

      <S.LinksSection>
        <Link style={{ textDecoration: "none" }} href="/companyInfo">
          <S.Link>INFO</S.Link>
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <S.Link>ABOUT</S.Link>
        </Link>
      </S.LinksSection>

      <S.ButtonSection>{props.themeButton}</S.ButtonSection>
    </S.Header>
  );
};

export default Header;
