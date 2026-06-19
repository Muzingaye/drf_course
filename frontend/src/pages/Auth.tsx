import React, { useContext, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

interface AuthFormData {
  user: string;
  password?: string;
}
const Auth = () => {
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const authContext = useContext(AuthContext);
  if (!authContext) {
    console.log("Auth component must be used within an AuthProvider");
    //throw new Error("Auth component must be used within an AuthProvider");
  }
  const { signUp, login } = authContext;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const onSubmit: SubmitHandler<AuthFormData> = (data) => {
    if (mode === "signup") {
      signUp(data.user, data.password || "");
    } else {
      login?.(data.user, data.password || "");
    }
  };

  return (
    <div className="flex flex-col justify-center m-6 bg-gray-100 rounded-lg border border-black-100">
      <div className="container">
        <div className="auth-container">
          <h1 className="p-8">{mode === "signup" ? "Sign Up" : "Login"}</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-80 rounded-b-lg place-items-center border border-black-1"
          >
            <div className="m-1">
              <label className="">
                User
                <input
                  type="text"
                  placeholder="Your name"
                  className="justify-end"
                  id="user"
                  {...register("user", { required: "Username is required" })}
                />
              </label>
              {errors.user && (
                <p className="text-red-800">{errors.user.message}</p>
              )}
            </div>

            <div className="m-1">
              <label>
                Password
                <input
                  type="password"
                  id="password"
                  placeholder="your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be atleast 6 chars",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be most 12 chars",
                    },
                  })}
                />
              </label>
              {errors.password && (
                <p className="text-red-800">{errors.password.message}</p>
              )}
            </div>

            <div className="m-4 justify-center">
              <button type="submit" className="text-green-400-100 items-center">
                <h1 className="p-8">
                  {mode === "signup" ? "Sign Up" : "Login"}
                </h1>
              </button>
            </div>
          </form>
          <div className="auth-switch">
            {mode == "signup" ? (
              <p>
                Already have an account ?{" "}
                <span
                  className="text-blue-500"
                  onClick={() => setMode("login")}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account ?{" "}
                <span
                  className="text-blue-500 "
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
