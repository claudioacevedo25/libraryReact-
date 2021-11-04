'use strict';

var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$7 = ".typography {\n  color: rgb(var(--color1));\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.typography__h1 {\n  font-weight: normal;\n  font-size: 2.5rem;\n  letter-spacing: 0.25rem;\n  text-transform: uppercase;\n}\n\n.typography__h2 {\n  font-size: 1.2rem;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n}\n\n.typography__h3 {\n  font-size: 0.9rem;\n  letter-spacing: 0.2rem;\n  text-transform: uppercase;\n}\n\n.typography__subtitle {\n  font-size: 1.1rem;\n}\n\n.typography__body {\n  font-size: 1rem;\n  line-height: 140%;\n}\n\n.typography__bodyBold {\n  font-size: 1rem;\n  font-weight: bold;\n  line-height: 140%;\n}\n\n.typography__small {\n  font-size: 0.6rem;\n}\n\n.typography__preTitle {\n  font-size: 0.6rem;\n  font-weight: bold;\n  letter-spacing: 0.02rem;\n}\n\n.typography__textButton {\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n";
n(css$7,{});

var Typography = function Typography(_ref) {
  var variant = _ref.variant,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("label", {
    style: {
      color: color,
      fontSize: "".concat(size, "rem")
    },
    className: "".concat(className, " typography typography__").concat(variant)
  }, children);
};

Typography.defaultProps = {
  variant: "h3",
  children: ""
};

var css$6 = ".buttonComponent {\n  border-radius: 19px;\n  padding: 10px 25px;\n  cursor: pointer;\n  border: 1px solid #000;\n  color:rgb(var(--color1));\n}\n\n.buttonComponent:hover {\n  background-color: rgba(var(--color1), 0.20);\n}\n\n.buttonComponent:active {\n  background-color: rgb(var(--color1));\n  color:rgb(var(--primary));\n}\n\n.buttonComponent__normal{\n  background-color: rgb(var(--primary));\n}\n\n.buttonComponent__alternate{\n  background-color:rgb(var(--secondary)) ;\n}\n";
n(css$6,{});

var _excluded = ["className", "onClick", "variant"];

var Button = function Button(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      variant = _ref.variant,
      props = _objectWithoutProperties__default["default"](_ref, _excluded);

  var children = props.children;
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: "".concat(className, " buttonComponent buttonComponent__").concat(variant),
    onClick: onClick
  }, /*#__PURE__*/React__default["default"].createElement(Typography, {
    variant: "textButton"
  }, children));
};

Button.defaultProps = {
  onClick: function onClick() {},
  variant: 'normal'
};

var css$5 = ".theme__context__provider[theme=\"light\"]{\n  --background: 250,250,250;\n  --primary: 243,243,246;\n  --secondary: 241,241,241;\n  --color1:0,0,0;\n  --hierarchy1:183,253,160;\n  --hierarchy2:69,215,188;\n  --hierarchy3:106,232,176;\n  background-color: rgb(250,250,250);\n  height: 100vh;\n  width: 100vw;\n}\n\n.theme__context__provider[theme=\"dark\"]{\n  --background: 0,0,0;\n  --primary: 27,28,33;\n  --secondary: 49,50,56;\n  --color1:255,255,255;\n  --hierarchy1:183,253,160;\n  --hierarchy2:69,215,188;\n  --hierarchy3:106,232,176;\n  background-color: rgb(0,0,0);\n  height: 100vh;\n  width: 100vw;\n}";
n(css$5,{});

var ThemeContext = /*#__PURE__*/React.createContext();

var ThemeContextProvider = function ThemeContextProvider(_ref) {
  var children = _ref.children,
      onThemeChange = _ref.onThemeChange,
      initialTheme = _ref.initialTheme;

  var _useState = React.useState(initialTheme),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      mode = _useState2[0],
      setTheme = _useState2[1];

  var toggleTheme = function toggleTheme() {
    onThemeChange && onThemeChange();
    setTheme(mode === "dark" ? "light" : "dark");
  };

  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, {
    value: {
      mode: mode,
      setTheme: toggleTheme
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    theme: mode,
    className: 'theme__context__provider'
  }, children));
};

