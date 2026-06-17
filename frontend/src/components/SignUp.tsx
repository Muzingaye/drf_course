import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function onSubmit(data) {
    console.log(`${data.email}`);
    // alert("submitted");
  }
  return (
    <div className="flex flex-col justify-center m-6 bg-gray-100 rounded-lg border border-black-100">
      <div className="ali">
        <h1 className="p-8">Sign Up</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 rounded-b-lg place-items-center border border-black-1"
      >
        <div className="m-1">
          <label className="">
            Email{" "}
            <input
              type="email"
              placeholder="me@example.com"
              className="justify-end"
              {...register("email", { required: "Email is required" })}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {errors.email && (
            <p className="text-red-800">{errors.email.message}</p>
          )}
        </div>

        <div className="m-1">
          <label>
            Password
            <input
              type="password"
              placeholder="your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be atleast 4 chars",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be most 12 chars",
                },
              })}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {errors.password && (
            <p className="text-red-800">{errors.password.message}</p>
          )}
        </div>

        <div className="m-4 justify-center">
          <button type="submit" className="text-green-400-100 items-center">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
