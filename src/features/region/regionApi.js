import axios from 'axios';

const request = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export default async function fetchRegions() {
  const { data } = await request.get('/regions');
  return data;
}
