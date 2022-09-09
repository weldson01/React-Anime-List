export interface IAnime {
  animeId?: string;
  episodeId?: string;
  animeTitle?: string;
  episodeNum?: string;
  subOrDub?: string;
  animeImg?: string;
  episodeUrl?: string;
}
export interface IAnimeDetails {
  animeTitle: string;
  type: string;
  releasedDate: string;
  status: string;
  genres: [];
  otherNames: string;
  synopsis: string;
  animeImg: string;
  totalEpisodes: string;
  episodesList: [];
}
