"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/feedback";
exports.ids = ["pages/api/feedback"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/feedback.js":
/*!*******************************!*\
  !*** ./pages/api/feedback.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        console.log(\"req body\", req.body);\n        const emailText = req.body.email;\n        const feedabackText = req.body.feedback;\n        const newFeedback = {\n            id: new Date().toISOString(),\n            email: emailText,\n            feedback: feedabackText\n        };\n        //store in database\n        const filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\", \"feedback.json\");\n        const fileData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath);\n        const data = JSON.parse(fileData);\n        data.push(newFeedback);\n        console.log(\"mtnuma stex\", data);\n        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            messange: \"yasamani tsari tak\",\n            feedback: newFeedback\n        });\n    } else {\n        res.status(200).json({\n            messange: \"barlus dzez\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmVlZGJhY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFDSjtBQUVwQixTQUFTRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN6QixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QkMsUUFBUUMsR0FBRyxDQUFDLFlBQVlKLElBQUlLLElBQUk7UUFDaEMsTUFBTUMsWUFBWU4sSUFBSUssSUFBSSxDQUFDRSxLQUFLO1FBQ2hDLE1BQU1DLGdCQUFnQlIsSUFBSUssSUFBSSxDQUFDSSxRQUFRO1FBRXZDLE1BQU1DLGNBQWM7WUFDbEJDLElBQUksSUFBSUMsT0FBT0MsV0FBVztZQUMxQk4sT0FBT0Q7WUFDUEcsVUFBVUQ7UUFDWjtRQUVBLG1CQUFtQjtRQUNuQixNQUFNTSxXQUFXakIsZ0RBQVMsQ0FBQ21CLFFBQVFDLEdBQUcsSUFBSSxRQUFRO1FBQ2xELE1BQU1DLFdBQVdwQixzREFBZSxDQUFDZ0I7UUFDakMsTUFBTU0sT0FBT0MsS0FBS0MsS0FBSyxDQUFDSjtRQUN4QkUsS0FBS0csSUFBSSxDQUFDYjtRQUNWUCxRQUFRQyxHQUFHLENBQUMsZUFBZWdCO1FBQzNCdEIsdURBQWdCLENBQUNnQixVQUFVTyxLQUFLSSxTQUFTLENBQUNMO1FBRTFDbkIsSUFDR3lCLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7WUFBRUMsVUFBVTtZQUFzQm5CLFVBQVVDO1FBQVk7SUFDbEUsT0FBTztRQUNMVCxJQUFJeUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxVQUFVO1FBQWM7SUFDakQsQ0FBQztBQUNIO0FBRUEsaUVBQWU3QixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9mZWVkYmFjay5qcz9mN2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXEgYm9keVwiLCByZXEuYm9keSk7XG4gICAgY29uc3QgZW1haWxUZXh0ID0gcmVxLmJvZHkuZW1haWw7XG4gICAgY29uc3QgZmVlZGFiYWNrVGV4dCA9IHJlcS5ib2R5LmZlZWRiYWNrO1xuXG4gICAgY29uc3QgbmV3RmVlZGJhY2sgPSB7XG4gICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgZW1haWw6IGVtYWlsVGV4dCxcbiAgICAgIGZlZWRiYWNrOiBmZWVkYWJhY2tUZXh0LFxuICAgIH07XG5cbiAgICAvL3N0b3JlIGluIGRhdGFiYXNlXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiZmVlZGJhY2suanNvblwiKTtcbiAgICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZmlsZURhdGEpO1xuICAgIGRhdGEucHVzaChuZXdGZWVkYmFjayk7XG4gICAgY29uc29sZS5sb2coXCJtdG51bWEgc3RleFwiLCBkYXRhKTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICByZXNcbiAgICAgIC5zdGF0dXMoMjAxKVxuICAgICAgLmpzb24oeyBtZXNzYW5nZTogXCJ5YXNhbWFuaSB0c2FyaSB0YWtcIiwgZmVlZGJhY2s6IG5ld0ZlZWRiYWNrIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FuZ2U6IFwiYmFybHVzIGR6ZXpcIiB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbInBhdGgiLCJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImVtYWlsVGV4dCIsImVtYWlsIiwiZmVlZGFiYWNrVGV4dCIsImZlZWRiYWNrIiwibmV3RmVlZGJhY2siLCJpZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlRGF0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/feedback.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/feedback.js"));
module.exports = __webpack_exports__;

})();