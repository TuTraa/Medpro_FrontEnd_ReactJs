import actionTypes from "./actionTypes";
import {
  getAllCodeService, createNewUserService, getAllUsers,
  deleteUserService, editUserService, getTopDoctorHomeService,
  getAllDoctorService, saveDetailDoctor, getAllSpecialtys
} from "../../services/userService";
import { toast } from "react-toastify"
import { dispatch } from "../../redux";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START
      });

      let res = await (await getAllCodeService("GENDER")).data;
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data))
      }
      else {
        dispatch(fetchGenderFAILED());
      }
    } catch (e) {
      dispatch(fetchGenderFAILED());
      console.log("fetchGenderStart err", e);
    }
  }
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData
});
export const fetchGenderFAILED = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});


export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData
});
export const fetchPositionFAILED = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});


export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData
});
export const fetchRoleFAILED = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_POSITION_START
      });

      let res = await (await getAllCodeService("POSITION")).data;
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data))
      }
      else {
        dispatch(fetchPositionFAILED());
      }
    } catch (e) {
      dispatch(fetchPositionFAILED());
      console.log("fetchPositionStart err", e);
    }
  }
};

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {

      dispatch({
        type: actionTypes.FETCH_ROLE_START
      });

      let res = await (await getAllCodeService("ROLE")).data;
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data))
      }
      else {
        dispatch(fetchRoleFAILED());
      }
    } catch (e) {
      dispatch(fetchRoleFAILED());
      console.log("fetchRoleStart err", e);
    }
  }
};
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await (await createNewUserService(data)).data;
      if (res && res.errCode === 0) {
        toast.success("Create a new user succeed!")
        dispatch(saveUserSuccess(res.data))
        dispatch(getAllUser('All'));
      }
      else {
        dispatch(saveUserFAILED());
      }
    } catch (e) {
      dispatch(saveUserFAILED());
      console.log("fetchRoleStart err", e);
    }
  }
};

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFAILED = () => ({
  type: actionTypes.CREATE_USER_FAILED,
})

//get all user
export const getAllUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await (await getAllUsers(data)).data;
      if (res && res.errCode === 0) {
        dispatch(getAllUserSuccess(res.users.reverse()))
      }
      else {
        toast.error("create a new user failed");
        dispatch(getALlUserFailed());
      }
    } catch (e) {
      toast.error("create a new user failed");
      dispatch(getALlUserFailed());
      console.log("getALlUser err", e);
    }
  }
};

export const getAllUserSuccess = (users) => ({
  type: actionTypes.GET_ALL_USER_SUCCESS,
  data: users
})

export const getALlUserFailed = () => ({
  type: actionTypes.GET_ALL_USER_FAILED,
})
//delete user
export const deletaUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await (await deleteUserService(data)).data;
      if (res && res.errCode === 0) {
        toast.success("delete user succeed!")
        dispatch(deleteUserSuccess());
        dispatch(getAllUser('All'));
      }
      else {
        toast.error("delete user failed");
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      toast.error("delete user failed");
      dispatch(deleteUserFailed());
      console.log("getALlUser err", e);
    }
  }
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
})
//Edit user
export const EditUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await (await editUserService(data)).data;
      console.log(res)
      if (res && res.errCode === 0) {
        toast.success("edit user succeed!");
        dispatch(editUserSuccess());
        dispatch(getAllUser('All'));
      }
      else {
        toast.error("edit user failed");
        dispatch(editUserFailed());
      }
    } catch (e) {
      toast.error("edit user err");
      dispatch(editUserFailed());
      console.log("getALlUser err", e);
    }
  }
};

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
})

export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let resDoctor = await (await getTopDoctorHomeService(10)).data;
      console.log('resdoctor', resDoctor)
      if (resDoctor && resDoctor.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          data: resDoctor.data
        })
      }
      else {
        dispatch({
          type: actionTypes.FETCH_GENDER_FAILED,
        })
      }
    } catch (e) {
      console.log(e);
      dispatch({
        type: actionTypes.FETCH_GENDER_FAILED,
      })
    }
  }
}
export const fetchAllDoctor = () => {

  return async (dispatch, getState) => {
    try {
      let resAllDoctor = await (await getAllDoctorService()).data;
      if (resAllDoctor && resAllDoctor.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_All_DOCTORS_SUCCESS,
          data: resAllDoctor.data
        })
      }
      else {
        dispatch({
          type: actionTypes.FETCH_All_DOCTORS_FAILDED,
        })
      }
    } catch (e) {
      console.log(e);
      dispatch({
        type: actionTypes.FETCH_All_DOCTORS_FAILDED,
      })
    }
  }
};
export const saveInforDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await saveDetailDoctor(data);
      console.log("response", response);
      if (response && response.data.errCode === 0) {
        toast.success('save infor doctor success!')
        dispatch({
          type: actionTypes.SAVE_ACTION_DOCTOR_SUCCESS,
        })
      }
      else {
        toast.error('save infor doctor errorr')
        dispatch({
          type: actionTypes.SAVE_ACTION_DOCTOR_FAILDED,
        })
      }
    } catch (e) {
      console.log(e);
      toast.error('save infor doctor errorr')
      dispatch({
        type: actionTypes.SAVE_ACTION_DOCTOR_FAILDED,
      })
    }
  }
}

export const fetchAllScheduleTime = () => {
  return async (dispatch, getState) => {
    try {
      let res = await (await getAllCodeService('time')).data;
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
          dataTime: res.data
        })
      }
      else {
        dispatch({
          type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
        })
      }
    }
    catch (e) {
      console.log("FETCH_ALLCODE_SCHEDULE_TIME_FAILED", e)
      dispatch({
        type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
      })
    }
  }
}

//price manageDoctor
export const getRequireDoctorInfor = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.GET_REQUIRED_DOCTOR_INFOR_START
      });

      let resPrice = await (await getAllCodeService("PRICE")).data;
      let resPayment = await (await getAllCodeService("PAYMENT")).data;
      let resProvince = await (await getAllCodeService("PROVINCE")).data;
      let resPecialty = await (await getAllSpecialtys()).data;
      // let resProvince = await (await getAllCodeService("PROVINCE")).data;
      let data = {
        resPrice: resPrice.data,
        resPayment: resPayment.data,
        resProvince: resProvince.data,
        resPecialty: resPecialty.data
      }
      if (resPrice && resPrice.errCode === 0 && resPayment && resPayment.errCode === 0
        && resProvince && resProvince.errCode === 0 && resPecialty && resPecialty.errCode === 0) {
        dispatch(getRequireDoctorInforSuccess(data))
      }
      else {
        dispatch(getRequireDoctorInforFailed());
      }
    } catch (e) {
      dispatch(getRequireDoctorInforFailed());
      console.log("getDoctorPriceStart err", e);
    }
  }
};
export const getRequireDoctorInforSuccess = (allRequired) => ({
  type: actionTypes.GET_REQUIRED_DOCTOR_INFOR_SUCCESS,
  data: allRequired
});
export const getRequireDoctorInforFailed = () => ({
  type: actionTypes.GET_REQUIRED_DOCTOR_INFOR_FAILED,
});