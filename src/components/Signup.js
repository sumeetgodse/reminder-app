import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { store } from '../store/store';
import { addUser } from '../store/userReducer';
import "../styles/Auth.css";

const Signup = () => {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const userChange = (e) => {
        setUsername(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const cpasswordChange = (e) => {
        setCPassword(e.target.value);
    }

    const handleSignup = () => {
        const newUser = {
            username: username,
            password: password
        }
        store.dispatch(addUser(newUser));
        history.push("/login")
        setUsername("");
        setPassword("");
        setCPassword("");
    }

    return (
        <div className = "login-container">
            <div className = "login-header">
                Sign Up
            </div>
            <div className = "login-input">
                <TextField value={username} onChange={userChange} placeholder="Username" variant = "outlined" fullWidth />
            </div>
            <div className = "login-input">
                <TextField type="password" value={password} onChange={passwordChange} placeholder="Password" variant = "outlined" fullWidth />
            </div>
            <div className = "login-input">
                <TextField type="password" value={cpassword} onChange={cpasswordChange} placeholder="Confirm Password" variant = "outlined" fullWidth />
            </div>
            <div className = "login-button-container">
                <input className = "login-button" type = "button" value = "Sign Up" onClick={handleSignup} />
            </div>
            <div className = "login-already">
                Existing User? <Link style = {{textDecoration: "none", fontWeight: "bold"}} to = "/login">Log In</Link>
            </div>
        </div>
    )
}

export default Signup;
