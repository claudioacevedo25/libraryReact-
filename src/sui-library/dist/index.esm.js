import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, useEffect } from 'react';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".buttonComponent {\n  border-radius: 3px;\n  padding: 0.3rem 0.5rem;\n  cursor: pointer;\n  border: none;\n  transition: all 0.3s ease-out;\n  box-shadow: #272727b0 1px 1px 1px, #272727b0 -1px -1px 1px;\n}\n.buttonComponent:hover {\n  box-shadow: #272727b0 1px 1px 3px, #272727b0 -1px -1px 3px;\n}\n.buttonComponent:active {\n  opacity: 0.8;\n}\n";
n(css,{});

var AwesomeButton = function AwesomeButton(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  useEffect(function () {
    if (props.variant) {
      if (props.variant === "primary") {
        setColor("#0077ff");
      } else if (props.variant === "secondary") {
        setColor("#ff0062");
      } else if (props.variant === "success") {
        setColor("#0f8000");
      } else {
        setColor("#949393");
      }
    }
  }, []);
  var children = props.children;
  return /*#__PURE__*/React.createElement("button", {
    className: "buttonComponent",
    style: {
      backgroundColor: color
    }
  }, children.toUpperCase());
};

var AwesomeLabel = function AwesomeLabel(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("label", null, children.toUpperCase());
};

var index = {
  AwesomeButton: AwesomeButton,
  AwesomeLabel: AwesomeLabel
};

export { index as default };
