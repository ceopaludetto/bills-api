exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/modules/authentication/authentication.resolver.ts ***!
  \***************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/razzle/config/babel-loader/razzle-babel-loader.js):\nSyntaxError: /Users/carlos/Documents/Projetos/Javascript/bills_api/src/modules/authentication/authentication.resolver.ts: Identifier 'token' has already been declared. (30:23)\n\n\u001b[0m \u001b[90m 28 |\u001b[39m         \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mauthenticationService\u001b[33m.\u001b[39mregister(data\u001b[33m,\u001b[39m res)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 |\u001b[39m     }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 30 |\u001b[39m     \u001b[36masync\u001b[39m checkToken({ token }) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m         \u001b[36mconst\u001b[39m token \u001b[33m=\u001b[39m passport_jwt_1\u001b[33m.\u001b[39m\u001b[33mExtractJwt\u001b[39m\u001b[33m.\u001b[39mfromAuthHeaderAsBearerToken()(req)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 |\u001b[39m         \u001b[36mif\u001b[39m (\u001b[33m!\u001b[39mtoken)\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m             \u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m common_1\u001b[33m.\u001b[39m\u001b[33mUnauthorizedException\u001b[39m(\u001b[32m\"token-not-found\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:808:17)\n    at Object.raiseWithData (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:801:17)\n    at Object.raise (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:762:17)\n    at TypeScriptScopeHandler.checkRedeclarationInScope (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:1437:12)\n    at TypeScriptScopeHandler.declareName (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:1417:14)\n    at TypeScriptScopeHandler.declareName (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:7265:11)\n    at Object.checkLVal (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:10637:24)\n    at Object.checkLVal (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:9692:15)\n    at Object.checkLVal (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:10653:16)\n    at Object.checkLVal (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:9692:15)\n    at Object.checkParams (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:12313:12)\n    at Object.<anonymous> (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:12289:14)\n    at Object.parseBlockOrModuleBlockBody (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:13441:23)\n    at Object.parseBlockBody (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:13409:10)\n    at Object.parseBlock (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:13393:10)\n    at Object.parseFunctionBody (/Users/carlos/Documents/Projetos/Javascript/bills_api/node_modules/@babel/parser/lib/index.js:12280:24)");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0e4e630e21d9535781d5")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.b8830696baebf4824559.hot-update.js.map