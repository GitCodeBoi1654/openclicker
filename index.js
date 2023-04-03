var cookies = localStorage.getItem("cookiesBaked");

if (cookies === null) {
  cookies = 0;
} else {
  cookies = parseInt(cookies);
}

document.getElementById("cookies-display").textContent = "You've baked " + cookies + " cookies!";

document.getElementById("cookie").addEventListener("click", function() {
  cookies++;
  localStorage.setItem("cookiesBaked", cookies.toString());

  if (cookies === 1) {
    document.getElementById("cookies-display").textContent = "You've baked 1 cookie!";
  } else {
    document.getElementById("cookies-display").textContent = "You've baked " + cookies + " cookies!";
  }
});
