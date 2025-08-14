import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";
import TrendingIcon from "../assets/icons/trending.svg";
import NewRelease from "../assets/icons/newRelease.svg";
import ComingSoon from "../assets/icons/commingSoon.svg";
import Favorite from "../assets/icons/favourite.svg";
import watchLater from "../assets/icons/watchLater.svg";

const Sidebar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-[#00D991] text-black"
            href="#"
          >
            <FaHome width="24" height="24" />

            <span>Home</span>
          </a>
        </li>
        <hr className="mt-4 mb-4" />
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <MdOutlineTrendingUp className="w-7 h-7" />

            <span>Trending</span>
          </a>
        </li>
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img src={NewRelease} width="24" height="24" alt="" />
            <span>New Releases</span>
          </a>
        </li>
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={ComingSoon} width="24" height="24" alt="" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img src={Favorite} width="24" height="24" alt="" />
            <span>Favourites</span>
          </a>
        </li>
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img src={watchLater} width="24" height="24" alt="" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
