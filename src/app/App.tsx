import { useEffect, useState } from "react";
import { ApiServices } from "./services/api/ApiServices";
import { IAnime } from "./shared/types/TypesAnime";
export const App = () => {
  const [animesRecentes, setAnimesRecentes] = useState<IAnime[]>(
    [] as IAnime[]
  );

  useEffect(() => {
    ApiServices.recentRealize().then((data) => {
      setAnimesRecentes(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      {animesRecentes?.map((anime) => {
        return (
          <>
            <p>{anime.animeTitle}</p>
            <img src={anime.animeImg} alt={anime.animeTitle} />
          </>
        );
      })}
    </div>
  );
};
