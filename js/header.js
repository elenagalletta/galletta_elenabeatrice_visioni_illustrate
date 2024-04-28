const nav = document.getElementById('header');
window.onscroll = function () { 
    if (window.scrollY >= 200) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
};