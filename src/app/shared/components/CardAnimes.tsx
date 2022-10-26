import { Link } from "react-router-dom";
import styled from "styled-components";
import { IAnime } from "../types/TypesAnime";

const AnimesList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  list-style: none;
  max-width: 100vw;
  li {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    .image-wrapper {
      aspect-ratio: 8/12;
      width: calc(100vw / 6);
      @media screen and (max-width: 420px) {
        width: calc(100vw / 5);
      }
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transition: 0.5s;
      }
    }
    .info {
      position: absolute;
      bottom: -3rem;
      height: 3rem;
      width: 100%;
      text-align: center;
      background-color: #222;
      color: #fff;
      font-size: 1.5rem;
      transition: 0.5s;
    }
    &:hover {
      .info {
        bottom: 0;
      }
      img {
        transform: scale(1.2);
        filter: brightness(0.5);
      }
    }
  }
`;

interface ICardAnimes {
  animes: IAnime[];
  title: string;
}
export const CardAnimes = ({ animes, title }: ICardAnimes) => {
  return (
    <>
      <h3 style={{ fontSize: "1.5rem", margin: "2rem 0" }}>{title}</h3>
      <AnimesList>
        {animes &&
          animes.map((anime: IAnime) => {
            return (
              <li key={anime.animeId}>
                <Link to={`/anime/${anime.animeId}`}>
                  <div className="image-wrapper">
                    <img src={anime?.animeImg} alt={anime.animeTitle} />
                  </div>
                  <div className="info">
                    <h5 className="title">
                      {anime.animeTitle && anime.animeTitle?.length > 20
                        ? `${anime.animeTitle?.slice(0, 30)} ...`
                        : anime.animeTitle}
                    </h5>
                  </div>
                </Link>
              </li>
            );
          })}
      </AnimesList>
    </>
  );
};
