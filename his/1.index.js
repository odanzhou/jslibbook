/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = [
    ,
    /* 0 */ /* 1 */
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      const type = __webpack_require__(2);

      function clone(source) {
        const t = type(source);
        if (t !== "object" && t !== "array") {
          return source;
        }
        let target;
        if (t === "object") {
          target = {};
          for (let i in source) {
            if (source.hasOwnProperty(i)) {
              target[i] = clone(source[i]); // 递归复制
            }
          }
        } else {
          target = [];
          for (let i = 0; i < source.length; i++) {
            target[i] = clone(source[i]); // 递归复制
          }
        }
        return target;
      }

      module.exports = clone;

      /***/
    },
    /* 2 */
    /***/ (module) => {
      function type(data) {
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
      }

      module.exports = type;

      /***/
    },
    /******/
  ];
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    const clone = __webpack_require__(1);

    let a = { c: 1 };

    let b = clone(a);
    a.c = 2;
    console.log("a.c", a.c);
    console.log("b.c", b.c);
  })();

  /******/
})();
