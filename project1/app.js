document.addEventListener("DOMContentLoaded", function () {
   
    const projectsData = [
        { title: "Project 1", description: "Description of Project 1." },
        { title: "Project 2", description: "Description of Project 2." },
        
    ];

    
    const projectContainer = document.getElementById("project-container");
    projectsData.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectContainer.appendChild(projectDiv);
    });

    
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted! (This is just an example. Actual form handling needs to be implemented.)");
    });
});
