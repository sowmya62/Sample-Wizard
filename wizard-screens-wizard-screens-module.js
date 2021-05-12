(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wizard-screens-wizard-screens-module"],{

/***/ "./node_modules/@ng-select/ng-select/esm5/ng-select.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/esm5/ng-select.js ***!
  \*************************************************************/
/*! exports provided: NgSelectComponent, NG_SELECT_DEFAULT_CONFIG, NgSelectModule, ɵo, ɵk, ɵp, ɵn, ɵf, ɵe, ɵc, ɵi, ɵd, ɵg, ɵb, ɵa, ɵj, ɵh, ɵl, ɵm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function() { return NgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_SELECT_DEFAULT_CONFIG", function() { return NG_SELECT_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectModule", function() { return NgSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return ConsoleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgDropdownPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NgOptionHighlightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgLoadingTextTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgMultiLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgNotFoundTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgOptgroupTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgOptionTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgTagTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgTypeToSearchTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return VirtualScrollService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/fromEventPattern */ "./node_modules/rxjs-compat/_esm5/observable/fromEventPattern.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/observable/merge */ "./node_modules/rxjs-compat/_esm5/observable/merge.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var NgOptionTemplateDirective = /** @class */ (function () {
    function NgOptionTemplateDirective(template) {
        this.template = template;
    }
    return NgOptionTemplateDirective;
}());
NgOptionTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-option-tmp]' },] },
];
NgOptionTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgOptgroupTemplateDirective = /** @class */ (function () {
    function NgOptgroupTemplateDirective(template) {
        this.template = template;
    }
    return NgOptgroupTemplateDirective;
}());
NgOptgroupTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-optgroup-tmp]' },] },
];
NgOptgroupTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgLabelTemplateDirective = /** @class */ (function () {
    function NgLabelTemplateDirective(template) {
        this.template = template;
    }
    return NgLabelTemplateDirective;
}());
NgLabelTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-label-tmp]' },] },
];
NgLabelTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgMultiLabelTemplateDirective = /** @class */ (function () {
    function NgMultiLabelTemplateDirective(template) {
        this.template = template;
    }
    return NgMultiLabelTemplateDirective;
}());
NgMultiLabelTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-multi-label-tmp]' },] },
];
NgMultiLabelTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgHeaderTemplateDirective = /** @class */ (function () {
    function NgHeaderTemplateDirective(template) {
        this.template = template;
    }
    return NgHeaderTemplateDirective;
}());
NgHeaderTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-header-tmp]' },] },
];
NgHeaderTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgFooterTemplateDirective = /** @class */ (function () {
    function NgFooterTemplateDirective(template) {
        this.template = template;
    }
    return NgFooterTemplateDirective;
}());
NgFooterTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-footer-tmp]' },] },
];
NgFooterTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgNotFoundTemplateDirective = /** @class */ (function () {
    function NgNotFoundTemplateDirective(template) {
        this.template = template;
    }
    return NgNotFoundTemplateDirective;
}());
NgNotFoundTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-notfound-tmp]' },] },
];
NgNotFoundTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgTypeToSearchTemplateDirective = /** @class */ (function () {
    function NgTypeToSearchTemplateDirective(template) {
        this.template = template;
    }
    return NgTypeToSearchTemplateDirective;
}());
NgTypeToSearchTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-typetosearch-tmp]' },] },
];
NgTypeToSearchTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgLoadingTextTemplateDirective = /** @class */ (function () {
    function NgLoadingTextTemplateDirective(template) {
        this.template = template;
    }
    return NgLoadingTextTemplateDirective;
}());
NgLoadingTextTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-loadingtext-tmp]' },] },
];
NgLoadingTextTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var NgTagTemplateDirective = /** @class */ (function () {
    function NgTagTemplateDirective(template) {
        this.template = template;
    }
    return NgTagTemplateDirective;
}());
NgTagTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-tag-tmp]' },] },
];
NgTagTemplateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
]; };
var ConsoleService = /** @class */ (function () {
    function ConsoleService() {
    }
    ConsoleService.prototype.warn = function (message) {
        console.warn(message);
    };
    return ConsoleService;
}());
ConsoleService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
ConsoleService.ctorParameters = function () { return []; };
function isDefined(value) {
    return value !== null && value !== undefined;
}
function isObject(value) {
    return isDefined(value) && typeof value === 'object';
}
function isPromise(value) {
    return value instanceof Promise;
}
function isFunction(value) {
    return value instanceof Function;
}
var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
function stripSpecialChars(text) {
    var match = function (a) {
        return diacritics[a] || a;
    };
    return text.replace(/[^\u0000-\u007E]/g, match);
}
function newId() {
    return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
        var val = Math.random() * 16 | 0;
        return val.toString(16);
    });
}
var ItemsList = /** @class */ (function () {
    function ItemsList(_ngSelect) {
        this._ngSelect = _ngSelect;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
        this._selected = [];
    }
    Object.defineProperty(ItemsList.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "filteredItems", {
        get: function () {
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "value", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedItem", {
        get: function () {
            return this._filteredItems[this._markedIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedIndex", {
        get: function () {
            return this._markedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
        get: function () {
            return this._ngSelect.hideSelected && this._items.length === this._selected.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
        get: function () {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this._selected.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
        get: function () {
            return this._selected[this._selected.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    ItemsList.prototype.setItems = function (items) {
        var _this = this;
        this._items = items.map(function (item, index) { return _this.mapItem(item, index); });
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._items);
    };
    ItemsList.prototype.select = function (item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        if (!this._ngSelect.multiple) {
            this.clearSelected();
        }
        this._selected.push(item);
        item.selected = true;
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this._filteredItems.filter(function (x) { return x !== item; });
        }
    };
    ItemsList.prototype.findItem = function (value) {
        var _this = this;
        if (this._ngSelect.bindValue) {
            return this._items.find(function (item) { return !item.hasChildren && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; });
        }
        var option = this._items.find(function (x) { return x.value === value; });
        var findBy = this._ngSelect.compareWith ?
            function (item) { return _this._ngSelect.compareWith(item.value, value); } :
            function (item) { return !item.hasChildren && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel); };
        return option || this._items.find(function (item) { return findBy(item); });
    };
    ItemsList.prototype.unselect = function (item) {
        this._selected = this._selected.filter(function (x) { return x !== item; });
        item.selected = false;
        if (this._ngSelect.hideSelected) {
            this._filteredItems.splice(item.index, 0, item);
            this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._filteredItems.sort(function (a, b) { return (a.index - b.index); }));
        }
    };
    ItemsList.prototype.addItem = function (item) {
        var option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    };
    ItemsList.prototype.clearSelected = function () {
        this._selected.forEach(function (item) {
            item.selected = false;
            item.marked = false;
        });
        this._selected = [];
        if (this._ngSelect.hideSelected) {
            this.resetItems();
        }
    };
    ItemsList.prototype.findByLabel = function (term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find(function (item) {
            var label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        });
    };
    ItemsList.prototype.filter = function (term) {
        if (!term) {
            this.resetItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        var match = this._ngSelect.searchFn || this._defaultSearchFn;
        var _loop_1 = function (key) {
            var matchedItems = [];
            try {
                for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this_1._groups.get(key)), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var item = _b.value;
                    if (this_1._ngSelect.hideSelected && this_1._selected.indexOf(item) > -1) {
                        continue;
                    }
                    var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                    if (match(term, searchItem)) {
                        matchedItems.push(item);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (matchedItems.length > 0) {
                var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(matchedItems.slice(-1), 1), last_1 = _d[0];
                if (last_1.parent) {
                    var head = this_1._items.find(function (x) { return x === last_1.parent; });
                    this_1._filteredItems.push(head);
                }
                (_e = this_1._filteredItems).push.apply(_e, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(matchedItems));
            }
            var e_1, _c, _e;
        };
        var this_1 = this;
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._groups.keys())), _b = _a.next(); !_b.done; _b = _a.next()) {
                var key = _b.value;
                _loop_1(key);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _c;
    };
    ItemsList.prototype.resetItems = function () {
        var _this = this;
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        this._filteredItems = this._ngSelect.hideSelected ?
            this._items.filter(function (x) { return _this._selected.indexOf(x) === -1; }) :
            this._items;
    };
    ItemsList.prototype.unmarkItem = function () {
        this._markedIndex = -1;
    };
    ItemsList.prototype.markNextItem = function () {
        this._stepToItem(+1);
    };
    ItemsList.prototype.markPreviousItem = function () {
        this._stepToItem(-1);
    };
    ItemsList.prototype.markItem = function (item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    };
    ItemsList.prototype.markSelectedOrDefault = function (markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        var indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && indexOfLastSelected > -1) {
            this._markedIndex = indexOfLastSelected;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled; }) : -1;
        }
    };
    ItemsList.prototype.resolveNested = function (option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            var keys = key.split('.');
            var value = option;
            for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    };
    ItemsList.prototype.mapItem = function (item, index) {
        var label = '';
        if (isDefined(item.label)) {
            label = item.label;
        }
        else {
            label = this.resolveNested(item, this._ngSelect.bindLabel);
            label = isDefined(label) ? label.toString() : '';
        }
        var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: label,
            value: value,
            disabled: item.disabled,
            htmlId: newId()
        };
    };
    ItemsList.prototype.mapSelectedItems = function () {
        var _this = this;
        this._selected.forEach(function (selected, i) {
            var value = _this._ngSelect.bindValue ? selected.value[_this._ngSelect.bindValue] : selected.value;
            var item = _this.findItem(value);
            if (item && selected !== item) {
                item.selected = true;
                _this._selected[i] = item;
            }
        });
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(function (x) { return _this._selected.indexOf(x) === -1; });
        }
    };
    ItemsList.prototype._defaultSearchFn = function (search, opt) {
        var label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    };
    ItemsList.prototype._getNextItemIndex = function (steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    };
    ItemsList.prototype._stepToItem = function (steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) { return x.disabled; })) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    };
    ItemsList.prototype._groupBy = function (items, prop) {
        var _this = this;
        var isFn = isFunction(this._ngSelect.groupBy);
        var groups = items.reduce(function (grouped, item) {
            var key = isFn ? ((prop)).apply(_this, [item.value]) : item.value[(prop)];
            key = key || undefined;
            var group = grouped.get(key);
            if (group) {
                group.push(item);
            }
            else {
                grouped.set(key, [item]);
            }
            return grouped;
        }, new Map());
        return groups;
    };
    ItemsList.prototype._flatten = function (groups) {
        var isFn = isFunction(this._ngSelect.groupBy);
        var items = [];
        var withoutGroup = groups.get(undefined) || [];
        items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(withoutGroup));
        var i = withoutGroup.length;
        var _loop_2 = function (key) {
            if (!key) {
                return "continue";
            }
            var parent = {
                label: key,
                hasChildren: true,
                index: i++,
                disabled: !this_2._ngSelect.selectableGroup,
                htmlId: newId()
            };
            var groupKey = isFn ? this_2._ngSelect.bindLabel : this_2._ngSelect.groupBy;
            parent.value = (_a = {}, _a[groupKey] = key, _a);
            items.push(parent);
            var children = groups.get(key).map(function (x) {
                x.parent = parent;
                x.hasChildren = false;
                x.index = i++;
                return x;
            });
            items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(children));
            var _a;
        };
        var this_2 = this;
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(groups.keys())), _b = _a.next(); !_b.done; _b = _a.next()) {
                var key = _b.value;
                _loop_2(key);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return items;
        var e_3, _c;
    };
    return ItemsList;
}());
var KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = "Tab";
KeyCode[KeyCode.Enter] = "Enter";
KeyCode[KeyCode.Esc] = "Esc";
KeyCode[KeyCode.Space] = "Space";
KeyCode[KeyCode.ArrowUp] = "ArrowUp";
KeyCode[KeyCode.ArrowDown] = "ArrowDown";
KeyCode[KeyCode.Backspace] = "Backspace";
var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    WindowService.prototype.requestAnimationFrame = function (fn) {
        return window.requestAnimationFrame(fn);
    };
    WindowService.prototype.setTimeout = function (handler, timeout) {
        return window.setTimeout(handler, timeout);
    };
    return WindowService;
}());
WindowService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
WindowService.ctorParameters = function () { return []; };
var VirtualScrollService = /** @class */ (function () {
    function VirtualScrollService() {
    }
    VirtualScrollService.prototype.calculateItems = function (d, dropdownEl, bufferAmount) {
        var scrollHeight = d.childHeight * d.itemsLength;
        if (dropdownEl.scrollTop > scrollHeight) {
            dropdownEl.scrollTop = scrollHeight;
        }
        var scrollTop = Math.max(0, dropdownEl.scrollTop);
        var indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
        var end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
        var maxStartEnd = end;
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        var topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= bufferAmount;
        start = Math.max(0, start);
        end += bufferAmount;
        end = Math.min(d.itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    VirtualScrollService.prototype.calculateDimensions = function (itemsLength, index, panelEl, contentEl) {
        var panelRect = panelEl.getBoundingClientRect();
        var itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
            width: panelRect.width,
            height: panelRect.height,
            top: 0,
        };
        var itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
        return {
            itemsLength: itemsLength,
            viewWidth: panelRect.width,
            viewHeight: panelRect.height,
            childWidth: itemRect.width,
            childHeight: itemRect.height,
            itemsPerCol: itemsPerCol,
        };
    };
    return VirtualScrollService;
}());
VirtualScrollService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
VirtualScrollService.ctorParameters = function () { return []; };
var TOP_CSS_CLASS = 'ng-select-top';
var BOTTOM_CSS_CLASS = 'ng-select-bottom';
var NgDropdownPanelComponent = /** @class */ (function () {
    function NgDropdownPanelComponent(_ngSelect, _renderer, _elementRef, _zone, _virtualScrollService, _window) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._zone = _zone;
        this._virtualScrollService = _virtualScrollService;
        this._window = _window;
        this.items = [];
        this.position = 'auto';
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._destroy$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._startupLoop = true;
        this._isScrolledToMarked = false;
        this._scrollToEndFired = false;
        this._disposeScrollListener = function () { };
        this._disposeDocumentResizeListener = function () { };
        this._selectElement = _ngSelect.elementRef.nativeElement;
        this._itemsList = _ngSelect.itemsList;
    }
    NgDropdownPanelComponent.prototype.handleMousedown = function ($event) {
        var target = ($event.target);
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    NgDropdownPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._handleScroll();
        Object(rxjs_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) { return document.addEventListener('mousedown', handler, true); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
            .subscribe(function ($event) { return _this._handleOutsideClick($event); });
    };
    NgDropdownPanelComponent.prototype.ngOnChanges = function (changes) {
        if (changes["items"]) {
            this._isScrolledToMarked = false;
            this._handleItemsChange(changes["items"]);
        }
    };
    NgDropdownPanelComponent.prototype.ngOnDestroy = function () {
        this._disposeDocumentResizeListener();
        this._disposeScrollListener();
        this._destroy$.next();
        this._destroy$.complete();
        if (this.appendTo) {
            this._renderer.removeChild(this._elementRef.nativeElement.parentNode, this._elementRef.nativeElement);
        }
    };
    NgDropdownPanelComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._whenContentReady().then(function () {
            if (_this.appendTo) {
                _this._appendDropdown();
                _this._handleDocumentResize();
            }
            _this.updateDropdownPosition();
        });
    };
    NgDropdownPanelComponent.prototype.refresh = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._zone.runOutsideAngular(function () {
                _this._window.requestAnimationFrame(function () {
                    _this._updateItems().then(resolve);
                });
            });
        });
    };
    NgDropdownPanelComponent.prototype.scrollInto = function (item) {
        if (!item) {
            return;
        }
        var index = this.items.indexOf(item);
        if (index < 0 || index >= this.items.length) {
            return;
        }
        var d = this._calculateDimensions(this.virtualScroll ? 0 : index);
        var scrollEl = this.scrollElementRef.nativeElement;
        var buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
        if (this.virtualScroll) {
            scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
        }
        else {
            var contentEl = this.contentElementRef.nativeElement;
            var childrenHeight = Array.from(contentEl.children).slice(0, index).reduce(function (c, n) { return c + n.clientHeight; }, 0);
            scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
        }
    };
    NgDropdownPanelComponent.prototype.scrollIntoTag = function () {
        var el = this.scrollElementRef.nativeElement;
        var d = this._calculateDimensions();
        el.scrollTop = d.childHeight * (d.itemsLength + 1);
    };
    NgDropdownPanelComponent.prototype.updateDropdownPosition = function () {
        var dropdownEl = this._elementRef.nativeElement;
        this._currentPosition = this._calculateCurrentPosition(dropdownEl);
        var selectEl = this._selectElement;
        if (this._currentPosition === 'top') {
            this._renderer.addClass(dropdownEl, TOP_CSS_CLASS);
            this._renderer.removeClass(dropdownEl, BOTTOM_CSS_CLASS);
            this._renderer.addClass(selectEl, TOP_CSS_CLASS);
            this._renderer.removeClass(selectEl, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(dropdownEl, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(dropdownEl, TOP_CSS_CLASS);
            this._renderer.addClass(selectEl, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(selectEl, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updateAppendedDropdownPosition();
        }
        dropdownEl.style.opacity = '1';
    };
    NgDropdownPanelComponent.prototype._handleOutsideClick = function ($event) {
        if (this._selectElement.contains($event.target)) {
            return;
        }
        var dropdown = this._elementRef.nativeElement;
        if (dropdown.contains($event.target)) {
            return;
        }
        this.outsideClick.emit();
    };
    NgDropdownPanelComponent.prototype._handleScroll = function () {
        var _this = this;
        this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', function () {
            _this.refresh();
            _this._fireScrollToEnd();
        });
    };
    NgDropdownPanelComponent.prototype._handleItemsChange = function (items) {
        var _this = this;
        this._scrollToEndFired = false;
        this._previousStart = undefined;
        this._previousEnd = undefined;
        if (items !== undefined && items.previousValue === undefined ||
            (items.previousValue !== undefined && items.previousValue.length === 0)) {
            this._startupLoop = true;
        }
        this.items = items.currentValue || [];
        this.refresh().then(function () {
            if (_this.appendTo && _this._currentPosition === 'top') {
                _this._updateAppendedDropdownPosition();
            }
        });
    };
    NgDropdownPanelComponent.prototype._updateItems = function () {
        var _this = this;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"].assertNotInAngularZone();
        if (!this.virtualScroll) {
            this._zone.run(function () {
                _this.update.emit(_this.items.slice());
                _this._scrollToMarked();
            });
            return Promise.resolve();
        }
        var loop = function (resolve) {
            var d = _this._calculateDimensions();
            var res = _this._virtualScrollService.calculateItems(d, _this.scrollElementRef.nativeElement, _this.bufferAmount || 0);
            ((_this.paddingElementRef.nativeElement)).style.height = res.scrollHeight + "px";
            var transform = 'translateY(' + res.topPadding + 'px)';
            ((_this.contentElementRef.nativeElement)).style.transform = transform;
            if (res.start !== _this._previousStart || res.end !== _this._previousEnd) {
                _this._zone.run(function () {
                    _this.update.emit(_this.items.slice(res.start, res.end));
                });
                _this._previousStart = res.start;
                _this._previousEnd = res.end;
                if (_this._startupLoop === true) {
                    loop(resolve);
                }
            }
            else if (_this._startupLoop === true) {
                _this._startupLoop = false;
                _this._scrollToMarked();
                resolve();
            }
        };
        return new Promise(function (resolve) { return loop(resolve); });
    };
    NgDropdownPanelComponent.prototype._fireScrollToEnd = function () {
        if (this._scrollToEndFired) {
            return;
        }
        var scroll = this.scrollElementRef.nativeElement;
        var panel = this._elementRef.nativeElement;
        var padding = this.virtualScroll ?
            this.paddingElementRef.nativeElement :
            this.contentElementRef.nativeElement;
        if (scroll.scrollTop + panel.clientHeight >= padding.clientHeight) {
            this.scrollToEnd.emit();
            this._scrollToEndFired = true;
        }
    };
    NgDropdownPanelComponent.prototype._calculateDimensions = function (index) {
        if (index === void 0) { index = 0; }
        return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
    };
    NgDropdownPanelComponent.prototype._handleDocumentResize = function () {
        var _this = this;
        if (!this.appendTo) {
            return;
        }
        this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', function () {
            _this._updateAppendedDropdownPosition();
        });
    };
    NgDropdownPanelComponent.prototype._scrollToMarked = function () {
        if (this._isScrolledToMarked) {
            return;
        }
        this._isScrolledToMarked = true;
        this.scrollInto(this._itemsList.markedItem);
    };
    NgDropdownPanelComponent.prototype._calculateCurrentPosition = function (dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        var selectRect = this._selectElement.getBoundingClientRect();
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = selectRect.top + window.pageYOffset;
        var height = selectRect.height;
        var dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    };
    NgDropdownPanelComponent.prototype._appendDropdown = function () {
        var parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
        }
        parent.appendChild(this._elementRef.nativeElement);
    };
    NgDropdownPanelComponent.prototype._updateAppendedDropdownPosition = function () {
        var parent = document.querySelector(this.appendTo) || document.body;
        var selectRect = this._selectElement.getBoundingClientRect();
        var dropdownPanel = this._elementRef.nativeElement;
        var boundingRect = parent.getBoundingClientRect();
        var offsetTop = selectRect.top - boundingRect.top;
        var offsetLeft = selectRect.left - boundingRect.left;
        var topDelta = this._currentPosition === 'bottom' ? selectRect.height : -dropdownPanel.clientHeight;
        dropdownPanel.style.top = offsetTop + topDelta + 'px';
        dropdownPanel.style.bottom = 'auto';
        dropdownPanel.style.left = offsetLeft + 'px';
        dropdownPanel.style.width = selectRect.width + 'px';
        dropdownPanel.style.minWidth = selectRect.width + 'px';
    };
    NgDropdownPanelComponent.prototype._whenContentReady = function () {
        var _this = this;
        if (this.items.length === 0) {
            return Promise.resolve();
        }
        var dropdownEl = this._elementRef.nativeElement;
        var ready = function (resolve) {
            var ngOption = dropdownEl.querySelector('.ng-option');
            if (ngOption) {
                resolve();
                return;
            }
            _this._zone.runOutsideAngular(function () {
                setTimeout(function () { return ready(resolve); }, 5);
            });
        };
        return new Promise(function (resolve) { return ready(resolve); });
    };
    return NgDropdownPanelComponent;
}());
NgDropdownPanelComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'ng-dropdown-panel',
                template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\"></ng-container>\n        </div>\n        <div  #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length > 0\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\"></ng-container>\n        </div>\n    ",
                styles: [".ng-dropdown-panel{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
            },] },
];
NgDropdownPanelComponent.ctorParameters = function () { return [
    { type: NgSelectComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgSelectComponent; }),] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    { type: VirtualScrollService, },
    { type: WindowService, },
]; };
NgDropdownPanelComponent.propDecorators = {
    "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "appendTo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "bufferAmount": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "virtualScroll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "headerTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "footerTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "scrollToEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "outsideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "contentElementRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
    "scrollElementRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
    "paddingElementRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
    "handleMousedown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mousedown', ['$event'],] },],
};
var NgOptionComponent = /** @class */ (function () {
    function NgOptionComponent(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._disabled = false;
    }
    Object.defineProperty(NgOptionComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = this._isDisabled(value); },
        enumerable: true,
        configurable: true
    });
    NgOptionComponent.prototype.ngOnChanges = function (changes) {
        if (changes["disabled"]) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    };
    NgOptionComponent.prototype._isDisabled = function (value) {
        return value != null && "" + value !== 'false';
    };
    return NgOptionComponent;
}());
NgOptionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ng-option',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: "<ng-content></ng-content>"
            },] },
];
NgOptionComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
NgOptionComponent.propDecorators = {
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var NG_SELECT_DEFAULT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ng-select-default-options');
var NgSelectComponent = /** @class */ (function () {
    function NgSelectComponent(config, classes, _cd, _console, _zone, _window, elementRef) {
        var _this = this;
        this.classes = classes;
        this._cd = _cd;
        this._console = _console;
        this._zone = _zone;
        this._window = _window;
        this.elementRef = elementRef;
        this.items = [];
        this.clearable = true;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.selectableGroup = false;
        this.searchFn = null;
        this.clearSearchOnAdd = true;
        this.labelForId = '';
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isOpen = false;
        this.isDisabled = false;
        this.itemsList = new ItemsList(this);
        this.viewPortItems = [];
        this.filterValue = null;
        this.dropdownId = newId();
        this.selectedItemId = 0;
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._destroy$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._keyPress$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this.clearItem = function (item) {
            var option = _this.selectedItems.find(function (x) { return x.value === item; });
            _this.unselect(option);
        };
        this._mergeGlobalConfig(config);
    }
    Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
        get: function () { return this._compareWith; },
        set: function (fn) {
            if (!isFunction(fn)) {
                throw Error('`compareWith` must be a function.');
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "filtered", {
        get: function () { return !!this.filterValue && this.searchable; },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
        get: function () {
            return this.itemsList.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
        get: function () {
            return this.selectedItems.map(function (x) { return x.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
        get: function () {
            return this.selectedItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    NgSelectComponent.prototype.ngOnInit = function () {
        this._handleKeyPresses();
    };
    NgSelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes["multiple"]) {
            this.itemsList.clearSelected();
        }
        if (changes["items"]) {
            this._setItems(changes["items"].currentValue || []);
        }
    };
    NgSelectComponent.prototype.ngAfterViewInit = function () {
        if (this.items && this.items.length === 0) {
            this._setItemsFromNgOptions();
        }
    };
    NgSelectComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    NgSelectComponent.prototype.handleKeyDown = function ($event) {
        if (KeyCode[$event.which]) {
            switch ($event.which) {
                case KeyCode.ArrowDown:
                    this._handleArrowDown($event);
                    break;
                case KeyCode.ArrowUp:
                    this._handleArrowUp($event);
                    break;
                case KeyCode.Space:
                    this._handleSpace($event);
                    break;
                case KeyCode.Enter:
                    this._handleEnter($event);
                    break;
                case KeyCode.Tab:
                    this._handleTab($event);
                    break;
                case KeyCode.Esc:
                    this.close();
                    break;
                case KeyCode.Backspace:
                    this._handleBackspace();
                    break;
            }
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    };
    NgSelectComponent.prototype.handleMousedown = function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        var target = ($event.target);
        if (target.className === 'ng-clear') {
            this.handleClearClick();
            return;
        }
        if (target.className === 'ng-arrow') {
            this.handleArrowClick();
            return;
        }
        if (!this._focused) {
            this.focus();
        }
        if (target.className.includes('ng-value-icon')) {
            return;
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    };
    NgSelectComponent.prototype.handleArrowClick = function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NgSelectComponent.prototype.handleClearClick = function () {
        if (this.hasValue) {
            this.clearModel();
        }
        this._clearSearch();
        this.focus();
        if (this._isTypeahead) {
            this.typeahead.next(null);
        }
        this.clearEvent.emit();
    };
    NgSelectComponent.prototype.clearModel = function () {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    };
    NgSelectComponent.prototype.writeValue = function (value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    };
    NgSelectComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NgSelectComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NgSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
        this._cd.markForCheck();
    };
    NgSelectComponent.prototype.toggle = function () {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    };
    NgSelectComponent.prototype.open = function () {
        if (this.isDisabled || this.isOpen || this.itemsList.maxItemsSelected) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.filterValue) {
            this.focus();
        }
        this.detectChanges();
    };
    NgSelectComponent.prototype.close = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        this._clearSearch();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    };
    NgSelectComponent.prototype.toggleItem = function (item) {
        if (!item || item.disabled || this.isDisabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
    };
    NgSelectComponent.prototype.select = function (item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd) {
                this._clearSearch();
            }
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
            this._updateNgModel();
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    };
    NgSelectComponent.prototype.focus = function () {
        var _this = this;
        if (!this.filterInput) {
            return;
        }
        this._zone.runOutsideAngular(function () {
            _this._window.setTimeout(function () {
                _this.filterInput.nativeElement.focus();
            }, 5);
        });
    };
    NgSelectComponent.prototype.unselect = function (item) {
        this.itemsList.unselect(item);
        this._updateNgModel();
        this.removeEvent.emit(item);
    };
    NgSelectComponent.prototype.selectTag = function () {
        var _this = this;
        var tag;
        if (isFunction(this.addTag)) {
            tag = ((this.addTag))(this.filterValue);
        }
        else {
            tag = this._primitive ? this.filterValue : (_a = {}, _a[this.bindLabel] = this.filterValue, _a);
        }
        if (isPromise(tag)) {
            tag.then(function (item) { return _this.select(_this.itemsList.addItem(item)); })
                .catch(function () { });
        }
        else if (tag) {
            this.select(this.itemsList.addItem(tag));
        }
        var _a;
    };
    NgSelectComponent.prototype.showClear = function () {
        return this.clearable && (this.hasValue || this.filterValue) && !this.isDisabled;
    };
    NgSelectComponent.prototype.showAddTag = function () {
        var _this = this;
        return this.addTag &&
            this.filterValue &&
            !this.selectedItems.some(function (x) { return x.label.toLowerCase() === _this.filterValue.toLowerCase(); }) &&
            !this.loading;
    };
    NgSelectComponent.prototype.showNoItemsFound = function () {
        var empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this.filterValue && !this.loading)) &&
            !this.showAddTag();
    };
    NgSelectComponent.prototype.showTypeToSearch = function () {
        var empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this.filterValue && !this.loading;
    };
    NgSelectComponent.prototype.filter = function (term) {
        this.filterValue = term;
        this.open();
        if (this._isTypeahead) {
            this.typeahead.next(this.filterValue);
        }
        else {
            this.itemsList.filter(this.filterValue);
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    };
    NgSelectComponent.prototype.onInputFocus = function () {
        ((this.elementRef.nativeElement)).classList.add('ng-select-focused');
        this.focusEvent.emit(null);
        this._focused = true;
    };
    NgSelectComponent.prototype.onInputBlur = function () {
        ((this.elementRef.nativeElement)).classList.remove('ng-select-focused');
        this.blurEvent.emit(null);
        if (!this.isOpen && !this.isDisabled) {
            this._onTouched();
        }
        this._focused = false;
    };
    NgSelectComponent.prototype.onItemHover = function (item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    };
    NgSelectComponent.prototype.detectChanges = function () {
        if (!((this._cd)).destroyed) {
            this._cd.detectChanges();
        }
    };
    NgSelectComponent.prototype.updateDropdownPosition = function () {
        if (this.dropdownPanel) {
            this.dropdownPanel.updateDropdownPosition();
        }
    };
    NgSelectComponent.prototype._setItems = function (items) {
        var firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = !isObject(firstItem);
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    };
    NgSelectComponent.prototype._setItemsFromNgOptions = function () {
        var _this = this;
        var handleNgOptions = function (options) {
            _this.items = options.map(function (option) { return ({
                $ngOptionValue: option.value,
                label: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }); });
            _this.itemsList.setItems(_this.items);
            if (_this.hasValue) {
                _this.itemsList.mapSelectedItems();
            }
            _this.detectChanges();
        };
        var handleOptionChange = function () {
            var changedOrDestroyed = Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_6__["merge"])(_this.ngOptions.changes, _this._destroy$);
            rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.ngOptions.map(function (option) { return option.stateChange$; }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(changedOrDestroyed))
                .subscribe(function (option) {
                var item = _this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                _this._cd.markForCheck();
            });
        };
        this.ngOptions.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
            .subscribe(function (options) {
            handleNgOptions(options);
            handleOptionChange();
        });
    };
    NgSelectComponent.prototype._isValidWriteValue = function (value) {
        var _this = this;
        if (!isDefined(value) ||
            (this.multiple && value === '') ||
            Array.isArray(value) && value.length === 0) {
            return false;
        }
        var validateBinding = function (item) {
            if (isObject(item) && _this.bindValue) {
                _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(function (item) { return validateBinding(item); });
        }
        else {
            return validateBinding(value);
        }
    };
    NgSelectComponent.prototype._handleWriteValue = function (ngModel) {
        var _this = this;
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        var select = function (val) {
            var item = _this.itemsList.findItem(val);
            if (item) {
                _this.itemsList.select(item);
            }
            else {
                var isValObject = isObject(val);
                var isPrimitive = !isValObject && !_this.bindValue;
                if ((isValObject || isPrimitive)) {
                    _this.itemsList.select(_this.itemsList.mapItem(val, null));
                }
                else if (_this.bindValue) {
                    item = (_a = {}, _a[_this.bindLabel] = null, _a[_this.bindValue] = val, _a);
                    _this.itemsList.select(_this.itemsList.mapItem(item, null));
                }
            }
            var _a;
        };
        if (this.multiple) {
            ((ngModel)).forEach(function (item) { return select(item); });
        }
        else {
            select(ngModel);
        }
    };
    NgSelectComponent.prototype._handleKeyPresses = function () {
        var _this = this;
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (letter) { return _this._pressedKeys.push(letter); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this._pressedKeys.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this._pressedKeys.join(''); }))
            .subscribe(function (term) {
            var item = _this.itemsList.findByLabel(term);
            if (item) {
                if (_this.isOpen) {
                    _this.itemsList.markItem(item);
                    _this._cd.markForCheck();
                }
                else {
                    _this.select(item);
                }
            }
            _this._pressedKeys = [];
        });
    };
    NgSelectComponent.prototype._updateNgModel = function () {
        var model = [];
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.selectedItems), _b = _a.next(); !_b.done; _b = _a.next()) {
                var item = _b.value;
                if (this.bindValue) {
                    var resolvedValue = null;
                    if (item.hasChildren) {
                        resolvedValue = item.value[this.groupBy];
                    }
                    else {
                        resolvedValue = this.itemsList.resolveNested(item.value, this.bindValue);
                    }
                    model.push(resolvedValue);
                }
                else {
                    model.push(item.value);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(this.selectedItems.map(function (x) { return x.value; }));
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(this.selectedItems[0] && this.selectedItems[0].value);
        }
        this._cd.markForCheck();
        var e_4, _c;
    };
    NgSelectComponent.prototype._clearSearch = function () {
        if (!this.filterValue) {
            return;
        }
        this.filterValue = null;
        this.itemsList.resetItems();
    };
    NgSelectComponent.prototype._scrollToMarked = function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollInto(this.itemsList.markedItem);
    };
    NgSelectComponent.prototype._scrollToTag = function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollIntoTag();
    };
    NgSelectComponent.prototype._handleTab = function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag()) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    };
    NgSelectComponent.prototype._handleEnter = function ($event) {
        if (this.isOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.addTag) {
                this.selectTag();
            }
        }
        else {
            this.open();
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    NgSelectComponent.prototype._handleSpace = function ($event) {
        if (this.isOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    };
    NgSelectComponent.prototype._handleArrowDown = function ($event) {
        if (this.nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    };
    NgSelectComponent.prototype._handleArrowUp = function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this.nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    };
    NgSelectComponent.prototype.nextItemIsTag = function (nextStep) {
        var nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.filterValue
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    };
    NgSelectComponent.prototype._handleBackspace = function () {
        if (this.filterValue || !this.clearable || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    };
    Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
        get: function () {
            return this.typeahead && this.typeahead.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    NgSelectComponent.prototype._mergeGlobalConfig = function (config) {
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
    };
    return NgSelectComponent;
}());
NgSelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ng-select',
                template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\">{{item.label}}</span>\n                </ng-template>\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n        <div class=\"ng-input\">\n            <input #filterInput\n                   type=\"text\"\n                   autocomplete=\"{{dropdownId}}\"\n                   [id]=\"labelForId\"\n                   [readOnly]=\"!searchable\"\n                   [disabled]=\"isDisabled\"\n                   [value]=\"filterValue\"\n                   (input)=\"filter(filterInput.value)\"\n                   (focus)=\"onInputFocus()\"\n                   (blur)=\"onInputBlur()\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n    <div class=\"ng-spinner-loader\" *ngIf=\"loading\"></div>\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n<ng-dropdown-panel *ngIf=\"isOpen\"\n    class=\"ng-dropdown-panel\"\n    [virtualScroll]=\"virtualScroll\"\n    [bufferAmount]=\"bufferAmount\"\n    [appendTo]=\"appendTo\"\n    [position]=\"dropdownPosition\"\n    [headerTemplate]=\"headerTemplate\"\n    [footerTemplate]=\"footerTemplate\"\n    [items]=\"itemsList.filteredItems\"\n    (update)=\"viewPortItems = $event\"\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\n    (outsideClick)=\"close()\"\n    [class.ng-select-multiple]=\"multiple\"\n    [ngClass]=\"classes\"\n    [id]=\"dropdownId\">\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.hasChildren ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mousedown)=\"$event.preventDefault()\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.hasChildren\"\n                [class.ng-option]=\"!item.hasChildren\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                id=\"{{item?.htmlId || null}}\">\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\">{{item.label}}</span>\n            </ng-template>\n            <ng-template\n                [ngTemplateOutlet]=\"item.hasChildren ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, index: item.index, searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag()\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\n            </ng-template>\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue  }\">\n        </ng-template>\n    </ng-container>\n</ng-dropdown-panel>\n",
                styles: [".ng-select{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{-webkit-box-sizing:content-box;box-sizing:content-box;background:none;border:0;-webkit-box-shadow:none;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;-ms-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;width:0;position:relative}"],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgSelectComponent; }),
                        multi: true
                    }],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'role': 'listbox',
                    'class': 'ng-select',
                    '[class.ng-select-single]': '!multiple',
                }
            },] },
];
NgSelectComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_SELECT_DEFAULT_CONFIG,] },] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['class',] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    { type: ConsoleService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    { type: WindowService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
NgSelectComponent.propDecorators = {
    "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "bindLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "bindValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "clearable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "markFirst": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "notFoundText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "typeToSearchText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addTagText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "loadingText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "clearAllText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dropdownPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "appendTo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "loading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "closeOnSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hideSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "selectOnTab": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "maxSelectedItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "groupBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "bufferAmount": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "virtualScroll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "selectableGroup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "searchFn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "clearSearchOnAdd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "labelForId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "typeahead": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-typeahead',] },],
    "multiple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-multiple',] },],
    "addTag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-taggable',] },],
    "searchable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-searchable',] },],
    "compareWith": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blurEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['blur',] },],
    "focusEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['focus',] },],
    "changeEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['change',] },],
    "openEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['open',] },],
    "closeEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['close',] },],
    "searchEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['search',] },],
    "clearEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['clear',] },],
    "addEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['add',] },],
    "removeEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['remove',] },],
    "scrollToEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['scrollToEnd',] },],
    "optionTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "optgroupTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "labelTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "multiLabelTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "headerTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "footerTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "notFoundTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "typeToSearchTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "loadingTextTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "tagTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "dropdownPanel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgDropdownPanelComponent; }),] },],
    "ngOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NgOptionComponent, { descendants: true },] },],
    "filterInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['filterInput',] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-opened',] },],
    "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-disabled',] },],
    "filtered": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-filtered',] },],
    "handleKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] },],
};
var NgOptionHighlightDirective = /** @class */ (function () {
    function NgOptionHighlightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    NgOptionHighlightDirective.prototype.ngOnChanges = function () {
        if (this._canHighlight) {
            this._highlightLabel();
        }
    };
    NgOptionHighlightDirective.prototype.ngAfterViewInit = function () {
        this.label = this.element.innerHTML;
        if (this._canHighlight) {
            this._highlightLabel();
        }
    };
    NgOptionHighlightDirective.prototype._highlightLabel = function () {
        var label = this.label;
        if (!this.term) {
            this._setInnerHtml(label);
            return;
        }
        var indexOfTerm = stripSpecialChars(label)
            .toLowerCase()
            .indexOf(stripSpecialChars(this.term).toLowerCase());
        if (indexOfTerm > -1) {
            this._setInnerHtml(label.substring(0, indexOfTerm)
                + ("<span class=\"highlighted\">" + label.substr(indexOfTerm, this.term.length) + "</span>")
                + label.substring(indexOfTerm + this.term.length, label.length));
        }
        else {
            this._setInnerHtml(label);
        }
    };
    Object.defineProperty(NgOptionHighlightDirective.prototype, "_canHighlight", {
        get: function () {
            return isDefined(this.term) && isDefined(this.label);
        },
        enumerable: true,
        configurable: true
    });
    NgOptionHighlightDirective.prototype._setInnerHtml = function (html) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
    };
    return NgOptionHighlightDirective;
}());
NgOptionHighlightDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[ngOptionHighlight]'
            },] },
];
NgOptionHighlightDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
NgOptionHighlightDirective.propDecorators = {
    "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngOptionHighlight',] },],
};
var ɵ0 = {
    notFoundText: 'No items found',
    typeToSearchText: 'Type to search',
    addTagText: 'Add item',
    loadingText: 'Loading...',
    clearAllText: 'Clear all',
    disableVirtualScroll: false
};
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
    return NgSelectModule;
}());
NgSelectModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptionHighlightDirective,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptionHighlightDirective,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective
                ],
                providers: [
                    ConsoleService,
                    WindowService,
                    VirtualScrollService,
                    {
                        provide: NG_SELECT_DEFAULT_CONFIG,
                        useValue: ɵ0
                    }
                ]
            },] },
];
NgSelectModule.ctorParameters = function () { return []; };


