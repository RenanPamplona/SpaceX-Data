import React from "react";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.Text>Made by </S.Text>
        <S.Link href="https://github.com/RenanPamplona">Renan Pamplona</S.Link>
        <S.Text> for educational purposes.</S.Text>
      </div>
      <div>
        <S.Text>This project is not affiliated with </S.Text>
        <S.Link href="https://www.spacex.com">SpaceX</S.Link>
        <S.Text> company or any of its affiliates in any way.</S.Text>
      </div>
      <div>
        <S.Text>Images source: </S.Text>
        <S.Link href="https://www.flickr.com/photos/spacex/">
          SpaceX Flickr
        </S.Link>
        <S.Text> | Data source: </S.Text>
        <S.Link href="https://github.com/r-spacex/SpaceX-API">
          SpaceX API
        </S.Link>
      </div>
    </S.Footer>
  );
};

export default Footer;
