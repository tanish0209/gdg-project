import React, { useContext } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  //   const { aToken, setAToken } = useContext();
  const navigate = useNavigate();
  //   const logout = () => {
  //     navigate("/");
  //     aToken && setAToken("");
  //     aToken && localStorage.removeItem("aToken");

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b border-b-gray-300 bg-white">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-xs"
      >
        <p className="text-2xl font-extrabold text-primary cursor-pointer">
          EAZYQUIZZ
        </p>
        <p className="border px-2.5 py-0.5 rounded-full border-primary text-primary">
          {/* {aToken ? "Admin" : "Doctor"} */}
          Teacher
        </p>
      </div>
      <button
        onClick={() => navigate("/login")}
        className="bg-primary text-white text-sm px-10 py-2 cursor-pointer rounded-full"
      >
        Login / Signup
      </button>
    </div>
  );
};

export default Navbar;
