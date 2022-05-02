import React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-builld-1662f.cloudfunctions.net/api" //The API URL

  //http://localhost:5001/builld-1662f/us-central1/api
})
export default instance