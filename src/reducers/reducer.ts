import { Types } from "../actionTypes/actionTypes";

const initialState = {
  profile: {
    firstName: "",
    email: "",
    password: "",
    department: "",
    role: "",
    reportingManager: "",
  },
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.SIGNUP:
      console.log("Signup", action.payload.user);
      return {
        ...state,
        profile: action.payload.user,
      };
    case Types.LOGIN:
      console.log("login", action.payload.user);
      return {
        ...state,
        profile: action.payload.user,
      };
    default:
      return state;
  }
};

export default auth;
