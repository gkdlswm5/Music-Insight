import axios from "axios";

export default {
  userAuthorize: () => {
    return axios.get("/login");
  },
  APItest: () => {
    return axios.get("/login2");
  },
  getAllNewReleases: () => {
    return axios.get("https://api.spotify.com/v1/browse/new-releases");
  },
  //search by song
  searchBySong: (name) => {
    return axios.get("/api/song/" + name);
  },
  //search by song artist
  searchByArtist: (name) => {
    return axios.get("/api/artist/" + name);
  },
  //search by song album
  searchByAlbum: (name) => {
    return axios.get("/api/album/" + name);
  },
};
