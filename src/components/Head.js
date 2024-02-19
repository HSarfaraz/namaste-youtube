import React, { useEffect, useState } from "react";
import MenuIcon from "../assets/images/menu-icon.png";
import YoutubeIcon from "../assets/images/YouTube-Logo-Vector.png";
import UserIcon from "../assets/images/user-icon.png";
import SearchIcon from "../assets/images/search-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
    } else {
      getSearchSuggestions();
    }
    return () => {
      clearTimeout(timer);
    };
    // console.log(searchQuery);
    //Make an API call after evEry keypress
    //but if the api call is less then 200 ms, Decline the API Call
  }, [searchQuery]);

  //How above thing works
  /**
   * after key press i:
   * - render the component
   * - useEffect()
   * - start the timer, make an api call after 200ms
   *
   * after key press ip:
   * - destroy the component
   * - re-render the component
   * - useEffect()
   * - start the timer, make an api call after 200ms
   *
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src={MenuIcon}
          alt="menu icon"
          className="h-5 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img src={YoutubeIcon} alt="youtube icon" className="h-5 px-3" />
        </a>
      </div>
      <div className="px-10 col-span-10 ">
        <div>
          <input
            type="text"
            name=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)} //onBlur means not focus
            className="border border-gray-400 rounded-l-full px-3 w-1/2 h-10"
            placeholder="Search"
          />
          <button className="border border-gray-400 rounded-r-full px-4 py-3 h-10 absolute bg-gray-100">
            <img src={SearchIcon} alt="Search icon" className="h-5 px-2" />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-[31rem] shadow-lg rounded-lg border absolute border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  className="py-2 shadow-sm hover:bg-gray-100 flex"
                  key={suggestion}
                >
                  <img
                    src={SearchIcon}
                    alt="Search icon"
                    className="h-5 px-2"
                  />{" "}
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" col-span-1 text-blue">
        <button className="border border-gray-400 rounded-full px-2 py-1 flex">
          <img
            src={UserIcon}
            alt="youtube icon"
            className="h-7 px-1 pt-1 flex"
          />
          <label className="h-8 px-1 flex">Sign In</label>
        </button>
      </div>
    </div>
  );
};

export default Head;
