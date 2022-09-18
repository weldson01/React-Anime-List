import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiServices } from "../../services/api/ApiServices";
import { CardAnimes } from "../../shared/components";
import { IAnime } from "../../shared/types/TypesAnime";

export const Search = () => {
  const { title } = useParams();
  const [animes, setAnime] = useState<IAnime[]>([]);
  useEffect(() => {
    ApiServices.searchAnime(`${title}`).then((data) => {
      setAnime(data);
    });
  }, [title]);
  return (
    <main>
      <CardAnimes animes={animes} title={`Results for ${title}`} />
    </main>
  );
};
