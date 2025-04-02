// import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../redux/authSlice";
import { useEffect } from "react";
import JiralogoBGW from "../assets/jiralogoBGW.png";

interface IFormInput {
  email: string;
  password: string;
}

let EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const userSchema = yup.object().shape({
  // email: yup.string().email("Invalid email address").required("Required"),
  email: yup
    .string()
    .required("Email address Required")
    .matches(EMAIL_REGX, "Invalid Email"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

// Login fields: Email and password
export default function Login() {
  const navigate = useNavigate();
  const state: any = useSelector((state) => state);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ resolver: yupResolver(userSchema) });
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    const user = { email: data.email, password: data.password };
    dispatch(login(user));
    // navigate("/dashboard");
  };

  useEffect(() => {
    if (state.auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [state]);

  return (
    <form
      className="w-1/3 m-auto mt-10 p-8 bg-white shadow-lg rounded-lg flex flex-col items-center gap-4 border border-[#BFC1C4]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <img className="h-20" src={JiralogoBGW} />
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Login Page
        </h1>
      </div>
      <div className="flex gap-1 w-full">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-700">
            Email
          </label>
          <input
            id="email"
            className="p-3 border border-[#BFC1C4] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="flex gap-1 w-full">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="password" className="text-gray-700">
            Password
          </label>
          <input
            id="password"
            className="p-3 border border-[#BFC1C4] rounded-md focus:outline-none focus:ring-2 placeholder-gray-400 text-gray-700 focus:ring-blue-500"
            {...register("password")}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>
      </div>

      {state.auth.isAuthenticated && "Login successful!"}
      {state.auth.error && "Invalid Email or Password"}

      <Button
        type="submit"
        color="primary"
        variant="contained"
        className="w-full py-3 mt-6 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
      >
        Login
      </Button>

      <Link to="/signup" className="text-blue-600 text-sm mt-3 hover:underline">
        Create your account
      </Link>
    </form>
  );
}
