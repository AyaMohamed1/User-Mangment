import axios from "axios";

export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "631631214e0de5d2ddd7f151",
  },
});
