import MainLayout from "../../layouts/MainLayout/MainLayout";
import JobDetailsHeader from "../../components/section/JobDetails/JobDetailsHeader";
import JobDetailsBody from "../../components/section/JobDetails/JobDetailsBody";
import JobDetailsSummary from "../../components/section/JobDetails/JobDetailsSummary";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

import { getJobPostById } from "../../services/jobPostService";

const JobDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [jobData, setJobData] = useState({});

    useEffect(() => {
        const fetchJobPostsDetails = async () => {
            setLoading(true);
            try {
                const data = await getJobPostById(id);
                if (!data.success) {
                    throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
                }
                setJobData(data.result);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        };

        fetchJobPostsDetails();
    }, [id, navigate]);

    return (
        <MainLayout>
            {loading ? (
                <div className="flex h-full min-h-80 items-center justify-center">
                    <CircularProgress color="success" />
                </div>
            ) : (
                <>
                    {/* Header */}
                    <div className="sticky top-0 mt-8 flex w-full justify-center bg-white">
                        <div className="w-full max-w-7xl px-4">
                            <JobDetailsHeader
                                id={jobData.id}
                                logo={jobData.company.logo}
                                title={jobData.title}
                                companyName={jobData.company.name}
                                address={jobData.address}
                                updatedDate={jobData.updatedDate}
                                expiryDate={jobData.expiryDate}
                                salary={jobData.salary}
                                saved={jobData.saved}
                            />
                        </div>
                    </div>
                    {/* Body và Summary theo hàng ngang (responsive) */}
                    <div className="flex w-full justify-center bg-white py-8">
                        <div className="flex w-full max-w-7xl flex-col gap-8 px-4 lg:flex-row">
                            {/* Body chiếm 7 phần trên màn hình lớn và full trên màn hình nhỏ */}
                            <div className="w-full lg:w-8/12">
                                <JobDetailsBody jobData={jobData} />
                            </div>

                            {/* Summary chiếm 3 phần trên màn hình lớn và full trên màn hình nhỏ */}
                            <div className="w-full lg:w-4/12">
                                <JobDetailsSummary
                                    jobPosition={jobData.jobPosition}
                                    salary={jobData.salary}
                                    remote={jobData.remote}
                                    type={jobData.type}
                                    field={jobData.field}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </MainLayout>
    );
};

export default JobDetailsPage;
