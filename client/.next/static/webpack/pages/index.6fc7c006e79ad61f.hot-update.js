"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_DownloadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/DownloadFile */ \"./src/components/DownloadFile.tsx\");\n/* harmony import */ var _components_DropZoneComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/DropZoneComponent */ \"./src/components/DropZoneComponent.tsx\");\n/* harmony import */ var _components_RenderFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/RenderFile */ \"./src/components/RenderFile.tsx\");\n/* harmony import */ var _components_EmailForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/EmailForm */ \"./src/components/EmailForm.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [downloadPageLink, setDownloadPageLink] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [uploadState, setUploadState] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"Upload\");\n    const handleUpload = async ()=>{\n        if (uploadState === \"Uploading\") return;\n        setUploadState(\"Uploading\");\n        const formData = new FormData();\n        formData.append(\"myFile\", file);\n        try {\n            const { data } = await (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                method: \"post\",\n                data: formData,\n                url: \"api/files/upload\",\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            setDownloadPageLink(data.downloadPageLink);\n            setId(data.id);\n        } catch (error) {\n            console.log(error.response.data);\n            setUploadState(\"Upload Failed\");\n        }\n    };\n    const resetComponent = ()=>{\n        setFile(null);\n        setDownloadPageLink(null);\n        setUploadState(\"Upload\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"my-4 text-3xl font-medium\",\n                children: \"Got a File? Share It Like Fake News\"\n            }, void 0, false, {\n                fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center bg-gray-800 shadow-xl w-96 rounded-xl\",\n                children: [\n                    !downloadPageLink && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropZoneComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        setFile: setFile\n                    }, void 0, false, {\n                        fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 31\n                    }, this),\n                    file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RenderFile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        file: {\n                            format: file.type.split(\"/\")[1],\n                            name: file.name,\n                            sizeInBytes: file.size\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    !downloadPageLink && file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button\",\n                        onClick: handleUpload,\n                        children: uploadState\n                    }, void 0, false, {\n                        fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    downloadPageLink && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DownloadFile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                downloadPageLink: downloadPageLink\n                            }, void 0, false, {\n                                fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EmailForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: id\n                            }, void 0, false, {\n                                fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button\",\n                                onClick: resetComponent,\n                                children: \"Upload New File\"\n                            }, void 0, false, {\n                                fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glytch/Web Dev/Sharingan/client/src/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"NMUnEl08qWEBbu9NmclzrNtsPB4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1U7QUFDZDtBQUNGO0FBRXJCO0FBQ087QUFFbEIsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLElBQUlDLE1BQU0sR0FBR0wsK0NBQVFBLENBQUM7SUFDN0IsTUFBTSxDQUFDTSxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FDakNULCtDQUFRQSxDQUF3RDtJQUVsRSxNQUFNVSxlQUFlO1FBQ25CLElBQUlGLGdCQUFnQixhQUFhO1FBQ2pDQyxlQUFlO1FBQ2YsTUFBTUUsV0FBVyxJQUFJQztRQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFVBQVVYO1FBQzFCLElBQUk7WUFDRixNQUFNLEVBQUVZLElBQUksRUFBRSxHQUFHLE1BQU1mLGlEQUFLQSxDQUFDO2dCQUMzQmdCLFFBQVE7Z0JBQ1JELE1BQU1IO2dCQUNOSyxLQUFLO2dCQUNMQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUNBVixvQkFBb0JPLEtBQUtSLGdCQUFnQjtZQUN6Q0QsTUFBTVMsS0FBS1YsRUFBRTtRQUNmLEVBQUUsT0FBT2MsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ1AsSUFBSTtZQUMvQkwsZUFBZTtRQUNqQjtJQUNGO0lBRUEsTUFBTWEsaUJBQWlCO1FBQ3JCbkIsUUFBUTtRQUNSSSxvQkFBb0I7UUFDcEJFLGVBQWU7SUFDakI7SUFFQSxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE0Qjs7Ozs7OzBCQUcxQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaLENBQUNsQixrQ0FBb0IsOERBQUNWLHFFQUFpQkE7d0JBQUNPLFNBQVNBOzs7Ozs7b0JBRWpERCxzQkFDQyw4REFBQ0wsOERBQVVBO3dCQUNUSyxNQUFNOzRCQUNKd0IsUUFBUXhCLEtBQUt5QixJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDL0JDLE1BQU0zQixLQUFLMkIsSUFBSTs0QkFDZkMsYUFBYTVCLEtBQUs2QixJQUFJO3dCQUN4Qjs7Ozs7O29CQUtILENBQUN6QixvQkFBb0JKLHNCQUNwQiw4REFBQzhCO3dCQUFPUixXQUFVO3dCQUFTUyxTQUFTdkI7a0NBQ2pDRjs7Ozs7O29CQUlKRixrQ0FDQyw4REFBQ2lCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQzdCLGdFQUFZQTtnQ0FBQ1csa0JBQWtCQTs7Ozs7OzBDQUNoQyw4REFBQ1IsNkRBQVNBO2dDQUFDTSxJQUFJQTs7Ozs7OzBDQUNmLDhEQUFDNEI7Z0NBQU9SLFdBQVU7Z0NBQVNTLFNBQVNYOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWhFO0dBeEV3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG93bmxvYWRGaWxlIGZyb20gXCJAL2NvbXBvbmVudHMvRG93bmxvYWRGaWxlXCI7XG5pbXBvcnQgRHJvcFpvbmVDb21wb25lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9Ecm9wWm9uZUNvbXBvbmVudFwiO1xuaW1wb3J0IFJlbmRlckZpbGUgZnJvbSBcIkAvY29tcG9uZW50cy9SZW5kZXJGaWxlXCI7XG5pbXBvcnQgRW1haWxGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvRW1haWxGb3JtXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZG93bmxvYWRQYWdlTGluaywgc2V0RG93bmxvYWRQYWdlTGlua10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VwbG9hZFN0YXRlLCBzZXRVcGxvYWRTdGF0ZV0gPVxuICAgIHVzZVN0YXRlPFwiVXBsb2FkaW5nXCIgfCBcIlVwbG9hZCBGYWlsZWRcIiB8IFwiVXBsb2FkZWRcIiB8IFwiVXBsb2FkXCI+KFwiVXBsb2FkXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodXBsb2FkU3RhdGUgPT09IFwiVXBsb2FkaW5nXCIpIHJldHVybjtcbiAgICBzZXRVcGxvYWRTdGF0ZShcIlVwbG9hZGluZ1wiKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcIm15RmlsZVwiLCBmaWxlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICB1cmw6IFwiYXBpL2ZpbGVzL3VwbG9hZFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNldERvd25sb2FkUGFnZUxpbmsoZGF0YS5kb3dubG9hZFBhZ2VMaW5rKTtcbiAgICAgIHNldElkKGRhdGEuaWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIHNldFVwbG9hZFN0YXRlKFwiVXBsb2FkIEZhaWxlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgc2V0RmlsZShudWxsKTtcbiAgICBzZXREb3dubG9hZFBhZ2VMaW5rKG51bGwpO1xuICAgIHNldFVwbG9hZFN0YXRlKFwiVXBsb2FkXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTQgdGV4dC0zeGwgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgR290IGEgRmlsZT8gU2hhcmUgSXQgTGlrZSBGYWtlIE5ld3NcbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktODAwIHNoYWRvdy14bCB3LTk2IHJvdW5kZWQteGxcIj5cbiAgICAgICAgeyFkb3dubG9hZFBhZ2VMaW5rICYmIDxEcm9wWm9uZUNvbXBvbmVudCBzZXRGaWxlPXtzZXRGaWxlfSAvPn1cblxuICAgICAgICB7ZmlsZSAmJiAoXG4gICAgICAgICAgPFJlbmRlckZpbGVcbiAgICAgICAgICAgIGZpbGU9e3tcbiAgICAgICAgICAgICAgZm9ybWF0OiBmaWxlLnR5cGUuc3BsaXQoXCIvXCIpWzFdLFxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgIHNpemVJbkJ5dGVzOiBmaWxlLnNpemUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIHVwbG9hZCBidXR0b24gKi99XG4gICAgICAgIHshZG93bmxvYWRQYWdlTGluayAmJiBmaWxlICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+XG4gICAgICAgICAgICB7dXBsb2FkU3RhdGV9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG5cbiAgICAgICAge2Rvd25sb2FkUGFnZUxpbmsgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8RG93bmxvYWRGaWxlIGRvd25sb2FkUGFnZUxpbms9e2Rvd25sb2FkUGFnZUxpbmt9IC8+XG4gICAgICAgICAgICA8RW1haWxGb3JtIGlkPXtpZH0gLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17cmVzZXRDb21wb25lbnR9PlxuICAgICAgICAgICAgICBVcGxvYWQgTmV3IEZpbGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkRvd25sb2FkRmlsZSIsIkRyb3Bab25lQ29tcG9uZW50IiwiUmVuZGVyRmlsZSIsIkVtYWlsRm9ybSIsImF4aW9zIiwidXNlU3RhdGUiLCJIb21lIiwiZmlsZSIsInNldEZpbGUiLCJpZCIsInNldElkIiwiZG93bmxvYWRQYWdlTGluayIsInNldERvd25sb2FkUGFnZUxpbmsiLCJ1cGxvYWRTdGF0ZSIsInNldFVwbG9hZFN0YXRlIiwiaGFuZGxlVXBsb2FkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImRhdGEiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJyZXNldENvbXBvbmVudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybWF0IiwidHlwZSIsInNwbGl0IiwibmFtZSIsInNpemVJbkJ5dGVzIiwic2l6ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});