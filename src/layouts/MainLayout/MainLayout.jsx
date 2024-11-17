import PropTypes from "prop-types";
import usePageTitle from "../../hooks/usePageTitle";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children, title }) => {
    usePageTitle(title);

    // Sử dụng useLocation để lấy thông tin đường dẫn hiện tại
    const location = useLocation();
    const currentPath = location.pathname;

    // Kiểm tra nếu là trang Home ("/") hoặc trang Search ("/search")
    const isStickyHeader = currentPath === "/";

    return (
        <>
            <Header isSticky={isStickyHeader} />
            {children}
            <Footer />
        </>
    );
};

MainLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired, // `children` có thể là bất kỳ kiểu dữ liệu nào hợp lệ cho JSX
};

export default MainLayout;
