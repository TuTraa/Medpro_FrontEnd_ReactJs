import axios from "../axios";
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("api/login", { email: userEmail, password: userPassword });
};
const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
const createNewUserService = (data) => {
  return axios.post("/api/create-new-users", data);
};
const deleteUserService = (userId) => {
  return axios.delete("/api/delete-new-users", { data: { id: userId } });
};
const editUserService = (data) => {
  return axios.put("/api/update-new-users", data)
}
const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctorService = () => {
  return axios.get(`/api/get-all-doctor`)
}

const saveDetailDoctor = (data) => {
  return axios.post(`/api/save-infor-doctor`, data)
}

const getDetailInforDoctor = (inputId) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}

const saveBulkScheduleDoctor = (data) => {
  return axios.post(`api/bulk-create-schedule`, data)
}

const getSchedulebyDate = (doctorId, date) => {
  return axios.get(`/api/get-Schedule-byDate?doctorId=${doctorId}&date=${date}`)
}
const getExtraInforDoctorById = (doctorId) => {
  return axios.get(`/api/get-extra-inforDoctor-byId?doctorId=${doctorId}`)
}

const getProfileDoctorById = (doctorId) => {
  return axios.get(`/api/get-profile-doctor-byId?doctorId=${doctorId}`)
}

const postBookingApointment = (data) => {
  return axios.post(`/api/patient-book-appointment`, data)
}

const postVerifyBookingApointment = (data) => {
  return axios.post(`/api/verify-book-appointment`, data)
}
const createNewSpecialty = (data) => {
  return axios.post(`/api/create-new-specialty`, data)
}
const getAllSpecialtys = () => {
  return axios.get(`/api/get-all-specialty`)
}


export {
  handleLoginApi, getAllUsers, createNewUserService,
  deleteUserService, editUserService, getAllCodeService,
  getTopDoctorHomeService, getAllDoctorService,
  saveDetailDoctor, getDetailInforDoctor, saveBulkScheduleDoctor,
  getSchedulebyDate, getExtraInforDoctorById, getProfileDoctorById,
  postBookingApointment, postVerifyBookingApointment, createNewSpecialty,
  getAllSpecialtys
};
