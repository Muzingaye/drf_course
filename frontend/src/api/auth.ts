import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export type AuthResponse = {
  access: string;
  refresh: string;
};

export const registerUser = async (username: string, password: string) => {
  const res = await api.post("/register/", {
    username,
    password,
  });

  return res.data;
};

export const loginUser = async (
  username: string,
  password: string,
): Promise<AuthResponse> => {
  const res = await api.post("/token/", {
    username,
    password,
  });

  return res.data;
};