//# sourceMappingURL=ng-select.js.map


/***/ }),

/***/ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js ***!
  \************************************************************/
/*! exports provided: NgxDropzoneComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneModule, NgxDropzonePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function() { return NgxDropzoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function() { return NgxDropzoneImagePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function() { return NgxDropzoneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function() { return NgxDropzonePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function() { return NgxDropzoneRemoveBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function() { return NgxDropzoneVideoPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxDropzoneService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxDropzoneLabelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-dropzone/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





class NgxDropzoneLabelDirective {
}
NgxDropzoneLabelDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngx-dropzone-label'
            },] }
];

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 */
function coerceNumberProperty(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return (!isNaN(parseFloat(value)) && !isNaN(Number(value))) ? Number(value) : null;
}

var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
    KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
})(KEY_CODE || (KEY_CODE = {}));
class NgxDropzonePreviewComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._removable = false;
        /** Emitted when the element should be removed. */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Make the preview item focusable using the tab key. */
        this.tabIndex = 0;
    }
    /** The file to preview. */
    set file(value) { this._file = value; }
    get file() { return this._file; }
    /** Allow the user to remove files. */
    get removable() {
        return this._removable;
    }
    set removable(value) {
        this._removable = coerceBooleanProperty(value);
    }
    keyEvent(event) {
        switch (event.keyCode) {
            case KEY_CODE.BACKSPACE:
            case KEY_CODE.DELETE:
                this.remove();
                break;
            default:
                break;
        }
    }
    /** We use the HostBinding to pass these common styles to child components. */
    get hostStyle() {
        const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /** Remove method to be used from the template. */
    _remove(event) {
        event.stopPropagation();
        this.remove();
    }
    /** Remove the preview item (use from component code). */
    remove() {
        if (this._removable) {
            this.removed.next(this.file);
        }
    }
    readFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => {
                    resolve(e.target.result);
                };
                reader.onerror = e => {
                    console.error(`FileReader failed on file ${this.file.name}.`);
                    reject(e);
                };
                if (!this.file) {
                    return reject('No file to read. Please provide a file using the [file] Input property.');
                }
                reader.readAsDataURL(this.file);
            });
        });
    }
}
NgxDropzonePreviewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone-preview',
                template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
                styles: [":host{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:focus,:host:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}"]
            },] }
];
NgxDropzonePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
NgxDropzonePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    keyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    hostStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['tabindex',] }]
};

