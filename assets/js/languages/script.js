let currentLanguage = 'en';


window.addEventListener('DOMContentLoaded', async () => {
    currentLanguage = localStorage.getItem('language') || 'en'; //get from here
    const langData = await fetchLanguageData(currentLanguage);
    updateContent(langData);

    // Set initial button text
    const button = document.getElementById('languageButton');


    // Select the button element
    let button1 = document.querySelector('#languageButton');

    button.innerText = currentLanguage === 'en' ? 'DE' : 'EN';
    button.classList.add(currentLanguage === 'en' ? 'english' : 'deutsch');

    // Add event listener to the button
    button.addEventListener('click', changeLanguage);

    // Toggle Arabic stylesheet if necessary
    // toggleArabicStylesheet(currentLanguage);
});



// Function to fetch language data
async function fetchLanguageData(lang) {
    try {
        const response = await fetch(`languages/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching language data:', error);
        return {};
    }
}

// Function to set the language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// Function to update content based on selected language
function updateContent(langData) {

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');

        let value = langData[key];
        value = value.replace(/\n/g, '<br>');

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else {
            element.innerHTML = value;
        } });
}

// Function to change language
async function changeLanguage() {
    // Toggle language
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';

    // Set language preference in local storage
    setLanguagePreference(currentLanguage);

    // Fetch and update content
    const langData = await fetchLanguageData(currentLanguage);
    updateContent(langData);

    // Update button text
    const button = document.getElementById('languageButton');
    button.innerText = currentLanguage === 'en' ? 'EN' : 'DE';

    // Toggle Arabic stylesheet if necessary
    toggleArabicStylesheet(currentLanguage);
}



