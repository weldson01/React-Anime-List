import styled from "styled-components";

const ListOfCategories = styled.ul`
  &::-webkit-scrollbar {
    height: 1rem;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;

    background-color: #333;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 20px;
  }
  list-style: none;
  width: 1200px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  border-radius: 20px;
  padding: 0.5rem 0 0.5rem 0;
  overflow-x: scroll;
  li {
    text-decoration: none;
    min-width: 10rem;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 30px;
    border: 1px solid black;
    background-color: #222;
    color: #fff;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
      background-color: #444;
    }
  }
`;

export const Categories = () => {
  const categories = [
    "action",
    "adventure",
    "cars",
    "comedy",
    "crime",
    "dementia",
    "demons",
    "drama",
    "dub",
    "ecchi",
    "family",
    "fantasy",
    "game",
    "gourmet",
    "harem",
    "historical",
    "horror",
    "josei",
    "kids",
    "magic",
    "martial-arts",
    "mecha",
    "military",
    "Mmusic",
    "mystery",
    "parody",
    "police",
    "psychological",
    "romance",
    "samurai",
    "school",
    "sci-fi",
    "seinen",
    "shoujo",
    "shoujo-ai",
    "shounen",
    "shounen-ai",
    "slice-of-Life",
    "space",
    "sports",
    "super-power",
    "supernatural",
    "suspense",
    "thriller",
    "vampire",
    "yaoi",
    "yuri",
  ];

  return (
    <>
      <h4 style={{ fontSize: "1.5rem" }}>Categorias</h4>
      <ListOfCategories>
        {categories.map((categorie) => {
          return <li>{categorie}</li>;
        })}
      </ListOfCategories>
    </>
  );
};
