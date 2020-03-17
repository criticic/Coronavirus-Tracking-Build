(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["world-world-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/world/world.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/world/world.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Global Coronavirus information\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Global Coronavirus information</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Global</ion-card-subtitle>\n      <ion-card-title>Coronavirus cases</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h1>{{info?.cases | number}}</h1>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Global</ion-card-subtitle>\n      <ion-card-title class=\"death\">Deaths</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h1>{{info?.deaths | number}}</h1>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Global</ion-card-subtitle>\n      <ion-card-title>Recovered</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h1>{{info?.recovered | number}}</h1>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/world/world.module.ts":
/*!***************************************!*\
  !*** ./src/app/world/world.module.ts ***!
  \***************************************/
/*! exports provided: WorldPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldPageModule", function() { return WorldPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _world_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./world.page */ "./src/app/world/world.page.ts");







let WorldPageModule = class WorldPageModule {
};
WorldPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _world_page__WEBPACK_IMPORTED_MODULE_6__["WorldPage"] }])
        ],
        declarations: [_world_page__WEBPACK_IMPORTED_MODULE_6__["WorldPage"]]
    })
], WorldPageModule);



/***/ }),

/***/ "./src/app/world/world.page.scss":
/*!***************************************!*\
  !*** ./src/app/world/world.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.death {\n  text-color: --ion-color-danger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoaWVmaWUvcHJvamVjdHMvY292aWQxOS9zcmMvYXBwL3dvcmxkL3dvcmxkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd29ybGQvd29ybGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNDLDhCQUFBO0FDRUQiLCJmaWxlIjoic3JjL2FwcC93b3JsZC93b3JsZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG4uZGVhdGh7XG5cdHRleHQtY29sb3I6IC0taW9uLWNvbG9yLWRhbmdlcjtcbn0gIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uZGVhdGgge1xuICB0ZXh0LWNvbG9yOiAtLWlvbi1jb2xvci1kYW5nZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/world/world.page.ts":
/*!*************************************!*\
  !*** ./src/app/world/world.page.ts ***!
  \*************************************/
/*! exports provided: WorldPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldPage", function() { return WorldPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _covid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../covid.service */ "./src/app/covid.service.ts");



let WorldPage = class WorldPage {
    constructor(covidService) {
        this.covidService = covidService;
        this.info = null;
        this.covidService.getAll().subscribe((data) => {
            this.info = data;
        });
    }
};
WorldPage.ctorParameters = () => [
    { type: _covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"] }
];
WorldPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-world',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./world.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/world/world.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./world.page.scss */ "./src/app/world/world.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"]])
], WorldPage);



/***/ })

}]);
//# sourceMappingURL=world-world-module-es2015.js.map