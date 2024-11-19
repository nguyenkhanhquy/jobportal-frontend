export const AUTH_API = {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
    PROFILE: "/auth/profile",
    REGISTER_JOB_SEEKER: "/auth/register/job-seeker",
    REGISTER_RECRUITER: "/auth/register/recruiter",
    SEND_OTP: "/auth/send-otp",
    ACTIVE: "/auth/activate",
    RESET_PASSWORD: "/auth/reset-password",
    UPDATE_PASSWORD: "/auth/update-password",
};

export const JOBS_API = {
    GET_ALL: "/jobs",
    GET_ALL_POPULAR: "/jobs/popular",
    GET_BY_ID: "/jobs/",
    CREATE: "/jobs",
    SAVE: "/jobs/save",
};

export const JOBS_SAVED_API = {
    GET_ALL: "/jobs/saved",
    DELETE_ALL: "/jobs/saved",
};

export const JOB_SEEKER_API = {
    UPDATE_PROFILE: "/job-seeker/update-profile",
};

export const RECRUITERS_API = {
    UPDATE_PROFILE: "/recruiters/update-profile",
    UPLOAD_LOGO: "/recruiters/upload-logo",
};
