exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 5632:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4713))

/***/ }),

/***/ 4841:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2030, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23))

/***/ }),

/***/ 1977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6495);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_TimerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6481);
/* harmony import */ var _shared_TimerContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_TimerContext__WEBPACK_IMPORTED_MODULE_2__);



const metadata = {
    title: "Протоистория",
    description: "Агоны, таймер, доска почёта и материалы"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "ru",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: "bg-gray-900 text-gray-100 min-h-screen",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_TimerContext__WEBPACK_IMPORTED_MODULE_2__.TimerProvider, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 6481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("C:\\ProtohistoryGit\\my-proto-project\\app\\shared\\TimerContext.js");


/***/ }),

/***/ 4713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerContext": () => (/* binding */ TimerContext),
/* harmony export */   "TimerProvider": () => (/* binding */ TimerProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TimerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function TimerProvider({ children  }) {
    const [sessionStatus, setSessionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("play") // "play" / "break"
    ;
    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(900) // 15 * 60
    ;
    const [breakLeft, setBreakLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(300) // 5 * 60
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (sessionStatus === "play" && timeLeft > 0) {
            const t = setInterval(()=>{
                setTimeLeft((prev)=>prev - 1);
            }, 1000);
            return ()=>clearInterval(t);
        }
        if (sessionStatus === "play" && timeLeft <= 0) {
            setSessionStatus("break");
        }
        if (sessionStatus === "break" && breakLeft > 0) {
            const t = setInterval(()=>{
                setBreakLeft((prev)=>prev - 1);
            }, 1000);
            return ()=>clearInterval(t);
        }
        if (sessionStatus === "break" && breakLeft <= 0) {
            // Снова стартуем
            setSessionStatus("play");
            setTimeLeft(900);
            setBreakLeft(300);
        }
    }, [
        sessionStatus,
        timeLeft,
        breakLeft
    ]);
    const value = {
        sessionStatus,
        timeLeft,
        breakLeft
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TimerContext.Provider, {
        value: value,
        children: children
    });
}


/***/ }),

/***/ 6495:
/***/ (() => {



/***/ })

};
;