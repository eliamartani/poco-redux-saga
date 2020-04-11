import axios from 'axios';

export const fetchCats = async (url: string) => {
  return await axios.get(url);
};
