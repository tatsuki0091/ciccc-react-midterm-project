const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeatherdata = async (cityName) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
