import api from "../../service/api";

export const SET_LIST = "SET_LIST";

export const setList = data => {
  return {
    type: SET_LIST,
    payload: data
  };
};

export function getList() {
  return (dispatch, getState, axiosInstance) => {
    return api.getList().then(data => {
      dispatch(setList(data));
    });
  };
}
