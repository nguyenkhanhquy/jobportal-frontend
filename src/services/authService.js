import axiosClient from "../api/axiosClient";
import { AUTH_API } from "../api/constants";

export const registerJobSeeker = async (jobSeeker) => {
    return axiosClient.post(AUTH_API.REGISTER_JOB_SEEKER, {
        email: jobSeeker.email,
        password: jobSeeker.password,
        fullName: jobSeeker.fullName,
    });
};

export const sendOTP = async (email) => {
    return axiosClient.post(AUTH_API.SEND_OTP, {
        email: email,
    });
};

export const resetPassword = async (email, otp, newPassword) => {
    return axiosClient.post(AUTH_API.RESET_PASSWORD, {
        email: email,
        otp: otp,
        newPassword: newPassword,
    });
};
