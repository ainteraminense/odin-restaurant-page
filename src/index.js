import "./styles.css"
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";



let buttons = document.querySelectorAll("button");
let activeBtn;
addActiveBtn(buttons[0]);

createHome();

[...buttons].forEach((btn) => { 
    switch (btn.id) {
        case "home":
            btn.addEventListener("click", () => {
                addActiveBtn(btn);
                createHome();
            }); 
            break;
        case "menu":
            btn.addEventListener("click", () => {
                addActiveBtn(btn);
                createMenu();
            }); 
            break;
        case "contact":
            btn.addEventListener("click", () => {
                addActiveBtn(btn);
                createContact();
            }); 
            break;
        default:
            console.log("Something wrong");
    }
});

export function addActiveBtn (btn) {
    if (!activeBtn) {
        activeBtn = buttons[0];
    }
    activeBtn.classList.remove("active");
    activeBtn = btn;
    activeBtn.classList.add("active");
}