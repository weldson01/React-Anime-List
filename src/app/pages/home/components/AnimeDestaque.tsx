import styled from "styled-components";

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
    background-color: #000;
    img {
      width: 100%;
      filter: opacity(0.8);
    }
    .anime-destaque-info {
      position: absolute;
      bottom: 5rem;
      left: 2rem;
    }
  }
`;

export const AnimeDestaque = () => {
  return (
    <Destaque>
      <h2>Anime Destaque</h2>
      <div>
        <div className="image-wrapper">
          <img src="https://via.placeholder.com/400" alt="" />
          <div className="anime-destaque-info">
            <h3>Title Anime destaque</h3>
            <p>Sinopse</p>
          </div>
        </div>
      </div>
    </Destaque>
  );
};
