export const Photo_Url = "https://example.com/jane-q-user/profile.jpg";

export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_API,
    },
  };