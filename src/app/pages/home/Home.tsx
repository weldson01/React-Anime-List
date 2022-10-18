import { useState, useEffect } from "react";
import { ApiServices } from "../../services/api/ApiServices";
import { Generator } from "../../shared/helper/GenerateNumber";
import { IAnime } from "../../shared/types/TypesAnime";
import { AnimeDestaque } from "./components";
import {
  CardAnimes,
  Pagination,
  CategoriesMenu,
} from "../../shared/components";
export const Home = () => {
  const [popularAnimes, setPopularAnimes] = useState<IAnime[]>([] as IAnime[]);
  const [pagePopular, setPagePopular] = useState(1);
  useEffect(() => {
    ApiServices.getPopular(`?page=${pagePopular}`).then((data) => {
      setPopularAnimes(data);
    });
  }, [pagePopular]);

  const handleSelecetPage = (page: number) => {
    setPagePopular(page);
  };
  return (
    <main>
      {popularAnimes && (
        <AnimeDestaque
          animeID={
            popularAnimes[Generator(popularAnimes.length - 1)]?.animeId || ``
          }
        />
      )}
      <CategoriesMenu />
      <CardAnimes animes={popularAnimes} title="Popular Animes" />
      <Pagination
        pageFunction={handleSelecetPage}
        page={pagePopular}
        maxPage={504}
      />
    </main>
  );
};
