import axiosClient from "../api/axiosClient";
import { JOBS_API } from "../api/constants";

export const getAllJobPosts = async (page, size, search, order) => {
    return axiosClient.get(JOBS_API.GET_ALL, {
        params: {
            page: page,
            size: size,
            query: search,
            order: order,
        },
    });
};

export const getPopularJobPosts = async () => {
    return axiosClient.get(JOBS_API.GET_ALL_POPULAR, {
        params: {
            page: 1,
            size: 9,
        },
    });
};

export const saveJobPost = async (jobPostId) => {
    return axiosClient.post(JOBS_API.SAVE, {
        id: jobPostId,
    });
};
