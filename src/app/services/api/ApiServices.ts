import { IAnime } from "../../shared/types/TypesAnime";
import { Api } from "./Api-config";

const recentRealize = async (): Promise<IAnime[]> => {
  const response = await Api().get("recent-release");
  return response.data;
};
const getPopular = async (): Promise<IAnime[]> => {
  const response = await Api().get("popular");
  return response.data;
};

export const ApiServices = {
  recentRealize,
  getPopular,
};
