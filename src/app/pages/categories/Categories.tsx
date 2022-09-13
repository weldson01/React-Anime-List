import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiServices } from "../../services/api/ApiServices";
import {
  CardAnimes,
  CategoriesMenu,
  Pagination,
} from "../../shared/components";
import { IAnime } from "../../shared/types/TypesAnime";

export const Categories = () => {
  const [animes, setAnimes] = useState<IAnime[]>([] as IAnime[]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { category } = useParams();
  useEffect(() => {
    ApiServices.getAnimesFromCategory({
      category: `${category}`,
      page: page,
    }).then((data) => {
      setAnimes(data);
    });
    switch (category) {
      case "action":
      case "adventure":
      case "comedy":
      case "drama":
      case "fantasy":
        setMaxPage(100);
        break;
      case "ecchi":
      case "kids":
      case "magic":
      case "mecha":
      case `slice-of-Life`:
        setMaxPage(25);
        break;
      case "demons":
      case "game":
      case "harem":
      case "horror":
      case "martial-arts":
        setMaxPage(10);
        break;
      case "cars":
        setMaxPage(4);
        break;
      default:
        setMaxPage(1);
    }
  }, [category, page]);

  const handleChangePage = (page: number) => {
    setPage(page);
  };
  return (
    <main>
      <CategoriesMenu />
      <CardAnimes animes={animes} title={`${category?.toLocaleUpperCase()}`} />
      <Pagination
        pageFunction={handleChangePage}
        page={page}
        maxPage={maxPage}
      />
    </main>
  );
};
