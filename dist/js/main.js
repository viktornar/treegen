(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.main = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @desc this is the main entry point
 * @author v.nareiko
 */

"use strict";

let TreeGen = require('./treegen/TreeGen.js');
let treeGen = new TreeGen($("#app"));
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
              <button id="btn-${ nodeId }-add" class="btn btn-default">Add</button>
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
              <button id="btn-${ nodeId }-add" class="btn btn-default">Add</button>
              <button id="btn-${ nodeId }-remove" class="btn btn-default">Remove</button>
            </div>`;
  }
};
},{}],3:[function(require,module,exports){
/**
 * @desc TreeGen class for creating dynamic tree as component in given container.
 * @author v.nareiko
 */

"use strict";

let randomString = require("../utils/StringUtils.js").randomString;
let getChildNodeTemplate = require("../template/Nodes.js").getChildNodeTemplate;
let getRootNodeTemplate = require("../template/Nodes.js").getRootNodeTemplate;

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

    node.find(`#btn-${ nodeId }-add`).on("click", e => {
      this._addNode($(e.currentTarget).parent());
    });

    node.find(`#btn-${ nodeId }-remove`).on("click", e => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9qcy9tYWluLmpzIiwiYnVpbGQvanMvdGVtcGxhdGUvTm9kZXMuanMiLCJidWlsZC9qcy90cmVlZ2VuL1RyZWVHZW4uanMiLCJidWlsZC9qcy91dGlscy9TdHJpbmdVdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQGRlc2MgdGhpcyBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludFxyXG4gKiBAYXV0aG9yIHYubmFyZWlrb1xyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmxldCBUcmVlR2VuID0gcmVxdWlyZSgnLi90cmVlZ2VuL1RyZWVHZW4uanMnKTtcbmxldCB0cmVlR2VuID0gbmV3IFRyZWVHZW4oJChcIiNhcHBcIikpOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRlbXBsYXRlcyBmb3IgZ2VuZXJhdGluZyBkeW5hbWljIGRvbSBlbGVtZW50c1xyXG4gKiBAdHlwZSB7e2dldFJvb3ROb2RlVGVtcGxhdGU6ICgocDE6KikpLCBnZXRDaGlsZE5vZGVUZW1wbGF0ZTogKChwMToqLCBwMjoqKSl9fVxyXG4gKiBAYXV0aG9yIHYubmFyZWlrb1xyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcclxuICAgKiBSb290IG5vZGUgdGVtcGxhdGVcclxuICAgKiBAcGFyYW0gbm9kZUlkIC0gdGhlIGlkIG9mIG5vZGUgd2hlcmUgcm9vdCBkb20gbXVzdCBiZSBwbGFjZWRcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqL1xuICBcImdldFJvb3ROb2RlVGVtcGxhdGVcIjogbm9kZUlkID0+IHtcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCIkeyBub2RlSWQgfVwiIGNsYXNzPVwicm93IHRyZWUtZ2VuLXBhcmVudFwiID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi0keyBub2RlSWQgfS1hZGRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgfSxcbiAgLyoqXHJcbiAgICogQ2hpbGQgbm9kZSB0ZW1wbGF0ZVxyXG4gICAqIEBwYXJhbSBub2RlSWQgLSB0aGUgaWQgb2Ygbm9kZSB3aGVyZSByb290IGRvbSBtdXN0IGJlIHBsYWNlZFxyXG4gICAqIEBwYXJhbSBsYWJlbCAtIGxhYmVsIHRvIGRpc3BsYXkgYWZ0ZXIgdXNlciBhZGQgdGV4dCBpbiBpbnB1dCBmb3JtIGVsZW1lbnQuXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cbiAgXCJnZXRDaGlsZE5vZGVUZW1wbGF0ZVwiOiAobm9kZUlkLCBsYWJlbCkgPT4ge1xuICAgIHJldHVybiBgPGRpdiBpZD1cIiR7IG5vZGVJZCB9XCIgY2xhc3M9XCJyb3cgdHJlZS1nZW4tY2hpbGRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyZWUtZ2VuLWNpcmNsZVwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0LSR7IG5vZGVJZCB9XCIgY2xhc3M9XCJ0cmVlLWdlbi1pbmxpbmUtbGFiZWxcIj4keyBsYWJlbCB9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImlucHV0LSR7IG5vZGVJZCB9XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidG4tJHsgbm9kZUlkIH0tYWRkXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi0keyBub2RlSWQgfS1yZW1vdmVcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxufTsiLCIvKipcclxuICogQGRlc2MgVHJlZUdlbiBjbGFzcyBmb3IgY3JlYXRpbmcgZHluYW1pYyB0cmVlIGFzIGNvbXBvbmVudCBpbiBnaXZlbiBjb250YWluZXIuXHJcbiAqIEBhdXRob3Igdi5uYXJlaWtvXHJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxubGV0IHJhbmRvbVN0cmluZyA9IHJlcXVpcmUoXCIuLi91dGlscy9TdHJpbmdVdGlscy5qc1wiKS5yYW5kb21TdHJpbmc7XG5sZXQgZ2V0Q2hpbGROb2RlVGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vdGVtcGxhdGUvTm9kZXMuanNcIikuZ2V0Q2hpbGROb2RlVGVtcGxhdGU7XG5sZXQgZ2V0Um9vdE5vZGVUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuLi90ZW1wbGF0ZS9Ob2Rlcy5qc1wiKS5nZXRSb290Tm9kZVRlbXBsYXRlO1xuXG5jbGFzcyBUcmVlR2VuIHtcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBUcmVlR2VuIGJ5IGdpdmVuIGNvbnRhaW5lciBub2RlLlxyXG4gICAqIEBwYXJhbSBjb250YWluZXJOb2RlIC0gdGhlIG5vZGUgd2hlcmUgZHluYW1pYyBlbGVtZW50cyB3aWxsIGJlIHBsYWNlZC5cclxuICAgKi9cbiAgY29uc3RydWN0b3IoY29udGFpbmVyTm9kZSkge1xuICAgIGxldCByb290Tm9kZSA9ICQoZ2V0Um9vdE5vZGVUZW1wbGF0ZShgcm9vdC0keyByYW5kb21TdHJpbmcoNCkgfWApKTtcbiAgICBjb250YWluZXJOb2RlLmFwcGVuZChyb290Tm9kZSk7XG5cbiAgICByb290Tm9kZS5maW5kKFwiYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICB0aGlzLl9hZGROb2RlKCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKSk7XG4gICAgfSk7XG4gIH1cblxuICBfcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgbm9kZS5oaWRlKDMwMCwgKCkgPT4ge1xuICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9hZGROb2RlKG5vZGUpIHtcbiAgICBsZXQgaW5uZXJUZXh0ID0gbm9kZS5maW5kKFwiaW5wdXRcIikudmFsKCkgfHwgXCJcIjtcbiAgICB0aGlzLl9nZXROb2RlKGlubmVyVGV4dCkuaGlkZSgpLmFwcGVuZFRvKG5vZGUpLnNob3coNDAwKTtcbiAgICBub2RlLmZpbmQoXCJpbnB1dFwiKS52YWwoXCJcIik7XG4gIH1cblxuICBfZ2V0Tm9kZShsYWJlbCkge1xuICAgIGxldCBub2RlSWQgPSBcImNoaWxkTm9kZS1cIiArIHJhbmRvbVN0cmluZyg0KTtcbiAgICBsZXQgbm9kZSA9ICQoZ2V0Q2hpbGROb2RlVGVtcGxhdGUobm9kZUlkLCBsYWJlbCkpO1xuXG4gICAgbm9kZS5maW5kKGAjYnRuLSR7IG5vZGVJZCB9LWFkZGApLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICB0aGlzLl9hZGROb2RlKCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKSk7XG4gICAgfSk7XG5cbiAgICBub2RlLmZpbmQoYCNidG4tJHsgbm9kZUlkIH0tcmVtb3ZlYCkub24oXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIHRoaXMuX3JlbW92ZU5vZGUoJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJlZUdlbjsiLCIvKipcclxuICogQGRlc2MgSGVscGVyIG1vZHVsZSBmb3IgbWFraW5nIGxpdmUgZWFzaWVyIDopXHJcbiAqIEB0eXBlIHt7cmFuZG9tU3RyaW5nOiBtb2R1bGUuZXhwb3J0cy5cInJhbmRvbVN0cmluZ1wifX1cclxuICogQGF1dGhvciB2Lm5hcmVpa29cclxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLyoqXHJcbiAgICogQHBhcmFtIGxlbmd0aCAtIHRoZSBsZW5ndGggb2YgaWQgcmFuZG9tIHN1ZmZpeC5cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqL1xuICBcInJhbmRvbVN0cmluZ1wiOiBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgbGV0IGNoYXJzID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hUWmFiY2RlZmdoaWtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKTtcblxuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICBsZW5ndGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpO1xuICAgIH1cblxuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHIgKz0gY2hhcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbn07Il19
