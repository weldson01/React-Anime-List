import axios from "axios";

export const Api = () => {
  return axios.create({ baseURL: "https://gogoanime.herokuapp.com/" });
};
