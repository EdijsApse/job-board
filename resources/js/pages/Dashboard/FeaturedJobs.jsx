import { useSelector } from "react-redux";
import Fade from "../../components/Animations/Fade";
import Filters from "../../components/Dashboard/Employer/JobsFilter";
import SingleFeaturedJobTableRow from "../../components/Job/SingleFeaturedJobTableRow";
import DashboardCard from "../../components/UI/DashboardCard";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import Pagination from "../../components/UI/Pagination";
import useFilter from "../../hooks/use-filter";
import { getFeaturedJobs } from "../../store/thunks/featuredLists";

const FeaturedJobs = () => {
    const jobs = useSelector((state) => state.featuredJobs.list);
    const currentPage = useSelector((state) => state.featuredJobs.currentPage);
    const lastPage = useSelector((state) => state.featuredJobs.lastPage);
    const { filters, isLoading, setFilters, resetFilters, setPageHandler } =
        useFilter(getFeaturedJobs, (state) => state.featuredJobs.isLoading);

    return (
        <DashboardCard className="relative">
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <div className="table-wrapper">
                <Filters
                    preselectedFilters={filters}
                    updateFilters={setFilters}
                    resetSearch={resetFilters}
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <SingleFeaturedJobTableRow key={job.id} job={job} />
                        ))}
                    </tbody>
                </table>
                {jobs.length === 0 && !isLoading && (
                    <h6 className="no-list-items-title">
                        No Featured Jobs found!
                    </h6>
                )}
                {jobs.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        lastPage={lastPage}
                        setPage={setPageHandler}
                    />
                )}
            </div>
        </DashboardCard>
    );
};

export default FeaturedJobs;
