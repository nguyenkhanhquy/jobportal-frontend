import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";
import CreateJobPostForm from "../../../components/forms/RecruiterForm/CreateJobPostForm/CreateJobPostForm";

const CreateJobPostPage = () => {
    return (
        <MainLayout title="Tạo bài đăng tuyển dụng">
            <AccountLayout>
                <CreateJobPostForm />
            </AccountLayout>
        </MainLayout>
    );
};

export default CreateJobPostPage;
