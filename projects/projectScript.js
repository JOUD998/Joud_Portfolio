document.addEventListener("DOMContentLoaded", function () {
    // Define the number of columns per row
    var numberOfProjects = projects.length;

    var projectsRow = document.getElementById("projectsRow");

    // Container for modals
    var modalsContainer = document.getElementById("modalsContainer");

    let counter = 1;

    // Generate project cards and modals
    projects.forEach(function (project) {
        var project_description = "look" + counter;

        var image_id = "myImage" + counter;

        // Project card HTML
        var projectHTML = `
            <div class="col-md-${12 / numberOfProjects}">
                <div class="card card-projects">
                    <div class="card-img" id="${image_id}">
                        <img src="${project.img_src}" alt="" class="img-fluid">
                    </div>
                    <div class="card-body">
                        <div class="card-category-box">
                            <div class="card-category">
                                <h6 class="category">${project.category}</h6>
                            </div>
                        </div>
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-description" data-i18n="${project_description}">${project.description}</p>
                    </div>
                    <div class="card-footer">
                        <div class="post-author">
                            <img src="assets/img/github.png" alt="" class="avatar rounded-circle">
                            <a href="${project.github_link}" target="_blank" data-i18n="explore_gitHub">View on GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsRow.innerHTML += projectHTML;

        // Modal HTML
        var modalHTML = `
            <div class="modal" id="modal${counter}">
                <span class="close" onclick="document.getElementById('modal${counter}').style.display='none'">&times;</span>
                <img class="modal-content" id="img${counter}">
                <div class="modal-caption"  data-i18n= ${project_description}>
           
                </div>
            </div>
        `;
        modalsContainer.innerHTML += modalHTML;
        counter++;

    });

    let innerDescCounter = 0;

    projects.forEach(function (project, index) {
        var projectInnerDescription = "look" + "_" +innerDescCounter;

        var img = document.getElementById("myImage" + (index + 1));
        img.onclick = function () {
            var modal = document.getElementById("modal" + (index + 1));
            var modalImg = document.getElementById("img" + (index + 1));
            modal.style.display = "block";
            modalImg.src = this.querySelector("img").src;
        };
    });
});