import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CardWrapper from "../components/CardWrapper/CardWrapper";
import { WeatherForecast } from "../api/weather";

const Home = () => {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const onSuccess = (data) => {
    setIsLoading(false);
    setForecastData(data.data.data);
  };
  const onFailue = (data) => {
    console.log(data);
  };
  useEffect(() => {
    city && setIsLoading(true);
    WeatherForecast(onSuccess, onFailue, city);
  }, [city]);
  return (
    <div className="flex  px-10 flex-col ">
      <Header city={city} setCity={setCity} />
      <CardWrapper isLoading={isLoading} city={city} data={forecastData} />
    </div>
  );
};

export default Home;
