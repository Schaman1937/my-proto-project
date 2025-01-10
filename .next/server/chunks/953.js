exports.id = 953;
exports.ids = [953];
exports.modules = {

/***/ 8771:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4713))

/***/ }),

/***/ 2702:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2030, 23))

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
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2817);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
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
            style: {
                backgroundImage: "url('/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            },
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

/***/ 7994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TimerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4713);




/*
  Глобальный таймер 15+5 минут:
  - При sessionStatus='play': 15 мин (900 секунд)
  - При sessionStatus='break': 5 мин (300 секунд)
  Храним в TimerContext, чтобы Агон-страница знала о статусе (play/break).
*/ function Header() {
    const { sessionStatus , timeLeft , breakLeft , setSessionStatus , setTimeLeft , setBreakLeft  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_TimerContext__WEBPACK_IMPORTED_MODULE_3__.TimerContext);
    // Запуск счетчиков
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (sessionStatus === "play" && timeLeft > 0) {
            const timer = setInterval(()=>{
                setTimeLeft((prev)=>prev - 1);
            }, 1000);
            return ()=>clearInterval(timer);
        }
        // Когда закончилось
        if (sessionStatus === "play" && timeLeft <= 0) {
            setSessionStatus("break");
        }
        if (sessionStatus === "break" && breakLeft > 0) {
            const timer = setInterval(()=>{
                setBreakLeft((prev)=>prev - 1);
            }, 1000);
            return ()=>clearInterval(timer);
        }
        if (sessionStatus === "break" && breakLeft <= 0) {
            // Начинаем заново
            setSessionStatus("play");
            setTimeLeft(900);
            setBreakLeft(300);
        }
    }, [
        sessionStatus,
        timeLeft,
        breakLeft,
        setSessionStatus,
        setTimeLeft,
        setBreakLeft
    ]);
    // Рассчитываем, что показывать
    const isBreak = sessionStatus === "break";
    const displayTime = isBreak ? breakLeft : timeLeft;
    const minutes = Math.floor(displayTime / 60);
    const seconds = displayTime % 60;
    const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "bg-gray-800 shadow mb-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto px-4 py-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/logo.png",
                            alt: "Логотип",
                            className: "h-8 w-8 object-contain"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            className: "text-2xl font-bold text-gray-100 hover:text-white",
                            children: "Протоистория"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/agon",
                            className: "text-gray-300 hover:text-white",
                            children: "Агон"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/attributes",
                            className: "text-gray-300 hover:text-white",
                            children: "Атрибутика"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/materials",
                            className: "text-gray-300 hover:text-white",
                            children: "Материалы"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/leaderboard",
                            className: "text-gray-300 hover:text-white",
                            children: "Доска почёта"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/login",
                            className: "border border-gray-600 px-2 py-1 rounded text-gray-300 hover:text-white hover:bg-gray-700",
                            children: "Войти"
                        }),
                        isBreak ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-red-400 font-bold ml-3",
                            children: [
                                "Перерыв: ",
                                formatted
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-green-400 font-bold ml-3",
                            children: [
                                "До конца агона: ",
                                formatted
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


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


// Храним глобально sessionStatus, timeLeft и breakLeft
const TimerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function TimerProvider({ children  }) {
    const [sessionStatus, setSessionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("play") // "play" / "break"
    ;
    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(900) // 900 = 15 min
    ;
    const [breakLeft, setBreakLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(300) // 300 = 5 min
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TimerContext.Provider, {
        value: {
            sessionStatus,
            timeLeft,
            breakLeft,
            setSessionStatus,
            setTimeLeft,
            setBreakLeft
        },
        children: children
    });
}


/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;