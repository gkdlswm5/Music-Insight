import axios from "axios";

export default {
  login: () => {
    return axios.get("/login");
  },
  //token route
  token: () => {
    return axios.get("/token");
  },
  //test value - should return Elvis
  test: () => {
    return axios.get("/test");
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
