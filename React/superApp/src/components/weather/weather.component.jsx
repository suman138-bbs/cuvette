import style from "./weather.module.css";
import { weatherApiKey } from "../../utils/apikey";
import { useEffect } from "react";
import { useState } from "react";
import HeavyRain from "../../assets/HeavyRain.svg";
import Rainy from "../../assets/Rainy.png";
import Sunny from "../../assets/Sunny.png";
import PatiallyCloud from "../../assets/PartialyCloud.png";
import Pressure from "../../assets/Pressure.svg";
import Wind from "../../assets/Wind.svg";
import Humidity from "../../assets/Humidity.svg";
const Weather = () => {
  const currentDateAndTime = new Date();

  const year = currentDateAndTime.getFullYear();
  const month = currentDateAndTime.getMonth();
  const day = currentDateAndTime.getDate();
  const [hours, setHours] = useState(currentDateAndTime.getHours());
  const minutes = currentDateAndTime.getMinutes();
  const seconds = currentDateAndTime.getSeconds();
  const [ampm, setAmPm] = useState("AM");
  if (hours >= 12) {
    setAmPm("PM");
    if (hours > 12) {
      setHours(hours - 12);
    }
  }
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const getWeatherData = async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=Maharajganj`
      );
      const data = await response.json();
      console.log(data.current);
      setWeatherData(data.current);
    };
    getWeatherData();
  }, []);
  const setImageString = (str) => {
    const istring = str?.replace(/ /g, "");
    const loString = istring?.toLowerCase();
    return loString;
  };
  const setWeatherIcon = (condition) => {
    console.log(condition);
    switch (condition) {
      case "clear":
        return Sunny;
      case "rainy":
        return Rainy;
      case "partiallycloud":
        return PatiallyCloud;
      case "sunny":
        return Sunny;
    }
  };
  console.log(weatherData);
  return (
    <div>
      <div className={style.dataTimeContainer}>
        <p>
          {month + 1}-{day}-{year}
        </p>
        <p>
          {hours}:{minutes} {ampm}
        </p>
      </div>
      <div className={style.rootWeatherContainer}>
        <div className={style.weatherImageContainer}>
          <div>
            <img
              src={setWeatherIcon(setImageString(weatherData.condition?.text))}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <p>{weatherData.condition?.text}</p>
          </div>
        </div>
        <div className={style.verticalLine}></div>
        <div>
          <div>
            <h1>
              {weatherData.temp_c}
              <sup>o</sup>C
            </h1>
          </div>
          <div className={style.flexyContainer}>
            <img src={Pressure} alt="" />
            <p>{weatherData.pressure_mb} mbar Pressure</p>
          </div>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.windAndHumidity}>
          <div className={style.flexyContainer}>
            <img src={Wind} alt="" srcset="" />
            <p>{weatherData.wind_kph} km/h wind</p>
          </div>
          <div className={style.flexyContainer}>
            <img src={Humidity} alt="" srcset="" />
            <p>{weatherData.humidity}% Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
