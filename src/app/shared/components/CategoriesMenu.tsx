import { Link } from "react-router-dom";
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
    min-width: 15vw;
    background-color: #999;
    border-radius: 20px;
  }
  list-style: none;
  width: 80vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  border-radius: 20px;
  padding: 0.5rem 0 0.5rem 0;
  overflow-x: scroll;
  li {
    text-decoration: none;
    white-space: nowrap;
    min-width: auto;
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
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 425px) {
    li {
      min-width: auto;
      max-width: auto;
      font-size: 1rem;
      text-overflow: initial;
    }
  }
`;

export const CategoriesMenu = () => {
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
      <h4 style={{ fontSize: "1.5rem", margin: "2rem 0" }}>Categories</h4>
      <ListOfCategories>
        {categories.map((category) => {
          return (
            <li key={category}>
              <Link to={`/anime/categories/${category}`}>{category}</Link>
            </li>
          );
        })}
      </ListOfCategories>
    </>
  );
};
