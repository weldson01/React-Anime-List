import styled from "styled-components";
import { Categories, AnimeDestaque, AnimesPopulares } from "./components";

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  return (
    <Main>
      <AnimeDestaque />
      <Categories />
      <AnimesPopulares />
    </Main>
  );
};
