'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            option: ['one', 'two', 'three']
        };
        _this.pickaction = _this.pickaction.bind(_this);
        _this.removeall = _this.removeall.bind(_this);
        _this.addoption = _this.addoption.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'pickaction',
        value: function pickaction() {
            alert("you should do " + this.state.option[Math.floor(Math.random() * this.state.option.length)]);
        }
    }, {
        key: 'addoption',
        value: function addoption(e) {
            var _this2 = this;

            e.preventDefault();
            //console.log(e.target.elements)
            var task = document.getElementById("taskname").value;
            //this.state.option.push(task)

            this.setState(function (prev) {
                console.log(prev);
                var nr = [];
                nr = _this2.state.option;
                nr.push(task);
                console.log(nr);
                return {
                    option: nr
                };
            });
        }
    }, {
        key: 'removeall',
        value: function removeall() {
            this.setState(function () {
                return {
                    option: []
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //console.log(this.state);
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(
                    'button',
                    { onClick: this.removeall },
                    'Remove  all'
                ),
                React.createElement(Action, { pick: this.pickaction, haveopt: this.state.option.length > 0 ? true : false }),
                React.createElement(Options, { option: this.state.option }),
                React.createElement(Addopt, { addtask: this.addoption })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this3 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this3.state = {
            title: "Indecision App",
            subtitle: "Be slave of machine....."
        };
        return _this3;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            //console.log(this.state)
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.title
                ),
                React.createElement(
                    'h3',
                    null,
                    this.state.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { disabled: !this.props.haveopt, onClick: this.props.pick },
                'Pick a task..'
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.option.map(function (t) {
                    return React.createElement(
                        'h3',
                        null,
                        React.createElement(Task, { name: t, key: t })
                    );
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Task = function (_React$Component5) {
    _inherits(Task, _React$Component5);

    function Task() {
        _classCallCheck(this, Task);

        return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
    }

    _createClass(Task, [{
        key: 'render',
        value: function render() {
            //console.log(this.props)
            return React.createElement(
                'p',
                null,
                this.props.name
            );
        }
    }]);

    return Task;
}(React.Component);

var Addopt = function (_React$Component6) {
    _inherits(Addopt, _React$Component6);

    function Addopt() {
        _classCallCheck(this, Addopt);

        return _possibleConstructorReturn(this, (Addopt.__proto__ || Object.getPrototypeOf(Addopt)).apply(this, arguments));
    }

    _createClass(Addopt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.props.addtask },
                React.createElement('input', { type: 'text', id: 'taskname' }),
                React.createElement(
                    'button',
                    { style: { fontsize: '12px', color: 'red' } },
                    'Add task'
                )
            );
        }
    }]);

    return Addopt;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