var DarkIcon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20852.5%20292.7%22%20style%3D%22enable-background%3Anew%200%200%20852.5%20292.7%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%23FFFFFF%3B%7D%20.st1%7Bfill%3Aurl%28%23SVGID_1_%29%3B%7D%20.st2%7Bfill%3Aurl%28%23SVGID_2_%29%3B%7D%20.st3%7Bfill%3Aurl%28%23SVGID_3_%29%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cg%3E%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M269.5%2C161.4c1.2%2C0%2C2.2%2C0.9%2C2.4%2C2.1c0.6%2C3.6%2C1.7%2C6.2%2C3.3%2C7.9c3.3%2C3.5%2C9.3%2C5.2%2C18.1%2C5.2%20%20%20c5.2%2C0%2C9.3-0.8%2C12.4-2.3c3.1-1.5%2C4.6-3.8%2C4.6-6.9c0-2.9-1.2-5.2-3.7-6.7c-2.5-1.5-11.6-4.2-27.5-7.9c-11.4-2.8-19.4-6.4-24.1-10.6%20%20%20c-4.7-4.2-7-10.2-7-18c0-9.3%2C3.6-17.2%2C10.9-23.9c7.3-6.7%2C17.6-10%2C30.8-10c12.5%2C0%2C22.8%2C2.5%2C30.7%2C7.5c7.3%2C4.6%2C11.7%2C12.3%2C13.3%2C23.1%20%20%20c0.2%2C1.5-0.9%2C2.8-2.4%2C2.8H310c-1.2%2C0-2.2-0.9-2.4-2c-0.5-2.4-1.3-4.4-2.6-6c-2.9-3.6-7.8-5.3-14.8-5.3c-5.7%2C0-9.8%2C0.9-12.2%2C2.7%20%20%20c-2.4%2C1.8-3.6%2C3.9-3.6%2C6.3c0%2C3%2C1.3%2C5.2%2C3.9%2C6.5c2.6%2C1.4%2C11.7%2C3.8%2C27.4%2C7.3c10.5%2C2.5%2C18.3%2C6.2%2C23.5%2C11.1c5.2%2C5%2C7.7%2C11.3%2C7.7%2C18.9%20%20%20c0%2C9.9-3.7%2C18.1-11.1%2C24.4c-7.4%2C6.3-18.9%2C9.4-34.4%2C9.4c-15.8%2C0-27.5-3.3-35-10c-6.9-6.1-10.6-13.7-11.2-22.8%20%20%20c-0.1-1.4%2C1-2.6%2C2.5-2.6H269.5z%22%2F%3E%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M440.6%2C103.9c8.2%2C8.7%2C12.3%2C21.4%2C12.3%2C38.1c0%2C17.7-4%2C31.2-12%2C40.4c-8%2C9.3-18.3%2C13.9-30.9%2C13.9%20%20%20c-8%2C0-14.7-2-20-6c-2.9-2.2-5.7-5.4-8.5-9.7v49.9c0%2C1.4-1.1%2C2.5-2.5%2C2.5h-21.1c-1.4%2C0-2.5-1.1-2.5-2.5v-135c0-1.4%2C1.1-2.5%2C2.5-2.5%20%20%20h20.2c1.4%2C0%2C2.5%2C1.1%2C2.5%2C2.5v12.4c2.8-4.4%2C5.9-7.8%2C9.1-10.3c5.9-4.5%2C12.9-6.7%2C20.9-6.7C422.4%2C90.9%2C432.4%2C95.2%2C440.6%2C103.9z%20%20%20%20M420.5%2C122.8c-3.6-6-9.3-8.9-17.3-8.9c-9.6%2C0-16.2%2C4.5-19.8%2C13.5c-1.9%2C4.8-2.8%2C10.9-2.8%2C18.2c0%2C11.7%2C3.1%2C19.9%2C9.4%2C24.6%20%20%20c3.7%2C2.8%2C8.1%2C4.1%2C13.2%2C4.1c7.4%2C0%2C13-2.8%2C16.9-8.5c3.9-5.6%2C5.8-13.2%2C5.8-22.6C425.8%2C135.6%2C424%2C128.7%2C420.5%2C122.8z%22%2F%3E%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M495.7%2C193.5h-21.3c-1.4%2C0-2.5-1.1-2.5-2.5V60.2c0-1.4%2C1.1-2.5%2C2.5-2.5h21.3c1.4%2C0%2C2.5%2C1.1%2C2.5%2C2.5V191%20%20%20C498.2%2C192.4%2C497.1%2C193.5%2C495.7%2C193.5z%22%2F%3E%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M548.3%2C81.1h-21.7c-1.4%2C0-2.5-1.1-2.5-2.5V59.4c0-1.4%2C1.1-2.5%2C2.5-2.5h21.7c1.4%2C0%2C2.5%2C1.1%2C2.5%2C2.5v19.3%20%20%20C550.8%2C80%2C549.7%2C81.1%2C548.3%2C81.1z%20M526.6%2C93.1h21.7c1.4%2C0%2C2.5%2C1.1%2C2.5%2C2.5V191c0%2C1.4-1.1%2C2.5-2.5%2C2.5h-21.7%20%20%20c-1.4%2C0-2.5-1.1-2.5-2.5V95.6C524.2%2C94.2%2C525.3%2C93.1%2C526.6%2C93.1z%22%2F%3E%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M625.8%2C93c6.4%2C2.6%2C11.5%2C7.5%2C15.5%2C14.5v-12c0-1.4%2C1.1-2.5%2C2.5-2.5h20.7c1.4%2C0%2C2.5%2C1.1%2C2.5%2C2.5v94%20%20%20c0%2C13-2.2%2C22.7-6.5%2C29.3c-7.5%2C11.3-21.9%2C16.9-43.1%2C16.9c-12.8%2C0-23.3-2.5-31.4-7.6c-7.3-4.6-11.7-11.1-13.1-19.8%20%20%20c-0.2-1.5%2C0.9-2.8%2C2.4-2.8h21.5c1%2C0%2C1.8%2C0.6%2C2.2%2C1.4c1%2C2.3%2C3%2C4.1%2C4.4%2C5.2c2.8%2C2.4%2C8.8%2C3.6%2C15.5%2C3.6c9.5%2C0%2C15.8-3.2%2C19-9.5%20%20%20c2.1-4.1%2C3.1-10.9%2C3.1-20.4v-7.7c-2.5%2C4.3-5.2%2C7.5-8.1%2C9.7c-5.2%2C4-12%2C6-20.4%2C6c-12.9%2C0-23.2-4.5-30.9-13.6%20%20%20c-7.7-9.1-11.6-21.3-11.6-36.8c0-14.9%2C3.7-27.5%2C11.1-37.6c7.4-10.2%2C17.9-15.2%2C31.5-15.2C617.7%2C90.7%2C622.1%2C91.5%2C625.8%2C93z%20%20%20%20M634.8%2C165c4.2-4.6%2C6.3-12%2C6.3-22.1c0-9.5-2-16.8-6-21.7c-4-5-9.4-7.5-16.1-7.5c-9.2%2C0-15.5%2C4.3-19%2C13c-1.8%2C4.6-2.8%2C10.3-2.8%2C17%20%20%20c0%2C5.8%2C1%2C11%2C2.9%2C15.6c3.5%2C8.5%2C9.9%2C12.7%2C19.1%2C12.7C625.4%2C171.9%2C630.6%2C169.6%2C634.8%2C165z%22%2F%3E%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M763.5%2C93.7c5%2C2.2%2C9.2%2C5.4%2C12.4%2C9.9c2.8%2C3.7%2C4.4%2C7.6%2C5%2C11.6c0.6%2C4%2C0.9%2C10.4%2C0.9%2C19.4V191%20%20%20c0%2C1.4-1.1%2C2.5-2.5%2C2.5h-21.9c-1.4%2C0-2.5-1.1-2.5-2.5v-58.7c0-5.4-0.9-9.8-2.7-13.1c-2.4-4.7-6.9-7-13.5-7c-6.9%2C0-12.1%2C2.3-15.7%2C7%20%20%20s-5.3%2C11.3-5.3%2C19.9V191c0%2C1.4-1.1%2C2.5-2.5%2C2.5H694c-1.4%2C0-2.5-1.1-2.5-2.5V60.7c0-1.4%2C1.1-2.5%2C2.5-2.5h21.3%20%20%20c1.4%2C0%2C2.5%2C1.1%2C2.5%2C2.5v45.4c3.8-5.8%2C8.2-9.9%2C13.2-12.2c5-2.3%2C10.2-3.5%2C15.7-3.5C752.9%2C90.4%2C758.5%2C91.5%2C763.5%2C93.7z%22%2F%3E%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M796.3%2C110.3V96.5c0-1.4%2C1.1-2.5%2C2.5-2.5h11.5V68.5c0-1.4%2C1.1-2.5%2C2.5-2.5h21.1c1.4%2C0%2C2.5%2C1.1%2C2.5%2C2.5v25.2%20%20%20c0%2C0.2%2C0.1%2C0.3%2C0.3%2C0.3h13.5c1.4%2C0%2C2.5%2C1.1%2C2.5%2C2.5v13.8c0%2C1.4-1.1%2C2.5-2.5%2C2.5h-13.8v53c0%2C4.1%2C0.5%2C6.7%2C1.6%2C7.7%20%20%20c1%2C1%2C4.2%2C1.5%2C9.6%2C1.5c0.8%2C0%2C1.6%2C0%2C2.5%2C0l0.1%2C0c1.4%2C0%2C2.6%2C1.1%2C2.6%2C2.5V192c0%2C1.3-1%2C2.4-2.4%2C2.5l-10.1%2C0.4%20%20%20c-12.4%2C0.4-20.9-1.7-25.4-6.4c-2.9-3-4.4-7.6-4.4-13.9v-61.8h-11.5C797.4%2C112.7%2C796.3%2C111.6%2C796.3%2C110.3z%22%2F%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_1_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%2227.6722%22%20y1%3D%2284.4473%22%20x2%3D%22-83.4163%22%20y2%3D%22265.6275%22%20gradientTransform%3D%22matrix%280.9475%205.249054e-02%205.249054e-02%200.9475%2092.2959%20-89.312%29%22%3E%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%2392FE9D%22%2F%3E%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%2344D1C2%22%2F%3E%20%20%3C%2FlinearGradient%3E%20%20%3Cpath%20class%3D%22st1%22%20d%3D%22M143.9%2C36.5L36.5%2C143.9c-8.4%2C8.4-21.9%2C8.4-30.2%2C0l0%2C0c-8.4-8.4-8.4-21.9%2C0-30.2L113.6%2C6.3%20%20%20c8.4-8.4%2C21.9-8.4%2C30.2%2C0l0%2C0C152.2%2C14.6%2C152.2%2C28.2%2C143.9%2C36.5z%22%2F%3E%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_2_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%2252.5938%22%20y1%3D%22235.0245%22%20x2%3D%22-59.3723%22%20y2%3D%22415.8538%22%20gradientTransform%3D%22matrix%280.9389%206.112514e-02%206.112514e-02%200.9389%2089.3236%20-86.3396%29%22%3E%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%2392FE9D%22%2F%3E%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%2344D1C2%22%2F%3E%20%20%3C%2FlinearGradient%3E%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M173.5%2C181.8L68.8%2C286.5c-8.4%2C8.4-21.9%2C8.4-30.2%2C0l0%2C0c-8.4-8.4-8.4-21.9%2C0-30.2l104.7-104.7%20%20%20c8.4-8.4%2C21.9-8.4%2C30.2%2C0l0%2C0C181.9%2C159.9%2C181.9%2C173.4%2C173.5%2C181.8z%22%2F%3E%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_3_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%222558.7471%22%20y1%3D%22-329.9523%22%20x2%3D%222455.9104%22%20y2%3D%22-301.3118%22%20gradientTransform%3D%22matrix%280.735%20-0.735%200.7071%200.7071%20-1529.0481%202213.0107%29%22%3E%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%2392FE9D%22%2F%3E%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%2344D1C2%22%2F%3E%20%20%3C%2FlinearGradient%3E%20%20%3Cpath%20class%3D%22st3%22%20d%3D%22M100.4%2C106.9l-49.9%2C49.9c-8.4%2C8.4-8.4%2C21.9%2C0%2C30.2l0%2C0c8.4%2C8.4%2C21.9%2C8.4%2C30.2%2C0l49.9-49.9%20%20%20c8.4-8.4%2C8.4-21.9%2C0-30.2l0%2C0C122.3%2C98.6%2C108.8%2C98.6%2C100.4%2C106.9z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var LightIcon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20852.54%20292.75%22%20style%3D%22enable-background%3Anew%200%200%20852.54%20292.75%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bclip-path%3Aurl%28%23SVGID_2_%29%3B%7D%20.st1%7Bclip-path%3Aurl%28%23SVGID_4_%29%3B%7D%20.st2%7Bfill%3A%231D1D1B%3B%7D%20.st3%7Bfill%3Aurl%28%23SVGID_7_%29%3B%7D%20.st4%7Bfill%3Aurl%28%23SVGID_8_%29%3B%7D%20.st5%7Bfill%3Aurl%28%23SVGID_9_%29%3B%7D%20.st6%7Bfill%3A%23FFFFFF%3B%7D%20.st7%7Bclip-path%3Aurl%28%23SVGID_11_%29%3B%7D%20.st8%7Bclip-path%3Aurl%28%23SVGID_13_%29%3B%7D%20.st9%7Bfill%3A%231A1A23%3B%7D%20.st10%7Bclip-path%3Aurl%28%23SVGID_17_%29%3B%7D%20.st11%7Bclip-path%3Aurl%28%23SVGID_19_%29%3B%7D%20.st12%7Bclip-path%3Aurl%28%23SVGID_23_%29%3B%7D%20.st13%7Bclip-path%3Aurl%28%23SVGID_25_%29%3B%7D%20.st14%7Bclip-path%3Aurl%28%23SVGID_29_%29%3B%7D%20.st15%7Bclip-path%3Aurl%28%23SVGID_31_%29%3B%7D%20.st16%7Bfill%3Aurl%28%23SVGID_34_%29%3B%7D%20.st17%7Bfill%3Aurl%28%23SVGID_35_%29%3B%7D%20.st18%7Bfill%3Aurl%28%23SVGID_36_%29%3B%7D%20.st19%7Bfill%3Aurl%28%23SVGID_37_%29%3B%7D%20.st20%7Bfill%3Aurl%28%23SVGID_38_%29%3B%7D%20.st21%7Bfill%3Aurl%28%23SVGID_39_%29%3B%7D%20.st22%7Bclip-path%3Aurl%28%23SVGID_41_%29%3B%7D%20.st23%7Bclip-path%3Aurl%28%23SVGID_43_%29%3B%7D%20.st24%7Bclip-path%3Aurl%28%23SVGID_47_%29%3B%7D%20.st25%7Bclip-path%3Aurl%28%23SVGID_49_%29%3B%7D%20.st26%7Bfill%3Aurl%28%23SVGID_52_%29%3B%7D%20.st27%7Bfill%3Aurl%28%23SVGID_53_%29%3B%7D%20.st28%7Bfill%3Aurl%28%23SVGID_54_%29%3B%7D%20.st29%7Bclip-path%3Aurl%28%23SVGID_56_%29%3B%7D%20.st30%7Bclip-path%3Aurl%28%23SVGID_58_%29%3B%7D%20.st31%7Bfill%3Aurl%28%23SVGID_61_%29%3B%7D%20.st32%7Bfill%3Aurl%28%23SVGID_62_%29%3B%7D%20.st33%7Bfill%3Aurl%28%23SVGID_63_%29%3B%7D%20.st34%7Bfill%3Aurl%28%23SVGID_64_%29%3B%7D%20.st35%7Bfill%3Aurl%28%23SVGID_65_%29%3B%7D%20.st36%7Bfill%3Aurl%28%23SVGID_66_%29%3B%7D%20.st37%7Bfill%3Aurl%28%23SVGID_67_%29%3B%7D%20.st38%7Bfill%3Aurl%28%23SVGID_68_%29%3B%7D%20.st39%7Bfill%3Aurl%28%23SVGID_69_%29%3B%7D%20.st40%7Bfill%3Aurl%28%23SVGID_70_%29%3B%7D%20.st41%7Bfill%3Aurl%28%23SVGID_71_%29%3B%7D%20.st42%7Bfill%3Aurl%28%23SVGID_72_%29%3B%7D%20.st43%7Bfill%3Aurl%28%23SVGID_73_%29%3B%7D%20.st44%7Bfill%3Aurl%28%23SVGID_74_%29%3B%7D%20.st45%7Bfill%3Aurl%28%23SVGID_75_%29%3B%7D%20.st46%7Bfill%3Aurl%28%23SVGID_76_%29%3B%7D%20.st47%7Bfill%3Aurl%28%23SVGID_77_%29%3B%7D%20.st48%7Bfill%3Aurl%28%23SVGID_78_%29%3B%7D%20.st49%7Bfill%3Aurl%28%23SVGID_79_%29%3B%7D%20.st50%7Bfill%3Aurl%28%23SVGID_80_%29%3B%7D%20.st51%7Bfill%3Aurl%28%23SVGID_81_%29%3B%7D%20.st52%7Bfill%3Aurl%28%23SVGID_82_%29%3B%7D%20.st53%7Bfill%3Aurl%28%23SVGID_83_%29%3B%7D%20.st54%7Bfill%3Aurl%28%23SVGID_84_%29%3B%7D%20.st55%7Bfill%3Aurl%28%23SVGID_85_%29%3B%7D%20.st56%7Bfill%3Aurl%28%23SVGID_86_%29%3B%7D%20.st57%7Bfill%3Aurl%28%23SVGID_87_%29%3B%7D%20.st58%7Bfill%3Aurl%28%23SVGID_88_%29%3B%7D%20.st59%7Bfill%3Aurl%28%23SVGID_89_%29%3B%7D%20.st60%7Bfill%3Aurl%28%23SVGID_90_%29%3B%7D%20.st61%7Bfill%3Aurl%28%23SVGID_91_%29%3B%7D%20.st62%7Bfill%3Aurl%28%23SVGID_92_%29%3B%7D%20.st63%7Bfill%3Aurl%28%23SVGID_93_%29%3B%7D%20.st64%7Bfill%3Aurl%28%23SVGID_94_%29%3B%7D%20.st65%7Bfill%3Aurl%28%23SVGID_95_%29%3B%7D%20.st66%7Bfill%3Aurl%28%23SVGID_96_%29%3B%7D%20.st67%7Bfill%3Aurl%28%23SVGID_97_%29%3B%7D%20.st68%7Bfill%3Aurl%28%23SVGID_98_%29%3B%7D%20.st69%7Bfill%3Aurl%28%23SVGID_99_%29%3B%7D%20.st70%7Bfill%3Aurl%28%23SVGID_100_%29%3B%7D%20.st71%7Bfill%3Aurl%28%23SVGID_101_%29%3B%7D%20.st72%7Bfill%3Aurl%28%23SVGID_102_%29%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cg%3E%20%20%3Cpath%20d%3D%22M269.54%2C161.45c1.2%2C0%2C2.21%2C0.88%2C2.42%2C2.06c0.64%2C3.6%2C1.74%2C6.23%2C3.31%2C7.89c3.27%2C3.5%2C9.31%2C5.25%2C18.14%2C5.25%20%20%20c5.18%2C0%2C9.3-0.77%2C12.35-2.3c3.05-1.53%2C4.58-3.84%2C4.58-6.91c0-2.95-1.23-5.19-3.69-6.72c-2.46-1.53-11.61-4.17-27.46-7.92%20%20%20c-11.41-2.82-19.44-6.35-24.11-10.59c-4.67-4.17-7-10.19-7-18.05c0-9.27%2C3.64-17.23%2C10.94-23.9c7.29-6.66%2C17.55-9.99%2C30.78-9.99%20%20%20c12.55%2C0%2C22.78%2C2.5%2C30.68%2C7.51c7.29%2C4.61%2C11.71%2C12.32%2C13.28%2C23.11c0.21%2C1.48-0.94%2C2.81-2.44%2C2.81h-21.37%20%20%20c-1.19%2C0-2.18-0.86-2.41-2.02c-0.49-2.44-1.34-4.43-2.55-5.99c-2.9-3.56-7.82-5.34-14.78-5.34c-5.73%2C0-9.8%2C0.89-12.23%2C2.67%20%20%20c-2.43%2C1.78-3.65%2C3.87-3.65%2C6.26c0%2C3.01%2C1.29%2C5.19%2C3.88%2C6.54c2.58%2C1.41%2C11.72%2C3.84%2C27.4%2C7.27c10.45%2C2.46%2C18.29%2C6.17%2C23.51%2C11.14%20%20%20c5.16%2C5.03%2C7.74%2C11.33%2C7.74%2C18.88c0%2C9.95-3.71%2C18.07-11.12%2C24.36c-7.41%2C6.29-18.87%2C9.44-34.37%2C9.44%20%20%20c-15.81%2C0-27.48-3.33-35.02-9.99c-6.89-6.09-10.63-13.71-11.22-22.85c-0.09-1.41%2C1.04-2.61%2C2.46-2.61H269.54z%22%2F%3E%20%20%3Cpath%20d%3D%22M440.6%2C103.89c8.19%2C8.66%2C12.28%2C21.36%2C12.28%2C38.12c0%2C17.68-4%2C31.16-12%2C40.43c-8%2C9.27-18.3%2C13.91-30.91%2C13.91%20%20%20c-8.03%2C0-14.71-2-20.02-5.99c-2.9-2.21-5.75-5.43-8.53-9.67v49.85c0%2C1.36-1.1%2C2.46-2.46%2C2.46h-21.06c-1.36%2C0-2.46-1.1-2.46-2.46%20%20%20V95.57c0-1.36%2C1.1-2.46%2C2.46-2.46h20.23c1.36%2C0%2C2.46%2C1.1%2C2.46%2C2.46v12.37c2.84-4.36%2C5.87-7.8%2C9.08-10.31%20%20%20c5.87-4.48%2C12.85-6.72%2C20.95-6.72C422.42%2C90.91%2C432.42%2C95.24%2C440.6%2C103.89z%20M420.46%2C122.77c-3.57-5.95-9.35-8.93-17.35-8.93%20%20%20c-9.62%2C0-16.22%2C4.51-19.82%2C13.54c-1.86%2C4.79-2.79%2C10.87-2.79%2C18.23c0%2C11.66%2C3.13%2C19.86%2C9.39%2C24.59c3.72%2C2.76%2C8.13%2C4.14%2C13.21%2C4.14%20%20%20c7.38%2C0%2C13.01-2.82%2C16.89-8.47c3.88-5.65%2C5.82-13.17%2C5.82-22.56C425.81%2C135.57%2C424.03%2C128.72%2C420.46%2C122.77z%22%2F%3E%20%20%3Cpath%20d%3D%22M495.73%2C193.49H474.4c-1.36%2C0-2.46-1.1-2.46-2.46V60.21c0-1.36%2C1.1-2.46%2C2.46-2.46h21.33c1.36%2C0%2C2.46%2C1.1%2C2.46%2C2.46%20%20%20v130.83C498.19%2C192.39%2C497.09%2C193.49%2C495.73%2C193.49z%22%2F%3E%20%20%3Cpath%20d%3D%22M548.32%2C81.15h-21.7c-1.36%2C0-2.46-1.1-2.46-2.46V59.38c0-1.36%2C1.1-2.46%2C2.46-2.46h21.7c1.36%2C0%2C2.46%2C1.1%2C2.46%2C2.46v19.31%20%20%20C550.77%2C80.05%2C549.67%2C81.15%2C548.32%2C81.15z%20M526.61%2C93.12h21.7c1.36%2C0%2C2.46%2C1.1%2C2.46%2C2.46v95.46c0%2C1.36-1.1%2C2.46-2.46%2C2.46h-21.7%20%20%20c-1.36%2C0-2.46-1.1-2.46-2.46V95.57C524.16%2C94.22%2C525.26%2C93.12%2C526.61%2C93.12z%22%2F%3E%20%20%3Cpath%20d%3D%22M625.84%2C93.02c6.38%2C2.64%2C11.53%2C7.49%2C15.45%2C14.55v-12c0-1.36%2C1.1-2.46%2C2.46-2.46h20.69c1.36%2C0%2C2.46%2C1.1%2C2.46%2C2.46v94.02%20%20%20c0%2C12.95-2.18%2C22.71-6.54%2C29.28c-7.49%2C11.29-21.86%2C16.94-43.1%2C16.94c-12.83%2C0-23.3-2.52-31.4-7.55%20%20%20c-7.33-4.55-11.69-11.14-13.1-19.75c-0.24-1.48%2C0.93-2.81%2C2.43-2.81h21.51c0.96%2C0%2C1.84%2C0.56%2C2.23%2C1.43%20%20%20c1.03%2C2.33%2C2.97%2C4.07%2C4.36%2C5.2c2.82%2C2.39%2C8.84%2C3.59%2C15.53%2C3.59c9.45%2C0%2C15.78-3.16%2C18.97-9.48c2.09-4.05%2C3.13-10.87%2C3.13-20.44%20%20%20v-7.7c-2.52%2C4.3-5.22%2C7.52-8.1%2C9.67c-5.22%2C3.99-12%2C5.99-20.35%2C5.99c-12.89%2C0-23.19-4.53-30.9-13.58%20%20%20c-7.7-9.05-11.56-21.32-11.56-36.79c0-14.92%2C3.71-27.46%2C11.13-37.62c7.42-10.16%2C17.93-15.24%2C31.55-15.24%20%20%20C617.72%2C90.72%2C622.1%2C91.49%2C625.84%2C93.02z%20M634.78%2C164.99c4.22-4.63%2C6.33-12.02%2C6.33-22.15c0-9.52-2-16.76-6.01-21.73%20%20%20c-4-4.97-9.37-7.46-16.09-7.46c-9.17%2C0-15.5%2C4.33-18.98%2C12.98c-1.84%2C4.6-2.75%2C10.28-2.75%2C17.04c0%2C5.83%2C0.98%2C11.02%2C2.93%2C15.56%20%20%20c3.55%2C8.47%2C9.9%2C12.71%2C19.08%2C12.71C625.4%2C171.94%2C630.56%2C169.63%2C634.78%2C164.99z%22%2F%3E%20%20%3Cpath%20d%3D%22M763.53%2C93.67c5.04%2C2.15%2C9.18%2C5.44%2C12.42%2C9.86c2.75%2C3.75%2C4.43%2C7.61%2C5.04%2C11.57c0.61%2C3.96%2C0.92%2C10.43%2C0.92%2C19.4v56.53%20%20%20c0%2C1.36-1.1%2C2.46-2.46%2C2.46h-21.89c-1.36%2C0-2.46-1.1-2.46-2.46v-58.67c0-5.41-0.91-9.77-2.74-13.09%20%20%20c-2.38-4.67-6.89-7.01-13.53-7.01c-6.89%2C0-12.11%2C2.32-15.68%2C6.96s-5.35%2C11.26-5.35%2C19.87v51.94c0%2C1.36-1.1%2C2.46-2.46%2C2.46h-21.33%20%20%20c-1.36%2C0-2.46-1.1-2.46-2.46V60.67c0-1.36%2C1.1-2.46%2C2.46-2.46h21.33c1.36%2C0%2C2.46%2C1.1%2C2.46%2C2.46v45.43%20%20%20c3.79-5.83%2C8.18-9.9%2C13.16-12.2c4.98-2.3%2C10.22-3.45%2C15.72-3.45C752.87%2C90.45%2C758.48%2C91.52%2C763.53%2C93.67z%22%2F%3E%20%20%3Cpath%20d%3D%22M796.28%2C110.28V96.49c0-1.36%2C1.1-2.46%2C2.46-2.46h11.54V68.5c0-1.36%2C1.1-2.46%2C2.46-2.46h21.06c1.36%2C0%2C2.46%2C1.1%2C2.46%2C2.46%20%20%20v25.24c0%2C0.17%2C0.14%2C0.3%2C0.3%2C0.3h13.54c1.36%2C0%2C2.46%2C1.1%2C2.46%2C2.46v13.78c0%2C1.36-1.1%2C2.46-2.46%2C2.46h-13.84v53.04%20%20%20c0%2C4.11%2C0.52%2C6.68%2C1.57%2C7.69c1.04%2C1.01%2C4.24%2C1.52%2C9.58%2C1.52c0.8%2C0%2C1.64-0.01%2C2.53-0.05l0.06%2C0c1.4-0.05%2C2.56%2C1.07%2C2.56%2C2.47v14.64%20%20%20c0%2C1.32-1.04%2C2.4-2.36%2C2.45l-10.07%2C0.37c-12.4%2C0.43-20.87-1.72-25.42-6.45c-2.95-3.01-4.42-7.64-4.42-13.91v-61.79h-11.54%20%20%20C797.37%2C112.73%2C796.28%2C111.63%2C796.28%2C110.28z%22%2F%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_2_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22-134.8809%22%20y1%3D%22247.0004%22%20x2%3D%22-245.9693%22%20y2%3D%22428.1806%22%20gradientTransform%3D%22matrix%280.9475%200.0525%200.0525%200.9475%20237.7839%20-234.8%29%22%3E%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%2392FE9D%22%2F%3E%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%2344D1C2%22%2F%3E%20%20%3C%2FlinearGradient%3E%20%20%3Cpath%20style%3D%22fill%3Aurl%28%23SVGID_2_%29%3B%22%20d%3D%22M143.88%2C36.51L36.51%2C143.88c-8.35%2C8.35-21.9%2C8.35-30.25%2C0l0%2C0c-8.35-8.35-8.35-21.9%2C0-30.25%20%20%20L113.64%2C6.26c8.35-8.35%2C21.9-8.35%2C30.25%2C0l0%2C0C152.24%2C14.62%2C152.24%2C28.16%2C143.88%2C36.51z%22%2F%3E%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_4_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22-140.4231%22%20y1%3D%22428.0414%22%20x2%3D%22-252.3892%22%20y2%3D%22608.8708%22%20gradientTransform%3D%22matrix%280.9389%200.0611%200.0611%200.9389%20258.7441%20-255.7602%29%22%3E%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%2392FE9D%22%2F%3E%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%2344D1C2%22%2F%3E%20%20%3C%2FlinearGradient%3E%20%20%3Cpath%20style%3D%22fill%3Aurl%28%23SVGID_4_%29%3B%22%20d%3D%22M173.52%2C181.77L68.8%2C286.48c-8.35%2C8.35-21.9%2C8.35-30.25%2C0l0%2C0c-8.35-8.35-8.35-21.9%2C0-30.25%20%20%20l104.72-104.72c8.35-8.35%2C21.9-8.35%2C30.25%2C0l0%2C0C181.87%2C159.87%2C181.87%2C173.41%2C173.52%2C181.77z%22%2F%3E%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_6_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%226146.5166%22%20y1%3D%22-3408.9131%22%20x2%3D%226043.6802%22%20y2%3D%22-3380.2727%22%20gradientTransform%3D%22matrix%280.735%20-0.735%200.7071%200.7071%20-1988.7635%207027.0347%29%22%3E%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%2392FE9D%22%2F%3E%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%2344D1C2%22%2F%3E%20%20%3C%2FlinearGradient%3E%20%20%3Cpath%20style%3D%22fill%3Aurl%28%23SVGID_6_%29%3B%22%20d%3D%22M100.4%2C106.94l-49.95%2C49.95c-8.35%2C8.35-8.35%2C21.9%2C0%2C30.25l0%2C0c8.35%2C8.35%2C21.9%2C8.35%2C30.25%2C0%20%20%20l49.95-49.95c8.35-8.35%2C8.35-21.9%2C0-30.25l0%2C0C122.3%2C98.59%2C108.76%2C98.59%2C100.4%2C106.94z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var SplightName = function SplightName(_ref) {
  var className = _ref.className,
      size = _ref.size;

  var _useContext = React.useContext(ThemeContext),
      mode = _useContext.mode;

  var width = size + 76;
  var src = mode === 'dark' ? DarkIcon : LightIcon;
  return /*#__PURE__*/React__default["default"].createElement("img", {
    style: {
      width: "".concat(width, "px"),
      height: "".concat(size, "px")
    },
    src: src,
    alt: "splight",
    className: className
  });
};

