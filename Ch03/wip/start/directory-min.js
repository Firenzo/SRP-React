"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

(function () {
  "use strict";

  function Person(props) {
    return React.createElement("div", {
      className: "person"
    }, React.createElement("h3", null, " ", props.person.name, ", ", props.person.title), React.createElement("p", null, React.createElement("img", {
      className: " size-medium alignright",
      src: props.person.img,
      alt: props.person.name,
      width: "300",
      height: "300",
      sizes: "(max-width: 300px) 100vw, 300px"
    }), props.person.bio));
  }

  function People(props) {
    return React.createElement("div", {
      className: "results"
    }, React.createElement(ReactTransitionGroup.TransitionGroup, null, props.people.map(function (person) {
      return React.createElement(ReactTransitionGroup.CSSTransition, {
        key: person.id,
        classNames: {
          enter: "animated",
          enterActive: "zoomIn",
          exit: "animated",
          exitActive: "zoomOut"
        },
        timeout: 1000
      }, React.createElement(Person, {
        person: person
      }));
    })));
  }

  function Filters(props) {
    var titles = window.LMDirectory.titles;

    function updateName(evt) {
      props.updateFormState("currentName", evt.target.value);
    }

    function updateTitle(evt) {
      props.updateFormState("currentTitle", evt.target.value);
    }

    function updateIntern(evt) {
      props.updateFormState("isIntern", evt.target.checked);
    }

    return React.createElement("form", {
      action: "",
      id: "directory-filters"
    }, React.createElement("div", {
      className: "group"
    }, React.createElement("label", {
      htmlFor: "person-name"
    }, "Name:"), React.createElement("input", {
      type: "text",
      name: "person_name",
      placeholder: "Name of employee",
      id: "txt-name",
      value: props.currentName,
      onChange: updateName
    })), React.createElement("div", {
      className: "group"
    }, React.createElement("label", {
      htmlFor: "person-title"
    }, "Job Title:"), React.createElement("select", {
      name: "person_title",
      id: "sel-title",
      value: props.currentTitle,
      onChange: updateTitle
    }, React.createElement("option", {
      value: ""
    }, "- Select -"), React.createElement("option", {
      value: "architect"
    }, "Architect"), React.createElement("option", {
      value: "designer"
    }, "Designer"), React.createElement("option", {
      value: "contractor"
    }, "Contractor"), React.createElement("option", {
      value: "staff"
    }, "Support Staff"), titles.map(function (title) {
      return React.createElement("option", {
        value: title.key,
        key: title.key
      }, title.display);
    }))), React.createElement("div", {
      className: "group"
    }, React.createElement("label", null, React.createElement("input", {
      type: "checkbox",
      value: "1",
      name: "person_intern",
      checked: props.isIntern,
      onChange: updateIntern
    }), " Intern")), React.createElement("div", {
      className: "resetButton"
    }, React.createElement("a", {
      className: "button",
      onClick: props.resetFilter
    }, "Reset")));
  }

  var Directory =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Directory, _React$Component);

    //ES6 Class
    function Directory(props) {
      var _this;

      _classCallCheck(this, Directory);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Directory).call(this, props));
      _this.state = {
        people: window.LMDirectory.people,
        currentName: "",
        currentTitle: "",
        isIntern: false
      };
      _this.updateFormState = _this.updateFormState.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.resetFilter = _this.resetFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Directory, [{
      key: "resetFilter",
      value: function resetFilter() {
        this.setState({
          people: window.LMDirectory.people,
          currentName: "",
          currentTitle: "",
          isIntern: false
        });
      }
    }, {
      key: "updateFormState",
      value: function updateFormState(name, val) {
        this.setState(_defineProperty({}, name, val), this.updatePeopleList); //2e parameter is een callback functie die wordt uitgevoerd als setState klaar is
      } // search the whole employee list with current filters

    }, {
      key: "updatePeopleList",
      value: function updatePeopleList() {
        var filteredPeople = window.LMDirectory.people.filter(function (person) {
          return person.intern === this.state.isIntern && (this.state.currentName === "" || person.name.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !== -1) && (this.state.currentTitle === "" || person.title_cat === this.state.currentTitle);
        }.bind(this));
        this.setState({
          people: filteredPeople
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement("div", {
          className: "company-directory"
        }, React.createElement("h2", null, "Company Directory"), React.createElement("p", null, "Learn more about each person at Leaf & Mortar in this company directory."), React.createElement(Filters, {
          currentName: this.state.currentName,
          currentTitle: this.state.currentTitle,
          isIntern: this.state.isIntern,
          updateFormState: this.updateFormState,
          resetFilter: this.resetFilter
        }), React.createElement(People, {
          people: this.state.people
        }));
      }
    }]);

    return Directory;
  }(React.Component);

  ReactDOM.render(React.createElement(Directory, null), document.getElementById('directory-root'));
})();

//# sourceMappingURL=directory-min.js.map
