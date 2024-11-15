import MainLayout from "../../layouts/MainLayout/MainLayout";
import HomeSearchBar from "../../components/search/SearchBar/HomeSearchBar";
import SectionBackGround from "/images/SectionBackGround.jpg";
import HomeJobCard from "../../components/card/JobCard/HomeJobCard";

const HomePage = () => {
    const jobData = [
        {
            id: 1,
            logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203359/australia-tech-map-by-jimjemr-brandcrowd.png",
            title: "Frontend Developer",
            companyName: "Tech Company ABCDE audi mercerdes benz rolls royce",
            salary: "$1000 - $2000",
            location: "Ho Chi Minh City",
        },
        {
            id: 2,
            logo: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/7e55eb3d6a1a096058955ae7d64ee9d5.png",
            title: "Backend Developer",
            companyName: "Tech Company B",
            salary: "$1500 - $2500",
            location: "Hanoi",
        },
    ];

    return (
        <MainLayout title="Trang chủ">
            {/* Section chứa thanh tìm kiếm */}
            <div
                className="relative flex h-[400px] w-full items-center justify-center"
                style={{
                    backgroundImage: `url(${SectionBackGround})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 w-full max-w-5xl px-4">
                    <h2 className="mb-6 text-center text-2xl font-bold text-white">
                        Tìm kiếm công việc mơ ước của bạn
                    </h2>
                    <HomeSearchBar />
                </div>
            </div>

            {/* Nội dung khác */}
            <div className="container mx-auto py-8">
                <h1 className="text-center text-2xl font-semibold">Welcome to HomePage</h1>
            </div>

            <div className="container mx-auto py-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-700">Việc làm mới nhất</h2>
                <div className="flex flex-col gap-4">
                    {jobData.map((job) => (
                        <HomeJobCard key={job.id} {...job} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
