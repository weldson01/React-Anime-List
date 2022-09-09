import { IAnime } from "../../shared/types/TypesAnime";
import { Api } from "./Api-config";

const recentRealize = async (): Promise<IAnime[]> => {
  const resposta = await Api().get("recent-release");
  return resposta.data;
};

export const ApiServices = {
  recentRealize,
};
