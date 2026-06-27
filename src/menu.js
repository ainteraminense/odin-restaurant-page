export function createMenu() {
    console.log("Opening Contact");
    let main = document.querySelector("#content");
    // create content
    main.innerHTML = "";
    let text = "Menu page under construction";
    main.textContent = text;
}

function createMenuItem(nameOfDish, picture, description) {
    let img = document.createElement("img");
    img.setAttribute("src", restaurantImage);
    img.setAttribute("alt", "Empty, clean and neat dishes and glasses in a restaurant");
    img.setAttribute("width", "720");
    img.setAttribute("height", "478");
}