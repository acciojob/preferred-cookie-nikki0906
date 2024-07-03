//your JS code here. If required.

// Function to set a cookie
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('preferencesForm');
    const fontSizeInput = document.getElementById('fontsize');
    const fontColorInput = document.getElementById('fontcolor');
    
    // Function to apply preferences from localStorage
    function applyPreferences() {
        const fontSize = localStorage.getItem('fontsize');
        const fontColor = localStorage.getItem('fontcolor');

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
        
        localStorage.setItem('fontsize', fontSize);
        localStorage.setItem('fontcolor', fontColor);
        
        applyPreferences();
    });

    // Apply preferences on page load
    applyPreferences();
});
