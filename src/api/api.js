import axios from 'axios'

axios.defaults.baseURL = '/api';

export function personalInfo() {
  return axios.get('/api/PersonalInformation/');
}

export function stuLogin(stu) {
  return axios.post('/api/student/sign/',{studentid:stu.id,password:stu.password});
}

export function teaLogin(tea) {
  return axios.post('/api/teacher/sign/',{teacherid:tea.id,password:tea.password});
}
