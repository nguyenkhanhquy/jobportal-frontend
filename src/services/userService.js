import axiosClient from "../api/axiosClient";
import { USERS_API } from "../api/constants";

export const lockUser = async (userId) => {
    return axiosClient.post(USERS_API.LOCK, { id: userId });
};
