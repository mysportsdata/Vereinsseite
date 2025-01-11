document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Verhindert, dass die Seite neu lädt
  const password = document.getElementById("password").value;

  // Passwörter und zugehörige Seiten
  const redirects = {
    "passwort1": "seite1.html",
    "passwort2": "seite2.html",
  };

  if (redirects[password]) {
    window.location.href = redirects[password]; // Weiterleitung
  } else {
    alert("Ungültiges Passwort. Bitte versuche es erneut.");
  }
});
