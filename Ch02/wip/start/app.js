(function() {
	"use strict";

	// Start here

	function ColorSelector(props){
		
		function colorOptions(){
			return props.colors.map(function(name){
				return (
					<option value={name} key={name}>{name}</option>
				)
			});
		}

		function onColorChange(evt){
			console.log("change event Fired", evt.target.value);
			props.handleColorChange(evt.target.value);
		}

		return (
			<div className="field-group">
				<label htmlFor="color-options">Color:</label>
				<select defaultValue={props.color} name="colorOptions" id="color-options" onChange={onColorChange}>
					{colorOptions()};
				</select>
			</div>
		)

	}


	function SizeSelector(props){

		function sizeOptions(){

			return props.sizes.map(function(num) {
				return (
					<option value={num} key={num}>{num}</option>
				)
			});
		}

		function onSizeChange(evt){
			console.log("change event Fired", evt.target.value);

			props.handleSizeChange(evt.target.value);
		}

		return (
			<div className="field-group">
				<label htmlFor="size-options">Size:</label>
					<select defaultValue={props.size}  name="sizeOptions" id="size-options" onChange={onSizeChange}>
						{sizeOptions()};
					</select>
			</div>
		);
	}

	function ProductImage(props){
		return <img src={`../../../assets/${props.color}.jpg`} alt="product image" /> //ES6 Template Literal: ${x} je hoeft geen strings met plus tekens te gebruiken
	}


	var ProductCustomizer = createReactClass({

		getInitialState: function(){
			return {
				color: "red",
				size: 8,
				sizes: window.Inventory.allSizes,
				colors: window.Inventory.allColors
			}
		},

		handleSizeChange: function(selectedSize){
			console.log("parent handleSizeChange",selectedSize);

			var availableColors = window.Inventory.bySize[selectedSize];
			this.setState({
				colors: availableColors,
				size: selectedSize
			})

			if (availableColors.includes(this.state.color) == false) {
				this.setState({
					color: availableColors[0]
				})
			}


		},

		handleColorChange: function(selectedColor){
			console.log("parent handleColorChange", selectedColor)

			var availableSizes = window.Inventory.byColor[selectedColor];
			this.setState({
				sizes: availableSizes,
				color: selectedColor,
			})

			if (availableSizes.includes(this.state.size) == false ) {
				this.setState({
					size: availableSizes[0]
				})
			}


		},

		render: function(){
			return (
  				<div className ="customizer">
  					<div className="product-image">
  						<ProductImage color={this.state.color}/>
  					</div>
  					<div className ="selectors">
  						<SizeSelector size={this.state.size} sizes={this.state.sizes} handleSizeChange={this.handleSizeChange} />
  						<ColorSelector color={this.state.color} colors={this.state.colors} handleColorChange={this.handleColorChange} />
  					</div>
  				</div>
  			)
		}
	});

	/*function ProductCustomizer(props){
		/*return React.createElement(
			"div",
	  		{ className: "customizer" },
	  		React.createElement("div", { className: "product-image" }, React.createElement(ProductImage))
  		);*/ //3 arguments: 1: type element,  2: props die je meegeeft aan het element,  3:children


  		/*return (
  				<div className ="customizer">
  					<div className="product-image">
  						<ProductImage color="red"/>
  					</div>
  					<div className ="selectors">
  						<SizeSelector size={8}/>
  					</div>
  				</div>
  			)
	}*/

	ReactDOM.render(
 		<ProductCustomizer />, 
		document.getElementById("react-root")
	); //2 arguments: 1: element dat gerenderd moet worden .....  2:plaats waar het gerenderd moet worden.

	


})();
