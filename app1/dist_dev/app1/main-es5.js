(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n<div *ngIf=\"jogoEmAndamento; else fimDeJogo\">\n  <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\n</div>\n<ng-template #fimDeJogo>\n  <div *ngIf=\"tipoEncerramento === 'derrota' else fimDeJogoVitoria\" class=\"container\">\n      <div class=\"row\">\n          <div class=\"col\">\n              <div class=\"alert alert-danger mt-5\" role=\"alert\">\n                  Fim de jogo, infelizmente você perdeu :s\n              </div>\n              <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Jogar novamente</button>\n          </div>\n        </div>\n  </div>\n</ng-template>\n\n<ng-template #fimDeJogoVitoria>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"alert alert-success mt-5\" role=\"alert\">\n                    Fim de jogo,  você venceu :D\n                </div>\n                <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Jogar novamente</button>\n            </div>\n          </div>\n    </div>\n</ng-template>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/painel/painel.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/painel/painel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <app-progresso [progresso]=\"progresso\"></app-progresso>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h6 class=\"text-left\">{{ instrucao }}</h6>\r\n              <p class=\"text-left\">{{ rodadaFrase.fraseEng }}</p>\r\n\r\n              <div class=\"form-group\">\r\n                  <textarea class=\"form-control\" rows=\"3\" (input)=\"atualizaResposta($event)\" [value]=\"resposta\"></textarea>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"verificaResposta()\">Verificar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/progresso/progresso.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/progresso/progresso.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n    <div class=\"progress-bar w-{{ progresso }}\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tentativas/tentativas.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tentativas/tentativas.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\" />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topo/topo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topo/topo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\r\n  <span class=\"navbar-brand mb-0 h1\">{{ titulo }}</span>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    };
    AppComponent.prototype.reiniciarJogo = function () {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topo/topo.component */ "./src/app/topo/topo.component.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/painel/painel.component.ts");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tentativas/tentativas.component */ "./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progresso/progresso.component */ "./src/app/progresso/progresso.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _topo_topo_component__WEBPACK_IMPORTED_MODULE_5__["TopoComponent"],
                _painel_painel_component__WEBPACK_IMPORTED_MODULE_6__["PainelComponent"],
                _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_7__["TentativasComponent"],
                _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_8__["ProgressoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/painel/frases-mock.ts":
/*!***************************************!*\
  !*** ./src/app/painel/frases-mock.ts ***!
  \***************************************/
/*! exports provided: FRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRASES", function() { return FRASES; });
var FRASES = [
    { fraseEng: 'I like to learn', frasePtbr: 'Eu gosto de aprender' },
    { fraseEng: 'I watch tv', frasePtbr: 'Eu assisto tv' },
    { fraseEng: 'How are you?', frasePtbr: 'Como vai você?' },
    { fraseEng: 'I eat bread', frasePtbr: 'Eu como pão' }
];


/***/ }),

