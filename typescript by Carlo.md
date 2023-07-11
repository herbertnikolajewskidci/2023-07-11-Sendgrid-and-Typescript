# Typescript

-   "Die Zukunft von JavaScript ist TypeScript"
-   Wir lernen die Grundlagen, tauche in deiner Freizeit gerne tiefer ein!
-   TS wird immer wichtiger, auch in Einstiegspositionen, weshalb wir diesen Workshop haben
-   Auf Platz 2 der beliebtesten Programmiersprachen im `Stack Overflow 2020 Developer survey` gewählt
-   TS wurde von 78% der Befragten des `2020 State of JS` verwendet, 93% sagten, sie würden es wieder verwenden
-   TS hat eine coole Website mit einigen **🎊Dokumentationen🎊** https://www.typescriptlang.org/docs/

## Was ist TypeScript (TS)

-   TS ist eine Programmiersprache
-   TS wird hauptsächlich von Microsoft entwickelt und gewartet

    -   Genau wie GitHub
    -   Genau wie VSCode

-   Die TS-Dateierweiterung ist `.ts` (oder bei React können wir .tsx verwenden)
-   TypeScript ist ein Superset von JavaScript

    -   TS fügt JavaScript zusätzliche Syntax hinzu
    -   TS = JavaScript + anderes Zeug (hauptsächlich Typen)
    -   Das bedeutet, dass du normales JavaScript in einer `.ts`-Datei schreiben kannst und es funktioniert
    -   Dein bestehender funktionierender JavaScript-Code ist also auch TypeScript-Code!
    -   ABER ich empfehle, es mit einem neuen Projekt zu lernen, anstatt ein altes umzuwandeln

-   TS-Code wird zu JavaScript kompiliert, indem im Grunde genommen all das "andere Zeug" gelöscht wird!
-   Im Allgemeinen bedeutet das Schreiben von TS, dass man deutlich mehr Code als JS schreibt
    -   Aber viele, viele Fehler werden aufgrund der Typsicherheit sehr schnell erkannt

-> Variablen in JavaScript sind nicht direkt mit einem bestimmten Werttyp verknüpft
-> jede Variable kann Werten aller Typen zugewiesen (und neu zugewiesen) werden
-> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

-   Statische Typisierung = du deklarierst eine Variable einschließlich ihres Typs und der Typ kann nicht geändert werden

```c#
// In statisch typisierten Sprachen werden Variablentypen bei der Deklaration festgelegt
String foo = "Kartoffeln sind lecker"
foo = 42 // Das würde einen Fehler auslösen! Wenn du eine Zeichenkette deklarierst, bleibt sie eine Zeichenkette
```

-   Dynamische Typisierung kann schön sein, aber zu Problemen führen:

```js
function prettyPrint(x) {
    return x.toFixed(2);
}

console.log(prettyPrint("3.14159"));
// Oben ist das ein *Laufzeit*-Fehler; er kommt erst, wenn wir den Code ausführen
// In TS und ähnlichen Sprachen gibt dies einen *Kompilierzeit*-Fehler
// Normalerweise warnt dich dein Code-Editor sofort vor dem Problem!
```

## Live-Coding

-   In TS hat also jede Variable einen Typ und dieser Typ kann nicht geändert werden
-   Oft setzt du explizit einen Typ, wenn du eine Variable deklarierst
-   Du hast schon viele Male TypeScript-Code gesehen! Ich habe heimlich kleine Teile hier und da gezeigt
    -   Wenn du in VSCode über Funktionen schwebst, siehst du die Typen in einer seltsamen Syntax - das ist TS!

### Setup!

-   TypeScript muss kompiliert werden
-   Wir brauchen also einen Compiler; `tsc`
-   Du kannst es entweder lokal in deinem Projekt oder global installieren

### BASIC DEMO

```sh
$ mkdir typescript-test
$ cd typescript-test
$ npm init -y
$ npm i typescript

# SETUP:
# "scripts": {
#   "start": "tsc -w",
#   "init": "tsc --init"
# }

$ npm run init

# in tsconfig.json ändern:
#     "rootDir": "./src"
#     ...
#     "outDir": "./dist"

$ mkdir src
$ mkdir dist
$ touch src/index.ts

# Zwei nebeneinander liegende Terminals in vscode;
$ npm start
$ nodemon dist/index.js
```

