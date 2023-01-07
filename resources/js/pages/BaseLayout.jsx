import { Fragment } from "react";
import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Alert from "../components/UI/Alert";

const BaseLayout = ({ children }) => {
    return (
        <Fragment>
            <Alert />
            <Navigation />
            {children}
            <ScrollRestoration
                getKey={(location) => {
                    return location.key;
                }}
            />
        </Fragment>
    );
};

export default BaseLayout;
