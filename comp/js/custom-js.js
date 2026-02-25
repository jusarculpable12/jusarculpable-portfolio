const btn = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
  btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      body.classList.toggle("active");
});


<<<<<<< HEAD
fetch('./comp/json/project.json')
=======
fetch('/comp/json/project.json')
>>>>>>> b5d05581f8ff1f6b5ee684304b5cdd5e6356ce1c
.then(response => response.json())
.then(projects => {
    const projectList = document.querySelector('.project-box-list');

    projects.slice(0, 3).forEach(project => {
      const projectContainer = document.createElement('a');

      projectContainer.href = `${project.link}`;
      projectContainer.target = '_blank';
      projectContainer.rel = 'nofollow noopener noreferrer';
      projectContainer.innerHTML = `
        <img src="${project.img}" >
        <h3 class="my-8px">${project.name}</h3>
        <p>${project.description}</p>
      `;

      projectList.appendChild(projectContainer);
    });

   
})