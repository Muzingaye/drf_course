import React, { createContext, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUsr] = useState(null);

  function signUp() {}

  function login() {}
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