/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
class NgxDropzoneService {
    parseFileList(files, accept, maxFileSize, multiple) {
        const addedFiles = [];
        const rejectedFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            if (!this.isAccepted(file, accept)) {
                this.rejectFile(rejectedFiles, file, 'type');
                continue;
            }
            if (maxFileSize && file.size > maxFileSize) {
                this.rejectFile(rejectedFiles, file, 'size');
                continue;
            }
            if (!multiple && addedFiles.length >= 1) {
                this.rejectFile(rejectedFiles, file, 'no_multiple');
                continue;
            }
            addedFiles.push(file);
        }
        const result = {
            addedFiles,
            rejectedFiles
        };
        return result;
    }
    isAccepted(file, accept) {
        if (accept === '*') {
            return true;
        }
        const acceptFiletypes = accept.split(',').map(it => it.toLowerCase().trim());
        const filetype = file.type.toLowerCase();
        const filename = file.name.toLowerCase();
        const matchedFileType = acceptFiletypes.find(acceptFiletype => {
            // check for wildcard mimetype (e.g. image/*)
            if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
            }
            // check for file extension (e.g. .csv)
            if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
            }
            // check for exact mimetype match (e.g. image/jpeg)
            return acceptFiletype == filetype;
        });
        return !!matchedFileType;
    }
    rejectFile(rejectedFiles, file, reason) {
        const rejectedFile = file;
        rejectedFile.reason = reason;
        rejectedFiles.push(rejectedFile);
    }
}
NgxDropzoneService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

