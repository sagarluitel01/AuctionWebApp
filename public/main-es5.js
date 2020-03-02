function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-staff/add-staff.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-staff/add-staff.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminAddStaffAddStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Add Staff</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <form #addStaffForm=\"ngForm\" (ngSubmit)=\"addStaffForm.valid && onSubmit(addStaffForm)\">\n\n                <input type=\"hidden\" #type=ngModel [(ngModel)]=\"staff.type\" name=\"type\">\n\n                <div class=\"form-group\">\n                    <label>First Name:</label>\n                    <!--Get staff first name-->\n                    <input type=\"text\" #firstName=\"ngModel\" [(ngModel)]=\"staff.firstName\" name=\"firstName\" placeholder=\"First Name\"\n                    required  [ngClass]=\"{'invalid-textbox' :addStaffForm.submitted && !firstName.valid }\" class=\"form-control\">\n                    <!--Validate staff first name input-->\n                    <div *ngIf=\"addStaffForm.submitted && !firstName.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Last Name:</label>\n                    <!--Get staff last name-->\n                    <input type=\"text\" #lastName=\"ngModel\" [(ngModel)]=\"staff.lastName\" name=\"lastName\" placeholder=\"Last Name\"\n                    required  [ngClass]=\"{'invalid-textbox' :addStaffForm.submitted && !lastName.valid }\" class=\"form-control\">\n                    <!--Validate staff last name input-->\n                    <div *ngIf=\"addStaffForm.submitted && !lastName.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Alias:</label>\n                    <!--Get staff alias-->\n                    <input type=\"text\" #alias=\"ngModel\" [(ngModel)]=\"staff.alias\" name=\"alias\" placeholder=\"Alias\" class=\"form-control\"\n                    required  [ngClass]=\"{'invalid-textbox': addStaffForm.submitted && !alias.valid }\" [pattern]=\"aliasRegex\" maxlength=\"3\">\n                    <!--Validate staff alias input-->\n                    <div *ngIf=\"addStaffForm.submitted && !alias.valid\">\n                        <label *ngIf=\"alias.errors.required\" class=\"text-danger\">This field is required.</label>\n                        <label *ngIf=\"alias.errors.pattern\" class=\"text-danger\">Invalid alias, must be 3 letters.</label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Email:</label>\n                    <!--Get staff email-->\n                    <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"staff.email\" name=\"email\" placeholder=\"Email\"\n                    required [pattern]=\"emailRegex\" [ngClass]=\"{'invalid-textbox' :addStaffForm.submitted && !email.valid }\" class=\"form-control\">\n                    <!--Validate staff email-->\n                    <div *ngIf=\"addStaffForm.submitted && email.errors\">\n                        <label *ngIf=\"email.errors.required\" class=\"text-danger\">This field is required.</label>\n                        <label *ngIf=\"email.errors.pattern\" class=\"text-danger\">Invalid email address.</label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Password:</label>\n                    <!--Get staff password-->\n                    <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"staff.password\" name=\"password\" placeholder=\"Password\"\n                    minlength=\"6\" required [ngClass]=\"{'invalid-textbox' :addStaffForm.submitted && !password.valid }\" class=\"form-control\">\n                    <!--Validate staff password-->\n                    <div *ngIf=\"addStaffForm.submitted && password.errors\">\n                        <label *ngIf=\"password.errors.required\" class=\"text-danger\">This field is required.</label>\n                        <label *ngIf=\"password.errors.minlength\" class=\"text-danger\">Enter atleast 6 characters.</label>\n                    </div>\n                </div>\n            \n                <!--Submit button-->\n                <div class=\"text-center\">\n                    <input class=\"btn btn-primary\" type=\"submit\" value=\"Add New Staff\">\n                </div>\n            </form>\n        </div>\n        \n        <!-- Success message -->\n        <div class=\"alert alert-success\" *ngIf=\"showSucessMessage\">\n            Saved successfully\n        </div>\n        \n        <!-- Error message -->\n        <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages\">\n            {{serverErrorMessages}}\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n    <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n        <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Colorado Aquarium Society</a>\n        <ul class=\"navbar-nav px-3\">\n            <li class=\"nav-item text-nowrap\">\n                <a class=\"nav-link\" (click)=\"onLogout()\">\n                    <img src=\"../../../assets/icons/log-out.svg\">\n                    Sign out\n                </a>\n            </li>\n        </ul>\n    </nav>\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n                <div class=\"sidebar-sticky\">\n                    <ul class=\"nav flex-column\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\">\n                                <img src=\"../../../assets/icons/settings-blue.svg\">\n                                Administration <span class=\"sr-only\">(current)</span>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLink=\"/dashboard\">\n                                <img src=\"../../../assets/icons/home-black.svg\">\n                                Dashboard\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n    \n            <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n                <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n                    <h1 class=\"h2\">Administration</h1>\n                    <div class=\"btn-toolbar mb-2 mb-md-0\">\n                        <div class=\"btn-group mr-2\">\n                            <span>Welcome! <a routerLink=\"/user-profile\">{{ userDetails.firstName }}</a>[ {{ userDetails.type }} ]</span>\n                        </div>\n                    </div>\n                </div>\n        \n                <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#createAuctionModal\">\n                        <img src=\"../../../assets/icons/file-plus.svg\">\n                        Create Auction\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addStaffModal\">\n                        <img src=\"../../../assets/icons/user-plus.svg\">\n                        Add Member\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/viewUsers\">\n                        <img src=\"../../../assets/icons/users.svg\">\n                        View All Users\n                    </button>\n                </div>\n\n                <div class=\"modal fade\" id=\"createAuctionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createAuctionModalLabel\" aria-hidden=\"true\">\n                    <app-create-auction></app-create-auction>\n                </div>\n                \n                <div class=\"modal fade\" id=\"addStaffModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addStaffModalLabel\" aria-hidden=\"true\">\n                    <app-add-staff></app-add-staff>\n                </div>\n\n                <div class=\"flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n                    <app-auctions-list></app-auctions-list>\n                </div>\n            </main>\n        </div>\n    </div>\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/create-auction/create-auction.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/create-auction/create-auction.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminCreateAuctionCreateAuctionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Create Auction</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <form #createAuctionForm=\"ngForm\" (ngSubmit)=\"createAuctionForm.valid && onSubmit(createAuctionForm)\">\n                <div class=\"form-group\">\n                    <label>Auction Name:</label>\n                    <!--Get auction name-->\n                    <input type=\"text\" #auctionName=\"ngModel\" [(ngModel)]=\"auction.auctionName\" name=\"auctionName\" placeholder=\"Auction Name\"\n                    required  [ngClass]=\"{'invalid-textbox' :createAuctionForm.submitted && !auctionName.valid }\" class=\"form-control\">\n                    <!--Validate auction name input-->\n                    <div *ngIf=\"createAuctionForm.submitted && !auctionName.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n    \n                <div class=\"form-group\">\n                    <label>Max Items:</label>\n                    <!--Get max items-->\n                    <input type=\"number\" #maxItems=\"ngModel\" [(ngModel)]=\"auction.maxItems\" name=\"maxItems\" placeholder=\"Max Items\"\n                    required  [ngClass]=\"{'invalid-textbox' :createAuctionForm.submitted && !maxItems.valid }\" class=\"form-control\" [pattern]=\"maxItemRegex\">\n                    <!--Validate max items input-->\n                    <div *ngIf=\"createAuctionForm.submitted && !maxItems.valid\">\n                        <label *ngIf=\"maxItems.errors.required\" class=\"text-danger\">This field is required.</label>\n                        <label *ngIf=\"maxItems.errors.pattern\" class=\"text-danger\">Must be at least 1 </label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Address:</label>\n                    <!--Get address-->\n                    <input type=\"text\" #address=\"ngModel\" [(ngModel)]=\"auction.address\" name=\"address\" placeholder=\"Address\"\n                    required  [ngClass]=\"{'invalid-textbox' :createAuctionForm.submitted && !address.valid }\" class=\"form-control\">\n                    <!--Validate address input-->\n                    <div *ngIf=\"createAuctionForm.submitted && !address.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n    \n                <div class=\"form-group\">\n                    <!--Get date and time-->\n                    <label>Date and Time:</label>\n                    <input type=\"datetime-local\" #dateTime=\"ngModel\" [(ngModel)]=\"auction.dateTime\" name=\"dateTime\" placeholder=\"Date and Time\"\n                    required  [ngClass]=\"{'invalid-textbox' :createAuctionForm.submitted && !dateTime.valid }\" class=\"form-control\">\n                    <!--Validate date and time input-->\n                    <div *ngIf=\"createAuctionForm.submitted && !dateTime.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n    \n                <div class=\"form-group\">\n                    <label>Fee:</label>\n                    <!--Get fee-->\n                    <input type=\"number\" #fee=\"ngModel\" [(ngModel)]=\"auction.fee\" name=\"fee\" placeholder=\"Fee\"\n                    required  [ngClass]=\"{'invalid-textbox' :createAuctionForm.submitted && !fee.valid }\" class=\"form-control\" [pattern]=\"maxItemRegex\">\n                    <!--Validate fee input-->\n                    <div *ngIf=\"createAuctionForm.submitted && !fee.valid\">\n                        <label *ngIf=\"fee.errors.required\" class=\"text-danger\">This field is required.</label>\n                        <label *ngIf=\"fee.errors.pattern\" class=\"text-danger\">Must be at least 1 </label>\n                    </div>\n                </div>\n    \n                <div class=\"text-center\">\n                    <!--Submit button-->\n                    <input class=\"btn btn-primary\" type=\"submit\" value=\"Create Auction\">\n                </div>\n                \n            </form>\n        </div>\n\n        <!-- Success message -->\n        <div class=\"alert alert-success\" *ngIf=\"showSucessMessage\">\n            Saved successfully\n        </div>\n        \n        <!-- Error message -->\n        <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages\">\n            {{serverErrorMessages}}\n        </div>\n    </div>\n</div>\n\n\n\n        \n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/quick-sell/quick-sell.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/quick-sell/quick-sell.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminQuickSellQuickSellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Add Quick Sell Item</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        \n        <div class=\"modal-body\">\n            <form #addItemForm=\"ngForm\" (ngSubmit)=\"addItemForm.valid && onSubmit(addItemForm)\">\n                \n                <div class=\"form-group\">\n                    <label>Item Code:</label>\n                    <!--Get item code-->\n                    <input type=\"text\" #itemCode=\"ngModel\" [(ngModel)]=\"item.itemCode\" name=\"itemCode\" placeholder=\"Item Code\"\n                    required  [ngClass]=\"{'invalid-textbox' :addItemForm.submitted && !itemCode.valid }\" class=\"form-control\">\n                    <!--Validate item code input-->\n                    <div *ngIf=\"addItemForm.submitted && !itemCode.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Item Name:</label>\n                    <!--Get item name-->\n                    <input type=\"text\" #itemName=\"ngModel\" [(ngModel)]=\"item.itemName\" name=\"itemName\" placeholder=\"Item Name\"\n                    required  [ngClass]=\"{'invalid-textbox' :addItemForm.submitted && !itemName.valid }\" class=\"form-control\">\n                    <!--Validate item name input-->\n                    <div *ngIf=\"addItemForm.submitted && !itemName.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n    \n                <div class=\"form-group\">\n                    <label>Price:</label>\n                    <!--Get item price-->\n                    <input type=\"number\" #price=\"ngModel\" [(ngModel)]=\"item.price\" name=\"price\" placeholder=\"Price\"\n                    required  [ngClass]=\"{'invalid-textbox' :addItemForm.submitted && !price.valid }\" class=\"form-control\">\n                    <!--Validate item name input-->\n                    <div *ngIf=\"addItemForm.submitted && !price.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Quantity:</label>\n                    <!--Get quantity-->\n                    <input type=\"number\" #quantity=\"ngModel\" [(ngModel)]=\"item.quantity\" name=\"quantity\" placeholder=\"Quantity\"\n                    required  [ngClass]=\"{'invalid-textbox' :addItemForm.submitted && !quantity.valid }\" class=\"form-control\">\n                    <!--Validate quantity input-->\n                    <div *ngIf=\"addItemForm.submitted && !quantity.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Description:</label>\n                    <!--Get description-->\n                    <textarea type=\"text\" #description=\"ngModel\" [(ngModel)]=\"item.description\" name=\"description\" placeholder=\"Description\"\n                    required  [ngClass]=\"{'invalid-textbox' :addItemForm.submitted && !description.valid }\" class=\"form-control\"></textarea>\n                    <!--Validate description input-->\n                    <div *ngIf=\"addItemForm.submitted && !description.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n    \n                <div class=\"text-center\">\n                    <!--Submit button-->\n                    <input class=\"btn btn-primary\" type=\"submit\" value=\"Add Item\">\n                </div>\n                \n            </form>\n           \n        </div>\n    </div>   \n</div>\n\n\n    \n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-users/view-users.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-users/view-users.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminViewUsersViewUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h1 class=\"text-center\">View All Users</h1>\n\n    <button class=\"btn btn-secondary text-center\" (click)=\"onBackBtn()\">\n        < Back\n    </button>\n\n    <table class=\"table mt-3\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">First</th>\n                <th scope=\"col\">Last</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Alias</th>\n                <th scope=\"col\"></th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\"let user of users\">\n                <td>\n                    {{ user.firstName }}\n                </td>\n                <td>\n                    {{ user.lastName }}\n                </td>\n                <td>\n                    {{ user.email }}\n                </td>\n                <td>\n                    {{ user.alias }}\n                </td>\n                <td class=\"text-right\">\n                    <img src=\"../../../../assets/icons/edit-2.svg\" class=\"mr-3\" data-toggle=\"modal\" data-target=\"#editUserModal\" (click)=\"onEditUser(user)\">\n                    <img src=\"../../../../assets/icons/trash-2.svg\" (click)=\"onDelete(user._id)\">\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"modal fade\" id=\"editUserModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editUserModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Edit User</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <form #editUserForm=\"ngForm\" (ngSubmit)=\"editUserForm.valid && onEditUserSubmit(editUserForm)\">\n                    \n                    <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"editUser._id\">\n\n                    <div class=\"form-row mt-2 text-center\">\n                        <div class=\"col\">\n                            <label>First Name: </label>\n                        </div>\n                        <div class=\"col\">\n                            <!--Get user first name-->\n                            <input type=\"text\" #firstName=\"ngModel\" [(ngModel)]=\"editUser.firstName\" name=\"firstName\" placeholder=\"First Name\"\n                            required  [ngClass]=\"{'invalid-textbox': editUserForm.submitted && !firstName.valid }\">\n                            <!--Validate user first name input-->\n                            <div *ngIf=\"editUserForm.submitted && !firstName.valid\">\n                                <label class=\"text-danger\">This field is required.</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-row mt-2 text-center\">\n                        <div class=\"col\">\n                            <label>Last Name: </label>\n                        </div>\n                        <div class=\"col\">\n                            <!--Get user last name-->\n                            <input type=\"text\" #lastName=\"ngModel\" [(ngModel)]=\"editUser.lastName\" name=\"lastName\" placeholder=\"Last Name\"\n                            required  [ngClass]=\"{'invalid-textbox': editUserForm.submitted && !lastName.valid }\">\n                            <!--Validate user last name input-->\n                            <div *ngIf=\"editUserForm.submitted && !lastName.valid\">\n                                <label class=\"text-danger\">This field is required.</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-row mt-2 text-center\">\n                        <div class=\"col\">\n                            <label>Alias: </label>\n                        </div>\n                        <div class=\"col\">\n                            <!--Get user alias-->\n                            <input type=\"text\" #alias=\"ngModel\" [(ngModel)]=\"editUser.alias\" name=\"alias\" placeholder=\"Alias\"\n                            required  [ngClass]=\"{'invalid-textbox': editUserForm.submitted && !alias.valid }\" [pattern]=\"aliasRegex\" maxlength=\"3\">\n                            <!--Validate user alias input-->\n                            <div *ngIf=\"editUserForm.submitted && !alias.valid\">\n                                <label *ngIf=\"alias.errors.required\" class=\"text-danger\">This field is required.</label>\n                                <label *ngIf=\"alias.errors.pattern\" class=\"text-danger\">Invalid alias, must be 3 letters.</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-row mt-2 text-center\">\n                        <div class=\"col\">\n                            <label>Type: </label>\n                        </div>\n                        <div class=\"col\">\n                            <!--Get user type-->\n                            <select id=\"type\" name=\"type\" #type=\"ngModel\" [(ngModel)]=\"editUser.type\">\n                                <option value=\"member\">Member</option>\n                                <option value=\"staff\">Staff</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <!--Submit button-->\n                    <div class=\"mt-2 text-center\">\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit\">\n                    </div>\n\n                    <!-- Success message -->\n                    <div class=\"alert alert-success\" *ngIf=\"showSucessMessage\">\n                        Edited successfully\n                    </div>\n\n                    <!-- Error message -->\n                    <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages\">\n                        {{serverErrorMessages}}\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions-list/auctions-list.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions-list/auctions-list.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsListAuctionsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3\">\n    <h3>Upcoming Auction</h3>\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\n      <div class=\"btn-group mr-2\">\n        <button (click)=\"refresh()\" class=\"btn-refresh\">\n          <img src=\"../../../assets/icons/refresh-cw.svg\">\n          Refresh\n        </button>\n      </div>\n    </div>\n</div>\n\n<div class=\"album py-5 bg-light\">\n  <div class=\"card-container\">\n    <div class=\"row\">\n      <div *ngFor=\"let auc of auctionsInfo\" routerLink=\"/auctions/{{ auc._id }}\" class=\"col-md-4\">\n          <div class=\"card mb-4 shadow-sm\">\n            <img src=\"../../../assets/logo.png\" class=\"card-img border\">\n \n            <div class=\"card-body text-center\">\n              <h4 class=\"card-title\"><b>{{ auc.auctionName }}</b></h4>\n              <p class=\"card-text\"><b>Address:</b></p>\n              <p class=\"card-text\">{{ auc.address }}</p>\n              <p class=\"card-text\"><b>Date and Time:</b></p>\n              <p class=\"card-text\">{{ auc.dateTime| date: \"medium\" }}</p>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/add-item/add-item.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/add-item/add-item.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsAddItemAddItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Add Item</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        \n        <div class=\"modal-body\">\n            <form #addItemForm=\"ngForm\" (ngSubmit)=\"addItemForm.valid && onSubmit(addItemForm)\">\n                <div class=\"form-group\">\n                    <label>Item Name:</label>\n                    <!--Get item name-->\n                    <input type=\"text\" #itemName=\"ngModel\" [(ngModel)]=\"item.itemName\" name=\"itemName\" placeholder=\"Item Name\"\n                    required  [ngClass]=\"{'invalid-textbox' :addItemForm.submitted && !itemName.valid }\" class=\"form-control\">\n                    <!--Validate item name input-->\n                    <div *ngIf=\"addItemForm.submitted && !itemName.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Quantity:</label>\n                    <!--Get quantity-->\n                    <input type=\"number\" #quantity=\"ngModel\" [(ngModel)]=\"item.quantity\" name=\"quantity\" placeholder=\"Quantity\"\n                    required  [ngClass]=\"{'invalid-textbox' :addItemForm.submitted && !quantity.valid }\" class=\"form-control\">\n                    <!--Validate quantity input-->\n                    <div *ngIf=\"addItemForm.submitted && !quantity.valid\">\n                        <label class=\"text-danger\">This field is required.</label>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label>Description:</label>\n                    <!--Get description-->\n                    <textarea type=\"text\" #description=\"ngModel\" [(ngModel)]=\"item.description\" name=\"description\" placeholder=\"Description\"\n                    class=\"form-control\"></textarea>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Upload Images:</label>\n                    <input type=\"file\" #image accept=\"image/*\" (change)=\"selectImage(image)\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group text-center\">\n                    <img style=\"width: 90px; height:90px\" [src]=\"imageSrc\" (click)=\"image.click()\">\n                    <input type=\"button\" (click)=\"uploadImage()\" value=\"Upload\">\n                </div>\n                \n\n                <div class=\"form-group progress\">\n                    <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%\"></div>\n                </div>\n\n                <div class=\"form-group\">\n                    <img style=\"width: 90px; height:90px\" [src]=\"this.imagesListSrc\">\n                    <img style=\"width: 90px; height:90px\">\n                    <img style=\"width: 90px; height:90px\">\n                    <img style=\"width: 90px; height:90px\">\n                    <img style=\"width: 90px; height:90px\">\n                </div>\n                \n                <div class=\"text-center\">\n                    <!--Submit button-->\n                    <input class=\"btn btn-primary\" type=\"submit\" value=\"Add Item\">\n                </div>\n                \n            </form>\n        \n            <!-- Success message -->\n            <div class=\"alert alert-success\" *ngIf=\"showSucessMessage\">\n                Saved successfully\n            </div>\n            \n            <!-- Error message -->\n            <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages\">\n                {{serverErrorMessages}}\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n    \n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/auction-edit/auction-edit.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/auction-edit/auction-edit.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsAuctionEditAuctionEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h1 class=\"mt-5\">Edit Auction</h1>\n\n    <form #editAuctionForm=\"ngForm\" (ngSubmit)=\"editAuctionForm.valid && onSubmit(editAuctionForm)\" class=\"mt-3\">\n        <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"auction._id\">\n        <input type=\"hidden\" name=\"participantID\" #participantID=\"ngModel\" [(ngModel)]=\"auction.participantID\">\n\n        <div class=\"form-row border\">\n            <div class=\"col\">\n                <h5>Auction Details</h5>\n            </div>\n\n            <div class=\"col\">\n                <h5>Current details</h5>\n            </div>\n\n            <div class=\"col\">\n                <h5>New details</h5>\n            </div>\n        </div>\n\n\n        <div class=\"form-row border\">\n            <div class=\"col\">\n                <label>Auction Name:</label>\n            </div>\n            \n            <div class=\"col\">\n                {{ auction.auctionName }}\n            </div>\n\n            <div class=\"col\">\n                <!--Get auction name-->\n                <input type=\"text\" #auctionName=\"ngModel\" [(ngModel)]=\"auction.auctionName\" name=\"auctionName\" placeholder=\"Auction Name\"\n                required  [ngClass]=\"{'invalid-textbox' :editAuctionForm.submitted && !auctionName.valid }\" class=\"form-control\">\n                <!--Validate auction name input-->\n                <div *ngIf=\"editAuctionForm.submitted && !auctionName.valid\">\n                    <label class=\"text-danger\">This field is required.</label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-row border\">\n            <div class=\"col\">\n                <label>Max Items:</label>\n            </div>\n\n            <div class=\"col\">\n                {{ auction.maxItems }}\n            </div>\n\n            <div class=\"col\">\n                <!--Get max items-->\n                <input type=\"number\" #maxItems=\"ngModel\" [(ngModel)]=\"auction.maxItems\" name=\"maxItems\" placeholder=\"Max Items\"\n                required  [ngClass]=\"{'invalid-textbox' :editAuctionForm.submitted && !maxItems.valid }\" class=\"form-control\">\n                <!--Validate max items input-->\n                <div *ngIf=\"editAuctionForm.submitted && !maxItems.valid\">\n                    <label class=\"text-danger\">This field is required.</label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-row border\">\n            <div class=\"col\">\n                <label>Address:</label>\n            </div>\n\n            <div class=\"col\">\n                {{ auction.address }}\n            </div>\n\n            <div class=\"col\">\n                <!--Get address-->\n                <input type=\"text\" #address=\"ngModel\" [(ngModel)]=\"auction.address\" name=\"address\" placeholder=\"Address\"\n                required  [ngClass]=\"{'invalid-textbox' :editAuctionForm.submitted && !address.valid }\" class=\"form-control\">\n                <!--Validate address input-->\n                <div *ngIf=\"editAuctionForm.submitted && !address.valid\">\n                    <label class=\"text-danger\">This field is required.</label>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"form-row border\">\n            <div class=\"col\">\n                <label>Date and Time:</label>\n            </div>\n\n            <div class=\"col\">\n                {{ auction.dateTime | date: 'medium' }}\n            </div>\n\n            <div class=\"col\">\n                <!--Get date and time-->\n                <input type=\"datetime-local\" #dateTime=\"ngModel\" [(ngModel)]=\"auction.dateTime\" name=\"dateTime\" placeholder=\"Date and Time\"\n                required  [ngClass]=\"{'invalid-textbox' :editAuctionForm.submitted && !dateTime.valid }\" class=\"form-control\">\n                <!--Validate date and time input-->\n                <div *ngIf=\"editAuctionForm.submitted && !dateTime.valid\">\n                    <label class=\"text-danger\">This field is required.</label>\n                </div>\n            </div>\n            \n        </div>\n\n        <div class=\"form-row border\">\n            <div class=\"col\">\n                <label>Fee:</label>\n            </div>\n\n            <div class=\"col\">\n                {{ auction.fee }}\n            </div>\n\n            <div class=\"col\">\n                <!--Get fee-->\n                <input type=\"number\" #fee=\"ngModel\" [(ngModel)]=\"auction.fee\" name=\"fee\" placeholder=\"Fee\"\n                required  [ngClass]=\"{'invalid-textbox' :editAuctionForm.submitted && !fee.valid }\" class=\"form-control\">\n                <!--Validate fee input-->\n                <div *ngIf=\"editAuctionForm.submitted && !fee.valid\">\n                    <label class=\"text-danger\">This field is required.</label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mt-3 mr-5 ml-5\">\n\n            <!--Submit button-->\n            <input class=\"btn btn-primary\" type=\"submit\" value=\"Edit Auction\">\n\n            <button class=\"btn btn-danger\" (click)=\"deleteAuction()\">Delete Auction</button>\n            \n            <button class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\n\n        </div>\n    </form>\n\n    <!-- Success message -->\n    <div class=\"alert alert-success\" *ngIf=\"showSucessMessage\">\n        Edited successfully\n    </div>\n\n    <!-- Error message -->\n    <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages\">\n        {{serverErrorMessages}}\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/auctions.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/auctions.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsAuctionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n    <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n      <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Colorado Aquarium Society</a>\n      <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n          <a class=\"nav-link\" (click)=\"onLogout()\">\n            <img src=\"../../../assets/icons/log-out.svg\">  \n            Sign out\n          </a>\n        </li>\n      </ul>\n    </nav>\n  \n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n          <div class=\"sidebar-sticky\">\n            <ul class=\"nav flex-column\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\">\n                  <img src=\"../../../assets/icons/dollar-sign-blue.svg\">\n                  Auction <span class=\"sr-only\">(current)</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\">\n                  <img src=\"../../../assets/icons/home-black.svg\">\n                  Dashboard\n                </a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n  \n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n                <h1 class=\"h2\">Auction Name: {{ auctionInfo.auctionName }}</h1>\n                <div class=\"btn-toolbar mb-2 mb-md-0\">\n                <div class=\"btn-group mr-2\">\n                    <span>Welcome! <a routerLink=\"/user-profile\">{{ userDetails.firstName }}</a> [ {{ userDetails.type }} ]</span>\n                </div>\n                </div>\n            </div>\n  \n            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n                <table class=\"table table-striped table-sm\">\n                    <tbody>\n                        <tr>\n                            <td>Max Items:</td>\n                            <td>{{ auctionInfo.maxItems }}</td>\n                        </tr>\n                        <tr>\n                            <td>Address:</td>\n                            <td>{{ auctionInfo.address }}</td>\n                        </tr>\n                        <tr>\n                            <td>Date and Time:</td>\n                            <td>{{ auctionInfo.dateTime | date: \"medium\" }}</td>\n                        </tr>\n                        <tr>\n                            <td>Fee:</td>\n                            <td>{{ auctionInfo.fee | currency }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\n              <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/dashboard\">\n                <img src=\"../../../assets/icons/home-white.svg\">\n                Dashboard\n              </button>\n\n              <div *ngIf=\"!isParticipate\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onParticipate()\">\n                  <img src=\"../../../assets/icons/check-white.svg\">\n                  Participate\n                </button>\n              </div>\n\n              <div *ngIf=\"isParticipate\">\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onNotParticipate()\">\n                  <img src=\"../../../assets/icons/x-white.svg\">\n                  Not Participate\n                </button>\n              </div>\n\n              <div *ngIf=\"isParticipate\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#sellItemModal\">\n                  <img src=\"../../../assets/icons/tag-white.svg\">\n                  Sell item\n                </button>\n              </div>\n\n              <div *ngIf=\"staff\">\n                <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/editAuction/{{ auctionInfo._id }}\">\n                  <img src=\"../../../assets/icons/edit-white.svg\">\n                  Edit\n                </button>\n              </div>\n\n              <div >\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#quickSellModal\">\n                  <img src=\"\">\n                  Quick Sell\n                </button>\n              </div>\n             \n              <div *ngIf=\"staff\">\n                <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/live/{{ auctionInfo._id }}\">\n                  <img src=\"../../../assets/icons/play-white.svg\">\n                  Start\n                </button>\n              </div>\n            </div>\n\n            <div class=\"modal fade\" id=\"sellItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sellItemModal\" aria-hidden=\"true\">        \n                <app-add-item></app-add-item>\n            </div>\n\n            <div class=\"modal fade\" id=\"quickSellModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"quickSellModalLabel\" aria-hidden=\"true\">\n              <app-quick-sell></app-quick-sell>\n            </div>\n            \n            <div class=\"flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n              <app-item-list></app-item-list>  \n            </div>\n            \n            <div class=\"flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n              <app-participants-list></app-participants-list>\n            </div>\n\n            <div class=\"flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n              <app-seller-items-list></app-seller-items-list>  \n            </div>\n        </main>\n      </div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/item-list/item-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/item-list/item-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsItemListItemListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3\">\n    <h3>Auction Items:</h3>\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\n      <div class=\"btn-group mr-2\">\n        <!--Refresh button-->\n        <button (click)=\"refresh()\" class=\"btn-refresh\">\n          <img src=\"../../../assets/icons/refresh-cw.svg\">\n          Refresh</button>\n      </div>\n    </div>\n</div>\n\n<!--Display items in a card container-->\n<div class=\"card-container\">\n  <!--Display each items in the list-->\n    <div class=\"card\" *ngFor=\"let item of auctionItem\">\n        <img src=\"../../../assets/auction-fish.jpeg\" routerLink=\"/itemPage/{{ item._id }}\" class=\"card-img\" >\n        <h5><b>{{ item.itemName }}</b></h5>\n        <p>Qty: {{ item.quantity }}</p>\n        <p>Code: {{ item.itemCode }}</p>\n    </div>\n</div>\n<hr>\n<h3>Quick Sell Items:</h3>\n<div class=\"card-container\">\n  <!--Display each items in the list-->\n    <div class=\"card\" *ngFor=\"let item of quickSellitems\">\n        <img src=\"../../../assets/auction-fish.jpeg\" routerLink=\"/itemPage/{{ item._id }}\" class=\"card-img\" >\n        <h5><b>{{ item.itemName }}</b></h5>\n        <p>Qty: {{ item.quantity }}</p>\n        <p>Code: {{ item.itemCode }}</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/item-page/item-page.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/item-page/item-page.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsItemPageItemPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h1 class=\"text-center\">Item Info</h1>\n\n    <button class=\"btn btn-secondary text-center\" (click)=\"onBackBtn()\">\n        < Back\n    </button>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-md-8 border\">\n          <div class=\"text-center\">\n              <img class=\"img-fluid\" src=\"../../../assets/auction-fish.jpeg\" width=\"350\">\n          </div>\n        </div>\n    \n        <div class=\"col-md-4 border text-center\">\n            <div class=\"mt-5\">\n                <h3><p>{{ itemInfo.itemName }}</p></h3>\n                <p>\n                <label>Item Code:</label>\n                {{ itemInfo.itemCode }}\n                </p>\n                <p>\n                <label>Quantity:</label>\n                {{ itemInfo.quantity }}\n                </p>\n                <p>\n                    <label>Seller:</label>\n                    {{ sellerInfo.firstName }} {{ sellerInfo.lastName }}\n                </p>\n                <p>\n                <label>Description:</label><br>\n                {{ itemInfo.description }}\n                </p>\n\n                <div *ngIf=\"staff || (userDetails._id == sellerInfo._id)\">\n                    <div class=\"form-row text-center mt-5\">\n                        <div class=\"col\">\n                            <button class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#editItemCollapse\" aria-expanded=\"false\" aria-controls=\"editItemCollapse\">Edit</button>\n                        </div>\n                        <div class=\"col\">\n                            <button class=\"btn btn-danger\" (click)=\"onDeleteItem()\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"lead border mt-3\">\n        <div class=\"collapse\" id=\"editItemCollapse\">\n            <div class=\"card card-body\">\n                <h3 class=\"text-center\">Edit Item</h3>\n\n                <form #editItemForm=\"ngForm\" (ngSubmit)=\"editItemForm.valid && onEditItemSubmit(editItemForm)\">\n                    <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"itemInfo._id\">\n\n                    <div class=\"form-row mt-2 text-center\">\n                        <div class=\"col\">\n                            <label>Item Name: </label>\n                        </div>\n                        <div class=\"col\">\n                            <!--Get item name-->\n                            <input type=\"text\" #itemName=\"ngModel\" [(ngModel)]=\"itemInfo.itemName\" name=\"itemName\" placeholder=\"Item Name\"\n                            required  [ngClass]=\"{'invalid-textbox': editItemForm.submitted && !itemName.valid }\">\n                            <!--Validate item name input-->\n                            <div *ngIf=\"editItemForm.submitted && !itemName.valid\">\n                                <label class=\"text-danger\">This field is required.</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-row mt-2 text-center\">\n                        <div class=\"col\">\n                            <label>Quantity: </label>\n                        </div>\n                        <div class=\"col\">\n                            <!--Get item quantity-->\n                            <input type=\"number\" #quantity=\"ngModel\" [(ngModel)]=\"itemInfo.quantity\" name=\"quantity\" placeholder=\"Quantity\"\n                            required  [ngClass]=\"{'invalid-textbox': editItemForm.submitted && !quantity.valid }\">\n                            <!--Validate item quantity input-->\n                            <div *ngIf=\"editItemForm.submitted && !quantity.valid\">\n                                <label class=\"text-danger\">This field is required.</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"itemInfo.type =='quick sell'\">\n                        <div class=\"form-row mt-2 text-center\">\n                            <div class=\"col\">\n                                <label>Price: </label>\n                            </div>\n                            <div class=\"col\">\n                                <!--Get item quantity-->\n                                <input type=\"number\" #price=\"ngModel\" [(ngModel)]=\"itemInfo.price\" name=\"price\" placeholder=\"Pirce\"\n                                required  [ngClass]=\"{'invalid-textbox': editItemForm.submitted && !price.valid }\">\n                                <!--Validate item quantity input-->\n                                <div *ngIf=\"editItemForm.submitted && !price.valid\">\n                                    <label class=\"text-danger\">This field is required.</label>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row mt-2 text-center\">\n                            <div class=\"col\">\n                                <label>Buyer ID: </label>\n                            </div>\n                            <div class=\"col\">\n                                <!--Get item quantity-->\n                                <input type=\"text\" #buyerID=\"ngModel\" [(ngModel)]=\"itemInfo.buyerID\" name=\"buyerID\" placeholder=\"Buyer Alias\"\n                                required  [ngClass]=\"{'invalid-textbox': editItemForm.submitted && !buyerID.valid }\">\n                                <!--Validate item quantity input-->\n                                <div *ngIf=\"editItemForm.submitted && !buyerID.valid\">\n                                    <label class=\"text-danger\">This field is required.</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-row mt-2 text-center\">\n                            <div class=\"col\">\n                                <label>Paid: </label>\n                            </div>\n                            <div class=\"col\">\n                                <!--Get item quantity-->\n                                <input type=\"checkbox\" #paid=\"ngModel\" [(ngModel)]=\"itemInfo.paid\" name=\"paid\">\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-row mt-2 text-center\">\n                        <div class=\"col\">\n                            <label>Description: </label>\n                        </div>\n                        <div class=\"col\">\n                            <!--Get item description-->\n                            <textarea type=\"text\" #description=\"ngModel\" [(ngModel)]=\"itemInfo.description\" name=\"description\" placeholder=\"Description\"\n                            required  [ngClass]=\"{'invalid-textbox': editItemForm.submitted && !description.valid }\"></textarea>\n                            <!--Validate item description input-->\n                            <div *ngIf=\"editItemForm.submitted && !description.valid\">\n                                <label class=\"text-danger\">This field is required.</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--Submit button-->\n                    <div class=\"mt-2 text-center\">\n                        <input type=\"submit\" class=\"btn btn-primary mt-3\" value=\"Edit\">\n                    </div>\n\n                    <!-- Success message -->\n                    <div class=\"alert alert-success mt-3\" *ngIf=\"showSucessMessage\">\n                        Edited successfully\n                    </div>\n\n                    <!-- Error message -->\n                    <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages\">\n                        {{serverErrorMessages}}\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/live-auction/live-auction.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/live-auction/live-auction.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsLiveAuctionLiveAuctionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"text-center\" style=\"background-color: grey;\">\n      <h1 class=\"pt-3\">LIVE AUCTIONING</h1>\n      <h1 class=\"pb-3\">{{ auction.auctionName }}</h1>\n  </div>\n\n  <!-- Search form -->\n  <form class=\"form-inline border border-secondary rounded mt-3 mb-3\">\n    <img src=\"../../../assets/icons/search.svg\">\n    <input class=\"form-control form-control-sm ml-3 w-75 mr-3\" type=\"text\" placeholder=\"Search Item Code\"\n      aria-label=\"Search\" [(ngModel)]=\"search\" name=\"search\">\n    <button class=\"btn btn-dark\" (click)=\"onSearch()\">Search</button>\n  </form>\n  \n  <div class=\"row mt-3\">\n    <div class=\"col-md-8 border\">\n      <div class=\"text-center\">\n          <img class=\"img-fluid\" src=\"../../../assets/auction-fish.jpeg\" width=\"350\">\n      </div>\n    </div>\n\n    <div class=\"col-md-4 border text-center\">\n      <div class=\"mt-5\">\n        <h3><p>{{ items && items[i].itemName }}</p></h3>\n        <p>\n          <label>Code:</label>\n          {{ items && items[i].itemCode }}\n        </p>\n        <p>\n          <label>Quantity:</label>\n          {{ items && items[i].quantity }}\n        </p>\n        <p>\n          <label>Description:</label><br>\n          {{ items && items[i].description }}\n        </p>\n\n        <div class=\"form-group\">\n          <label>Final Price:</label>\n          <input type=\"number\" placeholder=\"Final Price\" #price=\"ngModel\" [(ngModel)]=\"items && items[i].price\"\n          name=\"price\" class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Winner Number:</label>\n          <input type=\"number\" placeholder=\"Winner Number\" [(ngModel)]=\"winnerNum\" class=\"form-control\" required>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-8 border text-center pt-3 pb-3\">\n      Image List\n    </div>\n  \n    <div class=\"col-md-4 border text-center pt-3 pb-3\">\n      <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n    </div>\n  </div>\n  \n  <div class=\"row mt-2\">\n    <div class=\"col text-center\">\n      <button (click)=\"onPrev()\"><img src=\"../../../assets/icons/chevron-left.svg\"></button>\n    \n      {{ i + 1 }} / {{ items && items.length }}\n    \n      <button (click)=\"onNext()\"><img src=\"../../../assets/icons/chevron-right.svg\"></button>\n    </div>\n  </div>\n  \n\n  <div class=\"mt-5\">\n    <app-participants-list></app-participants-list>\n  </div>\n  \n  <app-item-list></app-item-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/participants-list/participants-list.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/participants-list/participants-list.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsParticipantsListParticipantsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3\">\n    <h3>Participants:</h3>\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\n      <div class=\"btn-group mr-2\">\n        <!--Refresh button-->\n        <button (click)=\"refresh()\" class=\"btn-refresh\">\n            <img src=\"../../../assets/icons/refresh-cw.svg\">\n            Refresh</button>\n      </div>\n    </div>\n</div>\n\n<table class=\"table\">\n    <thead class=\"thead-dark\">\n        <tr>\n            <th scope=\"col\">Bidder #</th>\n            <th scope=\"col\">First</th>\n            <th scope=\"col\">Last</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Alias</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let participant of participantsInfo; let i = index\">\n            <th scope=\"row\">\n                {{ i + 1 }}\n            </th>\n            <td>\n                {{ participant.firstName }}\n            </td>\n            <td>\n                {{ participant.lastName }}\n            </td>\n            <td>\n                {{ participant.email }}\n            </td>\n            <td>\n                {{ participant.alias }}\n            </td>\n        </tr>\n    </tbody>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/seller-items-list/seller-items-list.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/seller-items-list/seller-items-list.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuctionsSellerItemsListSellerItemsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3\">\n    <h3>My Selling Items:</h3>\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\n      <div class=\"btn-group mr-2\">\n        <!--Refresh button-->\n        <button (click)=\"refresh()\" class=\"btn-refresh\">\n          <img src=\"../../../assets/icons/refresh-cw.svg\">\n          Refresh</button>\n      </div>\n    </div>\n</div>\n\n<!-- Display items in a card container-->\n<div class=\"card-container\">\n  <!--Display each items in the list-->\n    <div class=\"card\" *ngFor=\"let item of sellerItems\">\n        <img src=\"../../../assets/auction-fish.jpeg\" routerLink=\"/itemPage/{{ item._id }}\" class=\"card-img\" >\n        <h5><b>{{ item.itemName }}</b></h5>\n        <p>Qty: {{ item.quantity }}</p>\n        <p>Code: {{ item.itemCode }}</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/cart/cart.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/cart/cart.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"px-4 px-lg-0\">\n    <div class=\"container py-5 text-center\">\n        <h1 class=\"display-4\">{{ userDetails.firstName }} SHOPPING CART</h1>\n    </div>\n  \n    <div class=\"pb-5\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 p-5 bg-white rounded shadow-sm mb-5\">\n  \n            <!-- Shopping cart table -->\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\" class=\"border-0 bg-light\">\n                      <div class=\"p-2 px-3 text-uppercase\">Product</div>\n                    </th>\n                    <th scope=\"col\" class=\"border-0 bg-light\">\n                      <div class=\"py-2 text-uppercase\">Price</div>\n                    </th>\n                    <th scope=\"col\" class=\"border-0 bg-light\">\n                      <div class=\"py-2 text-uppercase\">Quantity</div>\n                    </th>\n                    <th scope=\"col\" class=\"border-0 bg-light\">\n                      <div class=\"py-2 text-uppercase\">Remove</div>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of items\">\n                    <th scope=\"row\" class=\"border-0\">\n                      <div class=\"p-2\">\n                        <img src=\"https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg\" alt=\"\" width=\"70\" class=\"img-fluid rounded shadow-sm\">\n                        <div class=\"ml-3 d-inline-block align-middle\">\n                          <h5 class=\"mb-0\"> <a href=\"#\" class=\"text-dark d-inline-block align-middle\">{{ item.itemName }}</a></h5>\n                        </div>\n                      </div>\n                    </th>\n                    <td class=\"border-0 align-middle\"><strong>{{ item.price | currency }}</strong></td>\n                    <td class=\"border-0 align-middle\"><strong>{{ item.quantity }}</strong></td>\n                    <td class=\"border-0 align-middle\">\n                      <a href=\"#\" class=\"text-dark\"><img src=\"../../../assets/icons/trash-2.svg\"></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <!-- End -->\n          </div>\n        </div>\n  \n        <div class=\"row py-5 p-4 bg-white rounded shadow-sm\">\n          <div class=\"col-lg-6\">\n            <div class=\"bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold\">Order summary </div>\n            <div class=\"p-4\">\n              <ul class=\"list-unstyled mb-4\">\n                <li class=\"d-flex justify-content-between py-3 border-bottom\"><strong class=\"text-muted\">Total</strong>\n                  <h5 class=\"font-weight-bold\">{{ total | currency }}</h5>\n                </li>\n              </ul><a routerLink=\"/checkout\" class=\"btn btn-dark rounded-pill py-2 btn-block\">Procceed to checkout</a>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"!paidFor\">\n        </div>\n        \n        <div *ngIf=paidFor>\n          <h1> Payment Successfully </h1>\n        </div>\n        \n        <div [hidden]=\"paidFor\" #paypal></div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/cart/check-out/check-out.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/cart/check-out/check-out.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardCartCheckOutCheckOutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"bg-light\">\n    <div class=\"container\">\n  <div class=\"py-5 text-center\">\n    <img class=\"d-block mx-auto mb-4\" src=\"\" alt=\"\" width=\"72\" height=\"72\">\n    <h2>Checkout form</h2>\n    <p class=\"lead\">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4 order-md-2 mb-4\">\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n        <span class=\"text-muted\">Your cart</span>\n        <span class=\"badge badge-secondary badge-pill\">3</span>\n      </h4>\n      <ul class=\"list-group mb-3\">\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Product name</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$12</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Second product</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$8</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Third item</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$5</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between bg-light\">\n          <div class=\"text-success\">\n            <h6 class=\"my-0\">Promo code</h6>\n            <small>EXAMPLECODE</small>\n          </div>\n          <span class=\"text-success\">-$5</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between\">\n          <span>Total (USD)</span>\n          <strong>$20</strong>\n        </li>\n      </ul>\n\n      <form class=\"card p-2\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n          <div class=\"input-group-append\">\n            <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-8 order-md-1\">\n      <h4 class=\"mb-3\">Billing address</h4>\n      <form class=\"needs-validation\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\n            <div class=\"invalid-feedback\">\n              Valid first name is required.\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\n            <div class=\"invalid-feedback\">\n              Valid last name is required.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"username\">Username</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">@</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\n            <div class=\"invalid-feedback\" style=\"width: 100%;\">\n              Your username is required.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n          <div class=\"invalid-feedback\">\n            Please enter a valid email address for shipping updates.\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"address\">Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n          <div class=\"invalid-feedback\">\n            Please enter your shipping address.\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n          <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-5 mb-3\">\n            <label for=\"country\">Country</label>\n            <select class=\"custom-select d-block w-100\" id=\"country\" required>\n              <option value=\"\">Choose...</option>\n              <option>United States</option>\n            </select>\n            <div class=\"invalid-feedback\">\n              Please select a valid country.\n            </div>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"state\">State</label>\n            <select class=\"custom-select d-block w-100\" id=\"state\" required>\n              <option value=\"\">Choose...</option>\n              <option>California</option>\n            </select>\n            <div class=\"invalid-feedback\">\n              Please provide a valid state.\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"zip\">Zip</label>\n            <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Zip code required.\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n          <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n          <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n        </div>\n        <hr class=\"mb-4\">\n\n        <h4 class=\"mb-3\">Payment</h4>\n\n        <div class=\"d-block my-3\">\n          <div class=\"custom-control custom-radio\">\n            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n            <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n            <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-name\">Name on card</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n            <small class=\"text-muted\">Full name as displayed on card</small>\n            <div class=\"invalid-feedback\">\n              Name on card is required\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-number\">Credit card number</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Credit card number is required\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">Expiration</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Expiration date required\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-cvv\">CVV</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Security code required\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\n      </form>\n    </div>\n  </div>\n\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">&copy; 2017-2019 Company Name</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n</div>\n<script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\" integrity=\"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\" crossorigin=\"anonymous\"></script>\n      <script>window.jQuery || document.write('<script src=\"/docs/4.4/assets/js/vendor/jquery.slim.min.js\"><\\/script>')</script><script src=\"/docs/4.4/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm\" crossorigin=\"anonymous\"></script>\n        <script src=\"form-validation.js\"></script></body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n    <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n      <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Colorado Aquarium Society</a>\n      <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n          <a class=\"nav-link\" (click)=\"onLogout()\"><img src=\"../../../assets/icons/log-out.svg\">  Sign out</a>\n        </li>\n      </ul>\n    </nav>\n  \n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n          <div class=\"sidebar-sticky\">\n            <ul class=\"nav flex-column\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\">\n                  <img src=\"../../../assets/icons/home-blue.svg\">\n                  Dashboard <span class=\"sr-only\">(current)</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">\n                  <img src=\"../../../assets/icons/file-black.svg\">\n                  Orders\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/cart\">\n                  <img src=\"../../../assets/icons/shopping-cart-black.svg\">\n                  Cart\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/user-profile\">\n                  <img src=\"../../../assets/icons/user-black.svg\">\n                  Profile\n                </a>\n              </li>\n              <div *ngIf=\"staff\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/admin\">\n                    <img src=\"../../../assets/icons/settings-black.svg\">\n                    Admin\n                  </a>\n                </li>\n              </div>\n            </ul>\n          </div>\n        </nav>\n  \n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">Dashboard</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n              <div class=\"btn-group mr-2\">\n                <span>Welcome! <a routerLink=\"/user-profile\">{{ userDetails.firstName }}</a> [ {{ userDetails.type }} ]</span>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n              <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/\">\n                <img src=\"../../../assets/icons/file-white.svg\"> \n                Orders\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/cart\">\n                <img src=\"../../../assets/icons/shopping-cart-white.svg\"> \n                Cart\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/user-profile\">\n                <img src=\"../../../assets/icons/user-white.svg\">\n                Profile\n              </button>\n              <div *ngIf=\"staff\">\n                <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/admin\">\n                  <img src=\"../../../assets/icons/settings-white.svg\">\n                  Admin\n                </button>\n              </div>\n          </div>\n  \n          <div class=\"flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <app-auctions-list></app-auctions-list> \n          </div>\n        </main>\n      </div>\n    </div>\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"landing is-preload\">\n    \n    <!-- Page Wrapper -->\n    <div id=\"page-wrapper\">\n\n        <!-- Header -->\n        <header id=\"header\" class=\"alt\">\n            <h1><a>Colorado Aquarium Society Auction Portal</a></h1>\n            <nav id=\"nav\">\n                <ul>\n                    <li class=\"special\">\n                        <a class=\"menuToggle\" (click)=\"onMenuClick()\"><span>Menu</span></a>\n                        <div *ngIf=\"toggle\" id=\"menu\">\n                            <ul>\n                                <li><a routerLink=\"/\">Home</a></li>\n                                <li><a href=\"\">Contact Us</a></li>\n                                <li><a href=\"\">Auction Schedule</a></li>\n                                <li><a routerLink=\"/user/signup\">Sign Up</a></li>\n                                <li><a routerLink=\"/user/signin\">Sign In</a></li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </nav>\n        </header>\n\n        <!-- Banner -->\n        <section id=\"banner\">\n            <div class=\"inner\">\n                <h2>COLORADO AQUARIUM SOCIETY LIVE AUCTION</h2>\n                <p>Dive Into Colorado's <br />\n                Largest Exotic Fish Auction<br />\n                Built By <a href=\"https://engineering.ucdenver.edu/academics/undergraduate-programs/undergraduate-programs-in-computer-science/bs-in-computer-science\">CU DENVER Computer Engineering Students</a>.</p>\n                <ul class=\"actions special\">\n                    <li><a href=\"#\" class=\"button primary\">Sign In or Join Now!</a></li>\n                </ul>\n            </div>\n            <a href=\"#one\" class=\"more scrolly\">Learn More</a>\n        </section>\n\n        <!-- One -->\n        <section id=\"one\" class=\"wrapper style1 special\">\n            <div class=\"inner\">\n                <header class=\"major\">\n                    <h2>Join Us At Our Next Upcoming Auction!<br/>\n                    </h2>\n                    <p>Next Auction in on: 01/01/2020 @ 4pm MST</p>\n                </header>\n                <ul class=\"icons major\">\n                    <li><span class=\"icon fa-gem major style1\"><span class=\"label\">Lorem</span></span></li>\n                    <li><span class=\"icon fa-heart major style2\"><span class=\"label\">Ipsum</span></span></li>\n                    <li><span class=\"icon solid fa-code major style3\"><span class=\"label\">Dolor</span></span></li>\n                </ul>\n            </div>\n        </section>\n\n        <!-- Two -->\n        <section id=\"two\" class=\"wrapper alt style2\">\n            <section class=\"spotlight\">\n                <div class=\"image\"><img src=\"assets/home/images/clownFish.jpg\" alt=\"\" /></div><div class=\"content\">\n                    <h2>Welcome to Colorado Aquarium Society!<br /> </h2>\n                    <p>We host monthy local exotic fish and aquarium related auctions.Bi-Annually we host 2 large-scale auctions for the public. Join Our Club!</p>\n                </div>\n            </section>\n            <section class=\"spotlight\">\n                <div class=\"image\"><img src=\"assets/home/images/stripedFish.jpg\" alt=\"\" /></div><div class=\"content\">\n                    <h2>Learn More about which items can be used in the auction here<br />\n                    Click Below</h2>\n                    <p>In order to participate in our auction(s), please follow our guidelines on accepted items.</p>\n                </div>\n            </section>\n            <section class=\"spotlight\">\n                <div class=\"image\"><img src=\"assets/home/images/blueStringRay.jpg\" alt=\"\" /></div><div class=\"content\">\n                    <h2>Reach Out To Us Directly<br /></h2>\n                    <p>Interested in learning more about us? Contact Us today!</p>\n                </div>\n            </section>\n        </section>\n\n        <!-- Three -->\n        <section id=\"three\" class=\"wrapper style3 special\">\n            <div class=\"inner\">\n                <header class=\"major\">\n                    <h2>Am I ready to participate in the auction?.</h2>\n                    <p>Use the checklist below to make sure your are prepared and ready for the auction.</p><br/>\n                </header>\n                <ul class=\"features\">\n                    <li class=\"icon fa-brain\">\n                        <h3>1. Remember/Find your UserID</h3>\n                        <p>Your userID is unique and assigned to you when you sign up for our club. Do not lose this. You will use the userID number to participate in the Auction and also sign into this website. <br />\n                        You will use the userID to upload items for the auction and also to checkout and purchase items you've won.</p>\n                    </li>\n                    <li class=\"icon fab-cc-paypal\">\n                        <h3>2. I want to sell items in the CAS auction.</h3>\n                        <p>To sell at our auctions please follow the auction guidlines before uploading your products in order to avoid having your items be rejected. Please have a title, minimum bid price, image, and description for each of your items.<br />\n                        Sign in using your userID and Sell Items to begin the process.</p>\n                    </li>\n                    <li class=\"icon solid fa-code\">\n                        <h3>3. How do I checkout and pay for my items?</h3>\n                        <p>In order to purchase and checkout the items you've won, you must sign in to our dashboard. There you can access a list of the items you've won and also <br />\n                        purchase them using PayPal. Staff will assign your quick sale items to this same dashboard for you to checkout and purchase.</p>\n                    </li>\n                    <li class=\"icon solid fa-computer\">\n                        <h3>4. If my item does not get sold, how do I get it back?</h3>\n                        <p>In our system we will know which items were sold and which were not. We will return the items to the people who did not have their item sold.<br />\n                        Please contact our staff after the auction.</p>\n                    </li>\n                    <li class=\"icon fa-schedule\">\n                        <h3>5. Where can I view the Auction Schedule?</h3>\n                        <p>The auction schedule is available here: Auction Schedule 2019. The auctions are held at 1111 Apple Road Denver, CO at 5pm.</p>\n                    </li>\n                    <li class=\"icon fa-flag\">\n                        <h3>6.When can I upload items to the next upcoming auction?</h3>\n                        <p>You can upload your auction items as soon as the previous auction ends. They will be reviewed by our team if they dont follow our guidelines, please view those here: CAS Auction Items Guidelines.</p>\n                    </li>\n                </ul>\n            </div>\n        </section>\n\n        <!-- CTA -->\n        <section id=\"cta\" class=\"wrapper style4\">\n            <div class=\"inner\">\n                <header>\n                    <h2>Join Our Club and Sign Up Today!</h2>\n                    <p>Sign up for our upcoming auctions by joining today! </p>\n                </header>\n                <ul class=\"actions stacked\">\n                    <li><a routerLink=\"/user/signup\" class=\"button fit primary\">Sign Up</a></li>\n                    <li><a routerLink=\"/user/signin\" class=\"button fit\">Sign In</a></li>\n                </ul>\n            </div>\n        </section>\n\n        <!-- Footer -->\n        <footer id=\"footer\">\n            <ul class=\"icons\">\n                <li><a href=\"#\" class=\"icon brands fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n                <li><a href=\"#\" class=\"icon brands fa-facebook-f\"><span class=\"label\">Facebook</span></a></li>\n                <li><a href=\"#\" class=\"icon brands fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n                <li><a href=\"#\" class=\"icon brands fa-dribbble\"><span class=\"label\">Dribbble</span></a></li>\n                <li><a href=\"#\" class=\"icon solid fa-envelope\"><span class=\"label\">Email</span></a></li>\n            </ul>\n            <ul class=\"copyright\">\n                <li>&copy; Colorado Aquarium Society</li><li>CAS Live Auction: <a href=\"https://www.aquariumrestaurants.com/downtownaquariumdenver/\">Learn More</a></li>\n            </ul>\n        </footer>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/forgot-password/forgot-password.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/forgot-password/forgot-password.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center mt-3 mb-3\"><b><u>Forgot Password</u></b></div>\n<p>We will send you a reset link to your email.</p>\n<form #forgotPasswordForm=\"ngForm\" (ngSubmit)=\"forgotPasswordForm.valid && onSubmit(forgotPasswordForm)\">\n    <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" placeholder=\"Email\"\n    required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox': forgotPasswordForm.submitted && !email.valid }\">\n    <!--Validate user email-->\n    <div *ngIf=\"forgotPasswordForm.submitted && email.errors\">\n        <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n    </div>\n\n    <input type=\"submit\" value=\"Send Code\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n    Email Sent \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/reset-password/reset-password.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/reset-password/reset-password.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center mt-3 mb-3\"><b><u>Reset Password</u></b></div>\n\n<form #resetPasswordForm=\"ngForm\" (ngSubmit)=\"resetPasswordForm.valid && onSubmit(resetPasswordForm)\">\n\n    <input type=\"password\" name=\"newPassword\" #newPassword=\"ngModel\" [(ngModel)]=\"password.newPassword\" placeholder=\"New Password\"\n    minlength=\"6\" required [ngClass]=\"{'invalid-textbox': resetPasswordForm.submitted && !newPassword.valid }\">\n    <!--Validate new password-->\n    <div *ngIf=\"resetPasswordForm.submitted && newPassword.errors\">\n        <label *ngIf=\"newPassword.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"newPassword.errors.minlength\" class=\"validation-message\">Enter atleast 6 characters.</label>\n    </div>\n\n    <input type=\"password\" name=\"confirmPassword\" #confirmPassword=\"ngModel\" [(ngModel)]=\"password.confirmPassword\" placeholder=\"Confirm Password\"\n    minlength=\"6\" required [ngClass]=\"{'invalid-textbox': resetPasswordForm.submitted && !confirmPassword.valid }\">\n    <!--Validate confirm password-->\n    <div *ngIf=\"resetPasswordForm.submitted && confirmPassword.errors\">\n        <label *ngIf=\"confirmPassword.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"confirmPassword.errors.minlength\" class=\"validation-message\">Enter atleast 6 characters.</label>\n    </div>\n\n    <input type=\"submit\" value=\"Change Password\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n    Change password successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n</div>\n\n<div class=\"alert\" *ngIf=\"errorMessage\">\n    Confirm password doesn't match.\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/sign-in/sign-in.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/sign-in/sign-in.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Sign in icon-->\n<div>\n    <img src=\"assets/user/images/single_user.png\" id=\"icon\" alt=\"User Icon\" />\n</div>\n\n<!--sign in form-->\n<form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n    \n    <!--email sign in input-->\n    <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" placeholder=\"Email\" [pattern]=\"emailRegex\" required\n        [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\n    <!--validate email input-->\n    <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n        <label class=\"validation-message\">Invalid email address.</label>\n    </div>\n    \n    <!--password sign in input-->\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required minlength=\"4\"\n    [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n    <!--validate password input-->\n    <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n        <label class=\"validation-message\">Minimum 6 characters.</label>\n    </div>\n    \n    <!--sign in submit button-->\n    <input type=\"submit\" value=\"Sign In\">\n\n    <div>\n        <a routerLink=\"/user/forgotPassword\">Forgot Password?</a>\n    </div>\n</form>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/sign-up/sign-up.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/sign-up/sign-up.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--users sign up icon-->\n<div>\n    <img src=\"/assets/user/images/users.png\" id=\"icon\" alt=\"User Icon\"/>\n</div>\n\n<!--Sign up form-->\n<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n\n    <input type=\"hidden\" #type=ngModel [(ngModel)]=\"user.type\" name=\"type\">\n\n    <!--Get user first name-->\n    <input type=\"text\" #firstName=\"ngModel\" [(ngModel)]=\"user.firstName\" name=\"firstName\" placeholder=\"First Name\"\n    required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !firstName.valid }\">\n    <!--Validate user first name input-->\n    <div *ngIf=\"signUpForm.submitted && !firstName.valid\">\n        <label class=\"validation-message\">This field is required.</label>\n    </div>\n\n    <!--Get user last name-->\n    <input type=\"text\" #lastName=\"ngModel\" [(ngModel)]=\"user.lastName\" name=\"lastName\" placeholder=\"Last Name\"\n    required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !lastName.valid }\">\n    <!--Validate user last name input-->\n    <div *ngIf=\"signUpForm.submitted && !lastName.valid\">\n        <label class=\"validation-message\">This field is required.</label>\n    </div>\n\n    <!--Get user alias-->\n    <input type=\"text\" #alias=\"ngModel\" [(ngModel)]=\"user.alias\" name=\"alias\" placeholder=\"Alias\" maxlength=\"3\"\n    required  [ngClass]=\"{'invalid-textbox': signUpForm.submitted && !alias.valid }\" [pattern]=\"aliasRegex\">\n    <!--Validate user alias input-->\n    <div *ngIf=\"signUpForm.submitted && !alias.valid\">\n        <label *ngIf=\"alias.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"alias.errors.pattern\" class=\"validation-message\">Invalid alias, must be 3 letters.</label>\n    </div>\n\n    <!--Get user email-->\n    <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\"\n    required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n    <!--Validate user email-->\n    <div *ngIf=\"signUpForm.submitted && email.errors\">\n        <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n    </div>\n\n    <!--Get user password-->\n    <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\"\n    minlength=\"6\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n    <!--Validate user password-->\n    <div *ngIf=\"signUpForm.submitted && password.errors\">\n        <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 6 characters.</label>\n    </div>\n\n    <!--Submit button-->\n    <input type=\"submit\" value=\"Sign up\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n    Sign up successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"d-flex flex-column h-100\">\n    <main role=\"main\" class=\"flex-shrink-0\">\n        <div class=\"container\">\n            <h1 class=\"mt-4 text-center\">User Profile</h1>\n\n            <div class=\"lead border\">\n                <div class=\"form-row mt-3 text-center\">\n                    <div class=\"col\">\n                        <label>First Name: </label>\n                    </div>\n\n                    <div class=\"col\">\n                        {{ userDetails.firstName }}\n                    </div>\n                </div>\n\n                <div class=\"form-row text-center\">\n                    <div class=\"col\">\n                        <label>Last Name: </label>\n                    </div>\n\n                    <div class=\"col\">\n                        {{ userDetails.lastName }}\n                    </div>\n                </div>\n                \n                <div class=\"form-row text-center\">\n                    <div class=\"col\">\n                        <label>Alias: </label>\n                    </div>\n\n                    <div class=\"col\">\n                        {{ userDetails.alias }}\n                    </div>\n                </div>\n\n                <div class=\"form-row text-center\">\n                    <div class=\"col\">\n                        <label>Email: </label>\n                    </div>\n\n                    <div class=\"col\">\n                        {{ userDetails.email }}\n                    </div>\n                </div>\n\n                <div class=\"form-row text-center mb-3\">\n                    <div class=\"col\">\n                        <button class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#editProfileCollapse\" aria-expanded=\"false\" aria-controls=\"editProfileCollapse\">Edit Profile</button>\n                    </div>\n\n                    <div class=\"col\">\n                        <button class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#changePasswordCollapse\" aria-expanded=\"false\" aria-controls=\"changePasswordCollapse\">Change Password</button>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"lead border mt-3\">\n                <div class=\"collapse\" id=\"editProfileCollapse\">\n                    <div class=\"card card-body\">\n                        <h3 class=\"text-center\">Edit Profile</h3>\n\n                        <form #editProfileForm=\"ngForm\" (ngSubmit)=\"editProfileForm.valid && onEditProfileSubmit(editProfileForm)\">\n\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"userDetails._id\">\n\n                            <div class=\"form-row mt-2 text-center\">\n                                <div class=\"col\">\n                                    <label>First Name: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <!--Get user first name-->\n                                    <input type=\"text\" #firstName=\"ngModel\" [(ngModel)]=\"userDetails.firstName\" name=\"firstName\" placeholder=\"First Name\"\n                                    required  [ngClass]=\"{'invalid-textbox': editProfileForm.submitted && !firstName.valid }\">\n                                    <!--Validate user first name input-->\n                                    <div *ngIf=\"editProfileForm.submitted && !firstName.valid\">\n                                        <label class=\"text-danger\">This field is required.</label>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            <div class=\"form-row mt-2 text-center\">\n                                <div class=\"col\">\n                                    <label>Last Name: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <!--Get user last name-->\n                                    <input type=\"text\" #lastName=\"ngModel\" [(ngModel)]=\"userDetails.lastName\" name=\"lastName\" placeholder=\"Last Name\"\n                                    required  [ngClass]=\"{'invalid-textbox': editProfileForm.submitted && !lastName.valid }\">\n                                    <!--Validate user last name input-->\n                                    <div *ngIf=\"editProfileForm.submitted && !lastName.valid\">\n                                        <label class=\"text-danger\">This field is required.</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-row mt-2 text-center\">\n                                <div class=\"col\">\n                                    <label>Alias: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <!--Get user alias-->\n                                    <input type=\"text\" #alias=\"ngModel\" [(ngModel)]=\"userDetails.alias\" name=\"alias\" placeholder=\"Alias\"\n                                    required  [ngClass]=\"{'invalid-textbox': editProfileForm.submitted && !alias.valid }\" [pattern]=\"aliasRegex\" maxlength=\"3\">\n                                    <!--Validate user alias input-->\n                                    <div *ngIf=\"editProfileForm.submitted && !alias.valid\">\n                                        <label *ngIf=\"alias.errors.required\" class=\"text-danger\">This field is required.</label>\n                                        <label *ngIf=\"alias.errors.pattern\" class=\"text-danger\">Invalid alias, must be 3 letters.</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!--Submit button-->\n                            <div class=\"mt-2 text-center\">\n                                <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit\">\n                            </div>\n\n                            <!-- Success message -->\n                            <div class=\"alert alert-success\" *ngIf=\"showSucessMessage\">\n                                Edited successfully\n                            </div>\n\n                            <!-- Error message -->\n                            <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages\">\n                                {{serverErrorMessages}}\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n                <div class=\"collapse\" id=\"changePasswordCollapse\">\n                    <div class=\"card card-body\">\n                        <h3 class=\"text-center\">Change Password</h3>\n\n                        <form #changePasswordForm=\"ngForm\" (ngSubmit)=\"changePasswordForm.valid && changePasswordSubmit(changePasswordForm)\">\n\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"userDetails._id\">\n                            <input type=\"hidden\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"userDetails.email\">\n\n                            <div class=\"form-row mt-2 text-center\">\n                                <div class=\"col\">\n                                    <label>Current password: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <!-- Get user current password -->\n                                    <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userDetails.password\" name=\"password\" placeholder=\"Current Password\"\n                                    required  [ngClass]=\"{'invalid-textbox': changePasswordForm.submitted && !password.valid }\">\n                                    <!--Validate user current password input-->\n                                    <div *ngIf=\"changePasswordForm.submitted && !password.valid\">\n                                        <label class=\"text-danger\">This field is required.</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-row mt-2 text-center\">\n                                <div class=\"col\">\n                                    <label>New password: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <!-- Get user new password -->\n                                    <input type=\"password\" #newPass=\"ngModel\" [(ngModel)]=\"newPassword\" name=\"newPass\" placeholder=\"New Password\"\n                                    required  [ngClass]=\"{'invalid-textbox': changePasswordForm.submitted && !newPass.valid }\">\n                                    <!-- Validate user new password input -->\n                                    <div *ngIf=\"changePasswordForm.submitted && !newPass.valid\">\n                                        <label class=\"text-danger\">This field is required.</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!--Submit button-->\n                            <div class=\"mt-2 text-center\">\n                                <input type=\"submit\" class=\"btn btn-primary\" value=\"Change Password\">\n                            </div>\n\n                            <!-- Success message -->\n                            <div class=\"alert alert-success\" *ngIf=\"showSucessMessage2\">\n                                Change password successfully\n                            </div>\n\n                            <!-- Error message -->\n                            <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages2\">\n                                {{serverErrorMessages}}\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <button class=\"btn btn-secondary text-center\" routerLink=\"/dashboard\">\n            <img src=\"../../../assets/icons/home-black.svg\">\n            < Dashboard\n        </button>\n    </main>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--sign-up and sign-in links-->\n<div class=\"wrapper\">\n    <div id=\"formContent\">\n        <h2 class=\"underlineHover\" routerLink=\"/user/signin\"  routerLinkActive=\"active\"> Sign In </h2>\n        <h2 class=\"underlineHover\" routerLink=\"/user/signup\"  routerLinkActive=\"active\">Sign Up</h2>\n        <router-outlet></router-outlet>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Colorado Aquarium Society - Live Auction';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/user/user.component */
    "./src/app/components/user/user.component.ts");
    /* harmony import */


    var _components_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/user/sign-up/sign-up.component */
    "./src/app/components/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _components_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/user/sign-in/sign-in.component */
    "./src/app/components/user/sign-in/sign-in.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_user_service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_admin_create_auction_create_auction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/admin/create-auction/create-auction.component */
    "./src/app/components/admin/create-auction/create-auction.component.ts");
    /* harmony import */


    var _components_auctions_auctions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/auctions/auctions.component */
    "./src/app/components/auctions/auctions.component.ts");
    /* harmony import */


    var _components_auctions_list_auctions_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/auctions-list/auctions-list.component */
    "./src/app/components/auctions-list/auctions-list.component.ts");
    /* harmony import */


    var _components_auctions_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/auctions/add-item/add-item.component */
    "./src/app/components/auctions/add-item/add-item.component.ts");
    /* harmony import */


    var _components_dashboard_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/dashboard/cart/cart.component */
    "./src/app/components/dashboard/cart/cart.component.ts");
    /* harmony import */


    var _components_auctions_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/auctions/item-list/item-list.component */
    "./src/app/components/auctions/item-list/item-list.component.ts");
    /* harmony import */


    var _components_auctions_auction_edit_auction_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/auctions/auction-edit/auction-edit.component */
    "./src/app/components/auctions/auction-edit/auction-edit.component.ts");
    /* harmony import */


    var _components_admin_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/admin/add-staff/add-staff.component */
    "./src/app/components/admin/add-staff/add-staff.component.ts");
    /* harmony import */


    var _components_auctions_participants_list_participants_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/auctions/participants-list/participants-list.component */
    "./src/app/components/auctions/participants-list/participants-list.component.ts");
    /* harmony import */


    var _components_auctions_live_auction_live_auction_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/auctions/live-auction/live-auction.component */
    "./src/app/components/auctions/live-auction/live-auction.component.ts");
    /* harmony import */


    var _components_dashboard_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/dashboard/cart/check-out/check-out.component */
    "./src/app/components/dashboard/cart/check-out/check-out.component.ts");
    /* harmony import */


    var _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/user/user-profile/user-profile.component */
    "./src/app/components/user/user-profile/user-profile.component.ts");
    /* harmony import */


    var _components_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/user/forgot-password/forgot-password.component */
    "./src/app/components/user/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _components_auctions_seller_items_list_seller_items_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/auctions/seller-items-list/seller-items-list.component */
    "./src/app/components/auctions/seller-items-list/seller-items-list.component.ts");
    /* harmony import */


    var _components_auctions_item_page_item_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/auctions/item-page/item-page.component */
    "./src/app/components/auctions/item-page/item-page.component.ts");
    /* harmony import */


    var _components_admin_quick_sell_quick_sell_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/admin/quick-sell/quick-sell.component */
    "./src/app/components/admin/quick-sell/quick-sell.component.ts");
    /* harmony import */


    var _components_user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/user/reset-password/reset-password.component */
    "./src/app/components/user/reset-password/reset-password.component.ts");
    /* harmony import */


    var _components_admin_view_users_view_users_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/admin/view-users/view-users.component */
    "./src/app/components/admin/view-users/view-users.component.ts"); // built in library
    // components
    // routes


    var appRoutes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    }, // url: 'user/
    {
      path: 'user',
      redirectTo: '/user/signin',
      pathMatch: 'full'
    }, // url: 'user/signup'
    {
      path: 'user',
      component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
      children: [{
        path: 'signup',
        component: _components_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
      }]
    }, // url: 'user/signin'
    {
      path: 'user',
      component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
      children: [{
        path: 'signin',
        component: _components_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"]
      }]
    }, // url: 'user/forgotPassword'
    {
      path: 'user',
      component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
      children: [{
        path: 'forgotPassword',
        component: _components_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_28__["ForgotPasswordComponent"]
      }]
    }, {
      path: 'user',
      component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
      children: [{
        path: 'resetPassword/:token',
        component: _components_user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__["ResetPasswordComponent"]
      }]
    }, // url: 'user-profile'
    {
      path: 'user-profile',
      component: _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_27__["UserProfileComponent"]
    }, // url: 'dashboard'
    {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, // url: 'administration'
    {
      path: 'admin',
      component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"]
    }, // url: 'auctions
    {
      path: 'auctions/:id',
      component: _components_auctions_auctions_component__WEBPACK_IMPORTED_MODULE_17__["AuctionsComponent"]
    }, // url: 'editAuction'
    {
      path: 'editAuction/:id',
      component: _components_auctions_auction_edit_auction_edit_component__WEBPACK_IMPORTED_MODULE_22__["AuctionEditComponent"]
    }, // url: 'live'
    {
      path: 'live/:id',
      component: _components_auctions_live_auction_live_auction_component__WEBPACK_IMPORTED_MODULE_25__["LiveAuctionComponent"]
    }, // url: 'cart'
    {
      path: 'cart',
      component: _components_dashboard_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"]
    }, // url: 'check-out'
    {
      path: 'checkout',
      component: _components_dashboard_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_26__["CheckOutComponent"]
    }, // url: 'item-page'
    {
      path: 'itemPage/:id',
      component: _components_auctions_item_page_item_page_component__WEBPACK_IMPORTED_MODULE_30__["ItemPageComponent"]
    }, // url: 'view-users'
    {
      path: 'viewUsers',
      component: _components_admin_view_users_view_users_component__WEBPACK_IMPORTED_MODULE_33__["ViewUsersComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _components_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"], _components_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"], _components_admin_create_auction_create_auction_component__WEBPACK_IMPORTED_MODULE_16__["CreateAuctionComponent"], _components_auctions_auctions_component__WEBPACK_IMPORTED_MODULE_17__["AuctionsComponent"], _components_auctions_list_auctions_list_component__WEBPACK_IMPORTED_MODULE_18__["AuctionsListComponent"], _components_auctions_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_19__["AddItemComponent"], _components_dashboard_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"], _components_auctions_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_21__["ItemListComponent"], _components_auctions_auction_edit_auction_edit_component__WEBPACK_IMPORTED_MODULE_22__["AuctionEditComponent"], _components_admin_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_23__["AddStaffComponent"], _components_auctions_participants_list_participants_list_component__WEBPACK_IMPORTED_MODULE_24__["ParticipantsListComponent"], _components_auctions_live_auction_live_auction_component__WEBPACK_IMPORTED_MODULE_25__["LiveAuctionComponent"], _components_dashboard_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_26__["CheckOutComponent"], _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_27__["UserProfileComponent"], _components_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_28__["ForgotPasswordComponent"], _components_auctions_seller_items_list_seller_items_list_component__WEBPACK_IMPORTED_MODULE_29__["SellerItemsListComponent"], _components_auctions_item_page_item_page_component__WEBPACK_IMPORTED_MODULE_30__["ItemPageComponent"], _components_admin_quick_sell_quick_sell_component__WEBPACK_IMPORTED_MODULE_31__["QuickSellComponent"], _components_user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__["ResetPasswordComponent"], _components_admin_view_users_view_users_component__WEBPACK_IMPORTED_MODULE_33__["ViewUsersComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
        multi: true
      }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _components_user_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _components_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/user/service/user.service */
    "./src/app/components/user/service/user.service.ts"); // get built-in library
    // get components


    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(userService, router) {
        _classCallCheck(this, AuthGuard);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/user/signin');
            this.userService.deleteToken();
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _components_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/user/service/user.service */
    "./src/app/components/user/service/user.service.ts"); // get components


    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(userService, router) {
        _classCallCheck(this, AuthInterceptor);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          if (req.headers.get('noauth')) return next.handle(req.clone());else {
            var clonedreq = req.clone({
              headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {}, function (err) {
              if (err.error.auth == false) {
                _this.router.navigateByUrl('/user/signin');
              }
            }));
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _components_user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/components/admin/add-staff/add-staff.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/admin/add-staff/add-staff.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminAddStaffAddStaffComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRkLXN0YWZmL2FkZC1zdGFmZi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/add-staff/add-staff.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/admin/add-staff/add-staff.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddStaffComponent */

  /***/
  function srcAppComponentsAdminAddStaffAddStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddStaffComponent", function () {
      return AddStaffComponent;
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


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../user/service/user.service */
    "./src/app/components/user/service/user.service.ts"); // get built in
    // get components


    var AddStaffComponent =
    /*#__PURE__*/
    function () {
      function AddStaffComponent(userService) {
        _classCallCheck(this, AddStaffComponent);

        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.aliasRegex = /[A-Za-z]{3}/;
        this.staff = {
          _id: '',
          firstName: '',
          lastName: '',
          alias: '',
          email: '',
          password: '',
          type: 'member'
        };
      }

      _createClass(AddStaffComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this2 = this;

          form.value.type = 'member';
          this.userService.addUser(form.value).subscribe(function (res) {
            _this2.showSucessMessage = true;
            setTimeout(function () {
              return _this2.showSucessMessage = false;
            }, 4000);

            _this2.resetForm(form);
          }, function (err) {
            if (err.status === 422) {
              _this2.serverErrorMessages = err.error.join('<br/>');
            } else _this2.serverErrorMessages = 'Something went wrong. Please contact admin.';
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.staff = {
            _id: '',
            firstName: '',
            lastName: '',
            alias: '',
            email: '',
            password: '',
            type: 'member'
          };
          form.resetForm();
          this.serverErrorMessages = '';
        }
      }]);

      return AddStaffComponent;
    }();

    AddStaffComponent.ctorParameters = function () {
      return [{
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AddStaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-staff',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-staff.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-staff/add-staff.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-staff.component.css */
      "./src/app/components/admin/add-staff/add-staff.component.css")).default]
    })], AddStaffComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/admin/admin.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-size: .875rem;\n}\n\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n\n/*\n * Sidebar\n */\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; /* Behind the navbar */\n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n\n/*\n * Navbar\n */\n\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, .25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n}\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n\n/*\n * Utilities\n */\n\n.border-top { border-top: 1px solid #e5e5e5; }\n\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n  }\n\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 50px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n  }\n\n.card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n.card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n.card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n.card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n.card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n.card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n.card.card.highlight-card span {\n    margin-left: 60px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWSxFQUFFLHNCQUFzQjtFQUNwQyxVQUFVO0VBQ1YsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixTQUFTLEVBQUUscUJBQXFCO0VBQ2hDLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFFLDZEQUE2RDtBQUNqRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRDs7QUFFQTs7RUFFRTs7QUFFRixjQUFjLDZCQUE2QixFQUFFOztBQUM3QyxpQkFBaUIsZ0NBQWdDLEVBQUU7O0FBRW5EO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCOztBQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLHdDQUF3QztFQUMxQzs7QUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LXNpemU6IC44NzVyZW07XG59XG5cbi5mZWF0aGVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4vKlxuICogU2lkZWJhclxuICovXG5cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cblxuLnNpZGViYXItc3RpY2t5IHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDQ4cHg7IC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xufVxuXG4uc2lkZWJhciAubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnNpZGViYXItaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKlxuICogTmF2YmFyXG4gKi9cblxuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yNSk7XG59XG5cbi5uYXZiYXIgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2wtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbn1cblxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbn1cblxuLypcbiAqIFV0aWxpdGllc1xuICovXG5cbi5ib3JkZXItdG9wIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7IH1cbi5ib3JkZXItYm90dG9tIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7IH1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gIC5jYXJkLmNhcmQtc21hbGwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTY4cHg7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYShibGFjaywgMC4zNSk7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/admin/admin.component.ts ***!
    \*****************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
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


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _user_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user/model/user.model */
    "./src/app/components/user/model/user.model.ts"); // get built-in libraries
    // get components


    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(userService, router) {
        _classCallCheck(this, AdminComponent);

        this.userService = userService;
        this.router = router;
        this.userDetails = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this3.userDetails = res['user'];
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.userService.deleteToken();
          this.router.navigate(['/user/signin']);
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/components/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/create-auction/create-auction.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/admin/create-auction/create-auction.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminCreateAuctionCreateAuctionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY3JlYXRlLWF1Y3Rpb24vY3JlYXRlLWF1Y3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/admin/create-auction/create-auction.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/admin/create-auction/create-auction.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CreateAuctionComponent */

  /***/
  function srcAppComponentsAdminCreateAuctionCreateAuctionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAuctionComponent", function () {
      return CreateAuctionComponent;
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


    var _service_auction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/auction.service */
    "./src/app/components/service/auction.service.ts"); // get built in


    var CreateAuctionComponent =
    /*#__PURE__*/
    function () {
      function CreateAuctionComponent(auctionService) {
        _classCallCheck(this, CreateAuctionComponent);

        this.auctionService = auctionService;
        this.auction = {
          _id: '',
          auctionName: '',
          maxItems: null,
          address: '',
          dateTime: new Date(),
          fee: null
        };
        this.maxItemRegex = /^[1-9]\d*$/;
      }

      _createClass(CreateAuctionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this4 = this;

          this.auctionService.createAuction(form.value).subscribe(function (res) {
            _this4.showSucessMessage = true;
            setTimeout(function () {
              return _this4.showSucessMessage = false;
            }, 4000);

            _this4.resetForm(form);
          }, function (err) {
            if (err.status === 422) {
              _this4.serverErrorMessages = err.error.join('<br/>');
            } else _this4.serverErrorMessages = 'Something went wrong.Please contact admin.';
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.auction = {
            _id: '',
            auctionName: '',
            maxItems: null,
            address: '',
            dateTime: new Date(),
            fee: null
          };
          form.resetForm();
          this.serverErrorMessages = '';
        }
      }]);

      return CreateAuctionComponent;
    }();

    CreateAuctionComponent.ctorParameters = function () {
      return [{
        type: _service_auction_service__WEBPACK_IMPORTED_MODULE_2__["AuctionService"]
      }];
    };

    CreateAuctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-auction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-auction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/create-auction/create-auction.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-auction.component.css */
      "./src/app/components/admin/create-auction/create-auction.component.css")).default]
    })], CreateAuctionComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/quick-sell/quick-sell.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/admin/quick-sell/quick-sell.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminQuickSellQuickSellComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vcXVpY2stc2VsbC9xdWljay1zZWxsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin/quick-sell/quick-sell.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/admin/quick-sell/quick-sell.component.ts ***!
    \*********************************************************************/

  /*! exports provided: QuickSellComponent */

  /***/
  function srcAppComponentsAdminQuickSellQuickSellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuickSellComponent", function () {
      return QuickSellComponent;
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


    var _service_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/item.service */
    "./src/app/components/service/item.service.ts");
    /* harmony import */


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _user_model_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../user/model/user.model */
    "./src/app/components/user/model/user.model.ts");

    var QuickSellComponent =
    /*#__PURE__*/
    function () {
      function QuickSellComponent(itemService, route, userService) {
        _classCallCheck(this, QuickSellComponent);

        this.itemService = itemService;
        this.route = route;
        this.userService = userService;
        this.auctionID = this.route.snapshot.paramMap.get('id');
        this.userDetails = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.item = {
          _id: '',
          auctionID: this.auctionID,
          itemCode: '',
          itemName: '',
          description: '',
          price: null,
          quantity: null,
          sellerID: '',
          buyerID: '',
          images: [],
          type: '',
          paid: false
        };
      }

      _createClass(QuickSellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.item.auctionID = this.auctionID;
          this.getUser();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this5 = this;

          this.item.auctionID = this.auctionID;
          this.item.itemCode = form.value.itemCode;
          this.item.itemName = form.value.itemName;
          this.item.description = form.value.description;
          this.item.price = form.value.price;
          this.item.quantity = form.value.quantity;
          this.item.sellerID = this.sellerID;
          this.item.type = 'quick sell';
          console.log(this.item);
          this.itemService.addItem(this.item).subscribe(function (res) {
            _this5.showSucessMessage = true;
            setTimeout(function () {
              return _this5.showSucessMessage = false;
            }, 4000);

            _this5.resetForm(form);
          }, function (err) {
            if (err.status === 422) {
              _this5.serverErrorMessages = err.error.join('<br/>');
            } else _this5.serverErrorMessages = 'Something went wrong. Please contact admin.';
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.item = {
            _id: '',
            auctionID: this.auctionID,
            itemCode: '',
            itemName: '',
            description: '',
            price: null,
            quantity: null,
            sellerID: '',
            buyerID: '',
            type: '',
            images: [],
            paid: false
          };
          form.resetForm();
          this.serverErrorMessages = '';
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this6 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this6.userDetails = res['user'];
            _this6.sellerID = _this6.userDetails._id;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return QuickSellComponent;
    }();

    QuickSellComponent.ctorParameters = function () {
      return [{
        type: _service_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    QuickSellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quick-sell',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quick-sell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/quick-sell/quick-sell.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quick-sell.component.css */
      "./src/app/components/admin/quick-sell/quick-sell.component.css")).default]
    })], QuickSellComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/view-users/view-users.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/admin/view-users/view-users.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminViewUsersViewUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vdmlldy11c2Vycy92aWV3LXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin/view-users/view-users.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/admin/view-users/view-users.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ViewUsersComponent */

  /***/
  function srcAppComponentsAdminViewUsersViewUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUsersComponent", function () {
      return ViewUsersComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _user_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../user/model/user.model */
    "./src/app/components/user/model/user.model.ts");

    var ViewUsersComponent =
    /*#__PURE__*/
    function () {
      function ViewUsersComponent(userService, location) {
        _classCallCheck(this, ViewUsersComponent);

        this.userService = userService;
        this.location = location;
        this.editUser = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.aliasRegex = /[A-Za-z]{3}/;
      }

      _createClass(ViewUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this7 = this;

          this.userService.getUsers().subscribe(function (res) {
            _this7.users = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(userID) {
          var _this8 = this;

          console.log(userID);

          if (confirm('Are you sure to delete this user?') === true) {
            this.userService.deleteUser(userID).subscribe(function () {
              _this8.ngOnInit();
            });
          }
        }
      }, {
        key: "onEditUser",
        value: function onEditUser(editUser) {
          this.editUser = editUser;
        }
      }, {
        key: "onBackBtn",
        value: function onBackBtn() {
          this.location.back();
        }
      }, {
        key: "onEditUserSubmit",
        value: function onEditUserSubmit(form) {
          var _this9 = this;

          this.userService.editUser(form.value).subscribe(function (res) {
            _this9.showSucessMessage = true;
            setTimeout(function () {
              return _this9.showSucessMessage = false;
            }, 4000);
          }, function (err) {
            if (err.status === 422) {
              _this9.serverErrorMessages = err.error.join('<br/>');
            } else _this9.serverErrorMessages = 'Something went wrong.Please contact admin.';
          });
        }
      }]);

      return ViewUsersComponent;
    }();

    ViewUsersComponent.ctorParameters = function () {
      return [{
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    ViewUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-users/view-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-users.component.css */
      "./src/app/components/admin/view-users/view-users.component.css")).default]
    })], ViewUsersComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions-list/auctions-list.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/auctions-list/auctions-list.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsListAuctionsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVjdGlvbnMtbGlzdC9hdWN0aW9ucy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/auctions-list/auctions-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/auctions-list/auctions-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AuctionsListComponent */

  /***/
  function srcAppComponentsAuctionsListAuctionsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuctionsListComponent", function () {
      return AuctionsListComponent;
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


    var _service_auction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/auction.service */
    "./src/app/components/service/auction.service.ts"); // get built in
    // get components


    var AuctionsListComponent =
    /*#__PURE__*/
    function () {
      function AuctionsListComponent(auctionService) {
        _classCallCheck(this, AuctionsListComponent);

        this.auctionService = auctionService;
      }

      _createClass(AuctionsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAuctions();
        } // Get all of the auctions' info on init

      }, {
        key: "getAuctions",
        value: function getAuctions() {
          var _this10 = this;

          this.auctionService.getAllAuctionsInfo().subscribe(function (res) {
            _this10.auctionsInfo = res;
          }, function (err) {
            console.log(err);
          });
        } // refresh auction list

      }, {
        key: "refresh",
        value: function refresh() {
          this.getAuctions();
        }
      }]);

      return AuctionsListComponent;
    }();

    AuctionsListComponent.ctorParameters = function () {
      return [{
        type: _service_auction_service__WEBPACK_IMPORTED_MODULE_2__["AuctionService"]
      }];
    };

    AuctionsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auctions-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auctions-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions-list/auctions-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auctions-list.component.css */
      "./src/app/components/auctions-list/auctions-list.component.css")).default]
    })], AuctionsListComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions/add-item/add-item.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/auctions/add-item/add-item.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsAddItemAddItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVjdGlvbnMvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/auctions/add-item/add-item.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/auctions/add-item/add-item.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddItemComponent */

  /***/
  function srcAppComponentsAuctionsAddItemAddItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddItemComponent", function () {
      return AddItemComponent;
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


    var _service_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/item.service */
    "./src/app/components/service/item.service.ts");
    /* harmony import */


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _user_model_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../user/model/user.model */
    "./src/app/components/user/model/user.model.ts");
    /* harmony import */


    var _service_auction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/auction.service */
    "./src/app/components/service/auction.service.ts");
    /* harmony import */


    var _model_auction_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../model/auction.model */
    "./src/app/components/model/auction.model.ts"); // get built in


    var AddItemComponent =
    /*#__PURE__*/
    function () {
      function AddItemComponent(itemService, route, userService, auctionService) {
        _classCallCheck(this, AddItemComponent);

        this.itemService = itemService;
        this.route = route;
        this.userService = userService;
        this.auctionService = auctionService;
        this.auctionID = this.route.snapshot.paramMap.get('id');
        this.userDetails = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.imageSrc = "../../../assets/thumbnail.jpg";
        this.imageToUpload = null;
        this.numOfImages = 0;
        this.auctionDetails = new _model_auction_model__WEBPACK_IMPORTED_MODULE_7__["Auction"]();
        this.item = {
          _id: '',
          auctionID: this.auctionID,
          itemCode: '',
          itemName: '',
          description: '',
          price: null,
          quantity: null,
          sellerID: '',
          buyerID: '',
          images: [],
          type: '',
          paid: false
        };
      }

      _createClass(AddItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.item.auctionID = this.auctionID;
          this.getUser();
          this.getAuctionInfo();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this11 = this;

          this.item.auctionID = this.auctionID;
          this.item.itemCode = this.userDetails.alias;
          this.item.itemName = form.value.itemName;
          this.item.description = form.value.description;
          this.item.quantity = form.value.quantity;
          this.item.sellerID = this.userDetails._id;
          this.item.type = 'auction';
          this.itemService.addItem(this.item).subscribe(function (res) {
            _this11.showSucessMessage = true;
            setTimeout(function () {
              return _this11.showSucessMessage = false;
            }, 4000);

            _this11.resetForm(form);
          }, function (err) {
            if (err.status === 422) {
              _this11.serverErrorMessages = err.error.join('<br/>');
            } else _this11.serverErrorMessages = 'Something went wrong. Please contact admin.';
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.item = {
            _id: '',
            auctionID: this.auctionID,
            itemCode: '',
            itemName: '',
            description: '',
            price: null,
            quantity: null,
            sellerID: '',
            buyerID: '',
            images: [],
            type: '',
            paid: false
          };
          form.resetForm();
          this.serverErrorMessages = '';
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this12 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this12.userDetails = res['user'];
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAuctionInfo",
        value: function getAuctionInfo() {
          var _this13 = this;

          this.auctionService.getAuctionInfoById(this.auctionID).subscribe(function (res) {
            _this13.auctionDetails = res;
          });
        }
      }, {
        key: "selectImage",
        value: function selectImage(image) {
          var _this14 = this;

          if (image.files && image.files[0]) {
            this.imageToUpload = image.files[0]; // Show image preview

            var reader = new FileReader();

            reader.onload = function (event) {
              _this14.imageSrc = event.target.result;
            };

            reader.readAsDataURL(this.imageToUpload);
          } else {
            this.imageSrc = "../../../assets/thumbnail.jpg";
            this.imageToUpload = null;
          }
        }
      }, {
        key: "uploadImage",
        value: function uploadImage() {
          if (this.imageToUpload) {
            this.item.images[this.numOfImages] = this.imageToUpload;
            this.numOfImages += 1;
            this.imageSrc = "../../../assets/thumbnail.jpg";
            this.imageToUpload = null;
          } else {
            console.log('No image selected');
          }

          console.log(this.item.images[this.numOfImages - 1]);
          console.log(this.item.images);
          console.log(this.item.images[0].name);
          this.imagesListSrc = "../../../assets/" + this.item.images[0].name;
          console.log(this.imagesListSrc);
        }
      }]);

      return AddItemComponent;
    }();

    AddItemComponent.ctorParameters = function () {
      return [{
        type: _service_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _service_auction_service__WEBPACK_IMPORTED_MODULE_6__["AuctionService"]
      }];
    };

    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/add-item/add-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-item.component.css */
      "./src/app/components/auctions/add-item/add-item.component.css")).default]
    })], AddItemComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions/auction-edit/auction-edit.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/auctions/auction-edit/auction-edit.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsAuctionEditAuctionEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVjdGlvbnMvYXVjdGlvbi1lZGl0L2F1Y3Rpb24tZWRpdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/auctions/auction-edit/auction-edit.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/auctions/auction-edit/auction-edit.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AuctionEditComponent */

  /***/
  function srcAppComponentsAuctionsAuctionEditAuctionEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuctionEditComponent", function () {
      return AuctionEditComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _model_auction_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../model/auction.model */
    "./src/app/components/model/auction.model.ts");
    /* harmony import */


    var _service_auction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/auction.service */
    "./src/app/components/service/auction.service.ts"); // get built in
    // get components


    var AuctionEditComponent =
    /*#__PURE__*/
    function () {
      function AuctionEditComponent(auctionService, route, router, location) {
        _classCallCheck(this, AuctionEditComponent);

        this.auctionService = auctionService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.id = this.route.snapshot.paramMap.get('id');
        this.auction = new _model_auction_model__WEBPACK_IMPORTED_MODULE_4__["Auction"]();
      }

      _createClass(AuctionEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.auctionService.getAuctionInfoById(this.id).subscribe(function (res) {
            _this15.auction = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this16 = this;

          this.auctionService.editAuction(form.value).subscribe(function (res) {
            _this16.showSucessMessage = true;
            setTimeout(function () {
              return _this16.showSucessMessage = false;
            }, 4000);

            _this16.router.navigate(['/auctions/', _this16.id]);
          }, function (err) {
            if (err.status === 422) {
              _this16.serverErrorMessages = err.error.join('<br/>');
            } else _this16.serverErrorMessages = 'Something went wrong.Please contact admin.';
          });
        }
      }, {
        key: "deleteAuction",
        value: function deleteAuction() {
          var _this17 = this;

          if (confirm('Are you sure to delete this record?') === true) {
            this.auctionService.deleteAuction(this.id).subscribe(function () {
              _this17.router.navigate(['/dashboard']);
            });
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return AuctionEditComponent;
    }();

    AuctionEditComponent.ctorParameters = function () {
      return [{
        type: _service_auction_service__WEBPACK_IMPORTED_MODULE_5__["AuctionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    AuctionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auction-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auction-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/auction-edit/auction-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auction-edit.component.css */
      "./src/app/components/auctions/auction-edit/auction-edit.component.css")).default]
    })], AuctionEditComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions/auctions.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/auctions/auctions.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsAuctionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n    font-size: .875rem;\n  }\n  \n  .feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n  \n  /*\n   * Sidebar\n   */\n  \n  .sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    padding: 48px 0 0; /* Height of navbar */\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n  }\n  \n  .sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: .5rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n  }\n  \n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sidebar-sticky {\n      position: -webkit-sticky;\n      position: sticky;\n    }\n  }\n  \n  .sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n  }\n  \n  .sidebar .nav-link .feather {\n    margin-right: 4px;\n    color: #999;\n  }\n  \n  .sidebar .nav-link.active {\n    color: #007bff;\n  }\n  \n  .sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: inherit;\n  }\n  \n  .sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n  \n  /*\n   * Content\n   */\n  \n  [role=\"main\"] {\n    padding-top: 133px; /* Space for fixed navbar */\n  }\n  \n  @media (min-width: 768px) {\n    [role=\"main\"] {\n      padding-top: 48px; /* Space for fixed navbar */\n    }\n  }\n  \n  /*\n   * Navbar\n   */\n  \n  .navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n  \n  .navbar .form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n  }\n  \n  .form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n  }\n  \n  .form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdWN0aW9ucy9hdWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxpQkFBaUIsRUFBRSxxQkFBcUI7SUFDeEMsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRSw2REFBNkQ7RUFDakY7O0VBRUE7SUFDRTtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtFQUNqRDs7RUFFQTtJQUNFO01BQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0lBQ2hEO0VBQ0Y7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7RUFDaEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1Y3Rpb25zL2F1Y3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250LXNpemU6IC44NzVyZW07XG4gIH1cbiAgXG4gIC5mZWF0aGVyIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB9XG4gIFxuICAvKlxuICAgKiBTaWRlYmFyXG4gICAqL1xuICBcbiAgLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICAgIHBhZGRpbmc6IDQ4cHggMCAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG4gIH1cbiAgXG4gIEBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XG4gICAgLnNpZGViYXItc3RpY2t5IHtcbiAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4gIC5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIFxuICAuc2lkZWJhci1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAvKlxuICAgKiBDb250ZW50XG4gICAqL1xuICBcbiAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogMTMzcHg7IC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiA0OHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gICAgfVxuICB9XG4gIFxuICAvKlxuICAgKiBOYXZiYXJcbiAgICovXG4gIFxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIH1cbiAgXG4gIC5uYXZiYXIgLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wtZGFyayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/auctions/auctions.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/auctions/auctions.component.ts ***!
    \***********************************************************/

  /*! exports provided: AuctionsComponent */

  /***/
  function srcAppComponentsAuctionsAuctionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuctionsComponent", function () {
      return AuctionsComponent;
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


    var _service_auction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/auction.service */
    "./src/app/components/service/auction.service.ts");
    /* harmony import */


    var _model_auction_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../model/auction.model */
    "./src/app/components/model/auction.model.ts");
    /* harmony import */


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _user_model_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user/model/user.model */
    "./src/app/components/user/model/user.model.ts"); // get built in
    // get components


    var AuctionsComponent =
    /*#__PURE__*/
    function () {
      function AuctionsComponent(auctionService, route, userService, router) {
        _classCallCheck(this, AuctionsComponent);

        this.auctionService = auctionService;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.auctionId = this.route.snapshot.paramMap.get('id');
        this.auctionInfo = new _model_auction_model__WEBPACK_IMPORTED_MODULE_4__["Auction"]();
        this.userDetails = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.isParticipate = false;
      }

      _createClass(AuctionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAuction();
          this.getUser();
        }
      }, {
        key: "getAuction",
        value: function getAuction() {
          var _this18 = this;

          this.auctionService.getAuctionInfoById(this.auctionId).subscribe(function (res) {
            _this18.auctionInfo = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this19 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this19.userDetails = res['user'];

            _this19.ifParticipated();

            _this19.isStaff();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.userService.deleteToken();
          this.router.navigate(['/user/signin']);
        }
      }, {
        key: "ifParticipated",
        value: function ifParticipated() {
          var _this20 = this;

          this.auctionService.getAuctionParticipants(this.auctionId).subscribe(function (res) {
            _this20.participantList = res;

            for (var part in _this20.participantList) {
              if (_this20.userDetails._id == _this20.participantList[part]._id) {
                _this20.isParticipate = true;
              }
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onParticipate",
        value: function onParticipate() {
          var _this21 = this;

          this.auctionService.participateAuction(this.auctionId, this.userDetails._id).subscribe(function (res) {
            _this21.isParticipate = true;
          });
        }
      }, {
        key: "onNotParticipate",
        value: function onNotParticipate() {
          var _this22 = this;

          this.auctionService.notParticipate(this.auctionId, this.userDetails._id).subscribe(function (res) {
            _this22.isParticipate = false;
          });
        }
      }, {
        key: "isStaff",
        value: function isStaff() {
          if (this.userDetails.type == 'staff') this.staff = true;else this.staff = false;
        }
      }]);

      return AuctionsComponent;
    }();

    AuctionsComponent.ctorParameters = function () {
      return [{
        type: _service_auction_service__WEBPACK_IMPORTED_MODULE_3__["AuctionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auctions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auctions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/auctions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auctions.component.css */
      "./src/app/components/auctions/auctions.component.css")).default]
    })], AuctionsComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions/item-list/item-list.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/auctions/item-list/item-list.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsItemListItemListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\nmax-width: 300px;\nmargin: auto;\ntext-align: center;\nfont-family: arial;\n}\n\np {\nfont-size: 12px;\n}\n\n.card button {\nborder: none;\noutline: 0;\npadding: 12px;\ncolor: white;\nbackground-color: #000;\ntext-align: center;\ncursor: pointer;\nwidth: 100%;\nfont-size: 18px;\n}\n\n.card button:hover {\nopacity: 0.7;\n}\n\n.card-container {\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\nmargin-top: 16px;\n}\n\n.card-container .card:not(:last-child) {\nmargin-right: 0;\n}\n\n.card.card-small {\nheight: 16px;\nwidth: 168px;\n}\n\n.card-container .card:not(.highlight-card) {\ncursor: pointer;\n}\n\n.card-container .card:not(.highlight-card):hover {\ntransform: translateY(-3px);\nbox-shadow: 0 4px 17px rgba(black, 0.35);\n}\n\n.card-container .card:not(.highlight-card):hover .material-icons path {\nfill: rgb(105, 103, 103);\n}\n\n.card-img {\n    width: 150px;\n    height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdWN0aW9ucy9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSwwQ0FBMEM7QUFDMUMsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFVBQVU7QUFDVixhQUFhO0FBQ2IsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLFdBQVc7QUFDWCxlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdWN0aW9ucy9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5tYXgtd2lkdGg6IDMwMHB4O1xubWFyZ2luOiBhdXRvO1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC1mYW1pbHk6IGFyaWFsO1xufVxuXG5wIHtcbmZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNhcmQgYnV0dG9uIHtcbmJvcmRlcjogbm9uZTtcbm91dGxpbmU6IDA7XG5wYWRkaW5nOiAxMnB4O1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmN1cnNvcjogcG9pbnRlcjtcbndpZHRoOiAxMDAlO1xuZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2FyZCBidXR0b246aG92ZXIge1xub3BhY2l0eTogMC43O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuZGlzcGxheTogZmxleDtcbmZsZXgtd3JhcDogd3JhcDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xubWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xubWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbmhlaWdodDogMTZweDtcbndpZHRoOiAxNjhweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbmJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYShibGFjaywgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG5maWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG59XG5cbi5jYXJkLWltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/auctions/item-list/item-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/auctions/item-list/item-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ItemListComponent */

  /***/
  function srcAppComponentsAuctionsItemListItemListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemListComponent", function () {
      return ItemListComponent;
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


    var _service_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/item.service */
    "./src/app/components/service/item.service.ts"); // get built in
    // get components


    var ItemListComponent =
    /*#__PURE__*/
    function () {
      function ItemListComponent(itemService, route) {
        _classCallCheck(this, ItemListComponent);

        this.itemService = itemService;
        this.route = route; // Variables

        this.auctionItem = new Array();
        this.quickSellitems = new Array();
        this.auctionID = this.route.snapshot.paramMap.get('id');
      }

      _createClass(ItemListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getItems();
        } // get all of item's info in the Auction

      }, {
        key: "getItems",
        value: function getItems() {
          var _this23 = this;

          this.itemService.getItemsInAuction(this.auctionID).subscribe(function (res) {
            _this23.itemInfo = res;

            for (var i = 0; i < _this23.itemInfo.length; i++) {
              if (_this23.itemInfo[i].type == "auction") {
                _this23.auctionItem.push(_this23.itemInfo[i]);
              } else {
                _this23.quickSellitems.push(_this23.itemInfo[i]);
              }
            }
          }, function (err) {
            console.log(err);
          });
        } // refresh item list

      }, {
        key: "refresh",
        value: function refresh() {
          this.auctionItem.length = 0;
          this.quickSellitems.length = 0;
          this.getItems();
        }
      }]);

      return ItemListComponent;
    }();

    ItemListComponent.ctorParameters = function () {
      return [{
        type: _service_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/item-list/item-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-list.component.css */
      "./src/app/components/auctions/item-list/item-list.component.css")).default]
    })], ItemListComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions/item-page/item-page.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/auctions/item-page/item-page.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsItemPageItemPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVjdGlvbnMvaXRlbS1wYWdlL2l0ZW0tcGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/auctions/item-page/item-page.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/auctions/item-page/item-page.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ItemPageComponent */

  /***/
  function srcAppComponentsAuctionsItemPageItemPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemPageComponent", function () {
      return ItemPageComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/item.service */
    "./src/app/components/service/item.service.ts");
    /* harmony import */


    var _model_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../model/item.model */
    "./src/app/components/model/item.model.ts");
    /* harmony import */


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _user_model_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../user/model/user.model */
    "./src/app/components/user/model/user.model.ts"); // get built-in
    // get components


    var ItemPageComponent =
    /*#__PURE__*/
    function () {
      function ItemPageComponent(route, itemService, userService, location) {
        _classCallCheck(this, ItemPageComponent);

        this.route = route;
        this.itemService = itemService;
        this.userService = userService;
        this.location = location; // Variables

        this.itemID = this.route.snapshot.paramMap.get('id');
        this.itemInfo = new _model_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]();
        this.sellerInfo = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.userDetails = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
      }

      _createClass(ItemPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getItemInfo();
          this.getUser();
        }
      }, {
        key: "getItemInfo",
        value: function getItemInfo() {
          var _this24 = this;

          this.itemService.getItemInfoById(this.itemID).subscribe(function (res) {
            _this24.itemInfo = res;

            _this24.getSellerInfo();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getSellerInfo",
        value: function getSellerInfo() {
          var _this25 = this;

          this.userService.getUserById(this.itemInfo.sellerID).subscribe(function (res) {
            _this25.sellerInfo = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onBackBtn",
        value: function onBackBtn() {
          this.location.back();
        }
      }, {
        key: "onEditItemSubmit",
        value: function onEditItemSubmit(form) {
          var _this26 = this;

          this.itemService.editItem(form.value).subscribe(function (res) {
            _this26.showSucessMessage = true;
            setTimeout(function () {
              return _this26.showSucessMessage = false;
            }, 4000);
          }, function (err) {
            if (err.status === 422) {
              _this26.serverErrorMessages = err.error.join('<br/>');
            } else _this26.serverErrorMessages = 'Something went wrong.Please contact admin.';
          });
        }
      }, {
        key: "onDeleteItem",
        value: function onDeleteItem() {
          var _this27 = this;

          if (confirm('Are you sure to delete this item?') === true) {
            this.itemService.deleteItemById(this.itemID).subscribe(function () {
              _this27.location.back();
            });
          }
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this28 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this28.userDetails = res['user'];

            _this28.isStaff();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "isStaff",
        value: function isStaff() {
          if (this.userDetails.type == 'staff') this.staff = true;else this.staff = false;
        }
      }]);

      return ItemPageComponent;
    }();

    ItemPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
      }, {
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    ItemPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/item-page/item-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-page.component.css */
      "./src/app/components/auctions/item-page/item-page.component.css")).default]
    })], ItemPageComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions/live-auction/live-auction.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/auctions/live-auction/live-auction.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsLiveAuctionLiveAuctionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVjdGlvbnMvbGl2ZS1hdWN0aW9uL2xpdmUtYXVjdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/auctions/live-auction/live-auction.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/auctions/live-auction/live-auction.component.ts ***!
    \****************************************************************************/

  /*! exports provided: LiveAuctionComponent */

  /***/
  function srcAppComponentsAuctionsLiveAuctionLiveAuctionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveAuctionComponent", function () {
      return LiveAuctionComponent;
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


    var _model_auction_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/auction.model */
    "./src/app/components/model/auction.model.ts");
    /* harmony import */


    var _service_auction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/auction.service */
    "./src/app/components/service/auction.service.ts");
    /* harmony import */


    var _service_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/item.service */
    "./src/app/components/service/item.service.ts"); // get built-in
    // get components


    var LiveAuctionComponent =
    /*#__PURE__*/
    function () {
      function LiveAuctionComponent(route, auctionService, itemService) {
        _classCallCheck(this, LiveAuctionComponent);

        this.route = route;
        this.auctionService = auctionService;
        this.itemService = itemService; // variables

        this.auctionID = this.route.snapshot.paramMap.get('id');
        this.auction = new _model_auction_model__WEBPACK_IMPORTED_MODULE_3__["Auction"]();
        this.i = 0;
      }

      _createClass(LiveAuctionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAuctionInfo();
          this.getAuctionItems();
          this.getParticipants();
        }
      }, {
        key: "getAuctionInfo",
        value: function getAuctionInfo() {
          var _this29 = this;

          this.auctionService.getAuctionInfoById(this.auctionID).subscribe(function (res) {
            _this29.auction = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAuctionItems",
        value: function getAuctionItems() {
          var _this30 = this;

          this.itemService.getItemsInAuction(this.auctionID).subscribe(function (res) {
            _this30.items = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getParticipants",
        value: function getParticipants() {
          var _this31 = this;

          this.auctionService.getAuctionParticipants(this.auctionID).subscribe(function (res) {
            _this31.participants = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onNext",
        value: function onNext() {
          if (this.i < this.items.length - 1) {
            this.i += 1;
          } else {
            console.log('This is the last item');
          }
        }
      }, {
        key: "onPrev",
        value: function onPrev() {
          if (this.i != 0) {
            this.i -= 1;
          } else {
            console.log('This is the first item');
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.items[this.i].buyerID = this.participants[this.winnerNum - 1]._id;
          this.itemService.sellItem(this.items[this.i]).subscribe();
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          console.log(this.search.toUpperCase());
          this.itemService.getItemByItemCode(this.search.toUpperCase()).subscribe(function (res) {
            console.log(res);
          });
        }
      }]);

      return LiveAuctionComponent;
    }();

    LiveAuctionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_auction_service__WEBPACK_IMPORTED_MODULE_4__["AuctionService"]
      }, {
        type: _service_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]
      }];
    };

    LiveAuctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-live-auction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./live-auction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/live-auction/live-auction.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./live-auction.component.css */
      "./src/app/components/auctions/live-auction/live-auction.component.css")).default]
    })], LiveAuctionComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions/participants-list/participants-list.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/auctions/participants-list/participants-list.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsParticipantsListParticipantsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVjdGlvbnMvcGFydGljaXBhbnRzLWxpc3QvcGFydGljaXBhbnRzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/auctions/participants-list/participants-list.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/auctions/participants-list/participants-list.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ParticipantsListComponent */

  /***/
  function srcAppComponentsAuctionsParticipantsListParticipantsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParticipantsListComponent", function () {
      return ParticipantsListComponent;
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


    var _service_auction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auction.service */
    "./src/app/components/service/auction.service.ts"); // get built in
    // get components


    var ParticipantsListComponent =
    /*#__PURE__*/
    function () {
      function ParticipantsListComponent(auctionService, route) {
        _classCallCheck(this, ParticipantsListComponent);

        this.auctionService = auctionService;
        this.route = route; // Variables

        this.auctionId = this.route.snapshot.paramMap.get('id');
      }

      _createClass(ParticipantsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getParticipants();
        } // get all participants in the auction

      }, {
        key: "getParticipants",
        value: function getParticipants() {
          var _this32 = this;

          this.auctionService.getAuctionParticipants(this.auctionId).subscribe(function (res) {
            _this32.participantsInfo = res;
          }, function (err) {
            console.log(err);
          });
        } // refresh

      }, {
        key: "refresh",
        value: function refresh() {
          this.getParticipants();
        }
      }]);

      return ParticipantsListComponent;
    }();

    ParticipantsListComponent.ctorParameters = function () {
      return [{
        type: _service_auction_service__WEBPACK_IMPORTED_MODULE_3__["AuctionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ParticipantsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-participants-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./participants-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/participants-list/participants-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./participants-list.component.css */
      "./src/app/components/auctions/participants-list/participants-list.component.css")).default]
    })], ParticipantsListComponent);
    /***/
  },

  /***/
  "./src/app/components/auctions/seller-items-list/seller-items-list.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/auctions/seller-items-list/seller-items-list.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuctionsSellerItemsListSellerItemsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 300px;\n    margin: auto;\n    text-align: center;\n    font-family: arial;\n    }\n    \n    p {\n    font-size: 12px;\n    }\n    \n    .card button {\n    border: none;\n    outline: 0;\n    padding: 12px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 18px;\n    }\n    \n    .card button:hover {\n    opacity: 0.7;\n    }\n    \n    .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n    }\n    \n    .card-container .card:not(:last-child) {\n    margin-right: 0;\n    }\n    \n    .card.card-small {\n    height: 16px;\n    width: 168px;\n    }\n    \n    .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n    }\n    \n    .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n    }\n    \n    .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n    }\n    \n    .card-img {\n        width: 150px;\n        height: 150px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdWN0aW9ucy9zZWxsZXItaXRlbXMtbGlzdC9zZWxsZXItaXRlbXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjs7SUFFQTtJQUNBLGVBQWU7SUFDZjs7SUFFQTtJQUNBLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmOztJQUVBO0lBQ0EsWUFBWTtJQUNaOztJQUVBO0lBQ0EsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCOztJQUVBO0lBQ0EsZUFBZTtJQUNmOztJQUVBO0lBQ0EsWUFBWTtJQUNaLFlBQVk7SUFDWjs7SUFFQTtJQUNBLGVBQWU7SUFDZjs7SUFFQTtJQUNBLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEM7O0lBRUE7SUFDQSx3QkFBd0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVjdGlvbnMvc2VsbGVyLWl0ZW1zLWxpc3Qvc2VsbGVyLWl0ZW1zLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZCBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLmNhcmQtc21hbGwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTY4cHg7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoYmxhY2ssIDAuMzUpO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtaW1nIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/auctions/seller-items-list/seller-items-list.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/auctions/seller-items-list/seller-items-list.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: SellerItemsListComponent */

  /***/
  function srcAppComponentsAuctionsSellerItemsListSellerItemsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerItemsListComponent", function () {
      return SellerItemsListComponent;
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


    var _service_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/item.service */
    "./src/app/components/service/item.service.ts");
    /* harmony import */


    var _model_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../model/item.model */
    "./src/app/components/model/item.model.ts");
    /* harmony import */


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../user/service/user.service */
    "./src/app/components/user/service/user.service.ts"); // get built-in
    // get components


    var SellerItemsListComponent =
    /*#__PURE__*/
    function () {
      function SellerItemsListComponent(itemService, userService, route) {
        _classCallCheck(this, SellerItemsListComponent);

        this.itemService = itemService;
        this.userService = userService;
        this.route = route;
        this.item = new _model_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        this.auctionID = this.route.snapshot.paramMap.get('id');
      }

      _createClass(SellerItemsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this33 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this33.sellerDetails = res['user'];

            _this33.getSellerItems();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getSellerItems",
        value: function getSellerItems() {
          var _this34 = this;

          this.item.sellerID = this.sellerDetails._id;
          this.item.auctionID = this.auctionID;
          this.itemService.getSellerItemsInAuction(this.item).subscribe(function (res) {
            _this34.sellerItems = res;
          }, function (err) {
            console.log(err);
          });
        } // refresh item list

      }, {
        key: "refresh",
        value: function refresh() {
          this.getSellerItems();
        }
      }]);

      return SellerItemsListComponent;
    }();

    SellerItemsListComponent.ctorParameters = function () {
      return [{
        type: _service_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    SellerItemsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seller-items-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./seller-items-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auctions/seller-items-list/seller-items-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./seller-items-list.component.css */
      "./src/app/components/auctions/seller-items-list/seller-items-list.component.css")).default]
    })], SellerItemsListComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/cart/cart.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/dashboard/cart/cart.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n    background: #eecda3;\n    background: linear-gradient(to right, #eecda3, #ef629f);\n    min-height: 100vh;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFFbkIsdURBQXVEO0lBQ3ZELGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2VlY2RhMztcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlY2RhMywgI2VmNjI5Zik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVjZGEzLCAjZWY2MjlmKTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/cart/cart.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/cart/cart.component.ts ***!
    \*************************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsDashboardCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
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


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _user_model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../user/model/user.model */
    "./src/app/components/user/model/user.model.ts");
    /* harmony import */


    var _service_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/item.service */
    "./src/app/components/service/item.service.ts"); // get built in
    // get components


    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(userService, itemService) {
        _classCallCheck(this, CartComponent);

        this.userService = userService;
        this.itemService = itemService;
        this.userDetails = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.showSuccess = false;
        this.totalAmount = 0;
        this.paidFor = false;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.getUser();
          console.log(this.totalAmount);
          paypal.Buttons({
            createOrder: function createOrder(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: 'USD',
                    value: _this35.totalAmount
                  }
                }]
              });
            },
            onApprove: function onApprove(data, actions) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this35, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var order;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return actions.order.capture();

                      case 2:
                        order = _context.sent;
                        this.paidFor = true;
                        console.log(order);

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            },
            onError: function onError(err) {
              console.log(err);
            }
          }).render(this.paypalElement.nativeElement);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this36 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this36.userDetails = res['user'];

            _this36.getBuyerItems();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getBuyerItems",
        value: function getBuyerItems() {
          var _this37 = this;

          this.itemService.getBuyerItems(this.userDetails._id).subscribe(function (res) {
            _this37.items = res;

            for (var i in _this37.items) {
              _this37.totalAmount = _this37.totalAmount + _this37.items[i].price;
            }

            console.log("$", _this37.totalAmount);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _service_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paypal', {
      static: true
    })], CartComponent.prototype, "paypalElement", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/cart/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/components/dashboard/cart/cart.component.css")).default]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/cart/check-out/check-out.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/dashboard/cart/check-out/check-out.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardCartCheckOutCheckOutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NhcnQvY2hlY2stb3V0L2NoZWNrLW91dC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/cart/check-out/check-out.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/dashboard/cart/check-out/check-out.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CheckOutComponent */

  /***/
  function srcAppComponentsDashboardCartCheckOutCheckOutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function () {
      return CheckOutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CheckOutComponent =
    /*#__PURE__*/
    function () {
      function CheckOutComponent() {
        _classCallCheck(this, CheckOutComponent);
      }

      _createClass(CheckOutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckOutComponent;
    }();

    CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-check-out',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./check-out.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/cart/check-out/check-out.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./check-out.component.css */
      "./src/app/components/dashboard/cart/check-out/check-out.component.css")).default]
    })], CheckOutComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-size: .875rem;\n}\n\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; /* Behind the navbar */\n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n\n/*\n * Navbar\n */\n\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, .25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n}\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxZQUFZLEVBQUUsc0JBQXNCO0VBQ3BDLFVBQVU7RUFDViw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBRSxxQkFBcUI7RUFDaEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUUsNkRBQTZEO0FBQ2pGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1zaXplOiAuODc1cmVtO1xufVxuXG4uZmVhdGhlciB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNDhweDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgcGFkZGluZy10b3A6IC41cmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uc2lkZWJhci1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qXG4gKiBOYXZiYXJcbiAqL1xuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcbn1cblxuLm5hdmJhciAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmZvcm0tY29udHJvbC1kYXJrIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xufVxuXG4uZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user/service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _user_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user/model/user.model */
    "./src/app/components/user/model/user.model.ts"); // get built-in libraries
    // get components


    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(userService, router) {
        _classCallCheck(this, DashboardComponent);

        this.userService = userService;
        this.router = router;
        this.userDetails = new _user_model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this38 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this38.userDetails = res['user'];

            _this38.isStaff();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "isStaff",
        value: function isStaff() {
          if (this.userDetails.type == 'staff') this.staff = true;else this.staff = false;
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.userService.deleteToken();
          this.router.navigate(['/user/signin']);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/components/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,800,800italic\");/*!\n * Font Awesome Free 5.9.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */.fa,.fab,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:\"\\f26e\"}.fa-accessible-icon:before{content:\"\\f368\"}.fa-accusoft:before{content:\"\\f369\"}.fa-acquisitions-incorporated:before{content:\"\\f6af\"}.fa-ad:before{content:\"\\f641\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-card:before{content:\"\\f2bb\"}.fa-adjust:before{content:\"\\f042\"}.fa-adn:before{content:\"\\f170\"}.fa-adobe:before{content:\"\\f778\"}.fa-adversal:before{content:\"\\f36a\"}.fa-affiliatetheme:before{content:\"\\f36b\"}.fa-air-freshener:before{content:\"\\f5d0\"}.fa-airbnb:before{content:\"\\f834\"}.fa-algolia:before{content:\"\\f36c\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-justify:before{content:\"\\f039\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-right:before{content:\"\\f038\"}.fa-alipay:before{content:\"\\f642\"}.fa-allergies:before{content:\"\\f461\"}.fa-amazon:before{content:\"\\f270\"}.fa-amazon-pay:before{content:\"\\f42c\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-amilia:before{content:\"\\f36d\"}.fa-anchor:before{content:\"\\f13d\"}.fa-android:before{content:\"\\f17b\"}.fa-angellist:before{content:\"\\f209\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-down:before{content:\"\\f107\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angry:before{content:\"\\f556\"}.fa-angrycreative:before{content:\"\\f36e\"}.fa-angular:before{content:\"\\f420\"}.fa-ankh:before{content:\"\\f644\"}.fa-app-store:before{content:\"\\f36f\"}.fa-app-store-ios:before{content:\"\\f370\"}.fa-apper:before{content:\"\\f371\"}.fa-apple:before{content:\"\\f179\"}.fa-apple-alt:before{content:\"\\f5d1\"}.fa-apple-pay:before{content:\"\\f415\"}.fa-archive:before{content:\"\\f187\"}.fa-archway:before{content:\"\\f557\"}.fa-arrow-alt-circle-down:before{content:\"\\f358\"}.fa-arrow-alt-circle-left:before{content:\"\\f359\"}.fa-arrow-alt-circle-right:before{content:\"\\f35a\"}.fa-arrow-alt-circle-up:before{content:\"\\f35b\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-arrows-alt-h:before{content:\"\\f337\"}.fa-arrows-alt-v:before{content:\"\\f338\"}.fa-artstation:before{content:\"\\f77a\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asterisk:before{content:\"\\f069\"}.fa-asymmetrik:before{content:\"\\f372\"}.fa-at:before{content:\"\\f1fa\"}.fa-atlas:before{content:\"\\f558\"}.fa-atlassian:before{content:\"\\f77b\"}.fa-atom:before{content:\"\\f5d2\"}.fa-audible:before{content:\"\\f373\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-autoprefixer:before{content:\"\\f41c\"}.fa-avianex:before{content:\"\\f374\"}.fa-aviato:before{content:\"\\f421\"}.fa-award:before{content:\"\\f559\"}.fa-aws:before{content:\"\\f375\"}.fa-baby:before{content:\"\\f77c\"}.fa-baby-carriage:before{content:\"\\f77d\"}.fa-backspace:before{content:\"\\f55a\"}.fa-backward:before{content:\"\\f04a\"}.fa-bacon:before{content:\"\\f7e5\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-balance-scale-left:before{content:\"\\f515\"}.fa-balance-scale-right:before{content:\"\\f516\"}.fa-ban:before{content:\"\\f05e\"}.fa-band-aid:before{content:\"\\f462\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-barcode:before{content:\"\\f02a\"}.fa-bars:before{content:\"\\f0c9\"}.fa-baseball-ball:before{content:\"\\f433\"}.fa-basketball-ball:before{content:\"\\f434\"}.fa-bath:before{content:\"\\f2cd\"}.fa-battery-empty:before{content:\"\\f244\"}.fa-battery-full:before{content:\"\\f240\"}.fa-battery-half:before{content:\"\\f242\"}.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battle-net:before{content:\"\\f835\"}.fa-bed:before{content:\"\\f236\"}.fa-beer:before{content:\"\\f0fc\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-bell:before{content:\"\\f0f3\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bezier-curve:before{content:\"\\f55b\"}.fa-bible:before{content:\"\\f647\"}.fa-bicycle:before{content:\"\\f206\"}.fa-biking:before{content:\"\\f84a\"}.fa-bimobject:before{content:\"\\f378\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-biohazard:before{content:\"\\f780\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitcoin:before{content:\"\\f379\"}.fa-bity:before{content:\"\\f37a\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-blackberry:before{content:\"\\f37b\"}.fa-blender:before{content:\"\\f517\"}.fa-blender-phone:before{content:\"\\f6b6\"}.fa-blind:before{content:\"\\f29d\"}.fa-blog:before{content:\"\\f781\"}.fa-blogger:before{content:\"\\f37c\"}.fa-blogger-b:before{content:\"\\f37d\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-bold:before{content:\"\\f032\"}.fa-bolt:before{content:\"\\f0e7\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-bone:before{content:\"\\f5d7\"}.fa-bong:before{content:\"\\f55c\"}.fa-book:before{content:\"\\f02d\"}.fa-book-dead:before{content:\"\\f6b7\"}.fa-book-medical:before{content:\"\\f7e6\"}.fa-book-open:before{content:\"\\f518\"}.fa-book-reader:before{content:\"\\f5da\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-bootstrap:before{content:\"\\f836\"}.fa-border-all:before{content:\"\\f84c\"}.fa-border-none:before{content:\"\\f850\"}.fa-border-style:before{content:\"\\f853\"}.fa-bowling-ball:before{content:\"\\f436\"}.fa-box:before{content:\"\\f466\"}.fa-box-open:before{content:\"\\f49e\"}.fa-boxes:before{content:\"\\f468\"}.fa-braille:before{content:\"\\f2a1\"}.fa-brain:before{content:\"\\f5dc\"}.fa-bread-slice:before{content:\"\\f7ec\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-briefcase-medical:before{content:\"\\f469\"}.fa-broadcast-tower:before{content:\"\\f519\"}.fa-broom:before{content:\"\\f51a\"}.fa-brush:before{content:\"\\f55d\"}.fa-btc:before{content:\"\\f15a\"}.fa-buffer:before{content:\"\\f837\"}.fa-bug:before{content:\"\\f188\"}.fa-building:before{content:\"\\f1ad\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bullseye:before{content:\"\\f140\"}.fa-burn:before{content:\"\\f46a\"}.fa-buromobelexperte:before{content:\"\\f37f\"}.fa-bus:before{content:\"\\f207\"}.fa-bus-alt:before{content:\"\\f55e\"}.fa-business-time:before{content:\"\\f64a\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-calendar:before{content:\"\\f133\"}.fa-calendar-alt:before{content:\"\\f073\"}.fa-calendar-check:before{content:\"\\f274\"}.fa-calendar-day:before{content:\"\\f783\"}.fa-calendar-minus:before{content:\"\\f272\"}.fa-calendar-plus:before{content:\"\\f271\"}.fa-calendar-times:before{content:\"\\f273\"}.fa-calendar-week:before{content:\"\\f784\"}.fa-camera:before{content:\"\\f030\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-campground:before{content:\"\\f6bb\"}.fa-canadian-maple-leaf:before{content:\"\\f785\"}.fa-candy-cane:before{content:\"\\f786\"}.fa-cannabis:before{content:\"\\f55f\"}.fa-capsules:before{content:\"\\f46b\"}.fa-car:before{content:\"\\f1b9\"}.fa-car-alt:before{content:\"\\f5de\"}.fa-car-battery:before{content:\"\\f5df\"}.fa-car-crash:before{content:\"\\f5e1\"}.fa-car-side:before{content:\"\\f5e4\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-caret-square-down:before{content:\"\\f150\"}.fa-caret-square-left:before{content:\"\\f191\"}.fa-caret-square-right:before{content:\"\\f152\"}.fa-caret-square-up:before{content:\"\\f151\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-carrot:before{content:\"\\f787\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cash-register:before{content:\"\\f788\"}.fa-cat:before{content:\"\\f6be\"}.fa-cc-amazon-pay:before{content:\"\\f42d\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-apple-pay:before{content:\"\\f416\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-centercode:before{content:\"\\f380\"}.fa-centos:before{content:\"\\f789\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-chair:before{content:\"\\f6c0\"}.fa-chalkboard:before{content:\"\\f51b\"}.fa-chalkboard-teacher:before{content:\"\\f51c\"}.fa-charging-station:before{content:\"\\f5e7\"}.fa-chart-area:before{content:\"\\f1fe\"}.fa-chart-bar:before{content:\"\\f080\"}.fa-chart-line:before{content:\"\\f201\"}.fa-chart-pie:before{content:\"\\f200\"}.fa-check:before{content:\"\\f00c\"}.fa-check-circle:before{content:\"\\f058\"}.fa-check-double:before{content:\"\\f560\"}.fa-check-square:before{content:\"\\f14a\"}.fa-cheese:before{content:\"\\f7ef\"}.fa-chess:before{content:\"\\f439\"}.fa-chess-bishop:before{content:\"\\f43a\"}.fa-chess-board:before{content:\"\\f43c\"}.fa-chess-king:before{content:\"\\f43f\"}.fa-chess-knight:before{content:\"\\f441\"}.fa-chess-pawn:before{content:\"\\f443\"}.fa-chess-queen:before{content:\"\\f445\"}.fa-chess-rook:before{content:\"\\f447\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-child:before{content:\"\\f1ae\"}.fa-chrome:before{content:\"\\f268\"}.fa-chromecast:before{content:\"\\f838\"}.fa-church:before{content:\"\\f51d\"}.fa-circle:before{content:\"\\f111\"}.fa-circle-notch:before{content:\"\\f1ce\"}.fa-city:before{content:\"\\f64f\"}.fa-clinic-medical:before{content:\"\\f7f2\"}.fa-clipboard:before{content:\"\\f328\"}.fa-clipboard-check:before{content:\"\\f46c\"}.fa-clipboard-list:before{content:\"\\f46d\"}.fa-clock:before{content:\"\\f017\"}.fa-clone:before{content:\"\\f24d\"}.fa-closed-captioning:before{content:\"\\f20a\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-cloud-download-alt:before{content:\"\\f381\"}.fa-cloud-meatball:before{content:\"\\f73b\"}.fa-cloud-moon:before{content:\"\\f6c3\"}.fa-cloud-moon-rain:before{content:\"\\f73c\"}.fa-cloud-rain:before{content:\"\\f73d\"}.fa-cloud-showers-heavy:before{content:\"\\f740\"}.fa-cloud-sun:before{content:\"\\f6c4\"}.fa-cloud-sun-rain:before{content:\"\\f743\"}.fa-cloud-upload-alt:before{content:\"\\f382\"}.fa-cloudscale:before{content:\"\\f383\"}.fa-cloudsmith:before{content:\"\\f384\"}.fa-cloudversify:before{content:\"\\f385\"}.fa-cocktail:before{content:\"\\f561\"}.fa-code:before{content:\"\\f121\"}.fa-code-branch:before{content:\"\\f126\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-codiepie:before{content:\"\\f284\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cog:before{content:\"\\f013\"}.fa-cogs:before{content:\"\\f085\"}.fa-coins:before{content:\"\\f51e\"}.fa-columns:before{content:\"\\f0db\"}.fa-comment:before{content:\"\\f075\"}.fa-comment-alt:before{content:\"\\f27a\"}.fa-comment-dollar:before{content:\"\\f651\"}.fa-comment-dots:before{content:\"\\f4ad\"}.fa-comment-medical:before{content:\"\\f7f5\"}.fa-comment-slash:before{content:\"\\f4b3\"}.fa-comments:before{content:\"\\f086\"}.fa-comments-dollar:before{content:\"\\f653\"}.fa-compact-disc:before{content:\"\\f51f\"}.fa-compass:before{content:\"\\f14e\"}.fa-compress:before{content:\"\\f066\"}.fa-compress-arrows-alt:before{content:\"\\f78c\"}.fa-concierge-bell:before{content:\"\\f562\"}.fa-confluence:before{content:\"\\f78d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-contao:before{content:\"\\f26d\"}.fa-cookie:before{content:\"\\f563\"}.fa-cookie-bite:before{content:\"\\f564\"}.fa-copy:before{content:\"\\f0c5\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-couch:before{content:\"\\f4b8\"}.fa-cpanel:before{content:\"\\f388\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-creative-commons-by:before{content:\"\\f4e7\"}.fa-creative-commons-nc:before{content:\"\\f4e8\"}.fa-creative-commons-nc-eu:before{content:\"\\f4e9\"}.fa-creative-commons-nc-jp:before{content:\"\\f4ea\"}.fa-creative-commons-nd:before{content:\"\\f4eb\"}.fa-creative-commons-pd:before{content:\"\\f4ec\"}.fa-creative-commons-pd-alt:before{content:\"\\f4ed\"}.fa-creative-commons-remix:before{content:\"\\f4ee\"}.fa-creative-commons-sa:before{content:\"\\f4ef\"}.fa-creative-commons-sampling:before{content:\"\\f4f0\"}.fa-creative-commons-sampling-plus:before{content:\"\\f4f1\"}.fa-creative-commons-share:before{content:\"\\f4f2\"}.fa-creative-commons-zero:before{content:\"\\f4f3\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-critical-role:before{content:\"\\f6c9\"}.fa-crop:before{content:\"\\f125\"}.fa-crop-alt:before{content:\"\\f565\"}.fa-cross:before{content:\"\\f654\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-crow:before{content:\"\\f520\"}.fa-crown:before{content:\"\\f521\"}.fa-crutch:before{content:\"\\f7f7\"}.fa-css3:before{content:\"\\f13c\"}.fa-css3-alt:before{content:\"\\f38b\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-cut:before{content:\"\\f0c4\"}.fa-cuttlefish:before{content:\"\\f38c\"}.fa-d-and-d:before{content:\"\\f38d\"}.fa-d-and-d-beyond:before{content:\"\\f6ca\"}.fa-dashcube:before{content:\"\\f210\"}.fa-database:before{content:\"\\f1c0\"}.fa-deaf:before{content:\"\\f2a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-democrat:before{content:\"\\f747\"}.fa-deploydog:before{content:\"\\f38e\"}.fa-deskpro:before{content:\"\\f38f\"}.fa-desktop:before{content:\"\\f108\"}.fa-dev:before{content:\"\\f6cc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-dharmachakra:before{content:\"\\f655\"}.fa-dhl:before{content:\"\\f790\"}.fa-diagnoses:before{content:\"\\f470\"}.fa-diaspora:before{content:\"\\f791\"}.fa-dice:before{content:\"\\f522\"}.fa-dice-d20:before{content:\"\\f6cf\"}.fa-dice-d6:before{content:\"\\f6d1\"}.fa-dice-five:before{content:\"\\f523\"}.fa-dice-four:before{content:\"\\f524\"}.fa-dice-one:before{content:\"\\f525\"}.fa-dice-six:before{content:\"\\f526\"}.fa-dice-three:before{content:\"\\f527\"}.fa-dice-two:before{content:\"\\f528\"}.fa-digg:before{content:\"\\f1a6\"}.fa-digital-ocean:before{content:\"\\f391\"}.fa-digital-tachograph:before{content:\"\\f566\"}.fa-directions:before{content:\"\\f5eb\"}.fa-discord:before{content:\"\\f392\"}.fa-discourse:before{content:\"\\f393\"}.fa-divide:before{content:\"\\f529\"}.fa-dizzy:before{content:\"\\f567\"}.fa-dna:before{content:\"\\f471\"}.fa-dochub:before{content:\"\\f394\"}.fa-docker:before{content:\"\\f395\"}.fa-dog:before{content:\"\\f6d3\"}.fa-dollar-sign:before{content:\"\\f155\"}.fa-dolly:before{content:\"\\f472\"}.fa-dolly-flatbed:before{content:\"\\f474\"}.fa-donate:before{content:\"\\f4b9\"}.fa-door-closed:before{content:\"\\f52a\"}.fa-door-open:before{content:\"\\f52b\"}.fa-dot-circle:before{content:\"\\f192\"}.fa-dove:before{content:\"\\f4ba\"}.fa-download:before{content:\"\\f019\"}.fa-draft2digital:before{content:\"\\f396\"}.fa-drafting-compass:before{content:\"\\f568\"}.fa-dragon:before{content:\"\\f6d5\"}.fa-draw-polygon:before{content:\"\\f5ee\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-dribbble-square:before{content:\"\\f397\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-drum:before{content:\"\\f569\"}.fa-drum-steelpan:before{content:\"\\f56a\"}.fa-drumstick-bite:before{content:\"\\f6d7\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-dumbbell:before{content:\"\\f44b\"}.fa-dumpster:before{content:\"\\f793\"}.fa-dumpster-fire:before{content:\"\\f794\"}.fa-dungeon:before{content:\"\\f6d9\"}.fa-dyalog:before{content:\"\\f399\"}.fa-earlybirds:before{content:\"\\f39a\"}.fa-ebay:before{content:\"\\f4f4\"}.fa-edge:before{content:\"\\f282\"}.fa-edit:before{content:\"\\f044\"}.fa-egg:before{content:\"\\f7fb\"}.fa-eject:before{content:\"\\f052\"}.fa-elementor:before{content:\"\\f430\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-ello:before{content:\"\\f5f1\"}.fa-ember:before{content:\"\\f423\"}.fa-empire:before{content:\"\\f1d1\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-text:before{content:\"\\f658\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-envira:before{content:\"\\f299\"}.fa-equals:before{content:\"\\f52c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-erlang:before{content:\"\\f39d\"}.fa-ethereum:before{content:\"\\f42e\"}.fa-ethernet:before{content:\"\\f796\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-euro-sign:before{content:\"\\f153\"}.fa-evernote:before{content:\"\\f839\"}.fa-exchange-alt:before{content:\"\\f362\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-expand:before{content:\"\\f065\"}.fa-expand-arrows-alt:before{content:\"\\f31e\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-external-link-alt:before{content:\"\\f35d\"}.fa-external-link-square-alt:before{content:\"\\f360\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-dropper:before{content:\"\\f1fb\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-facebook:before{content:\"\\f09a\"}.fa-facebook-f:before{content:\"\\f39e\"}.fa-facebook-messenger:before{content:\"\\f39f\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-fan:before{content:\"\\f863\"}.fa-fantasy-flight-games:before{content:\"\\f6dc\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-fax:before{content:\"\\f1ac\"}.fa-feather:before{content:\"\\f52d\"}.fa-feather-alt:before{content:\"\\f56b\"}.fa-fedex:before{content:\"\\f797\"}.fa-fedora:before{content:\"\\f798\"}.fa-female:before{content:\"\\f182\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-figma:before{content:\"\\f799\"}.fa-file:before{content:\"\\f15b\"}.fa-file-alt:before{content:\"\\f15c\"}.fa-file-archive:before{content:\"\\f1c6\"}.fa-file-audio:before{content:\"\\f1c7\"}.fa-file-code:before{content:\"\\f1c9\"}.fa-file-contract:before{content:\"\\f56c\"}.fa-file-csv:before{content:\"\\f6dd\"}.fa-file-download:before{content:\"\\f56d\"}.fa-file-excel:before{content:\"\\f1c3\"}.fa-file-export:before{content:\"\\f56e\"}.fa-file-image:before{content:\"\\f1c5\"}.fa-file-import:before{content:\"\\f56f\"}.fa-file-invoice:before{content:\"\\f570\"}.fa-file-invoice-dollar:before{content:\"\\f571\"}.fa-file-medical:before{content:\"\\f477\"}.fa-file-medical-alt:before{content:\"\\f478\"}.fa-file-pdf:before{content:\"\\f1c1\"}.fa-file-powerpoint:before{content:\"\\f1c4\"}.fa-file-prescription:before{content:\"\\f572\"}.fa-file-signature:before{content:\"\\f573\"}.fa-file-upload:before{content:\"\\f574\"}.fa-file-video:before{content:\"\\f1c8\"}.fa-file-word:before{content:\"\\f1c2\"}.fa-fill:before{content:\"\\f575\"}.fa-fill-drip:before{content:\"\\f576\"}.fa-film:before{content:\"\\f008\"}.fa-filter:before{content:\"\\f0b0\"}.fa-fingerprint:before{content:\"\\f577\"}.fa-fire:before{content:\"\\f06d\"}.fa-fire-alt:before{content:\"\\f7e4\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-firefox:before{content:\"\\f269\"}.fa-first-aid:before{content:\"\\f479\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-first-order-alt:before{content:\"\\f50a\"}.fa-firstdraft:before{content:\"\\f3a1\"}.fa-fish:before{content:\"\\f578\"}.fa-fist-raised:before{content:\"\\f6de\"}.fa-flag:before{content:\"\\f024\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-flag-usa:before{content:\"\\f74d\"}.fa-flask:before{content:\"\\f0c3\"}.fa-flickr:before{content:\"\\f16e\"}.fa-flipboard:before{content:\"\\f44d\"}.fa-flushed:before{content:\"\\f579\"}.fa-fly:before{content:\"\\f417\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-minus:before{content:\"\\f65d\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-folder-plus:before{content:\"\\f65e\"}.fa-font:before{content:\"\\f031\"}.fa-font-awesome:before{content:\"\\f2b4\"}.fa-font-awesome-alt:before{content:\"\\f35c\"}.fa-font-awesome-flag:before{content:\"\\f425\"}.fa-font-awesome-logo-full:before{content:\"\\f4e6\"}.fa-fonticons:before{content:\"\\f280\"}.fa-fonticons-fi:before{content:\"\\f3a2\"}.fa-football-ball:before{content:\"\\f44e\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-fort-awesome-alt:before{content:\"\\f3a3\"}.fa-forumbee:before{content:\"\\f211\"}.fa-forward:before{content:\"\\f04e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-freebsd:before{content:\"\\f3a4\"}.fa-frog:before{content:\"\\f52e\"}.fa-frown:before{content:\"\\f119\"}.fa-frown-open:before{content:\"\\f57a\"}.fa-fulcrum:before{content:\"\\f50b\"}.fa-funnel-dollar:before{content:\"\\f662\"}.fa-futbol:before{content:\"\\f1e3\"}.fa-galactic-republic:before{content:\"\\f50c\"}.fa-galactic-senate:before{content:\"\\f50d\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-gas-pump:before{content:\"\\f52f\"}.fa-gavel:before{content:\"\\f0e3\"}.fa-gem:before{content:\"\\f3a5\"}.fa-genderless:before{content:\"\\f22d\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-ghost:before{content:\"\\f6e2\"}.fa-gift:before{content:\"\\f06b\"}.fa-gifts:before{content:\"\\f79c\"}.fa-git:before{content:\"\\f1d3\"}.fa-git-alt:before{content:\"\\f841\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-github:before{content:\"\\f09b\"}.fa-github-alt:before{content:\"\\f113\"}.fa-github-square:before{content:\"\\f092\"}.fa-gitkraken:before{content:\"\\f3a6\"}.fa-gitlab:before{content:\"\\f296\"}.fa-gitter:before{content:\"\\f426\"}.fa-glass-cheers:before{content:\"\\f79f\"}.fa-glass-martini:before{content:\"\\f000\"}.fa-glass-martini-alt:before{content:\"\\f57b\"}.fa-glass-whiskey:before{content:\"\\f7a0\"}.fa-glasses:before{content:\"\\f530\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-globe:before{content:\"\\f0ac\"}.fa-globe-africa:before{content:\"\\f57c\"}.fa-globe-americas:before{content:\"\\f57d\"}.fa-globe-asia:before{content:\"\\f57e\"}.fa-globe-europe:before{content:\"\\f7a2\"}.fa-gofore:before{content:\"\\f3a7\"}.fa-golf-ball:before{content:\"\\f450\"}.fa-goodreads:before{content:\"\\f3a8\"}.fa-goodreads-g:before{content:\"\\f3a9\"}.fa-google:before{content:\"\\f1a0\"}.fa-google-drive:before{content:\"\\f3aa\"}.fa-google-play:before{content:\"\\f3ab\"}.fa-google-plus:before{content:\"\\f2b3\"}.fa-google-plus-g:before{content:\"\\f0d5\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-gopuram:before{content:\"\\f664\"}.fa-graduation-cap:before{content:\"\\f19d\"}.fa-gratipay:before{content:\"\\f184\"}.fa-grav:before{content:\"\\f2d6\"}.fa-greater-than:before{content:\"\\f531\"}.fa-greater-than-equal:before{content:\"\\f532\"}.fa-grimace:before{content:\"\\f57f\"}.fa-grin:before{content:\"\\f580\"}.fa-grin-alt:before{content:\"\\f581\"}.fa-grin-beam:before{content:\"\\f582\"}.fa-grin-beam-sweat:before{content:\"\\f583\"}.fa-grin-hearts:before{content:\"\\f584\"}.fa-grin-squint:before{content:\"\\f585\"}.fa-grin-squint-tears:before{content:\"\\f586\"}.fa-grin-stars:before{content:\"\\f587\"}.fa-grin-tears:before{content:\"\\f588\"}.fa-grin-tongue:before{content:\"\\f589\"}.fa-grin-tongue-squint:before{content:\"\\f58a\"}.fa-grin-tongue-wink:before{content:\"\\f58b\"}.fa-grin-wink:before{content:\"\\f58c\"}.fa-grip-horizontal:before{content:\"\\f58d\"}.fa-grip-lines:before{content:\"\\f7a4\"}.fa-grip-lines-vertical:before{content:\"\\f7a5\"}.fa-grip-vertical:before{content:\"\\f58e\"}.fa-gripfire:before{content:\"\\f3ac\"}.fa-grunt:before{content:\"\\f3ad\"}.fa-guitar:before{content:\"\\f7a6\"}.fa-gulp:before{content:\"\\f3ae\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-hacker-news:before{content:\"\\f1d4\"}.fa-hacker-news-square:before{content:\"\\f3af\"}.fa-hackerrank:before{content:\"\\f5f7\"}.fa-hamburger:before{content:\"\\f805\"}.fa-hammer:before{content:\"\\f6e3\"}.fa-hamsa:before{content:\"\\f665\"}.fa-hand-holding:before{content:\"\\f4bd\"}.fa-hand-holding-heart:before{content:\"\\f4be\"}.fa-hand-holding-usd:before{content:\"\\f4c0\"}.fa-hand-lizard:before{content:\"\\f258\"}.fa-hand-middle-finger:before{content:\"\\f806\"}.fa-hand-paper:before{content:\"\\f256\"}.fa-hand-peace:before{content:\"\\f25b\"}.fa-hand-point-down:before{content:\"\\f0a7\"}.fa-hand-point-left:before{content:\"\\f0a5\"}.fa-hand-point-right:before{content:\"\\f0a4\"}.fa-hand-point-up:before{content:\"\\f0a6\"}.fa-hand-pointer:before{content:\"\\f25a\"}.fa-hand-rock:before{content:\"\\f255\"}.fa-hand-scissors:before{content:\"\\f257\"}.fa-hand-spock:before{content:\"\\f259\"}.fa-hands:before{content:\"\\f4c2\"}.fa-hands-helping:before{content:\"\\f4c4\"}.fa-handshake:before{content:\"\\f2b5\"}.fa-hanukiah:before{content:\"\\f6e6\"}.fa-hard-hat:before{content:\"\\f807\"}.fa-hashtag:before{content:\"\\f292\"}.fa-hat-wizard:before{content:\"\\f6e8\"}.fa-haykal:before{content:\"\\f666\"}.fa-hdd:before{content:\"\\f0a0\"}.fa-heading:before{content:\"\\f1dc\"}.fa-headphones:before{content:\"\\f025\"}.fa-headphones-alt:before{content:\"\\f58f\"}.fa-headset:before{content:\"\\f590\"}.fa-heart:before{content:\"\\f004\"}.fa-heart-broken:before{content:\"\\f7a9\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-helicopter:before{content:\"\\f533\"}.fa-highlighter:before{content:\"\\f591\"}.fa-hiking:before{content:\"\\f6ec\"}.fa-hippo:before{content:\"\\f6ed\"}.fa-hips:before{content:\"\\f452\"}.fa-hire-a-helper:before{content:\"\\f3b0\"}.fa-history:before{content:\"\\f1da\"}.fa-hockey-puck:before{content:\"\\f453\"}.fa-holly-berry:before{content:\"\\f7aa\"}.fa-home:before{content:\"\\f015\"}.fa-hooli:before{content:\"\\f427\"}.fa-hornbill:before{content:\"\\f592\"}.fa-horse:before{content:\"\\f6f0\"}.fa-horse-head:before{content:\"\\f7ab\"}.fa-hospital:before{content:\"\\f0f8\"}.fa-hospital-alt:before{content:\"\\f47d\"}.fa-hospital-symbol:before{content:\"\\f47e\"}.fa-hot-tub:before{content:\"\\f593\"}.fa-hotdog:before{content:\"\\f80f\"}.fa-hotel:before{content:\"\\f594\"}.fa-hotjar:before{content:\"\\f3b1\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-start:before{content:\"\\f251\"}.fa-house-damage:before{content:\"\\f6f1\"}.fa-houzz:before{content:\"\\f27c\"}.fa-hryvnia:before{content:\"\\f6f2\"}.fa-html5:before{content:\"\\f13b\"}.fa-hubspot:before{content:\"\\f3b2\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-ice-cream:before{content:\"\\f810\"}.fa-icicles:before{content:\"\\f7ad\"}.fa-icons:before{content:\"\\f86d\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-id-card:before{content:\"\\f2c2\"}.fa-id-card-alt:before{content:\"\\f47f\"}.fa-igloo:before{content:\"\\f7ae\"}.fa-image:before{content:\"\\f03e\"}.fa-images:before{content:\"\\f302\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-inbox:before{content:\"\\f01c\"}.fa-indent:before{content:\"\\f03c\"}.fa-industry:before{content:\"\\f275\"}.fa-infinity:before{content:\"\\f534\"}.fa-info:before{content:\"\\f129\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-instagram:before{content:\"\\f16d\"}.fa-intercom:before{content:\"\\f7af\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-invision:before{content:\"\\f7b0\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-italic:before{content:\"\\f033\"}.fa-itch-io:before{content:\"\\f83a\"}.fa-itunes:before{content:\"\\f3b4\"}.fa-itunes-note:before{content:\"\\f3b5\"}.fa-java:before{content:\"\\f4e4\"}.fa-jedi:before{content:\"\\f669\"}.fa-jedi-order:before{content:\"\\f50e\"}.fa-jenkins:before{content:\"\\f3b6\"}.fa-jira:before{content:\"\\f7b1\"}.fa-joget:before{content:\"\\f3b7\"}.fa-joint:before{content:\"\\f595\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-journal-whills:before{content:\"\\f66a\"}.fa-js:before{content:\"\\f3b8\"}.fa-js-square:before{content:\"\\f3b9\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-kaaba:before{content:\"\\f66b\"}.fa-kaggle:before{content:\"\\f5fa\"}.fa-key:before{content:\"\\f084\"}.fa-keybase:before{content:\"\\f4f5\"}.fa-keyboard:before{content:\"\\f11c\"}.fa-keycdn:before{content:\"\\f3ba\"}.fa-khanda:before{content:\"\\f66d\"}.fa-kickstarter:before{content:\"\\f3bb\"}.fa-kickstarter-k:before{content:\"\\f3bc\"}.fa-kiss:before{content:\"\\f596\"}.fa-kiss-beam:before{content:\"\\f597\"}.fa-kiss-wink-heart:before{content:\"\\f598\"}.fa-kiwi-bird:before{content:\"\\f535\"}.fa-korvue:before{content:\"\\f42f\"}.fa-landmark:before{content:\"\\f66f\"}.fa-language:before{content:\"\\f1ab\"}.fa-laptop:before{content:\"\\f109\"}.fa-laptop-code:before{content:\"\\f5fc\"}.fa-laptop-medical:before{content:\"\\f812\"}.fa-laravel:before{content:\"\\f3bd\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-laugh:before{content:\"\\f599\"}.fa-laugh-beam:before{content:\"\\f59a\"}.fa-laugh-squint:before{content:\"\\f59b\"}.fa-laugh-wink:before{content:\"\\f59c\"}.fa-layer-group:before{content:\"\\f5fd\"}.fa-leaf:before{content:\"\\f06c\"}.fa-leanpub:before{content:\"\\f212\"}.fa-lemon:before{content:\"\\f094\"}.fa-less:before{content:\"\\f41d\"}.fa-less-than:before{content:\"\\f536\"}.fa-less-than-equal:before{content:\"\\f537\"}.fa-level-down-alt:before{content:\"\\f3be\"}.fa-level-up-alt:before{content:\"\\f3bf\"}.fa-life-ring:before{content:\"\\f1cd\"}.fa-lightbulb:before{content:\"\\f0eb\"}.fa-line:before{content:\"\\f3c0\"}.fa-link:before{content:\"\\f0c1\"}.fa-linkedin:before{content:\"\\f08c\"}.fa-linkedin-in:before{content:\"\\f0e1\"}.fa-linode:before{content:\"\\f2b8\"}.fa-linux:before{content:\"\\f17c\"}.fa-lira-sign:before{content:\"\\f195\"}.fa-list:before{content:\"\\f03a\"}.fa-list-alt:before{content:\"\\f022\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-lock:before{content:\"\\f023\"}.fa-lock-open:before{content:\"\\f3c1\"}.fa-long-arrow-alt-down:before{content:\"\\f309\"}.fa-long-arrow-alt-left:before{content:\"\\f30a\"}.fa-long-arrow-alt-right:before{content:\"\\f30b\"}.fa-long-arrow-alt-up:before{content:\"\\f30c\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-luggage-cart:before{content:\"\\f59d\"}.fa-lyft:before{content:\"\\f3c3\"}.fa-magento:before{content:\"\\f3c4\"}.fa-magic:before{content:\"\\f0d0\"}.fa-magnet:before{content:\"\\f076\"}.fa-mail-bulk:before{content:\"\\f674\"}.fa-mailchimp:before{content:\"\\f59e\"}.fa-male:before{content:\"\\f183\"}.fa-mandalorian:before{content:\"\\f50f\"}.fa-map:before{content:\"\\f279\"}.fa-map-marked:before{content:\"\\f59f\"}.fa-map-marked-alt:before{content:\"\\f5a0\"}.fa-map-marker:before{content:\"\\f041\"}.fa-map-marker-alt:before{content:\"\\f3c5\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-markdown:before{content:\"\\f60f\"}.fa-marker:before{content:\"\\f5a1\"}.fa-mars:before{content:\"\\f222\"}.fa-mars-double:before{content:\"\\f227\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mask:before{content:\"\\f6fa\"}.fa-mastodon:before{content:\"\\f4f6\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-medal:before{content:\"\\f5a2\"}.fa-medapps:before{content:\"\\f3c6\"}.fa-medium:before{content:\"\\f23a\"}.fa-medium-m:before{content:\"\\f3c7\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-medrt:before{content:\"\\f3c8\"}.fa-meetup:before{content:\"\\f2e0\"}.fa-megaport:before{content:\"\\f5a3\"}.fa-meh:before{content:\"\\f11a\"}.fa-meh-blank:before{content:\"\\f5a4\"}.fa-meh-rolling-eyes:before{content:\"\\f5a5\"}.fa-memory:before{content:\"\\f538\"}.fa-mendeley:before{content:\"\\f7b3\"}.fa-menorah:before{content:\"\\f676\"}.fa-mercury:before{content:\"\\f223\"}.fa-meteor:before{content:\"\\f753\"}.fa-microchip:before{content:\"\\f2db\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-alt:before{content:\"\\f3c9\"}.fa-microphone-alt-slash:before{content:\"\\f539\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-microscope:before{content:\"\\f610\"}.fa-microsoft:before{content:\"\\f3ca\"}.fa-minus:before{content:\"\\f068\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-minus-square:before{content:\"\\f146\"}.fa-mitten:before{content:\"\\f7b5\"}.fa-mix:before{content:\"\\f3cb\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-mizuni:before{content:\"\\f3cc\"}.fa-mobile:before{content:\"\\f10b\"}.fa-mobile-alt:before{content:\"\\f3cd\"}.fa-modx:before{content:\"\\f285\"}.fa-monero:before{content:\"\\f3d0\"}.fa-money-bill:before{content:\"\\f0d6\"}.fa-money-bill-alt:before{content:\"\\f3d1\"}.fa-money-bill-wave:before{content:\"\\f53a\"}.fa-money-bill-wave-alt:before{content:\"\\f53b\"}.fa-money-check:before{content:\"\\f53c\"}.fa-money-check-alt:before{content:\"\\f53d\"}.fa-monument:before{content:\"\\f5a6\"}.fa-moon:before{content:\"\\f186\"}.fa-mortar-pestle:before{content:\"\\f5a7\"}.fa-mosque:before{content:\"\\f678\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-mountain:before{content:\"\\f6fc\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-mug-hot:before{content:\"\\f7b6\"}.fa-music:before{content:\"\\f001\"}.fa-napster:before{content:\"\\f3d2\"}.fa-neos:before{content:\"\\f612\"}.fa-network-wired:before{content:\"\\f6ff\"}.fa-neuter:before{content:\"\\f22c\"}.fa-newspaper:before{content:\"\\f1ea\"}.fa-nimblr:before{content:\"\\f5a8\"}.fa-node:before{content:\"\\f419\"}.fa-node-js:before{content:\"\\f3d3\"}.fa-not-equal:before{content:\"\\f53e\"}.fa-notes-medical:before{content:\"\\f481\"}.fa-npm:before{content:\"\\f3d4\"}.fa-ns8:before{content:\"\\f3d5\"}.fa-nutritionix:before{content:\"\\f3d6\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-oil-can:before{content:\"\\f613\"}.fa-old-republic:before{content:\"\\f510\"}.fa-om:before{content:\"\\f679\"}.fa-opencart:before{content:\"\\f23d\"}.fa-openid:before{content:\"\\f19b\"}.fa-opera:before{content:\"\\f26a\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-osi:before{content:\"\\f41a\"}.fa-otter:before{content:\"\\f700\"}.fa-outdent:before{content:\"\\f03b\"}.fa-page4:before{content:\"\\f3d7\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-pager:before{content:\"\\f815\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-paint-roller:before{content:\"\\f5aa\"}.fa-palette:before{content:\"\\f53f\"}.fa-palfed:before{content:\"\\f3d8\"}.fa-pallet:before{content:\"\\f482\"}.fa-paper-plane:before{content:\"\\f1d8\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-parachute-box:before{content:\"\\f4cd\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-parking:before{content:\"\\f540\"}.fa-passport:before{content:\"\\f5ab\"}.fa-pastafarianism:before{content:\"\\f67b\"}.fa-paste:before{content:\"\\f0ea\"}.fa-patreon:before{content:\"\\f3d9\"}.fa-pause:before{content:\"\\f04c\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-paw:before{content:\"\\f1b0\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-peace:before{content:\"\\f67c\"}.fa-pen:before{content:\"\\f304\"}.fa-pen-alt:before{content:\"\\f305\"}.fa-pen-fancy:before{content:\"\\f5ac\"}.fa-pen-nib:before{content:\"\\f5ad\"}.fa-pen-square:before{content:\"\\f14b\"}.fa-pencil-alt:before{content:\"\\f303\"}.fa-pencil-ruler:before{content:\"\\f5ae\"}.fa-penny-arcade:before{content:\"\\f704\"}.fa-people-carry:before{content:\"\\f4ce\"}.fa-pepper-hot:before{content:\"\\f816\"}.fa-percent:before{content:\"\\f295\"}.fa-percentage:before{content:\"\\f541\"}.fa-periscope:before{content:\"\\f3da\"}.fa-person-booth:before{content:\"\\f756\"}.fa-phabricator:before{content:\"\\f3db\"}.fa-phoenix-framework:before{content:\"\\f3dc\"}.fa-phoenix-squadron:before{content:\"\\f511\"}.fa-phone:before{content:\"\\f095\"}.fa-phone-alt:before{content:\"\\f879\"}.fa-phone-slash:before{content:\"\\f3dd\"}.fa-phone-square:before{content:\"\\f098\"}.fa-phone-square-alt:before{content:\"\\f87b\"}.fa-phone-volume:before{content:\"\\f2a0\"}.fa-photo-video:before{content:\"\\f87c\"}.fa-php:before{content:\"\\f457\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-pied-piper-hat:before{content:\"\\f4e5\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-piggy-bank:before{content:\"\\f4d3\"}.fa-pills:before{content:\"\\f484\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-pizza-slice:before{content:\"\\f818\"}.fa-place-of-worship:before{content:\"\\f67f\"}.fa-plane:before{content:\"\\f072\"}.fa-plane-arrival:before{content:\"\\f5af\"}.fa-plane-departure:before{content:\"\\f5b0\"}.fa-play:before{content:\"\\f04b\"}.fa-play-circle:before{content:\"\\f144\"}.fa-playstation:before{content:\"\\f3df\"}.fa-plug:before{content:\"\\f1e6\"}.fa-plus:before{content:\"\\f067\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-poll:before{content:\"\\f681\"}.fa-poll-h:before{content:\"\\f682\"}.fa-poo:before{content:\"\\f2fe\"}.fa-poo-storm:before{content:\"\\f75a\"}.fa-poop:before{content:\"\\f619\"}.fa-portrait:before{content:\"\\f3e0\"}.fa-pound-sign:before{content:\"\\f154\"}.fa-power-off:before{content:\"\\f011\"}.fa-pray:before{content:\"\\f683\"}.fa-praying-hands:before{content:\"\\f684\"}.fa-prescription:before{content:\"\\f5b1\"}.fa-prescription-bottle:before{content:\"\\f485\"}.fa-prescription-bottle-alt:before{content:\"\\f486\"}.fa-print:before{content:\"\\f02f\"}.fa-procedures:before{content:\"\\f487\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-project-diagram:before{content:\"\\f542\"}.fa-pushed:before{content:\"\\f3e1\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-python:before{content:\"\\f3e2\"}.fa-qq:before{content:\"\\f1d6\"}.fa-qrcode:before{content:\"\\f029\"}.fa-question:before{content:\"\\f128\"}.fa-question-circle:before{content:\"\\f059\"}.fa-quidditch:before{content:\"\\f458\"}.fa-quinscape:before{content:\"\\f459\"}.fa-quora:before{content:\"\\f2c4\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-quran:before{content:\"\\f687\"}.fa-r-project:before{content:\"\\f4f7\"}.fa-radiation:before{content:\"\\f7b9\"}.fa-radiation-alt:before{content:\"\\f7ba\"}.fa-rainbow:before{content:\"\\f75b\"}.fa-random:before{content:\"\\f074\"}.fa-raspberry-pi:before{content:\"\\f7bb\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-react:before{content:\"\\f41b\"}.fa-reacteurope:before{content:\"\\f75d\"}.fa-readme:before{content:\"\\f4d5\"}.fa-rebel:before{content:\"\\f1d0\"}.fa-receipt:before{content:\"\\f543\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-red-river:before{content:\"\\f3e3\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-redhat:before{content:\"\\f7bc\"}.fa-redo:before{content:\"\\f01e\"}.fa-redo-alt:before{content:\"\\f2f9\"}.fa-registered:before{content:\"\\f25d\"}.fa-remove-format:before{content:\"\\f87d\"}.fa-renren:before{content:\"\\f18b\"}.fa-reply:before{content:\"\\f3e5\"}.fa-reply-all:before{content:\"\\f122\"}.fa-replyd:before{content:\"\\f3e6\"}.fa-republican:before{content:\"\\f75e\"}.fa-researchgate:before{content:\"\\f4f8\"}.fa-resolving:before{content:\"\\f3e7\"}.fa-restroom:before{content:\"\\f7bd\"}.fa-retweet:before{content:\"\\f079\"}.fa-rev:before{content:\"\\f5b2\"}.fa-ribbon:before{content:\"\\f4d6\"}.fa-ring:before{content:\"\\f70b\"}.fa-road:before{content:\"\\f018\"}.fa-robot:before{content:\"\\f544\"}.fa-rocket:before{content:\"\\f135\"}.fa-rocketchat:before{content:\"\\f3e8\"}.fa-rockrms:before{content:\"\\f3e9\"}.fa-route:before{content:\"\\f4d7\"}.fa-rss:before{content:\"\\f09e\"}.fa-rss-square:before{content:\"\\f143\"}.fa-ruble-sign:before{content:\"\\f158\"}.fa-ruler:before{content:\"\\f545\"}.fa-ruler-combined:before{content:\"\\f546\"}.fa-ruler-horizontal:before{content:\"\\f547\"}.fa-ruler-vertical:before{content:\"\\f548\"}.fa-running:before{content:\"\\f70c\"}.fa-rupee-sign:before{content:\"\\f156\"}.fa-sad-cry:before{content:\"\\f5b3\"}.fa-sad-tear:before{content:\"\\f5b4\"}.fa-safari:before{content:\"\\f267\"}.fa-salesforce:before{content:\"\\f83b\"}.fa-sass:before{content:\"\\f41e\"}.fa-satellite:before{content:\"\\f7bf\"}.fa-satellite-dish:before{content:\"\\f7c0\"}.fa-save:before{content:\"\\f0c7\"}.fa-schlix:before{content:\"\\f3ea\"}.fa-school:before{content:\"\\f549\"}.fa-screwdriver:before{content:\"\\f54a\"}.fa-scribd:before{content:\"\\f28a\"}.fa-scroll:before{content:\"\\f70e\"}.fa-sd-card:before{content:\"\\f7c2\"}.fa-search:before{content:\"\\f002\"}.fa-search-dollar:before{content:\"\\f688\"}.fa-search-location:before{content:\"\\f689\"}.fa-search-minus:before{content:\"\\f010\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-searchengin:before{content:\"\\f3eb\"}.fa-seedling:before{content:\"\\f4d8\"}.fa-sellcast:before{content:\"\\f2da\"}.fa-sellsy:before{content:\"\\f213\"}.fa-server:before{content:\"\\f233\"}.fa-servicestack:before{content:\"\\f3ec\"}.fa-shapes:before{content:\"\\f61f\"}.fa-share:before{content:\"\\f064\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-share-square:before{content:\"\\f14d\"}.fa-shekel-sign:before{content:\"\\f20b\"}.fa-shield-alt:before{content:\"\\f3ed\"}.fa-ship:before{content:\"\\f21a\"}.fa-shipping-fast:before{content:\"\\f48b\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-shoe-prints:before{content:\"\\f54b\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-shopware:before{content:\"\\f5b5\"}.fa-shower:before{content:\"\\f2cc\"}.fa-shuttle-van:before{content:\"\\f5b6\"}.fa-sign:before{content:\"\\f4d9\"}.fa-sign-in-alt:before{content:\"\\f2f6\"}.fa-sign-language:before{content:\"\\f2a7\"}.fa-sign-out-alt:before{content:\"\\f2f5\"}.fa-signal:before{content:\"\\f012\"}.fa-signature:before{content:\"\\f5b7\"}.fa-sim-card:before{content:\"\\f7c4\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-sistrix:before{content:\"\\f3ee\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-sith:before{content:\"\\f512\"}.fa-skating:before{content:\"\\f7c5\"}.fa-sketch:before{content:\"\\f7c6\"}.fa-skiing:before{content:\"\\f7c9\"}.fa-skiing-nordic:before{content:\"\\f7ca\"}.fa-skull:before{content:\"\\f54c\"}.fa-skull-crossbones:before{content:\"\\f714\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-skype:before{content:\"\\f17e\"}.fa-slack:before{content:\"\\f198\"}.fa-slack-hash:before{content:\"\\f3ef\"}.fa-slash:before{content:\"\\f715\"}.fa-sleigh:before{content:\"\\f7cc\"}.fa-sliders-h:before{content:\"\\f1de\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-smile:before{content:\"\\f118\"}.fa-smile-beam:before{content:\"\\f5b8\"}.fa-smile-wink:before{content:\"\\f4da\"}.fa-smog:before{content:\"\\f75f\"}.fa-smoking:before{content:\"\\f48d\"}.fa-smoking-ban:before{content:\"\\f54d\"}.fa-sms:before{content:\"\\f7cd\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-snowboarding:before{content:\"\\f7ce\"}.fa-snowflake:before{content:\"\\f2dc\"}.fa-snowman:before{content:\"\\f7d0\"}.fa-snowplow:before{content:\"\\f7d2\"}.fa-socks:before{content:\"\\f696\"}.fa-solar-panel:before{content:\"\\f5ba\"}.fa-sort:before{content:\"\\f0dc\"}.fa-sort-alpha-down:before{content:\"\\f15d\"}.fa-sort-alpha-down-alt:before{content:\"\\f881\"}.fa-sort-alpha-up:before{content:\"\\f15e\"}.fa-sort-alpha-up-alt:before{content:\"\\f882\"}.fa-sort-amount-down:before{content:\"\\f160\"}.fa-sort-amount-down-alt:before{content:\"\\f884\"}.fa-sort-amount-up:before{content:\"\\f161\"}.fa-sort-amount-up-alt:before{content:\"\\f885\"}.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-numeric-down:before{content:\"\\f162\"}.fa-sort-numeric-down-alt:before{content:\"\\f886\"}.fa-sort-numeric-up:before{content:\"\\f163\"}.fa-sort-numeric-up-alt:before{content:\"\\f887\"}.fa-sort-up:before{content:\"\\f0de\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-sourcetree:before{content:\"\\f7d3\"}.fa-spa:before{content:\"\\f5bb\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-speakap:before{content:\"\\f3f3\"}.fa-speaker-deck:before{content:\"\\f83c\"}.fa-spell-check:before{content:\"\\f891\"}.fa-spider:before{content:\"\\f717\"}.fa-spinner:before{content:\"\\f110\"}.fa-splotch:before{content:\"\\f5bc\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-spray-can:before{content:\"\\f5bd\"}.fa-square:before{content:\"\\f0c8\"}.fa-square-full:before{content:\"\\f45c\"}.fa-square-root-alt:before{content:\"\\f698\"}.fa-squarespace:before{content:\"\\f5be\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-stackpath:before{content:\"\\f842\"}.fa-stamp:before{content:\"\\f5bf\"}.fa-star:before{content:\"\\f005\"}.fa-star-and-crescent:before{content:\"\\f699\"}.fa-star-half:before{content:\"\\f089\"}.fa-star-half-alt:before{content:\"\\f5c0\"}.fa-star-of-david:before{content:\"\\f69a\"}.fa-star-of-life:before{content:\"\\f621\"}.fa-staylinked:before{content:\"\\f3f5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-steam-symbol:before{content:\"\\f3f6\"}.fa-step-backward:before{content:\"\\f048\"}.fa-step-forward:before{content:\"\\f051\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-sticker-mule:before{content:\"\\f3f7\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-stop:before{content:\"\\f04d\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stopwatch:before{content:\"\\f2f2\"}.fa-store:before{content:\"\\f54e\"}.fa-store-alt:before{content:\"\\f54f\"}.fa-strava:before{content:\"\\f428\"}.fa-stream:before{content:\"\\f550\"}.fa-street-view:before{content:\"\\f21d\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-stripe:before{content:\"\\f429\"}.fa-stripe-s:before{content:\"\\f42a\"}.fa-stroopwafel:before{content:\"\\f551\"}.fa-studiovinari:before{content:\"\\f3f8\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-subscript:before{content:\"\\f12c\"}.fa-subway:before{content:\"\\f239\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-suitcase-rolling:before{content:\"\\f5c1\"}.fa-sun:before{content:\"\\f185\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-superscript:before{content:\"\\f12b\"}.fa-supple:before{content:\"\\f3f9\"}.fa-surprise:before{content:\"\\f5c2\"}.fa-suse:before{content:\"\\f7d6\"}.fa-swatchbook:before{content:\"\\f5c3\"}.fa-swimmer:before{content:\"\\f5c4\"}.fa-swimming-pool:before{content:\"\\f5c5\"}.fa-symfony:before{content:\"\\f83d\"}.fa-synagogue:before{content:\"\\f69b\"}.fa-sync:before{content:\"\\f021\"}.fa-sync-alt:before{content:\"\\f2f1\"}.fa-syringe:before{content:\"\\f48e\"}.fa-table:before{content:\"\\f0ce\"}.fa-table-tennis:before{content:\"\\f45d\"}.fa-tablet:before{content:\"\\f10a\"}.fa-tablet-alt:before{content:\"\\f3fa\"}.fa-tablets:before{content:\"\\f490\"}.fa-tachometer-alt:before{content:\"\\f3fd\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-tape:before{content:\"\\f4db\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-taxi:before{content:\"\\f1ba\"}.fa-teamspeak:before{content:\"\\f4f9\"}.fa-teeth:before{content:\"\\f62e\"}.fa-teeth-open:before{content:\"\\f62f\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-telegram-plane:before{content:\"\\f3fe\"}.fa-temperature-high:before{content:\"\\f769\"}.fa-temperature-low:before{content:\"\\f76b\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-tenge:before{content:\"\\f7d7\"}.fa-terminal:before{content:\"\\f120\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-th:before{content:\"\\f00a\"}.fa-th-large:before{content:\"\\f009\"}.fa-th-list:before{content:\"\\f00b\"}.fa-the-red-yeti:before{content:\"\\f69d\"}.fa-theater-masks:before{content:\"\\f630\"}.fa-themeco:before{content:\"\\f5c6\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-thermometer:before{content:\"\\f491\"}.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-think-peaks:before{content:\"\\f731\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbtack:before{content:\"\\f08d\"}.fa-ticket-alt:before{content:\"\\f3ff\"}.fa-times:before{content:\"\\f00d\"}.fa-times-circle:before{content:\"\\f057\"}.fa-tint:before{content:\"\\f043\"}.fa-tint-slash:before{content:\"\\f5c7\"}.fa-tired:before{content:\"\\f5c8\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-toilet:before{content:\"\\f7d8\"}.fa-toilet-paper:before{content:\"\\f71e\"}.fa-toolbox:before{content:\"\\f552\"}.fa-tools:before{content:\"\\f7d9\"}.fa-tooth:before{content:\"\\f5c9\"}.fa-torah:before{content:\"\\f6a0\"}.fa-torii-gate:before{content:\"\\f6a1\"}.fa-tractor:before{content:\"\\f722\"}.fa-trade-federation:before{content:\"\\f513\"}.fa-trademark:before{content:\"\\f25c\"}.fa-traffic-light:before{content:\"\\f637\"}.fa-train:before{content:\"\\f238\"}.fa-tram:before{content:\"\\f7da\"}.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-trash:before{content:\"\\f1f8\"}.fa-trash-alt:before{content:\"\\f2ed\"}.fa-trash-restore:before{content:\"\\f829\"}.fa-trash-restore-alt:before{content:\"\\f82a\"}.fa-tree:before{content:\"\\f1bb\"}.fa-trello:before{content:\"\\f181\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-trophy:before{content:\"\\f091\"}.fa-truck:before{content:\"\\f0d1\"}.fa-truck-loading:before{content:\"\\f4de\"}.fa-truck-monster:before{content:\"\\f63b\"}.fa-truck-moving:before{content:\"\\f4df\"}.fa-truck-pickup:before{content:\"\\f63c\"}.fa-tshirt:before{content:\"\\f553\"}.fa-tty:before{content:\"\\f1e4\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-tv:before{content:\"\\f26c\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-twitter:before{content:\"\\f099\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-typo3:before{content:\"\\f42b\"}.fa-uber:before{content:\"\\f402\"}.fa-ubuntu:before{content:\"\\f7df\"}.fa-uikit:before{content:\"\\f403\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-umbrella-beach:before{content:\"\\f5ca\"}.fa-underline:before{content:\"\\f0cd\"}.fa-undo:before{content:\"\\f0e2\"}.fa-undo-alt:before{content:\"\\f2ea\"}.fa-uniregistry:before{content:\"\\f404\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-university:before{content:\"\\f19c\"}.fa-unlink:before{content:\"\\f127\"}.fa-unlock:before{content:\"\\f09c\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-untappd:before{content:\"\\f405\"}.fa-upload:before{content:\"\\f093\"}.fa-ups:before{content:\"\\f7e0\"}.fa-usb:before{content:\"\\f287\"}.fa-user:before{content:\"\\f007\"}.fa-user-alt:before{content:\"\\f406\"}.fa-user-alt-slash:before{content:\"\\f4fa\"}.fa-user-astronaut:before{content:\"\\f4fb\"}.fa-user-check:before{content:\"\\f4fc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-clock:before{content:\"\\f4fd\"}.fa-user-cog:before{content:\"\\f4fe\"}.fa-user-edit:before{content:\"\\f4ff\"}.fa-user-friends:before{content:\"\\f500\"}.fa-user-graduate:before{content:\"\\f501\"}.fa-user-injured:before{content:\"\\f728\"}.fa-user-lock:before{content:\"\\f502\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-user-minus:before{content:\"\\f503\"}.fa-user-ninja:before{content:\"\\f504\"}.fa-user-nurse:before{content:\"\\f82f\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-user-shield:before{content:\"\\f505\"}.fa-user-slash:before{content:\"\\f506\"}.fa-user-tag:before{content:\"\\f507\"}.fa-user-tie:before{content:\"\\f508\"}.fa-user-times:before{content:\"\\f235\"}.fa-users:before{content:\"\\f0c0\"}.fa-users-cog:before{content:\"\\f509\"}.fa-usps:before{content:\"\\f7e1\"}.fa-ussunnah:before{content:\"\\f407\"}.fa-utensil-spoon:before{content:\"\\f2e5\"}.fa-utensils:before{content:\"\\f2e7\"}.fa-vaadin:before{content:\"\\f408\"}.fa-vector-square:before{content:\"\\f5cb\"}.fa-venus:before{content:\"\\f221\"}.fa-venus-double:before{content:\"\\f226\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-viacoin:before{content:\"\\f237\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-vial:before{content:\"\\f492\"}.fa-vials:before{content:\"\\f493\"}.fa-viber:before{content:\"\\f409\"}.fa-video:before{content:\"\\f03d\"}.fa-video-slash:before{content:\"\\f4e2\"}.fa-vihara:before{content:\"\\f6a7\"}.fa-vimeo:before{content:\"\\f40a\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-vimeo-v:before{content:\"\\f27d\"}.fa-vine:before{content:\"\\f1ca\"}.fa-vk:before{content:\"\\f189\"}.fa-vnv:before{content:\"\\f40b\"}.fa-voicemail:before{content:\"\\f897\"}.fa-volleyball-ball:before{content:\"\\f45f\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-mute:before{content:\"\\f6a9\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-up:before{content:\"\\f028\"}.fa-vote-yea:before{content:\"\\f772\"}.fa-vr-cardboard:before{content:\"\\f729\"}.fa-vuejs:before{content:\"\\f41f\"}.fa-walking:before{content:\"\\f554\"}.fa-wallet:before{content:\"\\f555\"}.fa-warehouse:before{content:\"\\f494\"}.fa-water:before{content:\"\\f773\"}.fa-wave-square:before{content:\"\\f83e\"}.fa-waze:before{content:\"\\f83f\"}.fa-weebly:before{content:\"\\f5cc\"}.fa-weibo:before{content:\"\\f18a\"}.fa-weight:before{content:\"\\f496\"}.fa-weight-hanging:before{content:\"\\f5cd\"}.fa-weixin:before{content:\"\\f1d7\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-whatsapp-square:before{content:\"\\f40c\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-whmcs:before{content:\"\\f40d\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-wind:before{content:\"\\f72e\"}.fa-window-close:before{content:\"\\f410\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-windows:before{content:\"\\f17a\"}.fa-wine-bottle:before{content:\"\\f72f\"}.fa-wine-glass:before{content:\"\\f4e3\"}.fa-wine-glass-alt:before{content:\"\\f5ce\"}.fa-wix:before{content:\"\\f5cf\"}.fa-wizards-of-the-coast:before{content:\"\\f730\"}.fa-wolf-pack-battalion:before{content:\"\\f514\"}.fa-won-sign:before{content:\"\\f159\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-wordpress-simple:before{content:\"\\f411\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-wpforms:before{content:\"\\f298\"}.fa-wpressr:before{content:\"\\f3e4\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-x-ray:before{content:\"\\f497\"}.fa-xbox:before{content:\"\\f412\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-y-combinator:before{content:\"\\f23b\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-yammer:before{content:\"\\f840\"}.fa-yandex:before{content:\"\\f413\"}.fa-yandex-international:before{content:\"\\f414\"}.fa-yarn:before{content:\"\\f7e3\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-yen-sign:before{content:\"\\f157\"}.fa-yin-yang:before{content:\"\\f6ad\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-youtube:before{content:\"\\f167\"}.fa-youtube-square:before{content:\"\\f431\"}.fa-zhihu:before{content:\"\\f63f\"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:\"Font Awesome 5 Brands\";font-style:normal;font-weight:normal;font-display:auto;src:url('fa-brands-400.eot');src:url('fa-brands-400.eot?#iefix') format(\"embedded-opentype\"),url('fa-brands-400.woff2') format(\"woff2\"),url('fa-brands-400.woff') format(\"woff\"),url('fa-brands-400.ttf') format(\"truetype\"),url('fa-brands-400.svg#fontawesome') format(\"svg\")}.fab{font-family:\"Font Awesome 5 Brands\"}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:400;font-display:auto;src:url('fa-regular-400.eot');src:url('fa-regular-400.eot?#iefix') format(\"embedded-opentype\"),url('fa-regular-400.woff2') format(\"woff2\"),url('fa-regular-400.woff') format(\"woff\"),url('fa-regular-400.ttf') format(\"truetype\"),url('fa-regular-400.svg#fontawesome') format(\"svg\")}.far{font-weight:400}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:900;font-display:auto;src:url('fa-solid-900.eot');src:url('fa-solid-900.eot?#iefix') format(\"embedded-opentype\"),url('fa-solid-900.woff2') format(\"woff2\"),url('fa-solid-900.woff') format(\"woff\"),url('fa-solid-900.ttf') format(\"truetype\"),url('fa-solid-900.svg#fontawesome') format(\"svg\")}.fa,.far,.fas{font-family:\"Font Awesome 5 Free\"}.fa,.fas{font-weight:900}/*\n\tSpectral by HTML5 UP\n\thtml5up.net | @ajlkn\n\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\n*/html, body, div, span, applet, object,\niframe, h1, h2, h3, h4, h5, h6, p, blockquote,\npre, a, abbr, acronym, address, big, cite,\ncode, del, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var, b,\nu, i, center, dl, dt, dd, ol, ul, li, fieldset,\nform, label, legend, table, caption, tbody,\ntfoot, thead, tr, th, td, article, aside,\ncanvas, details, embed, figure, figcaption,\nfooter, header, hgroup, menu, nav, output, ruby,\nsection, summary, time, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;}article, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;}body {\n\tline-height: 1;\n}ol, ul {\n\tlist-style: none;\n}blockquote, q {\n\tquotes: none;\n}blockquote:before, blockquote:after, q:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}table {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}body {\n\t-webkit-text-size-adjust: none;\n}mark {\n\tbackground-color: transparent;\n\tcolor: inherit;\n}input::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}input, select, textarea {\n\t-moz-appearance: none;\n\t-webkit-appearance: none;\n\t-ms-appearance: none;\n\tappearance: none;\n}/* Basic */@-ms-viewport {\n\t\twidth: device-width;\n\t}html {\n\t\tbox-sizing: border-box;\n\t}*, *:before, *:after {\n\t\tbox-sizing: inherit;\n\t}body {\n\t\tbackground: #2e3842;\n\t}body.is-preload *, body.is-preload *:before, body.is-preload *:after {\n\t\t\t-webkit-animation: none !important;\n\t\t\tanimation: none !important;\n\t\t\ttransition: none !important;\n\t\t}body, input, select, textarea {\n\t\tcolor: #fff;\n\t\tfont-family: \"Open Sans\", Helvetica, sans-serif;\n\t\tfont-size: 15pt;\n\t\tfont-weight: 400;\n\t\tletter-spacing: 0.075em;\n\t\tline-height: 1.65em;\n\t}@media screen and (max-width: 1680px) {\n\n\t\t\tbody, input, select, textarea {\n\t\t\t\tfont-size: 13pt;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 1280px) {\n\n\t\t\tbody, input, select, textarea {\n\t\t\t\tfont-size: 12pt;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\tbody, input, select, textarea {\n\t\t\t\tfont-size: 11pt;\n\t\t\t\tletter-spacing: 0.0375em;\n\t\t\t}\n\n\t\t}a {\n\t\ttransition: color 0.2s ease, border-bottom-color 0.2s ease;\n\t\tborder-bottom: dotted 1px;\n\t\tcolor: inherit;\n\t\ttext-decoration: none;\n\t}a:hover {\n\t\t\tborder-bottom-color: transparent;\n\t\t}strong, b {\n\t\tcolor: #fff;\n\t\tfont-weight: 600;\n\t}em, i {\n\t\tfont-style: italic;\n\t}p {\n\t\tmargin: 0 0 2em 0;\n\t}h1, h2, h3, h4, h5, h6 {\n\t\tcolor: #fff;\n\t\tfont-weight: 800;\n\t\tletter-spacing: 0.225em;\n\t\tline-height: 1em;\n\t\tmargin: 0 0 1em 0;\n\t\ttext-transform: uppercase;\n\t}h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n\t\t\tcolor: inherit;\n\t\t\ttext-decoration: none;\n\t\t}h2 {\n\t\tfont-size: 1.35em;\n\t\tline-height: 1.75em;\n\t}@media screen and (max-width: 736px) {\n\n\t\t\th2 {\n\t\t\t\tfont-size: 1.1em;\n\t\t\t\tline-height: 1.65em;\n\t\t\t}\n\n\t\t}h3 {\n\t\tfont-size: 1.15em;\n\t\tline-height: 1.75em;\n\t}@media screen and (max-width: 736px) {\n\n\t\t\th3 {\n\t\t\t\tfont-size: 1em;\n\t\t\t\tline-height: 1.65em;\n\t\t\t}\n\n\t\t}h4 {\n\t\tfont-size: 1em;\n\t\tline-height: 1.5em;\n\t}h5 {\n\t\tfont-size: 0.8em;\n\t\tline-height: 1.5em;\n\t}h6 {\n\t\tfont-size: 0.7em;\n\t\tline-height: 1.5em;\n\t}sub {\n\t\tfont-size: 0.8em;\n\t\tposition: relative;\n\t\ttop: 0.5em;\n\t}sup {\n\t\tfont-size: 0.8em;\n\t\tposition: relative;\n\t\ttop: -0.5em;\n\t}hr {\n\t\tborder: 0;\n\t\tborder-bottom: solid 2px #fff;\n\t\tmargin: 3em 0;\n\t}hr.major {\n\t\t\tmargin: 4.5em 0;\n\t\t}blockquote {\n\t\tborder-left: solid 4px #fff;\n\t\tfont-style: italic;\n\t\tmargin: 0 0 2em 0;\n\t\tpadding: 0.5em 0 0.5em 2em;\n\t}code {\n\t\tbackground: rgba(144, 144, 144, 0.25);\n\t\tborder-radius: 3px;\n\t\tfont-family: \"Courier New\", monospace;\n\t\tfont-size: 0.9em;\n\t\tletter-spacing: 0;\n\t\tmargin: 0 0.25em;\n\t\tpadding: 0.25em 0.65em;\n\t}pre {\n\t\t-webkit-overflow-scrolling: touch;\n\t\tfont-family: \"Courier New\", monospace;\n\t\tfont-size: 0.9em;\n\t\tmargin: 0 0 2em 0;\n\t}pre code {\n\t\t\tdisplay: block;\n\t\t\tline-height: 1.75em;\n\t\t\tpadding: 1em 1.5em;\n\t\t\toverflow-x: auto;\n\t\t}.align-left {\n\t\ttext-align: left;\n\t}.align-center {\n\t\ttext-align: center;\n\t}.align-right {\n\t\ttext-align: right;\n\t}/* Row */.row {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tbox-sizing: border-box;\n\t\talign-items: stretch;\n\t}.row > * {\n\t\t\tbox-sizing: border-box;\n\t\t}.row.gtr-uniform > * > :last-child {\n\t\t\tmargin-bottom: 0;\n\t\t}.row.aln-left {\n\t\t\tjustify-content: flex-start;\n\t\t}.row.aln-center {\n\t\t\tjustify-content: center;\n\t\t}.row.aln-right {\n\t\t\tjustify-content: flex-end;\n\t\t}.row.aln-top {\n\t\t\talign-items: flex-start;\n\t\t}.row.aln-middle {\n\t\t\talign-items: center;\n\t\t}.row.aln-bottom {\n\t\t\talign-items: flex-end;\n\t\t}.row > .imp {\n\t\t\torder: -1;\n\t\t}.row > .col-1 {\n\t\t\twidth: 8.33333%;\n\t\t}.row > .off-1 {\n\t\t\tmargin-left: 8.33333%;\n\t\t}.row > .col-2 {\n\t\t\twidth: 16.66667%;\n\t\t}.row > .off-2 {\n\t\t\tmargin-left: 16.66667%;\n\t\t}.row > .col-3 {\n\t\t\twidth: 25%;\n\t\t}.row > .off-3 {\n\t\t\tmargin-left: 25%;\n\t\t}.row > .col-4 {\n\t\t\twidth: 33.33333%;\n\t\t}.row > .off-4 {\n\t\t\tmargin-left: 33.33333%;\n\t\t}.row > .col-5 {\n\t\t\twidth: 41.66667%;\n\t\t}.row > .off-5 {\n\t\t\tmargin-left: 41.66667%;\n\t\t}.row > .col-6 {\n\t\t\twidth: 50%;\n\t\t}.row > .off-6 {\n\t\t\tmargin-left: 50%;\n\t\t}.row > .col-7 {\n\t\t\twidth: 58.33333%;\n\t\t}.row > .off-7 {\n\t\t\tmargin-left: 58.33333%;\n\t\t}.row > .col-8 {\n\t\t\twidth: 66.66667%;\n\t\t}.row > .off-8 {\n\t\t\tmargin-left: 66.66667%;\n\t\t}.row > .col-9 {\n\t\t\twidth: 75%;\n\t\t}.row > .off-9 {\n\t\t\tmargin-left: 75%;\n\t\t}.row > .col-10 {\n\t\t\twidth: 83.33333%;\n\t\t}.row > .off-10 {\n\t\t\tmargin-left: 83.33333%;\n\t\t}.row > .col-11 {\n\t\t\twidth: 91.66667%;\n\t\t}.row > .off-11 {\n\t\t\tmargin-left: 91.66667%;\n\t\t}.row > .col-12 {\n\t\t\twidth: 100%;\n\t\t}.row > .off-12 {\n\t\t\tmargin-left: 100%;\n\t\t}.row.gtr-0 {\n\t\t\tmargin-top: 0;\n\t\t\tmargin-left: 0em;\n\t\t}.row.gtr-0 > * {\n\t\t\t\tpadding: 0 0 0 0em;\n\t\t\t}.row.gtr-0.gtr-uniform {\n\t\t\t\tmargin-top: 0em;\n\t\t\t}.row.gtr-0.gtr-uniform > * {\n\t\t\t\t\tpadding-top: 0em;\n\t\t\t\t}.row.gtr-25 {\n\t\t\tmargin-top: 0;\n\t\t\tmargin-left: -0.375em;\n\t\t}.row.gtr-25 > * {\n\t\t\t\tpadding: 0 0 0 0.375em;\n\t\t\t}.row.gtr-25.gtr-uniform {\n\t\t\t\tmargin-top: -0.375em;\n\t\t\t}.row.gtr-25.gtr-uniform > * {\n\t\t\t\t\tpadding-top: 0.375em;\n\t\t\t\t}.row.gtr-50 {\n\t\t\tmargin-top: 0;\n\t\t\tmargin-left: -0.75em;\n\t\t}.row.gtr-50 > * {\n\t\t\t\tpadding: 0 0 0 0.75em;\n\t\t\t}.row.gtr-50.gtr-uniform {\n\t\t\t\tmargin-top: -0.75em;\n\t\t\t}.row.gtr-50.gtr-uniform > * {\n\t\t\t\t\tpadding-top: 0.75em;\n\t\t\t\t}.row {\n\t\t\tmargin-top: 0;\n\t\t\tmargin-left: -1.5em;\n\t\t}.row > * {\n\t\t\t\tpadding: 0 0 0 1.5em;\n\t\t\t}.row.gtr-uniform {\n\t\t\t\tmargin-top: -1.5em;\n\t\t\t}.row.gtr-uniform > * {\n\t\t\t\t\tpadding-top: 1.5em;\n\t\t\t\t}.row.gtr-150 {\n\t\t\tmargin-top: 0;\n\t\t\tmargin-left: -2.25em;\n\t\t}.row.gtr-150 > * {\n\t\t\t\tpadding: 0 0 0 2.25em;\n\t\t\t}.row.gtr-150.gtr-uniform {\n\t\t\t\tmargin-top: -2.25em;\n\t\t\t}.row.gtr-150.gtr-uniform > * {\n\t\t\t\t\tpadding-top: 2.25em;\n\t\t\t\t}.row.gtr-200 {\n\t\t\tmargin-top: 0;\n\t\t\tmargin-left: -3em;\n\t\t}.row.gtr-200 > * {\n\t\t\t\tpadding: 0 0 0 3em;\n\t\t\t}.row.gtr-200.gtr-uniform {\n\t\t\t\tmargin-top: -3em;\n\t\t\t}.row.gtr-200.gtr-uniform > * {\n\t\t\t\t\tpadding-top: 3em;\n\t\t\t\t}@media screen and (max-width: 1680px) {\n\n\t\t\t.row {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\talign-items: stretch;\n\t\t\t}\n\n\t\t\t\t.row > * {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-uniform > * > :last-child {\n\t\t\t\t\tmargin-bottom: 0;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-left {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-center {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-right {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-top {\n\t\t\t\t\talign-items: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-middle {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-bottom {\n\t\t\t\t\talign-items: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row > .imp-xlarge {\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-1-xlarge {\n\t\t\t\t\twidth: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-1-xlarge {\n\t\t\t\t\tmargin-left: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-2-xlarge {\n\t\t\t\t\twidth: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-2-xlarge {\n\t\t\t\t\tmargin-left: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-3-xlarge {\n\t\t\t\t\twidth: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-3-xlarge {\n\t\t\t\t\tmargin-left: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-4-xlarge {\n\t\t\t\t\twidth: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-4-xlarge {\n\t\t\t\t\tmargin-left: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-5-xlarge {\n\t\t\t\t\twidth: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-5-xlarge {\n\t\t\t\t\tmargin-left: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-6-xlarge {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-6-xlarge {\n\t\t\t\t\tmargin-left: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-7-xlarge {\n\t\t\t\t\twidth: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-7-xlarge {\n\t\t\t\t\tmargin-left: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-8-xlarge {\n\t\t\t\t\twidth: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-8-xlarge {\n\t\t\t\t\tmargin-left: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-9-xlarge {\n\t\t\t\t\twidth: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-9-xlarge {\n\t\t\t\t\tmargin-left: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-10-xlarge {\n\t\t\t\t\twidth: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-10-xlarge {\n\t\t\t\t\tmargin-left: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-11-xlarge {\n\t\t\t\t\twidth: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-11-xlarge {\n\t\t\t\t\tmargin-left: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-12-xlarge {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-12-xlarge {\n\t\t\t\t\tmargin-left: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-0 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: 0em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\n\t\t\t\t\t\tmargin-top: 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-25 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.375em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.375em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-50 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.75em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.75em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -1.5em;\n\t\t\t\t}\n\n\t\t\t\t\t.row > * {\n\t\t\t\t\t\tpadding: 0 0 0 1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 1.5em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-150 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -2.25em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150 > * {\n\t\t\t\t\t\tpadding: 0 0 0 2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 2.25em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-200 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -3em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200 > * {\n\t\t\t\t\t\tpadding: 0 0 0 3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 3em;\n\t\t\t\t\t\t}\n\n\t\t}@media screen and (max-width: 1280px) {\n\n\t\t\t.row {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\talign-items: stretch;\n\t\t\t}\n\n\t\t\t\t.row > * {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-uniform > * > :last-child {\n\t\t\t\t\tmargin-bottom: 0;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-left {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-center {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-right {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-top {\n\t\t\t\t\talign-items: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-middle {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-bottom {\n\t\t\t\t\talign-items: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row > .imp-large {\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-1-large {\n\t\t\t\t\twidth: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-1-large {\n\t\t\t\t\tmargin-left: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-2-large {\n\t\t\t\t\twidth: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-2-large {\n\t\t\t\t\tmargin-left: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-3-large {\n\t\t\t\t\twidth: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-3-large {\n\t\t\t\t\tmargin-left: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-4-large {\n\t\t\t\t\twidth: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-4-large {\n\t\t\t\t\tmargin-left: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-5-large {\n\t\t\t\t\twidth: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-5-large {\n\t\t\t\t\tmargin-left: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-6-large {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-6-large {\n\t\t\t\t\tmargin-left: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-7-large {\n\t\t\t\t\twidth: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-7-large {\n\t\t\t\t\tmargin-left: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-8-large {\n\t\t\t\t\twidth: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-8-large {\n\t\t\t\t\tmargin-left: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-9-large {\n\t\t\t\t\twidth: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-9-large {\n\t\t\t\t\tmargin-left: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-10-large {\n\t\t\t\t\twidth: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-10-large {\n\t\t\t\t\tmargin-left: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-11-large {\n\t\t\t\t\twidth: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-11-large {\n\t\t\t\t\tmargin-left: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-12-large {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-12-large {\n\t\t\t\t\tmargin-left: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-0 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: 0em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\n\t\t\t\t\t\tmargin-top: 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-25 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.375em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.375em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-50 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.75em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.75em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -1.5em;\n\t\t\t\t}\n\n\t\t\t\t\t.row > * {\n\t\t\t\t\t\tpadding: 0 0 0 1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 1.5em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-150 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -2.25em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150 > * {\n\t\t\t\t\t\tpadding: 0 0 0 2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 2.25em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-200 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -3em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200 > * {\n\t\t\t\t\t\tpadding: 0 0 0 3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 3em;\n\t\t\t\t\t\t}\n\n\t\t}@media screen and (max-width: 980px) {\n\n\t\t\t.row {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\talign-items: stretch;\n\t\t\t}\n\n\t\t\t\t.row > * {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-uniform > * > :last-child {\n\t\t\t\t\tmargin-bottom: 0;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-left {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-center {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-right {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-top {\n\t\t\t\t\talign-items: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-middle {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-bottom {\n\t\t\t\t\talign-items: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row > .imp-medium {\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-1-medium {\n\t\t\t\t\twidth: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-1-medium {\n\t\t\t\t\tmargin-left: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-2-medium {\n\t\t\t\t\twidth: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-2-medium {\n\t\t\t\t\tmargin-left: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-3-medium {\n\t\t\t\t\twidth: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-3-medium {\n\t\t\t\t\tmargin-left: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-4-medium {\n\t\t\t\t\twidth: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-4-medium {\n\t\t\t\t\tmargin-left: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-5-medium {\n\t\t\t\t\twidth: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-5-medium {\n\t\t\t\t\tmargin-left: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-6-medium {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-6-medium {\n\t\t\t\t\tmargin-left: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-7-medium {\n\t\t\t\t\twidth: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-7-medium {\n\t\t\t\t\tmargin-left: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-8-medium {\n\t\t\t\t\twidth: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-8-medium {\n\t\t\t\t\tmargin-left: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-9-medium {\n\t\t\t\t\twidth: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-9-medium {\n\t\t\t\t\tmargin-left: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-10-medium {\n\t\t\t\t\twidth: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-10-medium {\n\t\t\t\t\tmargin-left: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-11-medium {\n\t\t\t\t\twidth: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-11-medium {\n\t\t\t\t\tmargin-left: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-12-medium {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-12-medium {\n\t\t\t\t\tmargin-left: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-0 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: 0em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\n\t\t\t\t\t\tmargin-top: 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-25 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.375em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.375em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-50 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.75em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.75em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -1.5em;\n\t\t\t\t}\n\n\t\t\t\t\t.row > * {\n\t\t\t\t\t\tpadding: 0 0 0 1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 1.5em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-150 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -2.25em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150 > * {\n\t\t\t\t\t\tpadding: 0 0 0 2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 2.25em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-200 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -3em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200 > * {\n\t\t\t\t\t\tpadding: 0 0 0 3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 3em;\n\t\t\t\t\t\t}\n\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t.row {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\talign-items: stretch;\n\t\t\t}\n\n\t\t\t\t.row > * {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-uniform > * > :last-child {\n\t\t\t\t\tmargin-bottom: 0;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-left {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-center {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-right {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-top {\n\t\t\t\t\talign-items: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-middle {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-bottom {\n\t\t\t\t\talign-items: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row > .imp-small {\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-1-small {\n\t\t\t\t\twidth: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-1-small {\n\t\t\t\t\tmargin-left: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-2-small {\n\t\t\t\t\twidth: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-2-small {\n\t\t\t\t\tmargin-left: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-3-small {\n\t\t\t\t\twidth: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-3-small {\n\t\t\t\t\tmargin-left: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-4-small {\n\t\t\t\t\twidth: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-4-small {\n\t\t\t\t\tmargin-left: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-5-small {\n\t\t\t\t\twidth: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-5-small {\n\t\t\t\t\tmargin-left: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-6-small {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-6-small {\n\t\t\t\t\tmargin-left: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-7-small {\n\t\t\t\t\twidth: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-7-small {\n\t\t\t\t\tmargin-left: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-8-small {\n\t\t\t\t\twidth: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-8-small {\n\t\t\t\t\tmargin-left: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-9-small {\n\t\t\t\t\twidth: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-9-small {\n\t\t\t\t\tmargin-left: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-10-small {\n\t\t\t\t\twidth: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-10-small {\n\t\t\t\t\tmargin-left: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-11-small {\n\t\t\t\t\twidth: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-11-small {\n\t\t\t\t\tmargin-left: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-12-small {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-12-small {\n\t\t\t\t\tmargin-left: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-0 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: 0em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\n\t\t\t\t\t\tmargin-top: 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-25 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.375em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.375em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-50 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.75em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.75em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -1.5em;\n\t\t\t\t}\n\n\t\t\t\t\t.row > * {\n\t\t\t\t\t\tpadding: 0 0 0 1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 1.5em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-150 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -2.25em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150 > * {\n\t\t\t\t\t\tpadding: 0 0 0 2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 2.25em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-200 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -3em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200 > * {\n\t\t\t\t\t\tpadding: 0 0 0 3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 3em;\n\t\t\t\t\t\t}\n\n\t\t}@media screen and (max-width: 480px) {\n\n\t\t\t.row {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\talign-items: stretch;\n\t\t\t}\n\n\t\t\t\t.row > * {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-uniform > * > :last-child {\n\t\t\t\t\tmargin-bottom: 0;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-left {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-center {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-right {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-top {\n\t\t\t\t\talign-items: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-middle {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.row.aln-bottom {\n\t\t\t\t\talign-items: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.row > .imp-xsmall {\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-1-xsmall {\n\t\t\t\t\twidth: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-1-xsmall {\n\t\t\t\t\tmargin-left: 8.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-2-xsmall {\n\t\t\t\t\twidth: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-2-xsmall {\n\t\t\t\t\tmargin-left: 16.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-3-xsmall {\n\t\t\t\t\twidth: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-3-xsmall {\n\t\t\t\t\tmargin-left: 25%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-4-xsmall {\n\t\t\t\t\twidth: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-4-xsmall {\n\t\t\t\t\tmargin-left: 33.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-5-xsmall {\n\t\t\t\t\twidth: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-5-xsmall {\n\t\t\t\t\tmargin-left: 41.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-6-xsmall {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-6-xsmall {\n\t\t\t\t\tmargin-left: 50%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-7-xsmall {\n\t\t\t\t\twidth: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-7-xsmall {\n\t\t\t\t\tmargin-left: 58.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-8-xsmall {\n\t\t\t\t\twidth: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-8-xsmall {\n\t\t\t\t\tmargin-left: 66.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-9-xsmall {\n\t\t\t\t\twidth: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-9-xsmall {\n\t\t\t\t\tmargin-left: 75%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-10-xsmall {\n\t\t\t\t\twidth: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-10-xsmall {\n\t\t\t\t\tmargin-left: 83.33333%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-11-xsmall {\n\t\t\t\t\twidth: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-11-xsmall {\n\t\t\t\t\tmargin-left: 91.66667%;\n\t\t\t\t}\n\n\t\t\t\t.row > .col-12-xsmall {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row > .off-12-xsmall {\n\t\t\t\t\tmargin-left: 100%;\n\t\t\t\t}\n\n\t\t\t\t.row.gtr-0 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: 0em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\n\t\t\t\t\t\tmargin-top: 0em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-25 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.375em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.375em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.375em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-50 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -0.75em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50 > * {\n\t\t\t\t\t\tpadding: 0 0 0 0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -0.75em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 0.75em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -1.5em;\n\t\t\t\t}\n\n\t\t\t\t\t.row > * {\n\t\t\t\t\t\tpadding: 0 0 0 1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -1.5em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 1.5em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-150 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -2.25em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150 > * {\n\t\t\t\t\t\tpadding: 0 0 0 2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -2.25em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 2.25em;\n\t\t\t\t\t\t}\n\n\t\t\t\t.row.gtr-200 {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tmargin-left: -3em;\n\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200 > * {\n\t\t\t\t\t\tpadding: 0 0 0 3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\n\t\t\t\t\t\tmargin-top: -3em;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\n\t\t\t\t\t\t\tpadding-top: 3em;\n\t\t\t\t\t\t}\n\n\t\t}/* Section/Article */section.special, article.special {\n\t\ttext-align: center;\n\t}header p {\n\t\tcolor: rgba(255, 255, 255, 0.5);\n\t\tposition: relative;\n\t\ttop: -0.25em;\n\t}header h3 + p {\n\t\tfont-size: 1.1em;\n\t}header h4 + p,\n\theader h5 + p,\n\theader h6 + p {\n\t\tfont-size: 0.9em;\n\t}header.major {\n\t\tmargin: 0 0 3.5em 0;\n\t}header.major h2, header.major h3, header.major h4, header.major h5, header.major h6 {\n\t\t\tborder-bottom: solid 2px #fff;\n\t\t\tdisplay: inline-block;\n\t\t\tpadding-bottom: 1em;\n\t\t\tposition: relative;\n\t\t}header.major h2:after, header.major h3:after, header.major h4:after, header.major h5:after, header.major h6:after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 1px;\n\t\t\t}header.major p {\n\t\t\tcolor: #fff;\n\t\t\ttop: 0;\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\theader.major {\n\t\t\t\tmargin: 0 0 2em 0;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 980px) {\n\n\t\theader br {\n\t\t\tdisplay: none;\n\t\t}\n\n\t}/* Form */form {\n\t\tmargin: 0 0 2em 0;\n\t}label {\n\t\tcolor: #fff;\n\t\tdisplay: block;\n\t\tfont-size: 0.9em;\n\t\tfont-weight: 600;\n\t\tmargin: 0 0 1em 0;\n\t}input[type=\"text\"],\n\tinput[type=\"password\"],\n\tinput[type=\"email\"],\n\tselect,\n\ttextarea {\n\t\t-moz-appearance: none;\n\t\t-webkit-appearance: none;\n\t\t-ms-appearance: none;\n\t\tappearance: none;\n\t\tbackground-color: rgba(144, 144, 144, 0.25);\n\t\tborder-radius: 3px;\n\t\tborder: none;\n\t\tcolor: inherit;\n\t\tdisplay: block;\n\t\toutline: 0;\n\t\tpadding: 0 1em;\n\t\ttext-decoration: none;\n\t\twidth: 100%;\n\t}input[type=\"text\"]:invalid,\n\t\tinput[type=\"password\"]:invalid,\n\t\tinput[type=\"email\"]:invalid,\n\t\tselect:invalid,\n\t\ttextarea:invalid {\n\t\t\tbox-shadow: none;\n\t\t}input[type=\"text\"]:focus,\n\t\tinput[type=\"password\"]:focus,\n\t\tinput[type=\"email\"]:focus,\n\t\tselect:focus,\n\t\ttextarea:focus {\n\t\t\tbox-shadow: 0 0 0 2px #21b2a6;\n\t\t}select {\n\t\tbackground-size: 1.25em;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: calc(100% - 1em) center;\n\t\theight: 2.75em;\n\t\tpadding-right: 2.75em;\n\t\ttext-overflow: ellipsis;\n\t}select:focus::-ms-value {\n\t\t\tbackground-color: transparent;\n\t\t}select::-ms-expand {\n\t\t\tdisplay: none;\n\t\t}input[type=\"text\"],\n\tinput[type=\"password\"],\n\tinput[type=\"email\"],\n\tselect {\n\t\theight: 2.75em;\n\t}textarea {\n\t\tpadding: 0.75em 1em;\n\t}input[type=\"checkbox\"],\n\tinput[type=\"radio\"] {\n\t\t-moz-appearance: none;\n\t\t-webkit-appearance: none;\n\t\t-ms-appearance: none;\n\t\tappearance: none;\n\t\tdisplay: block;\n\t\tfloat: left;\n\t\tmargin-right: -2em;\n\t\topacity: 0;\n\t\twidth: 1em;\n\t\tz-index: -1;\n\t}input[type=\"checkbox\"] + label,\n\t\tinput[type=\"radio\"] + label {\n\t\t\ttext-decoration: none;\n\t\t\tcolor: #fff;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 1em;\n\t\t\tfont-weight: 400;\n\t\t\tpadding-left: 2.4em;\n\t\t\tpadding-right: 0.75em;\n\t\t\tposition: relative;\n\t\t}input[type=\"checkbox\"] + label:before,\n\t\t\tinput[type=\"radio\"] + label:before {\n\t\t\t\t-moz-osx-font-smoothing: grayscale;\n\t\t\t\t-webkit-font-smoothing: antialiased;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-style: normal;\n\t\t\t\tfont-variant: normal;\n\t\t\t\ttext-rendering: auto;\n\t\t\t\tline-height: 1;\n\t\t\t\ttext-transform: none !important;\n\t\t\t\tfont-family: 'Font Awesome 5 Free';\n\t\t\t\tfont-weight: 900;\n\t\t\t}input[type=\"checkbox\"] + label:before,\n\t\t\tinput[type=\"radio\"] + label:before {\n\t\t\t\tbackground: rgba(144, 144, 144, 0.25);\n\t\t\t\tborder-radius: 3px;\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 0.8em;\n\t\t\t\theight: 2.0625em;\n\t\t\t\tleft: 0;\n\t\t\t\tline-height: 2.0625em;\n\t\t\t\tposition: absolute;\n\t\t\t\ttext-align: center;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 2.0625em;\n\t\t\t}input[type=\"checkbox\"]:checked + label:before,\n\t\tinput[type=\"radio\"]:checked + label:before {\n\t\t\tbackground: #2e3842;\n\t\t\tcolor: #fff;\n\t\t\tcontent: '\\f00c';\n\t\t}input[type=\"checkbox\"]:focus + label:before,\n\t\tinput[type=\"radio\"]:focus + label:before {\n\t\t\tbox-shadow: 0 0 0 2px #21b2a6;\n\t\t}input[type=\"checkbox\"] + label:before {\n\t\tborder-radius: 3px;\n\t}input[type=\"radio\"] + label:before {\n\t\tborder-radius: 100%;\n\t}::-webkit-input-placeholder {\n\t\tcolor: rgba(255, 255, 255, 0.5) !important;\n\t\topacity: 1.0;\n\t}:-moz-placeholder {\n\t\tcolor: rgba(255, 255, 255, 0.5) !important;\n\t\topacity: 1.0;\n\t}::-moz-placeholder {\n\t\tcolor: rgba(255, 255, 255, 0.5) !important;\n\t\topacity: 1.0;\n\t}:-ms-input-placeholder {\n\t\tcolor: rgba(255, 255, 255, 0.5) !important;\n\t\topacity: 1.0;\n\t}/* Box */.box {\n\t\tborder-radius: 3px;\n\t\tborder: solid 2px #fff;\n\t\tmargin-bottom: 2em;\n\t\tpadding: 1.5em;\n\t}.box > :last-child,\n\t\t.box > :last-child > :last-child,\n\t\t.box > :last-child > :last-child > :last-child {\n\t\t\tmargin-bottom: 0;\n\t\t}.box.alt {\n\t\t\tborder: 0;\n\t\t\tborder-radius: 0;\n\t\t\tpadding: 0;\n\t\t}/* Icon */.icon {\n\t\ttext-decoration: none;\n\t\tborder-bottom: none;\n\t\tposition: relative;\n\t}.icon:before {\n\t\t\t-moz-osx-font-smoothing: grayscale;\n\t\t\t-webkit-font-smoothing: antialiased;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-style: normal;\n\t\t\tfont-variant: normal;\n\t\t\ttext-rendering: auto;\n\t\t\tline-height: 1;\n\t\t\ttext-transform: none !important;\n\t\t\tfont-family: 'Font Awesome 5 Free';\n\t\t\tfont-weight: 400;\n\t\t}.icon > .label {\n\t\t\tdisplay: none;\n\t\t}.icon:before {\n\t\t\tline-height: inherit;\n\t\t}.icon.solid:before {\n\t\t\tfont-weight: 900;\n\t\t}.icon.brands:before {\n\t\t\tfont-family: 'Font Awesome 5 Brands';\n\t\t}.icon.major {\n\t\t\ttransform: rotate(-45deg);\n\t\t\tborder-radius: 3px;\n\t\t\tborder: solid 2px #fff;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 1.35em;\n\t\t\theight: calc(3em + 2px);\n\t\t\tline-height: 3em;\n\t\t\ttext-align: center;\n\t\t\twidth: calc(3em + 2px);\n\t\t}.icon.major:before {\n\t\t\t\ttransform: rotate(45deg);\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 1.5em;\n\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t.icon.major {\n\t\t\t\t\tfont-size: 1em;\n\t\t\t\t}\n\n\t\t\t}.icon.style1 {\n\t\t\tcolor: #00ffcc;\n\t\t}.icon.style2 {\n\t\t\tcolor: #00f0ff;\n\t\t}.icon.style3 {\n\t\t\tcolor: #76ddff;\n\t\t}/* Image */.image {\n\t\tborder-radius: 3px;\n\t\tborder: 0;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t}.image img {\n\t\t\tborder-radius: 3px;\n\t\t\tdisplay: block;\n\t\t}.image.left {\n\t\t\tfloat: left;\n\t\t\tmargin: 0 2em 2em 0;\n\t\t\ttop: 0.25em;\n\t\t}.image.right {\n\t\t\tfloat: right;\n\t\t\tmargin: 0 0 2em 2em;\n\t\t\ttop: 0.25em;\n\t\t}.image.left, .image.right {\n\t\t\tmax-width: 40%;\n\t\t}.image.left img, .image.right img {\n\t\t\t\twidth: 100%;\n\t\t\t}.image.fit {\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 0 2em 0;\n\t\t\twidth: 100%;\n\t\t}.image.fit img {\n\t\t\t\twidth: 100%;\n\t\t\t}/* List */ol {\n\t\tlist-style: decimal;\n\t\tmargin: 0 0 2em 0;\n\t\tpadding-left: 1.25em;\n\t}ol li {\n\t\t\tpadding-left: 0.25em;\n\t\t}ul {\n\t\tlist-style: disc;\n\t\tmargin: 0 0 2em 0;\n\t\tpadding-left: 1em;\n\t}ul li {\n\t\t\tpadding-left: 0.5em;\n\t\t}ul.alt {\n\t\t\tlist-style: none;\n\t\t\tpadding-left: 0;\n\t\t}ul.alt li {\n\t\t\t\tborder-top: solid 1px #fff;\n\t\t\t\tpadding: 0.5em 0;\n\t\t\t}ul.alt li:first-child {\n\t\t\t\t\tborder-top: 0;\n\t\t\t\t\tpadding-top: 0;\n\t\t\t\t}dl {\n\t\tmargin: 0 0 2em 0;\n\t}/* Actions */ul.actions {\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: flex;\n\t\tcursor: default;\n\t\tlist-style: none;\n\t\tmargin-left: -1em;\n\t\tpadding-left: 0;\n\t}ul.actions li {\n\t\t\tpadding: 0 0 0 1em;\n\t\t\tvertical-align: middle;\n\t\t}ul.actions.special {\n\t\t\t-moz-justify-content: center;\n\t\t\t-ms-justify-content: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 100%;\n\t\t\tmargin-left: 0;\n\t\t}ul.actions.special li:first-child {\n\t\t\t\tpadding-left: 0;\n\t\t\t}ul.actions.stacked {\n\t\t\t-moz-flex-direction: column;\n\t\t\tflex-direction: column;\n\t\t\tmargin-left: 0;\n\t\t}ul.actions.stacked li {\n\t\t\t\tpadding: 1em 0 0 0;\n\t\t\t}ul.actions.stacked li:first-child {\n\t\t\t\t\tpadding-top: 0;\n\t\t\t\t}ul.actions.fit {\n\t\t\twidth: calc(100% + 1em);\n\t\t}ul.actions.fit li {\n\t\t\t\t-moz-flex-grow: 1;\n\t\t\t\t-ms-flex-grow: 1;\n\t\t\t\tflex-grow: 1;\n\t\t\t\t-ms-flex-shrink: 1;\n\t\t\t\tflex-shrink: 1;\n\t\t\t\twidth: 100%;\n\t\t\t}ul.actions.fit li > * {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}ul.actions.fit.stacked {\n\t\t\t\twidth: 100%;\n\t\t\t}@media screen and (max-width: 480px) {\n\n\t\t\tul.actions:not(.fixed) {\n\t\t\t\t-moz-flex-direction: column;\n\t\t\t\tflex-direction: column;\n\t\t\t\tmargin-left: 0;\n\t\t\t\twidth: 100% !important;\n\t\t\t}\n\n\t\t\t\tul.actions:not(.fixed) li {\n\t\t\t\t\t-moz-flex-grow: 1;\n\t\t\t\t\t-ms-flex-grow: 1;\n\t\t\t\t\tflex-grow: 1;\n\t\t\t\t\t-ms-flex-shrink: 1;\n\t\t\t\t\tflex-shrink: 1;\n\t\t\t\t\tpadding: 1em 0 0 0;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t\tul.actions:not(.fixed) li > * {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t}\n\n\t\t\t\t\tul.actions:not(.fixed) li:first-child {\n\t\t\t\t\t\tpadding-top: 0;\n\t\t\t\t\t}\n\n\t\t\t\t\tul.actions:not(.fixed) li input[type=\"submit\"],\n\t\t\t\t\tul.actions:not(.fixed) li input[type=\"reset\"],\n\t\t\t\t\tul.actions:not(.fixed) li input[type=\"button\"],\n\t\t\t\t\tul.actions:not(.fixed) li button,\n\t\t\t\t\tul.actions:not(.fixed) li .button {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t}\n\n\t\t\t\t\t\tul.actions:not(.fixed) li input[type=\"submit\"].icon:before,\n\t\t\t\t\t\tul.actions:not(.fixed) li input[type=\"reset\"].icon:before,\n\t\t\t\t\t\tul.actions:not(.fixed) li input[type=\"button\"].icon:before,\n\t\t\t\t\t\tul.actions:not(.fixed) li button.icon:before,\n\t\t\t\t\t\tul.actions:not(.fixed) li .button.icon:before {\n\t\t\t\t\t\t\tmargin-left: -0.5em;\n\t\t\t\t\t\t}\n\n\t\t}/* Icons */ul.icons {\n\t\tcursor: default;\n\t\tlist-style: none;\n\t\tpadding-left: 0;\n\t}ul.icons li {\n\t\t\tdisplay: inline-block;\n\t\t\tpadding: 0 1em 0 0;\n\t\t}ul.icons li:last-child {\n\t\t\t\tpadding-right: 0 !important;\n\t\t\t}ul.icons.major {\n\t\t\tpadding: 1em 0;\n\t\t}ul.icons.major li {\n\t\t\t\tpadding-right: 3.5em;\n\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t\tul.icons.major li {\n\t\t\t\t\t\tpadding: 0 1em !important;\n\t\t\t\t\t}\n\n\t\t\t\t}/* Table */.table-wrapper {\n\t\t-webkit-overflow-scrolling: touch;\n\t\toverflow-x: auto;\n\t}table {\n\t\tmargin: 0 0 2em 0;\n\t\twidth: 100%;\n\t}table tbody tr {\n\t\t\tborder: solid 1px #fff;\n\t\t\tborder-left: 0;\n\t\t\tborder-right: 0;\n\t\t}table tbody tr:nth-child(2n + 1) {\n\t\t\t\tbackground-color: rgba(144, 144, 144, 0.25);\n\t\t\t}table td {\n\t\t\tpadding: 0.75em 0.75em;\n\t\t}table th {\n\t\t\tcolor: #fff;\n\t\t\tfont-size: 0.9em;\n\t\t\tfont-weight: 600;\n\t\t\tpadding: 0 0.75em 0.75em 0.75em;\n\t\t\ttext-align: left;\n\t\t}table thead {\n\t\t\tborder-bottom: solid 2px #fff;\n\t\t}table tfoot {\n\t\t\tborder-top: solid 2px #fff;\n\t\t}table.alt {\n\t\t\tborder-collapse: separate;\n\t\t}table.alt tbody tr td {\n\t\t\t\tborder: solid 1px #fff;\n\t\t\t\tborder-left-width: 0;\n\t\t\t\tborder-top-width: 0;\n\t\t\t}table.alt tbody tr td:first-child {\n\t\t\t\t\tborder-left-width: 1px;\n\t\t\t\t}table.alt tbody tr:first-child td {\n\t\t\t\tborder-top-width: 1px;\n\t\t\t}table.alt thead {\n\t\t\t\tborder-bottom: 0;\n\t\t\t}table.alt tfoot {\n\t\t\t\tborder-top: 0;\n\t\t\t}/* Button */input[type=\"submit\"],\n\tinput[type=\"reset\"],\n\tinput[type=\"button\"],\n\tbutton,\n\t.button {\n\t\t-moz-appearance: none;\n\t\t-webkit-appearance: none;\n\t\t-ms-appearance: none;\n\t\tappearance: none;\n\t\ttransition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n\t\tbackground-color: transparent;\n\t\tborder-radius: 3px;\n\t\tborder: 0;\n\t\tbox-shadow: inset 0 0 0 2px #fff;\n\t\tcolor: #fff;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t\tfont-size: 0.8em;\n\t\tfont-weight: 600;\n\t\theight: 3.125em;\n\t\tletter-spacing: 0.225em;\n\t\tline-height: 3.125em;\n\t\tmax-width: 30em;\n\t\tpadding: 0 2.75em;\n\t\ttext-align: center;\n\t\ttext-decoration: none;\n\t\ttext-transform: uppercase;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}input[type=\"submit\"]:hover,\n\t\tinput[type=\"reset\"]:hover,\n\t\tinput[type=\"button\"]:hover,\n\t\tbutton:hover,\n\t\t.button:hover {\n\t\t\tbackground-color: rgba(144, 144, 144, 0.25);\n\t\t}input[type=\"submit\"]:active,\n\t\tinput[type=\"reset\"]:active,\n\t\tinput[type=\"button\"]:active,\n\t\tbutton:active,\n\t\t.button:active {\n\t\t\tbackground-color: rgba(144, 144, 144, 0.5);\n\t\t}input[type=\"submit\"].icon:before,\n\t\tinput[type=\"reset\"].icon:before,\n\t\tinput[type=\"button\"].icon:before,\n\t\tbutton.icon:before,\n\t\t.button.icon:before {\n\t\t\tmargin-right: 0.5em;\n\t\t}input[type=\"submit\"].fit,\n\t\tinput[type=\"reset\"].fit,\n\t\tinput[type=\"button\"].fit,\n\t\tbutton.fit,\n\t\t.button.fit {\n\t\t\twidth: 100%;\n\t\t}input[type=\"submit\"].small,\n\t\tinput[type=\"reset\"].small,\n\t\tinput[type=\"button\"].small,\n\t\tbutton.small,\n\t\t.button.small {\n\t\t\tfont-size: 0.8em;\n\t\t}input[type=\"submit\"].large,\n\t\tinput[type=\"reset\"].large,\n\t\tinput[type=\"button\"].large,\n\t\tbutton.large,\n\t\t.button.large {\n\t\t\tfont-size: 1.35em;\n\t\t}input[type=\"submit\"].primary,\n\t\tinput[type=\"reset\"].primary,\n\t\tinput[type=\"button\"].primary,\n\t\tbutton.primary,\n\t\t.button.primary {\n\t\t\tbackground-color: #ed4933;\n\t\t\tbox-shadow: none !important;\n\t\t\tcolor: #ffffff !important;\n\t\t}input[type=\"submit\"].primary:hover,\n\t\t\tinput[type=\"reset\"].primary:hover,\n\t\t\tinput[type=\"button\"].primary:hover,\n\t\t\tbutton.primary:hover,\n\t\t\t.button.primary:hover {\n\t\t\t\tbackground-color: #ef5e4a !important;\n\t\t\t}input[type=\"submit\"].primary:active,\n\t\t\tinput[type=\"reset\"].primary:active,\n\t\t\tinput[type=\"button\"].primary:active,\n\t\t\tbutton.primary:active,\n\t\t\t.button.primary:active {\n\t\t\t\tbackground-color: #eb341c !important;\n\t\t\t}input[type=\"submit\"].disabled, input[type=\"submit\"]:disabled,\n\t\tinput[type=\"reset\"].disabled,\n\t\tinput[type=\"reset\"]:disabled,\n\t\tinput[type=\"button\"].disabled,\n\t\tinput[type=\"button\"]:disabled,\n\t\tbutton.disabled,\n\t\tbutton:disabled,\n\t\t.button.disabled,\n\t\t.button:disabled {\n\t\t\tpointer-events: none;\n\t\t\topacity: 0.25;\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\tinput[type=\"submit\"],\n\t\t\tinput[type=\"reset\"],\n\t\t\tinput[type=\"button\"],\n\t\t\tbutton,\n\t\t\t.button {\n\t\t\t\theight: 3.75em;\n\t\t\t\tline-height: 3.75em;\n\t\t\t}\n\n\t\t}/* Features */.features {\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\t-moz-justify-content: center;\n\t\t-ms-justify-content: center;\n\t\tjustify-content: center;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t}.features li {\n\t\t\tpadding: 4em 4em 2em 6em ;\n\t\t\tdisplay: block;\n\t\t\tposition: relative;\n\t\t\ttext-align: left;\n\t\t\twidth: 50%;\n\t\t}.features li:nth-child(1) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.035);\n\t\t\t}.features li:nth-child(2) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.07);\n\t\t\t}.features li:nth-child(3) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.105);\n\t\t\t}.features li:nth-child(4) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.14);\n\t\t\t}.features li:nth-child(5) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.175);\n\t\t\t}.features li:nth-child(6) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.21);\n\t\t\t}.features li:nth-child(7) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.245);\n\t\t\t}.features li:nth-child(8) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.28);\n\t\t\t}.features li:nth-child(9) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.315);\n\t\t\t}.features li:nth-child(10) {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.35);\n\t\t\t}.features li:before {\n\t\t\t\tdisplay: block;\n\t\t\t\tcolor: #00ffcc;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 1.75em;\n\t\t\t\ttop: 2.75em;\n\t\t\t\tfont-size: 1.5em;\n\t\t\t}.features li:nth-child(1) {\n\t\t\t\tborder-top-left-radius: 3px;\n\t\t\t}.features li:nth-child(2) {\n\t\t\t\tborder-top-right-radius: 3px;\n\t\t\t}.features li:nth-last-child(1) {\n\t\t\t\tborder-bottom-right-radius: 3px;\n\t\t\t}.features li:nth-last-child(2) {\n\t\t\t\tborder-bottom-left-radius: 3px;\n\t\t\t}@media screen and (max-width: 980px) {\n\n\t\t\t\t.features li {\n\t\t\t\t\tpadding: 3em 2em 1em 2em ;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t\t.features li:before {\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\tmargin: 0 0 1em 0;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t}\n\n\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t.features li {\n\t\t\t\t\tpadding: 3em 0 1em 0 ;\n\t\t\t\t\tbackground-color: transparent !important;\n\t\t\t\t\tborder-top: solid 2px #fff;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t\t.features li:first-child {\n\t\t\t\t\t\tborder-top: 0;\n\t\t\t\t\t}\n\n\t\t\t}/* Spotlight */.spotlight {\n\t\t-moz-align-items: center;\n\t\t-ms-align-items: center;\n\t\talign-items: center;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: flex;\n\t}.spotlight .image {\n\t\t\t-moz-order: 1;\n\t\t\t-ms-order: 1;\n\t\t\torder: 1;\n\t\t\tborder-radius: 0;\n\t\t\twidth: 40%;\n\t\t}.spotlight .image img {\n\t\t\t\tborder-radius: 0;\n\t\t\t\twidth: 100%;\n\t\t\t}.spotlight .content {\n\t\t\tpadding: 2em 4em 0.1em 4em ;\n\t\t\t-moz-order: 2;\n\t\t\t-ms-order: 2;\n\t\t\torder: 2;\n\t\t\tmax-width: 48em;\n\t\t\twidth: 60%;\n\t\t}.spotlight:nth-child(2n) {\n\t\t\t-moz-flex-direction: row-reverse;\n\t\t\tflex-direction: row-reverse;\n\t\t}.spotlight:nth-child(1) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.075);\n\t\t}.spotlight:nth-child(2) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.15);\n\t\t}.spotlight:nth-child(3) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.225);\n\t\t}.spotlight:nth-child(4) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.3);\n\t\t}.spotlight:nth-child(5) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.375);\n\t\t}.spotlight:nth-child(6) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.45);\n\t\t}.spotlight:nth-child(7) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.525);\n\t\t}.spotlight:nth-child(8) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.6);\n\t\t}.spotlight:nth-child(9) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.675);\n\t\t}.spotlight:nth-child(10) {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.75);\n\t\t}@media screen and (max-width: 1280px) {\n\n\t\t\t.spotlight .image {\n\t\t\t\twidth: 45%;\n\t\t\t}\n\n\t\t\t.spotlight .content {\n\t\t\t\twidth: 55%;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 980px) {\n\n\t\t\t.spotlight {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t\t.spotlight br {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.spotlight .image {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t.spotlight .content {\n\t\t\t\t\tpadding: 4em 3em 2em 3em ;\n\t\t\t\t\tmax-width: none;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t.spotlight .content {\n\t\t\t\tpadding: 3em 2em 1em 2em ;\n\t\t\t}\n\n\t\t}/* Wrapper */.wrapper {\n\t\tpadding: 6em 0 4em 0 ;\n\t}.wrapper > .inner {\n\t\t\twidth: 60em;\n\t\t\tmargin: 0 auto;\n\t\t}@media screen and (max-width: 1280px) {\n\n\t\t\t\t.wrapper > .inner {\n\t\t\t\t\twidth: 90%;\n\t\t\t\t}\n\n\t\t\t}@media screen and (max-width: 980px) {\n\n\t\t\t\t.wrapper > .inner {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t}.wrapper.alt {\n\t\t\tpadding: 0;\n\t\t}.wrapper.style1 {\n\t\t\tbackground-color: #21b2a6;\n\t\t\tcolor: #c8ece9;\n\t\t}.wrapper.style1 strong, .wrapper.style1 b {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style1 h2, .wrapper.style1 h3, .wrapper.style1 h4, .wrapper.style1 h5, .wrapper.style1 h6 {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style1 hr {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 blockquote {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 code {\n\t\t\t\tbackground: rgba(255, 255, 255, 0.075);\n\t\t\t}.wrapper.style1 header p {\n\t\t\t\tcolor: #a6e0db;\n\t\t\t}.wrapper.style1 header.major h2, .wrapper.style1 header.major h3, .wrapper.style1 header.major h4, .wrapper.style1 header.major h5, .wrapper.style1 header.major h6 {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 header.major p {\n\t\t\t\tcolor: #c8ece9;\n\t\t\t}.wrapper.style1 label {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style1 input[type=\"text\"],\n\t\t\t.wrapper.style1 input[type=\"password\"],\n\t\t\t.wrapper.style1 input[type=\"email\"],\n\t\t\t.wrapper.style1 select,\n\t\t\t.wrapper.style1 textarea {\n\t\t\t\tbackground-color: rgba(255, 255, 255, 0.075);\n\t\t\t}.wrapper.style1 select {\n\t\t\t\tbackground-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(0, 0, 0, 0.125)' /%3E%3C/svg%3E\");\n\t\t\t}.wrapper.style1 select option {\n\t\t\t\t\tcolor: #ffffff;\n\t\t\t\t\tbackground: #21b2a6;\n\t\t\t\t}.wrapper.style1 input[type=\"checkbox\"] + label,\n\t\t\t.wrapper.style1 input[type=\"radio\"] + label {\n\t\t\t\tcolor: #c8ece9;\n\t\t\t}.wrapper.style1 input[type=\"checkbox\"] + label:before,\n\t\t\t\t.wrapper.style1 input[type=\"radio\"] + label:before {\n\t\t\t\t\tbackground: rgba(255, 255, 255, 0.075);\n\t\t\t\t}.wrapper.style1 input[type=\"checkbox\"]:checked + label:before,\n\t\t\t.wrapper.style1 input[type=\"radio\"]:checked + label:before {\n\t\t\t\tbackground: #ffffff;\n\t\t\t\tcolor: #21b2a6;\n\t\t\t}.wrapper.style1 ::-webkit-input-placeholder {\n\t\t\t\tcolor: #a6e0db !important;\n\t\t\t}.wrapper.style1 :-moz-placeholder {\n\t\t\t\tcolor: #a6e0db !important;\n\t\t\t}.wrapper.style1 ::-moz-placeholder {\n\t\t\t\tcolor: #a6e0db !important;\n\t\t\t}.wrapper.style1 :-ms-input-placeholder {\n\t\t\t\tcolor: #a6e0db !important;\n\t\t\t}.wrapper.style1 .formerize-placeholder {\n\t\t\t\tcolor: #a6e0db !important;\n\t\t\t}.wrapper.style1 .icon.major {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 ul.alt li {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 table tbody tr {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 table tbody tr:nth-child(2n + 1) {\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.075);\n\t\t\t\t}.wrapper.style1 table th {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style1 table thead {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 table tfoot {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 table.alt tbody tr td {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style1 input[type=\"submit\"],\n\t\t\t.wrapper.style1 input[type=\"reset\"],\n\t\t\t.wrapper.style1 input[type=\"button\"],\n\t\t\t.wrapper.style1 button,\n\t\t\t.wrapper.style1 .button {\n\t\t\t\tbox-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.125);\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style1 input[type=\"submit\"]:hover,\n\t\t\t\t.wrapper.style1 input[type=\"reset\"]:hover,\n\t\t\t\t.wrapper.style1 input[type=\"button\"]:hover,\n\t\t\t\t.wrapper.style1 button:hover,\n\t\t\t\t.wrapper.style1 .button:hover {\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.075);\n\t\t\t\t}.wrapper.style1 input[type=\"submit\"]:active,\n\t\t\t\t.wrapper.style1 input[type=\"reset\"]:active,\n\t\t\t\t.wrapper.style1 input[type=\"button\"]:active,\n\t\t\t\t.wrapper.style1 button:active,\n\t\t\t\t.wrapper.style1 .button:active {\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.2);\n\t\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t.wrapper.style1 .features li {\n\t\t\t\t\tborder-top-color: rgba(0, 0, 0, 0.125);\n\t\t\t\t}\n\n\t\t\t}.wrapper.style2 {\n\t\t\tbackground-color: #2e3842;\n\t\t}.wrapper.style3 {\n\t\t\tbackground-color: #505393;\n\t\t\tcolor: #d3d4e4;\n\t\t}.wrapper.style3 strong, .wrapper.style3 b {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style3 h2, .wrapper.style3 h3, .wrapper.style3 h4, .wrapper.style3 h5, .wrapper.style3 h6 {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style3 hr {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 blockquote {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 code {\n\t\t\t\tbackground: rgba(255, 255, 255, 0.075);\n\t\t\t}.wrapper.style3 header p {\n\t\t\t\tcolor: #b9bad4;\n\t\t\t}.wrapper.style3 header.major h2, .wrapper.style3 header.major h3, .wrapper.style3 header.major h4, .wrapper.style3 header.major h5, .wrapper.style3 header.major h6 {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 header.major p {\n\t\t\t\tcolor: #d3d4e4;\n\t\t\t}.wrapper.style3 label {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style3 input[type=\"text\"],\n\t\t\t.wrapper.style3 input[type=\"password\"],\n\t\t\t.wrapper.style3 input[type=\"email\"],\n\t\t\t.wrapper.style3 select,\n\t\t\t.wrapper.style3 textarea {\n\t\t\t\tbackground-color: rgba(255, 255, 255, 0.075);\n\t\t\t}.wrapper.style3 select {\n\t\t\t\tbackground-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(0, 0, 0, 0.125)' /%3E%3C/svg%3E\");\n\t\t\t}.wrapper.style3 select option {\n\t\t\t\t\tcolor: #ffffff;\n\t\t\t\t\tbackground: #505393;\n\t\t\t\t}.wrapper.style3 input[type=\"checkbox\"] + label,\n\t\t\t.wrapper.style3 input[type=\"radio\"] + label {\n\t\t\t\tcolor: #d3d4e4;\n\t\t\t}.wrapper.style3 input[type=\"checkbox\"] + label:before,\n\t\t\t\t.wrapper.style3 input[type=\"radio\"] + label:before {\n\t\t\t\t\tbackground: rgba(255, 255, 255, 0.075);\n\t\t\t\t}.wrapper.style3 input[type=\"checkbox\"]:checked + label:before,\n\t\t\t.wrapper.style3 input[type=\"radio\"]:checked + label:before {\n\t\t\t\tbackground: #ffffff;\n\t\t\t\tcolor: #505393;\n\t\t\t}.wrapper.style3 ::-webkit-input-placeholder {\n\t\t\t\tcolor: #b9bad4 !important;\n\t\t\t}.wrapper.style3 :-moz-placeholder {\n\t\t\t\tcolor: #b9bad4 !important;\n\t\t\t}.wrapper.style3 ::-moz-placeholder {\n\t\t\t\tcolor: #b9bad4 !important;\n\t\t\t}.wrapper.style3 :-ms-input-placeholder {\n\t\t\t\tcolor: #b9bad4 !important;\n\t\t\t}.wrapper.style3 .formerize-placeholder {\n\t\t\t\tcolor: #b9bad4 !important;\n\t\t\t}.wrapper.style3 .icon.major {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 ul.alt li {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 table tbody tr {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 table tbody tr:nth-child(2n + 1) {\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.075);\n\t\t\t\t}.wrapper.style3 table th {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style3 table thead {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 table tfoot {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 table.alt tbody tr td {\n\t\t\t\tborder-color: rgba(0, 0, 0, 0.125);\n\t\t\t}.wrapper.style3 input[type=\"submit\"],\n\t\t\t.wrapper.style3 input[type=\"reset\"],\n\t\t\t.wrapper.style3 input[type=\"button\"],\n\t\t\t.wrapper.style3 button,\n\t\t\t.wrapper.style3 .button {\n\t\t\t\tbox-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.125);\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style3 input[type=\"submit\"]:hover,\n\t\t\t\t.wrapper.style3 input[type=\"reset\"]:hover,\n\t\t\t\t.wrapper.style3 input[type=\"button\"]:hover,\n\t\t\t\t.wrapper.style3 button:hover,\n\t\t\t\t.wrapper.style3 .button:hover {\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.075);\n\t\t\t\t}.wrapper.style3 input[type=\"submit\"]:active,\n\t\t\t\t.wrapper.style3 input[type=\"reset\"]:active,\n\t\t\t\t.wrapper.style3 input[type=\"button\"]:active,\n\t\t\t\t.wrapper.style3 button:active,\n\t\t\t\t.wrapper.style3 .button:active {\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.2);\n\t\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t.wrapper.style3 .features li {\n\t\t\t\t\tborder-top-color: rgba(0, 0, 0, 0.125);\n\t\t\t\t}\n\n\t\t\t}.wrapper.style4 {\n\t\t\tbackground-color: transparent;\n\t\t}.wrapper.style5 {\n\t\t\tbackground-color: #ffffff;\n\t\t\tcolor: #4E4852;\n\t\t}.wrapper.style5 strong, .wrapper.style5 b {\n\t\t\t\tcolor: #2E3842;\n\t\t\t}.wrapper.style5 h2, .wrapper.style5 h3, .wrapper.style5 h4, .wrapper.style5 h5, .wrapper.style5 h6 {\n\t\t\t\tcolor: #2E3842;\n\t\t\t}.wrapper.style5 hr {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 blockquote {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 code {\n\t\t\t\tbackground: rgba(0, 0, 0, 0.0375);\n\t\t\t}.wrapper.style5 header p {\n\t\t\t\tcolor: #8E8892;\n\t\t\t}.wrapper.style5 header.major h2, .wrapper.style5 header.major h3, .wrapper.style5 header.major h4, .wrapper.style5 header.major h5, .wrapper.style5 header.major h6 {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 header.major p {\n\t\t\t\tcolor: #4E4852;\n\t\t\t}.wrapper.style5 label {\n\t\t\t\tcolor: #2E3842;\n\t\t\t}.wrapper.style5 input[type=\"text\"],\n\t\t\t.wrapper.style5 input[type=\"password\"],\n\t\t\t.wrapper.style5 input[type=\"email\"],\n\t\t\t.wrapper.style5 select,\n\t\t\t.wrapper.style5 textarea {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.0375);\n\t\t\t}.wrapper.style5 select {\n\t\t\t\tbackground-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23dfdfdf' /%3E%3C/svg%3E\");\n\t\t\t}.wrapper.style5 select option {\n\t\t\t\t\tcolor: #2E3842;\n\t\t\t\t\tbackground: #ffffff;\n\t\t\t\t}.wrapper.style5 input[type=\"checkbox\"] + label,\n\t\t\t.wrapper.style5 input[type=\"radio\"] + label {\n\t\t\t\tcolor: #4E4852;\n\t\t\t}.wrapper.style5 input[type=\"checkbox\"] + label:before,\n\t\t\t\t.wrapper.style5 input[type=\"radio\"] + label:before {\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.0375);\n\t\t\t\t}.wrapper.style5 input[type=\"checkbox\"]:checked + label:before,\n\t\t\t.wrapper.style5 input[type=\"radio\"]:checked + label:before {\n\t\t\t\tbackground: #2E3842;\n\t\t\t\tcolor: #ffffff;\n\t\t\t}.wrapper.style5 ::-webkit-input-placeholder {\n\t\t\t\tcolor: #8E8892 !important;\n\t\t\t}.wrapper.style5 :-moz-placeholder {\n\t\t\t\tcolor: #8E8892 !important;\n\t\t\t}.wrapper.style5 ::-moz-placeholder {\n\t\t\t\tcolor: #8E8892 !important;\n\t\t\t}.wrapper.style5 :-ms-input-placeholder {\n\t\t\t\tcolor: #8E8892 !important;\n\t\t\t}.wrapper.style5 .formerize-placeholder {\n\t\t\t\tcolor: #8E8892 !important;\n\t\t\t}.wrapper.style5 .icon.major {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 ul.alt li {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 table tbody tr {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 table tbody tr:nth-child(2n + 1) {\n\t\t\t\t\tbackground-color: rgba(0, 0, 0, 0.0375);\n\t\t\t\t}.wrapper.style5 table th {\n\t\t\t\tcolor: #2E3842;\n\t\t\t}.wrapper.style5 table thead {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 table tfoot {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 table.alt tbody tr td {\n\t\t\t\tborder-color: #dfdfdf;\n\t\t\t}.wrapper.style5 input[type=\"submit\"],\n\t\t\t.wrapper.style5 input[type=\"reset\"],\n\t\t\t.wrapper.style5 input[type=\"button\"],\n\t\t\t.wrapper.style5 button,\n\t\t\t.wrapper.style5 .button {\n\t\t\t\tbox-shadow: inset 0 0 0 2px #dfdfdf;\n\t\t\t\tcolor: #2E3842;\n\t\t\t}.wrapper.style5 input[type=\"submit\"]:hover,\n\t\t\t\t.wrapper.style5 input[type=\"reset\"]:hover,\n\t\t\t\t.wrapper.style5 input[type=\"button\"]:hover,\n\t\t\t\t.wrapper.style5 button:hover,\n\t\t\t\t.wrapper.style5 .button:hover {\n\t\t\t\t\tbackground-color: rgba(0, 0, 0, 0.0375);\n\t\t\t\t}.wrapper.style5 input[type=\"submit\"]:active,\n\t\t\t\t.wrapper.style5 input[type=\"reset\"]:active,\n\t\t\t\t.wrapper.style5 input[type=\"button\"]:active,\n\t\t\t\t.wrapper.style5 button:active,\n\t\t\t\t.wrapper.style5 .button:active {\n\t\t\t\t\tbackground-color: rgba(0, 0, 0, 0.1);\n\t\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t.wrapper.style5 .features li {\n\t\t\t\t\tborder-top-color: #dfdfdf;\n\t\t\t\t}\n\n\t\t\t}@media screen and (max-width: 980px) {\n\n\t\t\t.wrapper {\n\t\t\t\tpadding: 4em 3em 2em 3em ;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t.wrapper {\n\t\t\t\tpadding: 3em 2em 1em 2em ;\n\t\t\t}\n\n\t\t}/* Page Wrapper + Menu */#page-wrapper {\n\t\ttransition: opacity 0.5s ease;\n\t\topacity: 1;\n\t\tpadding-top: 3em;\n\t}#page-wrapper:before {\n\t\t\tbackground: rgba(0, 0, 0, 0);\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tdisplay: none;\n\t\t\theight: 100%;\n\t\t\tleft: 0;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\tz-index: 10001;\n\t\t}#menu {\n\t\ttransform: translateX(20em);\n\t\ttransition: transform 0.5s ease;\n\t\t-webkit-overflow-scrolling: touch;\n\t\tbackground: #21b2a6;\n\t\tcolor: #ffffff;\n\t\theight: 100%;\n\t\tmax-width: 80%;\n\t\toverflow-y: auto;\n\t\tpadding: 3em 2em;\n\t\tposition: fixed;\n\t\tright: 0;\n\t\ttop: 0;\n\t\twidth: 20em;\n\t\tz-index: 10002;\n\t}#menu ul {\n\t\t\tlist-style: none;\n\t\t\tpadding: 0;\n\t\t}#menu ul > li {\n\t\t\t\tborder-top: solid 1px rgba(0, 0, 0, 0.125);\n\t\t\t\tmargin: 0.5em 0 0 0;\n\t\t\t\tpadding: 0.5em 0 0 0;\n\t\t\t}#menu ul > li:first-child {\n\t\t\t\t\tborder-top: 0 !important;\n\t\t\t\t\tmargin-top: 0 !important;\n\t\t\t\t\tpadding-top: 0 !important;\n\t\t\t\t}#menu ul > li > a {\n\t\t\t\t\tborder: 0;\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tfont-size: 0.8em;\n\t\t\t\t\tletter-spacing: 0.225em;\n\t\t\t\t\toutline: 0;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t\t\t#menu ul > li > a {\n\t\t\t\t\t\t\tline-height: 3em;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}#menu .close {\n\t\t\tbackground-image: url('close.svg');\n\t\t\tbackground-position: 4.85em 1em;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tborder: 0;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: block;\n\t\t\theight: 3em;\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\ttop: 0;\n\t\t\tvertical-align: middle;\n\t\t\twidth: 7em;\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t#menu {\n\t\t\t\tpadding: 3em 1.5em;\n\t\t\t}\n\n\t\t}body.is-menu-visible #page-wrapper {\n\t\topacity: 0.35;\n\t}body.is-menu-visible #page-wrapper:before {\n\t\t\tdisplay: block;\n\t\t}body.is-menu-visible #menu {\n\t\ttransform: translateX(0);\n\t}/* Header */#header {\n\t\ttransition: background-color 0.2s ease;\n\t\tbackground: #2e3842;\n\t\theight: 3em;\n\t\tleft: 0;\n\t\tline-height: 3em;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\twidth: 100%;\n\t\tz-index: 10000;\n\t}#header h1 {\n\t\t\ttransition: opacity 0.2s ease;\n\t\t\theight: inherit;\n\t\t\tleft: 1.25em;\n\t\t\tline-height: inherit;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t}#header h1 a {\n\t\t\t\tborder: 0;\n\t\t\t\tdisplay: block;\n\t\t\t\theight: inherit;\n\t\t\t\tline-height: inherit;\n\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t\t#header h1 a {\n\t\t\t\t\t\tfont-size: 0.8em;\n\t\t\t\t\t}\n\n\t\t\t\t}#header nav {\n\t\t\theight: inherit;\n\t\t\tline-height: inherit;\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\ttop: 0;\n\t\t}#header nav > ul {\n\t\t\t\tlist-style: none;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}#header nav > ul > li {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t}#header nav > ul > li > a {\n\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tfont-size: 0.8em;\n\t\t\t\t\t\tletter-spacing: 0.225em;\n\t\t\t\t\t\tpadding: 0 1.5em;\n\t\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\t}#header nav > ul > li > a.menuToggle {\n\t\t\t\t\t\t\toutline: 0;\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t}#header nav > ul > li > a.menuToggle:after {\n\t\t\t\t\t\t\t\tbackground-image: url('bars.svg');\n\t\t\t\t\t\t\t\tbackground-position: right center;\n\t\t\t\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\t\t\t\tcontent: '';\n\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t\theight: 3.75em;\n\t\t\t\t\t\t\t\tvertical-align: top;\n\t\t\t\t\t\t\t\twidth: 2em;\n\t\t\t\t\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t\t\t\t\t#header nav > ul > li > a.menuToggle {\n\t\t\t\t\t\t\t\t\tpadding: 0 1.5em;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t#header nav > ul > li > a.menuToggle span {\n\t\t\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t\t\t\t\t#header nav > ul > li > a {\n\t\t\t\t\t\t\t\tpadding: 0 0 0 1.5em;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t}#header nav > ul > li:first-child {\n\t\t\t\t\t\tmargin-left: 0;\n\t\t\t\t\t}#header.alt {\n\t\t\tbackground: transparent;\n\t\t}#header.alt h1 {\n\t\t\t\tpointer-events: none;\n\t\t\t\topacity: 0;\n\t\t\t}/* Banner */#banner {\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: flex;\n\t\t-moz-flex-direction: column;\n\t\tflex-direction: column;\n\t\t-moz-justify-content: center;\n\t\t-ms-justify-content: center;\n\t\tjustify-content: center;\n\t\tcursor: default;\n\t\theight: 100vh;\n\t\tmin-height: 35em;\n\t\toverflow: hidden;\n\t\tposition: relative;\n\t\ttext-align: center;\n\t}#banner h2 {\n\t\t\ttransform: scale(1);\n\t\t\ttransition: transform 0.5s ease, opacity 0.5s ease;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 1.75em;\n\t\t\topacity: 1;\n\t\t\tpadding: 0.35em 1em;\n\t\t\tposition: relative;\n\t\t\tz-index: 1;\n\t\t}#banner h2:before, #banner h2:after {\n\t\t\t\ttransition: width 0.85s ease;\n\t\t\t\ttransition-delay: 0.25s;\n\t\t\t\tbackground: #fff;\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 2px;\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 100%;\n\t\t\t}#banner h2:before {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}#banner h2:after {\n\t\t\t\tbottom: 0;\n\t\t\t\tright: 0;\n\t\t\t}#banner p {\n\t\t\tletter-spacing: 0.225em;\n\t\t\ttext-transform: uppercase;\n\t\t}#banner p a {\n\t\t\t\tcolor: inherit;\n\t\t\t}#banner .more {\n\t\t\ttransition: transform 0.75s ease, opacity 0.75s ease;\n\t\t\ttransition-delay: 3.5s;\n\t\t\ttransform: translateY(0);\n\t\t\tborder: none;\n\t\t\tbottom: 0;\n\t\t\tcolor: inherit;\n\t\t\tfont-size: 0.8em;\n\t\t\theight: 8.5em;\n\t\t\tleft: 50%;\n\t\t\tletter-spacing: 0.225em;\n\t\t\tmargin-left: -8.5em;\n\t\t\topacity: 1;\n\t\t\toutline: 0;\n\t\t\tpadding-left: 0.225em;\n\t\t\tposition: absolute;\n\t\t\ttext-align: center;\n\t\t\ttext-transform: uppercase;\n\t\t\twidth: 16em;\n\t\t\tz-index: 1;\n\t\t}#banner .more:after {\n\t\t\t\tbackground-image: url('arrow.svg');\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: contain;\n\t\t\t\tbottom: 4em;\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 1.5em;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin: 0 0 0 -0.75em;\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 1.5em;\n\t\t\t}#banner:after {\n\t\t\tpointer-events: none;\n\t\t\ttransition: opacity 3s ease-in-out;\n\t\t\ttransition-delay: 1.25s;\n\t\t\tcontent: '';\n\t\t\tbackground: #2e3842;\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\topacity: 0;\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t#banner {\n\t\t\t\tpadding: 7em 3em 5em 3em ;\n\t\t\t\theight: auto;\n\t\t\t\tmin-height: 0;\n\t\t\t}\n\n\t\t\t\t#banner h2 {\n\t\t\t\t\tfont-size: 1.25em;\n\t\t\t\t}\n\n\t\t\t\t#banner br {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t#banner .more {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t}body.is-preload #banner h2 {\n\t\ttransform: scale(0.95);\n\t\topacity: 0;\n\t}body.is-preload #banner h2:before, body.is-preload #banner h2:after {\n\t\t\twidth: 0;\n\t\t}body.is-preload #banner .more {\n\t\ttransform: translateY(8.5em);\n\t\topacity: 0;\n\t}body.is-preload #banner:after {\n\t\topacity: 1;\n\t}/* CTA */#cta .inner {\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: flex;\n\t\tmax-width: 45em;\n\t}#cta .inner header {\n\t\t\t-moz-order: 1;\n\t\t\t-ms-order: 1;\n\t\t\torder: 1;\n\t\t\tpadding-right: 3em;\n\t\t\twidth: 70%;\n\t\t}#cta .inner header p {\n\t\t\t\tcolor: inherit;\n\t\t\t}#cta .inner .actions {\n\t\t\t-moz-order: 2;\n\t\t\t-ms-order: 2;\n\t\t\torder: 2;\n\t\t\twidth: 30%;\n\t\t}@media screen and (max-width: 980px) {\n\n\t\t\t#cta .inner {\n\t\t\t\tdisplay: block;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t\t#cta .inner header {\n\t\t\t\t\tpadding-right: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t#cta .inner .actions {\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\tmargin-right: auto;\n\t\t\t\t\tmax-width: 20em;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t#cta .inner .actions {\n\t\t\t\tmax-width: none;\n\t\t\t}\n\n\t\t}/* Main */#main > header {\n\t\tpadding: 12em 0 10em 0 ;\n\t\tbackground-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('banner.jpg');\n\t\tbackground-attachment: fixed;\n\t\tbackground-position: center center;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t\ttext-align: center;\n\t}#main > header h2 {\n\t\t\tfont-size: 1.75em;\n\t\t\tmargin: 0 0 0.5em 0;\n\t\t}#main > header p {\n\t\t\tcolor: inherit;\n\t\t\tletter-spacing: 0.225em;\n\t\t\ttext-transform: uppercase;\n\t\t\ttop: 0;\n\t\t}#main > header p a {\n\t\t\t\tcolor: inherit;\n\t\t\t}@media screen and (max-width: 1680px) {\n\n\t\t\t#main > header {\n\t\t\t\tpadding: 10em 0 8em 0 ;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 1280px) {\n\n\t\t\t#main > header {\n\t\t\t\tpadding: 8em 3em 6em 3em ;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 980px) {\n\n\t\t\t#main > header {\n\t\t\t\tpadding: 10em 3em 8em 3em ;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t#main > header {\n\t\t\t\tpadding: 5em 3em 3em 3em ;\n\t\t\t}\n\n\t\t\t\t#main > header h2 {\n\t\t\t\t\tfont-size: 1.25em;\n\t\t\t\t\tmargin: 0 0 1em 0;\n\t\t\t\t}\n\n\t\t}body.is-mobile #main > header {\n\t\tbackground-attachment: scroll;\n\t}/* Footer */#footer {\n\t\tpadding: 6em 0 4em 0 ;\n\t\tbackground-color: #1d242a;\n\t\ttext-align: center;\n\t}#footer .icons {\n\t\t\tfont-size: 1.25em;\n\t\t}#footer .icons a {\n\t\t\t\tcolor: rgba(255, 255, 255, 0.5);\n\t\t\t}#footer .icons a:hover {\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t}#footer .copyright {\n\t\t\tcolor: rgba(255, 255, 255, 0.5);\n\t\t\tfont-size: 0.8em;\n\t\t\tletter-spacing: 0.225em;\n\t\t\tlist-style: none;\n\t\t\tpadding: 0;\n\t\t\ttext-transform: uppercase;\n\t\t}#footer .copyright li {\n\t\t\t\tborder-left: solid 1px rgba(255, 255, 255, 0.5);\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tline-height: 1em;\n\t\t\t\tmargin-left: 1em;\n\t\t\t\tpadding-left: 1em;\n\t\t\t}#footer .copyright li:first-child {\n\t\t\t\t\tborder-left: 0;\n\t\t\t\t\tmargin-left: 0;\n\t\t\t\t\tpadding-left: 0;\n\t\t\t\t}#footer .copyright li a {\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t}#footer .copyright li a:hover {\n\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t}@media screen and (max-width: 480px) {\n\n\t\t\t\t\t#footer .copyright li {\n\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tline-height: 1.65em;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tpadding: 0.5em 0;\n\t\t\t\t\t}\n\n\t\t\t\t}@media screen and (max-width: 980px) {\n\n\t\t\t#footer {\n\t\t\t\tpadding: 4em 3em 2em 3em ;\n\t\t\t}\n\n\t\t}@media screen and (max-width: 736px) {\n\n\t\t\t#footer {\n\t\t\t\tpadding: 3em 2em 1em 2em ;\n\t\t\t}\n\n\t\t}/* Landing */body.landing #page-wrapper {\n\t\tbackground-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('banner.jpg');\n\t\tbackground-attachment: fixed;\n\t\tbackground-position: center center;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t\tpadding-top: 0;\n\t}body.landing #footer {\n\t\tbackground-color: rgba(29, 36, 42, 0.9);\n\t}body.is-mobile.landing #page-wrapper {\n\t\tbackground: none;\n\t}body.is-mobile.landing #banner,\n\tbody.is-mobile.landing .wrapper.style4 {\n\t\tbackground-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('banner.jpg');\n\t\tbackground-position: center center;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t}body.is-mobile.landing #footer {\n\t\tbackground-color: #1d242a;\n\t}body.is-preload #banner h2 {\n\t\ttransform: none;\n\t\topacity: 1;\n\t}body.is-preload #banner h2:before, body.is-preload #banner h2:after {\n\t\t\twidth: 100%;\n\t\t}body.is-preload #banner .more {\n\t\ttransform: none;\n\t\topacity: 1;\n\t}body.is-preload #banner:after {\n\t\topacity: 0;\n\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNyYy9hc3NldHMvaG9tZS9jc3MvZm9udGF3ZXNvbWUtYWxsLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDBHQUEwRyxDQ0QxRzs7O0VBR0UsQ0FDRix3QkFBd0IsaUNBQWlDLENBQUMsa0NBQWtDLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLE9BQU8sbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsT0FBTyxlQUFlLENBQUMsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxRQUFRLGNBQWMsQ0FBQyxPQUFPLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxPQUFPLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxVQUFVLGlCQUFpQixDQUFDLE9BQU8sU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLGNBQWMsVUFBVSxDQUFDLGVBQWUsV0FBVyxDQUFDLHlGQUF5RixpQkFBaUIsQ0FBQyw4RkFBOEYsZ0JBQWdCLENBQUMsU0FBUyw0Q0FBbUMsQ0FBbkMsb0NBQW9DLENBQUMsVUFBVSw4Q0FBcUMsQ0FBckMsc0NBQXNDLENBQUMsMkJBQW1CLEdBQUcsc0JBQXNCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxDQUF4RSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLENBQUMsY0FBYyxxRUFBcUUsQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLHFFQUFxRSxDQUFDLHdCQUF3QixDQUFDLGVBQWUscUVBQXFFLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLCtFQUErRSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixvQkFBb0IsQ0FBQyxxRUFBcUUsK0VBQStFLENBQUMsbURBQW1ELG1CQUFtQixDQUFDLG9JQUFvSSxtQkFBVSxDQUFWLFdBQVcsQ0FBQyxVQUFVLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLDBCQUEwQixNQUFNLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGFBQWEsbUJBQW1CLENBQUMsYUFBYSxhQUFhLENBQUMsWUFBWSxVQUFVLENBQUMsaUJBQWlCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMscUNBQXFDLGVBQWUsQ0FBQyxjQUFjLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQywrQ0FBK0MsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsNkJBQTZCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGlDQUFpQyxlQUFlLENBQUMsaUNBQWlDLGVBQWUsQ0FBQyxrQ0FBa0MsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsNkJBQTZCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUNBQXVDLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsY0FBYyxlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsOEJBQThCLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLGVBQWUsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxrQ0FBa0MsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsNkJBQTZCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGVBQWUsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGVBQWUsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsNkJBQTZCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsOEJBQThCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsOEJBQThCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsK0JBQStCLGVBQWUsQ0FBQyxrQ0FBa0MsZUFBZSxDQUFDLGtDQUFrQyxlQUFlLENBQUMsK0JBQStCLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLG1DQUFtQyxlQUFlLENBQUMsa0NBQWtDLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLHFDQUFxQyxlQUFlLENBQUMsMENBQTBDLGVBQWUsQ0FBQyxrQ0FBa0MsZUFBZSxDQUFDLGlDQUFpQyxlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLGVBQWUsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsOEJBQThCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGVBQWUsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyw4QkFBOEIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLDZCQUE2QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLG9DQUFvQyxlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyw4QkFBOEIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLDZCQUE2QixlQUFlLENBQUMsa0NBQWtDLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLDZCQUE2QixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsY0FBYyxlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLDZCQUE2QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsOEJBQThCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyw4QkFBOEIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsNkJBQTZCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyw4QkFBOEIsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsK0JBQStCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLDZCQUE2QixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsY0FBYyxlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxnQ0FBZ0MsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsK0JBQStCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGdDQUFnQyxlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLGNBQWMsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGVBQWUsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsK0JBQStCLGVBQWUsQ0FBQyxtQ0FBbUMsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsY0FBYyxlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLGlDQUFpQyxlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGVBQWUsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLDZCQUE2QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsOEJBQThCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLGVBQWUsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxjQUFjLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDZCQUE2QixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsc0NBQXNDLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGNBQWMsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxjQUFjLGVBQWUsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLGdCQUFnQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLGlCQUFpQixlQUFlLENBQUMsU0FBUyxRQUFRLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxtREFBbUQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxXQUFXLG1DQUFtQyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLDRCQUFzQyxDQUFDLGtQQUFvUyxDQUFDLEtBQUssbUNBQW1DLENBQUMsV0FBVyxpQ0FBaUMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsNkJBQXVDLENBQUMsdVBBQXlTLENBQUMsS0FBSyxlQUFlLENBQUMsV0FBVyxpQ0FBaUMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsMkJBQXFDLENBQUMsNk9BQStSLENBQUMsY0FBYyxpQ0FBaUMsQ0FBQyxTQUFTLGVBQWUsQ0REcitzRDs7OztDQUlDLENBRUQ7Ozs7Ozs7Ozs7O0NBV0MsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0IsQ0FBQyxDQUUxQjs7Q0FFQyxjQUFjLENBQUMsQ0FFaEI7Q0FDQyxjQUFjO0FBQ2YsQ0FFQTtDQUNDLGdCQUFnQjtBQUNqQixDQUVBO0NBQ0MsWUFBWTtBQUNiLENBRUM7RUFDQyxXQUFXO0VBQ1gsYUFBYTtDQUNkLENBRUQ7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCLENBRUE7Q0FDQyw4QkFBOEI7QUFDL0IsQ0FFQTtDQUNDLDZCQUE2QjtDQUM3QixjQUFjO0FBQ2YsQ0FFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0FBQ1gsQ0FFQTtDQUNDLHFCQUFxQjtDQUNyQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtBQUNqQixDQUVBLFVBQVUsQ0FFVDtFQUNDLG1CQUFtQjtDQUNwQixDQUVBO0VBQ0Msc0JBQXNCO0NBQ3ZCLENBRUE7RUFDQyxtQkFBbUI7Q0FDcEIsQ0FFQTtFQUNDLG1CQUFtQjtDQUNwQixDQUVDO0dBRUMsa0NBQWtDO0dBRWxDLDBCQUEwQjtHQUkxQiwyQkFBMkI7RUFDNUIsQ0FFRDtFQUNDLFdBQVc7RUFDWCwrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCLENBRUM7O0dBRUM7SUFDQyxlQUFlO0dBQ2hCOztFQUVELENBRUE7O0dBRUM7SUFDQyxlQUFlO0dBQ2hCOztFQUVELENBRUE7O0dBRUM7SUFDQyxlQUFlO0lBQ2Ysd0JBQXdCO0dBQ3pCOztFQUVELENBRUQ7RUFJQywwREFBMEQ7RUFDMUQseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxxQkFBcUI7Q0FDdEIsQ0FFQztHQUNDLGdDQUFnQztFQUNqQyxDQUVEO0VBQ0MsV0FBVztFQUNYLGdCQUFnQjtDQUNqQixDQUVBO0VBQ0Msa0JBQWtCO0NBQ25CLENBRUE7RUFDQyxpQkFBaUI7Q0FDbEIsQ0FFQTtFQUNDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0NBQzFCLENBRUM7R0FDQyxjQUFjO0dBQ2QscUJBQXFCO0VBQ3RCLENBRUQ7RUFDQyxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCLENBRUM7O0dBRUM7SUFDQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztFQUVELENBRUQ7RUFDQyxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCLENBRUM7O0dBRUM7SUFDQyxjQUFjO0lBQ2QsbUJBQW1CO0dBQ3BCOztFQUVELENBRUQ7RUFDQyxjQUFjO0VBQ2Qsa0JBQWtCO0NBQ25CLENBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CLENBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CLENBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7Q0FDWCxDQUVBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0NBQ1osQ0FFQTtFQUNDLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsYUFBYTtDQUNkLENBRUM7R0FDQyxlQUFlO0VBQ2hCLENBRUQ7RUFDQywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0IsQ0FFQTtFQUNDLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtDQUN2QixDQUVBO0VBQ0MsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCLENBRUM7R0FDQyxjQUFjO0dBQ2QsbUJBQW1CO0dBQ25CLGtCQUFrQjtHQUNsQixnQkFBZ0I7RUFDakIsQ0FFRDtFQUNDLGdCQUFnQjtDQUNqQixDQUVBO0VBQ0Msa0JBQWtCO0NBQ25CLENBRUE7RUFDQyxpQkFBaUI7Q0FDbEIsQ0FFRCxRQUFRLENBRVA7RUFDQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7Q0FDckIsQ0FFQztHQUNDLHNCQUFzQjtFQUN2QixDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQywyQkFBMkI7RUFDNUIsQ0FFQTtHQUNDLHVCQUF1QjtFQUN4QixDQUVBO0dBQ0MseUJBQXlCO0VBQzFCLENBRUE7R0FDQyx1QkFBdUI7RUFDeEIsQ0FFQTtHQUNDLG1CQUFtQjtFQUNwQixDQUVBO0dBQ0MscUJBQXFCO0VBQ3RCLENBRUE7R0FDQyxTQUFTO0VBQ1YsQ0FFQTtHQUNDLGVBQWU7RUFDaEIsQ0FFQTtHQUNDLHFCQUFxQjtFQUN0QixDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxzQkFBc0I7RUFDdkIsQ0FFQTtHQUNDLFVBQVU7RUFDWCxDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxnQkFBZ0I7RUFDakIsQ0FFQTtHQUNDLHNCQUFzQjtFQUN2QixDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxzQkFBc0I7RUFDdkIsQ0FFQTtHQUNDLFVBQVU7RUFDWCxDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxnQkFBZ0I7RUFDakIsQ0FFQTtHQUNDLHNCQUFzQjtFQUN2QixDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxzQkFBc0I7RUFDdkIsQ0FFQTtHQUNDLFVBQVU7RUFDWCxDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxnQkFBZ0I7RUFDakIsQ0FFQTtHQUNDLHNCQUFzQjtFQUN2QixDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxzQkFBc0I7RUFDdkIsQ0FFQTtHQUNDLFdBQVc7RUFDWixDQUVBO0dBQ0MsaUJBQWlCO0VBQ2xCLENBRUE7R0FDQyxhQUFhO0dBQ2IsZ0JBQWdCO0VBQ2pCLENBRUM7SUFDQyxrQkFBa0I7R0FDbkIsQ0FFQTtJQUNDLGVBQWU7R0FDaEIsQ0FFQztLQUNDLGdCQUFnQjtJQUNqQixDQUVGO0dBQ0MsYUFBYTtHQUNiLHFCQUFxQjtFQUN0QixDQUVDO0lBQ0Msc0JBQXNCO0dBQ3ZCLENBRUE7SUFDQyxvQkFBb0I7R0FDckIsQ0FFQztLQUNDLG9CQUFvQjtJQUNyQixDQUVGO0dBQ0MsYUFBYTtHQUNiLG9CQUFvQjtFQUNyQixDQUVDO0lBQ0MscUJBQXFCO0dBQ3RCLENBRUE7SUFDQyxtQkFBbUI7R0FDcEIsQ0FFQztLQUNDLG1CQUFtQjtJQUNwQixDQUVGO0dBQ0MsYUFBYTtHQUNiLG1CQUFtQjtFQUNwQixDQUVDO0lBQ0Msb0JBQW9CO0dBQ3JCLENBRUE7SUFDQyxrQkFBa0I7R0FDbkIsQ0FFQztLQUNDLGtCQUFrQjtJQUNuQixDQUVGO0dBQ0MsYUFBYTtHQUNiLG9CQUFvQjtFQUNyQixDQUVDO0lBQ0MscUJBQXFCO0dBQ3RCLENBRUE7SUFDQyxtQkFBbUI7R0FDcEIsQ0FFQztLQUNDLG1CQUFtQjtJQUNwQixDQUVGO0dBQ0MsYUFBYTtHQUNiLGlCQUFpQjtFQUNsQixDQUVDO0lBQ0Msa0JBQWtCO0dBQ25CLENBRUE7SUFDQyxnQkFBZ0I7R0FDakIsQ0FFQztLQUNDLGdCQUFnQjtJQUNqQixDQUVGOztHQUVDO0lBQ0MsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0dBQ3JCOztJQUVDO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0MsMkJBQTJCO0lBQzVCOztJQUVBO0tBQ0MsdUJBQXVCO0lBQ3hCOztJQUVBO0tBQ0MseUJBQXlCO0lBQzFCOztJQUVBO0tBQ0MsdUJBQXVCO0lBQ3hCOztJQUVBO0tBQ0MsbUJBQW1CO0lBQ3BCOztJQUVBO0tBQ0MscUJBQXFCO0lBQ3RCOztJQUVBO0tBQ0MsU0FBUztJQUNWOztJQUVBO0tBQ0MsZUFBZTtJQUNoQjs7SUFFQTtLQUNDLHFCQUFxQjtJQUN0Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLFVBQVU7SUFDWDs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLFVBQVU7SUFDWDs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLFVBQVU7SUFDWDs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLFdBQVc7SUFDWjs7SUFFQTtLQUNDLGlCQUFpQjtJQUNsQjs7SUFFQTtLQUNDLGFBQWE7S0FDYixnQkFBZ0I7SUFDakI7O0tBRUM7TUFDQyxrQkFBa0I7S0FDbkI7O0tBRUE7TUFDQyxlQUFlO0tBQ2hCOztNQUVDO09BQ0MsZ0JBQWdCO01BQ2pCOztJQUVGO0tBQ0MsYUFBYTtLQUNiLHFCQUFxQjtJQUN0Qjs7S0FFQztNQUNDLHNCQUFzQjtLQUN2Qjs7S0FFQTtNQUNDLG9CQUFvQjtLQUNyQjs7TUFFQztPQUNDLG9CQUFvQjtNQUNyQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixvQkFBb0I7SUFDckI7O0tBRUM7TUFDQyxxQkFBcUI7S0FDdEI7O0tBRUE7TUFDQyxtQkFBbUI7S0FDcEI7O01BRUM7T0FDQyxtQkFBbUI7TUFDcEI7O0lBRUY7S0FDQyxhQUFhO0tBQ2IsbUJBQW1CO0lBQ3BCOztLQUVDO01BQ0Msb0JBQW9CO0tBQ3JCOztLQUVBO01BQ0Msa0JBQWtCO0tBQ25COztNQUVDO09BQ0Msa0JBQWtCO01BQ25COztJQUVGO0tBQ0MsYUFBYTtLQUNiLG9CQUFvQjtJQUNyQjs7S0FFQztNQUNDLHFCQUFxQjtLQUN0Qjs7S0FFQTtNQUNDLG1CQUFtQjtLQUNwQjs7TUFFQztPQUNDLG1CQUFtQjtNQUNwQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixpQkFBaUI7SUFDbEI7O0tBRUM7TUFDQyxrQkFBa0I7S0FDbkI7O0tBRUE7TUFDQyxnQkFBZ0I7S0FDakI7O01BRUM7T0FDQyxnQkFBZ0I7TUFDakI7O0VBRUosQ0FFQTs7R0FFQztJQUNDLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtHQUNyQjs7SUFFQztLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLDJCQUEyQjtJQUM1Qjs7SUFFQTtLQUNDLHVCQUF1QjtJQUN4Qjs7SUFFQTtLQUNDLHlCQUF5QjtJQUMxQjs7SUFFQTtLQUNDLHVCQUF1QjtJQUN4Qjs7SUFFQTtLQUNDLG1CQUFtQjtJQUNwQjs7SUFFQTtLQUNDLHFCQUFxQjtJQUN0Qjs7SUFFQTtLQUNDLFNBQVM7SUFDVjs7SUFFQTtLQUNDLGVBQWU7SUFDaEI7O0lBRUE7S0FDQyxxQkFBcUI7SUFDdEI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxVQUFVO0lBQ1g7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxVQUFVO0lBQ1g7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxVQUFVO0lBQ1g7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxXQUFXO0lBQ1o7O0lBRUE7S0FDQyxpQkFBaUI7SUFDbEI7O0lBRUE7S0FDQyxhQUFhO0tBQ2IsZ0JBQWdCO0lBQ2pCOztLQUVDO01BQ0Msa0JBQWtCO0tBQ25COztLQUVBO01BQ0MsZUFBZTtLQUNoQjs7TUFFQztPQUNDLGdCQUFnQjtNQUNqQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixxQkFBcUI7SUFDdEI7O0tBRUM7TUFDQyxzQkFBc0I7S0FDdkI7O0tBRUE7TUFDQyxvQkFBb0I7S0FDckI7O01BRUM7T0FDQyxvQkFBb0I7TUFDckI7O0lBRUY7S0FDQyxhQUFhO0tBQ2Isb0JBQW9CO0lBQ3JCOztLQUVDO01BQ0MscUJBQXFCO0tBQ3RCOztLQUVBO01BQ0MsbUJBQW1CO0tBQ3BCOztNQUVDO09BQ0MsbUJBQW1CO01BQ3BCOztJQUVGO0tBQ0MsYUFBYTtLQUNiLG1CQUFtQjtJQUNwQjs7S0FFQztNQUNDLG9CQUFvQjtLQUNyQjs7S0FFQTtNQUNDLGtCQUFrQjtLQUNuQjs7TUFFQztPQUNDLGtCQUFrQjtNQUNuQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixvQkFBb0I7SUFDckI7O0tBRUM7TUFDQyxxQkFBcUI7S0FDdEI7O0tBRUE7TUFDQyxtQkFBbUI7S0FDcEI7O01BRUM7T0FDQyxtQkFBbUI7TUFDcEI7O0lBRUY7S0FDQyxhQUFhO0tBQ2IsaUJBQWlCO0lBQ2xCOztLQUVDO01BQ0Msa0JBQWtCO0tBQ25COztLQUVBO01BQ0MsZ0JBQWdCO0tBQ2pCOztNQUVDO09BQ0MsZ0JBQWdCO01BQ2pCOztFQUVKLENBRUE7O0dBRUM7SUFDQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7R0FDckI7O0lBRUM7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQywyQkFBMkI7SUFDNUI7O0lBRUE7S0FDQyx1QkFBdUI7SUFDeEI7O0lBRUE7S0FDQyx5QkFBeUI7SUFDMUI7O0lBRUE7S0FDQyx1QkFBdUI7SUFDeEI7O0lBRUE7S0FDQyxtQkFBbUI7SUFDcEI7O0lBRUE7S0FDQyxxQkFBcUI7SUFDdEI7O0lBRUE7S0FDQyxTQUFTO0lBQ1Y7O0lBRUE7S0FDQyxlQUFlO0lBQ2hCOztJQUVBO0tBQ0MscUJBQXFCO0lBQ3RCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsVUFBVTtJQUNYOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsVUFBVTtJQUNYOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsVUFBVTtJQUNYOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsV0FBVztJQUNaOztJQUVBO0tBQ0MsaUJBQWlCO0lBQ2xCOztJQUVBO0tBQ0MsYUFBYTtLQUNiLGdCQUFnQjtJQUNqQjs7S0FFQztNQUNDLGtCQUFrQjtLQUNuQjs7S0FFQTtNQUNDLGVBQWU7S0FDaEI7O01BRUM7T0FDQyxnQkFBZ0I7TUFDakI7O0lBRUY7S0FDQyxhQUFhO0tBQ2IscUJBQXFCO0lBQ3RCOztLQUVDO01BQ0Msc0JBQXNCO0tBQ3ZCOztLQUVBO01BQ0Msb0JBQW9CO0tBQ3JCOztNQUVDO09BQ0Msb0JBQW9CO01BQ3JCOztJQUVGO0tBQ0MsYUFBYTtLQUNiLG9CQUFvQjtJQUNyQjs7S0FFQztNQUNDLHFCQUFxQjtLQUN0Qjs7S0FFQTtNQUNDLG1CQUFtQjtLQUNwQjs7TUFFQztPQUNDLG1CQUFtQjtNQUNwQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixtQkFBbUI7SUFDcEI7O0tBRUM7TUFDQyxvQkFBb0I7S0FDckI7O0tBRUE7TUFDQyxrQkFBa0I7S0FDbkI7O01BRUM7T0FDQyxrQkFBa0I7TUFDbkI7O0lBRUY7S0FDQyxhQUFhO0tBQ2Isb0JBQW9CO0lBQ3JCOztLQUVDO01BQ0MscUJBQXFCO0tBQ3RCOztLQUVBO01BQ0MsbUJBQW1CO0tBQ3BCOztNQUVDO09BQ0MsbUJBQW1CO01BQ3BCOztJQUVGO0tBQ0MsYUFBYTtLQUNiLGlCQUFpQjtJQUNsQjs7S0FFQztNQUNDLGtCQUFrQjtLQUNuQjs7S0FFQTtNQUNDLGdCQUFnQjtLQUNqQjs7TUFFQztPQUNDLGdCQUFnQjtNQUNqQjs7RUFFSixDQUVBOztHQUVDO0lBQ0MsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0dBQ3JCOztJQUVDO0tBQ0Msc0JBQXNCO0lBQ3ZCOztJQUVBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUVBO0tBQ0MsMkJBQTJCO0lBQzVCOztJQUVBO0tBQ0MsdUJBQXVCO0lBQ3hCOztJQUVBO0tBQ0MseUJBQXlCO0lBQzFCOztJQUVBO0tBQ0MsdUJBQXVCO0lBQ3hCOztJQUVBO0tBQ0MsbUJBQW1CO0lBQ3BCOztJQUVBO0tBQ0MscUJBQXFCO0lBQ3RCOztJQUVBO0tBQ0MsU0FBUztJQUNWOztJQUVBO0tBQ0MsZUFBZTtJQUNoQjs7SUFFQTtLQUNDLHFCQUFxQjtJQUN0Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLFVBQVU7SUFDWDs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLFVBQVU7SUFDWDs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLFVBQVU7SUFDWDs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLFdBQVc7SUFDWjs7SUFFQTtLQUNDLGlCQUFpQjtJQUNsQjs7SUFFQTtLQUNDLGFBQWE7S0FDYixnQkFBZ0I7SUFDakI7O0tBRUM7TUFDQyxrQkFBa0I7S0FDbkI7O0tBRUE7TUFDQyxlQUFlO0tBQ2hCOztNQUVDO09BQ0MsZ0JBQWdCO01BQ2pCOztJQUVGO0tBQ0MsYUFBYTtLQUNiLHFCQUFxQjtJQUN0Qjs7S0FFQztNQUNDLHNCQUFzQjtLQUN2Qjs7S0FFQTtNQUNDLG9CQUFvQjtLQUNyQjs7TUFFQztPQUNDLG9CQUFvQjtNQUNyQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixvQkFBb0I7SUFDckI7O0tBRUM7TUFDQyxxQkFBcUI7S0FDdEI7O0tBRUE7TUFDQyxtQkFBbUI7S0FDcEI7O01BRUM7T0FDQyxtQkFBbUI7TUFDcEI7O0lBRUY7S0FDQyxhQUFhO0tBQ2IsbUJBQW1CO0lBQ3BCOztLQUVDO01BQ0Msb0JBQW9CO0tBQ3JCOztLQUVBO01BQ0Msa0JBQWtCO0tBQ25COztNQUVDO09BQ0Msa0JBQWtCO01BQ25COztJQUVGO0tBQ0MsYUFBYTtLQUNiLG9CQUFvQjtJQUNyQjs7S0FFQztNQUNDLHFCQUFxQjtLQUN0Qjs7S0FFQTtNQUNDLG1CQUFtQjtLQUNwQjs7TUFFQztPQUNDLG1CQUFtQjtNQUNwQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixpQkFBaUI7SUFDbEI7O0tBRUM7TUFDQyxrQkFBa0I7S0FDbkI7O0tBRUE7TUFDQyxnQkFBZ0I7S0FDakI7O01BRUM7T0FDQyxnQkFBZ0I7TUFDakI7O0VBRUosQ0FFQTs7R0FFQztJQUNDLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtHQUNyQjs7SUFFQztLQUNDLHNCQUFzQjtJQUN2Qjs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDLDJCQUEyQjtJQUM1Qjs7SUFFQTtLQUNDLHVCQUF1QjtJQUN4Qjs7SUFFQTtLQUNDLHlCQUF5QjtJQUMxQjs7SUFFQTtLQUNDLHVCQUF1QjtJQUN4Qjs7SUFFQTtLQUNDLG1CQUFtQjtJQUNwQjs7SUFFQTtLQUNDLHFCQUFxQjtJQUN0Qjs7SUFFQTtLQUNDLFNBQVM7SUFDVjs7SUFFQTtLQUNDLGVBQWU7SUFDaEI7O0lBRUE7S0FDQyxxQkFBcUI7SUFDdEI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxVQUFVO0lBQ1g7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxVQUFVO0lBQ1g7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxVQUFVO0lBQ1g7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0lBRUE7S0FDQyxzQkFBc0I7SUFDdkI7O0lBRUE7S0FDQyxXQUFXO0lBQ1o7O0lBRUE7S0FDQyxpQkFBaUI7SUFDbEI7O0lBRUE7S0FDQyxhQUFhO0tBQ2IsZ0JBQWdCO0lBQ2pCOztLQUVDO01BQ0Msa0JBQWtCO0tBQ25COztLQUVBO01BQ0MsZUFBZTtLQUNoQjs7TUFFQztPQUNDLGdCQUFnQjtNQUNqQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixxQkFBcUI7SUFDdEI7O0tBRUM7TUFDQyxzQkFBc0I7S0FDdkI7O0tBRUE7TUFDQyxvQkFBb0I7S0FDckI7O01BRUM7T0FDQyxvQkFBb0I7TUFDckI7O0lBRUY7S0FDQyxhQUFhO0tBQ2Isb0JBQW9CO0lBQ3JCOztLQUVDO01BQ0MscUJBQXFCO0tBQ3RCOztLQUVBO01BQ0MsbUJBQW1CO0tBQ3BCOztNQUVDO09BQ0MsbUJBQW1CO01BQ3BCOztJQUVGO0tBQ0MsYUFBYTtLQUNiLG1CQUFtQjtJQUNwQjs7S0FFQztNQUNDLG9CQUFvQjtLQUNyQjs7S0FFQTtNQUNDLGtCQUFrQjtLQUNuQjs7TUFFQztPQUNDLGtCQUFrQjtNQUNuQjs7SUFFRjtLQUNDLGFBQWE7S0FDYixvQkFBb0I7SUFDckI7O0tBRUM7TUFDQyxxQkFBcUI7S0FDdEI7O0tBRUE7TUFDQyxtQkFBbUI7S0FDcEI7O01BRUM7T0FDQyxtQkFBbUI7TUFDcEI7O0lBRUY7S0FDQyxhQUFhO0tBQ2IsaUJBQWlCO0lBQ2xCOztLQUVDO01BQ0Msa0JBQWtCO0tBQ25COztLQUVBO01BQ0MsZ0JBQWdCO0tBQ2pCOztNQUVDO09BQ0MsZ0JBQWdCO01BQ2pCOztFQUVKLENBRUYsb0JBQW9CLENBRW5CO0VBQ0Msa0JBQWtCO0NBQ25CLENBRUE7RUFDQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7Q0FDYixDQUVBO0VBQ0MsZ0JBQWdCO0NBQ2pCLENBRUE7OztFQUdDLGdCQUFnQjtDQUNqQixDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCLENBRUM7R0FDQyw2QkFBNkI7R0FDN0IscUJBQXFCO0dBQ3JCLG1CQUFtQjtHQUNuQixrQkFBa0I7RUFDbkIsQ0FFQztJQUNDLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztHQUNaLENBRUQ7R0FDQyxXQUFXO0dBQ1gsTUFBTTtFQUNQLENBRUE7O0dBRUM7SUFDQyxpQkFBaUI7R0FDbEI7O0VBRUQsQ0FFRDs7RUFFQztHQUNDLGFBQWE7RUFDZDs7Q0FFRCxDQUVELFNBQVMsQ0FFUjtFQUNDLGlCQUFpQjtDQUNsQixDQUVBO0VBQ0MsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQixDQUVBOzs7OztFQUtDLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFdBQVc7Q0FDWixDQUVDOzs7OztHQUtDLGdCQUFnQjtFQUNqQixDQUVBOzs7OztHQUtDLDZCQUE2QjtFQUM5QixDQUVEO0VBQ0MsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qiw0Q0FBNEM7RUFDNUMsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix1QkFBdUI7Q0FDeEIsQ0FFQztHQUNDLDZCQUE2QjtFQUM5QixDQUVBO0dBQ0MsYUFBYTtFQUNkLENBRUQ7Ozs7RUFJQyxjQUFjO0NBQ2YsQ0FFQTtFQUNDLG1CQUFtQjtDQUNwQixDQUVBOztFQUVDLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWixDQUVDOztHQUVDLHFCQUFxQjtHQUNyQixXQUFXO0dBQ1gsZUFBZTtHQUNmLHFCQUFxQjtHQUNyQixjQUFjO0dBQ2QsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtHQUNuQixxQkFBcUI7R0FDckIsa0JBQWtCO0VBQ25CLENBRUM7O0lBRUMsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0dBQ2pCLENBRUE7O0lBRUMscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixlQUFlO0dBQ2hCLENBRUQ7O0dBRUMsbUJBQW1CO0dBQ25CLFdBQVc7R0FDWCxnQkFBZ0I7RUFDakIsQ0FFQTs7R0FFQyw2QkFBNkI7RUFDOUIsQ0FFRDtFQUNDLGtCQUFrQjtDQUNuQixDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCLENBRUE7RUFDQywwQ0FBMEM7RUFDMUMsWUFBWTtDQUNiLENBRUE7RUFDQywwQ0FBMEM7RUFDMUMsWUFBWTtDQUNiLENBRUE7RUFDQywwQ0FBMEM7RUFDMUMsWUFBWTtDQUNiLENBRUE7RUFDQywwQ0FBMEM7RUFDMUMsWUFBWTtDQUNiLENBRUQsUUFBUSxDQUVQO0VBQ0Msa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztDQUNmLENBRUM7OztHQUdDLGdCQUFnQjtFQUNqQixDQUVBO0dBQ0MsU0FBUztHQUNULGdCQUFnQjtHQUNoQixVQUFVO0VBQ1gsQ0FFRixTQUFTLENBRVI7RUFDQyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQixDQUVDO0dBQ0Msa0NBQWtDO0dBQ2xDLG1DQUFtQztHQUNuQyxxQkFBcUI7R0FDckIsa0JBQWtCO0dBQ2xCLG9CQUFvQjtHQUNwQixvQkFBb0I7R0FDcEIsY0FBYztHQUNkLCtCQUErQjtHQUMvQixrQ0FBa0M7R0FDbEMsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxhQUFhO0VBQ2QsQ0FFQTtHQUNDLG9CQUFvQjtFQUNyQixDQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCLENBRUE7R0FDQyxvQ0FBb0M7RUFDckMsQ0FFQTtHQUlDLHlCQUF5QjtHQUN6QixrQkFBa0I7R0FDbEIsc0JBQXNCO0dBQ3RCLHFCQUFxQjtHQUNyQixpQkFBaUI7R0FDakIsdUJBQXVCO0dBQ3ZCLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsc0JBQXNCO0VBQ3ZCLENBRUM7SUFJQyx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtHQUNqQixDQUVBOztJQUVDO0tBQ0MsY0FBYztJQUNmOztHQUVELENBRUQ7R0FDQyxjQUFjO0VBQ2YsQ0FFQTtHQUNDLGNBQWM7RUFDZixDQUVBO0dBQ0MsY0FBYztFQUNmLENBRUYsVUFBVSxDQUVUO0VBQ0Msa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsa0JBQWtCO0NBQ25CLENBRUM7R0FDQyxrQkFBa0I7R0FDbEIsY0FBYztFQUNmLENBRUE7R0FDQyxXQUFXO0dBQ1gsbUJBQW1CO0dBQ25CLFdBQVc7RUFDWixDQUVBO0dBQ0MsWUFBWTtHQUNaLG1CQUFtQjtHQUNuQixXQUFXO0VBQ1osQ0FFQTtHQUNDLGNBQWM7RUFDZixDQUVDO0lBQ0MsV0FBVztHQUNaLENBRUQ7R0FDQyxjQUFjO0dBQ2QsaUJBQWlCO0dBQ2pCLFdBQVc7RUFDWixDQUVDO0lBQ0MsV0FBVztHQUNaLENBRUgsU0FBUyxDQUVSO0VBQ0MsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckIsQ0FFQztHQUNDLG9CQUFvQjtFQUNyQixDQUVEO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEIsQ0FFQztHQUNDLG1CQUFtQjtFQUNwQixDQUVBO0dBQ0MsZ0JBQWdCO0dBQ2hCLGVBQWU7RUFDaEIsQ0FFQztJQUNDLDBCQUEwQjtJQUMxQixnQkFBZ0I7R0FDakIsQ0FFQztLQUNDLGFBQWE7S0FDYixjQUFjO0lBQ2YsQ0FFSDtFQUNDLGlCQUFpQjtDQUNsQixDQUVELFlBQVksQ0FFWDtFQUNDLGtCQUFrQjtFQUVsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEIsQ0FFQztHQUNDLGtCQUFrQjtHQUNsQixzQkFBc0I7RUFDdkIsQ0FFQTtHQUNDLDRCQUE0QjtHQUU1QiwyQkFBMkI7R0FDM0IsdUJBQXVCO0dBQ3ZCLFdBQVc7R0FDWCxjQUFjO0VBQ2YsQ0FFQztJQUNDLGVBQWU7R0FDaEIsQ0FFRDtHQUNDLDJCQUEyQjtHQUczQixzQkFBc0I7R0FDdEIsY0FBYztFQUNmLENBRUM7SUFDQyxrQkFBa0I7R0FDbkIsQ0FFQztLQUNDLGNBQWM7SUFDZixDQUVGO0dBQ0MsdUJBQXVCO0VBQ3hCLENBRUM7SUFDQyxpQkFBaUI7SUFFakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFHWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7R0FDWixDQUVDO0tBQ0MsV0FBVztJQUNaLENBRUQ7SUFDQyxXQUFXO0dBQ1osQ0FFRDs7R0FFQztJQUNDLDJCQUEyQjtJQUczQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHNCQUFzQjtHQUN2Qjs7SUFFQztLQUNDLGlCQUFpQjtLQUVqQixnQkFBZ0I7S0FDaEIsWUFBWTtLQUdaLGtCQUFrQjtLQUNsQixjQUFjO0tBQ2Qsa0JBQWtCO0tBQ2xCLGtCQUFrQjtLQUNsQixXQUFXO0lBQ1o7O0tBRUM7TUFDQyxXQUFXO0tBQ1o7O0tBRUE7TUFDQyxjQUFjO0tBQ2Y7O0tBRUE7Ozs7O01BS0MsV0FBVztLQUNaOztNQUVDOzs7OztPQUtDLG1CQUFtQjtNQUNwQjs7RUFFSixDQUVGLFVBQVUsQ0FFVDtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQixDQUVDO0dBQ0MscUJBQXFCO0dBQ3JCLGtCQUFrQjtFQUNuQixDQUVDO0lBQ0MsMkJBQTJCO0dBQzVCLENBRUQ7R0FDQyxjQUFjO0VBQ2YsQ0FFQztJQUNDLG9CQUFvQjtHQUNyQixDQUVDOztLQUVDO01BQ0MseUJBQXlCO0tBQzFCOztJQUVELENBRUosVUFBVSxDQUVUO0VBQ0MsaUNBQWlDO0VBQ2pDLGdCQUFnQjtDQUNqQixDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWixDQUVDO0dBQ0Msc0JBQXNCO0dBQ3RCLGNBQWM7R0FDZCxlQUFlO0VBQ2hCLENBRUM7SUFDQywyQ0FBMkM7R0FDNUMsQ0FFRDtHQUNDLHNCQUFzQjtFQUN2QixDQUVBO0dBQ0MsV0FBVztHQUNYLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsK0JBQStCO0dBQy9CLGdCQUFnQjtFQUNqQixDQUVBO0dBQ0MsNkJBQTZCO0VBQzlCLENBRUE7R0FDQywwQkFBMEI7RUFDM0IsQ0FFQTtHQUNDLHlCQUF5QjtFQUMxQixDQUVDO0lBQ0Msc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7R0FDcEIsQ0FFQztLQUNDLHNCQUFzQjtJQUN2QixDQUVEO0lBQ0MscUJBQXFCO0dBQ3RCLENBRUE7SUFDQyxnQkFBZ0I7R0FDakIsQ0FFQTtJQUNDLGFBQWE7R0FDZCxDQUVILFdBQVcsQ0FFVjs7Ozs7RUFLQyxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFJaEIscUVBQXFFO0VBQ3JFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7Q0FDeEIsQ0FFQzs7Ozs7R0FLQywyQ0FBMkM7RUFDNUMsQ0FFQTs7Ozs7R0FLQywwQ0FBMEM7RUFDM0MsQ0FFQTs7Ozs7R0FLQyxtQkFBbUI7RUFDcEIsQ0FFQTs7Ozs7R0FLQyxXQUFXO0VBQ1osQ0FFQTs7Ozs7R0FLQyxnQkFBZ0I7RUFDakIsQ0FFQTs7Ozs7R0FLQyxpQkFBaUI7RUFDbEIsQ0FFQTs7Ozs7R0FLQyx5QkFBeUI7R0FDekIsMkJBQTJCO0dBQzNCLHlCQUF5QjtFQUMxQixDQUVDOzs7OztJQUtDLG9DQUFvQztHQUNyQyxDQUVBOzs7OztJQUtDLG9DQUFvQztHQUNyQyxDQUVEOzs7Ozs7Ozs7R0FTQyxvQkFBb0I7R0FDcEIsYUFBYTtFQUNkLENBRUE7O0dBRUM7Ozs7O0lBS0MsY0FBYztJQUNkLG1CQUFtQjtHQUNwQjs7RUFFRCxDQUVGLGFBQWEsQ0FFWjtFQUNDLGtCQUFrQjtFQUVsQixpQkFBaUI7RUFDakIsYUFBYTtFQUliLGVBQWU7RUFDZiw0QkFBNEI7RUFFNUIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7Q0FDWixDQUVDO0dBQ0MseUJBQXlCO0dBQ3pCLGNBQWM7R0FDZCxrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLFVBQVU7RUFDWCxDQUVDO0lBQ0Msc0NBQXNDO0dBQ3ZDLENBRUE7SUFDQyxxQ0FBcUM7R0FDdEMsQ0FFQTtJQUNDLHNDQUFzQztHQUN2QyxDQUVBO0lBQ0MscUNBQXFDO0dBQ3RDLENBRUE7SUFDQyxzQ0FBc0M7R0FDdkMsQ0FFQTtJQUNDLHFDQUFxQztHQUN0QyxDQUVBO0lBQ0Msc0NBQXNDO0dBQ3ZDLENBRUE7SUFDQyxxQ0FBcUM7R0FDdEMsQ0FFQTtJQUNDLHNDQUFzQztHQUN2QyxDQUVBO0lBQ0MscUNBQXFDO0dBQ3RDLENBRUE7SUFDQyxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtHQUNqQixDQUVBO0lBQ0MsMkJBQTJCO0dBQzVCLENBRUE7SUFDQyw0QkFBNEI7R0FDN0IsQ0FFQTtJQUNDLCtCQUErQjtHQUNoQyxDQUVBO0lBQ0MsOEJBQThCO0dBQy9CLENBRUE7O0lBRUM7S0FDQyx5QkFBeUI7S0FDekIsa0JBQWtCO0lBQ25COztLQUVDO01BQ0MsT0FBTztNQUNQLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsTUFBTTtLQUNQOztHQUVGLENBRUE7O0lBRUM7S0FDQyxxQkFBcUI7S0FDckIsd0NBQXdDO0tBQ3hDLDBCQUEwQjtLQUMxQixXQUFXO0lBQ1o7O0tBRUM7TUFDQyxhQUFhO0tBQ2Q7O0dBRUYsQ0FFSCxjQUFjLENBRWI7RUFDQyx3QkFBd0I7RUFFeEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFFbEIsaUJBQWlCO0VBQ2pCLGFBQWE7Q0FDZCxDQUVDO0dBQ0MsYUFBYTtHQUViLFlBQVk7R0FDWixRQUFRO0dBQ1IsZ0JBQWdCO0dBQ2hCLFVBQVU7RUFDWCxDQUVDO0lBQ0MsZ0JBQWdCO0lBQ2hCLFdBQVc7R0FDWixDQUVEO0dBQ0MsMkJBQTJCO0dBQzNCLGFBQWE7R0FFYixZQUFZO0dBQ1osUUFBUTtHQUNSLGVBQWU7R0FDZixVQUFVO0VBQ1gsQ0FFQTtHQUNDLGdDQUFnQztHQUdoQywyQkFBMkI7RUFDNUIsQ0FFQTtHQUNDLHNDQUFzQztFQUN2QyxDQUVBO0dBQ0MscUNBQXFDO0VBQ3RDLENBRUE7R0FDQyxzQ0FBc0M7RUFDdkMsQ0FFQTtHQUNDLG9DQUFvQztFQUNyQyxDQUVBO0dBQ0Msc0NBQXNDO0VBQ3ZDLENBRUE7R0FDQyxxQ0FBcUM7RUFDdEMsQ0FFQTtHQUNDLHNDQUFzQztFQUN2QyxDQUVBO0dBQ0Msb0NBQW9DO0VBQ3JDLENBRUE7R0FDQyxzQ0FBc0M7RUFDdkMsQ0FFQTtHQUNDLHFDQUFxQztFQUN0QyxDQUVBOztHQUVDO0lBQ0MsVUFBVTtHQUNYOztHQUVBO0lBQ0MsVUFBVTtHQUNYOztFQUVELENBRUE7O0dBRUM7SUFDQyxjQUFjO0dBQ2Y7O0lBRUM7S0FDQyxhQUFhO0lBQ2Q7O0lBRUE7S0FDQyxXQUFXO0lBQ1o7O0lBRUE7S0FDQyx5QkFBeUI7S0FDekIsZUFBZTtLQUNmLGtCQUFrQjtLQUNsQixXQUFXO0lBQ1o7O0VBRUYsQ0FFQTs7R0FFQztJQUNDLHlCQUF5QjtHQUMxQjs7RUFFRCxDQUVGLFlBQVksQ0FFWDtFQUNDLHFCQUFxQjtDQUN0QixDQUVDO0dBQ0MsV0FBVztHQUNYLGNBQWM7RUFDZixDQUVDOztJQUVDO0tBQ0MsVUFBVTtJQUNYOztHQUVELENBRUE7O0lBRUM7S0FDQyxXQUFXO0lBQ1o7O0dBRUQsQ0FFRDtHQUNDLFVBQVU7RUFDWCxDQUVBO0dBQ0MseUJBQXlCO0dBQ3pCLGNBQWM7RUFDZixDQUVDO0lBQ0MsY0FBYztHQUNmLENBRUE7SUFDQyxjQUFjO0dBQ2YsQ0FFQTtJQUNDLGtDQUFrQztHQUNuQyxDQUVBO0lBQ0Msa0NBQWtDO0dBQ25DLENBRUE7SUFDQyxzQ0FBc0M7R0FDdkMsQ0FFQTtJQUNDLGNBQWM7R0FDZixDQUVBO0lBQ0Msa0NBQWtDO0dBQ25DLENBRUE7SUFDQyxjQUFjO0dBQ2YsQ0FFQTtJQUNDLGNBQWM7R0FDZixDQUVBOzs7OztJQUtDLDRDQUE0QztHQUM3QyxDQUVBO0lBQ0MsMGdCQUEwZ0I7R0FDM2dCLENBRUM7S0FDQyxjQUFjO0tBQ2QsbUJBQW1CO0lBQ3BCLENBRUQ7O0lBRUMsY0FBYztHQUNmLENBRUM7O0tBRUMsc0NBQXNDO0lBQ3ZDLENBRUQ7O0lBRUMsbUJBQW1CO0lBQ25CLGNBQWM7R0FDZixDQUVBO0lBQ0MseUJBQXlCO0dBQzFCLENBRUE7SUFDQyx5QkFBeUI7R0FDMUIsQ0FFQTtJQUNDLHlCQUF5QjtHQUMxQixDQUVBO0lBQ0MseUJBQXlCO0dBQzFCLENBRUE7SUFDQyx5QkFBeUI7R0FDMUIsQ0FFQTtJQUNDLGtDQUFrQztHQUNuQyxDQUVBO0lBQ0Msa0NBQWtDO0dBQ25DLENBRUE7SUFDQyxrQ0FBa0M7R0FDbkMsQ0FFQztLQUNDLDRDQUE0QztJQUM3QyxDQUVEO0lBQ0MsY0FBYztHQUNmLENBRUE7SUFDQyxrQ0FBa0M7R0FDbkMsQ0FFQTtJQUNDLGtDQUFrQztHQUNuQyxDQUVBO0lBQ0Msa0NBQWtDO0dBQ25DLENBRUE7Ozs7O0lBS0MsZ0RBQWdEO0lBQ2hELGNBQWM7R0FDZixDQUVDOzs7OztLQUtDLDRDQUE0QztJQUM3QyxDQUVBOzs7OztLQUtDLDBDQUEwQztJQUMzQyxDQUVEOztJQUVDO0tBQ0Msc0NBQXNDO0lBQ3ZDOztHQUVELENBRUQ7R0FDQyx5QkFBeUI7RUFDMUIsQ0FFQTtHQUNDLHlCQUF5QjtHQUN6QixjQUFjO0VBQ2YsQ0FFQztJQUNDLGNBQWM7R0FDZixDQUVBO0lBQ0MsY0FBYztHQUNmLENBRUE7SUFDQyxrQ0FBa0M7R0FDbkMsQ0FFQTtJQUNDLGtDQUFrQztHQUNuQyxDQUVBO0lBQ0Msc0NBQXNDO0dBQ3ZDLENBRUE7SUFDQyxjQUFjO0dBQ2YsQ0FFQTtJQUNDLGtDQUFrQztHQUNuQyxDQUVBO0lBQ0MsY0FBYztHQUNmLENBRUE7SUFDQyxjQUFjO0dBQ2YsQ0FFQTs7Ozs7SUFLQyw0Q0FBNEM7R0FDN0MsQ0FFQTtJQUNDLDBnQkFBMGdCO0dBQzNnQixDQUVDO0tBQ0MsY0FBYztLQUNkLG1CQUFtQjtJQUNwQixDQUVEOztJQUVDLGNBQWM7R0FDZixDQUVDOztLQUVDLHNDQUFzQztJQUN2QyxDQUVEOztJQUVDLG1CQUFtQjtJQUNuQixjQUFjO0dBQ2YsQ0FFQTtJQUNDLHlCQUF5QjtHQUMxQixDQUVBO0lBQ0MseUJBQXlCO0dBQzFCLENBRUE7SUFDQyx5QkFBeUI7R0FDMUIsQ0FFQTtJQUNDLHlCQUF5QjtHQUMxQixDQUVBO0lBQ0MseUJBQXlCO0dBQzFCLENBRUE7SUFDQyxrQ0FBa0M7R0FDbkMsQ0FFQTtJQUNDLGtDQUFrQztHQUNuQyxDQUVBO0lBQ0Msa0NBQWtDO0dBQ25DLENBRUM7S0FDQyw0Q0FBNEM7SUFDN0MsQ0FFRDtJQUNDLGNBQWM7R0FDZixDQUVBO0lBQ0Msa0NBQWtDO0dBQ25DLENBRUE7SUFDQyxrQ0FBa0M7R0FDbkMsQ0FFQTtJQUNDLGtDQUFrQztHQUNuQyxDQUVBOzs7OztJQUtDLGdEQUFnRDtJQUNoRCxjQUFjO0dBQ2YsQ0FFQzs7Ozs7S0FLQyw0Q0FBNEM7SUFDN0MsQ0FFQTs7Ozs7S0FLQywwQ0FBMEM7SUFDM0MsQ0FFRDs7SUFFQztLQUNDLHNDQUFzQztJQUN2Qzs7R0FFRCxDQUVEO0dBQ0MsNkJBQTZCO0VBQzlCLENBRUE7R0FDQyx5QkFBeUI7R0FDekIsY0FBYztFQUNmLENBRUM7SUFDQyxjQUFjO0dBQ2YsQ0FFQTtJQUNDLGNBQWM7R0FDZixDQUVBO0lBQ0MscUJBQXFCO0dBQ3RCLENBRUE7SUFDQyxxQkFBcUI7R0FDdEIsQ0FFQTtJQUNDLGlDQUFpQztHQUNsQyxDQUVBO0lBQ0MsY0FBYztHQUNmLENBRUE7SUFDQyxxQkFBcUI7R0FDdEIsQ0FFQTtJQUNDLGNBQWM7R0FDZixDQUVBO0lBQ0MsY0FBYztHQUNmLENBRUE7Ozs7O0lBS0MsdUNBQXVDO0dBQ3hDLENBRUE7SUFDQywrZkFBK2Y7R0FDaGdCLENBRUM7S0FDQyxjQUFjO0tBQ2QsbUJBQW1CO0lBQ3BCLENBRUQ7O0lBRUMsY0FBYztHQUNmLENBRUM7O0tBRUMsaUNBQWlDO0lBQ2xDLENBRUQ7O0lBRUMsbUJBQW1CO0lBQ25CLGNBQWM7R0FDZixDQUVBO0lBQ0MseUJBQXlCO0dBQzFCLENBRUE7SUFDQyx5QkFBeUI7R0FDMUIsQ0FFQTtJQUNDLHlCQUF5QjtHQUMxQixDQUVBO0lBQ0MseUJBQXlCO0dBQzFCLENBRUE7SUFDQyx5QkFBeUI7R0FDMUIsQ0FFQTtJQUNDLHFCQUFxQjtHQUN0QixDQUVBO0lBQ0MscUJBQXFCO0dBQ3RCLENBRUE7SUFDQyxxQkFBcUI7R0FDdEIsQ0FFQztLQUNDLHVDQUF1QztJQUN4QyxDQUVEO0lBQ0MsY0FBYztHQUNmLENBRUE7SUFDQyxxQkFBcUI7R0FDdEIsQ0FFQTtJQUNDLHFCQUFxQjtHQUN0QixDQUVBO0lBQ0MscUJBQXFCO0dBQ3RCLENBRUE7Ozs7O0lBS0MsbUNBQW1DO0lBQ25DLGNBQWM7R0FDZixDQUVDOzs7OztLQUtDLHVDQUF1QztJQUN4QyxDQUVBOzs7OztLQUtDLG9DQUFvQztJQUNyQyxDQUVEOztJQUVDO0tBQ0MseUJBQXlCO0lBQzFCOztHQUVELENBRUQ7O0dBRUM7SUFDQyx5QkFBeUI7R0FDMUI7O0VBRUQsQ0FFQTs7R0FFQztJQUNDLHlCQUF5QjtHQUMxQjs7RUFFRCxDQUVGLHdCQUF3QixDQUV2QjtFQUlDLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsZ0JBQWdCO0NBQ2pCLENBRUM7R0FDQyw0QkFBNEI7R0FDNUIsV0FBVztHQUNYLGNBQWM7R0FDZCxhQUFhO0dBQ2IsWUFBWTtHQUNaLE9BQU87R0FDUCxlQUFlO0dBQ2YsTUFBTTtHQUNOLFdBQVc7R0FDWCxjQUFjO0VBQ2YsQ0FFRDtFQUlDLDJCQUEyQjtFQUkzQiwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixRQUFRO0VBQ1IsTUFBTTtFQUNOLFdBQVc7RUFDWCxjQUFjO0NBQ2YsQ0FFQztHQUNDLGdCQUFnQjtHQUNoQixVQUFVO0VBQ1gsQ0FFQztJQUNDLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0dBQ3JCLENBRUM7S0FDQyx3QkFBd0I7S0FDeEIsd0JBQXdCO0tBQ3hCLHlCQUF5QjtJQUMxQixDQUVBO0tBQ0MsU0FBUztLQUNULGNBQWM7S0FDZCxjQUFjO0tBQ2QsZ0JBQWdCO0tBQ2hCLHVCQUF1QjtLQUN2QixVQUFVO0tBQ1YscUJBQXFCO0tBQ3JCLHlCQUF5QjtJQUMxQixDQUVDOztNQUVDO09BQ0MsZ0JBQWdCO01BQ2pCOztLQUVELENBRUg7R0FDQyxrQ0FBa0U7R0FDbEUsK0JBQStCO0dBQy9CLDRCQUE0QjtHQUM1QixTQUFTO0dBQ1QsZUFBZTtHQUNmLGNBQWM7R0FDZCxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLFFBQVE7R0FDUixNQUFNO0dBQ04sc0JBQXNCO0dBQ3RCLFVBQVU7RUFDWCxDQUVBOztHQUVDO0lBQ0Msa0JBQWtCO0dBQ25COztFQUVELENBRUQ7RUFDQyxhQUFhO0NBQ2QsQ0FFQztHQUNDLGNBQWM7RUFDZixDQUVEO0VBSUMsd0JBQXdCO0NBQ3pCLENBRUQsV0FBVyxDQUVWO0VBSUMsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxjQUFjO0NBQ2YsQ0FFQztHQUlDLDZCQUE2QjtHQUM3QixlQUFlO0dBQ2YsWUFBWTtHQUNaLG9CQUFvQjtHQUNwQixrQkFBa0I7R0FDbEIsTUFBTTtFQUNQLENBRUM7SUFDQyxTQUFTO0lBQ1QsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7R0FDckIsQ0FFQzs7S0FFQztNQUNDLGdCQUFnQjtLQUNqQjs7SUFFRCxDQUVGO0dBQ0MsZUFBZTtHQUNmLG9CQUFvQjtHQUNwQixrQkFBa0I7R0FDbEIsUUFBUTtHQUNSLE1BQU07RUFDUCxDQUVDO0lBQ0MsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0dBQ3BCLENBRUM7S0FDQyxxQkFBcUI7S0FDckIsVUFBVTtJQUNYLENBRUM7TUFDQyxTQUFTO01BQ1QsV0FBVztNQUNYLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQix5QkFBeUI7S0FDMUIsQ0FFQztPQUNDLFVBQVU7T0FDVixrQkFBa0I7T0FDbEIsZUFBZTtNQUNoQixDQUVDO1FBQ0MsaUNBQWlFO1FBQ2pFLGlDQUFpQztRQUNqQyw0QkFBNEI7UUFDNUIsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLFVBQVU7T0FDWCxDQUVBOztRQUVDO1NBQ0MsZ0JBQWdCO1FBQ2pCOztTQUVDO1VBQ0MsYUFBYTtTQUNkOztPQUVGLENBRUQ7O09BRUM7UUFDQyxvQkFBb0I7T0FDckI7O01BRUQsQ0FFRDtNQUNDLGNBQWM7S0FDZixDQUVIO0dBQ0MsdUJBQXVCO0VBQ3hCLENBRUM7SUFDQyxvQkFBb0I7SUFDcEIsVUFBVTtHQUNYLENBRUgsV0FBVyxDQUVWO0VBQ0Msa0JBQWtCO0VBRWxCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsMkJBQTJCO0VBRzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFFNUIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtDQUNuQixDQUVDO0dBSUMsbUJBQW1CO0dBSW5CLGtEQUFrRDtHQUNsRCxxQkFBcUI7R0FDckIsaUJBQWlCO0dBQ2pCLFVBQVU7R0FDVixtQkFBbUI7R0FDbkIsa0JBQWtCO0dBQ2xCLFVBQVU7RUFDWCxDQUVDO0lBSUMsNEJBQTRCO0lBSTVCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7R0FDWixDQUVBO0lBQ0MsTUFBTTtJQUNOLE9BQU87R0FDUixDQUVBO0lBQ0MsU0FBUztJQUNULFFBQVE7R0FDVCxDQUVEO0dBQ0MsdUJBQXVCO0dBQ3ZCLHlCQUF5QjtFQUMxQixDQUVDO0lBQ0MsY0FBYztHQUNmLENBRUQ7R0FJQyxvREFBb0Q7R0FJcEQsc0JBQXNCO0dBSXRCLHdCQUF3QjtHQUN4QixZQUFZO0dBQ1osU0FBUztHQUNULGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLFNBQVM7R0FDVCx1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLFVBQVU7R0FDVixVQUFVO0dBQ1YscUJBQXFCO0dBQ3JCLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIseUJBQXlCO0dBQ3pCLFdBQVc7R0FDWCxVQUFVO0VBQ1gsQ0FFQztJQUNDLGtDQUFrRTtJQUNsRSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0lBQ2IsU0FBUztJQUNULHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtHQUNiLENBRUQ7R0FDQyxvQkFBb0I7R0FJcEIsa0NBQWtDO0dBSWxDLHVCQUF1QjtHQUN2QixXQUFXO0dBQ1gsbUJBQW1CO0dBQ25CLGNBQWM7R0FDZCxXQUFXO0dBQ1gsWUFBWTtHQUNaLGtCQUFrQjtHQUNsQixPQUFPO0dBQ1AsTUFBTTtHQUNOLFVBQVU7RUFDWCxDQUVBOztHQUVDO0lBQ0MseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0dBQ2Q7O0lBRUM7S0FDQyxpQkFBaUI7SUFDbEI7O0lBRUE7S0FDQyxhQUFhO0lBQ2Q7O0lBRUE7S0FDQyxhQUFhO0lBQ2Q7O0VBRUYsQ0FFRDtFQUlDLHNCQUFzQjtFQUN0QixVQUFVO0NBQ1gsQ0FFQztHQUNDLFFBQVE7RUFDVCxDQUVEO0VBSUMsNEJBQTRCO0VBQzVCLFVBQVU7Q0FDWCxDQUVBO0VBQ0MsVUFBVTtDQUNYLENBRUQsUUFBUSxDQUVQO0VBQ0Msa0JBQWtCO0VBRWxCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtDQUNoQixDQUVDO0dBQ0MsYUFBYTtHQUViLFlBQVk7R0FDWixRQUFRO0dBQ1Isa0JBQWtCO0dBQ2xCLFVBQVU7RUFDWCxDQUVDO0lBQ0MsY0FBYztHQUNmLENBRUQ7R0FDQyxhQUFhO0dBRWIsWUFBWTtHQUNaLFFBQVE7R0FDUixVQUFVO0VBQ1gsQ0FFQTs7R0FFQztJQUNDLGNBQWM7SUFDZCxrQkFBa0I7R0FDbkI7O0lBRUM7S0FDQyxnQkFBZ0I7S0FDaEIsV0FBVztJQUNaOztJQUVBO0tBQ0MsaUJBQWlCO0tBQ2pCLGtCQUFrQjtLQUNsQixlQUFlO0tBQ2YsV0FBVztJQUNaOztFQUVGLENBRUE7O0dBRUM7SUFDQyxlQUFlO0dBQ2hCOztFQUVELENBRUYsU0FBUyxDQUVSO0VBQ0MsdUJBQXVCO0VBSXZCLGlHQUE2SDtFQUM3SCw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25CLENBRUM7R0FDQyxpQkFBaUI7R0FDakIsbUJBQW1CO0VBQ3BCLENBRUE7R0FDQyxjQUFjO0dBQ2QsdUJBQXVCO0dBQ3ZCLHlCQUF5QjtHQUN6QixNQUFNO0VBQ1AsQ0FFQztJQUNDLGNBQWM7R0FDZixDQUVEOztHQUVDO0lBQ0Msc0JBQXNCO0dBQ3ZCOztFQUVELENBRUE7O0dBRUM7SUFDQyx5QkFBeUI7R0FDMUI7O0VBRUQsQ0FFQTs7R0FFQztJQUNDLDBCQUEwQjtHQUMzQjs7RUFFRCxDQUVBOztHQUVDO0lBQ0MseUJBQXlCO0dBQzFCOztJQUVDO0tBQ0MsaUJBQWlCO0tBQ2pCLGlCQUFpQjtJQUNsQjs7RUFFRixDQUVEO0VBQ0MsNkJBQTZCO0NBQzlCLENBRUQsV0FBVyxDQUVWO0VBQ0MscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7Q0FDbkIsQ0FFQztHQUNDLGlCQUFpQjtFQUNsQixDQUVDO0lBQ0MsK0JBQStCO0dBQ2hDLENBRUM7S0FDQyxXQUFXO0lBQ1osQ0FFRjtHQUNDLCtCQUErQjtHQUMvQixnQkFBZ0I7R0FDaEIsdUJBQXVCO0dBQ3ZCLGdCQUFnQjtHQUNoQixVQUFVO0dBQ1YseUJBQXlCO0VBQzFCLENBRUM7SUFDQywrQ0FBK0M7SUFDL0MscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0dBQ2xCLENBRUM7S0FDQyxjQUFjO0tBQ2QsY0FBYztLQUNkLGVBQWU7SUFDaEIsQ0FFQTtLQUNDLGNBQWM7SUFDZixDQUVDO01BQ0MsV0FBVztLQUNaLENBRUQ7O0tBRUM7TUFDQyxTQUFTO01BQ1QsY0FBYztNQUNkLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QsZ0JBQWdCO0tBQ2pCOztJQUVELENBRUY7O0dBRUM7SUFDQyx5QkFBeUI7R0FDMUI7O0VBRUQsQ0FFQTs7R0FFQztJQUNDLHlCQUF5QjtHQUMxQjs7RUFFRCxDQUVGLFlBQVksQ0FFWDtFQUlDLGlHQUE2SDtFQUM3SCw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsY0FBYztDQUNmLENBRUE7RUFDQyx1Q0FBdUM7Q0FDeEMsQ0FFQTtFQUNDLGdCQUFnQjtDQUNqQixDQUVBOztFQUtDLGlHQUE2SDtFQUM3SCxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtDQUN2QixDQUVBO0VBQ0MseUJBQXlCO0NBQzFCLENBRUE7RUFJQyxlQUFlO0VBQ2YsVUFBVTtDQUNYLENBRUM7R0FDQyxXQUFXO0VBQ1osQ0FFRDtFQUlDLGVBQWU7RUFDZixVQUFVO0NBQ1gsQ0FFQTtFQUNDLFVBQVU7Q0FDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCguLi8uLi8uLi9hc3NldHMvaG9tZS9jc3MvZm9udGF3ZXNvbWUtYWxsLm1pbi5jc3MpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw0MDBpdGFsaWMsNjAwLDYwMGl0YWxpYyw4MDAsODAwaXRhbGljXCIpO1xuXG4vKlxuXHRTcGVjdHJhbCBieSBIVE1MNSBVUFxuXHRodG1sNXVwLm5ldCB8IEBhamxrblxuXHRGcmVlIGZvciBwZXJzb25hbCBhbmQgY29tbWVyY2lhbCB1c2UgdW5kZXIgdGhlIENDQSAzLjAgbGljZW5zZSAoaHRtbDV1cC5uZXQvbGljZW5zZSlcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsXG5pZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsXG5wcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSxcbmNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsXG51LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LFxuZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LFxudGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSxcbmNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbixcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LFxuc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO31cblxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO31cblxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuXG5cdGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0Y29udGVudDogbm9uZTtcblx0fVxuXG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5ib2R5IHtcblx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuXG5tYXJrIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG5cdGJvcmRlcjogMDtcblx0cGFkZGluZzogMDtcbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0LW1zLWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qIEJhc2ljICovXG5cblx0QC1tcy12aWV3cG9ydCB7XG5cdFx0d2lkdGg6IGRldmljZS13aWR0aDtcblx0fVxuXG5cdGh0bWwge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdH1cblxuXHQqLCAqOmJlZm9yZSwgKjphZnRlciB7XG5cdFx0Ym94LXNpemluZzogaW5oZXJpdDtcblx0fVxuXG5cdGJvZHkge1xuXHRcdGJhY2tncm91bmQ6ICMyZTM4NDI7XG5cdH1cblxuXHRcdGJvZHkuaXMtcHJlbG9hZCAqLCBib2R5LmlzLXByZWxvYWQgKjpiZWZvcmUsIGJvZHkuaXMtcHJlbG9hZCAqOmFmdGVyIHtcblx0XHRcdC1tb3otYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0LW1zLWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0YW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHQtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0LW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcblx0XHR9XG5cblx0Ym9keSwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cdFx0Zm9udC1zaXplOiAxNXB0O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDc1ZW07XG5cdFx0bGluZS1oZWlnaHQ6IDEuNjVlbTtcblx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG5cblx0XHRcdGJvZHksIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B0O1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG5cblx0XHRcdGJvZHksIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0Ym9keSwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuXHRcdFx0XHRmb250LXNpemU6IDExcHQ7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAzNzVlbTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRhIHtcblx0XHQtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjJzIGVhc2U7XG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UsIGJvcmRlci1ib3R0b20tY29sb3IgMC4ycyBlYXNlO1xuXHRcdC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UsIGJvcmRlci1ib3R0b20tY29sb3IgMC4ycyBlYXNlO1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjJzIGVhc2U7XG5cdFx0Ym9yZGVyLWJvdHRvbTogZG90dGVkIDFweDtcblx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdH1cblxuXHRcdGE6aG92ZXIge1xuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXG5cdHN0cm9uZywgYiB7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXG5cdGVtLCBpIHtcblx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDAgMCAyZW0gMDtcblx0fVxuXG5cdGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDAuMjI1ZW07XG5cdFx0bGluZS1oZWlnaHQ6IDFlbTtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHR9XG5cblx0XHRoMSBhLCBoMiBhLCBoMyBhLCBoNCBhLCBoNSBhLCBoNiBhIHtcblx0XHRcdGNvbG9yOiBpbmhlcml0O1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdH1cblxuXHRoMiB7XG5cdFx0Zm9udC1zaXplOiAxLjM1ZW07XG5cdFx0bGluZS1oZWlnaHQ6IDEuNzVlbTtcblx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0aDIge1xuXHRcdFx0XHRmb250LXNpemU6IDEuMWVtO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMS42NWVtO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdGgzIHtcblx0XHRmb250LXNpemU6IDEuMTVlbTtcblx0XHRsaW5lLWhlaWdodDogMS43NWVtO1xuXHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMS42NWVtO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdGg0IHtcblx0XHRmb250LXNpemU6IDFlbTtcblx0XHRsaW5lLWhlaWdodDogMS41ZW07XG5cdH1cblxuXHRoNSB7XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRsaW5lLWhlaWdodDogMS41ZW07XG5cdH1cblxuXHRoNiB7XG5cdFx0Zm9udC1zaXplOiAwLjdlbTtcblx0XHRsaW5lLWhlaWdodDogMS41ZW07XG5cdH1cblxuXHRzdWIge1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRvcDogMC41ZW07XG5cdH1cblxuXHRzdXAge1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRvcDogLTAuNWVtO1xuXHR9XG5cblx0aHIge1xuXHRcdGJvcmRlcjogMDtcblx0XHRib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZjtcblx0XHRtYXJnaW46IDNlbSAwO1xuXHR9XG5cblx0XHRoci5tYWpvciB7XG5cdFx0XHRtYXJnaW46IDQuNWVtIDA7XG5cdFx0fVxuXG5cdGJsb2NrcXVvdGUge1xuXHRcdGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggI2ZmZjtcblx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdFx0bWFyZ2luOiAwIDAgMmVtIDA7XG5cdFx0cGFkZGluZzogMC41ZW0gMCAwLjVlbSAyZW07XG5cdH1cblxuXHRjb2RlIHtcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDE0NCwgMTQ0LCAxNDQsIDAuMjUpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG5cdFx0Zm9udC1zaXplOiAwLjllbTtcblx0XHRsZXR0ZXItc3BhY2luZzogMDtcblx0XHRtYXJnaW46IDAgMC4yNWVtO1xuXHRcdHBhZGRpbmc6IDAuMjVlbSAwLjY1ZW07XG5cdH1cblxuXHRwcmUge1xuXHRcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblx0XHRmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG5cdFx0Zm9udC1zaXplOiAwLjllbTtcblx0XHRtYXJnaW46IDAgMCAyZW0gMDtcblx0fVxuXG5cdFx0cHJlIGNvZGUge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRsaW5lLWhlaWdodDogMS43NWVtO1xuXHRcdFx0cGFkZGluZzogMWVtIDEuNWVtO1xuXHRcdFx0b3ZlcmZsb3cteDogYXV0bztcblx0XHR9XG5cblx0LmFsaWduLWxlZnQge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cblxuXHQuYWxpZ24tY2VudGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQuYWxpZ24tcmlnaHQge1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHR9XG5cbi8qIFJvdyAqL1xuXG5cdC5yb3cge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cdH1cblxuXHRcdC5yb3cgPiAqIHtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0fVxuXG5cdFx0LnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdH1cblxuXHRcdC5yb3cuYWxuLWxlZnQge1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdH1cblxuXHRcdC5yb3cuYWxuLWNlbnRlciB7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR9XG5cblx0XHQucm93LmFsbi1yaWdodCB7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdH1cblxuXHRcdC5yb3cuYWxuLXRvcCB7XG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHR9XG5cblx0XHQucm93LmFsbi1taWRkbGUge1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHR9XG5cblx0XHQucm93LmFsbi1ib3R0b20ge1xuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdH1cblxuXHRcdC5yb3cgPiAuaW1wIHtcblx0XHRcdG9yZGVyOiAtMTtcblx0XHR9XG5cblx0XHQucm93ID4gLmNvbC0xIHtcblx0XHRcdHdpZHRoOiA4LjMzMzMzJTtcblx0XHR9XG5cblx0XHQucm93ID4gLm9mZi0xIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcblx0XHR9XG5cblx0XHQucm93ID4gLmNvbC0yIHtcblx0XHRcdHdpZHRoOiAxNi42NjY2NyU7XG5cdFx0fVxuXG5cdFx0LnJvdyA+IC5vZmYtMiB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xuXHRcdH1cblxuXHRcdC5yb3cgPiAuY29sLTMge1xuXHRcdFx0d2lkdGg6IDI1JTtcblx0XHR9XG5cblx0XHQucm93ID4gLm9mZi0zIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XG5cdFx0fVxuXG5cdFx0LnJvdyA+IC5jb2wtNCB7XG5cdFx0XHR3aWR0aDogMzMuMzMzMzMlO1xuXHRcdH1cblxuXHRcdC5yb3cgPiAub2ZmLTQge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcblx0XHR9XG5cblx0XHQucm93ID4gLmNvbC01IHtcblx0XHRcdHdpZHRoOiA0MS42NjY2NyU7XG5cdFx0fVxuXG5cdFx0LnJvdyA+IC5vZmYtNSB7XG5cdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xuXHRcdH1cblxuXHRcdC5yb3cgPiAuY29sLTYge1xuXHRcdFx0d2lkdGg6IDUwJTtcblx0XHR9XG5cblx0XHQucm93ID4gLm9mZi02IHtcblx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XG5cdFx0fVxuXG5cdFx0LnJvdyA+IC5jb2wtNyB7XG5cdFx0XHR3aWR0aDogNTguMzMzMzMlO1xuXHRcdH1cblxuXHRcdC5yb3cgPiAub2ZmLTcge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcblx0XHR9XG5cblx0XHQucm93ID4gLmNvbC04IHtcblx0XHRcdHdpZHRoOiA2Ni42NjY2NyU7XG5cdFx0fVxuXG5cdFx0LnJvdyA+IC5vZmYtOCB7XG5cdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xuXHRcdH1cblxuXHRcdC5yb3cgPiAuY29sLTkge1xuXHRcdFx0d2lkdGg6IDc1JTtcblx0XHR9XG5cblx0XHQucm93ID4gLm9mZi05IHtcblx0XHRcdG1hcmdpbi1sZWZ0OiA3NSU7XG5cdFx0fVxuXG5cdFx0LnJvdyA+IC5jb2wtMTAge1xuXHRcdFx0d2lkdGg6IDgzLjMzMzMzJTtcblx0XHR9XG5cblx0XHQucm93ID4gLm9mZi0xMCB7XG5cdFx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xuXHRcdH1cblxuXHRcdC5yb3cgPiAuY29sLTExIHtcblx0XHRcdHdpZHRoOiA5MS42NjY2NyU7XG5cdFx0fVxuXG5cdFx0LnJvdyA+IC5vZmYtMTEge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcblx0XHR9XG5cblx0XHQucm93ID4gLmNvbC0xMiB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cblx0XHQucm93ID4gLm9mZi0xMiB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMTAwJTtcblx0XHR9XG5cblx0XHQucm93Lmd0ci0wIHtcblx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRtYXJnaW4tbGVmdDogMGVtO1xuXHRcdH1cblxuXHRcdFx0LnJvdy5ndHItMCA+ICoge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwZW07XG5cdFx0XHR9XG5cblx0XHRcdC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAwZW07XG5cdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItMC5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwZW07XG5cdFx0XHRcdH1cblxuXHRcdC5yb3cuZ3RyLTI1IHtcblx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRtYXJnaW4tbGVmdDogLTAuMzc1ZW07XG5cdFx0fVxuXG5cdFx0XHQucm93Lmd0ci0yNSA+ICoge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjM3NWVtO1xuXHRcdFx0fVxuXG5cdFx0XHQucm93Lmd0ci0yNS5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IC0wLjM3NWVtO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTI1Lmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuMzc1ZW07XG5cdFx0XHRcdH1cblxuXHRcdC5yb3cuZ3RyLTUwIHtcblx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRtYXJnaW4tbGVmdDogLTAuNzVlbTtcblx0XHR9XG5cblx0XHRcdC5yb3cuZ3RyLTUwID4gKiB7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuNzVlbTtcblx0XHRcdH1cblxuXHRcdFx0LnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMC43NWVtO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuNzVlbTtcblx0XHRcdFx0fVxuXG5cdFx0LnJvdyB7XG5cdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IC0xLjVlbTtcblx0XHR9XG5cblx0XHRcdC5yb3cgPiAqIHtcblx0XHRcdFx0cGFkZGluZzogMCAwIDAgMS41ZW07XG5cdFx0XHR9XG5cblx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMS41ZW07XG5cdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxLjVlbTtcblx0XHRcdFx0fVxuXG5cdFx0LnJvdy5ndHItMTUwIHtcblx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRtYXJnaW4tbGVmdDogLTIuMjVlbTtcblx0XHR9XG5cblx0XHRcdC5yb3cuZ3RyLTE1MCA+ICoge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAyLjI1ZW07XG5cdFx0XHR9XG5cblx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IC0yLjI1ZW07XG5cdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItMTUwLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDIuMjVlbTtcblx0XHRcdFx0fVxuXG5cdFx0LnJvdy5ndHItMjAwIHtcblx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRtYXJnaW4tbGVmdDogLTNlbTtcblx0XHR9XG5cblx0XHRcdC5yb3cuZ3RyLTIwMCA+ICoge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAzZW07XG5cdFx0XHR9XG5cblx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IC0zZW07XG5cdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItMjAwLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDNlbTtcblx0XHRcdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG5cblx0XHRcdC5yb3cge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAqIHtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLWxlZnQge1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLWNlbnRlciB7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1yaWdodCB7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLXRvcCB7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1taWRkbGUge1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1ib3R0b20ge1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuaW1wLXhsYXJnZSB7XG5cdFx0XHRcdFx0b3JkZXI6IC0xO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtMS14bGFyZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiA4LjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTEteGxhcmdlIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0yLXhsYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDE2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTIteGxhcmdlIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtMy14bGFyZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiAyNSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0zLXhsYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDI1JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTQteGxhcmdlIHtcblx0XHRcdFx0XHR3aWR0aDogMzMuMzMzMzMlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtNC14bGFyZ2Uge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC01LXhsYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDQxLjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTUteGxhcmdlIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtNi14bGFyZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi02LXhsYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTcteGxhcmdlIHtcblx0XHRcdFx0XHR3aWR0aDogNTguMzMzMzMlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtNy14bGFyZ2Uge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC04LXhsYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDY2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTgteGxhcmdlIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtOS14bGFyZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi05LXhsYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEwLXhsYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDgzLjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTEwLXhsYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTExLXhsYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDkxLjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTExLXhsYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEyLXhsYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMi14bGFyZ2Uge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItMCB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMGVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0wID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMC5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItMjUge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjM3NWVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0yNSA+ICoge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMC4zNzVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0yNS5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMC4zNzVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTI1Lmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwLjM3NWVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTUwIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC43NWVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci01MCA+ICoge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMC43NWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0wLjc1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci01MC5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMC43NWVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xLjVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdyA+ICoge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMS41ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMS41ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxLjVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci0xNTAge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0yLjI1ZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTE1MCA+ICoge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMi4yNWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMi4yNWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMTUwLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyLjI1ZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItMjAwIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtM2VtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0yMDAgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDNlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTNlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogM2VtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG5cblx0XHRcdC5yb3cge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAqIHtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLWxlZnQge1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLWNlbnRlciB7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1yaWdodCB7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLXRvcCB7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1taWRkbGUge1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1ib3R0b20ge1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuaW1wLWxhcmdlIHtcblx0XHRcdFx0XHRvcmRlcjogLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xLWxhcmdlIHtcblx0XHRcdFx0XHR3aWR0aDogOC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xLWxhcmdlIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0yLWxhcmdlIHtcblx0XHRcdFx0XHR3aWR0aDogMTYuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtMi1sYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTMtbGFyZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiAyNSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0zLWxhcmdlIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMjUlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtNC1sYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDMzLjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTQtbGFyZ2Uge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC01LWxhcmdlIHtcblx0XHRcdFx0XHR3aWR0aDogNDEuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtNS1sYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTYtbGFyZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi02LWxhcmdlIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtNy1sYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDU4LjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTctbGFyZ2Uge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC04LWxhcmdlIHtcblx0XHRcdFx0XHR3aWR0aDogNjYuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtOC1sYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTktbGFyZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi05LWxhcmdlIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNzUlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtMTAtbGFyZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiA4My4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMC1sYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTExLWxhcmdlIHtcblx0XHRcdFx0XHR3aWR0aDogOTEuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtMTEtbGFyZ2Uge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xMi1sYXJnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMi1sYXJnZSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci0wIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTAgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDBlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDBlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDBlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci0yNSB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTAuMzc1ZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTI1ID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjM3NWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTI1Lmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0wLjM3NWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuMzc1ZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItNTAge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjc1ZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTUwID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjc1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTAuNzVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwLjc1ZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTEuNWVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93ID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAxLjVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0xLjVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDEuNWVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTE1MCB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTIuMjVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAyLjI1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yLjI1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDIuMjVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci0yMDAge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0zZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMCA+ICoge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgM2VtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtM2VtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMjAwLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuXG5cdFx0XHQucm93IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gKiB7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0gPiAqID4gOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1sZWZ0IHtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1jZW50ZXIge1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5hbG4tcmlnaHQge1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi10b3Age1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5hbG4tbWlkZGxlIHtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5hbG4tYm90dG9tIHtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmltcC1tZWRpdW0ge1xuXHRcdFx0XHRcdG9yZGVyOiAtMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEtbWVkaXVtIHtcblx0XHRcdFx0XHR3aWR0aDogOC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xLW1lZGl1bSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtMi1tZWRpdW0ge1xuXHRcdFx0XHRcdHdpZHRoOiAxNi42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0yLW1lZGl1bSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTMtbWVkaXVtIHtcblx0XHRcdFx0XHR3aWR0aDogMjUlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtMy1tZWRpdW0ge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC00LW1lZGl1bSB7XG5cdFx0XHRcdFx0d2lkdGg6IDMzLjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTQtbWVkaXVtIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtNS1tZWRpdW0ge1xuXHRcdFx0XHRcdHdpZHRoOiA0MS42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi01LW1lZGl1bSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTYtbWVkaXVtIHtcblx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtNi1tZWRpdW0ge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC03LW1lZGl1bSB7XG5cdFx0XHRcdFx0d2lkdGg6IDU4LjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTctbWVkaXVtIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtOC1tZWRpdW0ge1xuXHRcdFx0XHRcdHdpZHRoOiA2Ni42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi04LW1lZGl1bSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTktbWVkaXVtIHtcblx0XHRcdFx0XHR3aWR0aDogNzUlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtOS1tZWRpdW0ge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA3NSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xMC1tZWRpdW0ge1xuXHRcdFx0XHRcdHdpZHRoOiA4My4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMC1tZWRpdW0ge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xMS1tZWRpdW0ge1xuXHRcdFx0XHRcdHdpZHRoOiA5MS42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMS1tZWRpdW0ge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xMi1tZWRpdW0ge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtMTItbWVkaXVtIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTAge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDBlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMCA+ICoge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMGVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMGVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMC5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMGVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTI1IHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC4zNzVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMjUgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuMzc1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTAuMzc1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMC4zNzVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci01MCB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTAuNzVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItNTAgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuNzVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci01MC5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMC43NWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuNzVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93IHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMS41ZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDEuNWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTEuNWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMS41ZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItMTUwIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMi4yNWVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0xNTAgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDIuMjVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTIuMjVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMi4yNWVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTIwMCB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTNlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMjAwID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAzZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0zZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDNlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG5cblx0XHRcdC5yb3cge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAqIHtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLWxlZnQge1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLWNlbnRlciB7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1yaWdodCB7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuYWxuLXRvcCB7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1taWRkbGUge1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1ib3R0b20ge1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuaW1wLXNtYWxsIHtcblx0XHRcdFx0XHRvcmRlcjogLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xLXNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogOC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xLXNtYWxsIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0yLXNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogMTYuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtMi1zbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTMtc21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiAyNSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0zLXNtYWxsIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMjUlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtNC1zbWFsbCB7XG5cdFx0XHRcdFx0d2lkdGg6IDMzLjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTQtc21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC01LXNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogNDEuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtNS1zbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTYtc21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi02LXNtYWxsIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtNy1zbWFsbCB7XG5cdFx0XHRcdFx0d2lkdGg6IDU4LjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTctc21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC04LXNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogNjYuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtOC1zbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTktc21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi05LXNtYWxsIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNzUlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtMTAtc21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiA4My4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMC1zbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTExLXNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogOTEuNjY2NjclO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtMTEtc21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xMi1zbWFsbCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMi1zbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci0wIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTAgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDBlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDBlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDBlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci0yNSB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTAuMzc1ZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTI1ID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjM3NWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTI1Lmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0wLjM3NWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuMzc1ZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItNTAge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjc1ZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTUwID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjc1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTAuNzVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwLjc1ZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTEuNWVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93ID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAxLjVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0xLjVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDEuNWVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTE1MCB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTIuMjVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAyLjI1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yLjI1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDIuMjVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci0yMDAge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0zZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMCA+ICoge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgM2VtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtM2VtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMjAwLmd0ci11bmlmb3JtID4gKiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG5cdFx0XHQucm93IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gKiB7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0gPiAqID4gOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1sZWZ0IHtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi1jZW50ZXIge1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5hbG4tcmlnaHQge1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93LmFsbi10b3Age1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5hbG4tbWlkZGxlIHtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5hbG4tYm90dG9tIHtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmltcC14c21hbGwge1xuXHRcdFx0XHRcdG9yZGVyOiAtMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEteHNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogOC4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xLXhzbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtMi14c21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiAxNi42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0yLXhzbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTMteHNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogMjUlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtMy14c21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC00LXhzbWFsbCB7XG5cdFx0XHRcdFx0d2lkdGg6IDMzLjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTQteHNtYWxsIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtNS14c21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiA0MS42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi01LXhzbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTYteHNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtNi14c21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC03LXhzbWFsbCB7XG5cdFx0XHRcdFx0d2lkdGg6IDU4LjMzMzMzJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTcteHNtYWxsIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5jb2wtOC14c21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiA2Ni42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi04LXhzbWFsbCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgPiAuY29sLTkteHNtYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogNzUlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtOS14c21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA3NSU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xMC14c21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiA4My4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMC14c21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xMS14c21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiA5MS42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLm9mZi0xMS14c21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucm93ID4gLmNvbC0xMi14c21hbGwge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdyA+IC5vZmYtMTIteHNtYWxsIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTAge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDBlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMCA+ICoge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMGVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMGVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMC5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMGVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTI1IHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC4zNzVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMjUgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuMzc1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTAuMzc1ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMC4zNzVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93Lmd0ci01MCB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTAuNzVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItNTAgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuNzVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci01MC5ndHItdW5pZm9ybSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMC43NWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuNzVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHQucm93IHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMS41ZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDEuNWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTEuNWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMS41ZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0LnJvdy5ndHItMTUwIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMi4yNWVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0xNTAgPiAqIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDIuMjVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTIuMjVlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMi4yNWVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cuZ3RyLTIwMCB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTNlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMjAwID4gKiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAzZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0zZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDNlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdH1cblxuLyogU2VjdGlvbi9BcnRpY2xlICovXG5cblx0c2VjdGlvbi5zcGVjaWFsLCBhcnRpY2xlLnNwZWNpYWwge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdGhlYWRlciBwIHtcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IC0wLjI1ZW07XG5cdH1cblxuXHRoZWFkZXIgaDMgKyBwIHtcblx0XHRmb250LXNpemU6IDEuMWVtO1xuXHR9XG5cblx0aGVhZGVyIGg0ICsgcCxcblx0aGVhZGVyIGg1ICsgcCxcblx0aGVhZGVyIGg2ICsgcCB7XG5cdFx0Zm9udC1zaXplOiAwLjllbTtcblx0fVxuXG5cdGhlYWRlci5tYWpvciB7XG5cdFx0bWFyZ2luOiAwIDAgMy41ZW0gMDtcblx0fVxuXG5cdFx0aGVhZGVyLm1ham9yIGgyLCBoZWFkZXIubWFqb3IgaDMsIGhlYWRlci5tYWpvciBoNCwgaGVhZGVyLm1ham9yIGg1LCBoZWFkZXIubWFqb3IgaDYge1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmZmY7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMWVtO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdFx0aGVhZGVyLm1ham9yIGgyOmFmdGVyLCBoZWFkZXIubWFqb3IgaDM6YWZ0ZXIsIGhlYWRlci5tYWpvciBoNDphZnRlciwgaGVhZGVyLm1ham9yIGg1OmFmdGVyLCBoZWFkZXIubWFqb3IgaDY6YWZ0ZXIge1xuXHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGhlaWdodDogMXB4O1xuXHRcdFx0fVxuXG5cdFx0aGVhZGVyLm1ham9yIHAge1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHR0b3A6IDA7XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0aGVhZGVyLm1ham9yIHtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMmVtIDA7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcblxuXHRcdGhlYWRlciBiciB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblxuXHR9XG5cbi8qIEZvcm0gKi9cblxuXHRmb3JtIHtcblx0XHRtYXJnaW46IDAgMCAyZW0gMDtcblx0fVxuXG5cdGxhYmVsIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXNpemU6IDAuOWVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbnB1dFt0eXBlPVwidGV4dFwiXSxcblx0aW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuXHRpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5cdHNlbGVjdCxcblx0dGV4dGFyZWEge1xuXHRcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0LW1zLWFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0YXBwZWFyYW5jZTogbm9uZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMTQ0LCAxNDQsIDAuMjUpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0b3V0bGluZTogMDtcblx0XHRwYWRkaW5nOiAwIDFlbTtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblxuXHRcdGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmludmFsaWQsXG5cdFx0aW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmludmFsaWQsXG5cdFx0aW5wdXRbdHlwZT1cImVtYWlsXCJdOmludmFsaWQsXG5cdFx0c2VsZWN0OmludmFsaWQsXG5cdFx0dGV4dGFyZWE6aW52YWxpZCB7XG5cdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdH1cblxuXHRcdGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuXHRcdGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcblx0XHRpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXG5cdFx0c2VsZWN0OmZvY3VzLFxuXHRcdHRleHRhcmVhOmZvY3VzIHtcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMjFiMmE2O1xuXHRcdH1cblxuXHRzZWxlY3Qge1xuXHRcdGJhY2tncm91bmQtc2l6ZTogMS4yNWVtO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMWVtKSBjZW50ZXI7XG5cdFx0aGVpZ2h0OiAyLjc1ZW07XG5cdFx0cGFkZGluZy1yaWdodDogMi43NWVtO1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHR9XG5cblx0XHRzZWxlY3Q6Zm9jdXM6Oi1tcy12YWx1ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cblx0XHRzZWxlY3Q6Oi1tcy1leHBhbmQge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cblx0aW5wdXRbdHlwZT1cInRleHRcIl0sXG5cdGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcblx0aW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuXHRzZWxlY3Qge1xuXHRcdGhlaWdodDogMi43NWVtO1xuXHR9XG5cblx0dGV4dGFyZWEge1xuXHRcdHBhZGRpbmc6IDAuNzVlbSAxZW07XG5cdH1cblxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG5cdFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHRcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0XHQtbXMtYXBwZWFyYW5jZTogbm9uZTtcblx0XHRhcHBlYXJhbmNlOiBub25lO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdG1hcmdpbi1yaWdodDogLTJlbTtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHdpZHRoOiAxZW07XG5cdFx0ei1pbmRleDogLTE7XG5cdH1cblxuXHRcdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsLFxuXHRcdGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAyLjRlbTtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHRcdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSxcblx0XHRcdGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmJlZm9yZSB7XG5cdFx0XHRcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cdFx0XHRcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdFx0Zm9udC12YXJpYW50OiBub3JtYWw7XG5cdFx0XHRcdHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0XHRcdH1cblxuXHRcdFx0aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxuXHRcdFx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgxNDQsIDE0NCwgMTQ0LCAwLjI1KTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRoZWlnaHQ6IDIuMDYyNWVtO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMi4wNjI1ZW07XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdHdpZHRoOiAyLjA2MjVlbTtcblx0XHRcdH1cblxuXHRcdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxuXHRcdGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcblx0XHRcdGJhY2tncm91bmQ6ICMyZTM4NDI7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGNvbnRlbnQ6ICdcXGYwMGMnO1xuXHRcdH1cblxuXHRcdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSxcblx0XHRpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUge1xuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDAgMnB4ICMyMWIyYTY7XG5cdFx0fVxuXG5cdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSB7XG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHR9XG5cblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHR9XG5cblx0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG5cdFx0b3BhY2l0eTogMS4wO1xuXHR9XG5cblx0Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcblx0XHRvcGFjaXR5OiAxLjA7XG5cdH1cblxuXHQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcblx0XHRvcGFjaXR5OiAxLjA7XG5cdH1cblxuXHQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG5cdFx0b3BhY2l0eTogMS4wO1xuXHR9XG5cbi8qIEJveCAqL1xuXG5cdC5ib3gge1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xuXHRcdG1hcmdpbi1ib3R0b206IDJlbTtcblx0XHRwYWRkaW5nOiAxLjVlbTtcblx0fVxuXG5cdFx0LmJveCA+IDpsYXN0LWNoaWxkLFxuXHRcdC5ib3ggPiA6bGFzdC1jaGlsZCA+IDpsYXN0LWNoaWxkLFxuXHRcdC5ib3ggPiA6bGFzdC1jaGlsZCA+IDpsYXN0LWNoaWxkID4gOmxhc3QtY2hpbGQge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHR9XG5cblx0XHQuYm94LmFsdCB7XG5cdFx0XHRib3JkZXI6IDA7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHR9XG5cbi8qIEljb24gKi9cblxuXHQuaWNvbiB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG5cblx0XHQuaWNvbjpiZWZvcmUge1xuXHRcdFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblx0XHRcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0Zm9udC12YXJpYW50OiBub3JtYWw7XG5cdFx0XHR0ZXh0LXJlbmRlcmluZzogYXV0bztcblx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdH1cblxuXHRcdC5pY29uID4gLmxhYmVsIHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXG5cdFx0Lmljb246YmVmb3JlIHtcblx0XHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuXHRcdH1cblxuXHRcdC5pY29uLnNvbGlkOmJlZm9yZSB7XG5cdFx0XHRmb250LXdlaWdodDogOTAwO1xuXHRcdH1cblxuXHRcdC5pY29uLmJyYW5kczpiZWZvcmUge1xuXHRcdFx0Zm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBCcmFuZHMnO1xuXHRcdH1cblxuXHRcdC5pY29uLm1ham9yIHtcblx0XHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdGJvcmRlcjogc29saWQgMnB4ICNmZmY7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRmb250LXNpemU6IDEuMzVlbTtcblx0XHRcdGhlaWdodDogY2FsYygzZW0gKyAycHgpO1xuXHRcdFx0bGluZS1oZWlnaHQ6IDNlbTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHdpZHRoOiBjYWxjKDNlbSArIDJweCk7XG5cdFx0fVxuXG5cdFx0XHQuaWNvbi5tYWpvcjpiZWZvcmUge1xuXHRcdFx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRmb250LXNpemU6IDEuNWVtO1xuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuXG5cdFx0XHRcdC5pY29uLm1ham9yIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDFlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHQuaWNvbi5zdHlsZTEge1xuXHRcdFx0Y29sb3I6ICMwMGZmY2M7XG5cdFx0fVxuXG5cdFx0Lmljb24uc3R5bGUyIHtcblx0XHRcdGNvbG9yOiAjMDBmMGZmO1xuXHRcdH1cblxuXHRcdC5pY29uLnN0eWxlMyB7XG5cdFx0XHRjb2xvcjogIzc2ZGRmZjtcblx0XHR9XG5cbi8qIEltYWdlICovXG5cblx0LmltYWdlIHtcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdH1cblxuXHRcdC5pbWFnZSBpbWcge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXG5cdFx0LmltYWdlLmxlZnQge1xuXHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRtYXJnaW46IDAgMmVtIDJlbSAwO1xuXHRcdFx0dG9wOiAwLjI1ZW07XG5cdFx0fVxuXG5cdFx0LmltYWdlLnJpZ2h0IHtcblx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdG1hcmdpbjogMCAwIDJlbSAyZW07XG5cdFx0XHR0b3A6IDAuMjVlbTtcblx0XHR9XG5cblx0XHQuaW1hZ2UubGVmdCwgLmltYWdlLnJpZ2h0IHtcblx0XHRcdG1heC13aWR0aDogNDAlO1xuXHRcdH1cblxuXHRcdFx0LmltYWdlLmxlZnQgaW1nLCAuaW1hZ2UucmlnaHQgaW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHQuaW1hZ2UuZml0IHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luOiAwIDAgMmVtIDA7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cblx0XHRcdC5pbWFnZS5maXQgaW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cbi8qIExpc3QgKi9cblxuXHRvbCB7XG5cdFx0bGlzdC1zdHlsZTogZGVjaW1hbDtcblx0XHRtYXJnaW46IDAgMCAyZW0gMDtcblx0XHRwYWRkaW5nLWxlZnQ6IDEuMjVlbTtcblx0fVxuXG5cdFx0b2wgbGkge1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAwLjI1ZW07XG5cdFx0fVxuXG5cdHVsIHtcblx0XHRsaXN0LXN0eWxlOiBkaXNjO1xuXHRcdG1hcmdpbjogMCAwIDJlbSAwO1xuXHRcdHBhZGRpbmctbGVmdDogMWVtO1xuXHR9XG5cblx0XHR1bCBsaSB7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuXHRcdH1cblxuXHRcdHVsLmFsdCB7XG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdH1cblxuXHRcdFx0dWwuYWx0IGxpIHtcblx0XHRcdFx0Ym9yZGVyLXRvcDogc29saWQgMXB4ICNmZmY7XG5cdFx0XHRcdHBhZGRpbmc6IDAuNWVtIDA7XG5cdFx0XHR9XG5cblx0XHRcdFx0dWwuYWx0IGxpOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRib3JkZXItdG9wOiAwO1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xuXHRcdFx0XHR9XG5cblx0ZGwge1xuXHRcdG1hcmdpbjogMCAwIDJlbSAwO1xuXHR9XG5cbi8qIEFjdGlvbnMgKi9cblxuXHR1bC5hY3Rpb25zIHtcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0bWFyZ2luLWxlZnQ6IC0xZW07XG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHR9XG5cblx0XHR1bC5hY3Rpb25zIGxpIHtcblx0XHRcdHBhZGRpbmc6IDAgMCAwIDFlbTtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0fVxuXG5cdFx0dWwuYWN0aW9ucy5zcGVjaWFsIHtcblx0XHRcdC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0LW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdH1cblxuXHRcdFx0dWwuYWN0aW9ucy5zcGVjaWFsIGxpOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdFx0fVxuXG5cdFx0dWwuYWN0aW9ucy5zdGFja2VkIHtcblx0XHRcdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdH1cblxuXHRcdFx0dWwuYWN0aW9ucy5zdGFja2VkIGxpIHtcblx0XHRcdFx0cGFkZGluZzogMWVtIDAgMCAwO1xuXHRcdFx0fVxuXG5cdFx0XHRcdHVsLmFjdGlvbnMuc3RhY2tlZCBsaTpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdH1cblxuXHRcdHVsLmFjdGlvbnMuZml0IHtcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgKyAxZW0pO1xuXHRcdH1cblxuXHRcdFx0dWwuYWN0aW9ucy5maXQgbGkge1xuXHRcdFx0XHQtbW96LWZsZXgtZ3JvdzogMTtcblx0XHRcdFx0LXdlYmtpdC1mbGV4LWdyb3c6IDE7XG5cdFx0XHRcdC1tcy1mbGV4LWdyb3c6IDE7XG5cdFx0XHRcdGZsZXgtZ3JvdzogMTtcblx0XHRcdFx0LW1vei1mbGV4LXNocmluazogMTtcblx0XHRcdFx0LXdlYmtpdC1mbGV4LXNocmluazogMTtcblx0XHRcdFx0LW1zLWZsZXgtc2hyaW5rOiAxO1xuXHRcdFx0XHRmbGV4LXNocmluazogMTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdFx0dWwuYWN0aW9ucy5maXQgbGkgPiAqIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHR1bC5hY3Rpb25zLmZpdC5zdGFja2VkIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG5cdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIHtcblx0XHRcdFx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIHtcblx0XHRcdFx0XHQtbW96LWZsZXgtZ3JvdzogMTtcblx0XHRcdFx0XHQtd2Via2l0LWZsZXgtZ3JvdzogMTtcblx0XHRcdFx0XHQtbXMtZmxleC1ncm93OiAxO1xuXHRcdFx0XHRcdGZsZXgtZ3JvdzogMTtcblx0XHRcdFx0XHQtbW96LWZsZXgtc2hyaW5rOiAxO1xuXHRcdFx0XHRcdC13ZWJraXQtZmxleC1zaHJpbms6IDE7XG5cdFx0XHRcdFx0LW1zLWZsZXgtc2hyaW5rOiAxO1xuXHRcdFx0XHRcdGZsZXgtc2hyaW5rOiAxO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDFlbSAwIDAgMDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgPiAqIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGk6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuXHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuXHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcblx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGJ1dHRvbixcblx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIC5idXR0b24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uaWNvbjpiZWZvcmUsXG5cdFx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGlucHV0W3R5cGU9XCJyZXNldFwiXS5pY29uOmJlZm9yZSxcblx0XHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5pY29uOmJlZm9yZSxcblx0XHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgYnV0dG9uLmljb246YmVmb3JlLFxuXHRcdFx0XHRcdFx0dWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSAuYnV0dG9uLmljb246YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdH1cblxuLyogSWNvbnMgKi9cblxuXHR1bC5pY29ucyB7XG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHR9XG5cblx0XHR1bC5pY29ucyBsaSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRwYWRkaW5nOiAwIDFlbSAwIDA7XG5cdFx0fVxuXG5cdFx0XHR1bC5pY29ucyBsaTpsYXN0LWNoaWxkIHtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0dWwuaWNvbnMubWFqb3Ige1xuXHRcdFx0cGFkZGluZzogMWVtIDA7XG5cdFx0fVxuXG5cdFx0XHR1bC5pY29ucy5tYWpvciBsaSB7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDMuNWVtO1xuXHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG5cblx0XHRcdFx0XHR1bC5pY29ucy5tYWpvciBsaSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDFlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cbi8qIFRhYmxlICovXG5cblx0LnRhYmxlLXdyYXBwZXIge1xuXHRcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xuXHR9XG5cblx0dGFibGUge1xuXHRcdG1hcmdpbjogMCAwIDJlbSAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cblx0XHR0YWJsZSB0Ym9keSB0ciB7XG5cdFx0XHRib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xuXHRcdFx0Ym9yZGVyLWxlZnQ6IDA7XG5cdFx0XHRib3JkZXItcmlnaHQ6IDA7XG5cdFx0fVxuXG5cdFx0XHR0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoMm4gKyAxKSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAxNDQsIDE0NCwgMC4yNSk7XG5cdFx0XHR9XG5cblx0XHR0YWJsZSB0ZCB7XG5cdFx0XHRwYWRkaW5nOiAwLjc1ZW0gMC43NWVtO1xuXHRcdH1cblxuXHRcdHRhYmxlIHRoIHtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Zm9udC1zaXplOiAwLjllbTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRwYWRkaW5nOiAwIDAuNzVlbSAwLjc1ZW0gMC43NWVtO1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR9XG5cblx0XHR0YWJsZSB0aGVhZCB7XG5cdFx0XHRib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZjtcblx0XHR9XG5cblx0XHR0YWJsZSB0Zm9vdCB7XG5cdFx0XHRib3JkZXItdG9wOiBzb2xpZCAycHggI2ZmZjtcblx0XHR9XG5cblx0XHR0YWJsZS5hbHQge1xuXHRcdFx0Ym9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcblx0XHR9XG5cblx0XHRcdHRhYmxlLmFsdCB0Ym9keSB0ciB0ZCB7XG5cdFx0XHRcdGJvcmRlcjogc29saWQgMXB4ICNmZmY7XG5cdFx0XHRcdGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuXHRcdFx0XHRib3JkZXItdG9wLXdpZHRoOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRcdHRhYmxlLmFsdCB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQtd2lkdGg6IDFweDtcblx0XHRcdFx0fVxuXG5cdFx0XHR0YWJsZS5hbHQgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGQge1xuXHRcdFx0XHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XG5cdFx0XHR9XG5cblx0XHRcdHRhYmxlLmFsdCB0aGVhZCB7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDA7XG5cdFx0XHR9XG5cblx0XHRcdHRhYmxlLmFsdCB0Zm9vdCB7XG5cdFx0XHRcdGJvcmRlci10b3A6IDA7XG5cdFx0XHR9XG5cbi8qIEJ1dHRvbiAqL1xuXG5cdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5cdGlucHV0W3R5cGU9XCJyZXNldFwiXSxcblx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcblx0YnV0dG9uLFxuXHQuYnV0dG9uIHtcblx0XHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRcdC1tcy1hcHBlYXJhbmNlOiBub25lO1xuXHRcdGFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG5cdFx0LW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgY29sb3IgMC4ycyBlYXNlLWluLW91dDtcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdGJvcmRlcjogMDtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2ZmZjtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRoZWlnaHQ6IDMuMTI1ZW07XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDAuMjI1ZW07XG5cdFx0bGluZS1oZWlnaHQ6IDMuMTI1ZW07XG5cdFx0bWF4LXdpZHRoOiAzMGVtO1xuXHRcdHBhZGRpbmc6IDAgMi43NWVtO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdH1cblxuXHRcdGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXG5cdFx0aW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXG5cdFx0YnV0dG9uOmhvdmVyLFxuXHRcdC5idXR0b246aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE0NCwgMTQ0LCAwLjI1KTtcblx0XHR9XG5cblx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZSxcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl06YWN0aXZlLFxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl06YWN0aXZlLFxuXHRcdGJ1dHRvbjphY3RpdmUsXG5cdFx0LmJ1dHRvbjphY3RpdmUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE0NCwgMTQ0LCAwLjUpO1xuXHRcdH1cblxuXHRcdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uaWNvbjpiZWZvcmUsXG5cdFx0aW5wdXRbdHlwZT1cInJlc2V0XCJdLmljb246YmVmb3JlLFxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl0uaWNvbjpiZWZvcmUsXG5cdFx0YnV0dG9uLmljb246YmVmb3JlLFxuXHRcdC5idXR0b24uaWNvbjpiZWZvcmUge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjVlbTtcblx0XHR9XG5cblx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdLmZpdCxcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uZml0LFxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl0uZml0LFxuXHRcdGJ1dHRvbi5maXQsXG5cdFx0LmJ1dHRvbi5maXQge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5zbWFsbCxcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uc21hbGwsXG5cdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXS5zbWFsbCxcblx0XHRidXR0b24uc21hbGwsXG5cdFx0LmJ1dHRvbi5zbWFsbCB7XG5cdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdH1cblxuXHRcdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ubGFyZ2UsXG5cdFx0aW5wdXRbdHlwZT1cInJlc2V0XCJdLmxhcmdlLFxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl0ubGFyZ2UsXG5cdFx0YnV0dG9uLmxhcmdlLFxuXHRcdC5idXR0b24ubGFyZ2Uge1xuXHRcdFx0Zm9udC1zaXplOiAxLjM1ZW07XG5cdFx0fVxuXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5LFxuXHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5LFxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeSxcblx0XHRidXR0b24ucHJpbWFyeSxcblx0XHQuYnV0dG9uLnByaW1hcnkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VkNDkzMztcblx0XHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG5cdFx0fVxuXG5cdFx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnk6aG92ZXIsXG5cdFx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3Zlcixcblx0XHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3Zlcixcblx0XHRcdGJ1dHRvbi5wcmltYXJ5OmhvdmVyLFxuXHRcdFx0LmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmNWU0YSAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnk6YWN0aXZlLFxuXHRcdFx0aW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnk6YWN0aXZlLFxuXHRcdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5OmFjdGl2ZSxcblx0XHRcdGJ1dHRvbi5wcmltYXJ5OmFjdGl2ZSxcblx0XHRcdC5idXR0b24ucHJpbWFyeTphY3RpdmUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWIzNDFjICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdLmRpc2FibGVkLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmRpc2FibGVkLFxuXHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXS5kaXNhYmxlZCxcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl06ZGlzYWJsZWQsXG5cdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXS5kaXNhYmxlZCxcblx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmRpc2FibGVkLFxuXHRcdGJ1dHRvbi5kaXNhYmxlZCxcblx0XHRidXR0b246ZGlzYWJsZWQsXG5cdFx0LmJ1dHRvbi5kaXNhYmxlZCxcblx0XHQuYnV0dG9uOmRpc2FibGVkIHtcblx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdFx0b3BhY2l0eTogMC4yNTtcblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuXG5cdFx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuXHRcdFx0aW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuXHRcdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcblx0XHRcdGJ1dHRvbixcblx0XHRcdC5idXR0b24ge1xuXHRcdFx0XHRoZWlnaHQ6IDMuNzVlbTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDMuNzVlbTtcblx0XHRcdH1cblxuXHRcdH1cblxuLyogRmVhdHVyZXMgKi9cblxuXHQuZmVhdHVyZXMge1xuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQtbW96LWZsZXgtd3JhcDogd3JhcDtcblx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcblx0XHQtbXMtZmxleC13cmFwOiB3cmFwO1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHQtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0cGFkZGluZzogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXG5cdFx0LmZlYXR1cmVzIGxpIHtcblx0XHRcdHBhZGRpbmc6IDRlbSA0ZW0gMmVtIDZlbSA7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHR3aWR0aDogNTAlO1xuXHRcdH1cblxuXHRcdFx0LmZlYXR1cmVzIGxpOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMzUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuZmVhdHVyZXMgbGk6bnRoLWNoaWxkKDIpIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3KTtcblx0XHRcdH1cblxuXHRcdFx0LmZlYXR1cmVzIGxpOm50aC1jaGlsZCgzKSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMDUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuZmVhdHVyZXMgbGk6bnRoLWNoaWxkKDQpIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE0KTtcblx0XHRcdH1cblxuXHRcdFx0LmZlYXR1cmVzIGxpOm50aC1jaGlsZCg1KSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuZmVhdHVyZXMgbGk6bnRoLWNoaWxkKDYpIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIxKTtcblx0XHRcdH1cblxuXHRcdFx0LmZlYXR1cmVzIGxpOm50aC1jaGlsZCg3KSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNDUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuZmVhdHVyZXMgbGk6bnRoLWNoaWxkKDgpIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI4KTtcblx0XHRcdH1cblxuXHRcdFx0LmZlYXR1cmVzIGxpOm50aC1jaGlsZCg5KSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMTUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuZmVhdHVyZXMgbGk6bnRoLWNoaWxkKDEwKSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG5cdFx0XHR9XG5cblx0XHRcdC5mZWF0dXJlcyBsaTpiZWZvcmUge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0Y29sb3I6ICMwMGZmY2M7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogMS43NWVtO1xuXHRcdFx0XHR0b3A6IDIuNzVlbTtcblx0XHRcdFx0Zm9udC1zaXplOiAxLjVlbTtcblx0XHRcdH1cblxuXHRcdFx0LmZlYXR1cmVzIGxpOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcblx0XHRcdH1cblxuXHRcdFx0LmZlYXR1cmVzIGxpOm50aC1jaGlsZCgyKSB7XG5cdFx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG5cdFx0XHR9XG5cblx0XHRcdC5mZWF0dXJlcyBsaTpudGgtbGFzdC1jaGlsZCgxKSB7XG5cdFx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG5cdFx0XHR9XG5cblx0XHRcdC5mZWF0dXJlcyBsaTpudGgtbGFzdC1jaGlsZCgyKSB7XG5cdFx0XHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcblx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcblxuXHRcdFx0XHQuZmVhdHVyZXMgbGkge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDNlbSAyZW0gMWVtIDJlbSA7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZmVhdHVyZXMgbGk6YmVmb3JlIHtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0XHQuZmVhdHVyZXMgbGkge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDNlbSAwIDFlbSAwIDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IHNvbGlkIDJweCAjZmZmO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZmVhdHVyZXMgbGk6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXRvcDogMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdH1cblxuLyogU3BvdGxpZ2h0ICovXG5cblx0LnNwb3RsaWdodCB7XG5cdFx0LW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0fVxuXG5cdFx0LnNwb3RsaWdodCAuaW1hZ2Uge1xuXHRcdFx0LW1vei1vcmRlcjogMTtcblx0XHRcdC13ZWJraXQtb3JkZXI6IDE7XG5cdFx0XHQtbXMtb3JkZXI6IDE7XG5cdFx0XHRvcmRlcjogMTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cdFx0XHR3aWR0aDogNDAlO1xuXHRcdH1cblxuXHRcdFx0LnNwb3RsaWdodCAuaW1hZ2UgaW1nIHtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHQuc3BvdGxpZ2h0IC5jb250ZW50IHtcblx0XHRcdHBhZGRpbmc6IDJlbSA0ZW0gMC4xZW0gNGVtIDtcblx0XHRcdC1tb3otb3JkZXI6IDI7XG5cdFx0XHQtd2Via2l0LW9yZGVyOiAyO1xuXHRcdFx0LW1zLW9yZGVyOiAyO1xuXHRcdFx0b3JkZXI6IDI7XG5cdFx0XHRtYXgtd2lkdGg6IDQ4ZW07XG5cdFx0XHR3aWR0aDogNjAlO1xuXHRcdH1cblxuXHRcdC5zcG90bGlnaHQ6bnRoLWNoaWxkKDJuKSB7XG5cdFx0XHQtbW96LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0XHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXHRcdFx0LW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0XHR9XG5cblx0XHQuc3BvdGxpZ2h0Om50aC1jaGlsZCgxKSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcblx0XHR9XG5cblx0XHQuc3BvdGxpZ2h0Om50aC1jaGlsZCgyKSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRcdH1cblxuXHRcdC5zcG90bGlnaHQ6bnRoLWNoaWxkKDMpIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMjUpO1xuXHRcdH1cblxuXHRcdC5zcG90bGlnaHQ6bnRoLWNoaWxkKDQpIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHR9XG5cblx0XHQuc3BvdGxpZ2h0Om50aC1jaGlsZCg1KSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzc1KTtcblx0XHR9XG5cblx0XHQuc3BvdGxpZ2h0Om50aC1jaGlsZCg2KSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuXHRcdH1cblxuXHRcdC5zcG90bGlnaHQ6bnRoLWNoaWxkKDcpIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjUpO1xuXHRcdH1cblxuXHRcdC5zcG90bGlnaHQ6bnRoLWNoaWxkKDgpIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcblx0XHR9XG5cblx0XHQuc3BvdGxpZ2h0Om50aC1jaGlsZCg5KSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjc1KTtcblx0XHR9XG5cblx0XHQuc3BvdGxpZ2h0Om50aC1jaGlsZCgxMCkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcblxuXHRcdFx0LnNwb3RsaWdodCAuaW1hZ2Uge1xuXHRcdFx0XHR3aWR0aDogNDUlO1xuXHRcdFx0fVxuXG5cdFx0XHQuc3BvdGxpZ2h0IC5jb250ZW50IHtcblx0XHRcdFx0d2lkdGg6IDU1JTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG5cblx0XHRcdC5zcG90bGlnaHQge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdH1cblxuXHRcdFx0XHQuc3BvdGxpZ2h0IGJyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNwb3RsaWdodCAuaW1hZ2Uge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNwb3RsaWdodCAuY29udGVudCB7XG5cdFx0XHRcdFx0cGFkZGluZzogNGVtIDNlbSAyZW0gM2VtIDtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IG5vbmU7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuXG5cdFx0XHQuc3BvdGxpZ2h0IC5jb250ZW50IHtcblx0XHRcdFx0cGFkZGluZzogM2VtIDJlbSAxZW0gMmVtIDtcblx0XHRcdH1cblxuXHRcdH1cblxuLyogV3JhcHBlciAqL1xuXG5cdC53cmFwcGVyIHtcblx0XHRwYWRkaW5nOiA2ZW0gMCA0ZW0gMCA7XG5cdH1cblxuXHRcdC53cmFwcGVyID4gLmlubmVyIHtcblx0XHRcdHdpZHRoOiA2MGVtO1xuXHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0fVxuXG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcblxuXHRcdFx0XHQud3JhcHBlciA+IC5pbm5lciB7XG5cdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG5cblx0XHRcdFx0LndyYXBwZXIgPiAuaW5uZXIge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdC53cmFwcGVyLmFsdCB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdH1cblxuXHRcdC53cmFwcGVyLnN0eWxlMSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjFiMmE2O1xuXHRcdFx0Y29sb3I6ICNjOGVjZTk7XG5cdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgc3Ryb25nLCAud3JhcHBlci5zdHlsZTEgYiB7XG5cdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgaDIsIC53cmFwcGVyLnN0eWxlMSBoMywgLndyYXBwZXIuc3R5bGUxIGg0LCAud3JhcHBlci5zdHlsZTEgaDUsIC53cmFwcGVyLnN0eWxlMSBoNiB7XG5cdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgaHIge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgYmxvY2txdW90ZSB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMSBjb2RlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMSBoZWFkZXIgcCB7XG5cdFx0XHRcdGNvbG9yOiAjYTZlMGRiO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgaGVhZGVyLm1ham9yIGgyLCAud3JhcHBlci5zdHlsZTEgaGVhZGVyLm1ham9yIGgzLCAud3JhcHBlci5zdHlsZTEgaGVhZGVyLm1ham9yIGg0LCAud3JhcHBlci5zdHlsZTEgaGVhZGVyLm1ham9yIGg1LCAud3JhcHBlci5zdHlsZTEgaGVhZGVyLm1ham9yIGg2IHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIGhlYWRlci5tYWpvciBwIHtcblx0XHRcdFx0Y29sb3I6ICNjOGVjZTk7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMSBsYWJlbCB7XG5cdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgaW5wdXRbdHlwZT1cInRleHRcIl0sXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcblx0XHRcdC53cmFwcGVyLnN0eWxlMSBzZWxlY3QsXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgdGV4dGFyZWEge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIHNlbGVjdCB7XG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDcGF0aCBkPSdNOS40LDEyLjNsMTAuNCwxMC40bDEwLjQtMTAuNGMwLjItMC4yLDAuNS0wLjQsMC45LTAuNGMwLjMsMCwwLjYsMC4xLDAuOSwwLjRsMy4zLDMuM2MwLjIsMC4yLDAuNCwwLjUsMC40LDAuOSBjMCwwLjQtMC4xLDAuNi0wLjQsMC45TDIwLjcsMzEuOWMtMC4yLDAuMi0wLjUsMC40LTAuOSwwLjRjLTAuMywwLTAuNi0wLjEtMC45LTAuNEw0LjMsMTcuM2MtMC4yLTAuMi0wLjQtMC41LTAuNC0wLjkgYzAtMC40LDAuMS0wLjYsMC40LTAuOWwzLjMtMy4zYzAuMi0wLjIsMC41LTAuNCwwLjktMC40UzkuMSwxMi4xLDkuNCwxMi4zeicgZmlsbD0ncmdiYSgwLCAwLCAwLCAwLjEyNSknIC8lM0UlM0Mvc3ZnJTNFXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMSBzZWxlY3Qgb3B0aW9uIHtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjFiMmE2O1xuXHRcdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCxcblx0XHRcdC53cmFwcGVyLnN0eWxlMSBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XG5cdFx0XHRcdGNvbG9yOiAjYzhlY2U5O1xuXHRcdFx0fVxuXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMSBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcblx0XHRcdC53cmFwcGVyLnN0eWxlMSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0XHRcdGNvbG9yOiAjMjFiMmE2O1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRcdFx0Y29sb3I6ICNhNmUwZGIgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIDotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRcdFx0Y29sb3I6ICNhNmUwZGIgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIDo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0XHRcdGNvbG9yOiAjYTZlMGRiICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMSA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRcdFx0Y29sb3I6ICNhNmUwZGIgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIC5mb3JtZXJpemUtcGxhY2Vob2xkZXIge1xuXHRcdFx0XHRjb2xvcjogI2E2ZTBkYiAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgLmljb24ubWFqb3Ige1xuXHRcdFx0XHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgdWwuYWx0IGxpIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIHRhYmxlIHRib2R5IHRyIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdH1cblxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTEgdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDJuICsgMSkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMSB0YWJsZSB0aCB7XG5cdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgdGFibGUgdGhlYWQge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgdGFibGUgdGZvb3Qge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgdGFibGUuYWx0IHRib2R5IHRyIHRkIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG5cdFx0XHQud3JhcHBlci5zdHlsZTEgYnV0dG9uLFxuXHRcdFx0LndyYXBwZXIuc3R5bGUxIC5idXR0b24ge1xuXHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTEgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3Zlcixcblx0XHRcdFx0LndyYXBwZXIuc3R5bGUxIGJ1dHRvbjpob3Zlcixcblx0XHRcdFx0LndyYXBwZXIuc3R5bGUxIC5idXR0b246aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LndyYXBwZXIuc3R5bGUxIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlLFxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTEgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmFjdGl2ZSxcblx0XHRcdFx0LndyYXBwZXIuc3R5bGUxIGlucHV0W3R5cGU9XCJidXR0b25cIl06YWN0aXZlLFxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTEgYnV0dG9uOmFjdGl2ZSxcblx0XHRcdFx0LndyYXBwZXIuc3R5bGUxIC5idXR0b246YWN0aXZlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdFx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTEgLmZlYXR1cmVzIGxpIHtcblx0XHRcdFx0XHRib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHQud3JhcHBlci5zdHlsZTIge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzJlMzg0Mjtcblx0XHR9XG5cblx0XHQud3JhcHBlci5zdHlsZTMge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzUwNTM5Mztcblx0XHRcdGNvbG9yOiAjZDNkNGU0O1xuXHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIHN0cm9uZywgLndyYXBwZXIuc3R5bGUzIGIge1xuXHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIGgyLCAud3JhcHBlci5zdHlsZTMgaDMsIC53cmFwcGVyLnN0eWxlMyBoNCwgLndyYXBwZXIuc3R5bGUzIGg1LCAud3JhcHBlci5zdHlsZTMgaDYge1xuXHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIGhyIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIGJsb2NrcXVvdGUge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgY29kZSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgaGVhZGVyIHAge1xuXHRcdFx0XHRjb2xvcjogI2I5YmFkNDtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIGhlYWRlci5tYWpvciBoMiwgLndyYXBwZXIuc3R5bGUzIGhlYWRlci5tYWpvciBoMywgLndyYXBwZXIuc3R5bGUzIGhlYWRlci5tYWpvciBoNCwgLndyYXBwZXIuc3R5bGUzIGhlYWRlci5tYWpvciBoNSwgLndyYXBwZXIuc3R5bGUzIGhlYWRlci5tYWpvciBoNiB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMyBoZWFkZXIubWFqb3IgcCB7XG5cdFx0XHRcdGNvbG9yOiAjZDNkNGU0O1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgbGFiZWwge1xuXHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcblx0XHRcdC53cmFwcGVyLnN0eWxlMyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgc2VsZWN0LFxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIHRleHRhcmVhIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMyBzZWxlY3Qge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ3BhdGggZD0nTTkuNCwxMi4zbDEwLjQsMTAuNGwxMC40LTEwLjRjMC4yLTAuMiwwLjUtMC40LDAuOS0wLjRjMC4zLDAsMC42LDAuMSwwLjksMC40bDMuMywzLjNjMC4yLDAuMiwwLjQsMC41LDAuNCwwLjkgYzAsMC40LTAuMSwwLjYtMC40LDAuOUwyMC43LDMxLjljLTAuMiwwLjItMC41LDAuNC0wLjksMC40Yy0wLjMsMC0wLjYtMC4xLTAuOS0wLjRMNC4zLDE3LjNjLTAuMi0wLjItMC40LTAuNS0wLjQtMC45IGMwLTAuNCwwLjEtMC42LDAuNC0wLjlsMy4zLTMuM2MwLjItMC4yLDAuNS0wLjQsMC45LTAuNFM5LjEsMTIuMSw5LjQsMTIuM3onIGZpbGw9J3JnYmEoMCwgMCwgMCwgMC4xMjUpJyAvJTNFJTNDL3N2ZyUzRVwiKTtcblx0XHRcdH1cblxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTMgc2VsZWN0IG9wdGlvbiB7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzUwNTM5Mztcblx0XHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwsXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xuXHRcdFx0XHRjb2xvcjogI2QzZDRlNDtcblx0XHRcdH1cblxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTMgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcblx0XHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHRcdFx0XHRjb2xvcjogIzUwNTM5Mztcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0XHRcdGNvbG9yOiAjYjliYWQ0ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMyA6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0XHRcdGNvbG9yOiAjYjliYWQ0ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMyA6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdFx0XHRjb2xvcjogI2I5YmFkNCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0XHRcdGNvbG9yOiAjYjliYWQ0ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMyAuZm9ybWVyaXplLXBsYWNlaG9sZGVyIHtcblx0XHRcdFx0Y29sb3I6ICNiOWJhZDQgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIC5pY29uLm1ham9yIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIHVsLmFsdCBsaSB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMyB0YWJsZSB0Ym9keSB0ciB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHR9XG5cblx0XHRcdFx0LndyYXBwZXIuc3R5bGUzIHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCgybiArIDEpIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcblx0XHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTMgdGFibGUgdGgge1xuXHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIHRhYmxlIHRoZWFkIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIHRhYmxlIHRmb290IHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIHRhYmxlLmFsdCB0Ym9keSB0ciB0ZCB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlMyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcblx0XHRcdC53cmFwcGVyLnN0eWxlMyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuXHRcdFx0LndyYXBwZXIuc3R5bGUzIGJ1dHRvbixcblx0XHRcdC53cmFwcGVyLnN0eWxlMyAuYnV0dG9uIHtcblx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuXHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdH1cblxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTMgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3Zlcixcblx0XHRcdFx0LndyYXBwZXIuc3R5bGUzIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3Zlcixcblx0XHRcdFx0LndyYXBwZXIuc3R5bGUzIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMyBidXR0b246aG92ZXIsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMyAuYnV0dG9uOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMyBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZSxcblx0XHRcdFx0LndyYXBwZXIuc3R5bGUzIGlucHV0W3R5cGU9XCJyZXNldFwiXTphY3RpdmUsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmFjdGl2ZSxcblx0XHRcdFx0LndyYXBwZXIuc3R5bGUzIGJ1dHRvbjphY3RpdmUsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlMyAuYnV0dG9uOmFjdGl2ZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG5cblx0XHRcdFx0LndyYXBwZXIuc3R5bGUzIC5mZWF0dXJlcyBsaSB7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0LndyYXBwZXIuc3R5bGU0IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdH1cblxuXHRcdC53cmFwcGVyLnN0eWxlNSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0Y29sb3I6ICM0RTQ4NTI7XG5cdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgc3Ryb25nLCAud3JhcHBlci5zdHlsZTUgYiB7XG5cdFx0XHRcdGNvbG9yOiAjMkUzODQyO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgaDIsIC53cmFwcGVyLnN0eWxlNSBoMywgLndyYXBwZXIuc3R5bGU1IGg0LCAud3JhcHBlci5zdHlsZTUgaDUsIC53cmFwcGVyLnN0eWxlNSBoNiB7XG5cdFx0XHRcdGNvbG9yOiAjMkUzODQyO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgaHIge1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICNkZmRmZGY7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlNSBibG9ja3F1b3RlIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZGZkZmRmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgY29kZSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMzc1KTtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGU1IGhlYWRlciBwIHtcblx0XHRcdFx0Y29sb3I6ICM4RTg4OTI7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlNSBoZWFkZXIubWFqb3IgaDIsIC53cmFwcGVyLnN0eWxlNSBoZWFkZXIubWFqb3IgaDMsIC53cmFwcGVyLnN0eWxlNSBoZWFkZXIubWFqb3IgaDQsIC53cmFwcGVyLnN0eWxlNSBoZWFkZXIubWFqb3IgaDUsIC53cmFwcGVyLnN0eWxlNSBoZWFkZXIubWFqb3IgaDYge1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICNkZmRmZGY7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlNSBoZWFkZXIubWFqb3IgcCB7XG5cdFx0XHRcdGNvbG9yOiAjNEU0ODUyO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgbGFiZWwge1xuXHRcdFx0XHRjb2xvcjogIzJFMzg0Mjtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGU1IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuXHRcdFx0LndyYXBwZXIuc3R5bGU1IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcblx0XHRcdC53cmFwcGVyLnN0eWxlNSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgc2VsZWN0LFxuXHRcdFx0LndyYXBwZXIuc3R5bGU1IHRleHRhcmVhIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzNzUpO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgc2VsZWN0IHtcblx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NwYXRoIGQ9J005LjQsMTIuM2wxMC40LDEwLjRsMTAuNC0xMC40YzAuMi0wLjIsMC41LTAuNCwwLjktMC40YzAuMywwLDAuNiwwLjEsMC45LDAuNGwzLjMsMy4zYzAuMiwwLjIsMC40LDAuNSwwLjQsMC45IGMwLDAuNC0wLjEsMC42LTAuNCwwLjlMMjAuNywzMS45Yy0wLjIsMC4yLTAuNSwwLjQtMC45LDAuNGMtMC4zLDAtMC42LTAuMS0wLjktMC40TDQuMywxNy4zYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuOSBjMC0wLjQsMC4xLTAuNiwwLjQtMC45bDMuMy0zLjNjMC4yLTAuMiwwLjUtMC40LDAuOS0wLjRTOS4xLDEyLjEsOS40LDEyLjN6JyBmaWxsPSclMjNkZmRmZGYnIC8lM0UlM0Mvc3ZnJTNFXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlNSBzZWxlY3Qgb3B0aW9uIHtcblx0XHRcdFx0XHRjb2xvcjogIzJFMzg0Mjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHRcdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlNSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCxcblx0XHRcdC53cmFwcGVyLnN0eWxlNSBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XG5cdFx0XHRcdGNvbG9yOiAjNEU0ODUyO1xuXHRcdFx0fVxuXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlNSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlNSBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMzc1KTtcblx0XHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjMkUzODQyO1xuXHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGU1IDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0XHRcdGNvbG9yOiAjOEU4ODkyICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlNSA6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0XHRcdGNvbG9yOiAjOEU4ODkyICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlNSA6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdFx0XHRjb2xvcjogIzhFODg5MiAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0XHRcdGNvbG9yOiAjOEU4ODkyICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlNSAuZm9ybWVyaXplLXBsYWNlaG9sZGVyIHtcblx0XHRcdFx0Y29sb3I6ICM4RTg4OTIgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGU1IC5pY29uLm1ham9yIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZGZkZmRmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgdWwuYWx0IGxpIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZGZkZmRmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgdGFibGUgdGJvZHkgdHIge1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICNkZmRmZGY7XG5cdFx0XHR9XG5cblx0XHRcdFx0LndyYXBwZXIuc3R5bGU1IHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCgybiArIDEpIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDM3NSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGU1IHRhYmxlIHRoIHtcblx0XHRcdFx0Y29sb3I6ICMyRTM4NDI7XG5cdFx0XHR9XG5cblx0XHRcdC53cmFwcGVyLnN0eWxlNSB0YWJsZSB0aGVhZCB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogI2RmZGZkZjtcblx0XHRcdH1cblxuXHRcdFx0LndyYXBwZXIuc3R5bGU1IHRhYmxlIHRmb290IHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZGZkZmRmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgdGFibGUuYWx0IHRib2R5IHRyIHRkIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZGZkZmRmO1xuXHRcdFx0fVxuXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcblx0XHRcdC53cmFwcGVyLnN0eWxlNSBpbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcblx0XHRcdC53cmFwcGVyLnN0eWxlNSBidXR0b24sXG5cdFx0XHQud3JhcHBlci5zdHlsZTUgLmJ1dHRvbiB7XG5cdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjZGZkZmRmO1xuXHRcdFx0XHRjb2xvcjogIzJFMzg0Mjtcblx0XHRcdH1cblxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3Zlcixcblx0XHRcdFx0LndyYXBwZXIuc3R5bGU1IGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3Zlcixcblx0XHRcdFx0LndyYXBwZXIuc3R5bGU1IGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlNSBidXR0b246aG92ZXIsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlNSAuYnV0dG9uOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDM3NSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTphY3RpdmUsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlNSBpbnB1dFt0eXBlPVwicmVzZXRcIl06YWN0aXZlLFxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTUgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTphY3RpdmUsXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlNSBidXR0b246YWN0aXZlLFxuXHRcdFx0XHQud3JhcHBlci5zdHlsZTUgLmJ1dHRvbjphY3RpdmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuXG5cdFx0XHRcdC53cmFwcGVyLnN0eWxlNSAuZmVhdHVyZXMgbGkge1xuXHRcdFx0XHRcdGJvcmRlci10b3AtY29sb3I6ICNkZmRmZGY7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcblxuXHRcdFx0LndyYXBwZXIge1xuXHRcdFx0XHRwYWRkaW5nOiA0ZW0gM2VtIDJlbSAzZW0gO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0LndyYXBwZXIge1xuXHRcdFx0XHRwYWRkaW5nOiAzZW0gMmVtIDFlbSAyZW0gO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG4vKiBQYWdlIFdyYXBwZXIgKyBNZW51ICovXG5cblx0I3BhZ2Utd3JhcHBlciB7XG5cdFx0LW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xuXHRcdC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHBhZGRpbmctdG9wOiAzZW07XG5cdH1cblxuXHRcdCNwYWdlLXdyYXBwZXI6YmVmb3JlIHtcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdHotaW5kZXg6IDEwMDAxO1xuXHRcdH1cblxuXHQjbWVudSB7XG5cdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBlbSk7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBlbSk7XG5cdFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMGVtKTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBlbSk7XG5cdFx0LW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjVzIGVhc2U7XG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2U7XG5cdFx0LW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC41cyBlYXNlO1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG5cdFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXHRcdGJhY2tncm91bmQ6ICMyMWIyYTY7XG5cdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdG1heC13aWR0aDogODAlO1xuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdFx0cGFkZGluZzogM2VtIDJlbTtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdHdpZHRoOiAyMGVtO1xuXHRcdHotaW5kZXg6IDEwMDAyO1xuXHR9XG5cblx0XHQjbWVudSB1bCB7XG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHR9XG5cblx0XHRcdCNtZW51IHVsID4gbGkge1xuXHRcdFx0XHRib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHRcdG1hcmdpbjogMC41ZW0gMCAwIDA7XG5cdFx0XHRcdHBhZGRpbmc6IDAuNWVtIDAgMCAwO1xuXHRcdFx0fVxuXG5cdFx0XHRcdCNtZW51IHVsID4gbGk6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCNtZW51IHVsID4gbGkgPiBhIHtcblx0XHRcdFx0XHRib3JkZXI6IDA7XG5cdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4yMjVlbTtcblx0XHRcdFx0XHRvdXRsaW5lOiAwO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuXG5cdFx0XHRcdFx0XHQjbWVudSB1bCA+IGxpID4gYSB7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHQjbWVudSAuY2xvc2Uge1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hvbWUvY3NzL2ltYWdlcy9jbG9zZS5zdmdcIik7XG5cdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0Ljg1ZW0gMWVtO1xuXHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdGJvcmRlcjogMDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0aGVpZ2h0OiAzZW07XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHR3aWR0aDogN2VtO1xuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG5cblx0XHRcdCNtZW51IHtcblx0XHRcdFx0cGFkZGluZzogM2VtIDEuNWVtO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdGJvZHkuaXMtbWVudS12aXNpYmxlICNwYWdlLXdyYXBwZXIge1xuXHRcdG9wYWNpdHk6IDAuMzU7XG5cdH1cblxuXHRcdGJvZHkuaXMtbWVudS12aXNpYmxlICNwYWdlLXdyYXBwZXI6YmVmb3JlIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblxuXHRib2R5LmlzLW1lbnUtdmlzaWJsZSAjbWVudSB7XG5cdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdH1cblxuLyogSGVhZGVyICovXG5cblx0I2hlYWRlciB7XG5cdFx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXHRcdC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblx0XHRiYWNrZ3JvdW5kOiAjMmUzODQyO1xuXHRcdGhlaWdodDogM2VtO1xuXHRcdGxlZnQ6IDA7XG5cdFx0bGluZS1oZWlnaHQ6IDNlbTtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0dG9wOiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHotaW5kZXg6IDEwMDAwO1xuXHR9XG5cblx0XHQjaGVhZGVyIGgxIHtcblx0XHRcdC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuXHRcdFx0LW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuXHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG5cdFx0XHRoZWlnaHQ6IGluaGVyaXQ7XG5cdFx0XHRsZWZ0OiAxLjI1ZW07XG5cdFx0XHRsaW5lLWhlaWdodDogaW5oZXJpdDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHR9XG5cblx0XHRcdCNoZWFkZXIgaDEgYSB7XG5cdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGhlaWdodDogaW5oZXJpdDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XG5cdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0XHRcdCNoZWFkZXIgaDEgYSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHQjaGVhZGVyIG5hdiB7XG5cdFx0XHRoZWlnaHQ6IGluaGVyaXQ7XG5cdFx0XHRsaW5lLWhlaWdodDogaW5oZXJpdDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdH1cblxuXHRcdFx0I2hlYWRlciBuYXYgPiB1bCB7XG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdH1cblxuXHRcdFx0XHQjaGVhZGVyIG5hdiA+IHVsID4gbGkge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQjaGVhZGVyIG5hdiA+IHVsID4gbGkgPiBhIHtcblx0XHRcdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMjI1ZW07XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDEuNWVtO1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCNoZWFkZXIgbmF2ID4gdWwgPiBsaSA+IGEubWVudVRvZ2dsZSB7XG5cdFx0XHRcdFx0XHRcdG91dGxpbmU6IDA7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdCNoZWFkZXIgbmF2ID4gdWwgPiBsaSA+IGEubWVudVRvZ2dsZTphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hvbWUvY3NzL2ltYWdlcy9iYXJzLnN2Z1wiKTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzLjc1ZW07XG5cdFx0XHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMmVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0XHRcdFx0XHRcdCNoZWFkZXIgbmF2ID4gdWwgPiBsaSA+IGEubWVudVRvZ2dsZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDEuNWVtO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0I2hlYWRlciBuYXYgPiB1bCA+IGxpID4gYS5tZW51VG9nZ2xlIHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0XHRcdFx0XHQjaGVhZGVyIG5hdiA+IHVsID4gbGkgPiBhIHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAxLjVlbTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQjaGVhZGVyIG5hdiA+IHVsID4gbGk6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0I2hlYWRlci5hbHQge1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0XHQjaGVhZGVyLmFsdCBoMSB7XG5cdFx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0fVxuXG4vKiBCYW5uZXIgKi9cblxuXHQjYmFubmVyIHtcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdGhlaWdodDogMTAwdmg7XG5cdFx0bWluLWhlaWdodDogMzVlbTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHRcdCNiYW5uZXIgaDIge1xuXHRcdFx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdFx0LW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjVzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlO1xuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlO1xuXHRcdFx0LW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcblx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0Zm9udC1zaXplOiAxLjc1ZW07XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0cGFkZGluZzogMC4zNWVtIDFlbTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0fVxuXG5cdFx0XHQjYmFubmVyIGgyOmJlZm9yZSwgI2Jhbm5lciBoMjphZnRlciB7XG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC44NXMgZWFzZTtcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjg1cyBlYXNlO1xuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogd2lkdGggMC44NXMgZWFzZTtcblx0XHRcdFx0dHJhbnNpdGlvbjogd2lkdGggMC44NXMgZWFzZTtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcblx0XHRcdFx0LW1zLXRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xuXHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRoZWlnaHQ6IDJweDtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblxuXHRcdFx0I2Jhbm5lciBoMjpiZWZvcmUge1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR9XG5cblx0XHRcdCNiYW5uZXIgaDI6YWZ0ZXIge1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0fVxuXG5cdFx0I2Jhbm5lciBwIHtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjIyNWVtO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHR9XG5cblx0XHRcdCNiYW5uZXIgcCBhIHtcblx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0XHR9XG5cblx0XHQjYmFubmVyIC5tb3JlIHtcblx0XHRcdC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC43NXMgZWFzZSwgb3BhY2l0eSAwLjc1cyBlYXNlO1xuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjc1cyBlYXNlLCBvcGFjaXR5IDAuNzVzIGVhc2U7XG5cdFx0XHQtbXMtdHJhbnNpdGlvbjogLW1zLXRyYW5zZm9ybSAwLjc1cyBlYXNlLCBvcGFjaXR5IDAuNzVzIGVhc2U7XG5cdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43NXMgZWFzZSwgb3BhY2l0eSAwLjc1cyBlYXNlO1xuXHRcdFx0LW1vei10cmFuc2l0aW9uLWRlbGF5OiAzLjVzO1xuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAzLjVzO1xuXHRcdFx0LW1zLXRyYW5zaXRpb24tZGVsYXk6IDMuNXM7XG5cdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAzLjVzO1xuXHRcdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRoZWlnaHQ6IDguNWVtO1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMjI1ZW07XG5cdFx0XHRtYXJnaW4tbGVmdDogLTguNWVtO1xuXHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdG91dGxpbmU6IDA7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDAuMjI1ZW07XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0d2lkdGg6IDE2ZW07XG5cdFx0XHR6LWluZGV4OiAxO1xuXHRcdH1cblxuXHRcdFx0I2Jhbm5lciAubW9yZTphZnRlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2Nzcy9pbWFnZXMvYXJyb3cuc3ZnXCIpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0Ym90dG9tOiA0ZW07XG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0aGVpZ2h0OiAxLjVlbTtcblx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAwIC0wLjc1ZW07XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6IDEuNWVtO1xuXHRcdFx0fVxuXG5cdFx0I2Jhbm5lcjphZnRlciB7XG5cdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRcdC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlLWluLW91dDtcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlLWluLW91dDtcblx0XHRcdC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2UtaW4tb3V0O1xuXHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlLWluLW91dDtcblx0XHRcdC1tb3otdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDEuMjVzO1xuXHRcdFx0LW1zLXRyYW5zaXRpb24tZGVsYXk6IDEuMjVzO1xuXHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdGJhY2tncm91bmQ6ICMyZTM4NDI7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0I2Jhbm5lciB7XG5cdFx0XHRcdHBhZGRpbmc6IDdlbSAzZW0gNWVtIDNlbSA7XG5cdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0bWluLWhlaWdodDogMDtcblx0XHRcdH1cblxuXHRcdFx0XHQjYmFubmVyIGgyIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMjVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCNiYW5uZXIgYnIge1xuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQjYmFubmVyIC5tb3JlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cblx0XHR9XG5cblx0Ym9keS5pcy1wcmVsb2FkICNiYW5uZXIgaDIge1xuXHRcdC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG5cdFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0XHRib2R5LmlzLXByZWxvYWQgI2Jhbm5lciBoMjpiZWZvcmUsIGJvZHkuaXMtcHJlbG9hZCAjYmFubmVyIGgyOmFmdGVyIHtcblx0XHRcdHdpZHRoOiAwO1xuXHRcdH1cblxuXHRib2R5LmlzLXByZWxvYWQgI2Jhbm5lciAubW9yZSB7XG5cdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOC41ZW0pO1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDguNWVtKTtcblx0XHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDguNWVtKTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOC41ZW0pO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblxuXHRib2R5LmlzLXByZWxvYWQgI2Jhbm5lcjphZnRlciB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG4vKiBDVEEgKi9cblxuXHQjY3RhIC5pbm5lciB7XG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdG1heC13aWR0aDogNDVlbTtcblx0fVxuXG5cdFx0I2N0YSAuaW5uZXIgaGVhZGVyIHtcblx0XHRcdC1tb3otb3JkZXI6IDE7XG5cdFx0XHQtd2Via2l0LW9yZGVyOiAxO1xuXHRcdFx0LW1zLW9yZGVyOiAxO1xuXHRcdFx0b3JkZXI6IDE7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAzZW07XG5cdFx0XHR3aWR0aDogNzAlO1xuXHRcdH1cblxuXHRcdFx0I2N0YSAuaW5uZXIgaGVhZGVyIHAge1xuXHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdH1cblxuXHRcdCNjdGEgLmlubmVyIC5hY3Rpb25zIHtcblx0XHRcdC1tb3otb3JkZXI6IDI7XG5cdFx0XHQtd2Via2l0LW9yZGVyOiAyO1xuXHRcdFx0LW1zLW9yZGVyOiAyO1xuXHRcdFx0b3JkZXI6IDI7XG5cdFx0XHR3aWR0aDogMzAlO1xuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG5cblx0XHRcdCNjdGEgLmlubmVyIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0XHQjY3RhIC5pbm5lciBoZWFkZXIge1xuXHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQjY3RhIC5pbm5lciAuYWN0aW9ucyB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdG1heC13aWR0aDogMjBlbTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0I2N0YSAuaW5uZXIgLmFjdGlvbnMge1xuXHRcdFx0XHRtYXgtd2lkdGg6IG5vbmU7XG5cdFx0XHR9XG5cblx0XHR9XG5cbi8qIE1haW4gKi9cblxuXHQjbWFpbiA+IGhlYWRlciB7XG5cdFx0cGFkZGluZzogMTJlbSAwIDEwZW0gMCA7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2ltYWdlcy9iYW5uZXIuanBnXCIpO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwLjUpLCByZ2JhKDAsMCwwLDAuNSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaG9tZS9pbWFnZXMvYmFubmVyLmpwZ1wiKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwLjUpLCByZ2JhKDAsMCwwLDAuNSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaG9tZS9pbWFnZXMvYmFubmVyLmpwZ1wiKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2ltYWdlcy9iYW5uZXIuanBnXCIpO1xuXHRcdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0XHQjbWFpbiA+IGhlYWRlciBoMiB7XG5cdFx0XHRmb250LXNpemU6IDEuNzVlbTtcblx0XHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdFx0fVxuXG5cdFx0I21haW4gPiBoZWFkZXIgcCB7XG5cdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjIyNWVtO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdHRvcDogMDtcblx0XHR9XG5cblx0XHRcdCNtYWluID4gaGVhZGVyIHAgYSB7XG5cdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xuXHRcdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG5cblx0XHRcdCNtYWluID4gaGVhZGVyIHtcblx0XHRcdFx0cGFkZGluZzogMTBlbSAwIDhlbSAwIDtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuXG5cdFx0XHQjbWFpbiA+IGhlYWRlciB7XG5cdFx0XHRcdHBhZGRpbmc6IDhlbSAzZW0gNmVtIDNlbSA7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuXG5cdFx0XHQjbWFpbiA+IGhlYWRlciB7XG5cdFx0XHRcdHBhZGRpbmc6IDEwZW0gM2VtIDhlbSAzZW0gO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0I21haW4gPiBoZWFkZXIge1xuXHRcdFx0XHRwYWRkaW5nOiA1ZW0gM2VtIDNlbSAzZW0gO1xuXHRcdFx0fVxuXG5cdFx0XHRcdCNtYWluID4gaGVhZGVyIGgyIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMjVlbTtcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRcdFx0fVxuXG5cdFx0fVxuXG5cdGJvZHkuaXMtbW9iaWxlICNtYWluID4gaGVhZGVyIHtcblx0XHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcblx0fVxuXG4vKiBGb290ZXIgKi9cblxuXHQjZm9vdGVyIHtcblx0XHRwYWRkaW5nOiA2ZW0gMCA0ZW0gMCA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzFkMjQyYTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHRcdCNmb290ZXIgLmljb25zIHtcblx0XHRcdGZvbnQtc2l6ZTogMS4yNWVtO1xuXHRcdH1cblxuXHRcdFx0I2Zvb3RlciAuaWNvbnMgYSB7XG5cdFx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdFx0XHR9XG5cblx0XHRcdFx0I2Zvb3RlciAuaWNvbnMgYTpob3ZlciB7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdH1cblxuXHRcdCNmb290ZXIgLmNvcHlyaWdodCB7XG5cdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjIyNWVtO1xuXHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdH1cblxuXHRcdFx0I2Zvb3RlciAuY29weXJpZ2h0IGxpIHtcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDFlbTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDFlbTtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxZW07XG5cdFx0XHR9XG5cblx0XHRcdFx0I2Zvb3RlciAuY29weXJpZ2h0IGxpOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRib3JkZXItbGVmdDogMDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQjZm9vdGVyIC5jb3B5cmlnaHQgbGkgYSB7XG5cdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRcdCNmb290ZXIgLmNvcHlyaWdodCBsaSBhOmhvdmVyIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG5cdFx0XHRcdFx0I2Zvb3RlciAuY29weXJpZ2h0IGxpIHtcblx0XHRcdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNjVlbTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNWVtIDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG5cblx0XHRcdCNmb290ZXIge1xuXHRcdFx0XHRwYWRkaW5nOiA0ZW0gM2VtIDJlbSAzZW0gO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0I2Zvb3RlciB7XG5cdFx0XHRcdHBhZGRpbmc6IDNlbSAyZW0gMWVtIDJlbSA7XG5cdFx0XHR9XG5cblx0XHR9XG5cbi8qIExhbmRpbmcgKi9cblxuXHRib2R5LmxhbmRpbmcgI3BhZ2Utd3JhcHBlciB7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2ltYWdlcy9iYW5uZXIuanBnXCIpO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwLjUpLCByZ2JhKDAsMCwwLDAuNSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaG9tZS9pbWFnZXMvYmFubmVyLmpwZ1wiKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwLjUpLCByZ2JhKDAsMCwwLDAuNSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaG9tZS9pbWFnZXMvYmFubmVyLmpwZ1wiKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2ltYWdlcy9iYW5uZXIuanBnXCIpO1xuXHRcdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0cGFkZGluZy10b3A6IDA7XG5cdH1cblxuXHRib2R5LmxhbmRpbmcgI2Zvb3RlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgMzYsIDQyLCAwLjkpO1xuXHR9XG5cblx0Ym9keS5pcy1tb2JpbGUubGFuZGluZyAjcGFnZS13cmFwcGVyIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHR9XG5cblx0Ym9keS5pcy1tb2JpbGUubGFuZGluZyAjYmFubmVyLFxuXHRib2R5LmlzLW1vYmlsZS5sYW5kaW5nIC53cmFwcGVyLnN0eWxlNCB7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2ltYWdlcy9iYW5uZXIuanBnXCIpO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwLjUpLCByZ2JhKDAsMCwwLDAuNSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaG9tZS9pbWFnZXMvYmFubmVyLmpwZ1wiKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwLjUpLCByZ2JhKDAsMCwwLDAuNSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaG9tZS9pbWFnZXMvYmFubmVyLmpwZ1wiKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2ltYWdlcy9iYW5uZXIuanBnXCIpO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHR9XG5cblx0Ym9keS5pcy1tb2JpbGUubGFuZGluZyAjZm9vdGVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyNDJhO1xuXHR9XG5cblx0Ym9keS5pcy1wcmVsb2FkICNiYW5uZXIgaDIge1xuXHRcdC1tb3otdHJhbnNmb3JtOiBub25lO1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuXHRcdC1tcy10cmFuc2Zvcm06IG5vbmU7XG5cdFx0dHJhbnNmb3JtOiBub25lO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHRcdGJvZHkuaXMtcHJlbG9hZCAjYmFubmVyIGgyOmJlZm9yZSwgYm9keS5pcy1wcmVsb2FkICNiYW5uZXIgaDI6YWZ0ZXIge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXG5cdGJvZHkuaXMtcHJlbG9hZCAjYmFubmVyIC5tb3JlIHtcblx0XHQtbW96LXRyYW5zZm9ybTogbm9uZTtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcblx0XHQtbXMtdHJhbnNmb3JtOiBub25lO1xuXHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Ym9keS5pcy1wcmVsb2FkICNiYW5uZXI6YWZ0ZXIge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH0iLCIvKiFcbiAqIEZvbnQgQXdlc29tZSBGcmVlIDUuOS4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxuICovXG4uZmEsLmZhYiwuZmFsLC5mYXIsLmZhc3stbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtcmVuZGVyaW5nOmF1dG87bGluZS1oZWlnaHQ6MX0uZmEtbGd7Zm9udC1zaXplOjEuMzMzMzNlbTtsaW5lLWhlaWdodDouNzVlbTt2ZXJ0aWNhbC1hbGlnbjotLjA2NjdlbX0uZmEteHN7Zm9udC1zaXplOi43NWVtfS5mYS1zbXtmb250LXNpemU6Ljg3NWVtfS5mYS0xeHtmb250LXNpemU6MWVtfS5mYS0yeHtmb250LXNpemU6MmVtfS5mYS0zeHtmb250LXNpemU6M2VtfS5mYS00eHtmb250LXNpemU6NGVtfS5mYS01eHtmb250LXNpemU6NWVtfS5mYS02eHtmb250LXNpemU6NmVtfS5mYS03eHtmb250LXNpemU6N2VtfS5mYS04eHtmb250LXNpemU6OGVtfS5mYS05eHtmb250LXNpemU6OWVtfS5mYS0xMHh7Zm9udC1zaXplOjEwZW19LmZhLWZ3e3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEuMjVlbX0uZmEtdWx7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luLWxlZnQ6Mi41ZW07cGFkZGluZy1sZWZ0OjB9LmZhLXVsPmxpe3Bvc2l0aW9uOnJlbGF0aXZlfS5mYS1saXtsZWZ0Oi0yZW07cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MmVtO2xpbmUtaGVpZ2h0OmluaGVyaXR9LmZhLWJvcmRlcntib3JkZXI6LjA4ZW0gc29saWQgI2VlZTtib3JkZXItcmFkaXVzOi4xZW07cGFkZGluZzouMmVtIC4yNWVtIC4xNWVtfS5mYS1wdWxsLWxlZnR7ZmxvYXQ6bGVmdH0uZmEtcHVsbC1yaWdodHtmbG9hdDpyaWdodH0uZmEuZmEtcHVsbC1sZWZ0LC5mYWIuZmEtcHVsbC1sZWZ0LC5mYWwuZmEtcHVsbC1sZWZ0LC5mYXIuZmEtcHVsbC1sZWZ0LC5mYXMuZmEtcHVsbC1sZWZ0e21hcmdpbi1yaWdodDouM2VtfS5mYS5mYS1wdWxsLXJpZ2h0LC5mYWIuZmEtcHVsbC1yaWdodCwuZmFsLmZhLXB1bGwtcmlnaHQsLmZhci5mYS1wdWxsLXJpZ2h0LC5mYXMuZmEtcHVsbC1yaWdodHttYXJnaW4tbGVmdDouM2VtfS5mYS1zcGlue2FuaW1hdGlvbjpmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcn0uZmEtcHVsc2V7YW5pbWF0aW9uOmZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCl9QGtleWZyYW1lcyBmYS1zcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fS5mYS1yb3RhdGUtOTB7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXCI7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LmZhLXJvdGF0ZS0xODB7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpXCI7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5mYS1yb3RhdGUtMjcwey1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVwiO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0uZmEtZmxpcC1ob3Jpem9udGFsey1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcIjt0cmFuc2Zvcm06c2NhbGVYKC0xKX0uZmEtZmxpcC12ZXJ0aWNhbHt0cmFuc2Zvcm06c2NhbGVZKC0xKX0uZmEtZmxpcC1ib3RoLC5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCwuZmEtZmxpcC12ZXJ0aWNhbHstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXCJ9LmZhLWZsaXAtYm90aCwuZmEtZmxpcC1ob3Jpem9udGFsLmZhLWZsaXAtdmVydGljYWx7dHJhbnNmb3JtOnNjYWxlKC0xKX06cm9vdCAuZmEtZmxpcC1ib3RoLDpyb290IC5mYS1mbGlwLWhvcml6b250YWwsOnJvb3QgLmZhLWZsaXAtdmVydGljYWwsOnJvb3QgLmZhLXJvdGF0ZS05MCw6cm9vdCAuZmEtcm90YXRlLTE4MCw6cm9vdCAuZmEtcm90YXRlLTI3MHtmaWx0ZXI6bm9uZX0uZmEtc3RhY2t7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjJlbTtsaW5lLWhlaWdodDoyZW07cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjIuNWVtfS5mYS1zdGFjay0xeCwuZmEtc3RhY2stMnh7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCV9LmZhLXN0YWNrLTF4e2xpbmUtaGVpZ2h0OmluaGVyaXR9LmZhLXN0YWNrLTJ4e2ZvbnQtc2l6ZToyZW19LmZhLWludmVyc2V7Y29sb3I6I2ZmZn0uZmEtNTAwcHg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNmVcIn0uZmEtYWNjZXNzaWJsZS1pY29uOmJlZm9yZXtjb250ZW50OlwiXFxmMzY4XCJ9LmZhLWFjY3Vzb2Z0OmJlZm9yZXtjb250ZW50OlwiXFxmMzY5XCJ9LmZhLWFjcXVpc2l0aW9ucy1pbmNvcnBvcmF0ZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2YWZcIn0uZmEtYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NDFcIn0uZmEtYWRkcmVzcy1ib29rOmJlZm9yZXtjb250ZW50OlwiXFxmMmI5XCJ9LmZhLWFkZHJlc3MtY2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjJiYlwifS5mYS1hZGp1c3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDJcIn0uZmEtYWRuOmJlZm9yZXtjb250ZW50OlwiXFxmMTcwXCJ9LmZhLWFkb2JlOmJlZm9yZXtjb250ZW50OlwiXFxmNzc4XCJ9LmZhLWFkdmVyc2FsOmJlZm9yZXtjb250ZW50OlwiXFxmMzZhXCJ9LmZhLWFmZmlsaWF0ZXRoZW1lOmJlZm9yZXtjb250ZW50OlwiXFxmMzZiXCJ9LmZhLWFpci1mcmVzaGVuZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ZDBcIn0uZmEtYWlyYm5iOmJlZm9yZXtjb250ZW50OlwiXFxmODM0XCJ9LmZhLWFsZ29saWE6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNmNcIn0uZmEtYWxpZ24tY2VudGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMDM3XCJ9LmZhLWFsaWduLWp1c3RpZnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzlcIn0uZmEtYWxpZ24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjAzNlwifS5mYS1hbGlnbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjAzOFwifS5mYS1hbGlwYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NDJcIn0uZmEtYWxsZXJnaWVzOmJlZm9yZXtjb250ZW50OlwiXFxmNDYxXCJ9LmZhLWFtYXpvbjpiZWZvcmV7Y29udGVudDpcIlxcZjI3MFwifS5mYS1hbWF6b24tcGF5OmJlZm9yZXtjb250ZW50OlwiXFxmNDJjXCJ9LmZhLWFtYnVsYW5jZTpiZWZvcmV7Y29udGVudDpcIlxcZjBmOVwifS5mYS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmV7Y29udGVudDpcIlxcZjJhM1wifS5mYS1hbWlsaWE6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNmRcIn0uZmEtYW5jaG9yOmJlZm9yZXtjb250ZW50OlwiXFxmMTNkXCJ9LmZhLWFuZHJvaWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxN2JcIn0uZmEtYW5nZWxsaXN0OmJlZm9yZXtjb250ZW50OlwiXFxmMjA5XCJ9LmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTAzXCJ9LmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMTAwXCJ9LmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjEwMVwifS5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMDJcIn0uZmEtYW5nbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjEwN1wifS5mYS1hbmdsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMTA0XCJ9LmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMTA1XCJ9LmZhLWFuZ2xlLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTA2XCJ9LmZhLWFuZ3J5OmJlZm9yZXtjb250ZW50OlwiXFxmNTU2XCJ9LmZhLWFuZ3J5Y3JlYXRpdmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNmVcIn0uZmEtYW5ndWxhcjpiZWZvcmV7Y29udGVudDpcIlxcZjQyMFwifS5mYS1hbmtoOmJlZm9yZXtjb250ZW50OlwiXFxmNjQ0XCJ9LmZhLWFwcC1zdG9yZTpiZWZvcmV7Y29udGVudDpcIlxcZjM2ZlwifS5mYS1hcHAtc3RvcmUtaW9zOmJlZm9yZXtjb250ZW50OlwiXFxmMzcwXCJ9LmZhLWFwcGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMzcxXCJ9LmZhLWFwcGxlOmJlZm9yZXtjb250ZW50OlwiXFxmMTc5XCJ9LmZhLWFwcGxlLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjVkMVwifS5mYS1hcHBsZS1wYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MTVcIn0uZmEtYXJjaGl2ZTpiZWZvcmV7Y29udGVudDpcIlxcZjE4N1wifS5mYS1hcmNod2F5OmJlZm9yZXtjb250ZW50OlwiXFxmNTU3XCJ9LmZhLWFycm93LWFsdC1jaXJjbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjM1OFwifS5mYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNTlcIn0uZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjM1YVwifS5mYS1hcnJvdy1hbHQtY2lyY2xlLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMzViXCJ9LmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMGFiXCJ9LmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMGE4XCJ9LmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjBhOVwifS5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYWFcIn0uZmEtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjA2M1wifS5mYS1hcnJvdy1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMDYwXCJ9LmZhLWFycm93LXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMDYxXCJ9LmZhLWFycm93LXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMDYyXCJ9LmZhLWFycm93cy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYjJcIn0uZmEtYXJyb3dzLWFsdC1oOmJlZm9yZXtjb250ZW50OlwiXFxmMzM3XCJ9LmZhLWFycm93cy1hbHQtdjpiZWZvcmV7Y29udGVudDpcIlxcZjMzOFwifS5mYS1hcnRzdGF0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxmNzdhXCJ9LmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmV7Y29udGVudDpcIlxcZjJhMlwifS5mYS1hc3RlcmlzazpiZWZvcmV7Y29udGVudDpcIlxcZjA2OVwifS5mYS1hc3ltbWV0cmlrOmJlZm9yZXtjb250ZW50OlwiXFxmMzcyXCJ9LmZhLWF0OmJlZm9yZXtjb250ZW50OlwiXFxmMWZhXCJ9LmZhLWF0bGFzOmJlZm9yZXtjb250ZW50OlwiXFxmNTU4XCJ9LmZhLWF0bGFzc2lhbjpiZWZvcmV7Y29udGVudDpcIlxcZjc3YlwifS5mYS1hdG9tOmJlZm9yZXtjb250ZW50OlwiXFxmNWQyXCJ9LmZhLWF1ZGlibGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNzNcIn0uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWVcIn0uZmEtYXV0b3ByZWZpeGVyOmJlZm9yZXtjb250ZW50OlwiXFxmNDFjXCJ9LmZhLWF2aWFuZXg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNzRcIn0uZmEtYXZpYXRvOmJlZm9yZXtjb250ZW50OlwiXFxmNDIxXCJ9LmZhLWF3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxmNTU5XCJ9LmZhLWF3czpiZWZvcmV7Y29udGVudDpcIlxcZjM3NVwifS5mYS1iYWJ5OmJlZm9yZXtjb250ZW50OlwiXFxmNzdjXCJ9LmZhLWJhYnktY2FycmlhZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3N2RcIn0uZmEtYmFja3NwYWNlOmJlZm9yZXtjb250ZW50OlwiXFxmNTVhXCJ9LmZhLWJhY2t3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMDRhXCJ9LmZhLWJhY29uOmJlZm9yZXtjb250ZW50OlwiXFxmN2U1XCJ9LmZhLWJhbGFuY2Utc2NhbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNGVcIn0uZmEtYmFsYW5jZS1zY2FsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmNTE1XCJ9LmZhLWJhbGFuY2Utc2NhbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MTZcIn0uZmEtYmFuOmJlZm9yZXtjb250ZW50OlwiXFxmMDVlXCJ9LmZhLWJhbmQtYWlkOmJlZm9yZXtjb250ZW50OlwiXFxmNDYyXCJ9LmZhLWJhbmRjYW1wOmJlZm9yZXtjb250ZW50OlwiXFxmMmQ1XCJ9LmZhLWJhcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMmFcIn0uZmEtYmFyczpiZWZvcmV7Y29udGVudDpcIlxcZjBjOVwifS5mYS1iYXNlYmFsbC1iYWxsOmJlZm9yZXtjb250ZW50OlwiXFxmNDMzXCJ9LmZhLWJhc2tldGJhbGwtYmFsbDpiZWZvcmV7Y29udGVudDpcIlxcZjQzNFwifS5mYS1iYXRoOmJlZm9yZXtjb250ZW50OlwiXFxmMmNkXCJ9LmZhLWJhdHRlcnktZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNDRcIn0uZmEtYmF0dGVyeS1mdWxsOmJlZm9yZXtjb250ZW50OlwiXFxmMjQwXCJ9LmZhLWJhdHRlcnktaGFsZjpiZWZvcmV7Y29udGVudDpcIlxcZjI0MlwifS5mYS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNDNcIn0uZmEtYmF0dGVyeS10aHJlZS1xdWFydGVyczpiZWZvcmV7Y29udGVudDpcIlxcZjI0MVwifS5mYS1iYXR0bGUtbmV0OmJlZm9yZXtjb250ZW50OlwiXFxmODM1XCJ9LmZhLWJlZDpiZWZvcmV7Y29udGVudDpcIlxcZjIzNlwifS5mYS1iZWVyOmJlZm9yZXtjb250ZW50OlwiXFxmMGZjXCJ9LmZhLWJlaGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjRcIn0uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjVcIn0uZmEtYmVsbDpiZWZvcmV7Y29udGVudDpcIlxcZjBmM1wifS5mYS1iZWxsLXNsYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmMWY2XCJ9LmZhLWJlemllci1jdXJ2ZTpiZWZvcmV7Y29udGVudDpcIlxcZjU1YlwifS5mYS1iaWJsZTpiZWZvcmV7Y29udGVudDpcIlxcZjY0N1wifS5mYS1iaWN5Y2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMjA2XCJ9LmZhLWJpa2luZzpiZWZvcmV7Y29udGVudDpcIlxcZjg0YVwifS5mYS1iaW1vYmplY3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNzhcIn0uZmEtYmlub2N1bGFyczpiZWZvcmV7Y29udGVudDpcIlxcZjFlNVwifS5mYS1iaW9oYXphcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3ODBcIn0uZmEtYmlydGhkYXktY2FrZTpiZWZvcmV7Y29udGVudDpcIlxcZjFmZFwifS5mYS1iaXRidWNrZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzFcIn0uZmEtYml0Y29pbjpiZWZvcmV7Y29udGVudDpcIlxcZjM3OVwifS5mYS1iaXR5OmJlZm9yZXtjb250ZW50OlwiXFxmMzdhXCJ9LmZhLWJsYWNrLXRpZTpiZWZvcmV7Y29udGVudDpcIlxcZjI3ZVwifS5mYS1ibGFja2JlcnJ5OmJlZm9yZXtjb250ZW50OlwiXFxmMzdiXCJ9LmZhLWJsZW5kZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MTdcIn0uZmEtYmxlbmRlci1waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZjZiNlwifS5mYS1ibGluZDpiZWZvcmV7Y29udGVudDpcIlxcZjI5ZFwifS5mYS1ibG9nOmJlZm9yZXtjb250ZW50OlwiXFxmNzgxXCJ9LmZhLWJsb2dnZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzN2NcIn0uZmEtYmxvZ2dlci1iOmJlZm9yZXtjb250ZW50OlwiXFxmMzdkXCJ9LmZhLWJsdWV0b290aDpiZWZvcmV7Y29udGVudDpcIlxcZjI5M1wifS5mYS1ibHVldG9vdGgtYjpiZWZvcmV7Y29udGVudDpcIlxcZjI5NFwifS5mYS1ib2xkOmJlZm9yZXtjb250ZW50OlwiXFxmMDMyXCJ9LmZhLWJvbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTdcIn0uZmEtYm9tYjpiZWZvcmV7Y29udGVudDpcIlxcZjFlMlwifS5mYS1ib25lOmJlZm9yZXtjb250ZW50OlwiXFxmNWQ3XCJ9LmZhLWJvbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NWNcIn0uZmEtYm9vazpiZWZvcmV7Y29udGVudDpcIlxcZjAyZFwifS5mYS1ib29rLWRlYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2YjdcIn0uZmEtYm9vay1tZWRpY2FsOmJlZm9yZXtjb250ZW50OlwiXFxmN2U2XCJ9LmZhLWJvb2stb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZjUxOFwifS5mYS1ib29rLXJlYWRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjVkYVwifS5mYS1ib29rbWFyazpiZWZvcmV7Y29udGVudDpcIlxcZjAyZVwifS5mYS1ib290c3RyYXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGY4MzZcIn0uZmEtYm9yZGVyLWFsbDpiZWZvcmV7Y29udGVudDpcIlxcZjg0Y1wifS5mYS1ib3JkZXItbm9uZTpiZWZvcmV7Y29udGVudDpcIlxcZjg1MFwifS5mYS1ib3JkZXItc3R5bGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY4NTNcIn0uZmEtYm93bGluZy1iYWxsOmJlZm9yZXtjb250ZW50OlwiXFxmNDM2XCJ9LmZhLWJveDpiZWZvcmV7Y29udGVudDpcIlxcZjQ2NlwifS5mYS1ib3gtb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZjQ5ZVwifS5mYS1ib3hlczpiZWZvcmV7Y29udGVudDpcIlxcZjQ2OFwifS5mYS1icmFpbGxlOmJlZm9yZXtjb250ZW50OlwiXFxmMmExXCJ9LmZhLWJyYWluOmJlZm9yZXtjb250ZW50OlwiXFxmNWRjXCJ9LmZhLWJyZWFkLXNsaWNlOmJlZm9yZXtjb250ZW50OlwiXFxmN2VjXCJ9LmZhLWJyaWVmY2FzZTpiZWZvcmV7Y29udGVudDpcIlxcZjBiMVwifS5mYS1icmllZmNhc2UtbWVkaWNhbDpiZWZvcmV7Y29udGVudDpcIlxcZjQ2OVwifS5mYS1icm9hZGNhc3QtdG93ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MTlcIn0uZmEtYnJvb206YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MWFcIn0uZmEtYnJ1c2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NWRcIn0uZmEtYnRjOmJlZm9yZXtjb250ZW50OlwiXFxmMTVhXCJ9LmZhLWJ1ZmZlcjpiZWZvcmV7Y29udGVudDpcIlxcZjgzN1wifS5mYS1idWc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODhcIn0uZmEtYnVpbGRpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYWRcIn0uZmEtYnVsbGhvcm46YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTFcIn0uZmEtYnVsbHNleWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNDBcIn0uZmEtYnVybjpiZWZvcmV7Y29udGVudDpcIlxcZjQ2YVwifS5mYS1idXJvbW9iZWxleHBlcnRlOmJlZm9yZXtjb250ZW50OlwiXFxmMzdmXCJ9LmZhLWJ1czpiZWZvcmV7Y29udGVudDpcIlxcZjIwN1wifS5mYS1idXMtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNTVlXCJ9LmZhLWJ1c2luZXNzLXRpbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NGFcIn0uZmEtYnV5c2VsbGFkczpiZWZvcmV7Y29udGVudDpcIlxcZjIwZFwifS5mYS1jYWxjdWxhdG9yOmJlZm9yZXtjb250ZW50OlwiXFxmMWVjXCJ9LmZhLWNhbGVuZGFyOmJlZm9yZXtjb250ZW50OlwiXFxmMTMzXCJ9LmZhLWNhbGVuZGFyLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjA3M1wifS5mYS1jYWxlbmRhci1jaGVjazpiZWZvcmV7Y29udGVudDpcIlxcZjI3NFwifS5mYS1jYWxlbmRhci1kYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3ODNcIn0uZmEtY2FsZW5kYXItbWludXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNzJcIn0uZmEtY2FsZW5kYXItcGx1czpiZWZvcmV7Y29udGVudDpcIlxcZjI3MVwifS5mYS1jYWxlbmRhci10aW1lczpiZWZvcmV7Y29udGVudDpcIlxcZjI3M1wifS5mYS1jYWxlbmRhci13ZWVrOmJlZm9yZXtjb250ZW50OlwiXFxmNzg0XCJ9LmZhLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcIlxcZjAzMFwifS5mYS1jYW1lcmEtcmV0cm86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODNcIn0uZmEtY2FtcGdyb3VuZDpiZWZvcmV7Y29udGVudDpcIlxcZjZiYlwifS5mYS1jYW5hZGlhbi1tYXBsZS1sZWFmOmJlZm9yZXtjb250ZW50OlwiXFxmNzg1XCJ9LmZhLWNhbmR5LWNhbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3ODZcIn0uZmEtY2FubmFiaXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NWZcIn0uZmEtY2Fwc3VsZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0NmJcIn0uZmEtY2FyOmJlZm9yZXtjb250ZW50OlwiXFxmMWI5XCJ9LmZhLWNhci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ZGVcIn0uZmEtY2FyLWJhdHRlcnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ZGZcIn0uZmEtY2FyLWNyYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmNWUxXCJ9LmZhLWNhci1zaWRlOmJlZm9yZXtjb250ZW50OlwiXFxmNWU0XCJ9LmZhLWNhcmV0LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDdcIn0uZmEtY2FyZXQtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjBkOVwifS5mYS1jYXJldC1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjBkYVwifS5mYS1jYXJldC1zcXVhcmUtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjE1MFwifS5mYS1jYXJldC1zcXVhcmUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjE5MVwifS5mYS1jYXJldC1zcXVhcmUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNTJcIn0uZmEtY2FyZXQtc3F1YXJlLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTUxXCJ9LmZhLWNhcmV0LXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMGQ4XCJ9LmZhLWNhcnJvdDpiZWZvcmV7Y29udGVudDpcIlxcZjc4N1wifS5mYS1jYXJ0LWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMThcIn0uZmEtY2FydC1wbHVzOmJlZm9yZXtjb250ZW50OlwiXFxmMjE3XCJ9LmZhLWNhc2gtcmVnaXN0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3ODhcIn0uZmEtY2F0OmJlZm9yZXtjb250ZW50OlwiXFxmNmJlXCJ9LmZhLWNjLWFtYXpvbi1wYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MmRcIn0uZmEtY2MtYW1leDpiZWZvcmV7Y29udGVudDpcIlxcZjFmM1wifS5mYS1jYy1hcHBsZS1wYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MTZcIn0uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNGNcIn0uZmEtY2MtZGlzY292ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZjJcIn0uZmEtY2MtamNiOmJlZm9yZXtjb250ZW50OlwiXFxmMjRiXCJ9LmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZjFcIn0uZmEtY2MtcGF5cGFsOmJlZm9yZXtjb250ZW50OlwiXFxmMWY0XCJ9LmZhLWNjLXN0cmlwZTpiZWZvcmV7Y29udGVudDpcIlxcZjFmNVwifS5mYS1jYy12aXNhOmJlZm9yZXtjb250ZW50OlwiXFxmMWYwXCJ9LmZhLWNlbnRlcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzODBcIn0uZmEtY2VudG9zOmJlZm9yZXtjb250ZW50OlwiXFxmNzg5XCJ9LmZhLWNlcnRpZmljYXRlOmJlZm9yZXtjb250ZW50OlwiXFxmMGEzXCJ9LmZhLWNoYWlyOmJlZm9yZXtjb250ZW50OlwiXFxmNmMwXCJ9LmZhLWNoYWxrYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MWJcIn0uZmEtY2hhbGtib2FyZC10ZWFjaGVyOmJlZm9yZXtjb250ZW50OlwiXFxmNTFjXCJ9LmZhLWNoYXJnaW5nLXN0YXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ZTdcIn0uZmEtY2hhcnQtYXJlYTpiZWZvcmV7Y29udGVudDpcIlxcZjFmZVwifS5mYS1jaGFydC1iYXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODBcIn0uZmEtY2hhcnQtbGluZTpiZWZvcmV7Y29udGVudDpcIlxcZjIwMVwifS5mYS1jaGFydC1waWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDBcIn0uZmEtY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMGNcIn0uZmEtY2hlY2stY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDU4XCJ9LmZhLWNoZWNrLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcIlxcZjU2MFwifS5mYS1jaGVjay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNGFcIn0uZmEtY2hlZXNlOmJlZm9yZXtjb250ZW50OlwiXFxmN2VmXCJ9LmZhLWNoZXNzOmJlZm9yZXtjb250ZW50OlwiXFxmNDM5XCJ9LmZhLWNoZXNzLWJpc2hvcDpiZWZvcmV7Y29udGVudDpcIlxcZjQzYVwifS5mYS1jaGVzcy1ib2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjQzY1wifS5mYS1jaGVzcy1raW5nOmJlZm9yZXtjb250ZW50OlwiXFxmNDNmXCJ9LmZhLWNoZXNzLWtuaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjQ0MVwifS5mYS1jaGVzcy1wYXduOmJlZm9yZXtjb250ZW50OlwiXFxmNDQzXCJ9LmZhLWNoZXNzLXF1ZWVuOmJlZm9yZXtjb250ZW50OlwiXFxmNDQ1XCJ9LmZhLWNoZXNzLXJvb2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0NDdcIn0uZmEtY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjEzYVwifS5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMTM3XCJ9LmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMTM4XCJ9LmZhLWNoZXZyb24tY2lyY2xlLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTM5XCJ9LmZhLWNoZXZyb24tZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjA3OFwifS5mYS1jaGV2cm9uLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTNcIn0uZmEtY2hldnJvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjA1NFwifS5mYS1jaGV2cm9uLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMDc3XCJ9LmZhLWNoaWxkOmJlZm9yZXtjb250ZW50OlwiXFxmMWFlXCJ9LmZhLWNocm9tZTpiZWZvcmV7Y29udGVudDpcIlxcZjI2OFwifS5mYS1jaHJvbWVjYXN0OmJlZm9yZXtjb250ZW50OlwiXFxmODM4XCJ9LmZhLWNodXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZjUxZFwifS5mYS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMTFcIn0uZmEtY2lyY2xlLW5vdGNoOmJlZm9yZXtjb250ZW50OlwiXFxmMWNlXCJ9LmZhLWNpdHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NGZcIn0uZmEtY2xpbmljLW1lZGljYWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3ZjJcIn0uZmEtY2xpcGJvYXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMzI4XCJ9LmZhLWNsaXBib2FyZC1jaGVjazpiZWZvcmV7Y29udGVudDpcIlxcZjQ2Y1wifS5mYS1jbGlwYm9hcmQtbGlzdDpiZWZvcmV7Y29udGVudDpcIlxcZjQ2ZFwifS5mYS1jbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZjAxN1wifS5mYS1jbG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZjI0ZFwifS5mYS1jbG9zZWQtY2FwdGlvbmluZzpiZWZvcmV7Y29udGVudDpcIlxcZjIwYVwifS5mYS1jbG91ZDpiZWZvcmV7Y29udGVudDpcIlxcZjBjMlwifS5mYS1jbG91ZC1kb3dubG9hZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzODFcIn0uZmEtY2xvdWQtbWVhdGJhbGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3M2JcIn0uZmEtY2xvdWQtbW9vbjpiZWZvcmV7Y29udGVudDpcIlxcZjZjM1wifS5mYS1jbG91ZC1tb29uLXJhaW46YmVmb3Jle2NvbnRlbnQ6XCJcXGY3M2NcIn0uZmEtY2xvdWQtcmFpbjpiZWZvcmV7Y29udGVudDpcIlxcZjczZFwifS5mYS1jbG91ZC1zaG93ZXJzLWhlYXZ5OmJlZm9yZXtjb250ZW50OlwiXFxmNzQwXCJ9LmZhLWNsb3VkLXN1bjpiZWZvcmV7Y29udGVudDpcIlxcZjZjNFwifS5mYS1jbG91ZC1zdW4tcmFpbjpiZWZvcmV7Y29udGVudDpcIlxcZjc0M1wifS5mYS1jbG91ZC11cGxvYWQtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMzgyXCJ9LmZhLWNsb3Vkc2NhbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzODNcIn0uZmEtY2xvdWRzbWl0aDpiZWZvcmV7Y29udGVudDpcIlxcZjM4NFwifS5mYS1jbG91ZHZlcnNpZnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzODVcIn0uZmEtY29ja3RhaWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NjFcIn0uZmEtY29kZTpiZWZvcmV7Y29udGVudDpcIlxcZjEyMVwifS5mYS1jb2RlLWJyYW5jaDpiZWZvcmV7Y29udGVudDpcIlxcZjEyNlwifS5mYS1jb2RlcGVuOmJlZm9yZXtjb250ZW50OlwiXFxmMWNiXCJ9LmZhLWNvZGllcGllOmJlZm9yZXtjb250ZW50OlwiXFxmMjg0XCJ9LmZhLWNvZmZlZTpiZWZvcmV7Y29udGVudDpcIlxcZjBmNFwifS5mYS1jb2c6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTNcIn0uZmEtY29nczpiZWZvcmV7Y29udGVudDpcIlxcZjA4NVwifS5mYS1jb2luczpiZWZvcmV7Y29udGVudDpcIlxcZjUxZVwifS5mYS1jb2x1bW5zOmJlZm9yZXtjb250ZW50OlwiXFxmMGRiXCJ9LmZhLWNvbW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNzVcIn0uZmEtY29tbWVudC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyN2FcIn0uZmEtY29tbWVudC1kb2xsYXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NTFcIn0uZmEtY29tbWVudC1kb3RzOmJlZm9yZXtjb250ZW50OlwiXFxmNGFkXCJ9LmZhLWNvbW1lbnQtbWVkaWNhbDpiZWZvcmV7Y29udGVudDpcIlxcZjdmNVwifS5mYS1jb21tZW50LXNsYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmNGIzXCJ9LmZhLWNvbW1lbnRzOmJlZm9yZXtjb250ZW50OlwiXFxmMDg2XCJ9LmZhLWNvbW1lbnRzLWRvbGxhcjpiZWZvcmV7Y29udGVudDpcIlxcZjY1M1wifS5mYS1jb21wYWN0LWRpc2M6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MWZcIn0uZmEtY29tcGFzczpiZWZvcmV7Y29udGVudDpcIlxcZjE0ZVwifS5mYS1jb21wcmVzczpiZWZvcmV7Y29udGVudDpcIlxcZjA2NlwifS5mYS1jb21wcmVzcy1hcnJvd3MtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNzhjXCJ9LmZhLWNvbmNpZXJnZS1iZWxsOmJlZm9yZXtjb250ZW50OlwiXFxmNTYyXCJ9LmZhLWNvbmZsdWVuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3OGRcIn0uZmEtY29ubmVjdGRldmVsb3A6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMGVcIn0uZmEtY29udGFvOmJlZm9yZXtjb250ZW50OlwiXFxmMjZkXCJ9LmZhLWNvb2tpZTpiZWZvcmV7Y29udGVudDpcIlxcZjU2M1wifS5mYS1jb29raWUtYml0ZTpiZWZvcmV7Y29udGVudDpcIlxcZjU2NFwifS5mYS1jb3B5OmJlZm9yZXtjb250ZW50OlwiXFxmMGM1XCJ9LmZhLWNvcHlyaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjFmOVwifS5mYS1jb3VjaDpiZWZvcmV7Y29udGVudDpcIlxcZjRiOFwifS5mYS1jcGFuZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzODhcIn0uZmEtY3JlYXRpdmUtY29tbW9uczpiZWZvcmV7Y29udGVudDpcIlxcZjI1ZVwifS5mYS1jcmVhdGl2ZS1jb21tb25zLWJ5OmJlZm9yZXtjb250ZW50OlwiXFxmNGU3XCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtbmM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZThcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1uYy1ldTpiZWZvcmV7Y29udGVudDpcIlxcZjRlOVwifS5mYS1jcmVhdGl2ZS1jb21tb25zLW5jLWpwOmJlZm9yZXtjb250ZW50OlwiXFxmNGVhXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZWJcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1wZDpiZWZvcmV7Y29udGVudDpcIlxcZjRlY1wifS5mYS1jcmVhdGl2ZS1jb21tb25zLXBkLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjRlZFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLXJlbWl4OmJlZm9yZXtjb250ZW50OlwiXFxmNGVlXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnMtc2E6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZWZcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1zYW1wbGluZzpiZWZvcmV7Y29udGVudDpcIlxcZjRmMFwifS5mYS1jcmVhdGl2ZS1jb21tb25zLXNhbXBsaW5nLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZjFcIn0uZmEtY3JlYXRpdmUtY29tbW9ucy1zaGFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjRmMlwifS5mYS1jcmVhdGl2ZS1jb21tb25zLXplcm86YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZjNcIn0uZmEtY3JlZGl0LWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOWRcIn0uZmEtY3JpdGljYWwtcm9sZTpiZWZvcmV7Y29udGVudDpcIlxcZjZjOVwifS5mYS1jcm9wOmJlZm9yZXtjb250ZW50OlwiXFxmMTI1XCJ9LmZhLWNyb3AtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNTY1XCJ9LmZhLWNyb3NzOmJlZm9yZXtjb250ZW50OlwiXFxmNjU0XCJ9LmZhLWNyb3NzaGFpcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNWJcIn0uZmEtY3JvdzpiZWZvcmV7Y29udGVudDpcIlxcZjUyMFwifS5mYS1jcm93bjpiZWZvcmV7Y29udGVudDpcIlxcZjUyMVwifS5mYS1jcnV0Y2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3ZjdcIn0uZmEtY3NzMzpiZWZvcmV7Y29udGVudDpcIlxcZjEzY1wifS5mYS1jc3MzLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjM4YlwifS5mYS1jdWJlOmJlZm9yZXtjb250ZW50OlwiXFxmMWIyXCJ9LmZhLWN1YmVzOmJlZm9yZXtjb250ZW50OlwiXFxmMWIzXCJ9LmZhLWN1dDpiZWZvcmV7Y29udGVudDpcIlxcZjBjNFwifS5mYS1jdXR0bGVmaXNoOmJlZm9yZXtjb250ZW50OlwiXFxmMzhjXCJ9LmZhLWQtYW5kLWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzOGRcIn0uZmEtZC1hbmQtZC1iZXlvbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2Y2FcIn0uZmEtZGFzaGN1YmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTBcIn0uZmEtZGF0YWJhc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzBcIn0uZmEtZGVhZjpiZWZvcmV7Y29udGVudDpcIlxcZjJhNFwifS5mYS1kZWxpY2lvdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYTVcIn0uZmEtZGVtb2NyYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3NDdcIn0uZmEtZGVwbG95ZG9nOmJlZm9yZXtjb250ZW50OlwiXFxmMzhlXCJ9LmZhLWRlc2twcm86YmVmb3Jle2NvbnRlbnQ6XCJcXGYzOGZcIn0uZmEtZGVza3RvcDpiZWZvcmV7Y29udGVudDpcIlxcZjEwOFwifS5mYS1kZXY6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2Y2NcIn0uZmEtZGV2aWFudGFydDpiZWZvcmV7Y29udGVudDpcIlxcZjFiZFwifS5mYS1kaGFybWFjaGFrcmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NTVcIn0uZmEtZGhsOmJlZm9yZXtjb250ZW50OlwiXFxmNzkwXCJ9LmZhLWRpYWdub3NlczpiZWZvcmV7Y29udGVudDpcIlxcZjQ3MFwifS5mYS1kaWFzcG9yYTpiZWZvcmV7Y29udGVudDpcIlxcZjc5MVwifS5mYS1kaWNlOmJlZm9yZXtjb250ZW50OlwiXFxmNTIyXCJ9LmZhLWRpY2UtZDIwOmJlZm9yZXtjb250ZW50OlwiXFxmNmNmXCJ9LmZhLWRpY2UtZDY6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2ZDFcIn0uZmEtZGljZS1maXZlOmJlZm9yZXtjb250ZW50OlwiXFxmNTIzXCJ9LmZhLWRpY2UtZm91cjpiZWZvcmV7Y29udGVudDpcIlxcZjUyNFwifS5mYS1kaWNlLW9uZTpiZWZvcmV7Y29udGVudDpcIlxcZjUyNVwifS5mYS1kaWNlLXNpeDpiZWZvcmV7Y29udGVudDpcIlxcZjUyNlwifS5mYS1kaWNlLXRocmVlOmJlZm9yZXtjb250ZW50OlwiXFxmNTI3XCJ9LmZhLWRpY2UtdHdvOmJlZm9yZXtjb250ZW50OlwiXFxmNTI4XCJ9LmZhLWRpZ2c6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYTZcIn0uZmEtZGlnaXRhbC1vY2VhbjpiZWZvcmV7Y29udGVudDpcIlxcZjM5MVwifS5mYS1kaWdpdGFsLXRhY2hvZ3JhcGg6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NjZcIn0uZmEtZGlyZWN0aW9uczpiZWZvcmV7Y29udGVudDpcIlxcZjVlYlwifS5mYS1kaXNjb3JkOmJlZm9yZXtjb250ZW50OlwiXFxmMzkyXCJ9LmZhLWRpc2NvdXJzZTpiZWZvcmV7Y29udGVudDpcIlxcZjM5M1wifS5mYS1kaXZpZGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MjlcIn0uZmEtZGl6enk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NjdcIn0uZmEtZG5hOmJlZm9yZXtjb250ZW50OlwiXFxmNDcxXCJ9LmZhLWRvY2h1YjpiZWZvcmV7Y29udGVudDpcIlxcZjM5NFwifS5mYS1kb2NrZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzOTVcIn0uZmEtZG9nOmJlZm9yZXtjb250ZW50OlwiXFxmNmQzXCJ9LmZhLWRvbGxhci1zaWduOmJlZm9yZXtjb250ZW50OlwiXFxmMTU1XCJ9LmZhLWRvbGx5OmJlZm9yZXtjb250ZW50OlwiXFxmNDcyXCJ9LmZhLWRvbGx5LWZsYXRiZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0NzRcIn0uZmEtZG9uYXRlOmJlZm9yZXtjb250ZW50OlwiXFxmNGI5XCJ9LmZhLWRvb3ItY2xvc2VkOmJlZm9yZXtjb250ZW50OlwiXFxmNTJhXCJ9LmZhLWRvb3Itb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZjUyYlwifS5mYS1kb3QtY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMTkyXCJ9LmZhLWRvdmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0YmFcIn0uZmEtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTlcIn0uZmEtZHJhZnQyZGlnaXRhbDpiZWZvcmV7Y29udGVudDpcIlxcZjM5NlwifS5mYS1kcmFmdGluZy1jb21wYXNzOmJlZm9yZXtjb250ZW50OlwiXFxmNTY4XCJ9LmZhLWRyYWdvbjpiZWZvcmV7Y29udGVudDpcIlxcZjZkNVwifS5mYS1kcmF3LXBvbHlnb246YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ZWVcIn0uZmEtZHJpYmJibGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxN2RcIn0uZmEtZHJpYmJibGUtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMzk3XCJ9LmZhLWRyb3Bib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNmJcIn0uZmEtZHJ1bTpiZWZvcmV7Y29udGVudDpcIlxcZjU2OVwifS5mYS1kcnVtLXN0ZWVscGFuOmJlZm9yZXtjb250ZW50OlwiXFxmNTZhXCJ9LmZhLWRydW1zdGljay1iaXRlOmJlZm9yZXtjb250ZW50OlwiXFxmNmQ3XCJ9LmZhLWRydXBhbDpiZWZvcmV7Y29udGVudDpcIlxcZjFhOVwifS5mYS1kdW1iYmVsbDpiZWZvcmV7Y29udGVudDpcIlxcZjQ0YlwifS5mYS1kdW1wc3RlcjpiZWZvcmV7Y29udGVudDpcIlxcZjc5M1wifS5mYS1kdW1wc3Rlci1maXJlOmJlZm9yZXtjb250ZW50OlwiXFxmNzk0XCJ9LmZhLWR1bmdlb246YmVmb3Jle2NvbnRlbnQ6XCJcXGY2ZDlcIn0uZmEtZHlhbG9nOmJlZm9yZXtjb250ZW50OlwiXFxmMzk5XCJ9LmZhLWVhcmx5YmlyZHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzOWFcIn0uZmEtZWJheTpiZWZvcmV7Y29udGVudDpcIlxcZjRmNFwifS5mYS1lZGdlOmJlZm9yZXtjb250ZW50OlwiXFxmMjgyXCJ9LmZhLWVkaXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDRcIn0uZmEtZWdnOmJlZm9yZXtjb250ZW50OlwiXFxmN2ZiXCJ9LmZhLWVqZWN0OmJlZm9yZXtjb250ZW50OlwiXFxmMDUyXCJ9LmZhLWVsZW1lbnRvcjpiZWZvcmV7Y29udGVudDpcIlxcZjQzMFwifS5mYS1lbGxpcHNpcy1oOmJlZm9yZXtjb250ZW50OlwiXFxmMTQxXCJ9LmZhLWVsbGlwc2lzLXY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNDJcIn0uZmEtZWxsbzpiZWZvcmV7Y29udGVudDpcIlxcZjVmMVwifS5mYS1lbWJlcjpiZWZvcmV7Y29udGVudDpcIlxcZjQyM1wifS5mYS1lbXBpcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDFcIn0uZmEtZW52ZWxvcGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTBcIn0uZmEtZW52ZWxvcGUtb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZjJiNlwifS5mYS1lbnZlbG9wZS1vcGVuLXRleHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NThcIn0uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTk5XCJ9LmZhLWVudmlyYTpiZWZvcmV7Y29udGVudDpcIlxcZjI5OVwifS5mYS1lcXVhbHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MmNcIn0uZmEtZXJhc2VyOmJlZm9yZXtjb250ZW50OlwiXFxmMTJkXCJ9LmZhLWVybGFuZzpiZWZvcmV7Y29udGVudDpcIlxcZjM5ZFwifS5mYS1ldGhlcmV1bTpiZWZvcmV7Y29udGVudDpcIlxcZjQyZVwifS5mYS1ldGhlcm5ldDpiZWZvcmV7Y29udGVudDpcIlxcZjc5NlwifS5mYS1ldHN5OmJlZm9yZXtjb250ZW50OlwiXFxmMmQ3XCJ9LmZhLWV1cm8tc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcZjE1M1wifS5mYS1ldmVybm90ZTpiZWZvcmV7Y29udGVudDpcIlxcZjgzOVwifS5mYS1leGNoYW5nZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNjJcIn0uZmEtZXhjbGFtYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMmFcIn0uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDZhXCJ9LmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDcxXCJ9LmZhLWV4cGFuZDpiZWZvcmV7Y29udGVudDpcIlxcZjA2NVwifS5mYS1leHBhbmQtYXJyb3dzLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjMxZVwifS5mYS1leHBlZGl0ZWRzc2w6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyM2VcIn0uZmEtZXh0ZXJuYWwtbGluay1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzNWRcIn0uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMzYwXCJ9LmZhLWV5ZTpiZWZvcmV7Y29udGVudDpcIlxcZjA2ZVwifS5mYS1leWUtZHJvcHBlcjpiZWZvcmV7Y29udGVudDpcIlxcZjFmYlwifS5mYS1leWUtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNzBcIn0uZmEtZmFjZWJvb2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOWFcIn0uZmEtZmFjZWJvb2stZjpiZWZvcmV7Y29udGVudDpcIlxcZjM5ZVwifS5mYS1mYWNlYm9vay1tZXNzZW5nZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzOWZcIn0uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMDgyXCJ9LmZhLWZhbjpiZWZvcmV7Y29udGVudDpcIlxcZjg2M1wifS5mYS1mYW50YXN5LWZsaWdodC1nYW1lczpiZWZvcmV7Y29udGVudDpcIlxcZjZkY1wifS5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMDQ5XCJ9LmZhLWZhc3QtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjA1MFwifS5mYS1mYXg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYWNcIn0uZmEtZmVhdGhlcjpiZWZvcmV7Y29udGVudDpcIlxcZjUyZFwifS5mYS1mZWF0aGVyLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjU2YlwifS5mYS1mZWRleDpiZWZvcmV7Y29udGVudDpcIlxcZjc5N1wifS5mYS1mZWRvcmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3OThcIn0uZmEtZmVtYWxlOmJlZm9yZXtjb250ZW50OlwiXFxmMTgyXCJ9LmZhLWZpZ2h0ZXItamV0OmJlZm9yZXtjb250ZW50OlwiXFxmMGZiXCJ9LmZhLWZpZ21hOmJlZm9yZXtjb250ZW50OlwiXFxmNzk5XCJ9LmZhLWZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNWJcIn0uZmEtZmlsZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNWNcIn0uZmEtZmlsZS1hcmNoaXZlOmJlZm9yZXtjb250ZW50OlwiXFxmMWM2XCJ9LmZhLWZpbGUtYXVkaW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzdcIn0uZmEtZmlsZS1jb2RlOmJlZm9yZXtjb250ZW50OlwiXFxmMWM5XCJ9LmZhLWZpbGUtY29udHJhY3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NmNcIn0uZmEtZmlsZS1jc3Y6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2ZGRcIn0uZmEtZmlsZS1kb3dubG9hZDpiZWZvcmV7Y29udGVudDpcIlxcZjU2ZFwifS5mYS1maWxlLWV4Y2VsOmJlZm9yZXtjb250ZW50OlwiXFxmMWMzXCJ9LmZhLWZpbGUtZXhwb3J0OmJlZm9yZXtjb250ZW50OlwiXFxmNTZlXCJ9LmZhLWZpbGUtaW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzVcIn0uZmEtZmlsZS1pbXBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NmZcIn0uZmEtZmlsZS1pbnZvaWNlOmJlZm9yZXtjb250ZW50OlwiXFxmNTcwXCJ9LmZhLWZpbGUtaW52b2ljZS1kb2xsYXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NzFcIn0uZmEtZmlsZS1tZWRpY2FsOmJlZm9yZXtjb250ZW50OlwiXFxmNDc3XCJ9LmZhLWZpbGUtbWVkaWNhbC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0NzhcIn0uZmEtZmlsZS1wZGY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzFcIn0uZmEtZmlsZS1wb3dlcnBvaW50OmJlZm9yZXtjb250ZW50OlwiXFxmMWM0XCJ9LmZhLWZpbGUtcHJlc2NyaXB0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxmNTcyXCJ9LmZhLWZpbGUtc2lnbmF0dXJlOmJlZm9yZXtjb250ZW50OlwiXFxmNTczXCJ9LmZhLWZpbGUtdXBsb2FkOmJlZm9yZXtjb250ZW50OlwiXFxmNTc0XCJ9LmZhLWZpbGUtdmlkZW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzhcIn0uZmEtZmlsZS13b3JkOmJlZm9yZXtjb250ZW50OlwiXFxmMWMyXCJ9LmZhLWZpbGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NzVcIn0uZmEtZmlsbC1kcmlwOmJlZm9yZXtjb250ZW50OlwiXFxmNTc2XCJ9LmZhLWZpbG06YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDhcIn0uZmEtZmlsdGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMGIwXCJ9LmZhLWZpbmdlcnByaW50OmJlZm9yZXtjb250ZW50OlwiXFxmNTc3XCJ9LmZhLWZpcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNmRcIn0uZmEtZmlyZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3ZTRcIn0uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMzRcIn0uZmEtZmlyZWZveDpiZWZvcmV7Y29udGVudDpcIlxcZjI2OVwifS5mYS1maXJzdC1haWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0NzlcIn0uZmEtZmlyc3Qtb3JkZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYjBcIn0uZmEtZmlyc3Qtb3JkZXItYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNTBhXCJ9LmZhLWZpcnN0ZHJhZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYTFcIn0uZmEtZmlzaDpiZWZvcmV7Y29udGVudDpcIlxcZjU3OFwifS5mYS1maXN0LXJhaXNlZDpiZWZvcmV7Y29udGVudDpcIlxcZjZkZVwifS5mYS1mbGFnOmJlZm9yZXtjb250ZW50OlwiXFxmMDI0XCJ9LmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZXtjb250ZW50OlwiXFxmMTFlXCJ9LmZhLWZsYWctdXNhOmJlZm9yZXtjb250ZW50OlwiXFxmNzRkXCJ9LmZhLWZsYXNrOmJlZm9yZXtjb250ZW50OlwiXFxmMGMzXCJ9LmZhLWZsaWNrcjpiZWZvcmV7Y29udGVudDpcIlxcZjE2ZVwifS5mYS1mbGlwYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0NGRcIn0uZmEtZmx1c2hlZDpiZWZvcmV7Y29udGVudDpcIlxcZjU3OVwifS5mYS1mbHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MTdcIn0uZmEtZm9sZGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMDdiXCJ9LmZhLWZvbGRlci1taW51czpiZWZvcmV7Y29udGVudDpcIlxcZjY1ZFwifS5mYS1mb2xkZXItb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZjA3Y1wifS5mYS1mb2xkZXItcGx1czpiZWZvcmV7Y29udGVudDpcIlxcZjY1ZVwifS5mYS1mb250OmJlZm9yZXtjb250ZW50OlwiXFxmMDMxXCJ9LmZhLWZvbnQtYXdlc29tZTpiZWZvcmV7Y29udGVudDpcIlxcZjJiNFwifS5mYS1mb250LWF3ZXNvbWUtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMzVjXCJ9LmZhLWZvbnQtYXdlc29tZS1mbGFnOmJlZm9yZXtjb250ZW50OlwiXFxmNDI1XCJ9LmZhLWZvbnQtYXdlc29tZS1sb2dvLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZTZcIn0uZmEtZm9udGljb25zOmJlZm9yZXtjb250ZW50OlwiXFxmMjgwXCJ9LmZhLWZvbnRpY29ucy1maTpiZWZvcmV7Y29udGVudDpcIlxcZjNhMlwifS5mYS1mb290YmFsbC1iYWxsOmJlZm9yZXtjb250ZW50OlwiXFxmNDRlXCJ9LmZhLWZvcnQtYXdlc29tZTpiZWZvcmV7Y29udGVudDpcIlxcZjI4NlwifS5mYS1mb3J0LWF3ZXNvbWUtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmM2EzXCJ9LmZhLWZvcnVtYmVlOmJlZm9yZXtjb250ZW50OlwiXFxmMjExXCJ9LmZhLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNGVcIn0uZmEtZm91cnNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE4MFwifS5mYS1mcmVlLWNvZGUtY2FtcDpiZWZvcmV7Y29udGVudDpcIlxcZjJjNVwifS5mYS1mcmVlYnNkOmJlZm9yZXtjb250ZW50OlwiXFxmM2E0XCJ9LmZhLWZyb2c6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MmVcIn0uZmEtZnJvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMTlcIn0uZmEtZnJvd24tb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZjU3YVwifS5mYS1mdWxjcnVtOmJlZm9yZXtjb250ZW50OlwiXFxmNTBiXCJ9LmZhLWZ1bm5lbC1kb2xsYXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NjJcIn0uZmEtZnV0Ym9sOmJlZm9yZXtjb250ZW50OlwiXFxmMWUzXCJ9LmZhLWdhbGFjdGljLXJlcHVibGljOmJlZm9yZXtjb250ZW50OlwiXFxmNTBjXCJ9LmZhLWdhbGFjdGljLXNlbmF0ZTpiZWZvcmV7Y29udGVudDpcIlxcZjUwZFwifS5mYS1nYW1lcGFkOmJlZm9yZXtjb250ZW50OlwiXFxmMTFiXCJ9LmZhLWdhcy1wdW1wOmJlZm9yZXtjb250ZW50OlwiXFxmNTJmXCJ9LmZhLWdhdmVsOmJlZm9yZXtjb250ZW50OlwiXFxmMGUzXCJ9LmZhLWdlbTpiZWZvcmV7Y29udGVudDpcIlxcZjNhNVwifS5mYS1nZW5kZXJsZXNzOmJlZm9yZXtjb250ZW50OlwiXFxmMjJkXCJ9LmZhLWdldC1wb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjVcIn0uZmEtZ2c6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjBcIn0uZmEtZ2ctY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMjYxXCJ9LmZhLWdob3N0OmJlZm9yZXtjb250ZW50OlwiXFxmNmUyXCJ9LmZhLWdpZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNmJcIn0uZmEtZ2lmdHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3OWNcIn0uZmEtZ2l0OmJlZm9yZXtjb250ZW50OlwiXFxmMWQzXCJ9LmZhLWdpdC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY4NDFcIn0uZmEtZ2l0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjFkMlwifS5mYS1naXRodWI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOWJcIn0uZmEtZ2l0aHViLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjExM1wifS5mYS1naXRodWItc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMDkyXCJ9LmZhLWdpdGtyYWtlbjpiZWZvcmV7Y29udGVudDpcIlxcZjNhNlwifS5mYS1naXRsYWI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOTZcIn0uZmEtZ2l0dGVyOmJlZm9yZXtjb250ZW50OlwiXFxmNDI2XCJ9LmZhLWdsYXNzLWNoZWVyczpiZWZvcmV7Y29udGVudDpcIlxcZjc5ZlwifS5mYS1nbGFzcy1tYXJ0aW5pOmJlZm9yZXtjb250ZW50OlwiXFxmMDAwXCJ9LmZhLWdsYXNzLW1hcnRpbmktYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNTdiXCJ9LmZhLWdsYXNzLXdoaXNrZXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3YTBcIn0uZmEtZ2xhc3NlczpiZWZvcmV7Y29udGVudDpcIlxcZjUzMFwifS5mYS1nbGlkZTpiZWZvcmV7Y29udGVudDpcIlxcZjJhNVwifS5mYS1nbGlkZS1nOmJlZm9yZXtjb250ZW50OlwiXFxmMmE2XCJ9LmZhLWdsb2JlOmJlZm9yZXtjb250ZW50OlwiXFxmMGFjXCJ9LmZhLWdsb2JlLWFmcmljYTpiZWZvcmV7Y29udGVudDpcIlxcZjU3Y1wifS5mYS1nbG9iZS1hbWVyaWNhczpiZWZvcmV7Y29udGVudDpcIlxcZjU3ZFwifS5mYS1nbG9iZS1hc2lhOmJlZm9yZXtjb250ZW50OlwiXFxmNTdlXCJ9LmZhLWdsb2JlLWV1cm9wZTpiZWZvcmV7Y29udGVudDpcIlxcZjdhMlwifS5mYS1nb2ZvcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYTdcIn0uZmEtZ29sZi1iYWxsOmJlZm9yZXtjb250ZW50OlwiXFxmNDUwXCJ9LmZhLWdvb2RyZWFkczpiZWZvcmV7Y29udGVudDpcIlxcZjNhOFwifS5mYS1nb29kcmVhZHMtZzpiZWZvcmV7Y29udGVudDpcIlxcZjNhOVwifS5mYS1nb29nbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYTBcIn0uZmEtZ29vZ2xlLWRyaXZlOmJlZm9yZXtjb250ZW50OlwiXFxmM2FhXCJ9LmZhLWdvb2dsZS1wbGF5OmJlZm9yZXtjb250ZW50OlwiXFxmM2FiXCJ9LmZhLWdvb2dsZS1wbHVzOmJlZm9yZXtjb250ZW50OlwiXFxmMmIzXCJ9LmZhLWdvb2dsZS1wbHVzLWc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDVcIn0uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMGQ0XCJ9LmZhLWdvb2dsZS13YWxsZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZWVcIn0uZmEtZ29wdXJhbTpiZWZvcmV7Y29udGVudDpcIlxcZjY2NFwifS5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmV7Y29udGVudDpcIlxcZjE5ZFwifS5mYS1ncmF0aXBheTpiZWZvcmV7Y29udGVudDpcIlxcZjE4NFwifS5mYS1ncmF2OmJlZm9yZXtjb250ZW50OlwiXFxmMmQ2XCJ9LmZhLWdyZWF0ZXItdGhhbjpiZWZvcmV7Y29udGVudDpcIlxcZjUzMVwifS5mYS1ncmVhdGVyLXRoYW4tZXF1YWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MzJcIn0uZmEtZ3JpbWFjZTpiZWZvcmV7Y29udGVudDpcIlxcZjU3ZlwifS5mYS1ncmluOmJlZm9yZXtjb250ZW50OlwiXFxmNTgwXCJ9LmZhLWdyaW4tYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNTgxXCJ9LmZhLWdyaW4tYmVhbTpiZWZvcmV7Y29udGVudDpcIlxcZjU4MlwifS5mYS1ncmluLWJlYW0tc3dlYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ODNcIn0uZmEtZ3Jpbi1oZWFydHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ODRcIn0uZmEtZ3Jpbi1zcXVpbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ODVcIn0uZmEtZ3Jpbi1zcXVpbnQtdGVhcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ODZcIn0uZmEtZ3Jpbi1zdGFyczpiZWZvcmV7Y29udGVudDpcIlxcZjU4N1wifS5mYS1ncmluLXRlYXJzOmJlZm9yZXtjb250ZW50OlwiXFxmNTg4XCJ9LmZhLWdyaW4tdG9uZ3VlOmJlZm9yZXtjb250ZW50OlwiXFxmNTg5XCJ9LmZhLWdyaW4tdG9uZ3VlLXNxdWludDpiZWZvcmV7Y29udGVudDpcIlxcZjU4YVwifS5mYS1ncmluLXRvbmd1ZS13aW5rOmJlZm9yZXtjb250ZW50OlwiXFxmNThiXCJ9LmZhLWdyaW4td2luazpiZWZvcmV7Y29udGVudDpcIlxcZjU4Y1wifS5mYS1ncmlwLWhvcml6b250YWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OGRcIn0uZmEtZ3JpcC1saW5lczpiZWZvcmV7Y29udGVudDpcIlxcZjdhNFwifS5mYS1ncmlwLWxpbmVzLXZlcnRpY2FsOmJlZm9yZXtjb250ZW50OlwiXFxmN2E1XCJ9LmZhLWdyaXAtdmVydGljYWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OGVcIn0uZmEtZ3JpcGZpcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYWNcIn0uZmEtZ3J1bnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYWRcIn0uZmEtZ3VpdGFyOmJlZm9yZXtjb250ZW50OlwiXFxmN2E2XCJ9LmZhLWd1bHA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYWVcIn0uZmEtaC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZmRcIn0uZmEtaGFja2VyLW5ld3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDRcIn0uZmEtaGFja2VyLW5ld3Mtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmM2FmXCJ9LmZhLWhhY2tlcnJhbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ZjdcIn0uZmEtaGFtYnVyZ2VyOmJlZm9yZXtjb250ZW50OlwiXFxmODA1XCJ9LmZhLWhhbW1lcjpiZWZvcmV7Y29udGVudDpcIlxcZjZlM1wifS5mYS1oYW1zYTpiZWZvcmV7Y29udGVudDpcIlxcZjY2NVwifS5mYS1oYW5kLWhvbGRpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0YmRcIn0uZmEtaGFuZC1ob2xkaW5nLWhlYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmNGJlXCJ9LmZhLWhhbmQtaG9sZGluZy11c2Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0YzBcIn0uZmEtaGFuZC1saXphcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNThcIn0uZmEtaGFuZC1taWRkbGUtZmluZ2VyOmJlZm9yZXtjb250ZW50OlwiXFxmODA2XCJ9LmZhLWhhbmQtcGFwZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTZcIn0uZmEtaGFuZC1wZWFjZTpiZWZvcmV7Y29udGVudDpcIlxcZjI1YlwifS5mYS1oYW5kLXBvaW50LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTdcIn0uZmEtaGFuZC1wb2ludC1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMGE1XCJ9LmZhLWhhbmQtcG9pbnQtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTRcIn0uZmEtaGFuZC1wb2ludC11cDpiZWZvcmV7Y29udGVudDpcIlxcZjBhNlwifS5mYS1oYW5kLXBvaW50ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNWFcIn0uZmEtaGFuZC1yb2NrOmJlZm9yZXtjb250ZW50OlwiXFxmMjU1XCJ9LmZhLWhhbmQtc2Npc3NvcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTdcIn0uZmEtaGFuZC1zcG9jazpiZWZvcmV7Y29udGVudDpcIlxcZjI1OVwifS5mYS1oYW5kczpiZWZvcmV7Y29udGVudDpcIlxcZjRjMlwifS5mYS1oYW5kcy1oZWxwaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmNGM0XCJ9LmZhLWhhbmRzaGFrZTpiZWZvcmV7Y29udGVudDpcIlxcZjJiNVwifS5mYS1oYW51a2lhaDpiZWZvcmV7Y29udGVudDpcIlxcZjZlNlwifS5mYS1oYXJkLWhhdDpiZWZvcmV7Y29udGVudDpcIlxcZjgwN1wifS5mYS1oYXNodGFnOmJlZm9yZXtjb250ZW50OlwiXFxmMjkyXCJ9LmZhLWhhdC13aXphcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2ZThcIn0uZmEtaGF5a2FsOmJlZm9yZXtjb250ZW50OlwiXFxmNjY2XCJ9LmZhLWhkZDpiZWZvcmV7Y29udGVudDpcIlxcZjBhMFwifS5mYS1oZWFkaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmMWRjXCJ9LmZhLWhlYWRwaG9uZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjVcIn0uZmEtaGVhZHBob25lcy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OGZcIn0uZmEtaGVhZHNldDpiZWZvcmV7Y29udGVudDpcIlxcZjU5MFwifS5mYS1oZWFydDpiZWZvcmV7Y29udGVudDpcIlxcZjAwNFwifS5mYS1oZWFydC1icm9rZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGY3YTlcIn0uZmEtaGVhcnRiZWF0OmJlZm9yZXtjb250ZW50OlwiXFxmMjFlXCJ9LmZhLWhlbGljb3B0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MzNcIn0uZmEtaGlnaGxpZ2h0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OTFcIn0uZmEtaGlraW5nOmJlZm9yZXtjb250ZW50OlwiXFxmNmVjXCJ9LmZhLWhpcHBvOmJlZm9yZXtjb250ZW50OlwiXFxmNmVkXCJ9LmZhLWhpcHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0NTJcIn0uZmEtaGlyZS1hLWhlbHBlcjpiZWZvcmV7Y29udGVudDpcIlxcZjNiMFwifS5mYS1oaXN0b3J5OmJlZm9yZXtjb250ZW50OlwiXFxmMWRhXCJ9LmZhLWhvY2tleS1wdWNrOmJlZm9yZXtjb250ZW50OlwiXFxmNDUzXCJ9LmZhLWhvbGx5LWJlcnJ5OmJlZm9yZXtjb250ZW50OlwiXFxmN2FhXCJ9LmZhLWhvbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTVcIn0uZmEtaG9vbGk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MjdcIn0uZmEtaG9ybmJpbGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OTJcIn0uZmEtaG9yc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2ZjBcIn0uZmEtaG9yc2UtaGVhZDpiZWZvcmV7Y29udGVudDpcIlxcZjdhYlwifS5mYS1ob3NwaXRhbDpiZWZvcmV7Y29udGVudDpcIlxcZjBmOFwifS5mYS1ob3NwaXRhbC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0N2RcIn0uZmEtaG9zcGl0YWwtc3ltYm9sOmJlZm9yZXtjb250ZW50OlwiXFxmNDdlXCJ9LmZhLWhvdC10dWI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OTNcIn0uZmEtaG90ZG9nOmJlZm9yZXtjb250ZW50OlwiXFxmODBmXCJ9LmZhLWhvdGVsOmJlZm9yZXtjb250ZW50OlwiXFxmNTk0XCJ9LmZhLWhvdGphcjpiZWZvcmV7Y29udGVudDpcIlxcZjNiMVwifS5mYS1ob3VyZ2xhc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTRcIn0uZmEtaG91cmdsYXNzLWVuZDpiZWZvcmV7Y29udGVudDpcIlxcZjI1M1wifS5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmV7Y29udGVudDpcIlxcZjI1MlwifS5mYS1ob3VyZ2xhc3Mtc3RhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTFcIn0uZmEtaG91c2UtZGFtYWdlOmJlZm9yZXtjb250ZW50OlwiXFxmNmYxXCJ9LmZhLWhvdXp6OmJlZm9yZXtjb250ZW50OlwiXFxmMjdjXCJ9LmZhLWhyeXZuaWE6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2ZjJcIn0uZmEtaHRtbDU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxM2JcIn0uZmEtaHVic3BvdDpiZWZvcmV7Y29udGVudDpcIlxcZjNiMlwifS5mYS1pLWN1cnNvcjpiZWZvcmV7Y29udGVudDpcIlxcZjI0NlwifS5mYS1pY2UtY3JlYW06YmVmb3Jle2NvbnRlbnQ6XCJcXGY4MTBcIn0uZmEtaWNpY2xlczpiZWZvcmV7Y29udGVudDpcIlxcZjdhZFwifS5mYS1pY29uczpiZWZvcmV7Y29udGVudDpcIlxcZjg2ZFwifS5mYS1pZC1iYWRnZTpiZWZvcmV7Y29udGVudDpcIlxcZjJjMVwifS5mYS1pZC1jYXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMmMyXCJ9LmZhLWlkLWNhcmQtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNDdmXCJ9LmZhLWlnbG9vOmJlZm9yZXtjb250ZW50OlwiXFxmN2FlXCJ9LmZhLWltYWdlOmJlZm9yZXtjb250ZW50OlwiXFxmMDNlXCJ9LmZhLWltYWdlczpiZWZvcmV7Y29udGVudDpcIlxcZjMwMlwifS5mYS1pbWRiOmJlZm9yZXtjb250ZW50OlwiXFxmMmQ4XCJ9LmZhLWluYm94OmJlZm9yZXtjb250ZW50OlwiXFxmMDFjXCJ9LmZhLWluZGVudDpiZWZvcmV7Y29udGVudDpcIlxcZjAzY1wifS5mYS1pbmR1c3RyeTpiZWZvcmV7Y29udGVudDpcIlxcZjI3NVwifS5mYS1pbmZpbml0eTpiZWZvcmV7Y29udGVudDpcIlxcZjUzNFwifS5mYS1pbmZvOmJlZm9yZXtjb250ZW50OlwiXFxmMTI5XCJ9LmZhLWluZm8tY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDVhXCJ9LmZhLWluc3RhZ3JhbTpiZWZvcmV7Y29udGVudDpcIlxcZjE2ZFwifS5mYS1pbnRlcmNvbTpiZWZvcmV7Y29udGVudDpcIlxcZjdhZlwifS5mYS1pbnRlcm5ldC1leHBsb3JlcjpiZWZvcmV7Y29udGVudDpcIlxcZjI2YlwifS5mYS1pbnZpc2lvbjpiZWZvcmV7Y29udGVudDpcIlxcZjdiMFwifS5mYS1pb3hob3N0OmJlZm9yZXtjb250ZW50OlwiXFxmMjA4XCJ9LmZhLWl0YWxpYzpiZWZvcmV7Y29udGVudDpcIlxcZjAzM1wifS5mYS1pdGNoLWlvOmJlZm9yZXtjb250ZW50OlwiXFxmODNhXCJ9LmZhLWl0dW5lczpiZWZvcmV7Y29udGVudDpcIlxcZjNiNFwifS5mYS1pdHVuZXMtbm90ZTpiZWZvcmV7Y29udGVudDpcIlxcZjNiNVwifS5mYS1qYXZhOmJlZm9yZXtjb250ZW50OlwiXFxmNGU0XCJ9LmZhLWplZGk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NjlcIn0uZmEtamVkaS1vcmRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjUwZVwifS5mYS1qZW5raW5zOmJlZm9yZXtjb250ZW50OlwiXFxmM2I2XCJ9LmZhLWppcmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3YjFcIn0uZmEtam9nZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYjdcIn0uZmEtam9pbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OTVcIn0uZmEtam9vbWxhOmJlZm9yZXtjb250ZW50OlwiXFxmMWFhXCJ9LmZhLWpvdXJuYWwtd2hpbGxzOmJlZm9yZXtjb250ZW50OlwiXFxmNjZhXCJ9LmZhLWpzOmJlZm9yZXtjb250ZW50OlwiXFxmM2I4XCJ9LmZhLWpzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjNiOVwifS5mYS1qc2ZpZGRsZTpiZWZvcmV7Y29udGVudDpcIlxcZjFjY1wifS5mYS1rYWFiYTpiZWZvcmV7Y29udGVudDpcIlxcZjY2YlwifS5mYS1rYWdnbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ZmFcIn0uZmEta2V5OmJlZm9yZXtjb250ZW50OlwiXFxmMDg0XCJ9LmZhLWtleWJhc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZjVcIn0uZmEta2V5Ym9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMWNcIn0uZmEta2V5Y2RuOmJlZm9yZXtjb250ZW50OlwiXFxmM2JhXCJ9LmZhLWtoYW5kYTpiZWZvcmV7Y29udGVudDpcIlxcZjY2ZFwifS5mYS1raWNrc3RhcnRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjNiYlwifS5mYS1raWNrc3RhcnRlci1rOmJlZm9yZXtjb250ZW50OlwiXFxmM2JjXCJ9LmZhLWtpc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OTZcIn0uZmEta2lzcy1iZWFtOmJlZm9yZXtjb250ZW50OlwiXFxmNTk3XCJ9LmZhLWtpc3Mtd2luay1oZWFydDpiZWZvcmV7Y29udGVudDpcIlxcZjU5OFwifS5mYS1raXdpLWJpcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MzVcIn0uZmEta29ydnVlOmJlZm9yZXtjb250ZW50OlwiXFxmNDJmXCJ9LmZhLWxhbmRtYXJrOmJlZm9yZXtjb250ZW50OlwiXFxmNjZmXCJ9LmZhLWxhbmd1YWdlOmJlZm9yZXtjb250ZW50OlwiXFxmMWFiXCJ9LmZhLWxhcHRvcDpiZWZvcmV7Y29udGVudDpcIlxcZjEwOVwifS5mYS1sYXB0b3AtY29kZTpiZWZvcmV7Y29udGVudDpcIlxcZjVmY1wifS5mYS1sYXB0b3AtbWVkaWNhbDpiZWZvcmV7Y29udGVudDpcIlxcZjgxMlwifS5mYS1sYXJhdmVsOmJlZm9yZXtjb250ZW50OlwiXFxmM2JkXCJ9LmZhLWxhc3RmbTpiZWZvcmV7Y29udGVudDpcIlxcZjIwMlwifS5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMjAzXCJ9LmZhLWxhdWdoOmJlZm9yZXtjb250ZW50OlwiXFxmNTk5XCJ9LmZhLWxhdWdoLWJlYW06YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OWFcIn0uZmEtbGF1Z2gtc3F1aW50OmJlZm9yZXtjb250ZW50OlwiXFxmNTliXCJ9LmZhLWxhdWdoLXdpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OWNcIn0uZmEtbGF5ZXItZ3JvdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1ZmRcIn0uZmEtbGVhZjpiZWZvcmV7Y29udGVudDpcIlxcZjA2Y1wifS5mYS1sZWFucHViOmJlZm9yZXtjb250ZW50OlwiXFxmMjEyXCJ9LmZhLWxlbW9uOmJlZm9yZXtjb250ZW50OlwiXFxmMDk0XCJ9LmZhLWxlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MWRcIn0uZmEtbGVzcy10aGFuOmJlZm9yZXtjb250ZW50OlwiXFxmNTM2XCJ9LmZhLWxlc3MtdGhhbi1lcXVhbDpiZWZvcmV7Y29udGVudDpcIlxcZjUzN1wifS5mYS1sZXZlbC1kb3duLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjNiZVwifS5mYS1sZXZlbC11cC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYmZcIn0uZmEtbGlmZS1yaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmMWNkXCJ9LmZhLWxpZ2h0YnVsYjpiZWZvcmV7Y29udGVudDpcIlxcZjBlYlwifS5mYS1saW5lOmJlZm9yZXtjb250ZW50OlwiXFxmM2MwXCJ9LmZhLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzFcIn0uZmEtbGlua2VkaW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOGNcIn0uZmEtbGlua2VkaW4taW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTFcIn0uZmEtbGlub2RlOmJlZm9yZXtjb250ZW50OlwiXFxmMmI4XCJ9LmZhLWxpbnV4OmJlZm9yZXtjb250ZW50OlwiXFxmMTdjXCJ9LmZhLWxpcmEtc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcZjE5NVwifS5mYS1saXN0OmJlZm9yZXtjb250ZW50OlwiXFxmMDNhXCJ9LmZhLWxpc3QtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMDIyXCJ9LmZhLWxpc3Qtb2w6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwY2JcIn0uZmEtbGlzdC11bDpiZWZvcmV7Y29udGVudDpcIlxcZjBjYVwifS5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmV7Y29udGVudDpcIlxcZjEyNFwifS5mYS1sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxmMDIzXCJ9LmZhLWxvY2stb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZjNjMVwifS5mYS1sb25nLWFycm93LWFsdC1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMzA5XCJ9LmZhLWxvbmctYXJyb3ctYWx0LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzMGFcIn0uZmEtbG9uZy1hcnJvdy1hbHQtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzMGJcIn0uZmEtbG9uZy1hcnJvdy1hbHQtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzMGNcIn0uZmEtbG93LXZpc2lvbjpiZWZvcmV7Y29udGVudDpcIlxcZjJhOFwifS5mYS1sdWdnYWdlLWNhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OWRcIn0uZmEtbHlmdDpiZWZvcmV7Y29udGVudDpcIlxcZjNjM1wifS5mYS1tYWdlbnRvOmJlZm9yZXtjb250ZW50OlwiXFxmM2M0XCJ9LmZhLW1hZ2ljOmJlZm9yZXtjb250ZW50OlwiXFxmMGQwXCJ9LmZhLW1hZ25ldDpiZWZvcmV7Y29udGVudDpcIlxcZjA3NlwifS5mYS1tYWlsLWJ1bGs6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NzRcIn0uZmEtbWFpbGNoaW1wOmJlZm9yZXtjb250ZW50OlwiXFxmNTllXCJ9LmZhLW1hbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODNcIn0uZmEtbWFuZGFsb3JpYW46YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MGZcIn0uZmEtbWFwOmJlZm9yZXtjb250ZW50OlwiXFxmMjc5XCJ9LmZhLW1hcC1tYXJrZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1OWZcIn0uZmEtbWFwLW1hcmtlZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YTBcIn0uZmEtbWFwLW1hcmtlcjpiZWZvcmV7Y29udGVudDpcIlxcZjA0MVwifS5mYS1tYXAtbWFya2VyLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjNjNVwifS5mYS1tYXAtcGluOmJlZm9yZXtjb250ZW50OlwiXFxmMjc2XCJ9LmZhLW1hcC1zaWduczpiZWZvcmV7Y29udGVudDpcIlxcZjI3N1wifS5mYS1tYXJrZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjYwZlwifS5mYS1tYXJrZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YTFcIn0uZmEtbWFyczpiZWZvcmV7Y29udGVudDpcIlxcZjIyMlwifS5mYS1tYXJzLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcIlxcZjIyN1wifS5mYS1tYXJzLXN0cm9rZTpiZWZvcmV7Y29udGVudDpcIlxcZjIyOVwifS5mYS1tYXJzLXN0cm9rZS1oOmJlZm9yZXtjb250ZW50OlwiXFxmMjJiXCJ9LmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMmFcIn0uZmEtbWFzazpiZWZvcmV7Y29udGVudDpcIlxcZjZmYVwifS5mYS1tYXN0b2RvbjpiZWZvcmV7Y29udGVudDpcIlxcZjRmNlwifS5mYS1tYXhjZG46YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMzZcIn0uZmEtbWVkYWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YTJcIn0uZmEtbWVkYXBwczpiZWZvcmV7Y29udGVudDpcIlxcZjNjNlwifS5mYS1tZWRpdW06YmVmb3Jle2NvbnRlbnQ6XCJcXGYyM2FcIn0uZmEtbWVkaXVtLW06YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYzdcIn0uZmEtbWVka2l0OmJlZm9yZXtjb250ZW50OlwiXFxmMGZhXCJ9LmZhLW1lZHJ0OmJlZm9yZXtjb250ZW50OlwiXFxmM2M4XCJ9LmZhLW1lZXR1cDpiZWZvcmV7Y29udGVudDpcIlxcZjJlMFwifS5mYS1tZWdhcG9ydDpiZWZvcmV7Y29udGVudDpcIlxcZjVhM1wifS5mYS1tZWg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMWFcIn0uZmEtbWVoLWJsYW5rOmJlZm9yZXtjb250ZW50OlwiXFxmNWE0XCJ9LmZhLW1laC1yb2xsaW5nLWV5ZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YTVcIn0uZmEtbWVtb3J5OmJlZm9yZXtjb250ZW50OlwiXFxmNTM4XCJ9LmZhLW1lbmRlbGV5OmJlZm9yZXtjb250ZW50OlwiXFxmN2IzXCJ9LmZhLW1lbm9yYWg6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NzZcIn0uZmEtbWVyY3VyeTpiZWZvcmV7Y29udGVudDpcIlxcZjIyM1wifS5mYS1tZXRlb3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3NTNcIn0uZmEtbWljcm9jaGlwOmJlZm9yZXtjb250ZW50OlwiXFxmMmRiXCJ9LmZhLW1pY3JvcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMzBcIn0uZmEtbWljcm9waG9uZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzYzlcIn0uZmEtbWljcm9waG9uZS1hbHQtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MzlcIn0uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcIlxcZjEzMVwifS5mYS1taWNyb3Njb3BlOmJlZm9yZXtjb250ZW50OlwiXFxmNjEwXCJ9LmZhLW1pY3Jvc29mdDpiZWZvcmV7Y29udGVudDpcIlxcZjNjYVwifS5mYS1taW51czpiZWZvcmV7Y29udGVudDpcIlxcZjA2OFwifS5mYS1taW51cy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTZcIn0uZmEtbWludXMtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTQ2XCJ9LmZhLW1pdHRlbjpiZWZvcmV7Y29udGVudDpcIlxcZjdiNVwifS5mYS1taXg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzY2JcIn0uZmEtbWl4Y2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODlcIn0uZmEtbWl6dW5pOmJlZm9yZXtjb250ZW50OlwiXFxmM2NjXCJ9LmZhLW1vYmlsZTpiZWZvcmV7Y29udGVudDpcIlxcZjEwYlwifS5mYS1tb2JpbGUtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmM2NkXCJ9LmZhLW1vZHg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODVcIn0uZmEtbW9uZXJvOmJlZm9yZXtjb250ZW50OlwiXFxmM2QwXCJ9LmZhLW1vbmV5LWJpbGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDZcIn0uZmEtbW9uZXktYmlsbC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZDFcIn0uZmEtbW9uZXktYmlsbC13YXZlOmJlZm9yZXtjb250ZW50OlwiXFxmNTNhXCJ9LmZhLW1vbmV5LWJpbGwtd2F2ZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1M2JcIn0uZmEtbW9uZXktY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1M2NcIn0uZmEtbW9uZXktY2hlY2stYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNTNkXCJ9LmZhLW1vbnVtZW50OmJlZm9yZXtjb250ZW50OlwiXFxmNWE2XCJ9LmZhLW1vb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODZcIn0uZmEtbW9ydGFyLXBlc3RsZTpiZWZvcmV7Y29udGVudDpcIlxcZjVhN1wifS5mYS1tb3NxdWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NzhcIn0uZmEtbW90b3JjeWNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjIxY1wifS5mYS1tb3VudGFpbjpiZWZvcmV7Y29udGVudDpcIlxcZjZmY1wifS5mYS1tb3VzZS1wb2ludGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ1XCJ9LmZhLW11Zy1ob3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3YjZcIn0uZmEtbXVzaWM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDFcIn0uZmEtbmFwc3RlcjpiZWZvcmV7Y29udGVudDpcIlxcZjNkMlwifS5mYS1uZW9zOmJlZm9yZXtjb250ZW50OlwiXFxmNjEyXCJ9LmZhLW5ldHdvcmstd2lyZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2ZmZcIn0uZmEtbmV1dGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjJjXCJ9LmZhLW5ld3NwYXBlcjpiZWZvcmV7Y29udGVudDpcIlxcZjFlYVwifS5mYS1uaW1ibHI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YThcIn0uZmEtbm9kZTpiZWZvcmV7Y29udGVudDpcIlxcZjQxOVwifS5mYS1ub2RlLWpzOmJlZm9yZXtjb250ZW50OlwiXFxmM2QzXCJ9LmZhLW5vdC1lcXVhbDpiZWZvcmV7Y29udGVudDpcIlxcZjUzZVwifS5mYS1ub3Rlcy1tZWRpY2FsOmJlZm9yZXtjb250ZW50OlwiXFxmNDgxXCJ9LmZhLW5wbTpiZWZvcmV7Y29udGVudDpcIlxcZjNkNFwifS5mYS1uczg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZDVcIn0uZmEtbnV0cml0aW9uaXg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZDZcIn0uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ3XCJ9LmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ4XCJ9LmZhLW9kbm9rbGFzc25pa2k6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjNcIn0uZmEtb2Rub2tsYXNzbmlraS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjRcIn0uZmEtb2lsLWNhbjpiZWZvcmV7Y29udGVudDpcIlxcZjYxM1wifS5mYS1vbGQtcmVwdWJsaWM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MTBcIn0uZmEtb206YmVmb3Jle2NvbnRlbnQ6XCJcXGY2NzlcIn0uZmEtb3BlbmNhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyM2RcIn0uZmEtb3BlbmlkOmJlZm9yZXtjb250ZW50OlwiXFxmMTliXCJ9LmZhLW9wZXJhOmJlZm9yZXtjb250ZW50OlwiXFxmMjZhXCJ9LmZhLW9wdGluLW1vbnN0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyM2NcIn0uZmEtb3NpOmJlZm9yZXtjb250ZW50OlwiXFxmNDFhXCJ9LmZhLW90dGVyOmJlZm9yZXtjb250ZW50OlwiXFxmNzAwXCJ9LmZhLW91dGRlbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwM2JcIn0uZmEtcGFnZTQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZDdcIn0uZmEtcGFnZWxpbmVzOmJlZm9yZXtjb250ZW50OlwiXFxmMThjXCJ9LmZhLXBhZ2VyOmJlZm9yZXtjb250ZW50OlwiXFxmODE1XCJ9LmZhLXBhaW50LWJydXNoOmJlZm9yZXtjb250ZW50OlwiXFxmMWZjXCJ9LmZhLXBhaW50LXJvbGxlcjpiZWZvcmV7Y29udGVudDpcIlxcZjVhYVwifS5mYS1wYWxldHRlOmJlZm9yZXtjb250ZW50OlwiXFxmNTNmXCJ9LmZhLXBhbGZlZDpiZWZvcmV7Y29udGVudDpcIlxcZjNkOFwifS5mYS1wYWxsZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ODJcIn0uZmEtcGFwZXItcGxhbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDhcIn0uZmEtcGFwZXJjbGlwOmJlZm9yZXtjb250ZW50OlwiXFxmMGM2XCJ9LmZhLXBhcmFjaHV0ZS1ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0Y2RcIn0uZmEtcGFyYWdyYXBoOmJlZm9yZXtjb250ZW50OlwiXFxmMWRkXCJ9LmZhLXBhcmtpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NDBcIn0uZmEtcGFzc3BvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YWJcIn0uZmEtcGFzdGFmYXJpYW5pc206YmVmb3Jle2NvbnRlbnQ6XCJcXGY2N2JcIn0uZmEtcGFzdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZWFcIn0uZmEtcGF0cmVvbjpiZWZvcmV7Y29udGVudDpcIlxcZjNkOVwifS5mYS1wYXVzZTpiZWZvcmV7Y29udGVudDpcIlxcZjA0Y1wifS5mYS1wYXVzZS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOGJcIn0uZmEtcGF3OmJlZm9yZXtjb250ZW50OlwiXFxmMWIwXCJ9LmZhLXBheXBhbDpiZWZvcmV7Y29udGVudDpcIlxcZjFlZFwifS5mYS1wZWFjZTpiZWZvcmV7Y29udGVudDpcIlxcZjY3Y1wifS5mYS1wZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYzMDRcIn0uZmEtcGVuLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjMwNVwifS5mYS1wZW4tZmFuY3k6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YWNcIn0uZmEtcGVuLW5pYjpiZWZvcmV7Y29udGVudDpcIlxcZjVhZFwifS5mYS1wZW4tc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTRiXCJ9LmZhLXBlbmNpbC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzMDNcIn0uZmEtcGVuY2lsLXJ1bGVyOmJlZm9yZXtjb250ZW50OlwiXFxmNWFlXCJ9LmZhLXBlbm55LWFyY2FkZTpiZWZvcmV7Y29udGVudDpcIlxcZjcwNFwifS5mYS1wZW9wbGUtY2Fycnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0Y2VcIn0uZmEtcGVwcGVyLWhvdDpiZWZvcmV7Y29udGVudDpcIlxcZjgxNlwifS5mYS1wZXJjZW50OmJlZm9yZXtjb250ZW50OlwiXFxmMjk1XCJ9LmZhLXBlcmNlbnRhZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NDFcIn0uZmEtcGVyaXNjb3BlOmJlZm9yZXtjb250ZW50OlwiXFxmM2RhXCJ9LmZhLXBlcnNvbi1ib290aDpiZWZvcmV7Y29udGVudDpcIlxcZjc1NlwifS5mYS1waGFicmljYXRvcjpiZWZvcmV7Y29udGVudDpcIlxcZjNkYlwifS5mYS1waG9lbml4LWZyYW1ld29yazpiZWZvcmV7Y29udGVudDpcIlxcZjNkY1wifS5mYS1waG9lbml4LXNxdWFkcm9uOmJlZm9yZXtjb250ZW50OlwiXFxmNTExXCJ9LmZhLXBob25lOmJlZm9yZXtjb250ZW50OlwiXFxmMDk1XCJ9LmZhLXBob25lLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjg3OVwifS5mYS1waG9uZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcIlxcZjNkZFwifS5mYS1waG9uZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOThcIn0uZmEtcGhvbmUtc3F1YXJlLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjg3YlwifS5mYS1waG9uZS12b2x1bWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYTBcIn0uZmEtcGhvdG8tdmlkZW86YmVmb3Jle2NvbnRlbnQ6XCJcXGY4N2NcIn0uZmEtcGhwOmJlZm9yZXtjb250ZW50OlwiXFxmNDU3XCJ9LmZhLXBpZWQtcGlwZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWVcIn0uZmEtcGllZC1waXBlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYThcIn0uZmEtcGllZC1waXBlci1oYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZTVcIn0uZmEtcGllZC1waXBlci1wcDpiZWZvcmV7Y29udGVudDpcIlxcZjFhN1wifS5mYS1waWdneS1iYW5rOmJlZm9yZXtjb250ZW50OlwiXFxmNGQzXCJ9LmZhLXBpbGxzOmJlZm9yZXtjb250ZW50OlwiXFxmNDg0XCJ9LmZhLXBpbnRlcmVzdDpiZWZvcmV7Y29udGVudDpcIlxcZjBkMlwifS5mYS1waW50ZXJlc3QtcDpiZWZvcmV7Y29udGVudDpcIlxcZjIzMVwifS5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMGQzXCJ9LmZhLXBpenphLXNsaWNlOmJlZm9yZXtjb250ZW50OlwiXFxmODE4XCJ9LmZhLXBsYWNlLW9mLXdvcnNoaXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2N2ZcIn0uZmEtcGxhbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNzJcIn0uZmEtcGxhbmUtYXJyaXZhbDpiZWZvcmV7Y29udGVudDpcIlxcZjVhZlwifS5mYS1wbGFuZS1kZXBhcnR1cmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YjBcIn0uZmEtcGxheTpiZWZvcmV7Y29udGVudDpcIlxcZjA0YlwifS5mYS1wbGF5LWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjE0NFwifS5mYS1wbGF5c3RhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZjNkZlwifS5mYS1wbHVnOmJlZm9yZXtjb250ZW50OlwiXFxmMWU2XCJ9LmZhLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNjdcIn0uZmEtcGx1cy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTVcIn0uZmEtcGx1cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZmVcIn0uZmEtcG9kY2FzdDpiZWZvcmV7Y29udGVudDpcIlxcZjJjZVwifS5mYS1wb2xsOmJlZm9yZXtjb250ZW50OlwiXFxmNjgxXCJ9LmZhLXBvbGwtaDpiZWZvcmV7Y29udGVudDpcIlxcZjY4MlwifS5mYS1wb286YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZmVcIn0uZmEtcG9vLXN0b3JtOmJlZm9yZXtjb250ZW50OlwiXFxmNzVhXCJ9LmZhLXBvb3A6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2MTlcIn0uZmEtcG9ydHJhaXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZTBcIn0uZmEtcG91bmQtc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcZjE1NFwifS5mYS1wb3dlci1vZmY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTFcIn0uZmEtcHJheTpiZWZvcmV7Y29udGVudDpcIlxcZjY4M1wifS5mYS1wcmF5aW5nLWhhbmRzOmJlZm9yZXtjb250ZW50OlwiXFxmNjg0XCJ9LmZhLXByZXNjcmlwdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZjViMVwifS5mYS1wcmVzY3JpcHRpb24tYm90dGxlOmJlZm9yZXtjb250ZW50OlwiXFxmNDg1XCJ9LmZhLXByZXNjcmlwdGlvbi1ib3R0bGUtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNDg2XCJ9LmZhLXByaW50OmJlZm9yZXtjb250ZW50OlwiXFxmMDJmXCJ9LmZhLXByb2NlZHVyZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ODdcIn0uZmEtcHJvZHVjdC1odW50OmJlZm9yZXtjb250ZW50OlwiXFxmMjg4XCJ9LmZhLXByb2plY3QtZGlhZ3JhbTpiZWZvcmV7Y29udGVudDpcIlxcZjU0MlwifS5mYS1wdXNoZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZTFcIn0uZmEtcHV6emxlLXBpZWNlOmJlZm9yZXtjb250ZW50OlwiXFxmMTJlXCJ9LmZhLXB5dGhvbjpiZWZvcmV7Y29udGVudDpcIlxcZjNlMlwifS5mYS1xcTpiZWZvcmV7Y29udGVudDpcIlxcZjFkNlwifS5mYS1xcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjlcIn0uZmEtcXVlc3Rpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjhcIn0uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDU5XCJ9LmZhLXF1aWRkaXRjaDpiZWZvcmV7Y29udGVudDpcIlxcZjQ1OFwifS5mYS1xdWluc2NhcGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0NTlcIn0uZmEtcXVvcmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzRcIn0uZmEtcXVvdGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjEwZFwifS5mYS1xdW90ZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjEwZVwifS5mYS1xdXJhbjpiZWZvcmV7Y29udGVudDpcIlxcZjY4N1wifS5mYS1yLXByb2plY3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZjdcIn0uZmEtcmFkaWF0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxmN2I5XCJ9LmZhLXJhZGlhdGlvbi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3YmFcIn0uZmEtcmFpbmJvdzpiZWZvcmV7Y29udGVudDpcIlxcZjc1YlwifS5mYS1yYW5kb206YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNzRcIn0uZmEtcmFzcGJlcnJ5LXBpOmJlZm9yZXtjb250ZW50OlwiXFxmN2JiXCJ9LmZhLXJhdmVscnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZDlcIn0uZmEtcmVhY3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MWJcIn0uZmEtcmVhY3RldXJvcGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3NWRcIn0uZmEtcmVhZG1lOmJlZm9yZXtjb250ZW50OlwiXFxmNGQ1XCJ9LmZhLXJlYmVsOmJlZm9yZXtjb250ZW50OlwiXFxmMWQwXCJ9LmZhLXJlY2VpcHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NDNcIn0uZmEtcmVjeWNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjFiOFwifS5mYS1yZWQtcml2ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZTNcIn0uZmEtcmVkZGl0OmJlZm9yZXtjb250ZW50OlwiXFxmMWExXCJ9LmZhLXJlZGRpdC1hbGllbjpiZWZvcmV7Y29udGVudDpcIlxcZjI4MVwifS5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMWEyXCJ9LmZhLXJlZGhhdDpiZWZvcmV7Y29udGVudDpcIlxcZjdiY1wifS5mYS1yZWRvOmJlZm9yZXtjb250ZW50OlwiXFxmMDFlXCJ9LmZhLXJlZG8tYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMmY5XCJ9LmZhLXJlZ2lzdGVyZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNWRcIn0uZmEtcmVtb3ZlLWZvcm1hdDpiZWZvcmV7Y29udGVudDpcIlxcZjg3ZFwifS5mYS1yZW5yZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOGJcIn0uZmEtcmVwbHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZTVcIn0uZmEtcmVwbHktYWxsOmJlZm9yZXtjb250ZW50OlwiXFxmMTIyXCJ9LmZhLXJlcGx5ZDpiZWZvcmV7Y29udGVudDpcIlxcZjNlNlwifS5mYS1yZXB1YmxpY2FuOmJlZm9yZXtjb250ZW50OlwiXFxmNzVlXCJ9LmZhLXJlc2VhcmNoZ2F0ZTpiZWZvcmV7Y29udGVudDpcIlxcZjRmOFwifS5mYS1yZXNvbHZpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZTdcIn0uZmEtcmVzdHJvb206YmVmb3Jle2NvbnRlbnQ6XCJcXGY3YmRcIn0uZmEtcmV0d2VldDpiZWZvcmV7Y29udGVudDpcIlxcZjA3OVwifS5mYS1yZXY6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YjJcIn0uZmEtcmliYm9uOmJlZm9yZXtjb250ZW50OlwiXFxmNGQ2XCJ9LmZhLXJpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3MGJcIn0uZmEtcm9hZDpiZWZvcmV7Y29udGVudDpcIlxcZjAxOFwifS5mYS1yb2JvdDpiZWZvcmV7Y29udGVudDpcIlxcZjU0NFwifS5mYS1yb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMzVcIn0uZmEtcm9ja2V0Y2hhdDpiZWZvcmV7Y29udGVudDpcIlxcZjNlOFwifS5mYS1yb2Nrcm1zOmJlZm9yZXtjb250ZW50OlwiXFxmM2U5XCJ9LmZhLXJvdXRlOmJlZm9yZXtjb250ZW50OlwiXFxmNGQ3XCJ9LmZhLXJzczpiZWZvcmV7Y29udGVudDpcIlxcZjA5ZVwifS5mYS1yc3Mtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTQzXCJ9LmZhLXJ1YmxlLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNThcIn0uZmEtcnVsZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NDVcIn0uZmEtcnVsZXItY29tYmluZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NDZcIn0uZmEtcnVsZXItaG9yaXpvbnRhbDpiZWZvcmV7Y29udGVudDpcIlxcZjU0N1wifS5mYS1ydWxlci12ZXJ0aWNhbDpiZWZvcmV7Y29udGVudDpcIlxcZjU0OFwifS5mYS1ydW5uaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmNzBjXCJ9LmZhLXJ1cGVlLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNTZcIn0uZmEtc2FkLWNyeTpiZWZvcmV7Y29udGVudDpcIlxcZjViM1wifS5mYS1zYWQtdGVhcjpiZWZvcmV7Y29udGVudDpcIlxcZjViNFwifS5mYS1zYWZhcmk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjdcIn0uZmEtc2FsZXNmb3JjZTpiZWZvcmV7Y29udGVudDpcIlxcZjgzYlwifS5mYS1zYXNzOmJlZm9yZXtjb250ZW50OlwiXFxmNDFlXCJ9LmZhLXNhdGVsbGl0ZTpiZWZvcmV7Y29udGVudDpcIlxcZjdiZlwifS5mYS1zYXRlbGxpdGUtZGlzaDpiZWZvcmV7Y29udGVudDpcIlxcZjdjMFwifS5mYS1zYXZlOmJlZm9yZXtjb250ZW50OlwiXFxmMGM3XCJ9LmZhLXNjaGxpeDpiZWZvcmV7Y29udGVudDpcIlxcZjNlYVwifS5mYS1zY2hvb2w6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NDlcIn0uZmEtc2NyZXdkcml2ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NGFcIn0uZmEtc2NyaWJkOmJlZm9yZXtjb250ZW50OlwiXFxmMjhhXCJ9LmZhLXNjcm9sbDpiZWZvcmV7Y29udGVudDpcIlxcZjcwZVwifS5mYS1zZC1jYXJkOmJlZm9yZXtjb250ZW50OlwiXFxmN2MyXCJ9LmZhLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZjAwMlwifS5mYS1zZWFyY2gtZG9sbGFyOmJlZm9yZXtjb250ZW50OlwiXFxmNjg4XCJ9LmZhLXNlYXJjaC1sb2NhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZjY4OVwifS5mYS1zZWFyY2gtbWludXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTBcIn0uZmEtc2VhcmNoLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMGVcIn0uZmEtc2VhcmNoZW5naW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZWJcIn0uZmEtc2VlZGxpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZDhcIn0uZmEtc2VsbGNhc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZGFcIn0uZmEtc2VsbHN5OmJlZm9yZXtjb250ZW50OlwiXFxmMjEzXCJ9LmZhLXNlcnZlcjpiZWZvcmV7Y29udGVudDpcIlxcZjIzM1wifS5mYS1zZXJ2aWNlc3RhY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZWNcIn0uZmEtc2hhcGVzOmJlZm9yZXtjb250ZW50OlwiXFxmNjFmXCJ9LmZhLXNoYXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMDY0XCJ9LmZhLXNoYXJlLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjFlMFwifS5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMWUxXCJ9LmZhLXNoYXJlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE0ZFwifS5mYS1zaGVrZWwtc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcZjIwYlwifS5mYS1zaGllbGQtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmM2VkXCJ9LmZhLXNoaXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMWFcIn0uZmEtc2hpcHBpbmctZmFzdDpiZWZvcmV7Y29udGVudDpcIlxcZjQ4YlwifS5mYS1zaGlydHNpbmJ1bGs6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTRcIn0uZmEtc2hvZS1wcmludHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NGJcIn0uZmEtc2hvcHBpbmctYmFnOmJlZm9yZXtjb250ZW50OlwiXFxmMjkwXCJ9LmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmV7Y29udGVudDpcIlxcZjI5MVwifS5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMDdhXCJ9LmZhLXNob3B3YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmNWI1XCJ9LmZhLXNob3dlcjpiZWZvcmV7Y29udGVudDpcIlxcZjJjY1wifS5mYS1zaHV0dGxlLXZhbjpiZWZvcmV7Y29udGVudDpcIlxcZjViNlwifS5mYS1zaWduOmJlZm9yZXtjb250ZW50OlwiXFxmNGQ5XCJ9LmZhLXNpZ24taW4tYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMmY2XCJ9LmZhLXNpZ24tbGFuZ3VhZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYTdcIn0uZmEtc2lnbi1vdXQtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMmY1XCJ9LmZhLXNpZ25hbDpiZWZvcmV7Y29udGVudDpcIlxcZjAxMlwifS5mYS1zaWduYXR1cmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YjdcIn0uZmEtc2ltLWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3YzRcIn0uZmEtc2ltcGx5YnVpbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTVcIn0uZmEtc2lzdHJpeDpiZWZvcmV7Y29udGVudDpcIlxcZjNlZVwifS5mYS1zaXRlbWFwOmJlZm9yZXtjb250ZW50OlwiXFxmMGU4XCJ9LmZhLXNpdGg6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MTJcIn0uZmEtc2thdGluZzpiZWZvcmV7Y29udGVudDpcIlxcZjdjNVwifS5mYS1za2V0Y2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3YzZcIn0uZmEtc2tpaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmN2M5XCJ9LmZhLXNraWluZy1ub3JkaWM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3Y2FcIn0uZmEtc2t1bGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1NGNcIn0uZmEtc2t1bGwtY3Jvc3Nib25lczpiZWZvcmV7Y29udGVudDpcIlxcZjcxNFwifS5mYS1za3lhdGxhczpiZWZvcmV7Y29udGVudDpcIlxcZjIxNlwifS5mYS1za3lwZTpiZWZvcmV7Y29udGVudDpcIlxcZjE3ZVwifS5mYS1zbGFjazpiZWZvcmV7Y29udGVudDpcIlxcZjE5OFwifS5mYS1zbGFjay1oYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmM2VmXCJ9LmZhLXNsYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmNzE1XCJ9LmZhLXNsZWlnaDpiZWZvcmV7Y29udGVudDpcIlxcZjdjY1wifS5mYS1zbGlkZXJzLWg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZGVcIn0uZmEtc2xpZGVzaGFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjFlN1wifS5mYS1zbWlsZTpiZWZvcmV7Y29udGVudDpcIlxcZjExOFwifS5mYS1zbWlsZS1iZWFtOmJlZm9yZXtjb250ZW50OlwiXFxmNWI4XCJ9LmZhLXNtaWxlLXdpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZGFcIn0uZmEtc21vZzpiZWZvcmV7Y29udGVudDpcIlxcZjc1ZlwifS5mYS1zbW9raW5nOmJlZm9yZXtjb250ZW50OlwiXFxmNDhkXCJ9LmZhLXNtb2tpbmctYmFuOmJlZm9yZXtjb250ZW50OlwiXFxmNTRkXCJ9LmZhLXNtczpiZWZvcmV7Y29udGVudDpcIlxcZjdjZFwifS5mYS1zbmFwY2hhdDpiZWZvcmV7Y29udGVudDpcIlxcZjJhYlwifS5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmV7Y29udGVudDpcIlxcZjJhY1wifS5mYS1zbmFwY2hhdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWRcIn0uZmEtc25vd2JvYXJkaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmN2NlXCJ9LmZhLXNub3dmbGFrZTpiZWZvcmV7Y29udGVudDpcIlxcZjJkY1wifS5mYS1zbm93bWFuOmJlZm9yZXtjb250ZW50OlwiXFxmN2QwXCJ9LmZhLXNub3dwbG93OmJlZm9yZXtjb250ZW50OlwiXFxmN2QyXCJ9LmZhLXNvY2tzOmJlZm9yZXtjb250ZW50OlwiXFxmNjk2XCJ9LmZhLXNvbGFyLXBhbmVsOmJlZm9yZXtjb250ZW50OlwiXFxmNWJhXCJ9LmZhLXNvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZGNcIn0uZmEtc29ydC1hbHBoYS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTVkXCJ9LmZhLXNvcnQtYWxwaGEtZG93bi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY4ODFcIn0uZmEtc29ydC1hbHBoYS11cDpiZWZvcmV7Y29udGVudDpcIlxcZjE1ZVwifS5mYS1zb3J0LWFscGhhLXVwLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjg4MlwifS5mYS1zb3J0LWFtb3VudC1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTYwXCJ9LmZhLXNvcnQtYW1vdW50LWRvd24tYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmODg0XCJ9LmZhLXNvcnQtYW1vdW50LXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTYxXCJ9LmZhLXNvcnQtYW1vdW50LXVwLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjg4NVwifS5mYS1zb3J0LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZGRcIn0uZmEtc29ydC1udW1lcmljLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNjJcIn0uZmEtc29ydC1udW1lcmljLWRvd24tYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmODg2XCJ9LmZhLXNvcnQtbnVtZXJpYy11cDpiZWZvcmV7Y29udGVudDpcIlxcZjE2M1wifS5mYS1zb3J0LW51bWVyaWMtdXAtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmODg3XCJ9LmZhLXNvcnQtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZGVcIn0uZmEtc291bmRjbG91ZDpiZWZvcmV7Y29udGVudDpcIlxcZjFiZVwifS5mYS1zb3VyY2V0cmVlOmJlZm9yZXtjb250ZW50OlwiXFxmN2QzXCJ9LmZhLXNwYTpiZWZvcmV7Y29udGVudDpcIlxcZjViYlwifS5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZXtjb250ZW50OlwiXFxmMTk3XCJ9LmZhLXNwZWFrYXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZjNcIn0uZmEtc3BlYWtlci1kZWNrOmJlZm9yZXtjb250ZW50OlwiXFxmODNjXCJ9LmZhLXNwZWxsLWNoZWNrOmJlZm9yZXtjb250ZW50OlwiXFxmODkxXCJ9LmZhLXNwaWRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjcxN1wifS5mYS1zcGlubmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMTEwXCJ9LmZhLXNwbG90Y2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YmNcIn0uZmEtc3BvdGlmeTpiZWZvcmV7Y29udGVudDpcIlxcZjFiY1wifS5mYS1zcHJheS1jYW46YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YmRcIn0uZmEtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMGM4XCJ9LmZhLXNxdWFyZS1mdWxsOmJlZm9yZXtjb250ZW50OlwiXFxmNDVjXCJ9LmZhLXNxdWFyZS1yb290LWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjY5OFwifS5mYS1zcXVhcmVzcGFjZTpiZWZvcmV7Y29udGVudDpcIlxcZjViZVwifS5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmV7Y29udGVudDpcIlxcZjE4ZFwifS5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmV7Y29udGVudDpcIlxcZjE2Y1wifS5mYS1zdGFja3BhdGg6YmVmb3Jle2NvbnRlbnQ6XCJcXGY4NDJcIn0uZmEtc3RhbXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YmZcIn0uZmEtc3RhcjpiZWZvcmV7Y29udGVudDpcIlxcZjAwNVwifS5mYS1zdGFyLWFuZC1jcmVzY2VudDpiZWZvcmV7Y29udGVudDpcIlxcZjY5OVwifS5mYS1zdGFyLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODlcIn0uZmEtc3Rhci1oYWxmLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjVjMFwifS5mYS1zdGFyLW9mLWRhdmlkOmJlZm9yZXtjb250ZW50OlwiXFxmNjlhXCJ9LmZhLXN0YXItb2YtbGlmZTpiZWZvcmV7Y29udGVudDpcIlxcZjYyMVwifS5mYS1zdGF5bGlua2VkOmJlZm9yZXtjb250ZW50OlwiXFxmM2Y1XCJ9LmZhLXN0ZWFtOmJlZm9yZXtjb250ZW50OlwiXFxmMWI2XCJ9LmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjFiN1wifS5mYS1zdGVhbS1zeW1ib2w6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZjZcIn0uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjA0OFwifS5mYS1zdGVwLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTFcIn0uZmEtc3RldGhvc2NvcGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZjFcIn0uZmEtc3RpY2tlci1tdWxlOmJlZm9yZXtjb250ZW50OlwiXFxmM2Y3XCJ9LmZhLXN0aWNreS1ub3RlOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ5XCJ9LmZhLXN0b3A6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNGRcIn0uZmEtc3RvcC1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOGRcIn0uZmEtc3RvcHdhdGNoOmJlZm9yZXtjb250ZW50OlwiXFxmMmYyXCJ9LmZhLXN0b3JlOmJlZm9yZXtjb250ZW50OlwiXFxmNTRlXCJ9LmZhLXN0b3JlLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjU0ZlwifS5mYS1zdHJhdmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MjhcIn0uZmEtc3RyZWFtOmJlZm9yZXtjb250ZW50OlwiXFxmNTUwXCJ9LmZhLXN0cmVldC12aWV3OmJlZm9yZXtjb250ZW50OlwiXFxmMjFkXCJ9LmZhLXN0cmlrZXRocm91Z2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwY2NcIn0uZmEtc3RyaXBlOmJlZm9yZXtjb250ZW50OlwiXFxmNDI5XCJ9LmZhLXN0cmlwZS1zOmJlZm9yZXtjb250ZW50OlwiXFxmNDJhXCJ9LmZhLXN0cm9vcHdhZmVsOmJlZm9yZXtjb250ZW50OlwiXFxmNTUxXCJ9LmZhLXN0dWRpb3ZpbmFyaTpiZWZvcmV7Y29udGVudDpcIlxcZjNmOFwifS5mYS1zdHVtYmxldXBvbjpiZWZvcmV7Y29udGVudDpcIlxcZjFhNFwifS5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYTNcIn0uZmEtc3Vic2NyaXB0OmJlZm9yZXtjb250ZW50OlwiXFxmMTJjXCJ9LmZhLXN1YndheTpiZWZvcmV7Y29udGVudDpcIlxcZjIzOVwifS5mYS1zdWl0Y2FzZTpiZWZvcmV7Y29udGVudDpcIlxcZjBmMlwifS5mYS1zdWl0Y2FzZS1yb2xsaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmNWMxXCJ9LmZhLXN1bjpiZWZvcmV7Y29udGVudDpcIlxcZjE4NVwifS5mYS1zdXBlcnBvd2VyczpiZWZvcmV7Y29udGVudDpcIlxcZjJkZFwifS5mYS1zdXBlcnNjcmlwdDpiZWZvcmV7Y29udGVudDpcIlxcZjEyYlwifS5mYS1zdXBwbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZjlcIn0uZmEtc3VycHJpc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YzJcIn0uZmEtc3VzZTpiZWZvcmV7Y29udGVudDpcIlxcZjdkNlwifS5mYS1zd2F0Y2hib29rOmJlZm9yZXtjb250ZW50OlwiXFxmNWMzXCJ9LmZhLXN3aW1tZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YzRcIn0uZmEtc3dpbW1pbmctcG9vbDpiZWZvcmV7Y29udGVudDpcIlxcZjVjNVwifS5mYS1zeW1mb255OmJlZm9yZXtjb250ZW50OlwiXFxmODNkXCJ9LmZhLXN5bmFnb2d1ZTpiZWZvcmV7Y29udGVudDpcIlxcZjY5YlwifS5mYS1zeW5jOmJlZm9yZXtjb250ZW50OlwiXFxmMDIxXCJ9LmZhLXN5bmMtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMmYxXCJ9LmZhLXN5cmluZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0OGVcIn0uZmEtdGFibGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwY2VcIn0uZmEtdGFibGUtdGVubmlzOmJlZm9yZXtjb250ZW50OlwiXFxmNDVkXCJ9LmZhLXRhYmxldDpiZWZvcmV7Y29udGVudDpcIlxcZjEwYVwifS5mYS10YWJsZXQtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmM2ZhXCJ9LmZhLXRhYmxldHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0OTBcIn0uZmEtdGFjaG9tZXRlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZmRcIn0uZmEtdGFnOmJlZm9yZXtjb250ZW50OlwiXFxmMDJiXCJ9LmZhLXRhZ3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMmNcIn0uZmEtdGFwZTpiZWZvcmV7Y29udGVudDpcIlxcZjRkYlwifS5mYS10YXNrczpiZWZvcmV7Y29udGVudDpcIlxcZjBhZVwifS5mYS10YXhpOmJlZm9yZXtjb250ZW50OlwiXFxmMWJhXCJ9LmZhLXRlYW1zcGVhazpiZWZvcmV7Y29udGVudDpcIlxcZjRmOVwifS5mYS10ZWV0aDpiZWZvcmV7Y29udGVudDpcIlxcZjYyZVwifS5mYS10ZWV0aC1vcGVuOmJlZm9yZXtjb250ZW50OlwiXFxmNjJmXCJ9LmZhLXRlbGVncmFtOmJlZm9yZXtjb250ZW50OlwiXFxmMmM2XCJ9LmZhLXRlbGVncmFtLXBsYW5lOmJlZm9yZXtjb250ZW50OlwiXFxmM2ZlXCJ9LmZhLXRlbXBlcmF0dXJlLWhpZ2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3NjlcIn0uZmEtdGVtcGVyYXR1cmUtbG93OmJlZm9yZXtjb250ZW50OlwiXFxmNzZiXCJ9LmZhLXRlbmNlbnQtd2VpYm86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDVcIn0uZmEtdGVuZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3ZDdcIn0uZmEtdGVybWluYWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjBcIn0uZmEtdGV4dC1oZWlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzRcIn0uZmEtdGV4dC13aWR0aDpiZWZvcmV7Y29udGVudDpcIlxcZjAzNVwifS5mYS10aDpiZWZvcmV7Y29udGVudDpcIlxcZjAwYVwifS5mYS10aC1sYXJnZTpiZWZvcmV7Y29udGVudDpcIlxcZjAwOVwifS5mYS10aC1saXN0OmJlZm9yZXtjb250ZW50OlwiXFxmMDBiXCJ9LmZhLXRoZS1yZWQteWV0aTpiZWZvcmV7Y29udGVudDpcIlxcZjY5ZFwifS5mYS10aGVhdGVyLW1hc2tzOmJlZm9yZXtjb250ZW50OlwiXFxmNjMwXCJ9LmZhLXRoZW1lY286YmVmb3Jle2NvbnRlbnQ6XCJcXGY1YzZcIn0uZmEtdGhlbWVpc2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMmIyXCJ9LmZhLXRoZXJtb21ldGVyOmJlZm9yZXtjb250ZW50OlwiXFxmNDkxXCJ9LmZhLXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZXtjb250ZW50OlwiXFxmMmNiXCJ9LmZhLXRoZXJtb21ldGVyLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzdcIn0uZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmV7Y29udGVudDpcIlxcZjJjOVwifS5mYS10aGVybW9tZXRlci1xdWFydGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMmNhXCJ9LmZhLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOmJlZm9yZXtjb250ZW50OlwiXFxmMmM4XCJ9LmZhLXRoaW5rLXBlYWtzOmJlZm9yZXtjb250ZW50OlwiXFxmNzMxXCJ9LmZhLXRodW1icy1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTY1XCJ9LmZhLXRodW1icy11cDpiZWZvcmV7Y29udGVudDpcIlxcZjE2NFwifS5mYS10aHVtYnRhY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOGRcIn0uZmEtdGlja2V0LWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjNmZlwifS5mYS10aW1lczpiZWZvcmV7Y29udGVudDpcIlxcZjAwZFwifS5mYS10aW1lcy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTdcIn0uZmEtdGludDpiZWZvcmV7Y29udGVudDpcIlxcZjA0M1wifS5mYS10aW50LXNsYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmNWM3XCJ9LmZhLXRpcmVkOmJlZm9yZXtjb250ZW50OlwiXFxmNWM4XCJ9LmZhLXRvZ2dsZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDRcIn0uZmEtdG9nZ2xlLW9uOmJlZm9yZXtjb250ZW50OlwiXFxmMjA1XCJ9LmZhLXRvaWxldDpiZWZvcmV7Y29udGVudDpcIlxcZjdkOFwifS5mYS10b2lsZXQtcGFwZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3MWVcIn0uZmEtdG9vbGJveDpiZWZvcmV7Y29udGVudDpcIlxcZjU1MlwifS5mYS10b29sczpiZWZvcmV7Y29udGVudDpcIlxcZjdkOVwifS5mYS10b290aDpiZWZvcmV7Y29udGVudDpcIlxcZjVjOVwifS5mYS10b3JhaDpiZWZvcmV7Y29udGVudDpcIlxcZjZhMFwifS5mYS10b3JpaS1nYXRlOmJlZm9yZXtjb250ZW50OlwiXFxmNmExXCJ9LmZhLXRyYWN0b3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3MjJcIn0uZmEtdHJhZGUtZmVkZXJhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZjUxM1wifS5mYS10cmFkZW1hcms6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNWNcIn0uZmEtdHJhZmZpYy1saWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjYzN1wifS5mYS10cmFpbjpiZWZvcmV7Y29udGVudDpcIlxcZjIzOFwifS5mYS10cmFtOmJlZm9yZXtjb250ZW50OlwiXFxmN2RhXCJ9LmZhLXRyYW5zZ2VuZGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjI0XCJ9LmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjIyNVwifS5mYS10cmFzaDpiZWZvcmV7Y29udGVudDpcIlxcZjFmOFwifS5mYS10cmFzaC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZWRcIn0uZmEtdHJhc2gtcmVzdG9yZTpiZWZvcmV7Y29udGVudDpcIlxcZjgyOVwifS5mYS10cmFzaC1yZXN0b3JlLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjgyYVwifS5mYS10cmVlOmJlZm9yZXtjb250ZW50OlwiXFxmMWJiXCJ9LmZhLXRyZWxsbzpiZWZvcmV7Y29udGVudDpcIlxcZjE4MVwifS5mYS10cmlwYWR2aXNvcjpiZWZvcmV7Y29udGVudDpcIlxcZjI2MlwifS5mYS10cm9waHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOTFcIn0uZmEtdHJ1Y2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDFcIn0uZmEtdHJ1Y2stbG9hZGluZzpiZWZvcmV7Y29udGVudDpcIlxcZjRkZVwifS5mYS10cnVjay1tb25zdGVyOmJlZm9yZXtjb250ZW50OlwiXFxmNjNiXCJ9LmZhLXRydWNrLW1vdmluZzpiZWZvcmV7Y29udGVudDpcIlxcZjRkZlwifS5mYS10cnVjay1waWNrdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2M2NcIn0uZmEtdHNoaXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmNTUzXCJ9LmZhLXR0eTpiZWZvcmV7Y29udGVudDpcIlxcZjFlNFwifS5mYS10dW1ibHI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzNcIn0uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE3NFwifS5mYS10djpiZWZvcmV7Y29udGVudDpcIlxcZjI2Y1wifS5mYS10d2l0Y2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZThcIn0uZmEtdHdpdHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjA5OVwifS5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjA4MVwifS5mYS10eXBvMzpiZWZvcmV7Y29udGVudDpcIlxcZjQyYlwifS5mYS11YmVyOmJlZm9yZXtjb250ZW50OlwiXFxmNDAyXCJ9LmZhLXVidW50dTpiZWZvcmV7Y29udGVudDpcIlxcZjdkZlwifS5mYS11aWtpdDpiZWZvcmV7Y29udGVudDpcIlxcZjQwM1wifS5mYS11bWJyZWxsYTpiZWZvcmV7Y29udGVudDpcIlxcZjBlOVwifS5mYS11bWJyZWxsYS1iZWFjaDpiZWZvcmV7Y29udGVudDpcIlxcZjVjYVwifS5mYS11bmRlcmxpbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwY2RcIn0uZmEtdW5kbzpiZWZvcmV7Y29udGVudDpcIlxcZjBlMlwifS5mYS11bmRvLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjJlYVwifS5mYS11bmlyZWdpc3RyeTpiZWZvcmV7Y29udGVudDpcIlxcZjQwNFwifS5mYS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZXtjb250ZW50OlwiXFxmMjlhXCJ9LmZhLXVuaXZlcnNpdHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOWNcIn0uZmEtdW5saW5rOmJlZm9yZXtjb250ZW50OlwiXFxmMTI3XCJ9LmZhLXVubG9jazpiZWZvcmV7Y29udGVudDpcIlxcZjA5Y1wifS5mYS11bmxvY2stYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMTNlXCJ9LmZhLXVudGFwcGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MDVcIn0uZmEtdXBsb2FkOmJlZm9yZXtjb250ZW50OlwiXFxmMDkzXCJ9LmZhLXVwczpiZWZvcmV7Y29udGVudDpcIlxcZjdlMFwifS5mYS11c2I6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODdcIn0uZmEtdXNlcjpiZWZvcmV7Y29udGVudDpcIlxcZjAwN1wifS5mYS11c2VyLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjQwNlwifS5mYS11c2VyLWFsdC1zbGFzaDpiZWZvcmV7Y29udGVudDpcIlxcZjRmYVwifS5mYS11c2VyLWFzdHJvbmF1dDpiZWZvcmV7Y29udGVudDpcIlxcZjRmYlwifS5mYS11c2VyLWNoZWNrOmJlZm9yZXtjb250ZW50OlwiXFxmNGZjXCJ9LmZhLXVzZXItY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMmJkXCJ9LmZhLXVzZXItY2xvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZmRcIn0uZmEtdXNlci1jb2c6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0ZmVcIn0uZmEtdXNlci1lZGl0OmJlZm9yZXtjb250ZW50OlwiXFxmNGZmXCJ9LmZhLXVzZXItZnJpZW5kczpiZWZvcmV7Y29udGVudDpcIlxcZjUwMFwifS5mYS11c2VyLWdyYWR1YXRlOmJlZm9yZXtjb250ZW50OlwiXFxmNTAxXCJ9LmZhLXVzZXItaW5qdXJlZDpiZWZvcmV7Y29udGVudDpcIlxcZjcyOFwifS5mYS11c2VyLWxvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MDJcIn0uZmEtdXNlci1tZDpiZWZvcmV7Y29udGVudDpcIlxcZjBmMFwifS5mYS11c2VyLW1pbnVzOmJlZm9yZXtjb250ZW50OlwiXFxmNTAzXCJ9LmZhLXVzZXItbmluamE6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MDRcIn0uZmEtdXNlci1udXJzZTpiZWZvcmV7Y29udGVudDpcIlxcZjgyZlwifS5mYS11c2VyLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMzRcIn0uZmEtdXNlci1zZWNyZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMWJcIn0uZmEtdXNlci1zaGllbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1MDVcIn0uZmEtdXNlci1zbGFzaDpiZWZvcmV7Y29udGVudDpcIlxcZjUwNlwifS5mYS11c2VyLXRhZzpiZWZvcmV7Y29udGVudDpcIlxcZjUwN1wifS5mYS11c2VyLXRpZTpiZWZvcmV7Y29udGVudDpcIlxcZjUwOFwifS5mYS11c2VyLXRpbWVzOmJlZm9yZXtjb250ZW50OlwiXFxmMjM1XCJ9LmZhLXVzZXJzOmJlZm9yZXtjb250ZW50OlwiXFxmMGMwXCJ9LmZhLXVzZXJzLWNvZzpiZWZvcmV7Y29udGVudDpcIlxcZjUwOVwifS5mYS11c3BzOmJlZm9yZXtjb250ZW50OlwiXFxmN2UxXCJ9LmZhLXVzc3VubmFoOmJlZm9yZXtjb250ZW50OlwiXFxmNDA3XCJ9LmZhLXV0ZW5zaWwtc3Bvb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZTVcIn0uZmEtdXRlbnNpbHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZTdcIn0uZmEtdmFhZGluOmJlZm9yZXtjb250ZW50OlwiXFxmNDA4XCJ9LmZhLXZlY3Rvci1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1Y2JcIn0uZmEtdmVudXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjFcIn0uZmEtdmVudXMtZG91YmxlOmJlZm9yZXtjb250ZW50OlwiXFxmMjI2XCJ9LmZhLXZlbnVzLW1hcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjhcIn0uZmEtdmlhY29pbjpiZWZvcmV7Y29udGVudDpcIlxcZjIzN1wifS5mYS12aWFkZW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYTlcIn0uZmEtdmlhZGVvLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjJhYVwifS5mYS12aWFsOmJlZm9yZXtjb250ZW50OlwiXFxmNDkyXCJ9LmZhLXZpYWxzOmJlZm9yZXtjb250ZW50OlwiXFxmNDkzXCJ9LmZhLXZpYmVyOmJlZm9yZXtjb250ZW50OlwiXFxmNDA5XCJ9LmZhLXZpZGVvOmJlZm9yZXtjb250ZW50OlwiXFxmMDNkXCJ9LmZhLXZpZGVvLXNsYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmNGUyXCJ9LmZhLXZpaGFyYTpiZWZvcmV7Y29udGVudDpcIlxcZjZhN1wifS5mYS12aW1lbzpiZWZvcmV7Y29udGVudDpcIlxcZjQwYVwifS5mYS12aW1lby1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOTRcIn0uZmEtdmltZW8tdjpiZWZvcmV7Y29udGVudDpcIlxcZjI3ZFwifS5mYS12aW5lOmJlZm9yZXtjb250ZW50OlwiXFxmMWNhXCJ9LmZhLXZrOmJlZm9yZXtjb250ZW50OlwiXFxmMTg5XCJ9LmZhLXZudjpiZWZvcmV7Y29udGVudDpcIlxcZjQwYlwifS5mYS12b2ljZW1haWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGY4OTdcIn0uZmEtdm9sbGV5YmFsbC1iYWxsOmJlZm9yZXtjb250ZW50OlwiXFxmNDVmXCJ9LmZhLXZvbHVtZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMDI3XCJ9LmZhLXZvbHVtZS1tdXRlOmJlZm9yZXtjb250ZW50OlwiXFxmNmE5XCJ9LmZhLXZvbHVtZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjZcIn0uZmEtdm9sdW1lLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMDI4XCJ9LmZhLXZvdGUteWVhOmJlZm9yZXtjb250ZW50OlwiXFxmNzcyXCJ9LmZhLXZyLWNhcmRib2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjcyOVwifS5mYS12dWVqczpiZWZvcmV7Y29udGVudDpcIlxcZjQxZlwifS5mYS13YWxraW5nOmJlZm9yZXtjb250ZW50OlwiXFxmNTU0XCJ9LmZhLXdhbGxldDpiZWZvcmV7Y29udGVudDpcIlxcZjU1NVwifS5mYS13YXJlaG91c2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0OTRcIn0uZmEtd2F0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3NzNcIn0uZmEtd2F2ZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY4M2VcIn0uZmEtd2F6ZTpiZWZvcmV7Y29udGVudDpcIlxcZjgzZlwifS5mYS13ZWVibHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGY1Y2NcIn0uZmEtd2VpYm86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOGFcIn0uZmEtd2VpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmNDk2XCJ9LmZhLXdlaWdodC1oYW5naW5nOmJlZm9yZXtjb250ZW50OlwiXFxmNWNkXCJ9LmZhLXdlaXhpbjpiZWZvcmV7Y29udGVudDpcIlxcZjFkN1wifS5mYS13aGF0c2FwcDpiZWZvcmV7Y29udGVudDpcIlxcZjIzMlwifS5mYS13aGF0c2FwcC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MGNcIn0uZmEtd2hlZWxjaGFpcjpiZWZvcmV7Y29udGVudDpcIlxcZjE5M1wifS5mYS13aG1jczpiZWZvcmV7Y29udGVudDpcIlxcZjQwZFwifS5mYS13aWZpOmJlZm9yZXtjb250ZW50OlwiXFxmMWViXCJ9LmZhLXdpa2lwZWRpYS13OmJlZm9yZXtjb250ZW50OlwiXFxmMjY2XCJ9LmZhLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGY3MmVcIn0uZmEtd2luZG93LWNsb3NlOmJlZm9yZXtjb250ZW50OlwiXFxmNDEwXCJ9LmZhLXdpbmRvdy1tYXhpbWl6ZTpiZWZvcmV7Y29udGVudDpcIlxcZjJkMFwifS5mYS13aW5kb3ctbWluaW1pemU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZDFcIn0uZmEtd2luZG93LXJlc3RvcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZDJcIn0uZmEtd2luZG93czpiZWZvcmV7Y29udGVudDpcIlxcZjE3YVwifS5mYS13aW5lLWJvdHRsZTpiZWZvcmV7Y29udGVudDpcIlxcZjcyZlwifS5mYS13aW5lLWdsYXNzOmJlZm9yZXtjb250ZW50OlwiXFxmNGUzXCJ9LmZhLXdpbmUtZ2xhc3MtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmNWNlXCJ9LmZhLXdpeDpiZWZvcmV7Y29udGVudDpcIlxcZjVjZlwifS5mYS13aXphcmRzLW9mLXRoZS1jb2FzdDpiZWZvcmV7Y29udGVudDpcIlxcZjczMFwifS5mYS13b2xmLXBhY2stYmF0dGFsaW9uOmJlZm9yZXtjb250ZW50OlwiXFxmNTE0XCJ9LmZhLXdvbi1zaWduOmJlZm9yZXtjb250ZW50OlwiXFxmMTU5XCJ9LmZhLXdvcmRwcmVzczpiZWZvcmV7Y29udGVudDpcIlxcZjE5YVwifS5mYS13b3JkcHJlc3Mtc2ltcGxlOmJlZm9yZXtjb250ZW50OlwiXFxmNDExXCJ9LmZhLXdwYmVnaW5uZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOTdcIn0uZmEtd3BleHBsb3JlcjpiZWZvcmV7Y29udGVudDpcIlxcZjJkZVwifS5mYS13cGZvcm1zOmJlZm9yZXtjb250ZW50OlwiXFxmMjk4XCJ9LmZhLXdwcmVzc3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGYzZTRcIn0uZmEtd3JlbmNoOmJlZm9yZXtjb250ZW50OlwiXFxmMGFkXCJ9LmZhLXgtcmF5OmJlZm9yZXtjb250ZW50OlwiXFxmNDk3XCJ9LmZhLXhib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXGY0MTJcIn0uZmEteGluZzpiZWZvcmV7Y29udGVudDpcIlxcZjE2OFwifS5mYS14aW5nLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE2OVwifS5mYS15LWNvbWJpbmF0b3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyM2JcIn0uZmEteWFob286YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOWVcIn0uZmEteWFtbWVyOmJlZm9yZXtjb250ZW50OlwiXFxmODQwXCJ9LmZhLXlhbmRleDpiZWZvcmV7Y29udGVudDpcIlxcZjQxM1wifS5mYS15YW5kZXgtaW50ZXJuYXRpb25hbDpiZWZvcmV7Y29udGVudDpcIlxcZjQxNFwifS5mYS15YXJuOmJlZm9yZXtjb250ZW50OlwiXFxmN2UzXCJ9LmZhLXllbHA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZTlcIn0uZmEteWVuLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNTdcIn0uZmEteWluLXlhbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGY2YWRcIn0uZmEteW9hc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYjFcIn0uZmEteW91dHViZTpiZWZvcmV7Y29udGVudDpcIlxcZjE2N1wifS5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjQzMVwifS5mYS16aGlodTpiZWZvcmV7Y29udGVudDpcIlxcZjYzZlwifS5zci1vbmx5e2JvcmRlcjowO2NsaXA6cmVjdCgwLDAsMCwwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4fS5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsLnNyLW9ubHktZm9jdXNhYmxlOmZvY3Vze2NsaXA6YXV0bztoZWlnaHQ6YXV0bzttYXJnaW46MDtvdmVyZmxvdzp2aXNpYmxlO3Bvc2l0aW9uOnN0YXRpYzt3aWR0aDphdXRvfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6XCJGb250IEF3ZXNvbWUgNSBCcmFuZHNcIjtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1kaXNwbGF5OmF1dG87c3JjOnVybCguLi93ZWJmb250cy9mYS1icmFuZHMtNDAwLmVvdCk7c3JjOnVybCguLi93ZWJmb250cy9mYS1icmFuZHMtNDAwLmVvdD8jaWVmaXgpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLHVybCguLi93ZWJmb250cy9mYS1icmFuZHMtNDAwLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKSx1cmwoLi4vd2ViZm9udHMvZmEtYnJhbmRzLTQwMC53b2ZmKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybCguLi93ZWJmb250cy9mYS1icmFuZHMtNDAwLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKC4uL3dlYmZvbnRzL2ZhLWJyYW5kcy00MDAuc3ZnI2ZvbnRhd2Vzb21lKSBmb3JtYXQoXCJzdmdcIil9LmZhYntmb250LWZhbWlseTpcIkZvbnQgQXdlc29tZSA1IEJyYW5kc1wifUBmb250LWZhY2V7Zm9udC1mYW1pbHk6XCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtZGlzcGxheTphdXRvO3NyYzp1cmwoLi4vd2ViZm9udHMvZmEtcmVndWxhci00MDAuZW90KTtzcmM6dXJsKC4uL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLmVvdD8jaWVmaXgpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLHVybCguLi93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksdXJsKC4uL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLndvZmYpIGZvcm1hdChcIndvZmZcIiksdXJsKC4uL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKC4uL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnN2ZyNmb250YXdlc29tZSkgZm9ybWF0KFwic3ZnXCIpfS5mYXJ7Zm9udC13ZWlnaHQ6NDAwfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6XCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6OTAwO2ZvbnQtZGlzcGxheTphdXRvO3NyYzp1cmwoLi4vd2ViZm9udHMvZmEtc29saWQtOTAwLmVvdCk7c3JjOnVybCguLi93ZWJmb250cy9mYS1zb2xpZC05MDAuZW90PyNpZWZpeCkgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksdXJsKC4uL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksdXJsKC4uL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC53b2ZmKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybCguLi93ZWJmb250cy9mYS1zb2xpZC05MDAudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoLi4vd2ViZm9udHMvZmEtc29saWQtOTAwLnN2ZyNmb250YXdlc29tZSkgZm9ybWF0KFwic3ZnXCIpfS5mYSwuZmFyLC5mYXN7Zm9udC1mYW1pbHk6XCJGb250IEF3ZXNvbWUgNSBGcmVlXCJ9LmZhLC5mYXN7Zm9udC13ZWlnaHQ6OTAwfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.toggle = false;
      } // public onClick(targetElement) {
      //   const clickedInside = this.insideElement.nativeElement.contains(targetElement);
      //   if (!clickedInside) {
      //     this.toggle = false;
      //   }
      // }


      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onMenuClick",
        value: function onMenuClick() {
          this.toggle = !this.toggle;
        }
      }]);

      return HomeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menu", {
      static: false
    })], HomeComponent.prototype, "insideElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menubtn", {
      static: false
    })], HomeComponent.prototype, "menubtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target'])], HomeComponent.prototype, "ngOnInit", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/model/auction.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/model/auction.model.ts ***!
    \***************************************************/

  /*! exports provided: Auction */

  /***/
  function srcAppComponentsModelAuctionModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Auction", function () {
      return Auction;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Auction = function Auction() {
      _classCallCheck(this, Auction);
    };
    /***/

  },

  /***/
  "./src/app/components/model/item.model.ts":
  /*!************************************************!*\
    !*** ./src/app/components/model/item.model.ts ***!
    \************************************************/

  /*! exports provided: Item */

  /***/
  function srcAppComponentsModelItemModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Item", function () {
      return Item;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Item = function Item() {
      _classCallCheck(this, Item);
    };
    /***/

  },

  /***/
  "./src/app/components/service/auction.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/service/auction.service.ts ***!
    \*******************************************************/

  /*! exports provided: AuctionService */

  /***/
  function srcAppComponentsServiceAuctionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuctionService", function () {
      return AuctionService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts"); // get built in
    // get components


    var AuctionService =
    /*#__PURE__*/
    function () {
      function AuctionService(http) {
        _classCallCheck(this, AuctionService);

        this.http = http;
      } // httpMethods


      _createClass(AuctionService, [{
        key: "createAuction",
        value: function createAuction(auction) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auctionUrl + '/createAuction', auction);
        }
      }, {
        key: "getAllAuctionsInfo",
        value: function getAllAuctionsInfo() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auctionUrl + '/findAllAuctions');
        }
      }, {
        key: "getAuctionInfoById",
        value: function getAuctionInfoById(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auctionUrl + '/findAuctionById/' + id);
        }
      }, {
        key: "editAuction",
        value: function editAuction(auction) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auctionUrl + '/editAuction/' + auction._id, auction);
        }
      }, {
        key: "participateAuction",
        value: function participateAuction(auctionID, participantID) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auctionUrl + '/participateAuction/' + auctionID, {
            participantID: participantID
          });
        }
      }, {
        key: "deleteAuction",
        value: function deleteAuction(id) {
          return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auctionUrl + '/deleteAuction/' + id);
        }
      }, {
        key: "getAuctionParticipants",
        value: function getAuctionParticipants(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auctionUrl + '/auctionParticipants/' + id);
        }
      }, {
        key: "notParticipate",
        value: function notParticipate(auctionID, participantID) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auctionUrl + '/notParticipate/' + auctionID, {
            participantID: participantID
          });
        }
      }]);

      return AuctionService;
    }();

    AuctionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuctionService);
    /***/
  },

  /***/
  "./src/app/components/service/item.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/service/item.service.ts ***!
    \****************************************************/

  /*! exports provided: ItemService */

  /***/
  function srcAppComponentsServiceItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemService", function () {
      return ItemService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts"); // get built in
    // get components


    var ItemService =
    /*#__PURE__*/
    function () {
      function ItemService(http) {
        _classCallCheck(this, ItemService);

        this.http = http;
      } // httpMethods


      _createClass(ItemService, [{
        key: "addItem",
        value: function addItem(item) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/addItem', item);
        }
      }, {
        key: "getItemsInAuction",
        value: function getItemsInAuction(auctionID) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/findItemsInAuction/' + auctionID);
        }
      }, {
        key: "sellItem",
        value: function sellItem(item) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/sellItem/' + item._id, item);
        }
      }, {
        key: "getBuyerItems",
        value: function getBuyerItems(buyerID) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/getBuyerItems/' + buyerID);
        }
      }, {
        key: "getSellerItemsInAuction",
        value: function getSellerItemsInAuction(item) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/getSellerItemsInAuction/', item);
        }
      }, {
        key: "getItemInfoById",
        value: function getItemInfoById(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/getItemInfoById/' + id);
        }
      }, {
        key: "editItem",
        value: function editItem(item) {
          console.log(item);
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/editItem', item);
        }
      }, {
        key: "deleteItemById",
        value: function deleteItemById(id) {
          return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/deleteItemById/' + id);
        }
      }, {
        key: "getItemByItemCode",
        value: function getItemByItemCode(itemCode) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].itemUrl + '/getItemByItemCode/' + itemCode);
        }
      }]);

      return ItemService;
    }();

    ItemService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ItemService);
    /***/
  },

  /***/
  "./src/app/components/user/forgot-password/forgot-password.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/user/forgot-password/forgot-password.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppComponentsUserForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
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


    var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/components/user/service/user.service.ts"); // get built-in
    // get components


    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(userService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.user = {
          email: ''
        };
        this.showSucessMessage = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this39 = this;

          this.userService.forgotPassword(form.value).subscribe(function (res) {
            if (res["message"] == "sent") {
              _this39.showSucessMessage = true;
              setTimeout(function () {
                return _this39.showSucessMessage = false;
              }, 2000);
            }
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../user.component.css */
      "./src/app/components/user/user.component.css")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/components/user/model/user.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/user/model/user.model.ts ***!
    \*****************************************************/

  /*! exports provided: User */

  /***/
  function srcAppComponentsUserModelUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/components/user/reset-password/reset-password.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/user/reset-password/reset-password.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppComponentsUserResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
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


    var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/components/user/service/user.service.ts"); // get built-in
    // get components


    var ResetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ResetPasswordComponent(route, userService, router) {
        _classCallCheck(this, ResetPasswordComponent);

        this.route = route;
        this.userService = userService;
        this.router = router;
        this.token = this.route.snapshot.paramMap.get('token');
        this.password = {
          newPassword: '',
          confirmPassword: ''
        };
        this.errorMessage = false;
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this40 = this;

          if (form.value.newPassword == form.value.confirmPassword) {
            this.userService.resetPassword(this.token, form.value.newPassword).subscribe(function (res) {
              _this40.showSucessMessage = true;
              setTimeout(function () {
                return _this40.showSucessMessage = false;
              }, 2000);
              setTimeout(function () {
                return _this40.router.navigateByUrl('/user/signin');
              }, 2000);
            });
          } else {
            this.errorMessage = true;
            setTimeout(function () {
              return _this40.errorMessage = false;
            }, 3000);
          }
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/reset-password/reset-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../user.component.css */
      "./src/app/components/user/user.component.css")).default]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/components/user/service/user.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/user/service/user.service.ts ***!
    \*********************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppComponentsUserServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts"); // get built-in library


    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.noAuthHeader = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'NoAuth': 'True'
          })
        };
      } // httpMethods


      _createClass(UserService, [{
        key: "addUser",
        value: function addUser(user) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/register', user, this.noAuthHeader);
        }
      }, {
        key: "login",
        value: function login(authCredentials) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/authenticate', authCredentials, this.noAuthHeader);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/dashboard');
        }
      }, {
        key: "editUser",
        value: function editUser(user) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/editUser', user);
        }
      }, {
        key: "changePassword",
        value: function changePassword(token, newPassword) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/changePassword/' + token, {
            newPassword: newPassword
          });
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/forgotPassword', email);
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/getUserById/' + id);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(token, newPassword) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/resetPassword/' + token, {
            newPassword: newPassword
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/getUsers');
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(userID) {
          return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl + '/deleteUser/' + userID);
        } // Helper Methods

      }, {
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem('token', token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "deleteToken",
        value: function deleteToken() {
          localStorage.removeItem('token');
        }
      }, {
        key: "getUserPayLoad",
        value: function getUserPayLoad() {
          var token = this.getToken();

          if (token) {
            var userPayLoad = atob(token.split('.')[1]);
            return JSON.parse(userPayLoad);
          } else return null;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var userPayLoad = this.getUserPayLoad();
          if (userPayLoad) return userPayLoad.exp > Date.now() / 1000;else return false;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/components/user/sign-in/sign-in.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/user/sign-in/sign-in.component.ts ***!
    \**************************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppComponentsUserSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
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


    var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/components/user/service/user.service.ts"); // get built-in library
    // get components


    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent(userService, router) {
        _classCallCheck(this, SignInComponent);

        this.userService = userService;
        this.router = router; // Variables

        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.user = {
          email: '',
          password: ''
        };
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Check if user is already logged in
          if (this.userService.isLoggedIn()) // If user already logged in -> /dashboard
            this.router.navigateByUrl('/dashboard');
        } // Submit function

      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this41 = this;

          // Call user login function from nodejs
          this.userService.login(form.value).subscribe(function (res) {
            _this41.userService.setToken(res['token']);

            _this41.router.navigateByUrl('/dashboard');
          }, function (err) {
            _this41.serverErrorMessages = err.error.message;
          });
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/sign-in/sign-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../user.component.css */
      "./src/app/components/user/user.component.css")).default]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/components/user/sign-up/sign-up.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/user/sign-up/sign-up.component.ts ***!
    \**************************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppComponentsUserSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
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


    var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/components/user/service/user.service.ts"); // get built-in
    // get components


    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(userService, router) {
        _classCallCheck(this, SignUpComponent);

        this.userService = userService;
        this.router = router; // Variables

        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.aliasRegex = /[A-Za-z]{3}/; // New User object

        this.user = {
          _id: '',
          firstName: '',
          lastName: '',
          alias: '',
          email: '',
          password: '',
          type: 'member'
        };
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Submit function

      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this42 = this;

          form.value.type = 'member'; // Call addUser function from nodejs

          this.userService.addUser(form.value).subscribe(function (res) {
            _this42.showSucessMessage = true;
            setTimeout(function () {
              return _this42.showSucessMessage = false;
            }, 4000);

            _this42.resetForm(form);

            setTimeout(function () {
              return _this42.router.navigateByUrl('/user/signin');
            }, 4000);
          }, function (err) {
            if (err.status === 422) {
              _this42.serverErrorMessages = err.error.join('<br/>');
            } else _this42.serverErrorMessages = 'Something went wrong. Please contact admin.';
          });
        } // Reset form function

      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.user = {
            _id: '',
            firstName: '',
            lastName: '',
            alias: '',
            email: '',
            password: '',
            type: 'member'
          };
          form.resetForm();
          this.serverErrorMessages = '';
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../user.component.css */
      "./src/app/components/user/user.component.css")).default]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/components/user/user-profile/user-profile.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/components/user/user-profile/user-profile.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n    width: auto;\n    max-width: 680px;\n    padding: 0 15px;\n  }\n  \n  .footer {\n    background-color: #f5f5f5;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICBcbiAgLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/user/user-profile/user-profile.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/user/user-profile/user-profile.component.ts ***!
    \************************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppComponentsUserUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
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


    var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/components/user/service/user.service.ts");
    /* harmony import */


    var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/user.model */
    "./src/app/components/user/model/user.model.ts"); // get built-in
    // get components


    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent(userService) {
        _classCallCheck(this, UserProfileComponent);

        this.userService = userService;
        this.userDetails = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.newPassword = '';
        this.aliasRegex = /[A-Za-z]{3}/;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this43 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this43.userDetails = res['user'];
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onEditProfileSubmit",
        value: function onEditProfileSubmit(form) {
          var _this44 = this;

          this.userService.editUser(form.value).subscribe(function (res) {
            _this44.showSucessMessage = true;
            setTimeout(function () {
              return _this44.showSucessMessage = false;
            }, 4000);
          }, function (err) {
            if (err.status === 422) {
              _this44.serverErrorMessages = err.error.join('<br/>');
            } else _this44.serverErrorMessages = 'Something went wrong.Please contact admin.';
          });
        }
      }, {
        key: "changePasswordSubmit",
        value: function changePasswordSubmit(form) {
          var _this45 = this;

          this.userService.login(form.value).subscribe(function (res) {
            console.log(res);

            _this45.userService.changePassword(res, _this45.newPassword).subscribe(function (res) {
              _this45.showSucessMessage2 = true;
              setTimeout(function () {
                return _this45.showSucessMessage2 = false;
              }, 4000);
            }, function (err) {});
          }, function (err) {
            if (err.status === 422) {
              _this45.serverErrorMessages2 = err.error.join('<br/>');
            } else if (err.status === 404) {
              _this45.serverErrorMessages2 = 'Wrong password';
              setTimeout(function () {
                return _this45.serverErrorMessages2 = '';
              }, 4000);
            } else _this45.serverErrorMessages2 = 'Something went wrong.Please contact admin.';
          });
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/components/user/user-profile/user-profile.component.css")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/user/user.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/user/user.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n/* You can add global styles to this file, and also import other style files */\n/* BASIC */\nhtml {\n  background-color: #56baed;\n}\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\na {\n  color: #92badd;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px; \n  color: #cccccc;\n}\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column; \n  justify-content: center;\n  width: 100%;\n  padding: 20px;\n}\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n/* TABS */\nh2.inactive {\n  color: #cccccc;\n}\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\n  cursor: pointer;\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n  background-color: #39ace7;\n}\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n  transform: scale(0.95);\n}\ninput[type=submit]:disabled{\n  background-color: grey;\n  color: white;\n}\ninput[type=text],input[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\ninput[type=text]:focus,input[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\ninput[type=text]:placeholder {\n  color: #cccccc;\n}\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\nborder-bottom: 2px solid #ed5558;\n}\nlabel.validation-message{\n  color:#ed5558;\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:1s;\n  animation-duration:1s;\n}\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n.underlineHover:hover:after{\n  width: 100%;\n}\n/* OTHERS */\n*:focus {\n    outline: none;\n}\n#icon {\n  width:50%;\n}\n* {\n  box-sizing: border-box;\n}\n.alert {\n  padding: 20px;\n  background-color: #f44336; /* Red */\n  color: white;\n  margin-bottom: 15px;\n}\n.success{\n  padding: 20px;\n  background-color:#249424; /* Green */\n  color: white;\n  margin-bottom: 15px;\n}\n/* Table Styles */\n.table-fill {\n  background: white;\n  border-radius:3px;\n  border-collapse: collapse;\n  height: 320px;\n  margin: auto;\n  max-width: 600px;\n  padding:5px;\n  width: 100%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: float 5s infinite;\n          animation: float 5s infinite;\n}\nth {\n  color:#D5DDE5;;\n  background:#1b1e24;\n  border-bottom:4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size:23px;\n  font-weight: 100;\n  padding:24px;\n  text-align:left;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  vertical-align:middle;\n}\nth:first-child {\n  border-top-left-radius:3px;\n}\nth:last-child {\n  border-top-right-radius:3px;\n  border-right:none;\n}\ntr {\n  border-top: 1px solid #C1C3D1;\n  border-bottom-: 1px solid #C1C3D1;\n  color:#666B85;\n  font-size:16px;\n  font-weight:normal;\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\n}\ntr:first-child {\n  border-top:none;\n}\ntr:last-child {\n  border-bottom:none;\n}\ntr:nth-child(odd) td {\n  background:#EBEBEB;\n}\ntr:last-child td:first-child {\n  border-bottom-left-radius:3px;\n}\ntr:last-child td:last-child {\n  border-bottom-right-radius:3px;\n}\ntd {\n  background:#FFFFFF;\n  padding:20px;\n  text-align:left;\n  vertical-align:middle;\n  font-weight:300;\n  font-size:18px;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  border-right: 1px solid #C1C3D1;\n}\ntd:last-child {\n  border-right: 0px;\n}\nth.text-left {\n  text-align: left;\n}\nth.text-center {\n  text-align: center;\n}\nth.text-right {\n  text-align: right;\n}\ntd.text-left {\n  text-align: left;\n}\ntd.text-center {\n  text-align: center;\n}\ntd.text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOERBQThEO0FBRDlELDhFQUE4RTtBQUc5RSxVQUFVO0FBRVY7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUlBLGNBQWM7QUFFZDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVoseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QjtBQUM5QjtBQUlBLFNBQVM7QUFFVDtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7QUFJQSxtQkFBbUI7QUFFbkI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7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QUE2QjtBQUMvQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XG5cbi8qIEJBU0lDICovXG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hIHtcbiAgY29sb3I6ICM5MmJhZGQ7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cblxuXG4vKiBTVFJVQ1RVUkUgKi9cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jZm9ybUNvbnRlbnQge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9ybUZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuXG5cbi8qIFRBQlMgKi9cblxuaDIuaW5hY3RpdmUge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuaDIuYWN0aXZlIHtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5cblxuLyogRk9STSBUWVBPR1JBUEhZKi9cblxuaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogODUlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0uaW52YWxpZC10ZXh0Ym94LGlucHV0W3R5cGU9cGFzc3dvcmRdLmludmFsaWQtdGV4dGJveHtcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWQ1NTU4O1xufVxuXG5sYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7XG4gIGNvbG9yOiNlZDU1NTg7XG59XG5cblxuXG4vKiBBTklNQVRJT05TICovXG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cbi5mYWRlSW5Eb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cblxuLmZhZGVJbiB7XG4gIG9wYWNpdHk6MDtcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICBhbmltYXRpb24tZHVyYXRpb246MXM7XG59XG5cbi5mYWRlSW4uZmlyc3Qge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmZhZGVJbi5zZWNvbmQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLmZhZGVJbi50aGlyZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4uZmFkZUluLmZvdXJ0aCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICMwZDBkMGQ7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG4vKiBPVEhFUlMgKi9cblxuKjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn0gXG5cbiNpY29uIHtcbiAgd2lkdGg6NTAlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyAvKiBSZWQgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc3VjY2Vzc3tcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyAvKiBHcmVlbiAqL1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi8qIFRhYmxlIFN0eWxlcyAqL1xuLnRhYmxlLWZpbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czozcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGhlaWdodDogMzIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzo1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYW5pbWF0aW9uOiBmbG9hdCA1cyBpbmZpbml0ZTtcbn1cbiBcbnRoIHtcbiAgY29sb3I6I0Q1RERFNTs7XG4gIGJhY2tncm91bmQ6IzFiMWUyNDtcbiAgYm9yZGVyLWJvdHRvbTo0cHggc29saWQgIzllYTdhZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0M2E0NTtcbiAgZm9udC1zaXplOjIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6MjRweDtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xufVxuXG50aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O1xufVxuIFxudGg6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweDtcbiAgYm9yZGVyLXJpZ2h0Om5vbmU7XG59XG4gIFxudHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MxQzNEMTtcbiAgYm9yZGVyLWJvdHRvbS06IDFweCBzb2xpZCAjQzFDM0QxO1xuICBjb2xvcjojNjY2Qjg1O1xuICBmb250LXNpemU6MTZweDtcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC4xKTtcbn1cbiBcbnRyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDpub25lO1xufVxuXG50cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xufVxuIFxudHI6bnRoLWNoaWxkKG9kZCkgdGQge1xuICBiYWNrZ3JvdW5kOiNFQkVCRUI7XG59XG5cbnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcbn1cbiBcbnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtcbn1cbiBcbnRkIHtcbiAgYmFja2dyb3VuZDojRkZGRkZGO1xuICBwYWRkaW5nOjIwcHg7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICBmb250LXdlaWdodDozMDA7XG4gIGZvbnQtc2l6ZToxOHB4O1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XG59XG5cbnRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxudGgudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGgudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxudGQudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGQudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/user/user.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/user/user.component.ts ***!
    \***************************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppComponentsUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/components/user/user.component.css")).default]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      userUrl: '/user',
      auctionUrl: '/auction',
      itemUrl: '/item'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sagarluitel/Desktop/WebApp/cas-auction02:28/AuctionWebApp/angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map