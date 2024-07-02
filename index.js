function getCurrentTimeUTC() {
    const now = new Date();
    return now.toUTCString();
}

function getCurrentDayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    return days[now.getUTCDay()];
}

document.getElementById('utc-time').textContent = getCurrentTimeUTC();
document.getElementById('current-day').textContent = getCurrentDayOfWeek();
