import PropTypes from "prop-types";
import AccountNavigation from "../../components/navigation/AccountNavigation";

const AccountLayout = ({ children }) => {
    return (
        <div className="mx-auto flex min-h-[500px] w-full max-w-[1360px] flex-col gap-6 p-4 md:flex-row">
            {/* Sidebar navigation bên trái */}
            <div className="w-full md:w-1/5">
                <AccountNavigation />
            </div>

            {/* Nội dung chính (children) bên phải */}
            <div className="w-full rounded-lg bg-white p-4 shadow-lg md:w-4/5">{children}</div>
        </div>
    );
};

AccountLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccountLayout;
