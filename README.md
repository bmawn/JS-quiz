# Oggsters megaquiz

Välkommen till Oggsters megaquiz, byggt främst JavaScript och utvalda Bootstrap-komponenter.
Projektet är ett interaktivt quiz där användaren får svara på allmänbildande (läs enkla) frågor, se direkt feedback
och få en sammanställning av sitt resultat.

## Transparens

Quizets struktur och funktionalitet har utvecklats som ett utbildningsprojekt. GitHub Copilot i VS Codeoch Google Gemini har använts som stöd för idéer, formuleringar och förklaringar. Den slutliga implementationen och
anpassningen är gjord utifrån projektets egna krav och kodstruktur.

## Beskrivning

Oggsters megaquiz är ett mindre backendprojekt som visar hur JavaScript kan användas för att skapa
interaktivitet på en webbsida. Projektet riktar sig främst till personer som vill testa sina kunskaper
och samtidigt se ett enkelt exempel på dynamisk innehållshantering i webbläsaren.

---

## Funktioner

- [x] **Personligt välkomstflöde:** Användaren skriver sitt namn innan quizet startar.
- [x] **Validering:** Namnet måste innehålla minst tre tecken.
- [x] **Dynamiska frågor:** Frågor och svarsalternativ renderas med JavaScript.
- [x] **Direkt feedback:** Valda svar markeras som rätt eller fel.
- [x] **Resultatsida:** Resultat och eventuella felaktiga svar visas när quizet är klart.
- [x] **Spela igen:** Quizet kan startas om utan att sidan behöver laddas om.
- [x] **Senaste resultat:** Det senaste resultatet sparas med `localStorage`.
- [x] **Responsiv layout:** Bootstrap används för layout och responsiv design.

---

## Kända brister och framtida förbättringsförslag

- Lägga till fler frågor och olika quizkategorier.
- Slumpa ordningen på frågor och svarsalternativ.
- Spara flera resultat och bygga en enkel topplista.
- Använda CSS-klasser för färgfeedback i stället för inline-styling (tekniskt sett ej fokus i denna uppgift).
- Förbättra tillgängligheten med tydligare fokusmarkeringar och mer semantisk HTML.
- I nuläget hämtas styling från jsDelivr och fungerar därmed inte utan internetanslutning.

---

## Körinstruktioner

Klona repository:

```bash
git clone https://github.com/bmawn/JS-quiz.git
```

Öppna därefter `index.html` i en webbläsare. Projektet kräver inga installationer eller byggsteg.
Bootstrap laddas från jsDelivr, så en internetanslutning behövs för att den visuella layouten ska
visas korrekt.

---

## Teknik

- HTML5
- CSS3
- Bootstrap 5.3
- Vanilla JavaScript
- Web Storage API

## Kodvalidering

Projektet har inte någon automatiserad byggprocess eller testsvit. Quizet kan testas manuellt genom
att öppna `index.html` i en webbläsare och gå igenom hela frågeflödet.

Projektet är skapat som ett utbildningsprojekt i kursen Javascript 1 hos Grit Academy.
