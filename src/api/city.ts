import axios from "axios";

export function CityList(onSuccess, onFailure) {
  axios
    .get("https://nathabitbackend1.onrender.com/city")
    .then((data) => onSuccess(data))
    .catch((err) => onFailure(err));
}
