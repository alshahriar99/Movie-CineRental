import React from "react";
import trandingIcon from "../assets/icons/trending.svg";
import newRelaease from "../assets/icons/trending.svg";
import commingSoon from "../assets/icons/trending.svg";
import favourite from "../assets/icons/trending.svg";
import watchLater from "../assets/icons/trending.svg";

const Sidebar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-[#00D991] text-black"
            href="#"
          >
            <img src={trandingIcon} width="24" height="24" alt="" />
            <span>Trending</span>
          </a>
        </li>
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img
              className="dark:bg-white"
              src={newRelaease}
              width="24"
              height="24"
              alt=""
            />
            <span>New Releases</span>
          </a>
        </li>
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              className="dark:bg-white"
              src={commingSoon}
              width="24"
              height="24"
              alt=""
            />
            <span>Coming Soon</span>
          </a>
        </li>
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img
              className="dark:bg-white"
              src={favourite}
              width="24"
              height="24"
              alt=""
            />
            <span>Favourites</span>
          </a>
        </li>
        <li className="dark:border dark:border-white/10 rounded-lg">
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img
              className="dark:bg-white"
              src={watchLater}
              width="24"
              height="24"
              alt=""
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
