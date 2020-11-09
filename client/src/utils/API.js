import axios from "axios";

export default {
  //token route
  token: () => {
    return axios.get("/token");
  },
  //test value - should return Elvis
  test: () => {
    return axios.get("/test");
  },
  //search by song
  searchBySong: (name) => {
    // return axios.get("/api/song/" + name);
    return axios.get("/api/song/" + name);
  },
  songAnalysis: (songID) => {
    return axios.get("/analysis/song/" + songID);
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
