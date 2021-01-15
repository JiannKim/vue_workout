import axios from "axios";

// const instance = () => {
//   const apiURL = axios.create({
//     baseURL: "https://api.exchangeratesapi.io/"
//   });
//   return apiURL;
// };

const latest = () => {
  return axios.get("https://api.exchangeratesapi.io/latest");
};

export { latest };
