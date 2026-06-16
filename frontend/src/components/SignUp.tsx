import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email + " " + password);
    // alert("submitted");
  }
  return (
    <div className="flex flex-col justify-center m-6 bg-gray-100 rounded-lg border border-black-100">
      <div className="ali">
        <h1 className="p-8">Sign Up</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-80 rounded-b-lg place-items-center border border-black-1"
      >
        <div className="m-1">
          <label className="">
            Email{" "}
            <input
              type="email"
              placeholder="me@example.com"
              className="justify-end"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="m-1">
          <label>
            Password
            <input
              type="password"
              placeholder="your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
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
