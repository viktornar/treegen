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
    let rootNode = $(getRootNodeTemplate(`root-${randomString(4)}`));
    containerNode.append(rootNode);

    rootNode.find("button").on("click", (e) => {
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
    node.find(":nth-child(4)").on("click", (e) => {
      this._addNode($(e.currentTarget).parent());
    });

    node.find(":nth-child(5)").on("click", (e) => {
      this._removeNode($(e.currentTarget).parent());
    });

    return node;
  }
}

module.exports = TreeGen;
