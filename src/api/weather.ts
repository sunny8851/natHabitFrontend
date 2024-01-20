import axios from "axios";

export function WeatherForecast(onSuccess, onFailure, city) {
  axios
    .post(`https://nathabitbackend1.onrender.com/weather`, {
      city: city,
    })
    .then((data) => onSuccess(data))
    .catch((err) => onFailure(err));
}