SplightName.defaultProps = {
  size: 36
};

var Icon = "4ee497db3f133c2a.svg";

var SplightRounded = function SplightRounded(_ref) {
  var className = _ref.className,
      size = _ref.size;
  return /*#__PURE__*/React__default["default"].createElement("img", {
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    },
    alt: "splight",
    src: Icon,
    className: className
  });
};

SplightRounded.defaultProps = {
  size: 60
};

var css$4 = ".avatar {\n  border-radius: 3px;\n  width: 44px;\n  height: 44px;\n}\n\n.avatar__initials {\n  background-color: rgb(var(--background));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  border: rgba(var(--color1), 0.3) 2px solid;\n}\n";
n(css$4,{});

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      name = _ref.name,
      className = _ref.className;
  var surname = !!name && name.split(" ").pop();
  return src ? /*#__PURE__*/React__default["default"].createElement("img", {
    src: src,
    alt: name,
    className: "".concat(className, " avatar")
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(className, " avatar avatar__initials")
  }, /*#__PURE__*/React__default["default"].createElement(Typography, {
    variant: "bodyBold"
  }, !!name && name.charAt(0) + " " + surname.charAt(0)));
};

Avatar.defaultProps = {
  name: ''
};

var css$3 = ".toggleSwitch {\n  position: relative;\n  width: 75px;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  text-align: left;\n}\n\n.toggle__switch__checkbox {\n  display: none;\n}\n\n.toggle__switch__label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 0 solid #ccc;\n  border-radius: 20px;\n  margin: 0;\n}\n\n.toggle__switch__inner {\n  display: block;\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n  transition: color 0.3s ease-in 0s;\n}\n\n.toggle__switch__inner::before,\n.toggle__switch__inner::after {\n  display: block;\n  float: left;\n  width: 50%;\n  height: 34px;\n  padding: 0;\n  line-height: 34px;\n  font-size: 14px;\n  font-weight: bold;\n  box-sizing: border-box;\n}\n\n.toggle__switch__inner:before {\n  content: \" \";\n  text-transform: uppercase;\n  padding-left: 10px;\n  background-color: rgb(var(--color1));\n  opacity: 40%;\n}\n\n.toggle__switch__inner[color]:before {\n  background-color: var(--onColor);\n  opacity: 1;\n}\n\n.toggle__switch__inner:after {\n  content: \" \";\n  text-transform: uppercase;\n  padding-left: 10px;\n  background-color: rgb(var(--color1));\n  opacity: 70%;\n  text-align: right;\n}\n\n.toggle__switch__switch {\n  display: block;\n  width: 24px;\n  margin: 5px;\n  background: white;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 40px;\n  border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n}\n\n.toggle__switch__checkbox:checked\n  + .toggle__switch__label\n  .toggle__switch__inner {\n  margin-left: 0;\n}\n\n.toggle__switch__checkbox:checked\n  + .toggle__switch__label\n  .toggle__switch__switch {\n  right: 0px;\n}\n\n.toggleSwitch.lg__switch {\n  width: 60px;\n  height: 30px;\n}\n\n.toggleSwitch.lg__switch .toggle__switch__inner:after,\n.toggleSwitch.lg__switch .toggle__switch__inner:before {\n  content: \"\";\n  height: 30px;\n  line-height: 30px;\n  border-radius: 30px;\n}\n\n.toggleSwitch.lg__switch .toggle__switch__switch {\n  width: 28px;\n  border-radius: 60px;\n  height: 26px;\n  right: 28px;\n  margin: 2px;\n}\n\n.toggleSwitch.md__switch {\n  width: 52px;\n}\n\n.toggleSwitch.md__switch .toggle__switch__inner:after,\n.toggleSwitch.md__switch .toggle__switch__inner:before {\n  content: \"\";\n  height: 25px;\n  line-height: 25px;\n  border-radius: 25px;\n}\n\n.toggleSwitch.md__switch .toggle__switch__switch {\n  width: 22px;\n  height: 22px;\n  border-radius: 25px;\n  right: 26px;\n  margin: 2px;\n}\n\n.toggleSwitch.sm__switch {\n  width: 40px;\n  height: 40px;\n}\n\n.toggleSwitch.sm__switch .toggle__switch__inner:after,\n.toggleSwitch.sm__switch .toggle__switch__inner:before {\n  content: \"\";\n  height: 20px;\n  line-height: 20px;\n}\n\n.toggleSwitch.sm__switch .toggle__switch__inner:after {\n  content: \"\";\n  height: 20px;\n  line-height: 20px;\n}\n\n.toggleSwitch.sm__switch .toggle__switch__switch {\n  width: 16px;\n  height: 16px;\n  right: 20px;\n  margin: 2px;\n}\n\n.toggle__switch__disabled .toggle__switch__inner {\n  background-color: rgba(var(--color1) , 0.2);\n  cursor: not-allowed;\n}\n\n.toggle__switch__disabled .toggle__switch__inner:after {\n  background-color: rgba(var(--color1) , 0.2);\n  cursor: not-allowed;\n}\n\n.toggle__switch__disabled .toggle__switch__inner:before {\n  background-color: rgba(var(--color1) , 0.2);\n  cursor: not-allowed;\n}\n\n.toggle__switch__disabled .toggle__switch__switch {\n  opacity: 20%;\n  cursor: not-allowed;\n}";
n(css$3,{});

