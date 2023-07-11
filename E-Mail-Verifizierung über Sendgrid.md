# E-Mail-Verifizierung

## Thema 1: Warum benötigen wir eine E-Mail-Verifizierung?

Die E-Mail-Verifizierung ist ein wichtiges Sicherheitsmerkmal, das in vielen Webanwendungen verwendet wird. Sie hilft dabei, sicherzustellen, dass die bei der Registrierung angegebene E-Mail-Adresse gültig ist und dem tatsächlichen Benutzer gehört. Durch die E-Mail-Verifizierung können wir auch sicherstellen, dass nur verifizierte Benutzer auf bestimmte Ressourcen oder Funktionen der Anwendung zugreifen können.

## Thema 2: Registrierung bei SendGrid für eine schnelle E-Mail-Infrastruktur

SendGrid ist ein Dienst, der es Entwicklern ermöglicht, E-Mails zu versenden und zu empfangen. Um die E-Mail-Verifizierung zu implementieren, benötigen wir eine zuverlässige E-Mail-Infrastruktur. In diesem Tutorial werden wir SendGrid verwenden, um E-Mails zu versenden. Du kannst dich auf der SendGrid-Website registrieren, um Zugriff auf die erforderlichen API-Schlüssel zu erhalten.

Als erstes müssen wir das SendGrid-Paket installieren. Öffne das Terminal und führe den folgenden Befehl aus:

```shell
npm install @sendgrid/mail
```

Nach der Installation können wir das SendGrid-Paket in unserer ExpressJS-Anwendung verwenden, um E-Mails zu versenden.

## Thema 3: Implementierung einer tokenbasierten Verifikations-E-Mail mit SendGrid-API

Um eine tokenbasierte Verifikations-E-Mail zu implementieren, müssen wir eine eindeutige Verifikations-Token generieren und an den Benutzer senden. Der Benutzer kann dann den Token verwenden, um seine E-Mail-Adresse zu bestätigen und seine Registrierung abzuschließen.

Hier ist ein Beispielcode, wie du das mit ExpressJS und SendGrid umsetzen kannst:

```javascript
const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
const API_KEY = "DEIN_SENDGRID_API_SCHLÜSSEL";

// SendGrid-Konfiguration
sgMail.setApiKey(API_KEY);

// Route für die Registrierung
app.post("/register", (req, res) => {
    // Benutzer registrieren und Token generieren
    const user = {
        email: req.body.email,
        // ...
    };
    const verificationToken = generateVerificationToken(user);

    // E-Mail mit dem Token senden
    const msg = {
        to: user.email,
        from: "deine-email@dein-unternehmen.com",
        subject: "E-Mail-Verifizierung",
        text: `http://localhost:3000/verify/${verificationToken}`,
        // ...
    };
    sgMail.send(msg);

    res.send(
        "Registrierung erfolgreich. Bitte überprüfe deine E-Mail-Adresse."
    );
});

// Route für die Verifikation
app.get("/verify/:token", (req, res) => {
    const token = req.params.token;
    // Token überprüfen und Benutzer verifizieren
    // ...
    res.send("E-Mail-Verifizierung erfolgreich.");
});

// Server starten
app.listen(3000, () => {
    console.log("Server läuft auf Port 3000.");
});

// Funktion zum Generieren des Verifikations-Tokens
function generateVerificationToken(user) {
    // Token generieren (z. B. mit crypto oder jsonwebtoken)
    // ...
    return verificationToken;
}
```

Im obigen Beispiel generieren wir einen Verifikations-Token und senden ihn per E-Mail an den Benutzer. Der Benutzer kann dann den Token verwenden, um seine E-Mail-Adresse zu verifizieren, indem er die entsprechende Route in unserer ExpressJS-Anwendung aufruft.

Bitte beachte, dass dies ein einfacher Codeausschnitt ist und du ihn entsprechend deinen Anforderungen anpassen musst. Darüber hinaus gibt es viele weitere Sicherheitsaspekte, die du berücksichtigen solltest, wie z. B. das Hashen von Passwörtern, Schutz vor CSRF-Angriffen und XSS-Schutz.
