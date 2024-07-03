document.addEventListener("DOMContentLoaded", function () {
    // Define the number of columns per row
    var columns_per_row = 5;

    // Get the projects row container
    var projectsRow = document.getElementById("projectsRow");
    var projectModel = document.getElementById("projectModel");
    let counter = 0;

    // Example array of projects (update this with your actual data)
    var projects = [
        { img_src: 'image1.jpg', category: 'Category 1', title: 'Title 1', description: 'Project 1 description', github_link: '#', id: '1' },
        { img_src: 'image2.jpg', category: 'Category 2', title: 'Title 2', description: 'Project 2 description', github_link: '#', id: '2' },
        { img_src: 'image3.jpg', category: 'Category 3', title: 'Title 3', description: 'Project 3 description', github_link: '#', id: '3' }
    ];

    // Render the project cards
    projects.forEach(function (project) {
        counter++;
        var project_description = "project" + counter + "_" + "description";
        var image_id = "myImage" + counter;  // Generate unique ID for each image

        var projectHTML = `
            <div class="col-md-${12 / columns_per_row}">
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
                        <p class="card-description" data-i18n="${project_description}"></p>
                    </div>
                    <div class="card-footer">
                        <div class="post-author">
                            <img src="assets/img/github.png" alt="" class="avatar rounded-circle">
                            <a href="${project.github_link}" target="_blank" data-i18n="explore_gitHub"></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsRow.innerHTML += projectHTML;
    });

    // Generate the modal for each project and attach event listeners
    projects.forEach(function (project, index) {
        var img = document.getElementById("myImage" + (index + 1));

        var modalHTML = `
            <div id="imageModal${index}" class="modal">
                <span class="close" data-index="${index}">&times;</span>
                <img class="modal-content" id="img${index}">
                <h6 id="caption${index}" data-i18n="look"></h6>
            </div>
        `;

        projectModel.innerHTML += modalHTML;

        img.onclick = function () {
            var modal = document.getElementById(`imageModal${index}`);
            var modalImg = document.getElementById(`img${index}`);
            var captionElement = document.getElementById(`caption${index}`);

            modal.style.display = "block";
            modalImg.src = this.querySelector("img").src;

            captionElement.dataset.i18n = project.title;
            captionElement.innerHTML = project.description;
        };

        // Add event listener to the close button
        var span = document.querySelector(`#imageModal${index} .close`);
        span.onclick = function () {
            var modal = document.getElementById(`imageModal${index}`);
            modal.style.display = "none";
        };
    });



});