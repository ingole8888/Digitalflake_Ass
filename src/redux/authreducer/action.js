import * as types from "./action.types"
import axios from "axios";
const BASEURL="https://apv2.onrender.com"

export const loginuser = (params) => (dispatch) => {
  dispatch({type:types.GET_LOGIN_REQUEST})
  return axios
    .post(`${BASEURL}/user/login`,params)
    .then((res) => { dispatch({type:types.GET_LOGIN_SUCCESS,payload:res.data.token, user:res.data})
      
      return res.data.message
    })
    .catch((err) => { dispatch({type:types.GET_LOGIN_FAILURE,payload:err})
      console.log("err:", err);
    });
};

export const signupuser = (params) => (dispatch) => {
  dispatch({type:types.GET_SIGNUP_REQUEST})
  return axios
    .post(`${BASEURL}/user/signup`,params)
    .then((res) => { dispatch({type:types.GET_SIGNUP_SUCCESS,payload:res.data.token, user:res.data})
      
      return res.data.message
    })
    .catch((err) => { dispatch({type:types.GET_SIGNUP_FAILURE,payload:err})
      console.log("err:", err);
    });
};