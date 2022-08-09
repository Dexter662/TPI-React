import axios from "axios";

const URL = `https://newsapi.org/v2/everything?`;
const PAGESIZE = 10;
const LANGUAGE = "es";
const API_KEY = "77b7c373f9c04f0d8f70429d62d1af00";

export default async function GetDataAPI(search, page) {
  
  const response = await axios.get(
    URL,
    {
      params: {
        q: search,
        apiKey: API_KEY,
        page: page,
        pageSize: PAGESIZE,
        language: LANGUAGE,
      },
    }
  );

  return response;
}