class NgxDropzoneComponent {
    constructor(service) {
        this.service = service;
        /** Emitted when any files were added or rejected. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Set the accepted file types. Defaults to '*'. */
        this.accept = '*';
        this._disabled = false;
        this._multiple = true;
        this._maxFileSize = undefined;
        this._expandable = false;
        this._disableClick = false;
        this._isHovered = false;
    }
    get _hasPreviews() {
        return !!this._previewChildren.length;
    }
    /** Disable any user interaction with the component. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this._isHovered) {
            this._isHovered = false;
        }
    }
    /** Allow the selection of multiple files. */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
    }
    /** Set the maximum size a single file may have. */
    get maxFileSize() {
        return this._maxFileSize;
    }
    set maxFileSize(value) {
        this._maxFileSize = coerceNumberProperty(value);
    }
    /** Allow the dropzone container to expand vertically. */
    get expandable() {
        return this._expandable;
    }
    set expandable(value) {
        this._expandable = coerceBooleanProperty(value);
    }
    /** Open the file selector on click. */
    get disableClick() {
        return this._disableClick;
    }
    set disableClick(value) {
        this._disableClick = coerceBooleanProperty(value);
    }
    /** Show the native OS file explorer to select files. */
    _onClick() {
        if (!this.disableClick) {
            this.showFileSelector();
        }
    }
    _onDragOver(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = true;
    }
    _onDragLeave() {
        this._isHovered = false;
    }
    _onDrop(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = false;
        this.handleFileDrop(event.dataTransfer.files);
    }
    showFileSelector() {
        if (!this.disabled) {
            this._fileInput.nativeElement.click();
        }
    }
    _onFilesSelected(event) {
        const files = event.target.files;
        this.handleFileDrop(files);
        // Reset the native file input element to allow selecting the same file again
        this._fileInput.nativeElement.value = '';
        // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
        this.preventDefault(event);
    }
    handleFileDrop(files) {
        const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
        this.change.next({
            addedFiles: result.addedFiles,
            rejectedFiles: result.rejectedFiles,
            source: this
        });
    }
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
NgxDropzoneComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone, [ngx-dropzone]',
                template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
                providers: [NgxDropzoneService],
                styles: [":host{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{cursor:no-drop;opacity:.5;pointer-events:none}:host.expandable{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}:host input{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]
            },] }
];
NgxDropzoneComponent.ctorParameters = () => [
    { type: NgxDropzoneService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
NgxDropzoneComponent.propDecorators = {
    _previewChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgxDropzonePreviewComponent, { descendants: true },] }],
    _fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileInput', { static: true },] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-disabled',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expandable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.expandable',] }],
    disableClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.unclickable',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-describedby',] }],
    _isHovered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-hovered',] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    _onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    _onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave',] }],
    _onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
};

