var access = document.createElement(script);
access.src = "https://accaii.com/gakkologin/script.js";
function authUsers(token) {
    if (token == "dashboard") {
        if (localStorage.getItem("id1")) {
        } else {
            location.href = "https://htvoffcial.github.io/2ntwrka-k/login";
        }
    }else{
        if (localStorage.getItem("id1")) {
        } else {
            location.href = "https://htvoffcial.github.io/2ntwrka-k/signin?token="+token;
        }
    }
}