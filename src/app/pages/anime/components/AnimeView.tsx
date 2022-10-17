import {
  Calendar,
  CircleNotch,
  CirclesThree,
  CircleWavy,
  CircleWavyCheck,
  Hash,
} from "phosphor-react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ApiServices } from "../../../services/api/ApiServices";
import { IAnimeDetails } from "../../../shared/types/TypesAnime";

const Rotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
}
`;

const ShowAnime = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #395b64;
  margin: 2rem 0;
  display: flex;
  flex-flow: row nowrap;

  .anime-details {
    max-width: 20rem;
    .anime-image {
      width: 20rem;
      height: 75%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .info {
      width: 100%;
      height: 25%;
      background-color: #2c3333;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding: 0.5rem 1rem 0 0;
      color: #fff;
      font-size: 1.4rem;

      div {
        display: flex;
        justify-content: space-between;
      }
      svg {
        color: #e7f6f2;
        font-size: 1.5rem;
      }
      div:last-child {
        margin-top: 0.5rem;
      }
      .Going {
        animation: ${Rotation} 1s linear infinite;
        color: #f5f56b;
      }
      .Completed {
        color: #6cd9c3;
      }
      .genres {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-evenly;
        gap: 0.2rem;
        span {
          background-color: #111;
          padding: 0.5rem;
          border-radius: 30px;
          font-size: 1rem;
        }
      }
    }
  }
  .synopsis-section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
    color: #fff;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
      &::first-letter {
        padding-left: 1rem;
      }
    }
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .anime-details {
      .info {
        padding: 1rem;
      }
    }
  }
`;

interface IAnimeViewProps {
  animeId: string;
}
export const AnimeView = ({ animeId }: IAnimeViewProps) => {
  const [anime, setAnime] = useState<IAnimeDetails>({} as IAnimeDetails);
  useEffect(() => {
    ApiServices.getAnimeDetails(animeId).then((anime) => {
      setAnime(anime);
    });
  }, [animeId]);
  return (
    <ShowAnime>
      <div className="anime-details">
        <div className="anime-image">
          <img src={anime?.animeImg} alt={anime?.animeTitle} />
        </div>
        <div className="info">
          <div className="realeased-at">
            <Calendar />
            <p>{`Realized at ${anime?.releasedDate}`}</p>
          </div>
          <div className="status">
            {anime?.status == "Completed" ? (
              <CircleWavyCheck weight="bold" className="Completed" />
            ) : (
              <CircleNotch className="Going" />
            )}
            <p>{`Anime status: ${anime?.status}`}</p>
          </div>
          <div className="episodes-total">
            <Hash /> <p>{`Total Episodes ${anime?.totalEpisodes}`}</p>
          </div>
          <div className="genres">
            {anime?.genres?.slice(0, 3).map((genre) => {
              return <span key={genre}>{genre}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="synopsis-section">
        <div className="anime-title">
          <h2>{anime?.animeTitle}</h2>
        </div>
        <div className="synopsis-anime">
          <p>{`${anime?.synopsis?.slice(0, 1000)} ...`}</p>
        </div>
      </div>
    </ShowAnime>
  );
};