/***/ "./src/app/painel/painel.component.css":
/*!*********************************************!*\
  !*** ./src/app/painel/painel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    margin-top: 27px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frases-mock */ "./src/app/painel/frases-mock.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_2__["FRASES"];
        this.instrucao = 'Traduza a frase:';
        this.resposta = '';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.atualizaRodada();
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.ngOnDestroy = function () {
        console.log('destroido');
    };
    PainelComponent.prototype.atualizaResposta = function (resposta) {
        this.resposta = resposta.target.value;
        // console.log(this.resposta)
    };
    PainelComponent.prototype.verificaResposta = function () {
        if (this.rodadaFrase.frasePtbr == this.resposta) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'top-end',
                type: 'success',
                title: 'A tradução está correta.',
                showConfirmButton: false,
                timer: 1500
            });
            //troca pergunta
            this.rodada++;
            //incrementa a barra de progresso
            this.progresso = this.progresso + (100 / this.frases.length);
            //verifica se as tentativas foram esgotadas
            if (this.rodada === 4) {
                this.encerrarJogo.emit('vitoria');
                // Swal.fire({
                //   position: 'top-end',
                //   type: 'success',
                //   title: 'Você concluiu as traduções com sucesso.',
                //   showConfirmButton: false,
                //   timer: 1500
                // })
            }
            //Atualiza frase para usuario.
            this.atualizaRodada();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'top-end',
                type: 'warning',
                title: 'A tradução está incorreta.',
                showConfirmButton: false,
                timer: 1500
            });
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('derrota');
                // Swal.fire({
                //   position: 'top-end',
                //   type: 'error',
                //   title: 'Você perdeu todas as suas tentativas!.',
                //   showConfirmButton: false,
                //   timer: 1500
                // })
            }
        }
    };
    PainelComponent.prototype.atualizaRodada = function () {
        //define frase da rodada
        this.rodadaFrase = this.frases[this.rodada];
        //limpar resposta
        this.resposta = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PainelComponent.prototype, "encerrarJogo", void 0);
    PainelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painel',
            template: __webpack_require__(/*! raw-loader!./painel.component.html */ "./node_modules/raw-loader/index.js!./src/app/painel/painel.component.html"),
            styles: [__webpack_require__(/*! ./painel.component.css */ "./src/app/painel/painel.component.css")]
        })
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/*!***************************************************!*\
  !*** ./src/app/progresso/progresso.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .progress {\r\n    background: #eef8da;\r\n    border: solid 1px #99ce28;\r\n  }\r\n\r\n  .progress-bar {\r\n    background: #99ce28;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3NvL3Byb2dyZXNzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzby9wcm9ncmVzc28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLnByb2dyZXNzIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWY4ZGE7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjOTljZTI4O1xyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTljZTI4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressoComponent = /** @class */ (function () {
    function ProgressoComponent() {
        this.progresso = 0;
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProgressoComponent.prototype, "progresso", void 0);
    ProgressoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progresso',
            template: __webpack_require__(/*! raw-loader!./progresso.component.html */ "./node_modules/raw-loader/index.js!./src/app/progresso/progresso.component.html"),
            styles: [__webpack_require__(/*! ./progresso.component.css */ "./src/app/progresso/progresso.component.css")]
        })
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "./src/app/shared/coracao.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/*! exports provided: Coracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coracao", function() { return Coracao; });
var Coracao = /** @class */ (function () {
    function Coracao(cheio, urlCoracaoCheio, urlCaracaoVazio) {
        if (urlCoracaoCheio === void 0) { urlCoracaoCheio = '../../assets/imagens/coracao_cheio.png'; }
        if (urlCaracaoVazio === void 0) { urlCaracaoVazio = '../../assets/imagens/coracao_vazio.png'; }
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCaracaoVazio = urlCaracaoVazio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCaracaoVazio;
        }
    };
    Coracao.ctorParameters = function () { return [
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return Coracao;
}());



/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhdGl2YXMvdGVudGF0aXZhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/coracao.model */ "./src/app/shared/coracao.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coracoes = [
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true),
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true),
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true)
        ];
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        //this.coracao.length
        if (this.tentativas !== this.coracoes.length) {
            var indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
    };
    TentativasComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], TentativasComponent.prototype, "tentativas", void 0);
    TentativasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tentativas',
            template: __webpack_require__(/*! raw-loader!./tentativas.component.html */ "./node_modules/raw-loader/index.js!./src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__(/*! ./tentativas.component.css */ "./src/app/tentativas/tentativas.component.css")]
        })
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/*!*****************************************!*\
  !*** ./src/app/topo/topo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background: #1cb0f6 !important;\r\n  color: #ffff !important;\r\n}\r\n\r\n.navbar > span {\r\n   color: #ffff !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0dBQ0csdUJBQXVCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWNiMGY2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXIgPiBzcGFuIHtcclxuICAgY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopoComponent = /** @class */ (function () {
    function TopoComponent() {
        this.titulo = 'Aprendendo Inglês';
    }
    TopoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topo',
            template: __webpack_require__(/*! raw-loader!./topo.component.html */ "./node_modules/raw-loader/index.js!./src/app/topo/topo.component.html"),
            styles: [__webpack_require__(/*! ./topo.component.css */ "./src/app/topo/topo.component.css")]
        })
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular-4\app1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map