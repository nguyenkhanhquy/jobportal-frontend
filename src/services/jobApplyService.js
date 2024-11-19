import axiosClient from "../api/axiosClient";
import { JOBS_APPLY_API } from "../api/constants";

export const applyJob = async (jobPostId, coverLetter, cv) => {
    return axiosClient.post(JOBS_APPLY_API.APPLY, {
        jobPostId: jobPostId,
        coverLetter: coverLetter,
        cv: cv,
    });
};

export const uploadCV = async (file) => {
    const formData = new FormData();
    formData.append("cv", file);
    return axiosClient.post(JOBS_APPLY_API.UPLOAD_CV, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const getAllJobApplied = async (page, size, search) => {
    return axiosClient.get(JOBS_APPLY_API.GET_ALL, {
        params: {
            page: page,
            size: size,
            query: search,
        },
    });
};