var ToggleSwitch = function ToggleSwitch(_ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      color = _ref.color,
      checked = _ref.checked,
      size = _ref.size,
      id = _ref.id;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(className, "\n     toggleSwitch\n     ", "".concat(size, "__switch")).concat(disabled ? " toggle__switch__disabled" : '')
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    className: "toggle__switch__checkbox",
    name: id,
    id: id,
    disabled: disabled,
    onChange: onChange,
    checked: checked
  }), /*#__PURE__*/React__default["default"].createElement("label", {
    className: "toggle__switch__label",
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "toggle__switch__inner",
    color: color,
    style: {
      '--onColor': color
    }
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "toggle__switch__switch"
  })));
};

ToggleSwitch.defaultProps = {
  onChange: function onChange() {},
  size: 'md',
  disabled: false,
  checked: false,
  id: ''
};

var css$2 = ".selectLangComponent {\n    display: flex;\n    border-radius: 19px;\n    padding: 5px 11px;\n    border: 0.5px solid #000;\n    background-color: rgba(var(--primary));\n}\n\n.selectLangButton {\n    background-color: transparent;\n    border: none;\n    text-transform: uppercase;\n    color:rgb(var(--color1));\n    padding: 0;\n}\n\n.addPiped > label {\n    cursor: pointer;  \n    opacity: 30%;\n}\n\n.addPiped::after {\n    content: \"|\";\n    margin: 0 6px;\n}\n\n.selectLangButton:last-child > span:nth-child(1)::after{\n    content: '';\n    margin: 0;\n}\n\n.selectLangButton--active label {\n    opacity: 1;\n}\n\n";
n(css$2,{});

