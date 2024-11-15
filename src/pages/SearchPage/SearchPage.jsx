import MainLayout from "../../layouts/MainLayout/MainLayout";
import JobSearchBar from "../../components/search/SearchBar/JobSearchBar";

const SearchPage = () => {
    return (
        <MainLayout>
            <JobSearchBar />
            <h1>Search Page</h1>
        </MainLayout>
    );
};

export default SearchPage;
