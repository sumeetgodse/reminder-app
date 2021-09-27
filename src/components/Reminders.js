import "../styles/Reminders.css";
import "../styles/Card.css";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import cancel from "./cancel.png"
import { deleteReminder } from "../store/reminderReducer";

const Reminders = () => {
    const reminders = useSelector((state) => state.reminderReducer); 
    const loggedIndex = useSelector((state => state.indexReducer[0]));
    const users = store.getState().userReducer;

    const handleDelete = (reminder) => {
        store.dispatch(deleteReminder(reminder));
    }

    return(
        <div className="reminders">
            <div className="reminders-header">
                Upcoming Reminders
            </div>
            <div className="row">
            {
                reminders.map((reminder)=>{
                    return(
                        reminder.username === users[loggedIndex].username &&
                        <div className="column">
                            <div className="card">
                                <img src={cancel} className="delete" onClick={() => handleDelete(reminder)} />
                                {reminder.text}
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Reminders;
