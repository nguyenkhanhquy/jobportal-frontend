import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import PropTypes from "prop-types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useAuth from "../../../hooks/useAuth";

const Header = ({ isSticky }) => {
    const { user, isAuthenticated } = useAuth();

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);
    const [isMobileAccountMenuOpen, setMobileAccountMenuOpen] = useState(false);

    // Toggle menu mobile
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggle account dropdown menu
    const toggleAccountMenu = () => {
        setAccountMenuOpen(!isAccountMenuOpen);
    };

    // Toggle mobile account dropdown menu
    const toggleMobileAccountMenu = () => {
        setMobileAccountMenuOpen(!isMobileAccountMenuOpen);
    };

    return (
        <header className={`top-0 z-50 bg-white shadow-md ${isSticky ? "sticky" : "relative"}`}>
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={Logo} alt="JobPortal" className="w-18" />
                    </Link>
                </div>

                {/* Menu chính */}
                {user?.role !== "ADMIN" && user?.role !== "RECRUITER" && (
                    <nav className="hidden space-x-10 text-lg font-semibold text-gray-700 md:flex">
                        <Link to="/search" className="hover:text-green-600">
                            Việc làm
                        </Link>
                        <Link to="/categories" className="hover:text-green-600">
                            Ngành nghề
                        </Link>
                        <Link to="/resume" className="hover:text-green-600">
                            Hồ sơ & CV
                        </Link>
                    </nav>
                )}

                <div className="hidden space-x-4 md:flex">
                    {isAuthenticated ? (
                        <>
                            <div className="relative">
                                <button
                                    onClick={toggleAccountMenu}
                                    className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50"
                                >
                                    <AccountCircleIcon />
                                    {user?.role === "JOB_SEEKER" && "Tài khoản"}
                                    {user?.role === "RECRUITER" && "Nhà tuyển dụng"}
                                    {user?.role === "ADMIN" && "Quản trị viên"}
                                    <ExpandMoreIcon />
                                </button>

                                {/* Dropdown Menu */}
                                {isAccountMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg">
                                        <ul className="flex flex-col p-2">
                                            <li>
                                                <Link
                                                    to="/account"
                                                    className="block rounded-lg px-4 py-2 font-semibold text-gray-800 hover:bg-green-100 hover:text-green-700"
                                                    onClick={() => setAccountMenuOpen(false)}
                                                >
                                                    Tài khoản
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/update-password"
                                                    className="block rounded-lg px-4 py-2 font-semibold text-gray-800 hover:bg-green-100 hover:text-green-700"
                                                    onClick={() => setAccountMenuOpen(false)}
                                                >
                                                    Đổi mật khẩu
                                                </Link>
                                            </li>
                                            {user?.role === "JOB_SEEKER" && (
                                                <>
                                                    <li>
                                                        <Link
                                                            to="/profile"
                                                            className="block rounded-lg px-4 py-2 font-semibold text-gray-800 hover:bg-green-100 hover:text-green-700"
                                                            onClick={() => setAccountMenuOpen(false)}
                                                        >
                                                            Hồ sơ của tôi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/saved-jobs"
                                                            className="block rounded-lg px-4 py-2 font-semibold text-gray-800 hover:bg-green-100 hover:text-green-700"
                                                            onClick={() => setAccountMenuOpen(false)}
                                                        >
                                                            Việc đã lưu
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/applied-jobs"
                                                            className="block rounded-lg px-4 py-2 font-semibold text-gray-800 hover:bg-green-100 hover:text-green-700"
                                                            onClick={() => setAccountMenuOpen(false)}
                                                        >
                                                            Việc đã ứng tuyển
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                            {user?.role === "RECRUITER" && (
                                                <>
                                                    <li>
                                                        <Link
                                                            to="/profile"
                                                            className="block rounded-lg px-4 py-2 font-semibold text-gray-800 hover:bg-green-100 hover:text-green-700"
                                                            onClick={() => setAccountMenuOpen(false)}
                                                        >
                                                            Hồ sơ của tôi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/recruiter/create-job-post"
                                                            className="block rounded-lg px-4 py-2 font-semibold text-gray-800 hover:bg-green-100 hover:text-green-700"
                                                            onClick={() => setAccountMenuOpen(false)}
                                                        >
                                                            Đăng bài tuyển dụng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/recruiter/posted-jobs"
                                                            className="block rounded-lg px-4 py-2 font-semibold text-gray-800 hover:bg-green-100 hover:text-green-700"
                                                            onClick={() => setAccountMenuOpen(false)}
                                                        >
                                                            Việc đã đăng tuyển
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                            <li>
                                                <Link
                                                    to="/logout"
                                                    className="block w-full rounded-lg px-4 py-2 text-left font-semibold text-red-600 hover:bg-red-100 hover:text-red-800"
                                                    onClick={() => setAccountMenuOpen(false)}
                                                >
                                                    Đăng xuất
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="rounded-md border border-green-600 px-4 py-2 font-semibold text-green-600 hover:bg-green-50"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                to="/register/job-seeker"
                                className="rounded-md bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
                            >
                                Đăng ký
                            </Link>
                            <Link
                                to="/register/recruiter"
                                className="rounded-md bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-900"
                            >
                                Đăng tuyển & tìm hồ sơ
                            </Link>
                        </>
                    )}
                </div>

                {/* Menu cho mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="flex items-center text-gray-700 focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu với hiệu ứng sổ xuống */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
                    isMobileMenuOpen ? "max-h-fit" : "max-h-0"
                }`}
            >
                <nav className="flex flex-col space-y-4 p-4">
                    <Link
                        to="/jobs"
                        className="block text-lg font-semibold text-gray-700 hover:text-green-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Việc làm
                    </Link>
                    <Link
                        to="/categories"
                        className="block text-lg font-semibold text-gray-700 hover:text-green-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Ngành nghề
                    </Link>
                    <Link
                        to="/resume"
                        className="block text-lg font-semibold text-gray-700 hover:text-green-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Hồ sơ & CV
                    </Link>
                    <Link
                        to="/login"
                        className="block rounded-md border border-green-600 px-4 py-2 text-center font-semibold text-green-600 hover:bg-green-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        to="/register/job-seeker"
                        className="block rounded-md bg-green-600 px-4 py-2 text-center font-semibold text-white hover:bg-green-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Đăng ký
                    </Link>
                    <Link
                        to="/register/recruiter"
                        className="block rounded-md bg-slate-800 px-4 py-2 text-center font-semibold text-white hover:bg-slate-900"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Đăng tuyển & tìm hồ sơ
                    </Link>
                    {/* Nút Tài khoản trên mobile */}
                    <div>
                        <button
                            onClick={toggleMobileAccountMenu}
                            className="flex w-full items-center justify-between text-left font-semibold text-gray-700"
                        >
                            <AccountCircleIcon />
                            Tài khoản
                            <ExpandMoreIcon />
                        </button>
                        {isMobileAccountMenuOpen && (
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link to="/account" className="block px-4 py-2 font-semibold">
                                        Tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/update-password" className="block px-4 py-2 font-semibold">
                                        Đổi mật khẩu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="block px-4 py-2 font-semibold">
                                        Hồ sơ của tôi
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/saved-jobs" className="block px-4 py-2 font-semibold">
                                        Việc đã lưu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/applied-jobs" className="block px-4 py-2 font-semibold">
                                        Việc đã ứng tuyển
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/logout" className="block px-4 py-2 font-semibold text-red-600">
                                        Đăng xuất
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {
    isSticky: PropTypes.bool,
};

export default Header;
