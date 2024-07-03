//your JS code here. If required.

// Function to set a cookie

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('preferencesForm');
    const fontSizeInput = document.getElementById('fontsize');
    const fontColorInput = document.getElementById('fontcolor');
    
    // Function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to apply preferences from cookies
    function applyPreferences() {
        const fontSize = getCookie('fontsize');
        const fontColor = getCookie('fontcolor');

        if (fontSize) {
            document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
            fontSizeInput.value = fontSize;
        }

        if (fontColor) {
            document.documentElement.style.setProperty('--fontcolor', fontColor);
            fontColorInput.value = fontColor;
        }
    }

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const fontSize = fontSizeInput.value;
        const fontColor = fontColorInput.value;
        
        setCookie('fontsize', fontSize, 365);
        setCookie('fontcolor', fontColor, 365);
        
        applyPreferences();
    });

    // Apply preferences on page load
    applyPreferences();
});

