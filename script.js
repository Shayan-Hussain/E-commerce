
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

let counter = 1;

const chg_img = () => {

    if (counter == 1)    {
        slideshow.innerHTML = img_1;
        counter++;
    }   else if (counter == 2)   {
        slideshow.innerHTML = img_2;
        counter++;
    }   else if (counter == 3)  {
        slideshow.innerHTML = img_3;
        counter = 1;
    }
}

setInterval(chg_img, 5000);

function search() {
    const input = document.querySelector("input");

    if (input.value == "glasses" || input.value == "Glasses" || 
        input.value == "Shades" || input.value == "shades" || 
        input.value == "tints") {
            let product_1 = document.querySelector("#product_1");

            product_1.style.border = "1px solid red"
    }   else if (input.value == "purfume" || input.value == "Purfume" || 
                input.value == "Fragrance" || input.value == "fragrance" || 
                input.value == "bottle") {
            let product_3 = document.querySelector("#product_3");

            product_3.style.border = "1px solid red"
    }   else if (input.value == "earphone" || input.value == "Earphone" || 
                input.value == "Headphone" || input.value == "headphone" || 
                input.value == "headphones" || input.value == "earphones") {
            let product_2 = document.querySelector("#product_2");
            
            product_2.style.border = "1px solid red"
    }
}

const rem_border = () => {
    let product_1 = document.querySelector("#product_1");
    let product_2 = document.querySelector("#product_2");
    let product_3 = document.querySelector("#product_3");

    if (product_1.style.border == "1px solid red" || 
        product_2.style.border == "1px solid red" ||
        product_3.style.border == "1px solid red" ) {
            product_1.style.border = "";
            product_2.style.border = "";
            product_3.style.border = "";
        }
}

setInterval(rem_border, 10000);