import PropTypes from "prop-types";
// import usePageTitle from "../../hooks/usePageTitle";
import Header from "../../components/layouts/Header/Header";

const MainLayout = ({ children }) => {
    // usePageTitle(title);

    return (
        <>
            <Header />
            {children}
        </>
    );
};

MainLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired, // `children` có thể là bất kỳ kiểu dữ liệu nào hợp lệ cho JSX
};

export default MainLayout;
