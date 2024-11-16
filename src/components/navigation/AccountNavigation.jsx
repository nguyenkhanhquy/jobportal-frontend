import { Link, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import DescriptionIcon from "@mui/icons-material/Description";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const AccountNavigation = () => {
    const location = useLocation();

    // Các mục trong thanh điều hướng với icon từ Material UI
    const navItems = [
        { name: "Tài khoản", path: "/account", icon: <AccountCircleIcon /> },
        { name: "Đổi mật khẩu", path: "/change-password", icon: <LockIcon /> },
        { name: "Hồ sơ của tôi", path: "/profile", icon: <DescriptionIcon /> },
        { name: "Việc đã lưu", path: "/saved-jobs", icon: <FavoriteBorderIcon /> },
        { name: "Việc đã ứng tuyển", path: "/applied-jobs", icon: <WorkOutlineIcon /> },
    ];

    return (
        <div className="sticky top-0 z-50 w-full max-w-xs rounded-xl bg-white p-4 shadow-lg">
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
        </div>
    );
};

export default AccountNavigation;
