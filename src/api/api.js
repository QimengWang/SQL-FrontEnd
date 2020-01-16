import axios from 'axios'

axios.defaults.baseURL = '/api';

// For student:
export function stuLogin(stu) {
  return axios.post('/api/student/sign/',{studentid:stu.id,password:stu.password});
}

export function personalInfo() {
  return axios.get('/api/PersonalInformation/');
}

export function selectCourse(action,info) {
  if(action === 'list_course') {
    return axios.get(`/api/student/select_course/?action=${action}`)
  }
  if(action === 'select_course') {
    return axios.post('/api/student/select_course/',{action:action,selectkh:info})
  }
  if(action === 'list_selected_course') {
    return axios.get(`/api/student/select_course/?action=${action}`)
  }
  if(action === 'del_course') {
    return axios.post('/api/student/select_course/',{action:action,courseid:info})
  }
}

// For teacher:
export function teaLogin(tea) {
  return axios.post('/api/teacher/sign/',{teacherid:tea.id,password:tea.password});
}

export function tPersonalInfo() {
  return axios.get('/api/teacher/PersonalInformation/')
}