class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent {
    constructor(sanitizer) {
        super(sanitizer);
        /** The image data source. */
        this.defaultImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
        this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading);
    }
    /** The file to preview. */
    set file(value) {
        this._file = value;
        this.renderImage();
    }
    get file() { return this._file; }
    ngOnInit() {
        this.renderImage();
    }
    renderImage() {
        this.readFile()
            .then(img => setTimeout(() => this.imageSrc = img))
            .catch(err => console.error(err));
    }
}
NgxDropzoneImagePreviewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone-image-preview',
                template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneImagePreviewComponent
                    }
                ],
                styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus img,:host:hover img{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host img{border-radius:5px;max-height:100%;opacity:.8}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
            },] }
];
NgxDropzoneImagePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
NgxDropzoneImagePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

class NgxDropzoneRemoveBadgeComponent {
}
NgxDropzoneRemoveBadgeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone-remove-badge',
                template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
                styles: [":host{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}:host:hover{background:#aeaeae}:host>svg{height:10px;width:10px}:host>svg>line{stroke:#fff;stroke-width:2px}"]
            },] }
];

class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent {
    constructor(sanitizer) {
        super(sanitizer);
    }
    ngOnInit() {
        if (!this.file) {
            console.error('No file to read. Please provide a file using the [file] Input property.');
            return;
        }
        /**
         * We sanitize the URL here to enable the preview.
         * Please note that this could cause security issues!
         **/
        this.videoSrc = URL.createObjectURL(this.file);
        this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
    }
    ngOnDestroy() {
        URL.revokeObjectURL(this.videoSrc);
    }
}
NgxDropzoneVideoPreviewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-dropzone-video-preview',
                template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneVideoPreviewComponent
                    }
                ],
                styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus video,:host:hover video{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host video{border-radius:5px;max-height:100%}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
            },] }
];
NgxDropzoneVideoPreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];

