
let nav_bar = document.querySelector(".nav_bar");
let header = document.querySelector("header");


let nav_hidden = true;

if (window.innerWidth <= "700") {
    nav_bar.style.display = "none";
    header.style.height = "60px";
}   else    {
    nav_bar.style.display = "flex";
}

const menu_btn_cta = () => {

    if (nav_hidden == false) {
        nav_bar.style.display = "none";

        header.style.height = "60px";

        nav_hidden = true;
    }   else    {
        nav_bar.style.display = "flex";

        header.style.height = "360px";

        nav_hidden = false;
    }

}