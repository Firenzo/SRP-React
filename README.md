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


# React Installeren
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

in je ```app.js``` maak je een IIFE (Immediately Invoked Function Expression) Waarin alle code komt.

```Javascript
(function() {
  "use strict";
  
  
})();

```
# Element aanmaken
Als eerst begin je met het maken van een element die je wil laten verschijnen op de pagina. Dit doe je met ```React.createElement()```. Deze functie neemt **3 argumenten:**

1. Type element
2. Attributen als Object
3. Wat er in het element komt tussen ```<div>``` en ```</div>```

Hieronder een voorbeeld:

```Javascript
var ProductCustomizer = React.createElement('div', {className: "customizer"}, "Product customizer will go here" )
```
_**LET OP:** Als je attributen meegeeft moeten deze de naam hebben zoals die in de DOM API staan. ```class``` is bijvoorbeeld iets wat je in html zou typen, maar in de DOM API is dit_ ```className```.
[https://reactjs.org/docs/dom-elements.html](https://reactjs.org/docs/dom-elements.html)


Onder deze functie voeg je de ```ReactDOM.render()``` functie toe. Deze functie neemt **2 argumenten:** 

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

# Componenten
Componenten zijn de bouwstenen van een User Interface. De componenten bevatten elementen. Dit zijn de elementen die je in HTML gebruikt.

## Het bepalen van componenten:

Bij het opstellen van een webpagina met behulp van componenten is het belangrijk dat je eerst goed kijkt welke componenten er gebruikt moeten worden. Daarnaast moet je ook bepalen welke data er gebruikt wordt en in welk component deze data moet worden opgeslagen. Dit is belangrijk, omdat **data in React alleen maar doorgegeven kan worden van parent naar child** en niet andersom.

Hieronder een voorbeeld van een webpagina. Op het moment dat de gebruiker een andere kleur kiest, zal de afbeelding van de schoen veranderen, maar ook zullen alleen de beschikbare maten worden aangegeven in het dropdown menu voor de schoenmaat. 

![shoe store](documentatie-assets/shoestore.png "shoe store")

Dit gedeelte van de webpagina zal onderverdeeld moeten worden in 3 componenten:

1. De afbeelding
2. De filters
3. Een parent

![components](documentatie-assets/components.jpg "components")

De data van de filter opties wordt dan opgeslagen in de parent genaamd ```<ProductCustomizer>``` en deze geeft de data dan door naar de children.



Op het moment dat de gebruiker een andere kleur kiest moet ```<ProductImage>``` hiervan op de hoogte zijn, zodat de kleur van de schoen veranderd kan worden. Ook moet ```<ProductFilters>``` hiervan op de hoogte zijn, zodat de juiste schoenmaten weergegeven kunnen worden.




## Component aanmaken:
Een component aanmaken doe je met behulp van **een functie of een class**. Functies zijn makkelijker om te maken, maar classes ondersteunen alle functies van React.

### Component als functie:
**Een component functie heeft altijd een parameter genaamd ```props```.** Daarnaast moet de naam van een component functie altijd met een **hoofdletter** beginnen. Zo weet React het verschil tussen componenten en elementen. Ook weet de browser extensie "React Developer Tools" het verschil tussen elementen en componenten. Dit is prettiger voor debugging.

```Javascript
function MyComponent(props){
	//code goes here...
}
```

Deze functie geeft een element terug. Dit doe je weer met ```return React.createElement(..., ..., ...)```

voorbeeld:

```Javascript
function MyComponent(props){
	return React.createElement(
		'div',
		{className: "customizer"},
		"Product customizer will go here"
	)
}
```

### Component als class:
Je kunt componenten ook als ES6 class schrijven. Dit doe je op deze manier:

```Javascript
class MyComponent extends React.Component {

	render(){
		return React.createElement(
			'div',
			{className: "customizer"},
			"Product customizer will go here"
		)
	}
}
```




# JSX, ES6 & Babel
Om nog een element aan te maken in een element, zul je in je ```React.createElement()``` functie deze zelfde functie nog een keer moeten aanroepen. Dat is nogal veel werk en het kan snel onoverzichtelijk worden. Gelukkig is er JSX! Dit is een extensie van Javascript die het mogelijk maakt om HTML code te gebruiken in Javascript. Hierdoor hoef je ```React.createElement()``` niet steeds opnieuw aan te roepen. JSX wordt alleen niet ondersteund door browsers, dus zal deze code omgeschreven moeten worden naar iets dat de browser wel begrijpt. Dit doet Babel voor je. Babel is een transpiler die ervoor zorgt dat de code weer wordt omgeschreven in iets wat de browser begrijpt. JSX wordt dus weer gewoon Javascript. Babel werkt ook voor ES6.

ES6 verwijst naar een nieuwere versie van Javascript. Deze versie heeft een uitgebreidere syntax en zorgt dus voor meer mogelijkheden. Zo kun je bijvoorbeeld nu gemakkelijk classes aanmaken, wat handig is, omdat React hier ook gebruik van maakt.

Om Babel te gebruiken, kun je een programma zoals Prepros of Codekit gebruiken. In dit programma kun je dan aangeven welke transpiler je wil gebruiken voor een bepaald Javascript bestand. De code wordt dan omgeschreven zodra er een wijziging is gemaakt in het bestand. De omgeschreven code komt dan in een ander bestand. in dit geval komt de code in ```app-min.js```. Het is daarom ook belangrijk dat je naar dit bestand verwijst in je HTML.

```
<script src="app-min.js"></script>
```

![codekit](documentatie-assets/codekit-babel.jpg "codekit")


Als je gebruik maakt van Babel hoef je geen ```React.createElement``` meer te gebruiken. Je kunt nu simpelweg een functie schrijven die HTML code teruggeeft. Deze HTML code moet wel tussen ```()``` haakjes staan. Daarnaast kun je maar 1 element teruggeven. Er mogen wel meerdere elementen binnen dit element zitten.


voorbeeld:

```Javascript
function MyComponent(props){
	return (
		<div className="peopleList">
			<ul>
				<li>Tony Hawk</li>
				<li>Michael Jackson</li>
				<li>Will Smith</li>
			</ul>
		</div>
	)
}
```


