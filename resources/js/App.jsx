import { Fragment } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Landing />
            <Footer />
        </Fragment>
    );
};

export default App;
