import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

import MainLayout from "../../layouts/MainLayout/MainLayout";
import SearchSection from "../../components/section/Home/SearchSection";
import NewJobsSection from "../../components/section/Home/NewJobsSection";

import { getPopularJobPosts } from "../../services/jobPostService";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchPopularJobPosts = async () => {
            setLoading(true);
            try {
                const data = await getPopularJobPosts();
                if (!data.success) {
                    throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
                }
                setJobData(data?.result);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularJobPosts();
    }, []);

    return (
        <MainLayout title="Trang chủ">
            {/* Section chứa thanh tìm kiếm */}
            <SearchSection title="Tìm kiếm công việc mơ ước của bạn" />

            {loading ? (
                <div className="flex items-center justify-center">
                    <CircularProgress color="success" />
                </div>
            ) : (
                <>
                    {/* Section danh sách công việc */}
                    <NewJobsSection jobData={jobData} />
                </>
            )}
        </MainLayout>
    );
};

export default HomePage;
