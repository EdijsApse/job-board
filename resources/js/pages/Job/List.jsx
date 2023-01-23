import Wrapper from "../../components/UI/Wrapper";
import Item from "../../compone../../components/Job/Item";
import Filters from "../../components/Job/Filters";
import Pagination from "../../components/UI/Pagination";
import SortInputs from "../../components/Job/SortInputs";
import BreadCrumbs from "../../components/UI/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useEffect } from "react";
import { getJobs } from "../../store/thunks/job";

const JobList = () => {
    const isLoading = useSelector((state) => state.job.isLoading);
    const list = useSelector((state) => state.job.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, []);

    return (
        <div className="page">
            <div className="page-header">
                <h1>Jobs</h1>
                <BreadCrumbs />
            </div>
            <main className="page-main container-fluid">
                <Wrapper>
                    <div className="row">
                        <div className="col-4">
                            <div className="page-filters">
                                <Filters />
                            </div>
                        </div>
                        <div className="col-8 relative">
                            {isLoading && <LoadingSpinner />}
                            <div className="sort-container">
                                <span>Showing 1 – 10 of 18 results</span>
                                <div className="sort-inputs">
                                    <SortInputs />
                                </div>
                            </div>
                            <ul className="jobs-list">
                                {list.map((job) => (
                                    <Item
                                        key={job.id}
                                        job={job}
                                        showSalary={true}
                                        showFeaturedBadge={true}
                                        squareImage={true}
                                    />
                                ))}
                            </ul>
                            <Pagination />
                        </div>
                    </div>
                </Wrapper>
            </main>
        </div>
    );
};

export default JobList;
