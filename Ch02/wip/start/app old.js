(function() {
	"use strict";

	// Start here

	function ProductImage(props){
		return React.createElement("img", {
			src:"../../../assets/red.jpg",
			alt:"product image"
		});
	}


	function ProductCustomizer(props){
		return React.createElement(
			"div",
	  		{ className: "customizer" },
	  		React.createElement("div", { className: "product-image" }, React.createElement(ProductImage))
  		); //3 arguments: 1: type element,  2: props die je meegeeft aan het element,  3:children
	}

	ReactDOM.render(
 		React.createElement(ProductCustomizer), 
		document.getElementById("react-root")
	); //2 arguments: 1: element dat gerenderd moet worden .....  2:plaats waar het gerenderd moet worden.

	


})();
