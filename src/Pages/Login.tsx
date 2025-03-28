import React from "react";
import ReactDOM from "react-dom";
// import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Button from "@mui/material/Button";

interface IFormInput {
  email: string;
  password: string;
}
// Login fields: Email and password
export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(JSON.stringify(data));
    navigate("/dashboard");
  };

  return (
    <form
      className="w-1/3 m-auto mt-10 p-5 flex flex-col items-center gap-5 border border-[#BFC1C4] rounded-[6px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="">Login Page</h1>
      <div className="container flex justify-between">
        <label>Email</label>
        <input
          className=" p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
          {...register("email", { required: true })}
          type="email"
          required
        />
      </div>
      <div className="container flex justify-between">
        <label>Password</label>
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
      </div>

      <Button type="submit" color="primary" variant="contained">
        Login
      </Button>
      <Link to="/signup">Create your account</Link>
    </form>
  );
}
