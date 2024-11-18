import axiosClient from "../api/axiosClient";
import { JOB_SEEKER_API } from "../api/constants";

export const updateProfile = async (profile) => {
    return axiosClient.post(JOB_SEEKER_API.UPDATE_PROFILE, {
        fullName: profile.fullName,
        address: profile.address,
        phone: profile.phone,
        dob: profile.dob
            ? (() => {
                  const date = new Date(profile.dob); // Chuyển thành Date object
                  date.setDate(date.getDate() + 1); // Tăng thêm 1 ngày
                  return date.toISOString().split("T")[0]; // Định dạng YYYY-MM-DD
              })()
            : null,
        workExperience: profile.workExperience,
    });
};
