export const getRemindersLocal = (key) => {
    const reminders = localStorage.getItem(key);

    if(reminders && reminders.length) {
        return JSON.parse(reminders);
    } else {
        return [];
    }
}

export const setRemindersLocal = (key, currentState) => {
    localStorage.setItem(key, currentState);
}

export const getIndex = (key) => {
    const index = localStorage.getItem(key);

    if(index && index.length) {
        return JSON.parse(index);
    } else {
        return [-1];
    }
} 

export const setIndex = (key, index) => {
    localStorage.setItem(key, index);
}

export const getUsers = (key) => {
    const users = localStorage.getItem(key);

    if(users && users.length) {
        return JSON.parse(users);
    } else {
        return [];
    }
}

export const setUsers = (key,users) => {
    localStorage.setItem(key,users)
}