function login() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "ADMIN" && password === "password") {
        window.location.href = "dash.html";
    } else {
        alert("Invalid username or password");
    }
}