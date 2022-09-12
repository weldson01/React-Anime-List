import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiServices } from "../../services/api/ApiServices";
import { IAnime } from "../../shared/types/TypesAnime";

export const Categories = () => {
  const [animes, setAnimes] = useState<IAnime[]>([] as IAnime[]);
  const { category } = useParams();
  useEffect(() => {
    ApiServices.getAnimesFromCategory({
      category: `${category}`,
      page: 1,
    }).then((data) => {
      setAnimes(data);
    });
  }, [category]);
  return <main>Categories</main>;
};
