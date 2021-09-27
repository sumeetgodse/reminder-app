import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { addReminder } from '../store/reminderReducer';
import { store } from '../store/store';
import "../styles/AddReminder.css";
import { useSelector } from "react-redux";

const AddReminder = () => {
    const [reminderText, setReminderText] = useState("");
    const loggedIndex = useSelector((state => state.indexReducer[0]));
    const users = store.getState().userReducer;
    const handleChange = (e) => {
        setReminderText(e.target.value);
    }

    const handleSubmit = () => {
        const reminder = {
            username: users[loggedIndex].username,
            text: reminderText
        }
        store.dispatch(addReminder(reminder))
        setReminderText("");
    }

    return(
        <div className="add-reminder">
            <div className="reminder-text">
                <TextField
                    id="outlined-multiline-static"
                    label="Reminder"
                    multiline
                    rows={5}
                    variant="outlined"
                    placeholder="What's on your mind?"
                    value={reminderText}
                    onChange={handleChange}
                />
            </div>
            <div className="add-button">
                <input className="button" type="button" value="Add Reminder" onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default AddReminder;
