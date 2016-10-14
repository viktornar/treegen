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
  "getRootNodeTemplate": (nodeId) => {
    return `<div id="${nodeId}" class="row tree-gen-parent" >
              <div class="col-xs-4">
                <input type="text" class="form-control" />
              </div>
              <button class="btn btn-default">Add</button>
            </div>`
  },
  /**
   * Child node template
   * @param nodeId - the id of node where root dom must be placed
   * @param label - label to display after user add text in input form element.
   * @returns {string}
   */
  "getChildNodeTemplate": (nodeId, label) => {
    return `<div id="${nodeId}" class="row tree-gen-child">
              
              <div class="tree-gen-circle">
              </div>
              <label for="input-${nodeId}" class="tree-gen-inline-label">${label}</label>
              <div class="col-xs-4">
                <input type="text" class="form-control" id="input-${nodeId}" />
              </div>
              <button class="btn btn-default">Add</button>
              <button class="btn btn-default">Remove</button>
            </div>`;
  }
};
