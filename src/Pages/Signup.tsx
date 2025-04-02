import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signup } from "../redux/authSlice";
import JiralogoBGW from "../assets/jiralogoBGW.png";

enum departmentEnum {
  Mern = "Mern",
  Python = "Python",
  HR = "HR",
}

interface IFormInput {
  fullName: string;
  email: string;
  password: string;
  department: departmentEnum;
  role: string;
  reportingManager: string;
}

let EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let NAME_REGX = /^[a-zA-Z]/;
const userSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Required")
    .max(50, "Fullname should not exceed 50 Characters")
    .matches(NAME_REGX, "Invalid Fullname"),
  email: yup
    .string()
    .required("Email address Required")
    .matches(EMAIL_REGX, "Invalid Email"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
  department: yup
    .mixed<departmentEnum>()
    .required("Required")
    .oneOf(Object.values(departmentEnum), "Invalid department"),
  role: yup
    .string()
    .required("Required")
    .max(50, "Role should not exceed 50 Characters")
    .matches(NAME_REGX, "Invalid Role"),
  reportingManager: yup
    .string()
    .required("Required")
    .max(50, "Reporting Manager should not exceed 50 Characters")
    .matches(NAME_REGX, "Invalid Reporting Manager"),
});

export default function App() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(signup(data));
    navigate("/");
  };

  return (
    <form
      className="w-1/2 m-auto mt-10 p-8 bg-white shadow-lg rounded-lg flex flex-col items-center gap-4 border border-[#BFC1C4]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <img className="h-20" src={JiralogoBGW} />
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Signup Page
        </h1>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="fullName" className="text-gray-700">
          Full Name
        </label>
        <input
          id="fullName"
          className="p-3 border border-[#BFC1C4] rounded-md focus:outline-none focus:ring-2 placeholder-gray-400 text-gray-700 focus:ring-blue-500"
          {...register("fullName")}
          type="text"
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm">{errors.fullName.message}</p>
        )}
      </div>
      <div className="flex gap-1 w-full">
        <div className="w-1/2 flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-700">
            Email
          </label>
          <input
            id="email"
            className="p-3 border border-[#BFC1C4] rounded-md focus:outline-none focus:ring-2 placeholder-gray-400 text-gray-700 focus:ring-blue-500"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="w-1/2 flex flex-col gap-2">
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
      <div className="flex gap-1 w-full">
        <div className="w-1/2 flex flex-col gap-2">
          <label htmlFor="department" className="text-gray-700">
            Department
          </label>
          <select
            id="department"
            className="p-3 border border-[#BFC1C4] rounded-md focus:outline-none focus:ring-2 placeholder-gray-400 text-gray-700 focus:ring-blue-500"
            {...register("department")}
          >
            <option value="" selected disabled hidden>
              Choose a department
            </option>
            <option value="Mern">Mern</option>
            <option value="Python">Python</option>
            <option value="HR">HR</option>
          </select>
          {errors.department && (
            <p className="text-red-600 text-sm">{errors.department.message}</p>
          )}
        </div>

        <div className="w-1/2 flex flex-col gap-2">
          <label htmlFor="role" className="text-gray-700">
            Role
          </label>
          <input
            id="role"
            className="p-3 border border-[#BFC1C4] rounded-md focus:outline-none focus:ring-2 placeholder-gray-400 text-gray-700 focus:ring-blue-500"
            {...register("role")}
            type="text"
            placeholder="Enter your role"
          />
          {errors.role && (
            <p className="text-red-600 text-sm">{errors.role.message}</p>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="reportingManager" className="text-gray-700">
          Reporting Manager
        </label>
        <input
          id="reportingManager"
          className="p-3 border border-[#BFC1C4] rounded-md focus:outline-none focus:ring-2 placeholder-gray-400 text-gray-700 focus:ring-blue-500"
          {...register("reportingManager")}
          type="text"
          placeholder="Enter the reporting manager's name"
        />
        {errors.reportingManager && (
          <p className="text-red-600 text-sm">
            {errors.reportingManager.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        className="w-full py-3 mt-6 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
      >
        Signup
      </Button>
      <Link to="/" className="text-blue-600 text-sm mt-3 hover:underline">
        Already Registered? | Login
      </Link>
    </form>
  );
}
