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
  user: User | null;
  error: string | null;
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
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserLogin>) => {
      if (
        state.user?.email === action.payload.email &&
        state.user?.password === action.payload.password
      ) {
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.isAuthenticated = false;
        state.error = "Invalid Email or Password";
      }
    },
    signup: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.error = null;
    },
    logout: (state) => {
      //   state.user = action.payload;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;

export default authSlice.reducer;