var SelectLang = function SelectLang(_ref) {
  var className = _ref.className,
      languages = _ref.languages,
      _onClick = _ref.onClick,
      selectedLang = _ref.selectedLang;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "selectLangComponent"
  }, languages.map(function (lang, index) {
    return /*#__PURE__*/React__default["default"].createElement("button", {
      key: index,
      className: "".concat(className, " selectLangButton"),
      onClick: function onClick() {
        return _onClick(lang);
      }
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "addPiped ".concat(selectedLang.id === lang.id && "selectLangButton--active")
    }, /*#__PURE__*/React__default["default"].createElement(Typography, {
      variant: "textButton",
      size: 0.6
    }, lang.name)));
  }));
};

SelectLang.defaultProps = {
  selectedLang: {
    id: 1
  },
  onClick: function onClick() {},
  languages: []
};

var css$1 = ".popover {\n  position: relative;\n  margin-top: 1.5rem;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.popover--activo .popover__content {\n  display: flex;\n}\n\n.popover__content {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 16px;\n  position: absolute;\n  z-index: 10;\n  border: rgba(var(--color1), 0.2) 0.2px solid;\n  background-color: rgb(var(--secondary));\n  padding: 1.5rem;\n  width: max-content;\n  transform: translate(0, 6px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__content--left {\n  left: 0;\n}\n\n.popover__content--right {\n  right: 0;\n}\n";
n(css$1,{});

