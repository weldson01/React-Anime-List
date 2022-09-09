import { useState, useEffect } from "react";
import styled from "styled-components";
import { ApiServices } from "../../../services/api/ApiServices";
import { IAnime, IAnimeDetails } from "../../../shared/types/TypesAnime";

const Destaque = styled.div`
  margin: 1.5rem 0 1.5rem 0;
  display: flex;
  flex-flow: column nowrap;

  h2 {
    align-self: flex-start;
    border-radius: 20px 20px 0 0;
    border: 1px solid black;
    padding: 10px;
  }
  .image-wrapper {
    position: relative;
    width: 1200px;
    height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0),
      rgba(0, 0, 0),
      rgba(0, 0, 0, 0.7)
    );
    img {
      width: 100%;
      filter: opacity(0.5);
    }
    .anime-destaque-info {
      position: absolute;
      bottom: 5rem;
      left: 2rem;
      color: #fff;
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
      <h2>Anime Destaque</h2>
      <div>
        <div className="image-wrapper">
          <img src={animeDetails?.animeImg} alt={animeDetails?.animeTitle} />
          <div className="anime-destaque-info">
            <h3>{animeDetails?.animeTitle}</h3>
            <p>{animeDetails?.synopsis}</p>
          </div>
        </div>
      </div>
    </Destaque>
  );
};
