import React from "react";

const WeatherCard = (props) => {
  console.log(props);

  const dateObject = new Date(props.item.dt_txt.split(" ")[0]);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[dateObject.getDay()];

  return (
    <div className="flex rounded-[50px] py-2  flex-col border-2 justify-evenly bg-green-400 border-black w-[350px] h-[350px]">
      <p className="text-black font-bold text-4xl">{dayOfWeek}</p>
      {props.today ? (
        <p className="text-black h-6 text-lg">Today</p>
      ) : (
        <p className="h-6"></p>
      )}
      <p className="text-black text-lg">{props.item.dt_txt.split(" ")[0]}</p>
      <p className="text-black font-bold text-6xl">{props.item.main.temp}° C</p>
      <p className="text-black  text-xl">{props.city.value}</p>
    </div>
  );
};

export default WeatherCard;
