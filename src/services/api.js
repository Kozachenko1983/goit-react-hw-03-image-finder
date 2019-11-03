import axios from 'axios';

const getPosts = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=&key=14063635-4625509482d094b66ff8db6a2`,
  );
};

export default getPosts;
