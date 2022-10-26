import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardAnimes } from "../../shared/components";
import { useFavoriteAnimes } from "../../shared/hooks/UseFavoriteAnimes";

const Main = styled.main``;

export const AnimeListFavorite = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(() => {
      const storage = localStorage.getItem("list");
      console.log(storage);
      if (storage) {
        return JSON.parse(storage);
      }
    });
  }, []);
  return (
    <Main>
      {list && <CardAnimes animes={list} title={"Your favorite animes list"} />}
    </Main>
  );
};
