import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import useAuth from "../hooks/useAuth";

import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import VerifyPage from "../pages/VerifyPage/VerifyPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import JobDetailsPage from "../pages/JobDetailsPage/JobDetailsPage";
import AccountDetailsPage from "../pages/AccountDetailsPage/AccountDetailsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AppliedJobsPage from "../pages/AppliedJobsPage/AppliedJobsPage";
import SavedJobsPage from "../pages/SavedJobsPage/SavedJobsPage";
import UpdatePasswordPage from "../pages/UpdatePasswordPage/UpdatePasswordPage";
import LogoutPage from "../pages/LogoutPage/LogoutPage";

import RecruiterRegisterPage from "../pages/RecruiterPage/RecruiterRegisterPage/RecruiterRegisterPage";
import RecruiterProfilePage from "../pages/RecruiterPage/RecruiterProfilePage/RecruiterProfilePage";
import CreateJobPostPage from "../pages/RecruiterPage/CreateJobPostPage/CreateJobPostPage";
import PostedJobsPage from "../pages/RecruiterPage/PostedJobsPage/PostedJobsPage";

import EmployerListingPage from "../pages/AdminPage/EmployerListingPage/EmployerListingPage";
import JobSeekerListingPage from "../pages/AdminPage/JobSeekerListingPage/JobSeekerListingPage";

const AppRoutes = () => {
    const { user, isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                }}
            >
                <CircularProgress color="success" />
            </div>
        );
    }

    return (
        <BrowserRouter
        // future={{
        //     v7_relativeSplatPath: true,
        //     v7_startTransition: true,
        // }}
        >
            <Routes>
                <Route path="/">
                    {["ADMIN", "RECRUITER"].includes(user?.role) ? (
                        <Route index element={<Navigate to="/account" replace />} />
                    ) : (
                        <>
                            <Route index element={<HomePage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/search/:id" element={<JobDetailsPage />} />
                        </>
                    )}

                    {isAuthenticated ? (
                        <>
                            <Route path="/login" element={<Navigate to="/" replace />} />
                            <Route path="/register/job-seeker" element={<Navigate to="/" replace />} />
                            <Route path="/register/recruiter" element={<RecruiterRegisterPage />} />
                            <Route path="/forgot-password" element={<Navigate to="/" replace />} />
                            <Route path="/reset-password" element={<Navigate to="/" replace />} />

                            <Route path="/account" element={<AccountDetailsPage />} />
                            <Route
                                path="/profile"
                                element={(() => {
                                    switch (user?.role) {
                                        case "JOB_SEEKER":
                                            return <ProfilePage />;
                                        case "RECRUITER":
                                            return <RecruiterProfilePage />;
                                        default:
                                            return <Navigate to="/" replace />;
                                    }
                                })()}
                            />
                            <Route path="/recruiter/create-job-post" element={<CreateJobPostPage />} />
                            <Route path="/recruiter/posted-jobs" element={<PostedJobsPage />} />
                            <Route path="/applied-jobs" element={<AppliedJobsPage />} />
                            <Route path="/saved-jobs" element={<SavedJobsPage />} />
                            <Route path="/update-password" element={<UpdatePasswordPage />} />
                            <Route path="/admin/employers" element={<EmployerListingPage />} />
                            <Route path="/admin/job-seekers" element={<JobSeekerListingPage />} />

                            <Route path="/logout" element={<LogoutPage />} />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register/job-seeker" element={<RegisterPage />} />
                            <Route path="/register/recruiter" element={<RecruiterRegisterPage />} />
                            <Route path="/verify" element={<VerifyPage />} />
                            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                            <Route path="/reset-password" element={<ResetPasswordPage />} />
                        </>
                    )}

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
