import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register as registerr } from "../redux/userslice/apiCalls";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleSubmitMethod = async (data) => {
    const res = await registerr(dispatch, data);
    if (res.payload) {
      toast.success("Signed up successfully! ");
      navigate("/login");
    }
  };
  return (
    <>
      <section className="parent h-screen py-24 grid place-items-center">
        <div className="wrapper w-[871px] flex rounded-lg">
          <div className="w-[50%] relative">
            <img
              src="/pexels-photo-57690.jpeg"
              alt=""
              className="object-fill h-full"
            />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-[#dd852d77]"></div>
          </div>
          <div className="form-register w-[50%] bg-white p-4 h-full max-h-[500px] overflow-y-auto border-r-2">
            <h3 className="uppercase text-xl pb-4">create an account</h3>
            <form
              onSubmit={handleSubmit(handleSubmitMethod)}
              className="flex flex-col gap-4 pb-4"
            >
              <div className="">
                <input
                  type="text"
                  className="p-2 border w-full"
                  placeholder="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Name cannot exceed 10 characters",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <div className="">
                <input
                  type="text"
                  className="p-2 border w-full"
                  placeholder="lastname"
                  {...register("lastname", {
                    required: "Lastname is required",
                    minLength: {
                      value: 3,
                      message: "Lastname must be at least 3 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Lastname cannot exceed 10 characters",
                    },
                  })}
                />
              </div>
              {errors.lastname && (
                <p className="text-red-500">{errors.lastname.message}</p>
              )}
              <div className="">
                <input
                  type="email"
                  className="p-2 border w-full"
                  placeholder="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <div className="">
                <input
                  type="tel"
                  className="p-2 border w-full"
                  placeholder="phone"
                  {...register("phone", {
                    required: "phone is required",
                  })}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
              <div className="">
                <input
                  type="password"
                  className="p-2 border w-full"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password cannot exceed 20 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                      message:
                        "Password must contain at least one letter and one number",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <div className="">
                <input
                  type="password"
                  className="p-2 border w-full"
                  placeholder="confirm password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
              <span className="text-sm">
                By creating an account, I consent to the processing of my
                personal data in accordance with the <b>PRIVACY POLICY</b>
              </span>
              <button
                className="uppercase bg-yellow-500 text-white p-2 px-10 text-sm w-fit"
                type="submit"
                disabled={isFetching}
              >
                {/* <!-- <div className="spinner"></div> -- */}
                {isFetching ? "Please wait !" : "Register"}
              </button>

              <span className="text-red-500 font-medium text-sm hidden">
                The confirmed password not match with the first one
              </span>
            </form>
            {error?.msg && <p style={{ color: "red" }}>{error.msg}</p>}
            <div className="uppercase underline text-sm flex flex-col gap-2">
              <Link to="/login">have an account?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
