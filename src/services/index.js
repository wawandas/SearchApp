/** @format */

import axios from "axios";

export const getSearchResults = async ({ keyword }) => {
  //in real application we would have to pass some params, it is just an example ;)
  return await axios.get(
    `https://cdn.statcdn.com/static/application/search_results.json`,
    {
      params: {
        keyword,
      },
    }
  );
};
