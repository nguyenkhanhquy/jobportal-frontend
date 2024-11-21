import { Link, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

import useAuth from "../../hooks/useAuth";

const navItemsByRole = {
    JOB_SEEKER: [
        { name: "Tài khoản", path: "/account", icon: <AccountCircleOutlinedIcon /> },
        { name: "Đổi mật khẩu", path: "/update-password", icon: <LockOutlinedIcon /> },
        { name: "Hồ sơ của tôi", path: "/profile", icon: <DescriptionOutlinedIcon /> },
        { name: "Việc đã lưu", path: "/saved-jobs", icon: <FavoriteBorderIcon /> },
        { name: "Việc đã ứng tuyển", path: "/applied-jobs", icon: <WorkOutlineIcon /> },
    ],
    RECRUITER: [
        { name: "Tài khoản", path: "/account", icon: <AccountCircleOutlinedIcon /> },
        { name: "Đổi mật khẩu", path: "/update-password", icon: <LockOutlinedIcon /> },
        { name: "Hồ sơ của tôi", path: "/profile", icon: <DescriptionOutlinedIcon /> },
        { name: "Đăng bài tuyển dụng", path: "/recruiter/create-job-post", icon: <PostAddOutlinedIcon /> },
        { name: "Việc đã đăng tuyển", path: "/recruiter/posted-jobs", icon: <ChecklistOutlinedIcon /> },
    ],
    ADMIN: [
        { name: "Tài khoản", path: "/account", icon: <AccountCircleOutlinedIcon /> },
        { name: "Đổi mật khẩu", path: "/update-password", icon: <LockOutlinedIcon /> },
    ],
};

const navItemsAdmin = [
    { name: "Ứng viên", path: "/admin/job-seekers", icon: <AccountBoxOutlinedIcon /> },
    { name: "Nhà tuyển dụng", path: "/admin/employers", icon: <ApartmentOutlinedIcon /> },
];

const AccountNavigation = () => {
    const { user } = useAuth();
    const location = useLocation();

    // Các mục trong thanh điều hướng với icon từ Material UI
    const navItems = navItemsByRole[user?.role] || [];

    const navAdmin = navItemsAdmin;

    return (
        <div className="sticky top-4 w-full max-w-xs rounded-xl bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Quản lý tài khoản</h2>
            <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-300 ${
                            location.pathname === item.path
                                ? "bg-green-600 text-white"
                                : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                        }`}
                    >
                        <span className={`${location.pathname === item.path ? "text-white" : "text-green-600"}`}>
                            {item.icon}
                        </span>
                        {item.name}
                    </Link>
                ))}
            </nav>
            <h2 className="my-4 text-xl font-semibold text-gray-800">Quản lý người dùng</h2>
            <nav className="flex flex-col space-y-2">
                {navAdmin.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-300 ${
                            location.pathname === item.path
                                ? "bg-green-600 text-white"
                                : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                        }`}
                    >
                        <span className={`${location.pathname === item.path ? "text-white" : "text-green-600"}`}>
                            {item.icon}
                        </span>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default AccountNavigation;
