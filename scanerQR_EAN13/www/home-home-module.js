(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      TEST SCANNER DE CODIGO QR\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n      <div *ngIf=\"scannedData\">\n        <P>ID PRODUCTO : {{ IDPRODUCTO3 }}</P>\n        <p>Unidades : {{ unidades }}</p>\n        <p>Contenido : {{ scannedData[\"text\"] }}</p>\n        <p>Formato : {{ scannedData[\"format\"] }}</p>\n      </div>\n\n</ion-content>\n<ion-footer>\n\n  <div class=\"ion-padding\">\n\n    <ion-button (click)=\"eventoQR()\">\n      SCANNEAR QR\n    </ion-button>\n\n    <ion-button (click)=\"eventoBarras()\">\n      SCANNEAR CODIGO BARRAS\n    </ion-button>\n\n  </div>\n\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");



var HomePage = /** @class */ (function () {
    function HomePage(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
        this.boolMuestraQR = false;
        this.boolMuestraBarCode = false;
        this.encodeData = "";
    }
    HomePage.prototype.eventoQR = function () {
        var _this = this;
        this.barcodeScannerOptions = {
            formats: "QR_CODE",
            showTorchButton: true,
            showFlipCameraButton: true
        };
        this.barcodeScanner.scan(this.barcodeScannerOptions).then(function (barcodeData) {
            _this.scannedData = barcodeData;
            _this.IDPRODUCTO = _this.scannedData["text"];
            _this.IDPRODUCTO2 = _this.IDPRODUCTO.lastIndexOf("="); //
            _this.IDPRODUCTO3 = _this.IDPRODUCTO.substring(_this.IDPRODUCTO2 + 1);
            alert(_this.IDPRODUCTO);
            _this.unidades = "5";
        }).catch(function (err) {
            alert(err);
        });
    };
    HomePage.prototype.eventoBarras = function () {
        var _this = this;
        this.barcodeScannerOptions = {
            formats: "EAN_13",
            showTorchButton: true,
            showFlipCameraButton: true
        };
        this.barcodeScanner.scan(this.barcodeScannerOptions).then(function (barcodeData) {
            _this.scannedData = barcodeData;
            _this.IDPRODUCTO = _this.scannedData["text"];
            _this.IDPRODUCTO2 = _this.IDPRODUCTO.lastIndexOf("="); //
            _this.IDPRODUCTO3 = _this.IDPRODUCTO.substring(_this.IDPRODUCTO2 + 1);
            alert(_this.IDPRODUCTO);
            _this.unidades = "5";
        }).catch(function (err) {
            alert(err);
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map