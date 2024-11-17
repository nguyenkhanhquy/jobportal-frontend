import MainLayout from "../../layouts/MainLayout/MainLayout";
import SearchSection from "../../components/section/Home/SearchSection";
import NewJobsSection from "../../components/section/Home/NewJobsSection";

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
        {
            id: 3,
            logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203359/australia-tech-map-by-jimjemr-brandcrowd.png",
            title: "Frontend Developer",
            companyName: "Tech Company ABCDE audi mercerdes benz rolls royce",
            salary: "$1000 - $2000",
            location: "Ho Chi Minh City",
        },
        {
            id: 4,
            logo: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/7e55eb3d6a1a096058955ae7d64ee9d5.png",
            title: "Backend Developer",
            companyName: "Tech Company B",
            salary: "$1500 - $2500",
            location: "Hanoi",
        },
        {
            id: 5,
            logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203359/australia-tech-map-by-jimjemr-brandcrowd.png",
            title: "Frontend Developer",
            companyName: "Tech Company ABCDE audi mercerdes benz rolls royce",
            salary: "$1000 - $2000",
            location: "Ho Chi Minh City",
        },
        {
            id: 6,
            logo: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/7e55eb3d6a1a096058955ae7d64ee9d5.png",
            title: "Backend Developer",
            companyName: "Tech Company B",
            salary: "$1500 - $2500",
            location: "Hanoi",
        },
        {
            id: 7,
            logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203359/australia-tech-map-by-jimjemr-brandcrowd.png",
            title: "Frontend Developer",
            companyName: "Tech Company ABCDE audi mercerdes benz rolls royce",
            salary: "$1000 - $2000",
            location: "Ho Chi Minh City",
        },
        {
            id: 8,
            logo: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/7e55eb3d6a1a096058955ae7d64ee9d5.png",
            title: "Backend Developer",
            companyName: "Tech Company B",
            salary: "$1500 - $2500",
            location: "Hanoi",
        },
        {
            id: 9,
            logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203359/australia-tech-map-by-jimjemr-brandcrowd.png",
            title: "Frontend Developer",
            companyName: "Tech Company ABCDE audi mercerdes benz rolls royce",
            salary: "$1000 - $2000",
            location: "Ho Chi Minh City",
        },
        {
            id: 10,
            logo: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/7e55eb3d6a1a096058955ae7d64ee9d5.png",
            title: "Backend Developer",
            companyName: "Tech Company B",
            salary: "$1500 - $2500",
            location: "Hanoi",
        },
        {
            id: 11,
            logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203359/australia-tech-map-by-jimjemr-brandcrowd.png",
            title: "Frontend Developer",
            companyName: "Tech Company ABCDE audi mercerdes benz rolls royce",
            salary: "$1000 - $2000",
            location: "Ho Chi Minh City",
        },
        {
            id: 12,
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
            <SearchSection title="Tìm kiếm công việc mơ ước của bạn" />

            {/* Section danh sách công việc */}
            <NewJobsSection jobData={jobData} />
        </MainLayout>
    );
};

export default HomePage;
