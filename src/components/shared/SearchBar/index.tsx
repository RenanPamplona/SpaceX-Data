import React, { ReactNode, useEffect, useState } from "react";
import * as S from "./styles";

const SearchBar = (props: {
  children?: ReactNode;
  setStateMethod: (string: string) => void;
  state?: string;
  type?: string;
}) => {
  return (
    <S.Wrapper>
      <S.Label>Search for {props.type}:</S.Label>
      <S.Input
        type="text"
        placeholder="Type here..."
        value={props.state}
        onChange={(e) => props.setStateMethod(e.target.value)}
      />
    </S.Wrapper>
  );
};

export default SearchBar;
