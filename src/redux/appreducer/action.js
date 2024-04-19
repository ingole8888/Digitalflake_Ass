import * as types from "./action.types";
import axios from "axios";
const BASEURL = "https://apv2.onrender.com";


export const getallcomplain = ( ComplaintCategory, token) =>
  (dispatch) => {
    dispatch({ type: types.GET_ALLCOMPLAIN_REQUEST });
    return axios
      .get(
        `${BASEURL}/category/?searchTerm=${ComplaintCategory}&page=${1}&limit=${10}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        dispatch({ type: types.GET_ALLCOMPLAIN_SUCCESS, payload: res.data });

        return res.data.message;
      })
      .catch((err) => {
        dispatch({ type: types.GET_ALLCOMPLAIN_FAILURE, payload: err });
        console.log("err:", err);
      });
  };


export const addcomplain = (formData1, token) => (dispatch) => {
  dispatch({ type: types.ADD_COMPLAIN_REQUEST });

  const config = {
    headers: {
      Authorization: token,
    },
  };

  return axios
    .post(`${BASEURL}/category/add`, formData1, config)
    .then((res) => {
      dispatch({ type: types.ADD_COMPLAIN_SUCCESS, payload: res.data });
      return res.data.message;
    })
    .catch((err) => {
      dispatch({ type: types.ADD_COMPLAIN_FAILURE, payload: err.response });
      console.error("Error:", err);
      throw err;
    });
};

export const getall = ( ComplaintCategory, token) =>
  (dispatch) => {
    dispatch({ type: types.GET_ALLPRODUCT_REQUEST });
    return axios
      .get(
        `${BASEURL}/product/?searchTerm=${ComplaintCategory}&page=${1}&limit=${10}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        dispatch({ type: types.GET_ALLPRODUCT_SUCCESS, payload: res.data });

        return res.data.message;
      })
      .catch((err) => {
        dispatch({ type: types.GET_ALLPRODUCT_FAILURE, payload: err });
        console.log("err:", err);
      });
  };


export const addpro= (formData1, token) => (dispatch) => {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });

  const config = {
    headers: {
      Authorization: token,
    },
  };

  return axios
    .post(`${BASEURL}/product/add`, formData1, config)
    .then((res) => {
      dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: res.data });
      return res.data.message;
    })
    .catch((err) => {
      dispatch({ type: types.ADD_PRODUCT_FAILURE, payload: err.response });
      console.error("Error:", err);
      throw err;
    });
};
