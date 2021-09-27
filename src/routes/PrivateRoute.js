import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({component: Component}) => {
    const loggedIndex = useSelector((state => state.indexReducer[0]));

    return (
        <Route 
            render = { 
                () => {
                    return loggedIndex != -1 ? <Component /> : <Redirect to="/login" />
                }
            }
        />
    )
}

export default PrivateRoute;
