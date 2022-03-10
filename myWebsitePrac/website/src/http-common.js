import axios from "axios";

export default axios.create({
  baseURL: "https://data.mongodb-api.com/app/firstweb-fuuot/endpoint/data",
  headers: {
    "Content-type": "application/json"
  }
});