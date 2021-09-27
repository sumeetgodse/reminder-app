import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path = "/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </Router>
    )
}

export default Routes;
