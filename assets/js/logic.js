const darkModeToggle = document.getElementById('darkAndBrooding');
const elem = document.body;
let darkMode = localStorage.getItem('dark-mode');

function setDarkMode() {
    elem.classList.toggle('dark-mode')
    localStorage.setItem('dark-mode', 'true')
};

function removeDarkMode() {
    elem.classList.toggle('dark-mode')
    localStorage.setItem('dark-mode', 'false')
};

if (darkMode === 'true') {
    setDarkMode();
}

darkModeToggle.onclick = function() {
    let darkModeStore = localStorage.getItem('dark-mode');
    if (darkModeStore == 'false') {
        setDarkMode();
    } else {
        removeDarkMode();
    }

}
