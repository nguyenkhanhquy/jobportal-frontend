import axiosClient from "../api/axiosClient";
import { JOBS_API } from "../api/constants";

export const getPopularJobPosts = async () => {
    return axiosClient.get(JOBS_API.GET_ALL_POPULAR);
};
