import PropTypes from "prop-types";
import HomeJobCard from "../../card/JobCard/HomeJobCard";

const NewJobsSection = ({ jobData }) => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-green-600">Việc làm mới nhất</h2>

            {/* Flex container cho các job card */}
            <div className="flex flex-wrap justify-center gap-6">
                {jobData.slice(0, 12).map((job) => (
                    <HomeJobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

NewJobsSection.propTypes = {
    jobData: PropTypes.array.isRequired,
};

export default NewJobsSection;
