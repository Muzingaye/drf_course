import React, { createContext, useState, type ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  signUp: (email: string, password: string) => void;
  login: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);

  function signUp(user: string, password: string) {
    const existingUser = localStorage.getItem("user");
    const userList = existingUser ? JSON.parse(existingUser) : [];

    if (userList.find((u) => u.user === user)) {
      return { success: false, error: "Error already exists" };
    }
    userList.push({ user, password });
    localStorage.setItem("users", JSON.stringify(userList));
    localStorage.setItem("users", JSON.stringify(userList));

    setUser(user);

    return { success: true };
  }

  function login(user: string, password: string) {
    const existingUser = localStorage.getItem("user");
    const userList = existingUser ? JSON.parse(existingUser) : [];

    if (userList.find((u) => u.user === user)) {
      return { success: false, error: "Error already exists" };
    }
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ user, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