class NgxDropzoneModule {
}
NgxDropzoneModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ],
                exports: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ]
            },] }
];

/*
 * Public API Surface of ngx-dropzone
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-dropzone.js.map


/***/ }),

/***/ "./node_modules/ngx-dropzone/node_modules/tslib/tslib.es6.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-dropzone/node_modules/tslib/tslib.es6.js ***!
  \*******************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/fromEventPattern.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/fromEventPattern.js ***!
  \***********************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEventPattern"]; });


//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./src/app/wizard-screens/dynamic-form/dynamic-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/wizard-screens/dynamic-form/dynamic-form.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wizard-screens/dynamic-form/dynamic-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/wizard-screens/dynamic-form/dynamic-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"data\">\n  <div class=\"card\">\n      <div class=\"card-body\">\n          <div class=\"row\">\n              <div class=\"col-md-6 offset-md-3\">\n                  <form [formGroup]=\"stepForm\" (ngSubmit)=\"onSubmit()\">\n                      <div class=\"form-group\" *ngFor=\"let field of data.fields\">\n                          <div *ngIf=\"field.type === 'text'\">\n                              <label class=\"field_name\">{{field.label}}</label>\n                              <input [type]=\"field.type\" [formControlName]=\"field.key\"\n                                  placeholder=\"{{ field.placeholder }}\" class=\"form-control\"\n                                  [ngClass]=\"{ 'is-invalid': submitted && f[field.key].errors }\" />\n                              <div *ngIf=\"submitted && f[field.key].errors\" class=\"invalid-feedback\">\n                                  <ng-container *ngFor=\"let type of field.validation\">\n                                      <div *ngIf=\"f[field.key].errors[type.rule]\">{{type.message}}</div>\n                                  </ng-container>\n                              </div>\n                          </div>\n                          <div *ngIf=\"field.type === 'select'\">\n                              <label class=\"field_name\">{{field.label}}</label>\n                              <ng-select bindValue=\"value\" class=\"select-val\" [items]=\"field.options\"\n                                  [ngClass]=\"{ 'is-invalid': submitted && f[field.key]['errors']}\"\n                                  [clearable]=\"field.allowClear\" [formControlName]=\"field.key\">\n                              </ng-select>\n                              <div *ngIf=\"submitted && f[field.key].errors\" class=\"invalid-feedback\">\n                                  <ng-container *ngFor=\"let type of field.validation\">\n                                      <div *ngIf=\"f[field.key].errors[type.rule]\">{{type.message}}</div>\n                                  </ng-container>\n                              </div>\n                          </div>\n                          <div *ngIf=\"field.type === 'file'\">\n                              <label for=\"recipient-name\" class=\"col-form-label\">{{field.label}}</label>&nbsp;&nbsp;\n                              <button type=\"button\" id=\"recipient-name\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n                                  (click)=\"drop.showFileSelector()\">Browse..</button>\n                              <ngx-dropzone class=\"mt-3 drop-area\" (change)=\"onSelect($event)\"\n                                  [multiple]=\"field.allow_multiple_files\" [accept]=\"field.accepted_types\" #drop\n                                  [maxFileSize]=\"field.max_file_size\">\n                                  <ngx-dropzone-label><img class=\"upload-img\" [src]=\"field.upload_img\" alt=\"\">\n                                      Drop file, to upload</ngx-dropzone-label>\n                                  <ngx-dropzone-preview *ngFor=\"let f of files\" [removable]=\"true\"\n                                      (removed)=\"onRemove(f)\">\n                                      <ngx-dropzone-label>{{ f.name }}</ngx-dropzone-label>\n                                  </ngx-dropzone-preview>\n                              </ngx-dropzone>\n                              <div style=\"margin-top:10px\" class=\"help-block\" *ngFor=\"let msg of field.info_msgs\">\n                                  {{msg}}\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <button class=\"btn btn-primary field_name\" [ngClass]=\"{'disabled-pointer':(!data[this.currentActiveStep-1])}\" (click)=\"backToPreviousStep()\">Back</button>\n                          <button class=\"btn btn-primary field_name\" type=\"submit\">Proceed</button>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n\n</ng-container>"

/***/ }),

/***/ "./src/app/wizard-screens/dynamic-form/dynamic-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/wizard-screens/dynamic-form/dynamic-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent() {
        this.files = [];
        this.submitted = false;
        this.currentStep = "";
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.addFormControls(this.data.fields);
    };
    Object.defineProperty(DynamicFormComponent.prototype, "f", {
        get: function () { return this.stepForm.controls; },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.addFormControls = function (controls) {
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        for (var _i = 0, controls_1 = controls; _i < controls_1.length; _i++) {
            var field = controls_1[_i];
            var allValidators = [];
            var newFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
            for (var _a = 0, _b = field.validation; _a < _b.length; _a++) {
                var val = _b[_a];
                if (val.rule === 'required') {
                    allValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                }
                else if (val === "pattern") {
                    allValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(field.validation_value[val]));
                }
            }
            newFormControl.setValidators(allValidators);
            this.stepForm.addControl(field.key, newFormControl);
        }
    };
    DynamicFormComponent.prototype.onSelect = function (event) {
        console.log(event);
        this.files = [];
        if (event.addedFiles.length) {
            (_a = this.files).push.apply(_a, event.addedFiles);
            this.stepForm.patchValue({ renameFile: this.files[0]['name'] });
        }
        else if (event.rejectedFiles.length) {
            console.log("Please select valid file");
        }
        var _a;
    };
    DynamicFormComponent.prototype.onRemove = function (event) {
        // console.log(event);
        this.stepForm.patchValue({ renameFile: "" });
        this.files.splice(this.files.indexOf(event), 1);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.stepForm.valid) {
            var nextStepId = this.data[this.currentActiveStep + 1] && this.data[this.currentActiveStep + 1]['key'] ? this.data[this.currentActiveStep + 1]['key'] : "";
            if (nextStepId.length) {
                this.navigateSteps(true);
            }
            else {
                console.log("Successfully created step under process area");
                // let url = "/wizards/cards"
            }
        }
        // console.log(this.stepForm)
    };
    DynamicFormComponent.prototype.navigateSteps = function (flag) {
        this.currentStep = flag ? this.data[this.currentActiveStep + 1]['key'] : this.data[this.currentActiveStep - 1]['key'];
        this.currentActiveStep = flag ? this.currentActiveStep + 1 : this.currentActiveStep - 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "data", void 0);
    DynamicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-form',
            template: __webpack_require__(/*! ./dynamic-form.component.html */ "./src/app/wizard-screens/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-form.component.css */ "./src/app/wizard-screens/dynamic-form/dynamic-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/wizard-screens/wizard-cards.component.css":
/*!***********************************************************!*\
  !*** ./src/app/wizard-screens/wizard-cards.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header{\r\n    background-color: #308DFF !important;\r\n    color: white !important;\r\n}\r\n.card-Heading {\r\n    font-family: PSM, sans-serif !important; \r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    padding-top: 1rem;\r\n    color: #147ee4;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n.card{\r\n    height: 7rem;\r\n    width: 12rem;\r\n    font-weight: 600;\r\n    border-radius : 1.25rem !important;\r\n    border: .5px solid #147ee4;\r\n    color: #147ee4;\r\n    cursor: pointer;\r\n}\r\n.card-img{\r\n    height: 40px;\r\n}\r\n.card:hover{\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);\r\n}\r\n.config-act{\r\n    padding-right: 200px !important;\r\n    padding-left: 200px !important;\r\n    padding-top: 70px !important;\r\n    margin: auto;\r\n    margin-left: 40px !important;\r\n  }"

/***/ }),

/***/ "./src/app/wizard-screens/wizard-cards.component.html":
/*!************************************************************!*\
  !*** ./src/app/wizard-screens/wizard-cards.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row config-act\" style=\"padding-left: 3rem;padding-top: 6rem;\">\n  <div class=\"col-md-3 pb-5 pt-5 pr-3\" *ngFor=\"let process of processList\">\n    <div class=\"card\" [id]=\"process.key\" (click)=\"openWizard(process.key)\">\n      <div class=\"card-body text-center\">\n        <img class=\"card-img\" [src]=\"process.image\" alt=\"\"/>\n        <h5 class=\"card-title card-Heading\" [title]=\"process.label\">{{process.label}}</h5>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/wizard-screens/wizard-cards.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/wizard-screens/wizard-cards.component.ts ***!
  \**********************************************************/
