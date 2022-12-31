import { Fragment } from "react";

const SortInputs = () => {
    return (
        <Fragment>
            <div className="form-group">
                <select className="form-select">
                    <option>Sort by (Default)</option>
                </select>
            </div>
            <div className="form-group">
                <select className="form-select">
                    <option>12 Per Page</option>
                </select>
            </div>
        </Fragment>
    );
};

export default SortInputs;
