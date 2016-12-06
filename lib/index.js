'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../assets/index.scss');

var Dialog = function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Dialog.prototype.render = function render() {
        var _props = this.props,
            skin = _props.skin,
            text = _props.text,
            title = _props.title,
            onEnter = _props.onEnter,
            onCancel = _props.onCancel,
            enterText = _props.enterText,
            cancelText = _props.cancelText;


        return _react2.default.createElement(
            'div',
            { className: 'dialog-wrapper ' + (skin || '') },
            _react2.default.createElement(
                'div',
                { className: 'dialog-inner' },
                _react2.default.createElement(
                    'div',
                    { className: 'dialog-text' },
                    title ? _react2.default.createElement(
                        'div',
                        { className: 'title' },
                        title
                    ) : null,
                    text ? _react2.default.createElement(
                        'div',
                        { className: 'text' },
                        text
                    ) : null,
                    this.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dialog-buttons' },
                    onCancel ? _react2.default.createElement(
                        'div',
                        { className: 'dialog-btn', onClick: onCancel },
                        cancelText || '取消'
                    ) : null,
                    onEnter ? _react2.default.createElement(
                        'div',
                        { className: 'dialog-btn', onClick: onEnter },
                        enterText || '确定'
                    ) : null
                )
            )
        );
    };

    return Dialog;
}(_react.Component);

exports.default = Dialog;