const btn = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
  btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      body.classList.toggle("active");
});


fetch('./comp/json/project.json')
.then(response => response.json())
.then(projects => {
    const projectList = document.querySelector('.project-box-list');

    projects.slice(0, 3).forEach(project => {
      const projectContainer = document.createElement('a');

      projectContainer.href = `${project.link}`;
      projectContainer.classList.add('relative','project-list')
      projectContainer.target = '_blank';
      projectContainer.rel = 'nofollow noopener noreferrer';
      projectContainer.innerHTML = `
        <img src="${project.img}" >
        <h3 class="m-8px">${project.name}</h3>
        <p class="mx-8px mb-8px" >${project.description}</p>

        <div class="projectCategories absolute">
          <p>Used:</p>
      
          <ul class="flex-content row gap-8px list wrap">
            ${project.categories
              .map(category => `<li>${category}</li>`)
              .join("")
            }
          </ul>
        </div>
      `;

      projectList.appendChild(projectContainer);
    });

   
})