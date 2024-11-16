import PropTypes from "prop-types";
import AccountNavigation from "../../components/navigation/AccountNavigation";

const AccountLayout = ({ children }) => {
    return (
        <div className="mx-auto flex min-h-[600px] w-full max-w-[1320px] flex-col gap-8 p-4 md:flex-row">
            {/* Sidebar navigation bên trái */}
            <div className="w-full md:w-1/4">
                <AccountNavigation />
            </div>

            {/* Nội dung chính (children) bên phải */}
            <div className="w-full rounded-lg bg-white p-6 shadow-lg md:w-3/4">{children}</div>
        </div>
    );
};

AccountLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccountLayout;
