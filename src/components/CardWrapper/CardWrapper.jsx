import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

const CardWrapper = (props) => {
  return (
    <div className="flex flex-col pb-10  mt-10 justify-between">
      <p className="border-black text-5xl">4 Day Forecast</p>
      {props.isLoading ? (
        <div className="text-red-400 text-3xl mt-5">Loading data ....</div>
      ) : (
        <div className="flex gap-5 mb-10  mt-12">
          {props?.data?.map(
            (item, idx) =>
              idx < 4 && (
                <WeatherCard
                  item={item}
                  today={idx == 0 && "today"}
                  city={props.city}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default CardWrapper;
