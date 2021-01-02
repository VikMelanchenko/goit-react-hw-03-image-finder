function fetchImages(query, page) {
  const API_KEY = '19112530-d5af3423794dd47ca2e19dee1';
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`There is no picture name ${query}, try again`)
    );
  });
}

const API = { fetchImages };
export default API;
