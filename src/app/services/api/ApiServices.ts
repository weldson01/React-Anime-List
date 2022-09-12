import { IAnime, IAnimeDetails } from "../../shared/types/TypesAnime";
import { Api } from "./Api-config";

const recentRealize = async (): Promise<IAnime[]> => {
  const response = await Api().get("recent-release");
  return response.data;
};
const getPopular = async (page: string): Promise<IAnime[]> => {
  const response = await Api().get(`popular${page}`);
  return response.data;
};
const getAnimeDetails = async (animeId: string): Promise<IAnimeDetails> => {
  const response = await Api().get(`anime-details/${animeId}`);
  return response.data;
};

export const ApiServices = {
  recentRealize,
  getPopular,
  getAnimeDetails,
};
