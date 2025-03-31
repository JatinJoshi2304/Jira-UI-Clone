import { Types } from "../actionTypes/actionTypes";

enum departmentEnum {
  Mern = "Mern",
  Python = "Python",
  HR = "HR",
}

interface IsignupData {
  fullName: string;
  email: string;
  password: string;
  department: departmentEnum;
  role: string;
  reportingManager: string;
}

interface IloginData {
  email: string;
  password: string;
}

const signupUser = (user: IsignupData) => {
  return {
    type: Types.SIGNUP,
    payload: { user },
  };
};

const loginUser = (user: IloginData) => {
  return {
    type: Types.LOGIN,
    payload: { user },
  };
};

export { signupUser, loginUser };
