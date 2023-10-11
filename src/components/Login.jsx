import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-screen object-cover md:object-contain md:h-auto"
          alt="hello"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="absolute p-12 text-white bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1
          className="text-3xl font-bold font-serif text-white mb-8"
          children={isSignInForm ? "Sign In" : "Sign Up"}
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="w-full py-2 m-2 bg-zinc-800 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full py-2 m-2 bg-zinc-800 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full py-2 m-2 bg-zinc-800 rounded-md"
        />
        <button className="text-white m-2 py-2 w-full bg-red-700 rounded-md my-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={() => setIsSignInForm(!isSignInForm)}
          className="text-white cursor-pointer"
        >
          {isSignInForm
            ? "New to netflix? Signup here"
            : "Already a user? Sign in here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
