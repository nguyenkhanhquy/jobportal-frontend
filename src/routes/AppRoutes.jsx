import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import JobDetailsPage from "../pages/JobDetailsPage/JobDetailsPage";
import AccountDetailsPage from "../pages/AccountDetailsPage/AccountDetailsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AppliedJobsPage from "../pages/AppliedJobsPage/AppliedJobsPage";
import SavedJobsPage from "../pages/SavedJobsPage/SavedJobsPage";
import UpdatePasswordPage from "../pages/UpdatePasswordPage/UpdatePasswordPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/job-details" element={<JobDetailsPage />} />
                <Route path="/account" element={<AccountDetailsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/applied-jobs" element={<AppliedJobsPage />} />
                <Route path="/saved-jobs" element={<SavedJobsPage />} />
                <Route path="/update-password" element={<UpdatePasswordPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
