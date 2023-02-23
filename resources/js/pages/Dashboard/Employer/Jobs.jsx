import { useSelector } from "react-redux";
import Fade from "../../../components/Animations/Fade";
import Filters from "../../../components/Dashboard/Employer/JobsFilter";
import SingleJobTableRow from "../../../components/Job/SingleJobTableRow";
import DashboardCard from "../../../components/UI/DashboardCard";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import Pagination from "../../../components/UI/Pagination";
import useFilter from "../../../hooks/use-filter";
import { loadEmployerJobs } from "../../../store/thunks/employerJobs";

const EmployerJobs = () => {
    const jobs = useSelector((state) => state.employerJobs.list);
    const currentPage = useSelector((state) => state.employerJobs.currentPage);
    const lastPage = useSelector((state) => state.employerJobs.lastPage);
    const { filters, isLoading, setFilters, resetFilters, setPageHandler } =
        useFilter(loadEmployerJobs, (state) => state.employerJobs.isLoading);

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
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <SingleJobTableRow key={job.id} job={job} />
                        ))}
                    </tbody>
                </table>
                {jobs.length === 0 && !isLoading && (
                    <h6 className="no-list-items-title">No Jobs found!</h6>
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

export default EmployerJobs;
