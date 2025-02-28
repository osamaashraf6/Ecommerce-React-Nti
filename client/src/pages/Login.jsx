import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userslice/apiCalls";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import LazyLoadingBtn from "../components/LazyLoadingBtn";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);
  // const handleSubmitMethod = async (e, data) => { //! don't need e event as react hook form already prevents reload page
  const handleSubmitMethod = async (data) => {
    // const res = await login(dispatch, { email, password });
    const res = await login(dispatch, data);
    if (res.payload) {
      toast.success("Signed in successfully! ");
      navigate("/");
    }
  };
  return (
    <>
      <section
        className="login h-screen bg-[url('./assets/pexels-photo-57690.jpeg')] bg-cover bg-center relative"
        id="login"
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#000000d0] grid place-items-center">
          <div className="form-login p-4 rounded-md w-[350px] border-2">
            <h3 className="uppercase text-xl pb-4 text-white">Sign in</h3>
            <form
              onSubmit={handleSubmit(handleSubmitMethod)}
              className="flex flex-col gap-3 pb-4"
            >
              <div className="">
                <input
                  type="email"
                  className="p-2 border w-full"
                  placeholder="email"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
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
              <button
                className="uppercase bg-yellow-500 text-white p-2 px-10 text-sm w-fit"
                type="submit"
                disabled={isFetching}
              >
                {isFetching ? <LazyLoadingBtn /> : "Login"}
              </button>
              {/* <button
                className="uppercase bg-red-500 text-white p-2 px-10 text-sm w-fit"
                type="submit"
              >
                <div className="spinner"></div>
                <span>Sign In With Googole</span>
              </button> */}
            </form>
            {/* // ! this make error as it does not know {error} this error from validation or redux */}
            {error?.message ? (
              <p style={{ color: "red" }}>{error.message}</p>
            ) : (
              <p className="text-red-500">{error}</p>
            )}
            <div className="uppercase underline text-sm flex flex-col gap-2">
              <Link to="/register" className="text-white">
                Do not have an account?
              </Link>
              <Link to="/forgetpassword" className="text-white ">
                Forget Password
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
