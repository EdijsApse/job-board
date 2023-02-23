import { useSelector } from "react-redux";
import Fade from "../../../components/Animations/Fade";
import SingleApplicationTableRow from "../../../components/Application/SingleApplicationTableRow";
import Filters from "../../../components/Application/Filters";
import DashboardCard from "../../../components/UI/DashboardCard";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import Pagination from "../../../components/UI/Pagination";
import useFilter from "../../../hooks/use-filter";
import { loadEmployerApplications } from "../../../store/thunks/applications/employer";

const EmployerApplications = () => {
    const applications = useSelector((state) => state.employerApplications.list);
    const currentPage = useSelector(
        (state) => state.employerApplications.currentPage
    );
    const lastPage = useSelector((state) => state.employerApplications.lastPage);
    const { filters, isLoading, setFilters, resetFilters, setPageHandler } =
        useFilter(
            loadEmployerApplications,
            (state) => state.employerApplications.isLoading
        );

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
                            <th>Candidate</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application) => (
                            <SingleApplicationTableRow key={application.id} application={application} />
                        ))}
                    </tbody>
                </table>
                {applications.length === 0 && !isLoading && (
                    <h6 className="no-list-items-title">No Applications found!</h6>
                )}
                {applications.length > 0 && (
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

export default EmployerApplications;
