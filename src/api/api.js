import axios from 'axios'

axios.defaults.baseURL = '/api';

// For student:
export function stuLogin(stu) {
  return axios.post('/api/student/sign/',{studentid:stu.id, password:stu.password});
}

export function personalInfo() {
  return axios.get('/api/PersonalInformation/');
}

export function classTable() {
  return axios.get('/api/student/classtable/');
}

export function selectCourse(action,info) {
  if(action === 'list_course') {
    return axios.get(`/api/student/select_course/?action=${action}`);
  }
  if(action === 'select_course') {
    return axios.post('/api/student/select_course/',{action:action, selectkh:info});
  }
  if(action === 'list_selected_course') {
    return axios.get(`/api/student/select_course/?action=${action}`);
  }
  if(action === 'del_course') {
    return axios.post('/api/student/select_course/',{action:action, courseid:info});
  }
}

export function getGrades() {
  return axios.get('/api/student/list_grade/');
}

export function changePassword(data) {
  return axios.post('/api/student/password/',{oldpassword: data.oldPassword, newpassword: data.newPassword});
}

// For teacher:
export function teaLogin(tea) {
  return axios.post('/api/teacher/sign/',{teacherid:tea.id, password:tea.password});
}

export function tPersonalInfo() {
  return axios.get('/api/teacher/PersonalInformation/');
}

export function gradeManage(action,data) {
  if(action === 'list_my_course') {
    return axios.get(`/api/teacher/GradeManage/?action=${action}`);
  }
  if(action === 'list_students') {
    return axios.post('/api/teacher/GradeManage/',{action:action, kh:data});
  }
  if(action === 'post_grade') {
    return axios.post('api/teacher/GradeManage/',{action:action, xh:data.xh, kh:data.kh, zpcj:data.zpcj});
  }
  if(action === 'grade_distribution') {
    return axios.post('api/teacher/GradeManage/', {action:action, kh: data});
  }
}

export function changeTeaPassword(data) {
  return axios.post('/api/teacher/password/',{oldpassword: data.oldPassword, newpassword: data.newPassword});
}

//For manager
export function manLogin(manager) {
  return axios.post('/api/admin/sign/',{adminId:manager.id, password:manager.password});
}

export function mPersonalInfo() {
  return axios.get('/api/admin/PersonalInformation/');
}

export function listStudents(action, data) {
  if(action === 'list_students') {
    return axios.get(`/api/admin/student_info/?action=${action}`)
  }
  if(action === 'alter_info') {
    return axios.post('/api/admin/student_info/',{action: action, studentid: data.studentId, newdata: data.newData});
  }
  if(action === 'add_student') {
    return axios.post('/api/admin/student_info/',{action: action, data: data});
  }
  if(action === 'del_student') {
    return axios.post('/api/admin/student_info/',{action: action, studentid: data.studentId});
  }
}

export function listTeachers(action, data) {
  if(action === 'list_teachers') {
    return axios.get(`/api/admin/teacher_info/?action=${action}`)
  }
  if(action === 'alter_info') {
    return axios.put('/api/admin/teacher_info/',{action: action, teacherid: data.teacherId, newdata: data.newData});
  }
  if(action === 'add_teacher') {
    return axios.post('/api/admin/teacher_info/',{action: action, data: data});
  }
  if(action === 'del_teacher') {
    return axios.post('/api/admin/teacher_info/',{action: action, teacherid: data.teacherId});
  }
}

export function listCourses(action, data) {
  if(action === 'add_course') {
    return axios.post('/api/admin/course_info/',{action: action, data: data});
  }
  if(action === 'del_course') {
    return axios.post('api/admin/course_info/',{action: action, courseid: data});
  }
  if(action === 'list_course') {
    return axios.post('/api/admin/course_info/',{action: action, yx:data});
  }
}

export function getDepartment(action) {
  return axios.post('api/admin/yx_info/',{action: action});
}

export function delDepartment(action, id) {
  return axios.post('api/admin/yx_info/',{action: action, yxid: id});
}

export function addDepartment(action, data) {
  return axios.post('api/admin/yx_info/',{action: action, data: data});
}

export function alterDepartment(action, data) {
  return axios.post('api/admin/yx_info/',{action: action, yxid:data.yxh, newdata: data.newData});
}
