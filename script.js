let userName = localStorage.getItem("username");
let passWord = localStorage.getItem("password");

document.addEventListener("DOMContentLoaded", function () {
    const kundUserName = "Bella";
    const kundPassword = "qwe123";

    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
        localStorage.setItem("loggedIn");
        showLoggedInState();
    } else {
        showLoggedOutState();
    }

    document.getElementById("logga-in").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === kundUserName && password === kundPassword) {
            localStorage.setItem("username", "Bella");
            localStorage.setItem("password", "qwe123");
            showLoggedInState();
        } else {
            alert("Du har misslyckats att logga in!");
        }
    });

    document.getElementById("logga-ut").addEventListener("click", function () {
        showLoggedOutState();
    });

    function showLoggedInState() {
        const loggaIn = document.getElementById("logga-in");
        const välkommen = document.getElementById("välkommen-meddelande");
        const logout = document.getElementById("logga-ut");
        loggaIn.style.display = "none";
        välkommen.textContent = "Välkommen, du är nu inloggad!";
        logout.style.display = "block";
    }

    function showLoggedOutState() {
        const loggaIn = document.getElementById("logga-in");
        const välkommen = document.getElementById("välkommen-meddelande");
        const logout = document.getElementById("logga-ut");
        loggaIn.style.display = "block";
        välkommen.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
        logout.style.display = "none";
    }
});
