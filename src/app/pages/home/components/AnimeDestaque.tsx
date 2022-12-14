import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ApiServices } from "../../../services/api/ApiServices";
import { IAnimeDetails } from "../../../shared/types/TypesAnime";

const Destaque = styled.div`
  width: 80vw;
  margin: 1.5rem 0 1.5rem 0;
  display: flex;
  flex-flow: column nowrap;

  h2 {
    align-self: flex-start;
    border-radius: 0 20px 0 0;
    background: #2c3333;
    padding: 10px;
    color: #e7f6f2;
  }
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 75vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0),
      rgba(0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
    img {
      width: 100%;
      filter: opacity(0.5);
    }
    .anime-destaque-info {
      position: absolute;
      bottom: 4rem;
      left: 2rem;
      color: #fff;
      filter: drop-shadow(0 0 15px rgb(0, 0, 0));
      h3 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.2rem;
        letter-spacing: 0.01rem;
      }
      .genres {
        display: flex;
        flex-flow: row nowrap;
        list-style: none;
        gap: 1rem;
        margin-top: 1rem;
        li {
          border-radius: 15px;
          padding: 0.5rem 1rem;
          background-color: #222;
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    h2 {
      font-size: 1.2rem;
    }
    .image-wrapper {
      width: 100%;
      height: 100%;
      .anime-destaque-info {
        left: 5px;
        h3 {
          font-size: 2rem;
        }
        p {
          font-size: 1rem;
          max-height: 9rem;
          max-width: 100%;
          padding: 10px;
          overflow-y: scroll;
        }
        .genres {
          gap: 0.2rem;
          li {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;
interface IAnimeDestaqueProps {
  animeID: string;
}

export const AnimeDestaque = ({ animeID }: IAnimeDestaqueProps) => {
  const [animeDetails, SetAnimeDetails] = useState<IAnimeDetails>(
    {} as IAnimeDetails
  );
  useEffect(() => {
    if (animeID.length > 0) {
      ApiServices.getAnimeDetails(animeID).then((data) => {
        SetAnimeDetails(data);
      });
    }
  }, [animeID]);

  return (
    <Destaque>
      <h2>Recommended Anime</h2>
      <div>
        <Link to={`/anime/${animeID}`}>
          <div className="image-wrapper">
            <img src={animeDetails?.animeImg} alt={animeDetails?.animeTitle} />
            <div className="anime-destaque-info">
              <h3>{animeDetails?.animeTitle}</h3>
              <p>{animeDetails?.synopsis}</p>
              <ul className="genres">
                {animeDetails?.genres?.slice(0, 3)?.map((genre) => {
                  return <li key={genre}>{genre}</li>;
                })}
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </Destaque>
  );
};
