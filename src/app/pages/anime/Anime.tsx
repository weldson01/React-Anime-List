import { useParams } from "react-router-dom";
import { AnimeView } from "./components";

export const Anime = () => {
  const { animeId } = useParams();
  return (
    <main>
      <AnimeView animeId={`${animeId}`} />
    </main>
  );
};
