import { useContext, useEffect } from "react";
import { FavoriteAnimesContext } from "../contexts/FavoriteAnimesContext";

export const useFavoriteAnimes = () => {
  const { listAnimesId, setListAnimesId } = useContext(FavoriteAnimesContext);
  useEffect(() => {
    const localData = localStorage.getItem("list");
    if (localData) {
      setListAnimesId(() => {
        const data = JSON.parse(localData);
        return data;
      });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listAnimesId));
  }, [listAnimesId]);
  return { listAnimesId, setListAnimesId };
};
