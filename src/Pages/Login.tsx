// import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../redux/authSlice";

interface IFormInput {
  email: string;
  password: string;
}

const userSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

// Login fields: Email and password
export default function Login() {
  const navigate = useNavigate();
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
    navigate("/dashboard");
  };

  return (
    <form
      className="w-1/3 m-auto mt-10 p-5 flex flex-col items-center gap-5 border border-[#BFC1C4] rounded-[6px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-bold">Login Page</h1>
      <div className="container flex justify-between">
        <label>Email</label>
        <div>
          <input
            className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
            {...register("email", { required: true })}
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
            className="p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "This input must exceed 8 characters",
              },
            })}
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

      <Button type="submit" color="primary" variant="contained">
        Login
      </Button>
      <Link to="/signup">Create your account</Link>
    </form>
  );
}
