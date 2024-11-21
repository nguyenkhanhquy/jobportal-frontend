import { useState } from "react";
import PropTypes from "prop-types";
import JobInfoTab from "./tab/JobInfoTab";
import CompanyInfoTab from "./tab/CompanyInfoTab";

const JobDetailsBody = ({ jobData }) => {
    // State để quản lý tab đang được chọn
    const [activeTab, setActiveTab] = useState("jobDescription");

    // Hàm xử lý khi click vào tab
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="mx-auto w-full max-w-5xl rounded-lg border py-4 shadow-md">
            {/* Header tab */}
            <div className="mb-4 flex border-b">
                <button
                    onClick={() => handleTabChange("jobDescription")}
                    className={`w-1/2 pb-4 text-center text-base font-semibold ${
                        activeTab === "jobDescription" ? "border-b-2 border-green-600 text-green-600" : "text-gray-600"
                    }`}
                >
                    Mô tả công việc
                </button>
                <button
                    onClick={() => handleTabChange("companyInfo")}
                    className={`w-1/2 py-2 pb-4 text-center text-base font-semibold ${
                        activeTab === "companyInfo" ? "border-b-2 border-green-600 text-green-600" : "text-gray-600"
                    }`}
                >
                    Giới thiệu về công ty
                </button>
            </div>

            {/* Nội dung tab */}
            <div>
                {activeTab === "jobDescription" && (
                    <JobInfoTab
                        description={jobData.description}
                        requirements={jobData.requirements}
                        benefits={jobData.benefits}
                        address={jobData.address}
                        workingTime={jobData.workingTime}
                    />
                )}

                {activeTab === "companyInfo" && (
                    <CompanyInfoTab
                        description={jobData.company.description}
                        website={jobData.company.website}
                        address={jobData.company.address}
                    />
                )}
            </div>
        </div>
    );
};
JobDetailsBody.propTypes = {
    jobData: PropTypes.object.isRequired,
};

export default JobDetailsBody;
