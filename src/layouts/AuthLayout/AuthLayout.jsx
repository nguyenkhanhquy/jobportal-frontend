import Public_layout_cover from "/images/public_layout_cover.jpg";
import usePageTitle from "../../hooks/usePageTitle";
import PropTypes from "prop-types";

const AuthLayout = ({ children, title }) => {
    usePageTitle(title);
    return (
        <div className="flex h-screen">
            {/* Bên trái: Nội dung form chiếm 5/9 */}
            <div className="flex w-full flex-col items-center justify-center bg-white p-8 md:w-5/9">
                <div className="w-full max-w-md">{children}</div>
            </div>

            {/* Bên phải: Hình ảnh minh họa chiếm 4/9 */}
            <div className="hidden h-full w-4/9 md:flex">
                <img src={Public_layout_cover} alt="Banner" className="h-full w-full object-cover" />
            </div>
        </div>
    );
};
AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

export default AuthLayout;
