// import axios from "axios";
import types from "./types";
import { services } from "../../services/services";

export const registerUser = (param) => async (dispatch, getState) => {
  console.log("param REGISTR", param);
  // const data = await axios.post(
  //   `https://kidslike.goit.co.ua/api/auth/signup`,
  //   param,
  //   {
  //     headers: { "Content-Type": "application/json" },
  //   }
  // );

  const data = await services.createUser(param);

  console.log("data", data);

  dispatch({ type: types.REGISTR_USER, payload: data.data });
};

export const loginUser = (param) => async (dispatch, getState) => {
  console.log("param LOGIN", param);

  const data = await services.userSignIn(param);

  console.log("data", data);

  dispatch({ type: types.LOGIN_USER, payload: data.data });
};