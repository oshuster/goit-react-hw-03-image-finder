import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,
  params: {
    key: '40786417-663091144562a9e2f0523c37d',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

async function getPost(q = 'cat', page = 1) {
  try {
    const response = await instance.get(`?&q=${q}&page=${page}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default getPost;
