import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Dropdown, Select } from "antd";
import { CityList } from "../../api/city";

const Header = ({ setCity, city }) => {
  const [cityList, setCityList] = useState([]);
  const [savedCitiesList, setSavedCityList] = useState([]);

  const saveCity = (value) => {
    const storedData = JSON.parse(localStorage.getItem("savedCities")) || [];
    if (!storedData || !storedData.includes(value)) {
      const updatedData = [...storedData, value];
      setSavedCityList((pre) => [...pre, { key: value, value: value }]);
      localStorage.setItem("savedCities", JSON.stringify(updatedData));
      alert("City Added successfully");
    } else {
      alert("Data is already present in the array");
    }
  };

  const onSuccess = (data) => {
    setCityList([]);
    data?.data?.data?.map((item) => {
      setCityList((pre) => [...pre, { key: item, value: item }]);
    });
  };

  const onFailue = (data) => {
    console.log(data);
  };
  useEffect(() => {
    CityList(onSuccess, onFailue);
    const storedData = JSON.parse(localStorage.getItem("savedCities")) || [];
    setSavedCityList(storedData.map((item) => ({ key: item, value: item })));
  }, []);
  console.log(cityList);
  return (
    <>
      <div className="flex justify-center items-center py-4 border-2 border-black text-5xl bg-gray-300">
        Weather Forecast
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-evenly  mt-8">
        {savedCitiesList?.map((_city) => (
          <Button
            active={city === _city}
            title={_city.key}
            onClick={() => setCity(_city)}
          />
        ))}
        <Select
          onChange={saveCity}
          value="Add City +"
          options={cityList}
        ></Select>
      </div>
    </>
  );
};

export default Header;
