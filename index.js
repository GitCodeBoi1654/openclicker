var cookies = +localStorage.getItem('count') || 0;

document.getElementById('cookies-display').textContent =
  "You've brewed " + cookies + ' coffees!';

document.getElementById('cookie').addEventListener('click', function () {
  cookies += 1;

  localStorage.setItem('count', cookies);

  document.getElementById('cookies-display').textContent =
    "You've brewed " + cookies + ' coffees!';
});
