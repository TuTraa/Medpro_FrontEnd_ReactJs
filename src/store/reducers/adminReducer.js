import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  gender: [],
  roles: [],
  positions: [],
  users: [],
  topDoctors: [],
  allDoctors: [],
  allScheduleTime: [],
  allRequiredDoctorInfor: [],
};

const adminReducer = (state = initialState, action) => {
  let copyState = { ...state }
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      copyState.isLoadingGender = true;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      copyState.gender = action.data;
      copyState.isLoadingGender = false;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      copyState.isLoadingGender = false;
      copyState.gender = [];
      return {
        ...copyState,
      };
    //Position
    case actionTypes.FETCH_POSITION_START:
      return {
        ...copyState,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      copyState.positions = action.data;

      return {
        ...copyState,
      };
    case actionTypes.FETCH_Position_FAILED:
      copyState.positions = [];
      return {
        ...copyState,
      };
    //roles
    case actionTypes.FETCH_ROLE_START:
      return {
        ...copyState,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      copyState.roles = action.data;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      copyState.roles = [];
      return {
        ...copyState,
      };
    //get all user
    case actionTypes.GET_ALL_USER_SUCCESS:
      copyState.users = action.data;
      return {
        ...copyState,
      };
    case actionTypes.GET_ALL_USER_FAILED:
      copyState.users = [];
      return {
        ...copyState,
      };
    case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
      copyState.topDoctors = action.data;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_TOP_DOCTORS_FAILDED:
      copyState.topDoctors = [];
      return {
        ...copyState,
      };
    //get all doctor 
    case actionTypes.FETCH_All_DOCTORS_SUCCESS:
      copyState.allDoctors = action.data;
      return {
        ...copyState
      }
    case actionTypes.FETCH_All_DOCTORS_FAILDED:
      copyState.allDoctors = [];
      return {
        ...copyState,
      };
    default:
      return state;
    //manage-schedule
    case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS:
      copyState.allScheduleTime = action.dataTime;
      return {
        ...copyState
      }
    case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED:
      copyState.allScheduleTime = [];
      return {
        ...copyState
      }
    case actionTypes.GET_REQUIRED_DOCTOR_INFOR_SUCCESS:
      copyState.allRequiredDoctorInfor = action.data;
      return {
        ...copyState
      }
    case actionTypes.GET_REQUIRED_DOCTOR_INFOR_FAILED:
      copyState.allRequiredDoctorInfor = [];
      return {
        ...copyState
      }
  }

};

export default adminReducer;
