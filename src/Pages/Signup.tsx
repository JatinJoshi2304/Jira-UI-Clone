import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signupUser } from "../action/authAction";
// import * as yup from "yup";

// let userSchema = yup.object().shape({
//   fullName: yup.string().required().max(50).oneOf(["Fullname is required"]),
//   email: yup.string().email(),
//   password: yup.string().required().min(6),
//   department: yup.string().required().max(50).oneOf(["Department is required"]),
//   role: yup.string().required().max(50).oneOf(["Role is required"]),
//   reportingManager: yup
//     .string()
//     .required()
//     .max(50)
//     .oneOf(["ReportingManager is required"]),
// });

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
// fullName, email, password, department, role, reportingManager
export default function App() {
  const navigate = useNavigate();
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(signupUser(data));
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
        <input
          className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
          {...register("fullName", { maxLength: 50 })}
          type="text"
          required
        />
      </div>
      <div className="container flex justify-between">
        <label>Email</label>
        <input
          className="p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
          {...register("email", { required: true })}
          type="email"
          required
        />
      </div>
      <div className="container flex justify-between">
        <label>Password</label>
        <input
          className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "This input must exceed 8 characters",
            },
          })}
          type="password"
        />
      </div>
      <div className="container flex justify-between">
        <label>Department</label>
        <select
          className="p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
          {...register("department")}
          required
        >
          <option value="Mern">Mern</option>
          <option value="Python">Python</option>
          <option value="HR">HR</option>
        </select>
      </div>
      <div className="container flex justify-between">
        <label>Role</label>
        <input
          className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
          {...register("role")}
          type="text"
          required
        />
      </div>
      <div className="container flex justify-between">
        <label>Reporting Manager</label>
        <input
          className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
          {...register("reportingManager")}
          type="text"
          required
        />
      </div>
      {/* <ErrorMessage
        errors={errors}
        name="password"
        render={({ message<error> }) => {
        //   console.log("messages", messages);
          return message;
        }}
      /> */}
      {/* <input type="submit" /> */}
      <Button type="submit" color="primary" variant="contained">
        Signup
      </Button>
      <Link to="/">Already Registered? | Login </Link>
    </form>
  );
}
