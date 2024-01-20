import axios from "axios";

export function CityList(onSuccess, onFailure) {
  axios
    .get("https://nathabitbackend1.onrender.com/city")
    .then((data) => onSuccess(data))
    .catch((err) => onFailure(err));
}
export function SavedCityList(onSuccess, onFailure) {
  axios
    .get("https://nathabitbackend1.onrender.com/savedcity")
    .then((data) => onSuccess(data))
    .catch((err) => onFailure(err));
}

export function SaveCityName(onSuccess, onFailure, cityName) {
  axios
    .post("https://nathabitbackend1.onrender.com/savecity", { name: cityName })
    .then((data) => onSuccess(data))
    .catch((err) => onFailure(err));
}
