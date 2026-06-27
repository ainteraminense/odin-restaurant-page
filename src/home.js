import restaurantImage from "./restaurant.jpg";

export function createHome() {
    let main = document.querySelector("#content");
    // create content
    let header = document.createElement("h1");
    header.textContent = "Welcome to All Continents Fare Restaurant";
    let img = document.createElement("img");
    img.setAttribute("src", restaurantImage);
    img.setAttribute("alt", "Empty, clean and neat dishes and glasses in a restaurant");
    img.setAttribute("width", "720");
    img.setAttribute("height", "478");
    let p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla enim adipisci, magni accusamus assumenda doloremque, vel minima aut quaerat, quo voluptate. Dignissimos quasi qui eos labore aspernatur accusamus iure.";

    // highlight active
    let buttons = document.querySelectorAll("button");
    let activeBtn = buttons.forEach((btn) => {
        if (btn.classList.contains("active")) {
            return btn;
        }
    });
    if (activeBtn) activeBtn.classList.remove("active");
    activeBtn = document.querySelector("#home");
    activeBtn.classList.add("active");

    main.innerHTML = "";
    main.appendChild(header);
    main.appendChild(img);
    main.appendChild(p);
}    