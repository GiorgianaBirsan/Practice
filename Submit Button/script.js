const btnLogin = document.querySelector("#btn-login");

var position;
const password = "123";


let formPassword = document.getElementById("password").addEventListener("input", () => {
    if (document.getElementById("password").value !== password) {
        btnLogin.addEventListener("mouseover", function() {
            position ? (position = 0) : (position = 150);
            btnLogin.style.transform = `translate(${position}px,0px)`;
            btnLogin.style.transition = "all .3s ease";
        });

        document.getElementById("password").style.borderColor = "red";
        btnLogin.style.background = "red";
        btnLogin.style.borderColor = "red";
        btnLogin.style.color = "white";


    } else {

        btnLogin.style.transform = `translate(0px,0px)`;
        btnLogin.addEventListener("mouseout", function() {
            position = 0;
            btnLogin.style.transform = `translate(${position}px,0px)`;
        });
        btnLogin.addEventListener("mouseover", function() {
            position = 0;
            btnLogin.style.transform = `translate(${position}px,0px)`;
        });
        document.getElementById("password").style.borderColor = "green";
        btnLogin.style.background = "green";
        btnLogin.style.borderColor = "green";
        btnLogin.style.color = "white";

        btnLogin.addEventListener('click', () => {
            alert("Yes! The password is 123")
        })

    }
});