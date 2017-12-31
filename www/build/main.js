webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DATABASE_FILE_NAME = 'data.db';
var EditPage = (function () {
    function EditPage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.cars = [];
        this.createDatabaseFile();
    }
    EditPage.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('Bdd créée !');
            _this.db = db;
            _this.createTables();
        })
            .catch(function (e) { return console.log(e); });
    };
    EditPage.prototype.createTables = function () {
        var _this = this;
        console.log('tablestest créée !');
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Cars` ( `idCars` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `color` TEXT NOT NULL, `length` INTEGER NOT NULL DEFAULT 4500, `weight` INTEGER NOT NULL DEFAULT 2000, `max_speed` INTEGER NOT NULL DEFAULT 300, `horsepower` INTEGER NOT NULL DEFAULT 400, `price` INTEGER NOT NULL DEFAULT 400000, `optionID` INTEGER, FOREIGN KEY(`optionID`) REFERENCES `option`(`idoption`) )', {})
            .then(function () {
            console.log('Table Cars created !');
            _this.db.executeSql('CREATE TABLE IF NOT EXIST  `option` ( `idoption` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT )', {})
                .then(function () { return console.log('Table option created !'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    EditPage.prototype.addCars = function () {
        console.log('FRED IL CASSE LES COUILLES');
        this.db.executeSql('INSERT INTO `Cars` (`name`,`color`,`price`,`weight`,`length`,`max_speed`,`horsepower`) VALUES ("' + this.name + '","' + this.color + '","' + this.price + '","' + this.weight + '","' + this.length + '","' + this.max_speed + '","' + this.horsepower + '")', {})
            .then(function () {
            console.log('Fred ne casse plus les couilles');
        })
            .catch(function (e) { return console.log(e); });
    };
    EditPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return EditPage;
}());
EditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit',template:/*ion-inline-start:"/Users/thomashuang/ionicProject/src/pages/edit/edit.html"*/'<ion-header padding id="headerb">\n        <ion-navbar>\n            <meta name="Lamborghini" content="width=device=width, initial-scale=1">\n            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">\n            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> \n            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>\n          <ion-title>\n            Contact\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content padding id="welcome">\n        <ion-list>\n          <ion-item>\n              <ion-label>Name : </ion-label>\n              <ion-input [(ngModel)]="name" value="{{car.idCars}}"  type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Color : </ion-label>\n              <ion-input [(ngModel)]="color" type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Price : </ion-label>\n              <ion-input [(ngModel)]="price" type="int"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Weight : </ion-label>\n              <ion-input [(ngModel)]="weight" type="int"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Length : </ion-label>\n              <ion-input [(ngModel)]="length" type="int"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Max_speed : </ion-label>\n              <ion-input [(ngModel)]="max_speed" type="int"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Horsepower : </ion-label>\n              <ion-input [(ngModel)]="horsepower" type="int"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Option : </ion-label>\n              <ion-input [(ngModel)]="option" type="text"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button full color="light" (tap)="addCars()">Validé</button>\n        <button ion-button (click)="home()">home</button>\n      </ion-content>\n      '/*ion-inline-end:"/Users/thomashuang/ionicProject/src/pages/edit/edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
], EditPage);

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/thomashuang/ionicProject/src/pages/tabs/tabs.html"*/'<ion-tabs >\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Cars" tabIcon="car"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Add" tabIcon="add"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/thomashuang/ionicProject/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    AboutPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/thomashuang/ionicProject/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="welcome">\n<h1>Welcome to Lamborghini\'s world</h1>\n<div>Create your own car.</div>\n<img src="assets/imgs/L1.jpg"/>\n<button ion-button block classe="marginTop" color="energy2" (click)="home()">See all cars</button>\n<button ion-button block color="energy3" (click)="contact()">Create my own car</button>\n</ion-content>\n'/*ion-inline-end:"/Users/thomashuang/ionicProject/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowPage = (function () {
    function ShowPage(navCtrl, sqlite, navParams) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.navParams = navParams;
        this.cars = [];
        this.name = navParams.get('name');
        this.color = navParams.get('color');
        this.max_speed = navParams.get('max_speed');
        this.horsepower = navParams.get('horsepower');
        this.weight = navParams.get('weight');
        this.length = navParams.get('length');
        this.option = navParams.get('option');
        this.price = navParams.get('price');
        this.idCars = navParams.get('idCars');
        console.log(this.name);
        //this.showone(this.idCars);
    }
    ShowPage.prototype.showone = function (idCars) {
        var _this = this;
        this.cars = [];
        this.db.executeSql('SELECT * FROM `Cars` WHERE idCars=?', [idCars])
            .then(function (data) {
            if (data == null) {
                console.log('show1');
                return;
            }
            if (data.rows) {
                console.log('show2');
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.cars.push({ idCars: data.rows.item(i).idCars });
                    }
                }
            }
        });
    };
    ShowPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ShowPage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_edit__["a" /* EditPage */]);
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"/Users/thomashuang/ionicProject/src/pages/show/show.html"*/'<ion-header>\n        <ion-navbar>\n            <meta name="Lamborghini" content="width=device=width, initial-scale=1">\n            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">\n            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> \n            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>\n          <ion-title>Car n° {{car.idCars}}</ion-title>\n        </ion-navbar>\n</ion-header>\n      \n<ion-content padding id="welcome">\n          <ion-item *ngFor="let car of cars">\n              <ion-label fixed>\n                  <div>\n                      Owner : {{car.name}}\n                      Color : {{car.color}}\n                      Weight : {{car.weight}}\n                      Length : {{car.length}}\n                      Max speed : {{car.max_speed}}</div>\n                \n              </ion-label>\n          </ion-item>\n          <button ion-button (click)="home()">Home</button>\n</ion-content>\n'/*ion-inline-end:"/Users/thomashuang/ionicProject/src/pages/show/show.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_show_show__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/thomashuang/ionicProject/src/app/app.html"*/'<ion-nav [root]="rootPage">\n\n\n\n\n    \n</ion-nav>\n'/*ion-inline-end:"/Users/thomashuang/ionicProject/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DATABASE_FILE_NAME = 'data.db';
var HomePage = (function () {
    function HomePage(navCtrl, sqlite, navParams) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.navParams = navParams;
        this.cars = [];
        this.idCars = navParams.get('idCars');
        this.createDatabaseFile();
    }
    HomePage.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('Bdd créée !');
            _this.db = db;
            _this.createTables();
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.createTables = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXIST `Cars` ( `idCars` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `color` TEXT NOT NULL, `length` INTEGER NOT NULL DEFAULT 4500, `weight` INTEGER NOT NULL DEFAULT 2000, `max_speed` INTEGER NOT NULL DEFAULT 300, `horsepower` INTEGER NOT NULL DEFAULT 400, `price` INTEGER NOT NULL DEFAULT 400000, `optionID` INTEGER, FOREIGN KEY(`optionID`) REFERENCES `option`(`idoption`) )', {})
            .then(function () {
            console.log('Table Cars created !');
            _this.db.executeSql('CREATE TABLE IF NOT EXIST  `option` ( `idoption` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT )', {})
                .then(function () { return console.log('Table option created !'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.showall = function () {
        var _this = this;
        console.log('showall');
        this.cars = [];
        this.db.executeSql('SELECT * FROM `Cars`', {})
            .then(function (data) {
            if (data == null) {
                console.log('showall2');
                return;
            }
            if (data.rows) {
                console.log('showall3');
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.cars.push({ idCars: data.rows.item(i).idCars });
                    }
                }
            }
        });
    };
    HomePage.prototype.delete = function (idCars) {
        var _this = this;
        console.log('supsup');
        this.db.executeSql('DELETE FROM `Cars` WHERE idCars=?', [idCars])
            .then(function (res) {
            console.log('La voiture à bien été supprimé');
            _this.showall();
        })
            .catch(function (e) { return console.log(e); });
    };
    /*public edit(name,color,price,weight,length,max_speed,horsepower,idCars) {
        console.log('editedit');
        //this.db.executeSql('UPDATE `Cars` SET name=? , SET color=? , SET price =? , SET weight=? , SET length=? , SET max_speed=? , SET horsepower=? WHERE idCars=?',[name,color,price,weight,length,max_speed,horsepower,idCars])
        
        this.db.executeSql('SELECT * FROM `Cars` WHERE idCars=?',[idCars])
        .then(res => {
          console.log('edddd');
        })
        .catch(e => console.log(e));
        this.navCtrl.setRoot('edit.html',{opt:{dismiss:false}})
    }

    public show(idCars) {
        console.log('oneone');
        this.navCtrl.push(page-edit);
        this.db.executeSql('SELECT * FROM `Cars` WHERE idCars=?',[idCars])
        .then(res => {
          console.log('show');
        })
        .catch(e => console.log(e));
    }*/
    HomePage.prototype.edit = function (idCars) {
        console.log('thomas');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_edit__["a" /* EditPage */], {
            idCars: idCars
        });
    };
    HomePage.prototype.show = function (idCars) {
        console.log("tozzz");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */], {
            idCars: idCars
        });
    };
    HomePage.prototype.show2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */]);
    };
    HomePage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_contact__["a" /* ContactPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/thomashuang/ionicProject/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n      <meta name="Lamborghini" content="width=device=width, initial-scale=1">\n      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">\n      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> \n      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>\n    <ion-title>All cars</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="welcome">\n    \n    <ion-list *ngIf="cars">\n      <ion-item *ngFor="let car of cars" color="energy3">\n        <ion-label>Car n{{ car.idCars }}\n          <div>Owner : {{ car.name }}</div>\n          <img src="assets/imgs/L2.jpg"/>\n          <div>\n            <button ion-button color="energy2" (click)="show(car.idCars)"> Show</button>\n            <button ion-button color="energy2" (click)="show2()"> Show</button>\n            <button ion-button color="danger" (click)="delete(car.idCars)"> <ion-icon name="close"> Delete </ion-icon></button>  \n            <button ion-button (click)="edit(car.idCars)"><ion-icon name="color-wand"> Edit </ion-icon></button>\n            <button ion-button block color="energy3" (click)="contact()">Create my own car</button>\n          </div>    \n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-row padding>\n           <ion-col width-50 style="text-align: center">\n            <div><button ion-button (tap)="showall()" color="energy4">Get cars</button></div>\n           </ion-col>\n    </ion-row>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/thomashuang/ionicProject/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATABASE_FILE_NAME = 'data.db';
var ContactPage = (function () {
    function ContactPage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.cars = [];
        this.createDatabaseFile();
    }
    ContactPage.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('Bdd créée !');
            _this.db = db;
            _this.createTables();
        })
            .catch(function (e) { return console.log(e); });
    };
    ContactPage.prototype.createTables = function () {
        var _this = this;
        console.log('tablestest créée !');
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Cars` ( `idCars` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `color` TEXT NOT NULL, `length` INTEGER NOT NULL DEFAULT 4500, `weight` INTEGER NOT NULL DEFAULT 2000, `max_speed` INTEGER NOT NULL DEFAULT 300, `horsepower` INTEGER NOT NULL DEFAULT 400, `price` INTEGER NOT NULL DEFAULT 400000, `optionID` INTEGER, FOREIGN KEY(`optionID`) REFERENCES `option`(`idoption`) )', {})
            .then(function () {
            console.log('Table Cars created !');
            _this.db.executeSql('CREATE TABLE IF NOT EXIST  `option` ( `idoption` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT )', {})
                .then(function () { return console.log('Table option created !'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    ContactPage.prototype.addCars = function () {
        console.log('FRED IL CASSE LES COUILLES');
        this.db.executeSql('INSERT INTO `Cars` (`name`,`color`,`price`,`weight`,`length`,`max_speed`,`horsepower`) VALUES ("' + this.name + '","' + this.color + '","' + this.price + '","' + this.weight + '","' + this.length + '","' + this.max_speed + '","' + this.horsepower + '")', {})
            .then(function () {
            console.log('Fred ne casse plus les couilles');
        })
            .catch(function (e) { return console.log(e); });
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/thomashuang/ionicProject/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n      <meta name="Lamborghini" content="width=device=width, initial-scale=1">\n      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">\n      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> \n      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>\n    <ion-title>\n      Create page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="welcome">\n    <h1> Create your own car : </h1>\n  <ion-list>\n    <ion-item>\n        <ion-label>Name : </ion-label>\n        <ion-input [(ngModel)]="name"  type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Color : </ion-label>\n        <ion-input [(ngModel)]="color" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Price : </ion-label>\n        <ion-input [(ngModel)]="price" type="int"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Weight : </ion-label>\n        <ion-input [(ngModel)]="weight" type="int"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Length : </ion-label>\n        <ion-input [(ngModel)]="length" type="int"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Max_speed : </ion-label>\n        <ion-input [(ngModel)]="max_speed" type="int"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Horsepower : </ion-label>\n        <ion-input [(ngModel)]="horsepower" type="int"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Option : </ion-label>\n        <ion-input [(ngModel)]="option" type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full color="light" (tap)="addCars()" color="energy2"><ion-icon name="checkmark"> Submit </ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"/Users/thomashuang/ionicProject/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map