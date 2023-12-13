function jumpToSection(sectionId) {
    let element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // No need to add 'sliding-section' here as it's handled by the observer
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const slidingElements = document.querySelectorAll('.hidden');
slidingElements.forEach((e1) => observer.observe(e1));
