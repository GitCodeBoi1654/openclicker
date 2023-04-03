var cookies = ParseInt(localStorage.getItem("cookiesBaked"));
 if (cookies == 1 ) {
        document.getElementById("cookies-display").textContent = "You've baked 1 cookie!";
    }
    if (cookies > 1 ) {
        document.getElementById("cookies-display").textContent = "You've baked " + cookies + " cookies!";
    }

document.getElementById("cookie").addEventListener("click", function() {
    cookies += 1;
    localStorage.setItem("cookiesBaked", cookies );

    if (cookies == 1 ) {
        document.getElementById("cookies-display").textContent = "You've baked 1 cookie!";
    }
    if (cookies > 1 ) {
        document.getElementById("cookies-display").textContent = "You've baked " + cookies + " cookies!";
    }



});
