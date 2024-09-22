// On-scroll animation functionality
document.addEventListener("scroll", function() {
    const statements = document.querySelectorAll(".statement");
    const triggerPoint = window.innerHeight / 1.2;

    statements.forEach(statement => {
        const top = statement.getBoundingClientRect().top;

        if (top < triggerPoint) {
            statement.classList.add("show");
        }
    });
});
