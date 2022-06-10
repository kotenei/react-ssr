import axios from "axios";

const isServer = typeof window === "undefined";

let clientInstance;
let serverInstance;

const getInstance = () => {
  if (!serverInstance && isServer) {
    serverInstance = axios.create({
      baseURL: "http://api.tvmaze.com",
    });
  }

  if (!clientInstance && !isServer) {
    clientInstance = axios.create({
      baseURL: "/"
    });
  }

  return isServer ? serverInstance : clientInstance;
};

export default getInstance();
