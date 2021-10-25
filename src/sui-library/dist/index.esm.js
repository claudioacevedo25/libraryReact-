import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React, { createContext, useState, useEffect } from 'react';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$2 = ".buttonComponent {\r\n  border-radius: 3px;\r\n  padding: 0.3rem 0.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  transition: all 0.3s ease-out;\r\n  box-shadow: #272727b0 1px 1px 1px, #272727b0 -1px -1px 1px;\r\n  color:rgb(var(--color1));\r\n  margin: 5px;\r\n}\r\n.buttonComponent:hover {\r\n  box-shadow: #272727b0 1px 1px 3px, #272727b0 -1px -1px 3px;\r\n}\r\n.buttonComponent:active {\r\n  opacity: 0.8;\r\n}\r\n\r\n.buttonComponent__simple{\r\n  background-color: rgb(var(--primary));\r\n}\r\n.buttonComponent__alternate{\r\n  background-color:rgb(var(--secondary)) ;\r\n}\r\n";
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

var css$1 = ".typography {\r\n  color: rgb(var(--color1));\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.typography__h1 {\r\n  font-weight: normal;\r\n  font-size: 2.5rem;\r\n  letter-spacing: 0.15rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.typography__h2 {\r\n  font-size: 1.2rem;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.typography__h3 {\r\n  font-size: 0.9rem;\r\n  letter-spacing: 0.2rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.typography__subtitle {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.typography__body {\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.typography__bodyBold {\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  line-height: 140%;\r\n}\r\n\r\n.typography__small {\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.typography__preTitle {\r\n  font-size: 0.6rem;\r\n  font-weight: bold;\r\n  letter-spacing: 0.02rem;\r\n}\r\n\r\n.typography__bodyBold {\r\n  font-size: 0.8rem;\r\n  font-weight: bold;\r\n}\r\n";
n(css$1,{});

var _excluded = ["variant", "color", "size"];

var Typography = function Typography(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "h3" : _ref$variant,
      color = _ref.color,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  var children = props.children;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      color: color,
      fontSize: size
    },
    className: "typography typography__".concat(variant)
  }, children);
};

var css = ".theme_context_provider[theme=\"light\"]{\r\n    --background: 250,250,250;\r\n    --primary: 243,243,246;\r\n    --secondary: 241,241,241;\r\n    --color1:0,0,0;\r\n    --hierarchy1:183,253,160;\r\n    --hierarchy2:69,215,188;\r\n    --hierarchy3:106,232,176;\r\n    background-color: rgb(250,250,250);\r\n  }\r\n  \r\n  .theme_context_provider[theme=\"dark\"]{\r\n    --background:0,0,0;\r\n    --primary:27,28,33;\r\n    --secondary: 49,50,56;\r\n    --color1:255,255,255;\r\n    --hierarchy1:183,253,160;\r\n    --hierarchy2:69,215,188;\r\n    --hierarchy3:106,232,176;\r\n    background-color: rgb(0,0,0);\r\n  }";
n(css,{});

var ThemeContext = /*#__PURE__*/createContext();

var ThemeContextProvider = function ThemeContextProvider(_ref) {
  var children = _ref.children;

  var _useState = useState("dark"),
      _useState2 = _slicedToArray(_useState, 2),
      mode = _useState2[0],
      setTheme = _useState2[1];

  useEffect(function () {
    var savedTheme = JSON.parse(localStorage.getItem("themeMode"));
    savedTheme && setTheme(savedTheme);
  }, []);

  var toggleTheme = function toggleTheme() {
    localStorage.setItem("themeMode", JSON.stringify(mode === "dark" ? "light" : "dark"));
    setTheme(mode === "dark" ? "light" : "dark");
  };

  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: {
      mode: mode,
      setTheme: toggleTheme
    }
  }, /*#__PURE__*/React.createElement("div", {
    theme: mode,
    className: 'theme_context_provider'
  }, children));
};

var theme = {
  light: {
    background: '250,250,250',
    primary: '243,243,246',
    secondary: '241,241,241',
    color1: '0,0,0',
    hierarchy1: '183,253,160',
    hierarchy2: '69,215,188',
    hierarchy3: '106,232,176'
  },
  dark: {
    background: '0,0,0',
    primary: '27,28,33',
    secondary: '49,50,56',
    color1: '255,255,255',
    hierarchy1: '183,253,160',
    hierarchy2: '69,215,188',
    hierarchy3: '106,232,176'
  }
};

var index = {
  AwesomeButton: AwesomeButton,
  Typography: Typography,
  ThemeContextProvider: ThemeContextProvider,
  ThemeContext: ThemeContext,
  theme: theme
};

export { index as default };
