const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', toggle.checked ? 'dark' : 'light');
});

function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Set dark mode as default
document.documentElement.setAttribute('data-theme', 'dark');
document.getElementById('darkModeToggle').checked = true;