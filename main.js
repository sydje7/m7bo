const daysContainer = document.getElementById('days');
const monthYearElement = document.getElementById('month-year');

let currentDate = new Date();

function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

function renderCalendar() {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    
   
    let firstDay = firstDayOfMonth.getDay(); 
    if (firstDay === 0) {
        firstDay = 7;  
    }

    
    const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    monthYearElement.textContent = `${months[currentMonth]} ${currentYear}`;
    
    
    daysContainer.innerHTML = '';
    
    
    for (let i = 1; i < firstDay; i++) {
        daysContainer.innerHTML += `<div class="day empty"></div>`;
    }
    
    
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        daysContainer.innerHTML += `<div class="day">${day}</div>`;

    }

   

  
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}


renderCalendar();

