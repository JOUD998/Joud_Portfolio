// document.addEventListener("DOMContentLoaded", function() {
//     // Define the number of columns per row
//     var columns_per_row = 5;
  
//     // Get the projects row container
//     var projectsRow = document.getElementById("projectsRow");
  
//     // Iterate over projects and generate HTML for each project
//     projects.forEach(function(project) {
//       var projectHTML = `


//       <div class="col-md-${12 / columns_per_row}">



//           <div class="card card-projects">
//             <div class="card-img"><img src="${project.img_src}" alt="" class="img-fluid"></div>
//             <div class="card-body">
//               <div class="card-category-box">
//                 <div class="card-category">
//                   <h6 class="category">${project.category}</h6>
//                 </div>
//               </div>
//               <h3 class="card-title">${project.title}</h3>
//               <p class="card-description">${project.description}</p>
//             </div>
//             <div class="card-footer">
//               <div class="post-author">
//                 <img src="assets/img/web.png" alt="" class="avatar rounded-circle">
//                 <a href="${project.github_link}" target="_blank">Explore the project on GitHub</a>
//               </div>
//             </div>
//           </div>
//           </div>

//       `;
//       projectsRow.innerHTML += projectHTML;
//     });
//   });
  