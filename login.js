document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Verhindert, dass die Seite neu lädt
  const password = document.getElementById("password").value;

  try {
    // Lade die Passwörter aus der JSON-Datei
    const response = await fetch("passwort.json");
    const redirects = await response.json();

    // Prüfe, ob das Passwort existiert
    if (redirects[password]) {
      window.location.href = redirects[password]; // Weiterleitung
    } else {
      alert("Ungültiges Passwort. Bitte versuche es erneut.");
    }
  } catch (error) {
    console.error("Fehler beim Laden der Passwortdaten:", error);
    alert("Ein Fehler ist aufgetreten. Bitte versuche es später erneut.");
  }
});
