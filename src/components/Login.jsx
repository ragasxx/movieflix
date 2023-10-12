import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMAGE_URL } from "../utils/constants";
import { validateSignin } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    // validate the form data
    const message = validateSignin(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return null;

    // signin signup logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-screen object-cover md:object-contain md:h-auto"
          alt="hello"
          src={BG_IMAGE_URL}
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
            ref={name}
            placeholder="Full name"
            className="w-full py-2 m-2 bg-zinc-800 rounded-md outline-red-500"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="w-full py-2 m-2 bg-zinc-800 rounded-md outline-red-500"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="w-full py-2 m-2 bg-zinc-800 rounded-md outline-red-500"
        />
        {errorMessage && (
          <p className="text-md font-serif font-semibold text-red-500 p-3">
            {errorMessage}
          </p>
        )}

        <button
          onClick={handleButtonClick}
          className="text-white m-2 py-2 w-full bg-red-700 rounded-md my-6"
        >
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
