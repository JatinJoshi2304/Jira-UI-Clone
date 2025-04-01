import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  fullName: string;
  email: string;
  password: string;
  department: string;
  role: string;
  reportingManager: string;
}

interface UserLogin {
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    fullName: "",
    email: "",
    password: "",
    department: "",
    role: "",
    reportingManager: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserLogin>) => {
      if (
        state.user.email === action.payload.email &&
        state.user.password === action.payload.password
      ) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = true;
      }
    },
    signup: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { login, signup } = authSlice.actions;

export default authSlice.reducer;
