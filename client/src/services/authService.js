import globalService from "../services/globalService";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userslice/apiCalls";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
// forgetPassword
export const forgotPassword = async (formData) => {
  const res = await axios.post(
    `${globalService.baseUrl}${globalService.routes.auth}/forgetPassword`,
    formData
  );
  localStorage.setItem("verify", res.data.token);
  return res.data;
};
// verifyResetCode
export const verifyResetCode = async (formData) => {
  const res = await axios.post(
    `${globalService.baseUrl}${globalService.routes.auth}/resetCodeVerify`,
    formData,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("verify")}`,
      },
    }
  );

  return res.data;
};
// resetPassword
export const resetPassword = async (formData) => {
  const res = await axios.post(
    `${globalService.baseUrl}${globalService.routes.auth}/resetpassword`,
    formData,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("verify")}`,
      },
    }
  );
  localStorage.removeItem("verify", res.data.token);
  return res.data;
};
// checkToken
export const CheckToken = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    logout(dispatch);
    toast.success("Signed Out Successfully");
  };

  const token = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const getToken = JSON.parse(token)?.currentUser?.token;

  if (getToken) {
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp < Date.now() / 1000) {
      handleLogOut();
    }
  }
};
