const baseURL = "https://www.breakingbadapi.com/api/";

export const getCharacters = () => {
  return new Promise((resolve, reject) => {
    fetch(baseURL + "characters")
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

export const getCharacter = (id) => {
  fetch(`${baseURL} + "characters" + /${id}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      return result;
    });
};

export const getDeaths = () => {
  return new Promise((resolve, reject) => {
    fetch(baseURL + "deaths")
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

export const getQuotes = () => {
  return new Promise((resolve, reject) => {
    fetch(baseURL + "quotes")
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

export const getEpisodes = () => {
  return new Promise((resolve, reject) => {
    fetch(baseURL + "episodes")
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};
