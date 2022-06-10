import api from "../../service/api";

export const SET_DETAIL = "SET_DETAIL";

export const setDetail = data => {
  return {
    type: SET_DETAIL,
    payload: data
  };
};

export function getDetail(params) {
  return dispatch => {
    return api.getDetail(params).then(data => {
      dispatch(setDetail(data));
    });
  };
}
