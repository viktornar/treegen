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