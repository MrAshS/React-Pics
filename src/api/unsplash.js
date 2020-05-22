import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID J1OzT36rFC08SoLTF4Rbo7r1EZulBKHLGf0ltmo5sd0",
  },
});
