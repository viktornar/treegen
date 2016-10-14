(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.main = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @desc this is the main entry point
 * @author v.nareiko
 */

"use strict";

let TreeGen = require('./treegen/TreeGen.js');
new TreeGen($("#app"));
},{"./treegen/TreeGen.js":3}],2:[function(require,module,exports){
/**
 * Returns templates for generating dynamic dom elements
 * @type {{getRootNodeTemplate: ((p1:*)), getChildNodeTemplate: ((p1:*, p2:*))}}
 * @author v.nareiko
 */

"use strict";

module.exports = {
  /**
   * Root node template
   * @param nodeId - the id of node where root dom must be placed
   * @returns {string}
   */
  "getRootNodeTemplate": nodeId => {
    return `<div id="${ nodeId }" class="row tree-gen-parent" >
              <div class="col-xs-4">
                <input type="text" class="form-control" />
              </div>
              <button class="btn btn-default">Add</button>
            </div>`;
  },
  /**
   * Child node template
   * @param nodeId - the id of node where root dom must be placed
   * @param label - label to display after user add text in input form element.
   * @returns {string}
   */
  "getChildNodeTemplate": (nodeId, label) => {
    return `<div id="${ nodeId }" class="row tree-gen-child">
              
              <div class="tree-gen-circle">
              </div>
              <label for="input-${ nodeId }" class="tree-gen-inline-label">${ label }</label>
              <div class="col-xs-4">
                <input type="text" class="form-control" id="input-${ nodeId }" />
              </div>
              <button class="btn btn-default">Add</button>
              <button class="btn btn-default">Remove</button>
            </div>`;
  }
};
},{}],3:[function(require,module,exports){
/**
 * @desc TreeGen class for creating dynamic tree as component in given container.
 * @author v.nareiko
 */

"use strict";

var randomString = require("../utils/StringUtils.js").randomString;
var getChildNodeTemplate = require("../template/Nodes.js").getChildNodeTemplate;
var getRootNodeTemplate = require("../template/Nodes.js").getRootNodeTemplate;

class TreeGen {
  /**
   * Initialize TreeGen by given container node.
   * @param containerNode - the node where dynamic elements will be placed.
   */
  constructor(containerNode) {
    let rootNode = $(getRootNodeTemplate(`root-${ randomString(4) }`));
    containerNode.append(rootNode);

    rootNode.find("button").on("click", e => {
      this._addNode($(e.currentTarget).parent());
    });
  }

  _removeNode(node) {
    node.hide(300, () => {
      $(this).remove();
    });
  }

  _addNode(node) {
    let innerText = node.find("input").val() || "";
    this._getNode(innerText).hide().appendTo(node).show(400);
    node.find("input").val("");
  }

  _getNode(label) {
    let nodeId = "childNode-" + randomString(4);
    let node = $(getChildNodeTemplate(nodeId, label));
    // TODO: find better way to select add and remove node buttons. :nth-child(4) looks like a selector with a magic number.
    node.find(":nth-child(4)").on("click", e => {
      this._addNode($(e.currentTarget).parent());
    });

    node.find(":nth-child(5)").on("click", e => {
      this._removeNode($(e.currentTarget).parent());
    });

    return node;
  }
}

module.exports = TreeGen;
},{"../template/Nodes.js":2,"../utils/StringUtils.js":4}],4:[function(require,module,exports){
/**
 * @desc Helper module for making live easier :)
 * @type {{randomString: module.exports."randomString"}}
 * @author v.nareiko
 */

"use strict";

module.exports = {
  /**
   * @param length - the length of id random suffix.
   * @returns {string}
   */
  "randomString": function (length) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (!length) {
      length = Math.floor(Math.random() * chars.length);
    }

    let str = '';
    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }
};
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9qcy9tYWluLmpzIiwiYnVpbGQvanMvdGVtcGxhdGUvTm9kZXMuanMiLCJidWlsZC9qcy90cmVlZ2VuL1RyZWVHZW4uanMiLCJidWlsZC9qcy91dGlscy9TdHJpbmdVdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBAZGVzYyB0aGlzIGlzIHRoZSBtYWluIGVudHJ5IHBvaW50XHJcbiAqIEBhdXRob3Igdi5uYXJlaWtvXHJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxubGV0IFRyZWVHZW4gPSByZXF1aXJlKCcuL3RyZWVnZW4vVHJlZUdlbi5qcycpO1xubmV3IFRyZWVHZW4oJChcIiNhcHBcIikpOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRlbXBsYXRlcyBmb3IgZ2VuZXJhdGluZyBkeW5hbWljIGRvbSBlbGVtZW50c1xyXG4gKiBAdHlwZSB7e2dldFJvb3ROb2RlVGVtcGxhdGU6ICgocDE6KikpLCBnZXRDaGlsZE5vZGVUZW1wbGF0ZTogKChwMToqLCBwMjoqKSl9fVxyXG4gKiBAYXV0aG9yIHYubmFyZWlrb1xyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcclxuICAgKiBSb290IG5vZGUgdGVtcGxhdGVcclxuICAgKiBAcGFyYW0gbm9kZUlkIC0gdGhlIGlkIG9mIG5vZGUgd2hlcmUgcm9vdCBkb20gbXVzdCBiZSBwbGFjZWRcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqL1xuICBcImdldFJvb3ROb2RlVGVtcGxhdGVcIjogbm9kZUlkID0+IHtcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCIkeyBub2RlSWQgfVwiIGNsYXNzPVwicm93IHRyZWUtZ2VuLXBhcmVudFwiID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgfSxcbiAgLyoqXHJcbiAgICogQ2hpbGQgbm9kZSB0ZW1wbGF0ZVxyXG4gICAqIEBwYXJhbSBub2RlSWQgLSB0aGUgaWQgb2Ygbm9kZSB3aGVyZSByb290IGRvbSBtdXN0IGJlIHBsYWNlZFxyXG4gICAqIEBwYXJhbSBsYWJlbCAtIGxhYmVsIHRvIGRpc3BsYXkgYWZ0ZXIgdXNlciBhZGQgdGV4dCBpbiBpbnB1dCBmb3JtIGVsZW1lbnQuXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cbiAgXCJnZXRDaGlsZE5vZGVUZW1wbGF0ZVwiOiAobm9kZUlkLCBsYWJlbCkgPT4ge1xuICAgIHJldHVybiBgPGRpdiBpZD1cIiR7IG5vZGVJZCB9XCIgY2xhc3M9XCJyb3cgdHJlZS1nZW4tY2hpbGRcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmVlLWdlbi1jaXJjbGVcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dC0keyBub2RlSWQgfVwiIGNsYXNzPVwidHJlZS1nZW4taW5saW5lLWxhYmVsXCI+JHsgbGFiZWwgfTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnB1dC0keyBub2RlSWQgfVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gIH1cbn07IiwiLyoqXHJcbiAqIEBkZXNjIFRyZWVHZW4gY2xhc3MgZm9yIGNyZWF0aW5nIGR5bmFtaWMgdHJlZSBhcyBjb21wb25lbnQgaW4gZ2l2ZW4gY29udGFpbmVyLlxyXG4gKiBAYXV0aG9yIHYubmFyZWlrb1xyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciByYW5kb21TdHJpbmcgPSByZXF1aXJlKFwiLi4vdXRpbHMvU3RyaW5nVXRpbHMuanNcIikucmFuZG9tU3RyaW5nO1xudmFyIGdldENoaWxkTm9kZVRlbXBsYXRlID0gcmVxdWlyZShcIi4uL3RlbXBsYXRlL05vZGVzLmpzXCIpLmdldENoaWxkTm9kZVRlbXBsYXRlO1xudmFyIGdldFJvb3ROb2RlVGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vdGVtcGxhdGUvTm9kZXMuanNcIikuZ2V0Um9vdE5vZGVUZW1wbGF0ZTtcblxuY2xhc3MgVHJlZUdlbiB7XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgVHJlZUdlbiBieSBnaXZlbiBjb250YWluZXIgbm9kZS5cclxuICAgKiBAcGFyYW0gY29udGFpbmVyTm9kZSAtIHRoZSBub2RlIHdoZXJlIGR5bmFtaWMgZWxlbWVudHMgd2lsbCBiZSBwbGFjZWQuXHJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lck5vZGUpIHtcbiAgICBsZXQgcm9vdE5vZGUgPSAkKGdldFJvb3ROb2RlVGVtcGxhdGUoYHJvb3QtJHsgcmFuZG9tU3RyaW5nKDQpIH1gKSk7XG4gICAgY29udGFpbmVyTm9kZS5hcHBlbmQocm9vdE5vZGUpO1xuXG4gICAgcm9vdE5vZGUuZmluZChcImJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgdGhpcy5fYWRkTm9kZSgkKGUuY3VycmVudFRhcmdldCkucGFyZW50KCkpO1xuICAgIH0pO1xuICB9XG5cbiAgX3JlbW92ZU5vZGUobm9kZSkge1xuICAgIG5vZGUuaGlkZSgzMDAsICgpID0+IHtcbiAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBfYWRkTm9kZShub2RlKSB7XG4gICAgbGV0IGlubmVyVGV4dCA9IG5vZGUuZmluZChcImlucHV0XCIpLnZhbCgpIHx8IFwiXCI7XG4gICAgdGhpcy5fZ2V0Tm9kZShpbm5lclRleHQpLmhpZGUoKS5hcHBlbmRUbyhub2RlKS5zaG93KDQwMCk7XG4gICAgbm9kZS5maW5kKFwiaW5wdXRcIikudmFsKFwiXCIpO1xuICB9XG5cbiAgX2dldE5vZGUobGFiZWwpIHtcbiAgICBsZXQgbm9kZUlkID0gXCJjaGlsZE5vZGUtXCIgKyByYW5kb21TdHJpbmcoNCk7XG4gICAgbGV0IG5vZGUgPSAkKGdldENoaWxkTm9kZVRlbXBsYXRlKG5vZGVJZCwgbGFiZWwpKTtcbiAgICAvLyBUT0RPOiBmaW5kIGJldHRlciB3YXkgdG8gc2VsZWN0IGFkZCBhbmQgcmVtb3ZlIG5vZGUgYnV0dG9ucy4gOm50aC1jaGlsZCg0KSBsb29rcyBsaWtlIGEgc2VsZWN0b3Igd2l0aCBhIG1hZ2ljIG51bWJlci5cbiAgICBub2RlLmZpbmQoXCI6bnRoLWNoaWxkKDQpXCIpLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICB0aGlzLl9hZGROb2RlKCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKSk7XG4gICAgfSk7XG5cbiAgICBub2RlLmZpbmQoXCI6bnRoLWNoaWxkKDUpXCIpLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICB0aGlzLl9yZW1vdmVOb2RlKCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyZWVHZW47IiwiLyoqXHJcbiAqIEBkZXNjIEhlbHBlciBtb2R1bGUgZm9yIG1ha2luZyBsaXZlIGVhc2llciA6KVxyXG4gKiBAdHlwZSB7e3JhbmRvbVN0cmluZzogbW9kdWxlLmV4cG9ydHMuXCJyYW5kb21TdHJpbmdcIn19XHJcbiAqIEBhdXRob3Igdi5uYXJlaWtvXHJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKlxyXG4gICAqIEBwYXJhbSBsZW5ndGggLSB0aGUgbGVuZ3RoIG9mIGlkIHJhbmRvbSBzdWZmaXguXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cbiAgXCJyYW5kb21TdHJpbmdcIjogZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIGxldCBjaGFycyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYVFphYmNkZWZnaGlrbG1ub3BxcnN0dXZ3eHl6Jy5zcGxpdCgnJyk7XG5cbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc3RyICs9IGNoYXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG59OyJdfQ==
