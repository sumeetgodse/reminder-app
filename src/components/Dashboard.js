import AddReminder from "./AddReminder";
import Reminders from "./Reminders";

const Dashboard = () => {
    return(
        <div className="reminder-container">
            <AddReminder />
            <Reminders />
        </div>
    )
}

export default Dashboard;
