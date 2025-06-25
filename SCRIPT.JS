
function formatTime(number) {
    return number < 10 ? '0' + number : number;
}


function updateClock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateClock, 1000);


updateClock();
