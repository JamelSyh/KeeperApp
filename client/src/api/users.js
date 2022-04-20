import axios from "axios";

const url = "http://localhost:5000/auth";

export const getLogin = async () => await axios.get(url + "/login");
export const postLogin = async (data) => await axios.post(url + "/login", data);
export const postRegister = async (data) =>
  await axios.post(url + "/register", data);
