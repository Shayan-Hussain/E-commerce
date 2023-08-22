
let nav_bar = document.querySelector(".nav_bar");
let header = document.querySelector("header");


let nav_hidden = true;

if (window.innerWidth <= "700") {
    nav_bar.style.display = "none";
    header.style.height = "60px";
}   else    {
    nav_bar.style.display = "flex";
}

const menu_btn = () => {

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

let slideshow = document.querySelector(".slideshow_items");

let img_1 = `<img src="${'/images/img_1.jpg'}" class="slide_img">`
let img_2 = `<img src="${'/images/img_2.jpg'}" class="slide_img">`
let img_3 = `<img src="${'/images/img_3.jpg'}" class="slide_img">`

const toggle_dot = (ind) => {
    if (ind == 1)   {
        slideshow.innerHTML = img_1;
    }   else if (ind == 2)  {
        slideshow.innerHTML = img_2;
    }   else    {
        slideshow.innerHTML = img_3;
    }
}