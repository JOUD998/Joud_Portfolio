var projects = [
    {
        img_src: "assets/img/projects/my-portfolio.png",
        category: "Web Application",
        title: "My Portfolio",
        description: "Embark on a journey of seamless exploration",
        github_link: "https://github.com"
    },
    {
        img_src: "assets/img/projects/fayrouz-caffee.png",
        category: "Mobile Application",
        title: "Fayrouz Caffee",
        description: "Savor the vibrant flavors of our vegetarian haven",
        github_link: "https://github.com"
    },
    {
        img_src: "assets/img/projects/covid-app.png",
        category: "Mobile Application",
        title: "Covid-19-App",
        description: "Simplify your journey with RideEase",
        github_link: "https://github.com"
    },
    {
        img_src: "assets/img/projects/aurora.png",
        category: "Mobile Application",
        title: "Aurora Wasset",
        description: "Simplify your journey with RideEase",
        github_link: "https://github.com"
    },
    {
        img_src: "assets/img/projects/school-crm.png",
        category: "Mobile Application",
        title: "Dar Al Hekmeh School",
        description: "Simplify your journey with RideEase",
        github_link: "https://github.com"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    // Function to create a project modal
    function createProjectModal(project) {
        // Define the modal HTML structure as a string
        const modalHTML = `
            <div class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" src="${project.img_src}" alt="${project.title}">
                <div class="modal-caption">
                    <h6>${project.category}</h6>
                    <h3>${project.title}</h3>
                    <h1>"${project.description}"</h1>
                </div>
            </div>
        `;

        // Append the modal HTML to the container
        document.getElementById('modalsContainer').insertAdjacentHTML('beforeend', modalHTML);
    }

    // Function to create all project modals
    function createProjectModals(projects) {
        projects.forEach(project => {
            createProjectModal(project);
        });
    }

    // Generate modals for all projects
    createProjectModals(projects);
});

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};