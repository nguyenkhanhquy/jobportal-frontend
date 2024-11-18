import axiosClient from "../api/axiosClient";
import { RECRUITERS_API } from "../api/constants";

export const updateProfile = async (profile) => {
    return axiosClient.post(RECRUITERS_API.UPDATE_PROFILE, {
        name: profile.name,
        position: profile.position,
        phone: profile.phone,
        recruiterEmail: profile.recruiterEmail,
        website: profile.website,
        description: profile.description,
        companyAddress: profile.companyAddress,
        companyLogo: profile.companyLogo,
    });
};
