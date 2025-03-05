let button = document.getElementById("submit");
function saySuccess() {
    alert("Registration Successful!");
}
button.addEventListener('click', saySuccess);


let hTags = document.getElementsByTagName("h5");
console.log(hTags);

hTags[0].textContent = "© 2025 Lcid Lumenario. All rights reserved."
hTags[0].style.color = "orange";
