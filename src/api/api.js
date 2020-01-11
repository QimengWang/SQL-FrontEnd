import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';

export function personalInfo() {
  return axios.get('/api/PersonalInformation');
}