/*! exports provided: WizardCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCardsComponent", function() { return WizardCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WizardCardsComponent = /** @class */ (function () {
    function WizardCardsComponent(modalService, http, _router) {
        var _this = this;
        this.modalService = modalService;
        this.http = http;
        this._router = _router;
        this.processList = [];
        this.currentStep = 0;
        this.settings = {
            showHrLine: true // Horizontal Line
        };
        this.data = [
            {
                label: 'Step 1',
                stepnumber: '1'
            },
            {
                label: 'Step 2',
                stepnumber: '2'
            },
            {
                label: 'Step 3',
                stepnumber: '3'
            },
            {
                label: 'Step 4',
                stepnumber: '4'
            }
        ];
        this.modal_options = {
            size: 'lg',
            backdrop: 'static'
        };
        this._jsonURL = 'assets/jsons/wizardList.json';
        this.getJSON().subscribe(function (responseJson) {
            if (responseJson && responseJson.status) {
                _this.processList = responseJson.message.data;
            }
        });
    }
    WizardCardsComponent.prototype.ngOnInit = function () {
    };
    WizardCardsComponent.prototype.onclick = function (step, i) {
        try {
            this.currentStep = i + 1;
            if (step['stepnumber']) {
                this.stepUpdate(step['stepnumber']);
            }
            // this.step.emit(step);
        }
        catch (error) {
            console.error(error);
        }
    };
    WizardCardsComponent.prototype.stepUpdate = function (number) {
        try {
            this.data.forEach(function (eachStep) {
                if (eachStep['stepnumber'] === number) {
                    eachStep['active'] = true;
                }
                else {
                    eachStep['active'] = false;
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    WizardCardsComponent.prototype.openWizard = function (id) {
        // this.popupModal = this.modalService.open(this.parameterWizard,this.modal_options);
        var url = "/wizards/wizard/" + id;
        this._router.navigate([url]);
    };
    WizardCardsComponent.prototype.getJSON = function () {
        return this.http.get(this._jsonURL);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('parameterWizard'),
        __metadata("design:type", Object)
    ], WizardCardsComponent.prototype, "parameterWizard", void 0);
    WizardCardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard-cards',
            template: __webpack_require__(/*! ./wizard-cards.component.html */ "./src/app/wizard-screens/wizard-cards.component.html"),
            styles: [__webpack_require__(/*! ./wizard-cards.component.css */ "./src/app/wizard-screens/wizard-cards.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WizardCardsComponent);
    return WizardCardsComponent;
}());



/***/ }),

/***/ "./src/app/wizard-screens/wizard-screens-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/wizard-screens/wizard-screens-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: WizardScreensRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardScreensRoutingModule", function() { return WizardScreensRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ "./src/app/wizard-screens/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _wizard_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-cards.component */ "./src/app/wizard-screens/wizard-cards.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/wizard-screens/wizard/wizard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
    },
    { path: 'cards', component: _wizard_cards_component__WEBPACK_IMPORTED_MODULE_3__["WizardCardsComponent"] },
    { path: 'wizard/:id', component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__["WizardComponent"] },
    { path: 'dynamicForm', component: _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"] }
];
var WizardScreensRoutingModule = /** @class */ (function () {
    function WizardScreensRoutingModule() {
    }
    WizardScreensRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WizardScreensRoutingModule);
    return WizardScreensRoutingModule;
}());



/***/ }),

/***/ "./src/app/wizard-screens/wizard-screens.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/wizard-screens/wizard-screens.module.ts ***!
  \*********************************************************/
/*! exports provided: WizardScreensModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardScreensModule", function() { return WizardScreensModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _wizard_screens_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-screens-routing.module */ "./src/app/wizard-screens/wizard-screens-routing.module.ts");
/* harmony import */ var _wizard_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard-cards.component */ "./src/app/wizard-screens/wizard-cards.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/wizard-screens/wizard/wizard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ "./src/app/wizard-screens/dynamic-form/dynamic-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { ToastrModule } from 'ngx-toastr';
var WizardScreensModule = /** @class */ (function () {
    function WizardScreensModule() {
    }
    WizardScreensModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _wizard_screens_routing_module__WEBPACK_IMPORTED_MODULE_3__["WizardScreensRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__["NgxDropzoneModule"],
            ],
            declarations: [_wizard_cards_component__WEBPACK_IMPORTED_MODULE_4__["WizardCardsComponent"], _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__["WizardComponent"], _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__["DynamicFormComponent"]]
        })
    ], WizardScreensModule);
    return WizardScreensModule;
}());



/***/ }),

/***/ "./src/app/wizard-screens/wizard/wizard.component.css":
/*!************************************************************!*\
  !*** ./src/app/wizard-screens/wizard/wizard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".steps ul {\r\n    margin:  0 0.83rem  !important;\r\n}\r\n.steps {\r\n    font-family   : \"Roboto-Regular\", Arial, Helvetica, sans-serif;\r\n    padding-top   : 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.steps,\r\n.steps ul {\r\n    display: flex\r\n}\r\n.steps ul {\r\n    margin          : 0 1.75rem;\r\n    padding-left    : 0;\r\n    list-style      : none;\r\n    background-color: #e6e8ed;\r\n    align-items     : flex-start;\r\n    flex-wrap       : nowrap;\r\n}\r\n.steps li {\r\n    position : relative;\r\n    overflow : hidden;\r\n    max-width: 100%;\r\n    cursor   : pointer;\r\n}\r\n.steps li:first-child:before {\r\n    display: none\r\n}\r\n.steps li:before {\r\n    content                   : \"\";\r\n    position                  : absolute;\r\n    top                       : 2px;\r\n    left                      : -.875rem;\r\n    z-index                   : 1;\r\n    display                   : block;\r\n    height                    : 1.75rem;\r\n    width                     : 1.75rem;\r\n    border                    : 2px solid #fff;\r\n    background-color          : #e6e8ed;\r\n    -webkit-transform         : rotate(45deg);\r\n    transform                 : rotate(45deg)\r\n}\r\n.steps li:hover+li:before,\r\n.steps li:hover a {\r\n    /* // background-color: #dde0e7 */\r\n}\r\n.steps li:hover a {\r\n    text-decoration: none\r\n}\r\n.steps a {\r\n    display      : block;\r\n    padding      : 5px .875rem 6px 1.75rem;\r\n    text-align   : center;\r\n    color        : #363642;\r\n    line-height  : 1.25rem;\r\n    overflow     : hidden;\r\n    text-overflow: ellipsis;\r\n    white-space  : nowrap\r\n}\r\n.steps a:focus,\r\n.steps a:hover {\r\n    text-decoration: none\r\n}\r\n.steps a>span:last-child {\r\n    margin-left: 5px\r\n}\r\n.steps .active+li:before,\r\n.steps .active a {\r\n    background-color: #308DFF\r\n}\r\n.steps .active .step-indicator,\r\n.steps .active a {\r\n    color: #fff\r\n}\r\n.steps .active:hover+li:before,\r\n.steps .active:hover a {\r\n    background-color: #308DFF \r\n}\r\n.steps .active:hover a {\r\n    color: #fff\r\n}\r\n.steps .success+li:before,\r\n.steps .success a {\r\n    background-color: #00a28a\r\n}\r\n.steps .success .step-indicator,\r\n.steps .success a {\r\n    color: #fff\r\n}\r\n.steps .success:hover+li:before,\r\n.steps .success:hover a {\r\n    background-color: #00937d\r\n}\r\n.steps .success:hover a {\r\n    color: #fff\r\n}\r\n.steps .error+li:before,\r\n.steps .error a {\r\n    background-color: #ea6759\r\n}\r\n.steps .error .step-indicator,\r\n.steps .error a {\r\n    color: #fff\r\n}\r\n.steps .error:hover+li:before,\r\n.steps .error:hover a {\r\n    background-color: #e85b4b\r\n}\r\n.steps .error:hover a {\r\n    color: #fff\r\n}\r\n.steps-float {\r\n    margin           : 0;\r\n    -webkit-transform: translate3d(0, -50%, 0);\r\n    transform        : translate3d(0, -50%, 0)\r\n}\r\n.steps li:before {\r\n    content                : \"\";\r\n    position               : absolute;\r\n    top                    : 2px;\r\n    left                   : -.83rem;\r\n    z-index                : 1;\r\n    display                : block;\r\n    height                 : 1.75rem;\r\n    width                  : 1.75rem;\r\n    border                 : 2px solid #fff;\r\n    border-top-right-radius: .5rem;\r\n    background-color       : #e6e8ed;\r\n    -webkit-transform      : rotate(45deg);\r\n    transform              : rotate(45deg)\r\n}\r\n.steps a {\r\n    display      : block;\r\n    padding      : 5px .83rem 6px 1.75rem;\r\n    text-align   : center;\r\n    color        : #363642;\r\n    line-height  : 1.25rem;\r\n    overflow     : hidden;\r\n    text-overflow: ellipsis;\r\n    white-space  : nowrap\r\n}\r\n.col-xl-3{\r\n    max-width: 22% !important;\r\n}\r\n.field_name{\r\n    font-size: 0.83rem;\r\n}\r\n.form-control{\r\n    border: 1px solid #A2CCFF;\r\n    font-size: 12px;\r\n}\r\n.select-val{\r\n    border: 1px solid #ccc;\r\n    border-radius: 6px;\r\n}\r\n.ng-option-label{\r\n    font-size: 12px !important;\r\n}\r\n.btn-primary{\r\n    background-color:#308DFF !important;\r\n    padding: 7px !important; \r\n    margin-left: 3px;\r\n}\r\n.btn-secondary{\r\n    border-color: #308DFF !important;\r\n    color: #308DFF !important;\r\n    background-color: white !important;\r\n    padding: 5px !important;\r\n}\r\n.card{\r\n    width: 800px !important;\r\n    height: 500px !important;\r\n    margin-top: 26px !important;\r\n    margin-left: 15px !important;\r\n    border-color: #308DFF !important;\r\n}\r\n.card-body{\r\n    margin-top: 50px !important;\r\n}\r\n.help-block{\r\n    font-size: 0.83rem !important;\r\n}\r\n.col-form-label{\r\n    font-size: 0.9rem !important;\r\n}\r\n.drop-area{\r\n    border: 1px dashed #308DFF !important;\r\n}\r\n.upload-img{\r\n    height: 25px;\r\n    width: 35px;\r\n}\r\n.drop_area_text{\r\n    margin-left: 5px;;\r\n}\r\n.ngx-dropzone-label{\r\n    font-size: 0.83rem !important;\r\n}\r\n.disabled-pointer{\r\n    pointer-events: none;\r\n    opacity: 0.5;\r\n} "

/***/ }),

