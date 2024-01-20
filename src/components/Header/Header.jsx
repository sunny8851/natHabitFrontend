import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Dropdown, Select } from "antd";
import { CityList, SaveCityName, SavedCityList } from "../../api/city";

const Header = ({ setCity, city }) => {
  const [cityList, setCityList] = useState([]);
  const [savedCitiesList, setSavedCityList] = useState([]);
  const onSaveCitySuccess = (data) => {
    console.log(data);
    if (data.data.success)
      setSavedCityList((pre) => [
        ...pre,
        { key: data.data.name, value: data.data.name },
      ]);
    else onSaveCityFailed();
  };
  const onSaveCityFailed = () => {
    alert("Save city failed. Check if it already exists");
  };
  const saveCity = (value) => {
    SaveCityName(onSaveCitySuccess, onSaveCityFailed, value);
  };

  const onSuccess = (data) => {
    setCityList([]);
    data?.data?.data?.map((item) => {
      setCityList((pre) => [...pre, { key: item, value: item }]);
    });
  };

  const savedCityFetched = (data) => {
    setSavedCityList([]);
    data.data.data.map((item) => {
      setSavedCityList((pre) => [
        ...pre,
        { key: item.cityName, value: item.cityName },
      ]);
    });
  };
  const onFailue = (data) => {
    console.log(data);
  };
  useEffect(() => {
    CityList(onSuccess, onFailue);
    SavedCityList(savedCityFetched, onFailue);
  }, []);
  console.log(cityList);
  return (
    <>
      <div className="flex justify-center items-center py-4 border-2 border-black text-5xl bg-gray-300">
        Weather Forecast
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-evenly  mt-8">
        {savedCitiesList.map((_city) => (
          <Button
            active={city === _city}
            title={_city.value}
            onClick={() => setCity(_city)}
          />
        ))}
        <Select
          onChange={saveCity}
          showSearch={true}
          value="Add City +"
          placeholder="Add City +"
          options={cityList}
        ></Select>
      </div>
    </>
  );
};

export default Header;
