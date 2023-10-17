import React, { useEffect } from "react";
import { SUPPORTED_LANG, userIcon } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen z-20 px-5 py-2 bg-gradient-to-b from-black flex flex-row md:flex-row justify-between">
      <h1 className="font-sans font-bold text-3xl bg-gradient-to-r from-blue-400 to-white inline-block text-transparent bg-clip-text">
        Movieflix
      </h1>
      {user && (
        <div className="flex p-2 justify-between">
          {showGpt && (
            <select
              defaultValue={langKey}
              onChange={handleLanguageChange}
              className=" p-0.5  mb-2 mx-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              {SUPPORTED_LANG.map((lang) => (
                <option
                  key={lang.identifier}
                  className="bg-black p-2 mt-5"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="relative flex items-center justify-center p-0.5  mb-2 mx-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {showGpt ? "HOMEPAGE" : "GptSearch"}
            </span>
          </button>
          <div className="flex">
            <img
              className="w-10 mx-3 h-10 hidden md:block "
              src={userIcon}
              alt="user icon"
            />
            <button onClick={handleSignOut} className="font-bold  text-white">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
