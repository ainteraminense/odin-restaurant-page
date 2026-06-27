import "./styles.css"
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

createHome();

let buttons = document.querySelectorAll("button");
//[...buttons].forEach((btn) => btn.addEventListener("click", (e) => {
    // switch (e.target.id) {
    //     case "home":
    //         return createHome;
    //         break;
    //     case "menu":
    //         return createMenu;
    //         break;
    //     case "contact":
    //         return createContact;
    //         break;
    //     default:
    //         console.log("Something went wrong");
    // }
//}))
[...buttons].forEach((btn) => { 
    switch (btn.id) {
        case "home":
            btn.addEventListener("click", createHome);
            break;
        case "menu":
            btn.addEventListener("click", createMenu);
            break;
        case "contact":
            btn.addEventListener("click", createContact);
            break;
        default:
            console.log("Something wrong");
    }
});