import data from "../data";
import axios from "axios";

const getList = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve(data);
    // }, 200);
    axios.get("http://api.tvmaze.com/search/shows?q=spider").then(res => {
      resolve(res.data);
    });
  });
};

const getDetail = params => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   let item = data.find(i => i.show.id == params.id);
    //   resolve(item.show);
    // }, 300);

    axios.get(`http://api.tvmaze.com/shows/${params.id}`).then(res => {
      resolve(res.data);
    });
  });
};

export default {
  getList,
  getDetail
};
