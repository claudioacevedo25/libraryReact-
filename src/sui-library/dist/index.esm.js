import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React, { createContext, useState } from 'react';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$2 = ".buttonComponent {\r\n  border-radius: 3px;\r\n  padding: 0.3rem 0.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  transition: all 0.3s ease-out;\r\n  box-shadow: #272727b0 1px 1px 1px, #272727b0 -1px -1px 1px;\r\n  color:var(--text-color);\r\n  margin: 5px;\r\n}\r\n.buttonComponent:hover {\r\n  box-shadow: #272727b0 1px 1px 3px, #272727b0 -1px -1px 3px;\r\n}\r\n.buttonComponent:active {\r\n  opacity: 0.8;\r\n}\r\n\r\n.buttonComponent__simple{\r\n  background-color: var(--primary);\r\n}\r\n.buttonComponent__alternate{\r\n  background-color: var(--secondary);\r\n}\r\n";
n(css$2,{});

var _excluded$1 = ["clickHandler", "variant"];

var AwesomeButton = function AwesomeButton(_ref) {
  var clickHandler = _ref.clickHandler,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, _excluded$1);

  var children = props.children;
  return /*#__PURE__*/React.createElement("button", {
    className: "buttonComponent buttonComponent__".concat(variant),
    onClick: clickHandler
  }, children.toUpperCase());
};

var css$1 = "label{\r\n    color: var(--text-color)\r\n}";
n(css$1,{});

var _excluded = ["variant"];

var AwesomeLabel = function AwesomeLabel(_ref) {
  _ref.variant;
      var props = _objectWithoutProperties(_ref, _excluded);

  var children = props.children;
  return /*#__PURE__*/React.createElement("label", null, children.toUpperCase());
};

var css = ".theme_context_provider[theme=\"light\"]{\r\n    --background: #FAFAFD;\r\n    --primary: #F3F3F6;\r\n    --secondary: #F1F1F1;\r\n    --text-color:#000000;\r\n    --hierarchy1:#B7FDA0;\r\n    --hierarchy2:#45B7BC;\r\n    --hierarchy1:#6AE8B0;\r\n  }\r\n  \r\n  .theme_context_provider[theme=\"dark\"]{\r\n    --background:#000000;\r\n    --primary:#1B1621;\r\n    --secondary: #313238;\r\n    --text-color:#FFFFFF;\r\n    --hierarchy1:#B7FDA0;\r\n    --hierarchy2:#45B7BC;\r\n    --hierarchy3:#6AE8B0;\r\n  }";
n(css,{});

var ThemeContext = /*#__PURE__*/createContext();

var ThemeContextProvider = function ThemeContextProvider(_ref) {
  var children = _ref.children;

  var _useState = useState("dark"),
      _useState2 = _slicedToArray(_useState, 2),
      mode = _useState2[0],
      _setTheme = _useState2[1];

  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: {
      mode: mode,
      setTheme: function setTheme() {
        return _setTheme(mode === "dark" ? "light" : "dark");
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    theme: mode,
    className: 'theme_context_provider'
  }, children));
};

var theme = {
  light: {
    background: '#FAFAFD',
    primary: '#F3F3F6',
    secondary: '#F1F1F1',
    'text-color': '#000000',
    hierarchy1: '#B7FDA0',
    hierarchy2: '#45B7BC',
    hierarchy3: '#6AE8B0'
  },
  dark: {
    background: '#000000',
    primary: '#1B1621',
    secondary: '#313238',
    'text-color': '#FFFFFF',
    hierarchy1: '#B7FDA0',
    hierarchy2: '#45B7BC',
    hierarchy3: '#6AE8B0'
  }
};

var index = {
  AwesomeButton: AwesomeButton,
  AwesomeLabel: AwesomeLabel,
  ThemeContextProvider: ThemeContextProvider,
  ThemeContext: ThemeContext,
  theme: theme
};

export { index as default };