```ts
// LIVE-CODING-NOTIZEN
// --------------------------------------------------------------------
// --- TS-Grundlagen & Fehlererkennung --------------------------------

// Explizit getypte Variable
let alter: number = 42;
// alter = "Hallo" FEHLER: TS zeigt einen Fehler während der Kompilierung
// console.log(alter)

// Impliziter / abgeleiteter Typ; "text" ist ein String!
let text = "Hallo Welt";
// text = 52 FEHLER: TS zeigt einen Fehler während der Kompilierung
// console.log(text)

let meinName: string = "Joel";
meinName.toLowerCase(); // Das funktioniert
// meinName.toFixed(2) FEHLER: TS zeigt einen Fehler während der Kompilierung
// console.log(meinName)

// TS kann auch bei der Fehlererkennung helfen!
const münzwurf = Math.random() > 0.5;
// const münzwurf = Math.random > 0.5 FEHLER: TS zeigt einen Fehler während der Kompilierung
console.log(münzwurf);

// Manchmal sogar bei Logikfehlern
const bierKaufenKönnen = Math.random() * 20 < 18 ? "nein" : "ja";
/*
if (bierKaufenKönnen !== "ja") {
    console.log("NEIN")
} else if (bierKaufenKönnen === "nein") { // FEHLER: TS zeigt einen Fehler während der Kompilierung
    console.log("JA") // DIES IST UNERREICHBARER CODE
}
*/

// ------------------------------------------------------------------
// --- Coole Typen --------------------------------------------------

// Normaler expliziter Typ in TS
let foo: number = 42;

// "Union"
let benutzerId: string | number = 12345;
benutzerId = "u1773154315351";

// "Enum"
enum Rollen {
    ADMIN = "cn=exampleuser,example.com,ou=admin",
    MANAGER = "cn=exampleuser,example.com,ou=manager",
    EDITOR = "cn=exampleuser,example.com,ou=editor",
    USER = "cn=exampleuser,example.com,ou=user",
}
// const meineRolle: Rollen = Rollen.ADMIN
// console.log(meineRolle)

// --------------------------------------------------------------------
// --- Objekttypen ----------------------------------------------------

// Abgeleiteter Typ für eine Objektvariable
const benutzer = {
    id: 0,
    name: "Leoj Nenotlep",
};

// Fest codierter (anonymer) Typ auf einem Objekt
const appBenutzer: { id: number; name: string } = {
    id: 1,
    name: "Leonard Nimoy",
};

// Benutzerdefinierter Typ auf einem Objekt
type Haustier = {
    id?: number;
    name: string;
};
const rauli: Haustier = { name: "Rauli" };
console.log(rauli.name);

// --------------------------------------------------------------------
// --- Funktionen und Typen -------------------------------------------

// Typen gelten auch für Funktionsparameter und Rückgabewerte!
// Diese Funktion nimmt eine Zahl und einen String entgegen und gibt ein Haustier zurück
function getHaustier(id: number, name?: string): Haustier {
    return rauli;
}
const irgendeinHaustier = getHaustier(123);

// Diese Funktion nimmt einen String entgegen und gibt nichts zurück (void)
function log(nachricht: string): void {
    console.log(nachricht);
}
log("Hallo alle");

// --------------------------------------------------------------------
// --- Klassentypen ---------------------------------------------------

interface Benutzer {
    id: number;
    name: string;
}

class Benutzerkonto {
    id: number;
    name: string;
    constructor(id: number | string, name: string) {
        this.id = Number(id);
        this.name = name;
    }
}

const joel: Benutzer = new Benutzerkonto("1337", "Leoj");
console.log(joel);

// Schnittstellen können mit Klassen noch viel tiefer gehen, aber das reicht für jetzt
// Hinweis: Es gibt _Unterschiede_ zwischen `type` und `interface`, aber das ist für das Selbststudium ;)
```

### REACT DEMO

-   `npx create-react-app ts-test-react --template typescript`

```tsx
// Header.tsx
interface Props {
    title: string | number;
    color?: string;
}
function Header(props: Props) {
    return (
        <header style={{ color: props.color || "red" }}>{props.title}</header>
    );
}
export default Header;

// App.tsx
import Header from "./Header"; // Hinweis: Verwende hier nicht .tsx oder .js oder .jsx!

function App() {
    return (
        <div className="App">
            <Header title="Meine Webseite" />
            <Header title="Boo" color="blue" />
            {/*
        TS kann Tippfehler und Fehler bei den Prop-Namen erkennen!
        <Header titel="Boo" colour="blue" />

        TS erkennt fehlende Props
        <Header color="#c0ff33" />
      */}
        </div>
    );
}
```

## Wiederholung & Vertiefung mit diesen Tutorials

    -   https://www.youtube.com/watch?v=BCg4U1FzODs
    -   https://learn.microsoft.com/de-de/training/paths/build-javascript-applications-typescript/
    -   https://www.youtube.com/watch?v=d56mG7DezGs
