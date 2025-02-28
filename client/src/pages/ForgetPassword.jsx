import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/authHook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const { forgetPasswordMutation } = useAuth();
  const { error, isPending } = forgetPasswordMutation;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitMethod = async (data) => {
    forgetPasswordMutation.mutate(
      data,

      {
        onSuccess: (res) => {
          toast.success(res?.message);
          navigate("/resetcodeverify");
        },
      }
    );
    // ! this is wrong as it asynch lke what happened in redux, so it reads the verify null, so the solution is to use oNSucccess from react query
    // if (localStorage.getItem("verify")) {
    //     toast.success("Email is correct, check the reset code in email ! ");
    //     navigate("/home");
    // }
  };
  return (
    <>
      <section className="parent h-screen py-24 grid place-items-center">
        <div className="wrapper w-[571px] rounded-lg">
          <div className="bg-white p-4 border-r-2">
            <h3 className="uppercase text-xl pb-4">Forget Passwod</h3>
            <form
              onSubmit={handleSubmit(handleSubmitMethod)}
              className="flex flex-col gap-4 pb-4"
            >
              <div className="">
                <input
                  type="email"
                  className="p-2 border w-full"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && <p>{errors.email.message}</p>}
              <button
                disabled={isPending}
                className="uppercase bg-yellow-500 text-white p-2 px-10 text-sm w-fit"
                type="submit"
              >
                {/* <!-- <div className="spinner"></div> --> */}
                {isPending ? "Please wait..." : "Send"}
              </button>
            </form>
            {error && (
              <p style={{ color: "red" }}>
                {error?.response?.data?.message || "Something went wrong!"}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
