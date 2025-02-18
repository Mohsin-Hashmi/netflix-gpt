import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { USER_AVTAR } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    /**Unsubscribe when component unmount */
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-full flex justify-between">
        <img
          className="w-44"
          src={NETFLIX_LOGO}
          alt="netflix logo"
        />
        {user && (
          <div className="flex items-center gap-x-10">
            <img
              src={USER_AVTAR}
              alt="user avtar"
            />
            <button
              onClick={handleSignOut}
              className="bg-[#E50914] p-3 text-white text-[17px] rounded-lg"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
