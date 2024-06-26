document.addEventListener("DOMContentLoaded", function () {
    // Define the number of columns per row
    var columns_per_row = 5;

    // Get the projects row container
    var projectsRow = document.getElementById("projectsRow");

    let counter = 0;

    // const projs = createProject();
    projects.forEach(function (project) {

        counter++;
        var project_description = "project" + counter + "_" + "description";
        var image_id = "myImage" + counter;  // Generate unique ID for each image


        var projectHTML = `
        <div class="col-md-${12 / columns_per_row}">

                <div class="card card-projects">
                        <div class=div class="card-img" id="${image_id}">
                            <img src= ${project.img_src} alt="" class="img-fluid">
                        </div>
                        <div class="card-body">
                            <div class="card-category-box">
                                <div class="card-category">
                                    <h6 class="category">${project.category}</h6>
                                </div>
                            </div>
                            <h3 class="card-title">${project.title}</h3>
                            <p class="card-description" data-i18n= ${project_description}></p>


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



    // Modal functionality
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Add event listeners to each image after projects are rendered
    projects.forEach(function (project, index) {
        var img = document.getElementById("myImage" + (index + 1));
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.querySelector("img").src;
            // captionText.innerHTML = this.querySelector("img").alt;
             captionText.innerHTML = project.description;


        };
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

});
