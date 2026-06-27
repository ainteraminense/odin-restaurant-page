import tofuBasil from "./tofu-basil.jpg";
//import { addActiveBtn } from "./activeBtn.js";

export function createMenu() {
    //addActiveBtn(btn)

    let main = document.querySelector("#content");
    // create content
    main.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = "Menu of the Day";
    let h2 = document.createElement("h2");
    h2.textContent = "Thai Basil Tofu";
    let h3 = document.createElement("h3");
    h3.textContent = "Dish Description:";
    let p = document.createElement("p");
    p.textContent = "Stir-fried organic tofu, garlic, ginger, julienne red pepper, thai basil, dark soy sauce, and chili sauce. Side of Tom Yum fried noodles and vegetable stir fry.";
    let img = document.createElement('img');
    img.setAttribute("src", tofuBasil);
    img.setAttribute("alt", "thai basil tofu");
    img.setAttribute("width", "320");
    img.setAttribute("height", "426");
    let div = document.createElement("div");
    div.classList.add("Menu");
    let divLeft = document.createElement("div");
    let divRight = document.createElement("div");
    div.classList.add("menu");
    let imgContainer = document.createElement("div");
    imgContainer.appendChild(img);
    divLeft.appendChild(imgContainer);
    divRight.appendChild(h2);
    divRight.appendChild(h3);
    divRight.appendChild(p);
    main.appendChild(h1);
    div.appendChild(divLeft);
    div.appendChild(divRight);
    main.append(div);
}