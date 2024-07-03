//your JS code here. If required.

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to apply preferences from cookies
function applyPreferences() {
    const fontSize = getCookie('fontsize');
    const fontColor = getCookie('fontcolor');

    if (fontSize) {
        document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
        document.getElementById('fontsize').value = fontSize;
    }

    if (fontColor) {
        document.documentElement.style.setProperty('--fontcolor', fontColor);
        document.getElementById('fontcolor').value = fontColor;
    }
}

// Event listener for form submission
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;
    
    setCookie('fontsize', fontSize, 365);
    setCookie('fontcolor', fontColor, 365);
    
    applyPreferences();
});

// Apply preferences on page load
applyPreferences();
