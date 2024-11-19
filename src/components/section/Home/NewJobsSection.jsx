import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng
import HomeJobCard from "../../card/JobCard/HomeJobCard";
import CircularProgress from "@mui/material/CircularProgress";

const NewJobsSection = ({ jobData, loading }) => {
    const navigate = useNavigate(); // Hook để điều hướng

    return (
        <div className="container mx-auto py-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-green-600">Việc làm mới nhất</h2>

            {/* Flex container cho các job card */}
            {loading ? (
                <div className="flex items-center justify-center">
                    <CircularProgress color="success" />
                </div>
            ) : (
                <div className="flex flex-wrap justify-center gap-6">
                    {jobData.slice(0, 12).map((job) => (
                        <HomeJobCard key={job.id} job={job} />
                    ))}
                </div>
            )}

            {/* Nút "Xem thêm" */}
            <div className="mt-8 flex justify-center">
                <button
                    onClick={() => navigate("/search")}
                    className="rounded-lg bg-green-600 px-4 py-2 text-base font-semibold text-white hover:bg-green-700"
                >
                    Xem thêm...
                </button>
            </div>
        </div>
    );
};

NewJobsSection.propTypes = {
    jobData: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default NewJobsSection;
