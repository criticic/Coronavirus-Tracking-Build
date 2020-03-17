(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-data-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/data/data.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/data/data.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDataDataPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"world\">\n      <ion-icon name=\"globe\"></ion-icon>\n      <ion-label>Global</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"country\">\n      <ion-icon name=\"flag\"></ion-icon>\n      <ion-label>Countries</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"help-circle\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/data/data-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/data/data-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: DataPageRoutingModule */

  /***/
  function srcAppDataDataRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataPageRoutingModule", function () {
      return DataPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.page */
    "./src/app/data/data.page.ts");

    const routes = [{
      path: 'data',
      component: _data_page__WEBPACK_IMPORTED_MODULE_3__["DataPage"],
      children: [{
        path: 'world',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | world-world-module */
          [__webpack_require__.e("common"), __webpack_require__.e("world-world-module")]).then(__webpack_require__.bind(null,
          /*! ../world/world.module */
          "./src/app/world/world.module.ts")).then(m => m.WorldPageModule)
        }]
      }, {
        path: 'country',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | country-country-module */
          [__webpack_require__.e("common"), __webpack_require__.e("country-country-module")]).then(__webpack_require__.bind(null,
          /*! ../country/country.module */
          "./src/app/country/country.module.ts")).then(m => m.CountryPageModule)
        }]
      }, {
        path: 'about',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | about-about-module */
          "about-about-module").then(__webpack_require__.bind(null,
          /*! ../about/about.module */
          "./src/app/about/about.module.ts")).then(m => m.AboutPageModule)
        }]
      }, {
        path: '',
        redirectTo: '/data/world',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/data/world',
      pathMatch: 'full'
    }];
    let DataPageRoutingModule = class DataPageRoutingModule {};
    DataPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DataPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/data/data.module.ts":
  /*!*************************************!*\
    !*** ./src/app/data/data.module.ts ***!
    \*************************************/

  /*! exports provided: DataPageModule */

  /***/
  function srcAppDataDataModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataPageModule", function () {
      return DataPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./data-routing.module */
    "./src/app/data/data-routing.module.ts");
    /* harmony import */


    var _data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./data.page */
    "./src/app/data/data.page.ts");

    let DataPageModule = class DataPageModule {};
    DataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _data_routing_module__WEBPACK_IMPORTED_MODULE_5__["DataPageRoutingModule"]],
      declarations: [_data_page__WEBPACK_IMPORTED_MODULE_6__["DataPage"]]
    })], DataPageModule);
    /***/
  },

  /***/
  "./src/app/data/data.page.scss":
  /*!*************************************!*\
    !*** ./src/app/data/data.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppDataDataPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEvZGF0YS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/data/data.page.ts":
  /*!***********************************!*\
    !*** ./src/app/data/data.page.ts ***!
    \***********************************/

  /*! exports provided: DataPage */

  /***/
  function srcAppDataDataPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataPage", function () {
      return DataPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DataPage = class DataPage {
      constructor() {}

    };
    DataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./data.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/data/data.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./data.page.scss */
      "./src/app/data/data.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DataPage);
    /***/
  }
}]);
//# sourceMappingURL=data-data-module-es5.js.map