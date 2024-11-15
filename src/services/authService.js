import axiosClient from "../api/axiosClient";
import { AUTH_API } from "../api/constants";

export const registerJobSeeker = async (jobSeeker) => {
    return axiosClient.post(AUTH_API.REGISTER_JOB_SEEKER, {
        email: jobSeeker.email,
        password: jobSeeker.password,
        fullName: jobSeeker.fullName,
    });
};
