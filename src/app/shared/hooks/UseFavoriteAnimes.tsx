import { useContext } from "react";
import { FavoriteAnimesContext } from "../contexts/FavoriteAnimesContext";

export const useFavoriteAnimes = () => {
  const { listAnimesId, setListAnimesId } = useContext(FavoriteAnimesContext);
  return { listAnimesId, setListAnimesId };
};
