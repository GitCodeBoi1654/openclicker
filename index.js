var cookies = 0;


document.getElementById("cookie").addEventListener("click", function() {
    cookies += 1;
   

    if (cookies == 1 ) {
        document.getElementById("cookies-display").textContent = "You've baked 1 cookie!";
    }
    if (cookies > 1 ) {
        document.getElementById("cookies-display").textContent = "You've baked " + cookies + " cookies!";
    }



});
