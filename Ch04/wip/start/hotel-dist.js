"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var PostForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostForm, _React$Component);

  function PostForm(props) {
    var _this;

    _classCallCheck(this, PostForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostForm).call(this, props)); // Type options are an object; convert to an array and map

    _this.typeOptions = Object.keys(props.messageTypes).map(function (key) {
      if (props.messageTypes.hasOwnProperty(key)) {
        return React.createElement("option", {
          key: key,
          value: key
        }, props.messageTypes[key]);
      }
    }); // so we don't have to type this over and over

    _this.defaultType = _this.typeOptions[0].key;
    _this.state = {
      messageText: "",
      messageType: _this.defaultType
    };
    _this.handleTextChange = _this.handleTextChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTypeChange = _this.handleTypeChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.postStatusUpdate = _this.postStatusUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PostForm, [{
    key: "handleTextChange",
    value: function handleTextChange(evt) {
      this.setState({
        messageText: evt.target.value
      });
    }
  }, {
    key: "handleTypeChange",
    value: function handleTypeChange(evt) {
      this.setState({
        messageType: evt.target.value
      });
    }
  }, {
    key: "postStatusUpdate",
    value: function postStatusUpdate(evt) {
      evt.preventDefault();
      var newStatus = {
        msg: this.state.messageText,
        type: this.state.messageType,
        time: date.format(new Date(), "YYYY-MM-DD, HH:mm")
      };
      axios.post(this.props.apiUrl + "/post.php", newStatus).then(function (response) {
        if (response.data.success) {
          this.setState({
            messageText: "",
            messageType: this.defaultType
          });
        }

        newStatus.id = response.data.id;
        this.props.addStatusMessage(newStatus);
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        onSubmit: this.postStatusUpdate
      }, React.createElement("h3", null, "Post an Update"), React.createElement("div", {
        className: "field-group"
      }, React.createElement("label", {
        htmlFor: "txt-message"
      }, "Message"), React.createElement("textarea", {
        id: "txt-message",
        rows: "2",
        value: this.state.messageText,
        onChange: this.handleTextChange
      })), React.createElement("div", {
        className: "field-group"
      }, React.createElement("label", {
        htmlFor: "txt-type"
      }, "Type"), React.createElement("select", {
        id: "txt-type",
        value: this.state.messageType,
        onChange: this.handleTypeChange
      }, this.typeOptions)), React.createElement("div", {
        className: "field-group action"
      }, React.createElement("input", {
        type: "submit",
        value: "Post Update"
      })));
    }
  }]);

  return PostForm;
}(React.Component);

function StatusMessage(props) {
  var statusDate = date.parse(props.time, "YYYY-MM-DD, HH:mm"),
      dateFormat = "M/D/Y, h:mm A";
  return React.createElement("div", {
    className: "status-message"
  }, props.msg, React.createElement("span", {
    className: "name"
  }, "\u2014\xA0", props.type), React.createElement("span", {
    className: "time"
  }, date.format(statusDate, dateFormat)));
}

var StatusMessageList =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(StatusMessageList, _React$Component2);

  function StatusMessageList(props) {
    _classCallCheck(this, StatusMessageList);

    return _possibleConstructorReturn(this, _getPrototypeOf(StatusMessageList).call(this, props));
  }

  _createClass(StatusMessageList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.retrieveStatusMessages();
    }
  }, {
    key: "retrieveStatusMessages",
    value: function retrieveStatusMessages() {
      axios.get("".concat(this.props.apiUrl, "get.php?delay=5")).then(function (response) {
        this.setState({
          statuses: response.data,
          isLoaded: true
        });
      }.bind(this));
    }
  }, {
    key: "displayStatusMessages",
    value: function displayStatusMessages() {
      return this.props.statuses.map(function (status) {
        return React.createElement("li", {
          key: status.id
        }, React.createElement(StatusMessage, {
          msg: status.msg,
          type: this.props.messageTypes[status.type],
          time: status.time
        }));
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isLoaded) {
        return React.createElement("ul", {
          id: "status-list"
        }, this.displayStatusMessages());
      } else {
        return React.createElement("div", {
          id: "status-list",
          className: "loading"
        }, "Loading...", React.createElement("div", {
          className: "spinner"
        }, React.createElement("div", {
          className: "bounce1"
        }), React.createElement("div", {
          className: "bounce2"
        }), React.createElement("div", {
          className: "bounce3"
        })));
      }
    }
  }]);

  return StatusMessageList;
}(React.Component);

var StatusMessageManager =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(StatusMessageManager, _React$Component3);

  function StatusMessageManager(props) {
    var _this2;

    _classCallCheck(this, StatusMessageManager);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(StatusMessageManager).call(this, props)); // just a property, doesn't have to be state

    _this2.messageTypes = {
      management: "Management",
      dining: "Dining Services",
      ops: "Operations",
      plumbing: "Plumbing",
      pool: "Pool"
    };
    _this2.apiUrl = "http://localhost:8888/status_api/";
    _this2.state = {
      statuses: [],
      isLoaded: false
    };
    _this2.addStatusMessage = _this2.addStatusMessage.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(StatusMessageManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.retrieveStatusMessages();
    }
  }, {
    key: "addStatusMessage",
    value: function addStatusMessage(status) {
      var updatedStatuses = this.state.statuses.slice(0);
      updatedStatuses.push(status);
      this.setState({
        statuses: updatedStatuses
      });
    }
  }, {
    key: "retrieveStatusMessages",
    value: function retrieveStatusMessages() {
      axios.get("".concat(this.apiUrl, "get.php?delay=5")).then(function (response) {
        this.setState({
          statuses: response.data,
          isLoaded: true
        });
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        id: "post-status"
      }, React.createElement(PostForm, {
        messageTypes: this.messageTypes,
        apiUrl: this.apiUrl,
        addStatusMessage: this.addStatusMessage
      })), React.createElement(StatusMessageList, {
        messageTypes: this.messageTypes,
        statuses: this.state.statuses,
        isLoaded: this.state.isLoaded
      }));
    }
  }]);

  return StatusMessageManager;
}(React.Component);

ReactDOM.render(React.createElement(StatusMessageManager, null), document.getElementById("react-statusmanager"));

//# sourceMappingURL=hotel-dist.js.map