/***/ "./src/app/wizard-screens/wizard/wizard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/wizard-screens/wizard/wizard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 px-0\">\n    <div class=\"steps\" [ngClass]=\"{'border-bottom mt-10 mb-10 pt-10 pb-10': settings.showHrLine}\" role=\"tablist\">\n        <ul>\n            <li *ngFor=\"let step of data; let i=index\" (click)=\"onclick(step, i)\" [ngClass]=\"{'active': step.active}\"\n                class=\"step\">\n                <a class=\"step-trigger\">\n                    <span class=\"d-none d-sm-inline\">{{step.label}}</span></a>\n            </li>\n        </ul>\n        <button class=\"btn btn-primary field_name\" style=\"margin-left: 20rem;\" (click)=\"goBack()\">Go back</button>\n    </div>\n</div>\n<ng-container *ngIf=\"stepData\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6 offset-md-3\">\n                    <form [formGroup]=\"stepForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group\" *ngFor=\"let field of stepData.fields\">\n                            <div *ngIf=\"field.type === 'text'\">\n                                <label class=\"field_name\">{{field.label}}</label>\n                                <input [type]=\"field.type\" [formControlName]=\"field.key\"\n                                    placeholder=\"{{ field.placeholder }}\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f[field.key].errors }\" />\n                                <div *ngIf=\"submitted && f[field.key].errors\" class=\"invalid-feedback\">\n                                    <ng-container *ngFor=\"let type of field.validation\">\n                                        <div *ngIf=\"f[field.key].errors[type.rule]\">{{type.message}}</div>\n                                    </ng-container>\n                                </div>\n                            </div>\n                            <div *ngIf=\"field.type === 'select'\">\n                                <label class=\"field_name\">{{field.label}}</label>\n                                <ng-select bindValue=\"value\" class=\"select-val\" [items]=\"field.options\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f[field.key]['errors']}\"\n                                    [clearable]=\"field.allowClear\" [formControlName]=\"field.key\">\n                                </ng-select>\n                                <div *ngIf=\"submitted && f[field.key].errors\" class=\"invalid-feedback\">\n                                    <ng-container *ngFor=\"let type of field.validation\">\n                                        <div *ngIf=\"f[field.key].errors[type.rule]\">{{type.message}}</div>\n                                    </ng-container>\n                                </div>\n                            </div>\n                            <div *ngIf=\"field.type === 'file'\">\n                                <label for=\"recipient-name\" class=\"col-form-label\">{{field.label}}</label>&nbsp;&nbsp;\n                                <button type=\"button\" id=\"recipient-name\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n                                    (click)=\"drop.showFileSelector()\">Browse..</button>\n                                <ngx-dropzone class=\"mt-3 drop-area\" (change)=\"onSelect($event)\"\n                                    [multiple]=\"field.allow_multiple_files\" [accept]=\"field.accepted_types\" #drop\n                                    [maxFileSize]=\"field.max_file_size\">\n                                    <ngx-dropzone-label><img class=\"upload-img\" [src]=\"field.upload_img\" alt=\"\">\n                                        Drop file, to upload</ngx-dropzone-label>\n                                    <ngx-dropzone-preview *ngFor=\"let f of files\" [removable]=\"true\"\n                                        (removed)=\"onRemove(f)\">\n                                        <ngx-dropzone-label>{{ f.name }}</ngx-dropzone-label>\n                                    </ngx-dropzone-preview>\n                                </ngx-dropzone>\n                                <div style=\"margin-top:10px\" class=\"help-block\" *ngFor=\"let msg of field.info_msgs\">\n                                    {{msg}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <!-- <button class=\"btn btn-primary field_name\" [ngClass]=\"{'disabled-pointer':(!data[this.currentActiveStep-1])}\" (click)=\"backToPreviousStep()\">Back</button> -->\n                            <button class=\"btn btn-primary field_name\" type=\"submit\">Proceed</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ng-container>"

/***/ }),

/***/ "./src/app/wizard-screens/wizard/wizard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/wizard-screens/wizard/wizard.component.ts ***!
  \***********************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ToastrService } from 'ngx-toastr';
var WizardComponent = /** @class */ (function () {
    function WizardComponent(http, route, _router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this._router = _router;
        this.files = [];
        this.currentStep = "";
        this.settings = {
            showHrLine: true // Horizontal Line
        };
        this.submitted = false;
        this._jsonURL = 'assets/jsons/wizardSteps.json';
        this.getJSON().subscribe(function (responseJson) {
            if (responseJson && responseJson.status) {
                _this.data = responseJson.message.steps[_this.cardId];
            }
            if (_this.data[0]) {
                _this.data[0]['active'] = true;
                _this.currentActiveStep = 0;
                _this.getStepData(_this.data[0]['key']);
            }
        });
    }
    WizardComponent.prototype.getJSON = function () {
        return this.http.get(this._jsonURL);
    };
    Object.defineProperty(WizardComponent.prototype, "f", {
        get: function () { return this.stepForm.controls; },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.cardId = _this.route.snapshot.params['id'];
        });
    };
    WizardComponent.prototype.onclick = function (step, i) {
        try {
            if (i < this.currentActiveStep) {
                var stepId = this.data[i] ? this.data[i]['key'] : "";
                if (stepId) {
                    var url = "/wizards/wizard/" + stepId;
                    this._router.navigate([url]);
                }
                this.currentActiveStep = i;
                this.currentStep = step.key;
                if (step['key']) {
                    this.stepUpdate(step.key);
                }
                this.getStepData(step.key);
            }
            else {
                console.log("Please fill form");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    WizardComponent.prototype.stepUpdate = function (key) {
        try {
            this.data.forEach(function (eachStep) {
                if (eachStep['key'] === key) {
                    eachStep['active'] = true;
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    WizardComponent.prototype.getStepData = function (key) {
        var _this = this;
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.submitted = false;
        var url = 'assets/jsons/dynamicFormData.json';
        this.http.get(url).subscribe(function (responseJson) {
            if (responseJson && responseJson['status']) {
                _this.stepData = responseJson['message'].data[key];
            }
            _this.addFormControls(_this.stepData.fields);
            _this.getIcons();
        });
    };
    WizardComponent.prototype.addFormControls = function (controls) {
        for (var _i = 0, controls_1 = controls; _i < controls_1.length; _i++) {
            var field = controls_1[_i];
            var allValidators = [];
            var newFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
            for (var _a = 0, _b = field.validation; _a < _b.length; _a++) {
                var val = _b[_a];
                if (val.rule === 'required') {
                    allValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                }
                else if (val === "pattern") {
                    allValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(field.validation_value[val]));
                }
            }
            newFormControl.setValidators(allValidators);
            this.stepForm.addControl(field.key, newFormControl);
        }
    };
    WizardComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.stepForm.valid) {
            var nextStepId = this.data[this.currentActiveStep + 1] && this.data[this.currentActiveStep + 1]['key'] ? this.data[this.currentActiveStep + 1]['key'] : "";
            if (nextStepId.length) {
                var url = "/wizards/wizard/" + nextStepId;
                this._router.navigate([url]);
                this.navigateSteps(true);
            }
            else {
                console.log("Successfully created step under process area");
                var url = "/wizards/cards";
                this._router.navigate([url]);
            }
        }
        // console.log(this.stepForm)
    };
    WizardComponent.prototype.backToPreviousStep = function () {
        var previousStepId = this.data[this.currentActiveStep - 1] && this.data[this.currentActiveStep - 1]['key'] ? this.data[this.currentActiveStep - 1]['key'] : "";
        if (previousStepId.length) {
            var url = "/wizards/wizard/" + previousStepId;
            this._router.navigate([url]);
            this.navigateSteps(false);
        }
    };
    WizardComponent.prototype.navigateSteps = function (flag) {
        this.currentStep = flag ? this.data[this.currentActiveStep + 1]['key'] : this.data[this.currentActiveStep - 1]['key'];
        this.stepUpdate(this.currentStep);
        this.getStepData(this.currentStep);
        this.currentActiveStep = flag ? this.currentActiveStep + 1 : this.currentActiveStep - 1;
    };
    WizardComponent.prototype.goBack = function () {
        var url = "/wizards/cards";
        this._router.navigate([url]);
    };
    WizardComponent.prototype.onSelect = function (event) {
        console.log(event);
        this.files = [];
        if (event.addedFiles.length) {
            (_a = this.files).push.apply(_a, event.addedFiles);
            this.stepForm.patchValue({ renameFile: this.files[0]['name'] });
        }
        else if (event.rejectedFiles.length) {
            console.log("Please select valid file");
        }
        var _a;
    };
    WizardComponent.prototype.onRemove = function (event) {
        // console.log(event);
        this.stepForm.patchValue({ renameFile: "" });
        this.files.splice(this.files.indexOf(event), 1);
    };
    WizardComponent.prototype.getIcons = function () {
        try {
            var url = "https://api.npms.io/v2/search?q=scope:angular";
            this.http.get(url).subscribe(function (response) {
                console.log(response);
            });
        }
        catch (error) {
            console.log("error", error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectFile'),
        __metadata("design:type", Object)
    ], WizardComponent.prototype, "Select_File", void 0);
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/wizard-screens/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/wizard-screens/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=wizard-screens-wizard-screens-module.js.map