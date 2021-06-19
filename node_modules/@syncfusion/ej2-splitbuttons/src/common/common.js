var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/ban-types */
import { ChildProperty, extend, deleteObject, Property, addClass } from '@syncfusion/ej2-base';
/**
 * @param {Object} props - Specifies the properties
 * @param {string[]} model - Specifies the model
 * @returns {Object} Component Model
 */
export function getModel(props, model) {
    var obj = extend({}, props);
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var prop = _a[_i];
        if ((model).indexOf(prop) < 0) {
            deleteObject(obj, prop);
        }
    }
    return obj;
}
/** @hidden
 * @param {HTMLElement} ul - Specifies the UL element
 * @param {number} keyCode - Specifies the keycode
 * @returns {void}
 */
export function upDownKeyHandler(ul, keyCode) {
    var defaultIdx = keyCode === 40 ? 0 : ul.childElementCount - 1;
    var liIdx = defaultIdx;
    var li;
    var selectedLi = ul.querySelector('.e-selected');
    if (selectedLi) {
        selectedLi.classList.remove('e-selected');
    }
    for (var i = 0, len = ul.children.length; i < len; i++) {
        if (ul.children[i].classList.contains('e-focused')) {
            li = ul.children[i];
            liIdx = i;
            li.classList.remove('e-focused');
            if (keyCode === 40) {
                liIdx++;
            }
            else {
                liIdx--;
            }
            if (liIdx === (keyCode === 40 ? ul.childElementCount : -1)) {
                liIdx = defaultIdx;
            }
        }
    }
    li = ul.children[liIdx];
    liIdx = isValidLI(ul, li, liIdx, keyCode);
    if (liIdx !== -1) {
        addClass([ul.children[liIdx]], 'e-focused');
        ul.children[liIdx].focus();
    }
}
/**
 * Get Valid LI element
 *
 * @param {HTMLElement} ul - Specifies the UL element
 * @param {Element} li - Specifies the LI element
 * @param {number} index - Specifies the index
 * @param {number} keyCode - Specifies the keycode
 * @param {number} count - Specifies the count
 * @returns {number} - Index
 */
function isValidLI(ul, li, index, keyCode, count) {
    if (count === void 0) { count = 0; }
    if (li.classList.contains('e-separator') || li.classList.contains('e-disabled')) {
        if (index === (keyCode === 40 ? ul.childElementCount - 1 : 0)) {
            index = keyCode === 40 ? 0 : ul.childElementCount - 1;
        }
        else {
            if (keyCode === 40) {
                index++;
            }
            else {
                index--;
            }
        }
    }
    li = ul.children[index];
    if (li.classList.contains('e-separator') || li.classList.contains('e-disabled')) {
        count++;
        if (count === ul.childElementCount) {
            return index = -1;
        }
        index = isValidLI(ul, li, index, keyCode, count);
    }
    return index;
}
/** @hidden
 * @param {HTMLElement} popup - Specifies the popup element.
 * @returns {void}
 */
export function setBlankIconStyle(popup) {
    var blankIconList = [].slice.call(popup.getElementsByClassName('e-blank-icon'));
    if (!blankIconList.length) {
        return;
    }
    var iconLi = popup.querySelector('.e-item:not(.e-blank-icon):not(.e-separator)');
    if (iconLi.classList.contains('e-url')) {
        iconLi = iconLi.querySelector('.e-menu-url');
    }
    var icon = iconLi.querySelector('.e-menu-icon');
    var cssProp;
    var enableRtl = popup.classList.contains('e-rtl');
    if (enableRtl) {
        cssProp = { padding: 'paddingRight', margin: 'marginLeft' };
    }
    else {
        cssProp = { padding: 'paddingLeft', margin: 'marginRight' };
    }
    /* eslint-disable */
    var size = parseInt(getComputedStyle(icon).fontSize, 10) + parseInt((enableRtl ? getComputedStyle(icon)[cssProp.margin] : getComputedStyle(icon)[cssProp.margin]), 10)
        + parseInt(getComputedStyle(iconLi).paddingLeft, 10) + "px";
    blankIconList.forEach(function (li) {
        if (li.classList.contains('e-url')) {
            li.querySelector('.e-menu-url').style[cssProp.padding] = size;
        }
        else {
            li.style[cssProp.padding] = size;
        }
    });
    /* eslint-enable */
}
/**
 * Defines the items of Split Button/DropDownButton.
 */
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('')
    ], Item.prototype, "iconCss", void 0);
    __decorate([
        Property('')
    ], Item.prototype, "id", void 0);
    __decorate([
        Property(false)
    ], Item.prototype, "separator", void 0);
    __decorate([
        Property('')
    ], Item.prototype, "text", void 0);
    __decorate([
        Property('')
    ], Item.prototype, "url", void 0);
    __decorate([
        Property(false)
    ], Item.prototype, "disabled", void 0);
    return Item;
}(ChildProperty));
export { Item };
