// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
var submit_button = document.getElementById("submit-button");
var contact_page = document.getElementById("contact-page");

function modify_page(){
    let new_text = document.createElement("p");
    new_text.textContent = "Thank you for your message!";
    new_text.className = "thankyoumessage";
    contact_page.innerHTML = "";
    contact_page.appendChild(new_text);
}

submit_button.addEventListener("click", modify_page);
