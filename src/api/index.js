import axios from "axios";

const apiURL = axios.create({
  baseURL: "https://api.exchangeratesapi.io/",
});

// 국가별 환율 api 요청
const latest = () => {
  return apiURL.get("latest");
};

// 날짜별 환율 api 요청
const date = (date) => {
  return apiURL.get(date);
};

export { latest, date };
