const KEY = "22768638-b34a0dc747ee3cff056840f2a";

export const getImagesApi = ({ query, page }) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((res) => res.json())
    .then((res) => res.hits)
    .then((res) => {
      return res;
    });
};
