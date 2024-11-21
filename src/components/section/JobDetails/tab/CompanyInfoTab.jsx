import PropTypes from "prop-types";

const CompanyInfoTab = ({ description, website, address }) => {
    return (
        <div className="mx-auto w-[90%] max-w-4xl">
            <h3 className="mb-2 text-lg font-semibold">Giới thiệu về công ty</h3>
            <p className="ml-6 text-gray-600">{description || "Chưa cập nhật"}</p>
            <hr className="my-6 border-gray-300" />
            <h3 className="mb-2 text-lg font-semibold">Website</h3>
            <p className="ml-6 text-gray-600">
                {website ? (
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                    >
                        {website}
                    </a>
                ) : (
                    "Chưa cập nhật"
                )}
            </p>
            <hr className="my-6 border-gray-300" />
            <h3 className="mb-2 text-lg font-semibold">Địa chỉ công ty</h3>
            <p className="ml-6 text-gray-600">{address || "Chưa cập nhật"}</p>
        </div>
    );
};

CompanyInfoTab.propTypes = {
    description: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
};

export default CompanyInfoTab;
