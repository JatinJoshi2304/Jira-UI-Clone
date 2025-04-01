import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signup } from "../redux/authSlice";

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

const userSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Required")
    .max(50, "Fullname should not exceed 50 Characters"),
  email: yup.string().email("Invalid email address").required("Required"),
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
    .max(50, "Role should not exceed 50 Characters"),
  reportingManager: yup
    .string()
    .required("Required")
    .max(50, "Reporting Manager should not exceed 50 Characters"),
});

export default function App() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(signup(data));
    navigate("/dashboard");
  };

  return (
    <form
      className="w-1/3 m-auto mt-10 p-5 flex flex-col items-center gap-5 border border-[#BFC1C4] rounded-[6px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-bold">Signup Page</h1>
      <div className="container flex justify-between">
        <label>Full Name</label>
        <div>
          <input
            className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
            {...register("fullName")}
            type="text"
          />
          {errors.fullName?.type === "required" && (
            <p className="text-red-600">Full Name is required</p>
          )}
          {errors.fullName?.type === "max" && (
            <p className="text-red-600">
              Full Name should not exceed 50 Characters
            </p>
          )}
        </div>
      </div>

      <div className="container flex justify-between">
        <label>Email</label>
        <div>
          <input
            className="p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
            {...register("email")}
            type="email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}
          {errors.email?.type === "email" && (
            <p className="text-red-600">Invalid email address</p>
          )}
        </div>
      </div>

      <div className="container flex justify-between">
        <label>Password</label>
        <div>
          <input
            className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
            {...register("password")}
            type="password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600 ">Password is required</p>
          )}
          {errors.password?.type === "min" && (
            <p className="text-red-600">Password must be 8 characters</p>
          )}
        </div>
      </div>

      <div className="container flex justify-between">
        <label>Department</label>
        <div>
          <select
            className="p-1 pl-[10px] border border-[#BFC1C4] rounded-[6px]"
            {...register("department")}
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            <option value="Mern">Mern</option>
            <option value="Python">Python</option>
            <option value="HR">HR</option>
          </select>
          {errors.department?.type === "required" && (
            <p className="text-red-600">Department is required</p>
          )}
          {errors.department?.type === "oneOf" && (
            <p className="text-red-600">Invalid department</p>
          )}
        </div>
      </div>

      <div className="container flex justify-between">
        <label>Role</label>
        <div>
          <input
            className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
            {...register("role")}
            type="text"
          />
          {errors.role?.type === "required" && (
            <p className="text-red-600">Role is required</p>
          )}
        </div>
      </div>

      <div className="container flex justify-between">
        <label>Reporting Manager</label>
        <div>
          <input
            className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
            {...register("reportingManager")}
            type="text"
          />
          {errors.reportingManager?.type === "required" && (
            <p className="text-red-600">Reporting Manager is required</p>
          )}
        </div>
      </div>

      <Button type="submit" color="primary" variant="contained">
        Signup
      </Button>
      <Link to="/">Already Registered? | Login </Link>
    </form>
  );
}
