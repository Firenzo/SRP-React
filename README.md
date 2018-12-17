# SRP-React
Met deze SRP opdracht hoop ik mijn skills in programmeren weer naar een hoger niveau te brengen. Ik heb gemerkt dat veel bedrijven het prettig vinden om React.js te gebruiken in hun projecten. In de vacatures voor Front End developers zie je dit daarom ook vaak terugkomen.

Ik heb wel vaker gehoord over React.js, maar ik heb er nooit echt iets mee gedaan. Daarnaast heb ik ook nog nooit eerder met een framework gewerkt, dus vond ik dat het tijd werd om me hier toch in te gaan verdiepen. Dit wil ik doen door op Lynda.com een cursus te volgen. Bij het volgen van deze cursus hoop ik een beter beeld te krijgen wat React.js precies is en waarom bedrijven het zo prettig vinden.


# Wat is React?
React is een Javascript Library om User Interfaces mee te bouwen. React kun je toepassen in verschillende omgevingen. Hiervoor heb je **ReactDOM**, **ReactDOMServer** en **React Native**.

* **ReactDOM** voor React in de browser
* **ReactDOMServer** voor React op de server
* **React Native** voor het bouwen van Native apps

In deze cursus wordt de focus vooral gelegd op de browser, dus wordt **ReactDOM** gebruikt.

Je kunt ervoor kiezen om React te gebruiken in nieuwe projecten, maar je kunt het ook prima toepassen in bestaande projecten.


## React Installeren
Om React te installeren in een project kun je simpelweg de benodigde script tags in je HTML bestand toevoegen op deze volgorde.

```HTML
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script crossorigin src="https://unpkg.com/create-react-class@15/create-react-class.js"></script>
```
Daaronder voeg je nog een script tag toe met de verwijzing naar het Javascript bestand waar je de code in gaat typen.

```HTML
<script src="app.js"></script>
```

Vervolgens maak je in je HTML een ```div``` met een id aan op de plek waar jij wil dat React wordt toegepast.

```HTML
<div id="react-root"></div>
```

in je ```app.js``` maak je een IIFE (Immediately Invoked Function Expression)

```Javascript
(function() {
  "use strict";
  
  
})();

```

Als eerst begin je met het maken van een element die je wil laten verschijnen op de pagina. Dit doe je met ```React.createElement()```. Deze functie neemt 3 argumenten:

1. Type element
2. Attributen als Object
3. Wat er in het element komt tussen ```<div>``` en ```</div>```

Hieronder een voorbeeld:

```Javascript
var ProductCustomizer = React.createElement('div', {className: "customizer"}, "Product customizer will go here" )
```
**LET OP:** Als je attributen meegeeft moeten deze de naam hebben zoals die in de DOM API staan. ```class``` is bijvoorbeeld iets wat je in html zou typen, maar in de DOM API is dit ```className```.
[https://reactjs.org/docs/dom-elements.html](https://reactjs.org/docs/dom-elements.html)


Onder deze functie voeg je de ```ReactDOM.render()``` functie toe. Deze functie neemt 2 argumenten: 

1. Het element dat gerenderd moet worden.
2. De plek waar het gerenderd moet worden.

```Javascript
var ProductCustomizer = React.createElement(
	'div',
	{className: "customizer"},
	"Product customizer will go here"
)

ReactDOM.render( ProductCustomizer , document.getElementById("react-root"));

```



