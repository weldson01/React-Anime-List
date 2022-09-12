import { useState, useEffect } from "react";
import styled from "styled-components";
import { ApiServices } from "../../services/api/ApiServices";
import { Generator } from "../../shared/helper/GenerateNumber";
import { IAnime } from "../../shared/types/TypesAnime";
import {
  Categories,
  AnimeDestaque,
  AnimesPopulares,
  PaginationPopularAnime,
} from "./components";
const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  const [popularAnimes, setPopularAnimes] = useState<IAnime[]>([] as IAnime[]);
  const [pagePopular, setPagePopular] = useState(1);
  useEffect(() => {
    ApiServices.getPopular(`?page=${pagePopular}`).then((data) => {
      setPopularAnimes(data);
      console.log(data);
    });
  }, [pagePopular]);

  const handleSelecetPage = (page: number) => {
    setPagePopular(page);
  };
  return (
    <Main>
      {popularAnimes && (
        <AnimeDestaque
          animeID={
            popularAnimes[Generator(popularAnimes.length - 1)]?.animeId || ``
          }
        />
      )}
      <Categories />
      <AnimesPopulares animes={popularAnimes} />
      <PaginationPopularAnime
        pageFunction={handleSelecetPage}
        page={pagePopular}
      />
    </Main>
  );
};
