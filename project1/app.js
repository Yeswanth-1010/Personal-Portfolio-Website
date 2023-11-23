document.addEventListener("DOMContentLoaded", function () {
    // Sample project data, replace with your own project information
    const projectsData = [
        { title: "Project 1", description: "Description of Project 1." },
        { title: "Project 2", description: "Description of Project 2." },
        // Add more project data as needed
    ];

    // Dynamically populate the projects section
    const projectContainer = document.getElementById("project-container");
    projectsData.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectContainer.appendChild(projectDiv);
    });

    // Handle form submission (you may want to add actual form handling)
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted! (This is just an example. Actual form handling needs to be implemented.)");
    });
});
