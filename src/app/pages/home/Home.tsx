import { useState, useEffect } from "react";
import styled from "styled-components";
import { ApiServices } from "../../services/api/ApiServices";
import { Generator } from "../../shared/helper/GenerateNumber";
import { IAnime } from "../../shared/types/TypesAnime";
import { Categories, AnimeDestaque, AnimesPopulares } from "./components";
import { ArrowLeft, ArrowRight } from "phosphor-react";
const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Navegation = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 2rem;
  list-style: none;
  margin: 2rem 0;
  li {
    button {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 30px;
      background-color: #222;
      color: #fff;
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
      &:active {
        border: 1px solid black;
      }
    }
  }
`;

export const Home = () => {
  const [popularAnimes, setPopularAnimes] = useState<IAnime[]>([] as IAnime[]);
  const [popularAnimesPage, setPopularAnimesPage] = useState(1);
  useEffect(() => {
    ApiServices.getPopular(`?page=${popularAnimesPage}`).then((data) => {
      setPopularAnimes(data);
      console.log(data);
    });
  }, [popularAnimesPage]);

  const handleChangePage = (page: number) => {
    setPopularAnimesPage(page);
    // todo
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
      <div>
        {/* todo páginação */}
        <Navegation>
          {popularAnimesPage > 1 && (
            <li>
              <button
                onClick={() => {
                  handleChangePage(1);
                }}
              >
                {1}
              </button>
            </li>
          )}
          {popularAnimesPage > 2 && (
            <li>
              <button
                onClick={() => {
                  handleChangePage(popularAnimesPage - 1);
                }}
              >
                <ArrowLeft />
              </button>
            </li>
          )}
          <li>
            <button>{popularAnimesPage}</button>
          </li>
          {popularAnimesPage < 504 && (
            <li>
              <button
                onClick={() => {
                  handleChangePage(popularAnimesPage + 1);
                }}
              >
                <ArrowRight />
              </button>
            </li>
          )}
          {popularAnimesPage < 503 && (
            <li>
              <button
                onClick={() => {
                  handleChangePage(504);
                }}
              >
                {504}
              </button>
            </li>
          )}
        </Navegation>
      </div>
    </Main>
  );
};
