import { useSelector } from "react-redux";
import { changeLoggedIndex } from "../store/indexReducer";
import { store } from "../store/store";
import "../styles/NavBar.css"
import logout from "./logout.png";

const NavBar = () => {
    const loggedIndex = useSelector((state => state.indexReducer[0]));

    const handleLogout = () => {
        store.dispatch(changeLoggedIndex(-1));
    }

    return(
        <div className="navbar">
            Reminder App
            {loggedIndex != -1 && <img onClick={handleLogout} src = {logout} className="logout" />}
        </div>
    )
}

export default NavBar;
