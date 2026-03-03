const btn = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
  if(btn){
    btn.addEventListener("click", () => {
    
      let themeToggleChecker = sessionStorage.getItem("darktheme");

      if(themeToggleChecker == "active"){
        sessionStorage.removeItem("darktheme", "active");
        body.classList.remove('darkmode');
        btn.classList.remove('active');
        console.log('false');
      }else{
        sessionStorage.setItem("darktheme", "active");
        body.classList.add('darkmode');
        btn.classList.add('active');
        console.log('true');
      }
    });
  }
  let savedthemeToggle = sessionStorage.getItem("darktheme");
    if(savedthemeToggle == "active"){
      sessionStorage.setItem("darktheme", "active");
      body.classList.add('darkmode');
      if(btn){
        btn.classList.add('active');
      }
     
      console.log('true');
    }




if(document.querySelector('.homepageMain')){

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
}


if(document.querySelector('.projectMain')){
  fetch('./comp/json/project.json')
  .then(response => response.json())
  .then(projects => { 

    const projectList = document.querySelector('.project-box-list');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    let itemsPerLoad = 6;
    let currentIndex = 0;

    function loadProjects() {

        const nextProjects = projects.slice(currentIndex, currentIndex + itemsPerLoad);

        nextProjects.forEach(project => {
            const projectContainer = document.createElement('a');

            projectContainer.href = project.link;
            projectContainer.classList.add('relative','project-list');
            projectContainer.target = '_blank';
            projectContainer.rel = 'nofollow noopener noreferrer';

            projectContainer.innerHTML = `
                <img src="${project.img}">
                <h3 class="m-8px">${project.name}</h3>
                <p class="mx-8px mb-8px">${project.description}</p>

                <div class="projectCategories absolute">
                    <p>Used:</p>
                    <ul class="flex-content row gap-8px list wrap">
                        ${project.categories
                            .map(category => `<li>${category}</li>`)
                            .join("")}
                    </ul>
                </div>
            `;

            projectList.appendChild(projectContainer);
        });

        currentIndex += itemsPerLoad;

       
        if (currentIndex >= projects.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

   
    loadProjects();

    loadMoreBtn.addEventListener('click', loadProjects);

});
}