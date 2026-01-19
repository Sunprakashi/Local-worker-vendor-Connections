document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    // Handle sidebar toggle
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Prevent default link behavior and call navigate function
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Get the page name from the href attribute
            const page = this.getAttribute("href").replace(".html", "");

            // Call navigate function with the page
            navigate(page);
        });
    });
});

// Function to handle navigation based on link
function navigate(page) {
    switch (page) {
        case "postjob":
            window.location.href = "postjob.html";
            break;
            
            case "myjob": // ✅ This must match "myjob.html"
            window.location.href = "myjob.html";
            break;
        

        case "applications":
            window.location.href = "applications.html";
            break;

        case "helper":
            window.location.href = "helper.html";
            break;

        case "viewhelper":  // Corrected from 'Application'
            window.location.href = "viewhelper.html";
            break;

        case "womenjob":
            window.location.href = "womenjob.html";
            break;

        default:
            window.location.href = "postjob.html";
            break;
    }
}
