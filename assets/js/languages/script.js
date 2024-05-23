
let currentLanguage = 'en';

// Function to fetch language data
async function fetchLanguageData(lang) {
    try {
        console.log(`Fetching data from: languages/${lang}.json`);
        const response = await fetch(`languages/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching language data:', error);
        return {}; // Return an empty object or handle the error appropriately
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
        element.textContent = langData[key];
    });
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

// Function to toggle Arabic stylesheet based on language selection
// function toggleArabicStylesheet(lang) {
//     const head = document.querySelector('head');
//     const link = document.querySelector('#styles-link');

//     if (link) {
//         head.removeChild(link); // Remove the old stylesheet link
//     }
//     if (lang === 'ar') {
//         const newLink = document.createElement('link');
//         newLink.id = 'styles-link';
//         newLink.rel = 'stylesheet';
//         newLink.href = './assets/css/style-ar.css'; // Path to Arabic stylesheet
//         head.appendChild(newLink);
//     }
// }

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    currentLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(currentLanguage);
    updateContent(langData);

    // Set initial button text
    const button = document.getElementById('languageButton');
    button.innerText = currentLanguage === 'en' ? 'EN' : 'DE';
    button.classList.add(currentLanguage === 'en' ? 'english' : 'deutsch');

    // Add event listener to the button
    button.addEventListener('click', changeLanguage);

    // Toggle Arabic stylesheet if necessary
    toggleArabicStylesheet(currentLanguage);
});
