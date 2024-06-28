//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('preferencesForm');
    const fontSizeInput = document.getElementById('fontsize');
    const fontColorInput = document.getElementById('fontcolor');

    // Function to get cookie value by name
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // Load preferences from cookies
    const savedFontSize = getCookie('fontsize');
    const savedFontColor = getCookie('fontcolor');

    if (savedFontSize) {
        document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`);
        fontSizeInput.value = savedFontSize;
    }

    if (savedFontColor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
        fontColorInput.value = savedFontColor;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fontSize = fontSizeInput.value;
        const fontColor = fontColorInput.value;

        document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
        document.documentElement.style.setProperty('--fontcolor', fontColor);

        document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`; // Expires in 1 year
        document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`; // Expires in 1 year
   