var Popover = function Popover(_ref) {
  var displayLabel = _ref.displayLabel,
      position = _ref.position,
      children = _ref.children,
      className = _ref.className;
  var ref = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      isPopoverOpen = _useState2[0],
      setIsPopoverOpen = _useState2[1];

  React.useEffect(function () {
    var checkIfClickedOutside = function checkIfClickedOutside(e) {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isPopoverOpen && ref.current && !ref.current.contains(e.target)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return function () {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isPopoverOpen]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    className: "".concat(className, " popover ").concat(isPopoverOpen && "popover--activo")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "popover__view",
    onClick: function onClick() {
      return setIsPopoverOpen(!isPopoverOpen);
    }
  }, displayLabel), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "popover__content ".concat(position === "left" ? "popover__content--left" : "popover__content--right")
  }, children));
};

Popover.defaultProps = {
  displayLabel: {},
  position: "right",
  children: []
};

var css = ".navbar__container{\n    display: flex;\n    background-color: rgb(var(--secondary));\n    justify-content: space-between;\n    align-items: center;\n    padding: 8px 30px 2px 10px;\n}\n\n.navbar__icon {\n    margin: 0;\n}\n\n.navbar__pages__wrapper {\n    display: flex;\n    margin: auto;\n    list-style: none;\n}\n\n.navbar__pages__item {\n    margin-right: 2.25rem;\n    opacity: 60%;\n}\n\n.navbar__pages__item label {\n    cursor: pointer;\n    text-transform: capitalize;\n}\n\n.navbar__pages__item--active {\n    opacity: 1;\n}";
n(css,{});

