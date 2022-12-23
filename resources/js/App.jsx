import { Fragment } from "react";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./pages/Landing";

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Landing />
        </Fragment>
    );
};

export default App;
