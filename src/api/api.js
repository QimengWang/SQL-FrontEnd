import axios from 'axios'

axios.defaults.baseURL = '/api';

export function personalInfo() {
  return axios.get('/api/PersonalInformation/');
}

export function stuLogin(stu) {
  return axios.post('/api/student/sign/',{studentid:stu.id,password:stu.password});
}