var Header = function Header(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      pages = _ref.pages,
      user = _ref.user,
      _onClick = _ref.onClick,
      currentPage = _ref.currentPage;
  return /*#__PURE__*/React__default["default"].createElement("nav", {
    className: "".concat(className, " navbar__container")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "navbar__icon"
  }, icon), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "navbar__pages"
  }, /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "navbar__pages__wrapper"
  }, pages.map(function (page, index) {
    return /*#__PURE__*/React__default["default"].createElement("li", {
      className: "navbar__pages__item ".concat(page.id === currentPage.id && 'navbar__pages__item--active'),
      key: index,
      onClick: function onClick() {
        return _onClick(page);
      }
    }, /*#__PURE__*/React__default["default"].createElement(Typography, {
      variant: "".concat(page.id === currentPage.id ? 'bodyBold' : 'body')
    }, page.name));
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "navbar__user"
  }, user));
};

Header.defaultProps = {
  icon: /*#__PURE__*/React__default["default"].createElement(SplightName, null),
  pages: [],
  user: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null),
  onClick: function onClick() {},
  currentPage: {
    id: 1
  }
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
  Avatar: Avatar,
  Button: Button,
  Typography: Typography,
  ThemeContextProvider: ThemeContextProvider,
  ThemeContext: ThemeContext,
  theme: theme,
  SplightRoundedIcon: SplightRounded,
  SplightNameIcon: SplightName,
  ToggleSwitch: ToggleSwitch,
  SelectLang: SelectLang,
  Popover: Popover,
  Header: Header
};

module.exports = index;
