export const Photo_Url = "https://example.com/jane-q-user/profile.jpg";
//import { useNavigate } from "react-router-dom";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "fr", name: "fr" },
];

export const OPENAI_API_KEY =process.env.REACT_APP_OPENAI_KEY;