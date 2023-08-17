
let nav_hidden = false;

const menu_btn_cta = () => {

    if (nav_hidden == false) {
        let nav_bar = document.querySelector(".nav_bar");

        nav_bar.style.display = "none";

        let header = document.querySelector("header");

        header.style.height = "60px";

        nav_hidden = true;
    }   else    {
        let nav_bar = document.querySelector(".nav_bar");

        nav_bar.style.display = "flex";

        let header = document.querySelector("header");

        header.style.height = "360px";

        nav_hidden = false;
    }

}