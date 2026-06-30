export function createContact() {


    let main = document.querySelector("#content");
    // create content
    main.innerHTML = "";
    let form = document.createElement("form");
    let h1 = document.createElement("h1");
    h1.textContent = "Contact Us:";
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:"
    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    let emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    let messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "message");
    let messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message:"
    let nameDiv = document.createElement("div");
    let emailDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    let submitButton = document.createElement("button");
    submitButton.classList.add("submit");
    submitButton.textContent = "Submit";
    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.textContent = "Cancel";
    let buttonsDiv = document.createElement("div");
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput); 
    messageDiv.appendChild(messageInput);
    form.appendChild(nameDiv); 
    form.appendChild(emailDiv); 
    form.appendChild(messageLabel);
    form.appendChild(messageDiv); 
    buttonsDiv.appendChild(cancelButton);
    buttonsDiv.appendChild(submitButton);
    form.appendChild(buttonsDiv);
    main.appendChild(h1);
    main.appendChild(form);
}