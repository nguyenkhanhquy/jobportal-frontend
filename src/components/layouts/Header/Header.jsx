import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle menu mobile
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={Logo} alt="JobPortal" className="w-18" />
                    </Link>
                </div>

                {/* Menu chính */}
                <nav className="hidden space-x-10 text-lg font-semibold text-gray-700 md:flex">
                    <Link to="/jobs" className="hover:text-green-600">
                        Việc làm
                    </Link>
                    <Link to="/categories" className="hover:text-green-600">
                        Ngành nghề
                    </Link>
                    <Link to="/resume" className="hover:text-green-600">
                        Hồ sơ & CV
                    </Link>
                </nav>

                {/* Nút hành động */}
                <div className="hidden space-x-4 md:flex">
                    <Link
                        to="/login"
                        className="rounded-md border border-green-600 px-4 py-2 font-semibold text-green-600 hover:bg-green-50"
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        to="/register"
                        className="rounded-md bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
                    >
                        Đăng ký
                    </Link>
                    <Link
                        to="/login?employer=true"
                        className="rounded-md bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-900"
                    >
                        Đăng tuyển & tìm hồ sơ
                    </Link>
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
                    isMobileMenuOpen ? "max-h-96" : "max-h-0"
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
                        to="/register"
                        className="block rounded-md bg-green-600 px-4 py-2 text-center font-semibold text-white hover:bg-green-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Đăng ký
                    </Link>
                    <Link
                        to="/login?employer=true"
                        className="block rounded-md bg-slate-800 px-4 py-2 text-center font-semibold text-white hover:bg-slate-900"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Đăng tuyển & tìm hồ sơ
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
