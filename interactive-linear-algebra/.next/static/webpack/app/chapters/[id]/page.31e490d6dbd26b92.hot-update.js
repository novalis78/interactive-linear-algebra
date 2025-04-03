"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chapters/[id]/page",{

/***/ "(app-pages-browser)/./src/components/Exercise.tsx":
/*!*************************************!*\
  !*** ./src/components/Exercise.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MathDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MathDisplay */ \"(app-pages-browser)/./src/components/MathDisplay.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Exercise = (param)=>{\n    let { id, question, mathFormula, expectedAnswer, hint } = param;\n    _s();\n    const [userAnswer, setUserAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isCorrect, setIsCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showHint, setShowHint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [attempts, setAttempts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [celebration, setCelebration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const checkAnswer = ()=>{\n        const normalizedUserAnswer = userAnswer.trim().toLowerCase();\n        const normalizedExpectedAnswer = expectedAnswer.trim().toLowerCase();\n        const correct = normalizedUserAnswer === normalizedExpectedAnswer;\n        setIsCorrect(correct);\n        setAttempts(attempts + 1);\n        // If correct, trigger celebration\n        if (correct) {\n            setCelebration(true);\n            setTimeout(()=>setCelebration(false), 3000);\n            // Save progress to localStorage\n            const progress = JSON.parse(localStorage.getItem(\"progress\") || \"{}\");\n            progress[id] = true;\n            localStorage.setItem(\"progress\", JSON.stringify(progress));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"exercise-box relative\",\n        children: [\n            celebration && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 pointer-events-none overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce\",\n                    children: \"\\uD83C\\uDF89\"\n                }, void 0, false, {\n                    fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl font-semibold mb-3\",\n                        children: \"Practice Problem\"\n                    }, void 0, false, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-3 text-xl\",\n                        children: question\n                    }, void 0, false, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    mathFormula && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-6 p-4 bg-blue-50 rounded-lg flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MathDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            formula: mathFormula\n                        }, void 0, false, {\n                            fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"answer-\".concat(id),\n                        className: \"block text-lg font-medium mb-2\",\n                        children: \"Your Answer:\"\n                    }, void 0, false, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"answer-\".concat(id),\n                        type: \"text\",\n                        value: userAnswer,\n                        onChange: (e)=>setUserAnswer(e.target.value),\n                        placeholder: \"Type your answer here...\",\n                        className: \"solution-input text-2xl\",\n                        disabled: isCorrect === true,\n                        onKeyPress: (e)=>e.key === \"Enter\" && checkAnswer()\n                    }, void 0, false, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap justify-between mt-4 gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: checkAnswer,\n                                disabled: isCorrect === true || userAnswer.trim() === \"\",\n                                className: \"px-6 py-3 rounded-lg font-medium text-lg \".concat(isCorrect === true ? \"bg-green-500 text-white\" : userAnswer.trim() === \"\" ? \"bg-gray-300 cursor-not-allowed\" : \"bg-blue-600 hover:bg-blue-700 text-white\"),\n                                children: isCorrect === true ? \"Correct! \\uD83C\\uDF89\" : \"Check Answer\"\n                            }, void 0, false, {\n                                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            hint && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setShowHint(!showHint),\n                                className: \"px-6 py-3 bg-yellow-100 hover:bg-yellow-200 rounded-lg text-yellow-800 font-medium text-lg\",\n                                children: showHint ? \"Hide Hint\" : \"Need a Hint?\"\n                            }, void 0, false, {\n                                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    isCorrect === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 p-3 bg-red-50 border border-red-200 rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-600\",\n                            children: attempts === 1 ? \"That's not quite right. Try again!\" : attempts === 2 ? \"Still not correct. Maybe try a different approach?\" : \"Keep trying! Consider using the hint if you're stuck.\"\n                        }, void 0, false, {\n                            fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, undefined),\n                    showHint && hint && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-semibold mb-1\",\n                                children: \"Hint:\"\n                            }, void 0, false, {\n                                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-yellow-800\",\n                                children: hint\n                            }, void 0, false, {\n                                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined),\n                    isCorrect === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6 p-4 bg-green-50 border border-green-200 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-semibold text-green-800 mb-1\",\n                                children: \"Great job!\"\n                            }, void 0, false, {\n                                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-green-700\",\n                                children: \"You've mastered this concept. Ready for the next challenge?\"\n                            }, void 0, false, {\n                                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/llopin/Projects/interactive-linear-algebra/interactive-linear-algebra/src/components/Exercise.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Exercise, \"9kALDlFZzBACgyo5Ihxxv1eO3ow=\");\n_c = Exercise;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Exercise);\nvar _c;\n$RefreshReg$(_c, \"Exercise\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0V4ZXJjaXNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXFDO0FBQ0c7QUFVeEMsTUFBTUUsV0FBOEI7UUFBQyxFQUNuQ0MsRUFBRSxFQUNGQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsY0FBYyxFQUNkQyxJQUFJLEVBQ0w7O0lBQ0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBaUI7SUFDM0QsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNnQixhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNa0IsY0FBYztRQUNsQixNQUFNQyx1QkFBdUJYLFdBQVdZLElBQUksR0FBR0MsV0FBVztRQUMxRCxNQUFNQywyQkFBMkJoQixlQUFlYyxJQUFJLEdBQUdDLFdBQVc7UUFFbEUsTUFBTUUsVUFBVUoseUJBQXlCRztRQUN6Q1gsYUFBYVk7UUFDYlIsWUFBWUQsV0FBVztRQUV2QixrQ0FBa0M7UUFDbEMsSUFBSVMsU0FBUztZQUNYTixlQUFlO1lBQ2ZPLFdBQVcsSUFBTVAsZUFBZSxRQUFRO1lBRXhDLGdDQUFnQztZQUNoQyxNQUFNUSxXQUFXQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxlQUFlO1lBQ2hFSixRQUFRLENBQUN0QixHQUFHLEdBQUc7WUFDZnlCLGFBQWFFLE9BQU8sQ0FBQyxZQUFZSixLQUFLSyxTQUFTLENBQUNOO1FBQ2xEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7WUFDWmpCLDZCQUNDLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUErRTs7Ozs7Ozs7Ozs7MEJBTWxHLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUE4Qjs7Ozs7O2tDQUM1Qyw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQWdCN0I7Ozs7OztvQkFDNUJDLDZCQUNDLDhEQUFDMkI7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNoQyxvREFBV0E7NEJBQUNtQyxTQUFTL0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUs1Qiw4REFBQzJCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQU1DLFNBQVMsVUFBYSxPQUFIbkM7d0JBQU04QixXQUFVO2tDQUFpQzs7Ozs7O2tDQUczRSw4REFBQ007d0JBQ0NwQyxJQUFJLFVBQWEsT0FBSEE7d0JBQ2RxQyxNQUFLO3dCQUNMQyxPQUFPakM7d0JBQ1BrQyxVQUFVLENBQUNDLElBQU1sQyxjQUFja0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUM3Q0ksYUFBWTt3QkFDWlosV0FBVTt3QkFDVmEsVUFBVXBDLGNBQWM7d0JBQ3hCcUMsWUFBWSxDQUFDSixJQUFNQSxFQUFFSyxHQUFHLEtBQUssV0FBVzlCOzs7Ozs7a0NBRzFDLDhEQUFDYzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNnQjtnQ0FDQ0MsU0FBU2hDO2dDQUNUNEIsVUFBVXBDLGNBQWMsUUFBUUYsV0FBV1ksSUFBSSxPQUFPO2dDQUN0RGEsV0FBVyw0Q0FNVixPQUxDdkIsY0FBYyxPQUNWLDRCQUNBRixXQUFXWSxJQUFJLE9BQU8sS0FDdEIsbUNBQ0E7MENBR0xWLGNBQWMsT0FBTywwQkFBZ0I7Ozs7Ozs0QkFHdkNILHNCQUNDLDhEQUFDMEM7Z0NBQ0NDLFNBQVMsSUFBTXJDLFlBQVksQ0FBQ0Q7Z0NBQzVCcUIsV0FBVTswQ0FFVHJCLFdBQVcsY0FBYzs7Ozs7Ozs7Ozs7O29CQUsvQkYsY0FBYyx1QkFDYiw4REFBQ3NCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTs0QkFBRUYsV0FBVTtzQ0FDVm5CLGFBQWEsSUFDVix1Q0FDQUEsYUFBYSxJQUNiLHVEQUNBOzs7Ozs7Ozs7OztvQkFLVEYsWUFBWUwsc0JBQ1gsOERBQUN5Qjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNrQjtnQ0FBR2xCLFdBQVU7MENBQXFCOzs7Ozs7MENBQ25DLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBbUIxQjs7Ozs7Ozs7Ozs7O29CQUluQ0csY0FBYyxzQkFDYiw4REFBQ3NCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2tCO2dDQUFHbEIsV0FBVTswQ0FBb0M7Ozs7OzswQ0FDbEQsOERBQUNFO2dDQUFFRixXQUFVOzBDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFDO0dBM0hNL0I7S0FBQUE7QUE2SE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhlcmNpc2UudHN4P2IyMDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWF0aERpc3BsYXkgZnJvbSAnLi9NYXRoRGlzcGxheSc7XG5cbmludGVyZmFjZSBFeGVyY2lzZVByb3BzIHtcbiAgaWQ6IHN0cmluZztcbiAgcXVlc3Rpb246IHN0cmluZztcbiAgbWF0aEZvcm11bGE/OiBzdHJpbmc7XG4gIGV4cGVjdGVkQW5zd2VyOiBzdHJpbmc7XG4gIGhpbnQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEV4ZXJjaXNlOiBGQzxFeGVyY2lzZVByb3BzPiA9ICh7XG4gIGlkLFxuICBxdWVzdGlvbixcbiAgbWF0aEZvcm11bGEsXG4gIGV4cGVjdGVkQW5zd2VyLFxuICBoaW50LFxufSkgPT4ge1xuICBjb25zdCBbdXNlckFuc3dlciwgc2V0VXNlckFuc3dlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0NvcnJlY3QsIHNldElzQ29ycmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzaG93SGludCwgc2V0U2hvd0hpbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYXR0ZW1wdHMsIHNldEF0dGVtcHRzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2VsZWJyYXRpb24sIHNldENlbGVicmF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGVja0Fuc3dlciA9ICgpID0+IHtcbiAgICBjb25zdCBub3JtYWxpemVkVXNlckFuc3dlciA9IHVzZXJBbnN3ZXIudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZEV4cGVjdGVkQW5zd2VyID0gZXhwZWN0ZWRBbnN3ZXIudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgXG4gICAgY29uc3QgY29ycmVjdCA9IG5vcm1hbGl6ZWRVc2VyQW5zd2VyID09PSBub3JtYWxpemVkRXhwZWN0ZWRBbnN3ZXI7XG4gICAgc2V0SXNDb3JyZWN0KGNvcnJlY3QpO1xuICAgIHNldEF0dGVtcHRzKGF0dGVtcHRzICsgMSk7XG4gICAgXG4gICAgLy8gSWYgY29ycmVjdCwgdHJpZ2dlciBjZWxlYnJhdGlvblxuICAgIGlmIChjb3JyZWN0KSB7XG4gICAgICBzZXRDZWxlYnJhdGlvbih0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q2VsZWJyYXRpb24oZmFsc2UpLCAzMDAwKTtcbiAgICAgIFxuICAgICAgLy8gU2F2ZSBwcm9ncmVzcyB0byBsb2NhbFN0b3JhZ2VcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZ3Jlc3MnKSB8fCAne30nKTtcbiAgICAgIHByb2dyZXNzW2lkXSA9IHRydWU7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZ3Jlc3MnLCBKU09OLnN0cmluZ2lmeShwcm9ncmVzcykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2UtYm94IHJlbGF0aXZlXCI+XG4gICAgICB7Y2VsZWJyYXRpb24gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcG9pbnRlci1ldmVudHMtbm9uZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMTAgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdGV4dC02eGwgYW5pbWF0ZS1ib3VuY2VcIj5cbiAgICAgICAgICAgIPCfjolcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTNcIj5QcmFjdGljZSBQcm9ibGVtPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyB0ZXh0LXhsXCI+e3F1ZXN0aW9ufTwvcD5cbiAgICAgICAge21hdGhGb3JtdWxhICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTYgcC00IGJnLWJsdWUtNTAgcm91bmRlZC1sZyBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8TWF0aERpc3BsYXkgZm9ybXVsYT17bWF0aEZvcm11bGF9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtgYW5zd2VyLSR7aWR9YH0gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1sZyBmb250LW1lZGl1bSBtYi0yXCI+XG4gICAgICAgICAgWW91ciBBbnN3ZXI6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtgYW5zd2VyLSR7aWR9YH1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJBbnN3ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyQW5zd2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBhbnN3ZXIgaGVyZS4uLlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic29sdXRpb24taW5wdXQgdGV4dC0yeGxcIlxuICAgICAgICAgIGRpc2FibGVkPXtpc0NvcnJlY3QgPT09IHRydWV9XG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGUua2V5ID09PSAnRW50ZXInICYmIGNoZWNrQW5zd2VyKCl9XG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBtdC00IGdhcC0zXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17Y2hlY2tBbnN3ZXJ9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNDb3JyZWN0ID09PSB0cnVlIHx8IHVzZXJBbnN3ZXIudHJpbSgpID09PSAnJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTYgcHktMyByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHRleHQtbGcgJHtcbiAgICAgICAgICAgICAgaXNDb3JyZWN0ID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyAnYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgOiB1c2VyQW5zd2VyLnRyaW0oKSA9PT0gJydcbiAgICAgICAgICAgICAgICA/ICdiZy1ncmF5LTMwMCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgICAgICAgICAgICAgOiAnYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0NvcnJlY3QgPT09IHRydWUgPyAnQ29ycmVjdCEg8J+OiScgOiAnQ2hlY2sgQW5zd2VyJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICB7aGludCAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dIaW50KCFzaG93SGludCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy15ZWxsb3ctMTAwIGhvdmVyOmJnLXllbGxvdy0yMDAgcm91bmRlZC1sZyB0ZXh0LXllbGxvdy04MDAgZm9udC1tZWRpdW0gdGV4dC1sZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaG93SGludCA/ICdIaWRlIEhpbnQnIDogJ05lZWQgYSBIaW50Pyd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHtpc0NvcnJlY3QgPT09IGZhbHNlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcC0zIGJnLXJlZC01MCBib3JkZXIgYm9yZGVyLXJlZC0yMDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCI+XG4gICAgICAgICAgICAgIHthdHRlbXB0cyA9PT0gMSBcbiAgICAgICAgICAgICAgICA/IFwiVGhhdCdzIG5vdCBxdWl0ZSByaWdodC4gVHJ5IGFnYWluIVwiIFxuICAgICAgICAgICAgICAgIDogYXR0ZW1wdHMgPT09IDJcbiAgICAgICAgICAgICAgICA/IFwiU3RpbGwgbm90IGNvcnJlY3QuIE1heWJlIHRyeSBhIGRpZmZlcmVudCBhcHByb2FjaD9cIlxuICAgICAgICAgICAgICAgIDogXCJLZWVwIHRyeWluZyEgQ29uc2lkZXIgdXNpbmcgdGhlIGhpbnQgaWYgeW91J3JlIHN0dWNrLlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBcbiAgICAgICAge3Nob3dIaW50ICYmIGhpbnQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwLTQgYmcteWVsbG93LTUwIGJvcmRlciBib3JkZXIteWVsbG93LTIwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi0xXCI+SGludDo8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctODAwXCI+e2hpbnR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBcbiAgICAgICAge2lzQ29ycmVjdCA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHAtNCBiZy1ncmVlbi01MCBib3JkZXIgYm9yZGVyLWdyZWVuLTIwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyZWVuLTgwMCBtYi0xXCI+R3JlYXQgam9iITwvaDQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTcwMFwiPlxuICAgICAgICAgICAgICBZb3UndmUgbWFzdGVyZWQgdGhpcyBjb25jZXB0LiBSZWFkeSBmb3IgdGhlIG5leHQgY2hhbGxlbmdlP1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGVyY2lzZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNYXRoRGlzcGxheSIsIkV4ZXJjaXNlIiwiaWQiLCJxdWVzdGlvbiIsIm1hdGhGb3JtdWxhIiwiZXhwZWN0ZWRBbnN3ZXIiLCJoaW50IiwidXNlckFuc3dlciIsInNldFVzZXJBbnN3ZXIiLCJpc0NvcnJlY3QiLCJzZXRJc0NvcnJlY3QiLCJzaG93SGludCIsInNldFNob3dIaW50IiwiYXR0ZW1wdHMiLCJzZXRBdHRlbXB0cyIsImNlbGVicmF0aW9uIiwic2V0Q2VsZWJyYXRpb24iLCJjaGVja0Fuc3dlciIsIm5vcm1hbGl6ZWRVc2VyQW5zd2VyIiwidHJpbSIsInRvTG93ZXJDYXNlIiwibm9ybWFsaXplZEV4cGVjdGVkQW5zd2VyIiwiY29ycmVjdCIsInNldFRpbWVvdXQiLCJwcm9ncmVzcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiZm9ybXVsYSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJidXR0b24iLCJvbkNsaWNrIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Exercise.tsx\n"));

/***/ })

});