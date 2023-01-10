import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/components/global/style/global";
import HeaderFooter from "../src/components/HeaderFooter";
import { darkTheme, lightTheme } from "./../src/components/global/style/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);

  const changeTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderFooter changeTheme={changeTheme} theme={theme}>
        <Component {...pageProps} changeTheme={changeTheme} />
        <GlobalStyle />
      </HeaderFooter>
    </ThemeProvider>
  );
}
