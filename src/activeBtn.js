let buttons = document.querySelectorAll("button");
let activeBtn = buttons[0];

// highlight active
export function addActiveBtn (btn) {
    activeBtn.classList.remove("active");
    activeBtn = btn;
    activeBtn.classList.add("active");
}