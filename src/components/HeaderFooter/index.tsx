import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { darkTheme } from "./../global/style/theme";
import Footer from "./Footer";
import Header from "./Header";
import * as S from "./styles";

const HeaderFooter = (props: {
  children?: ReactNode;
  changeTheme: () => void;
  theme: object;
}) => {
  let themeIcon;
  if (props.theme === darkTheme) {
    themeIcon = <FontAwesomeIcon icon={faSun} />;
  } else {
    themeIcon = <FontAwesomeIcon icon={faMoon} />;
  }

  let themeButton = (
    <S.ThemeButton onClick={() => props.changeTheme()}>
      {themeIcon}
    </S.ThemeButton>
  );

  return (
    <S.Wrapper>
      <Header themeButton={themeButton} />

      <S.MainContent>{props.children}</S.MainContent>

      <Footer />
    </S.Wrapper>
  );
};

export default HeaderFooter;
