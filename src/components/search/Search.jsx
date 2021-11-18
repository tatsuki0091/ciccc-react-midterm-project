import React, { useContext, useRef } from "react";
import style from "./search.module.css";
import { DataContext } from "../../App";
import { fetchWeatherdata } from "../../api/weather";
import { useNavigate } from "react-router-dom";
import Loope from "../../assets/loope.jpeg";

const Search = () => {
  const history = useNavigate();
  const { cityName, setCityName } = useContext(DataContext);
  const inputVal = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCityName = inputVal.current.value;
    if (newCityName) {
      setCityName(newCityName);
      fetchWeatherdata(cityName);
      history(`?cityName=${newCityName}`);
    } else {
      alert("Please input the city name");
    }
  };
  return (
    <>
      <div className={style.searchForm}>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            ref={inputVal}
            className={style.keywordText}
            type="text"
            placeholder="Input city name"
          />
          <input type="submit" className="btn_search" value="Search" />
        </form>
      </div>
    </>
  );
};

export default Search;
