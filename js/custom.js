// Wedding Calendar
let currentMonth = 2; // March (0-indexed)
let currentYear = 2026;
const weddingDay = 9; // Wedding date

function generateCalendar(month, year) {
    const calendarDays = document.getElementById('calendarDays');
    const calendarMonth = document.getElementById('calendarMonth');
    
    if (!calendarDays || !calendarMonth) return;
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    calendarMonth.textContent = `${monthNames[month]} ${year}`;
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    
    calendarDays.innerHTML = '';
    
    // Previous month's days
    for (let i = 0; i < firstDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day outside';
        calendarDays.appendChild(dayDiv);
    }
    
    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        dayDiv.textContent = day;
        
        // Check if it's today
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('today');
        }
        
        // Check if it's the wedding day
        if (day === weddingDay && month === 2 && year === 2026) {
            dayDiv.classList.add('wedding-day');
            dayDiv.title = 'Wedding Day! 💕';
        }
        
        calendarDays.appendChild(dayDiv);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateCalendar(currentMonth, currentYear);
    
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        });
    }
});

// Show Coming Soon message
function showComingSoon(event) {
    event.preventDefault();
    const msg = document.getElementById('comingSoonMsg');
    msg.style.display = 'block';
    
    setTimeout(function() {
        msg.style.display = 'none';
    }, 3000); // Disappears after 3 seconds
}

// Close modal
function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
