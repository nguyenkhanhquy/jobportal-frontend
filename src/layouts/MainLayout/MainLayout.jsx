import PropTypes from "prop-types";
import usePageTitle from "../../hooks/usePageTitle";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";

const MainLayout = ({ children, title }) => {
    usePageTitle(title);

    return (
        <>
            <Header />
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
