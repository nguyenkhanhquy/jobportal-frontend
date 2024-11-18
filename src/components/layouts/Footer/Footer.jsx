import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
    return (
        <footer className="bg-slate-800 py-10 text-white">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4">
                {/* Logo và giới thiệu */}
                <div className="ml-10">
                    <img src={Logo} alt="JobPortal" className="mb-4 w-32" />
                    <p className="text-gray-400">
                        JobPortal là nền tảng kết nối nhà tuyển dụng và ứng viên nhanh chóng, dễ dàng và hiệu quả.
                    </p>
                </div>

                {/* Liên kết nhanh */}
                <div className="ml-10">
                    <h4 className="mb-4 text-lg font-semibold">Liên kết nhanh</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/jobs" className="hover:text-green-400">
                                Việc làm
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories" className="hover:text-green-400">
                                Ngành nghề
                            </Link>
                        </li>
                        <li>
                            <Link to="/resume" className="hover:text-green-400">
                                Hồ sơ & CV
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:text-green-400">
                                Đăng nhập
                            </Link>
                        </li>
                        <li>
                            <Link to="/register/job-seeker" className="hover:text-green-400">
                                Đăng ký
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hỗ trợ khách hàng */}
                <div className="ml-10">
                    <h4 className="mb-4 text-lg font-semibold">Hỗ trợ khách hàng</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Email: support@jobportal.com</li>
                        <li>Hotline: 1800 1234</li>
                        <li>
                            <Link to="/contact" className="hover:text-green-400">
                                Liên hệ chúng tôi
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mạng xã hội */}
                <div className="ml-10">
                    <h4 className="mb-4 text-lg font-semibold">Kết nối với chúng tôi</h4>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <FacebookIcon fontSize="medium" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <LinkedInIcon fontSize="medium" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <TwitterIcon fontSize="medium" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <InstagramIcon fontSize="medium" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                © {new Date().getFullYear()} JobPortal. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
