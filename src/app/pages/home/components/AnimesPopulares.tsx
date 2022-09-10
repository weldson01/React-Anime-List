import styled from "styled-components";
import { IAnime } from "../../../shared/types/TypesAnime";

const AnimesListPopulares = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  list-style: none;
  li {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    .image-wrapper {
      width: 15rem;
      height: 20rem;
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

interface IAnimesPopularesProps {
  animes: IAnime[];
}
export const AnimesPopulares = ({ animes }: IAnimesPopularesProps) => {
  return (
    <>
      <h3 style={{ fontSize: "1.5rem", margin: "1rem 0" }}>Animes populares</h3>
      <AnimesListPopulares>
        {animes &&
          animes.map((anime: IAnime) => {
            return (
              <li>
                <div className="image-wrapper">
                  <img src={anime.animeImg} alt={anime.animeTitle} />
                </div>
                <div className="info">
                  <h5 className="title">
                    {anime.animeTitle && anime.animeTitle?.length > 20
                      ? `${anime.animeTitle?.slice(0, 30)} ...`
                      : anime.animeTitle}
                  </h5>
                </div>
              </li>
            );
          })}
      </AnimesListPopulares>
    </>
  );
};
