import RecruiterRegisterForm from "../../../components/forms/RecruiterForm/RecruiterRegisterForm/RecruiterRegisterForm";
import Recruiter_layout_cover from "/images/recruiter_layout_cover.jpg";
import usePageTitle from "../../../hooks/usePageTitle";

const RecruiterRegisterPage = () => {
    usePageTitle("Đăng ký nhà tuyển dụng");
    return (
        <div className="flex h-screen">
            <div
                className="flex h-screen w-full flex-col items-center justify-center overflow-y-scroll bg-white p-8 md:w-[65%]"
                style={{
                    scrollbarWidth: "none", // Ẩn thanh cuộn cho Firefox
                    msOverflowStyle: "none", // Ẩn thanh cuộn cho IE và Edge
                }}
            >
                <style>
                    {`
                    /* Ẩn thanh cuộn cho Chrome, Safari, Edge */
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    `}
                </style>
                <div className="no-scrollbar w-full">
                    <RecruiterRegisterForm />
                </div>
            </div>

            <div className="hidden h-screen w-[35%] md:flex">
                <img src={Recruiter_layout_cover} alt="Banner" className="h-full w-full object-cover" />
            </div>
        </div>
    );
};

export default RecruiterRegisterPage;
