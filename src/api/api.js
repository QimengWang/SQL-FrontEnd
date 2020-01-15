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

export function selectCourse(action,info) {
  if(action === 'list_course'){
    return axios.get(`/api/student/select_course/?action=${action}`)
  }
  if(action === 'select_course'){
    return axios.post('/api/student/select_course/',{action:action,data:info})
  }
}
