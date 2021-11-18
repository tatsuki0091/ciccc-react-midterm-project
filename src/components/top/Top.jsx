import React, { useState, useEffect, useContext } from "react";
import style from "./top.module.css";
import { fetchWeatherdata } from "../../api/weather";
import { DataContext } from "../../App";
import { useLocation } from "react-router-dom";

const Top = () => {
  const constqueryParam = useLocation().search;
  const { cityName, setCityName } = useContext(DataContext);
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = async () => {
    const data = await fetchWeatherdata(cityName);
    if (data.count === 0) {
      alert("We could not find the city");
    }
    if (cityName === "Vancouver" && !constqueryParam) {
      console.log("ioioio");
      for (let i = 0; i < data.list.length; i++) {
        data.list = data.list.filter((value) => {
          return value.sys.country === "CA";
        });
      }
    }
    setWeatherData(data);
  };
  useEffect(() => {
    fetchWeather();
  }, [cityName]);
  console.log(weatherData);
  return (
    <>
      <section className={style.frame}>
        {weatherData.length !== 0 &&
          weatherData.list.map((item) => (
            <table className={style.table}>
              <tr>
                <th>Weather Image</th>
                <td>
                  <div className={style.imgSection}>
                    <img
                      className={style.img}
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt="weather"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>City</th>
                <td>
                  <p>{item.name}</p>
                </td>
              </tr>
              <tr>
                <th>Country</th>
                <td>
                  <p>{item.sys.country}</p>
                </td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>
                  <p>{item.coord.lon}</p>
                </td>
              </tr>
              <tr>
                <th>latitude　</th>
                <td>
                  <p>{item.coord.lat}</p>
                </td>
              </tr>
              <tr>
                <th>Description</th>
                <td>
                  <p>{item.weather[0].description}</p>
                </td>
              </tr>
              <tr>
                <th>Temperature</th>
                <td>
                  <p>{item.main.temp}</p>
                </td>
              </tr>
              <tr>
                <th>Humidity</th>
                <td>
                  <p>{item.main.humidity}</p>
                </td>
              </tr>
            </table>
          ))}

        {/* {weatherData.length !== 0 ? (
          weatherData.list.map((item) => (
            <table className={style.table}>
              <thead>
                <tr>
                  <th className={`${style.th}, ${style.thAndTd}`}>
                    Weather Image
                  </th>
                  <th className={`${style.th}, ${style.thAndTd}`}>City</th>
                  <th className={`${style.th}, ${style.thAndTd}`}>Country</th>
                  <th className={`${style.th}, ${style.thAndTd}`}>Longitude</th>
                  <th className={`${style.th}, ${style.thAndTd}`}>
                    latitude　
                  </th>
                  <th className={`${style.th}, ${style.thAndTd}`}>
                    Description
                  </th>
                  <th className={`${style.th}, ${style.thAndTd}`}>
                    Temperature
                  </th>
                  <th className={`${style.th}, ${style.thAndTd}`}>Humidity</th>
                </tr>
              </thead>
              <tbody key={item.id}>
                <tr>
                  <td className={style.thAndTd}>
                    <div className={style.imgSection}>
                      <img
                        className={style.img}
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt="weather"
                      />
                    </div>
                  </td>
                  <td className={style.thAndTd}>{item.name}</td>
                  <td className={style.thAndTd}>{item.sys.country}</td>
                  <td className={style.thAndTd}>{item.coord.lon}</td>
                  <td className={style.thAndTd}>{item.coord.lat}</td>
                  <td className={style.thAndTd}>
                    {item.weather[0].description}
                  </td>
                  <td className={style.thAndTd}>{item.main.temp}</td>
                  <td className={style.thAndTd}>{item.main.humidity}</td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <p>ddddd</p>
        )} */}
      </section>
    </>
  );
};

export default Top;
