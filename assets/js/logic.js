//Darkmode html button
const darkModeToggle = document.getElementById('darkAndBrooding');
//selecting body tag in css
const elem = document.body;
//local stored object to persist dark mode
let darkMode = localStorage.getItem('dark-mode');
//if darkmode is on during page load sets darkmode
if (darkMode === 'true') {
    setDarkMode();
}

//Enables darkmode
function setDarkMode() {
    elem.classList.toggle('dark-mode')
    localStorage.setItem('dark-mode', 'true')
};

//disables darkmode
function removeDarkMode() {
    elem.classList.toggle('dark-mode')
    localStorage.setItem('dark-mode', 'false')
};

//Runs button to toggle darkmode on and off
darkModeToggle.onclick = function () {
    let darkModeStore = localStorage.getItem('dark-mode');
    if (darkModeStore == 'false') {
        setDarkMode();
    } else {
        removeDarkMode();
    }

}
