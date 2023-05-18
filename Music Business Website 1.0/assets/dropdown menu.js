const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');

dropdownToggle.forEach((toggle, i) => {
    toggle.addEventListener('dblclick', (e) => {
        e.preventDefault();
        dropdownMenu[i].classList.toggle('show');
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        dropdownMenu.forEach((menu) => {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        });
    }
}
