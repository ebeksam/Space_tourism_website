const nav = document.querySelector("#navigation");
const navToggle = document.querySelector("#mobile-nav-toggle");
const navbarLinks = document.querySelectorAll('.navbar a');


navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible")

    if(visibility === "false"){
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    }else {
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})



navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});