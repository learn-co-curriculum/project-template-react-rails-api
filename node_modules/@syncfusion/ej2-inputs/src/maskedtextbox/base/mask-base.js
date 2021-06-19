/* eslint-disable valid-jsdoc, jsdoc/require-jsdoc, jsdoc/require-returns, jsdoc/require-param */
/**
 * MaskedTextBox base module
 */
import { EventHandler, isNullOrUndefined, merge, attributes, addClass, removeClass, Browser, extend } from '@syncfusion/ej2-base';
import { Input } from '../../input/input';
var ERROR = 'e-error';
var INPUTGROUP = 'e-input-group';
var FLOATINPUT = 'e-float-input';
var UTILMASK = 'e-utility-mask';
var TOPLABEL = 'e-label-top';
var BOTTOMLABEL = 'e-label-bottom';
/**
 * @hidden
 * Built-in masking elements collection.
 */
export var regularExpressions = {
    '0': '[0-9]',
    '9': '[0-9 ]',
    '#': '[0-9 +-]',
    'L': '[A-Za-z]',
    '?': '[A-Za-z ]',
    '&': '[^\x7f ]+',
    'C': '[^\x7f]+',
    'A': '[A-Za-z0-9]',
    'a': '[A-Za-z0-9 ]'
};
/**
 * Generate required masking elements to the MaskedTextBox from user mask input.
 *
 * @hidden
 */
export function createMask() {
    attributes(this.element, {
        'role': 'textbox', 'autocomplete': 'off', 'autocorrect': 'off', 'autocapitalize': 'off',
        'spellcheck': 'false', 'aria-live': 'assertive', 'aria-valuenow': ''
    });
    if (this.mask) {
        var splitMask = this.mask.split(']');
        for (var i = 0; i < splitMask.length; i++) {
            if (splitMask[i][splitMask[i].length - 1] === '\\') {
                splitMask[i] = splitMask[i] + ']';
                var splitInnerMask = splitMask[i].split('[');
                for (var j = 0; j < splitInnerMask.length; j++) {
                    if (splitInnerMask[j][splitInnerMask[j].length - 1] === '\\') {
                        splitInnerMask[j] = splitInnerMask[j] + '[';
                    }
                    pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                }
            }
            else {
                var splitInnerMask = splitMask[i].split('[');
                if (splitInnerMask.length > 1) {
                    var chkSpace = false;
                    for (var j = 0; j < splitInnerMask.length; j++) {
                        if (splitInnerMask[j] === '\\') {
                            this.customRegExpCollec.push('[');
                            this.hiddenMask += splitInnerMask[j] + '[';
                        }
                        else if (splitInnerMask[j] === '') {
                            chkSpace = true;
                        }
                        else if ((splitInnerMask[j] !== '' && chkSpace) || j === splitInnerMask.length - 1) {
                            this.customRegExpCollec.push('[' + splitInnerMask[j] + ']');
                            this.hiddenMask += this.promptChar;
                            chkSpace = false;
                        }
                        else {
                            pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                        }
                    }
                }
                else {
                    pushIntoRegExpCollec.call(this, splitInnerMask[0]);
                }
            }
        }
        this.escapeMaskValue = this.hiddenMask;
        this.promptMask = this.hiddenMask.replace(/[09?LCAa#&]/g, this.promptChar);
        if (!isNullOrUndefined(this.customCharacters)) {
            for (var i = 0; i < this.promptMask.length; i++) {
                if (!isNullOrUndefined(this.customCharacters[this.promptMask[i]])) {
                    this.promptMask = this.promptMask.replace(new RegExp(this.promptMask[i], 'g'), this.promptChar);
                }
            }
        }
        var escapeNumber = 0;
        if (this.hiddenMask.match(new RegExp(/\\/))) {
            for (var i = 0; i < this.hiddenMask.length; i++) {
                var j = 0;
                if (i >= 1) {
                    j = i;
                }
                escapeNumber = this.hiddenMask.length - this.promptMask.length;
                j = j - escapeNumber;
                if ((i > 0 && this.hiddenMask[i - 1] !== '\\') && (this.hiddenMask[i] === '>' ||
                    this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|')) {
                    this.promptMask = this.promptMask.substring(0, j) +
                        this.promptMask.substring((i + 1) - escapeNumber, this.promptMask.length);
                    this.escapeMaskValue = this.escapeMaskValue.substring(0, j) +
                        this.escapeMaskValue.substring((i + 1) - escapeNumber, this.escapeMaskValue.length);
                }
                if (this.hiddenMask[i] === '\\') {
                    this.promptMask = this.promptMask.substring(0, j) + this.hiddenMask[i + 1] +
                        this.promptMask.substring((i + 2) - escapeNumber, this.promptMask.length);
                    this.escapeMaskValue = this.escapeMaskValue.substring(0, j) + this.escapeMaskValue[i + 1] +
                        this.escapeMaskValue.substring((i + 2) - escapeNumber, this.escapeMaskValue.length);
                }
            }
        }
        else {
            this.promptMask = this.promptMask.replace(/[>|<]/g, '');
            this.escapeMaskValue = this.hiddenMask.replace(/[>|<]/g, '');
        }
        attributes(this.element, { 'aria-invalid': 'false' });
    }
}
/**
 * Apply mask ability with masking elements to the MaskedTextBox.
 *
 * @hidden
 */
export function applyMask() {
    setElementValue.call(this, this.promptMask);
    setMaskValue.call(this, this.value);
}
/**
 * To wire required events to the MaskedTextBox.
 *
 * @hidden
 */
export function wireEvents() {
    EventHandler.add(this.element, 'keydown', maskInputKeyDownHandler, this);
    EventHandler.add(this.element, 'keypress', maskInputKeyPressHandler, this);
    EventHandler.add(this.element, 'keyup', maskInputKeyUpHandler, this);
    EventHandler.add(this.element, 'input', maskInputHandler, this);
    EventHandler.add(this.element, 'focus', maskInputFocusHandler, this);
    EventHandler.add(this.element, 'blur', maskInputBlurHandler, this);
    EventHandler.add(this.element, 'paste', maskInputPasteHandler, this);
    EventHandler.add(this.element, 'cut', maskInputCutHandler, this);
    EventHandler.add(this.element, 'drop', maskInputDropHandler, this);
    EventHandler.add(this.element, 'mousedown', maskInputMouseDownHandler, this);
    EventHandler.add(this.element, 'mouseup', maskInputMouseUpHandler, this);
    if (this.enabled) {
        bindClearEvent.call(this);
        if (this.formElement) {
            EventHandler.add(this.formElement, 'reset', resetFormHandler, this);
        }
    }
}
/**
 * To unwire events attached to the MaskedTextBox.
 *
 * @hidden
 */
export function unwireEvents() {
    EventHandler.remove(this.element, 'keydown', maskInputKeyDownHandler);
    EventHandler.remove(this.element, 'keypress', maskInputKeyPressHandler);
    EventHandler.remove(this.element, 'keyup', maskInputKeyUpHandler);
    EventHandler.remove(this.element, 'input', maskInputHandler);
    EventHandler.remove(this.element, 'focus', maskInputFocusHandler);
    EventHandler.remove(this.element, 'blur', maskInputBlurHandler);
    EventHandler.remove(this.element, 'paste', maskInputPasteHandler);
    EventHandler.remove(this.element, 'cut', maskInputCutHandler);
    EventHandler.remove(this.element, 'mousedown', maskInputMouseDownHandler);
    EventHandler.remove(this.element, 'mouseup', maskInputMouseUpHandler);
    if (this.formElement) {
        EventHandler.remove(this.formElement, 'reset', resetFormHandler);
    }
}
/**
 * To bind required events to the MaskedTextBox clearButton.
 *
 * @hidden
 */
export function bindClearEvent() {
    if (this.showClearButton) {
        EventHandler.add(this.inputObj.clearButton, 'mousedown touchstart', resetHandler, this);
    }
}
function resetHandler(e) {
    e.preventDefault();
    if (!this.inputObj.clearButton.classList.contains('e-clear-icon-hide')) {
        clear.call(this, e);
        this.value = '';
    }
}
function clear(event) {
    var value = this.element.value;
    setElementValue.call(this, this.promptMask);
    this.redoCollec.unshift({
        value: this.promptMask, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd
    });
    triggerMaskChangeEvent.call(this, event, value);
    this.element.setSelectionRange(0, 0);
}
function resetFormHandler() {
    if (this.element.tagName === 'EJS-MASKEDTEXTBOX') {
        setElementValue.call(this, this.promptMask);
    }
    else {
        this.value = this.initInputValue;
    }
}
/**
 * To get masked value from the MaskedTextBox.
 *
 * @hidden
 */
export function unstrippedValue(element) {
    return element.value;
}
/**
 * To extract raw value from the MaskedTextBox.
 *
 * @hidden
 */
export function strippedValue(element, maskValues) {
    var value = '';
    var k = 0;
    var checkMask = false;
    var maskValue = (!isNullOrUndefined(maskValues)) ? maskValues : (!isNullOrUndefined(element) &&
        !isNullOrUndefined(this)) ? element.value : maskValues;
    if (maskValue !== this.promptMask) {
        for (var i = 0; i < this.customRegExpCollec.length; i++) {
            if (checkMask) {
                checkMask = false;
            }
            if (this.customRegExpCollec[k] === '>' || this.customRegExpCollec[k] === '<' ||
                this.customRegExpCollec[k] === '|' || this.customRegExpCollec[k] === '\\') {
                --i;
                checkMask = true;
            }
            if (!checkMask) {
                if ((maskValue[i] !== this.promptChar) && (!isNullOrUndefined(this.customRegExpCollec[k]) &&
                    ((this._callPasteHandler || !isNullOrUndefined(this.regExpCollec[this.customRegExpCollec[k]])) ||
                        (this.customRegExpCollec[k].length > 2 && this.customRegExpCollec[k][0] === '[' &&
                            this.customRegExpCollec[k][this.customRegExpCollec[k].length - 1] === ']') ||
                        (!isNullOrUndefined(this.customCharacters) &&
                            (!isNullOrUndefined(this.customCharacters[this.customRegExpCollec[k]]))))) && (maskValue !== '')) {
                    value += maskValue[i];
                }
            }
            ++k;
        }
    }
    if (this.mask === null || this.mask === '' && this.value !== undefined) {
        value = maskValue;
    }
    return value;
}
function pushIntoRegExpCollec(value) {
    for (var k = 0; k < value.length; k++) {
        this.hiddenMask += value[k];
        if (value[k] !== '\\') {
            this.customRegExpCollec.push(value[k]);
        }
    }
}
export function maskInputMouseDownHandler() {
    this.isClicked = true;
}
export function maskInputMouseUpHandler() {
    this.isClicked = false;
}
export function maskInputFocusHandler(event) {
    var _this = this;
    var inputElement = this.element;
    var startIndex = 0;
    var modelValue = strippedValue.call(this, inputElement);
    var toAllowForward = false;
    var toAllowBackward = false;
    var eventArgs = {
        selectionStart: inputElement.selectionStart,
        event: event,
        value: this.value,
        maskedValue: inputElement.value,
        container: this.inputObj.container,
        selectionEnd: inputElement.selectionEnd
    };
    if (!this.isClicked) {
        triggerFocus.call(this, eventArgs, inputElement);
    }
    if (this.mask) {
        if (!(!(modelValue === null || modelValue === '') || this.floatLabelType === 'Always' ||
            this.placeholder === null || this.placeholder === '')) {
            inputElement.value = this.promptMask;
        }
        setTimeout(function () {
            if (inputElement.selectionStart === _this.promptMask.length ||
                inputElement.value[inputElement.selectionStart] === _this.promptChar) {
                toAllowForward = true;
            }
            else {
                for (var i = inputElement.selectionStart; i < _this.promptMask.length; i++) {
                    if (inputElement.value[i] !== _this.promptChar) {
                        if ((inputElement.value[i] !== _this.promptMask[i])) {
                            toAllowForward = false;
                            break;
                        }
                    }
                    else {
                        toAllowForward = true;
                        break;
                    }
                }
            }
        });
        setTimeout(function () {
            var backSelectionStart = inputElement.selectionStart - 1;
            if (backSelectionStart === _this.promptMask.length - 1 ||
                inputElement.value[backSelectionStart] === _this.promptChar) {
                toAllowBackward = true;
            }
            else {
                for (var i = backSelectionStart; i >= 0; i--) {
                    if (inputElement.value[i] !== _this.promptChar) {
                        if ((inputElement.value[i] !== _this.promptMask[i])) {
                            toAllowBackward = false;
                            break;
                        }
                    }
                    else {
                        toAllowBackward = true;
                        break;
                    }
                }
            }
        });
        if ((this.isClicked || (this.floatLabelType !== 'Always' &&
            ((modelValue === null || modelValue === '') &&
                (this.placeholder !== null && this.placeholder !== ''))))) {
            for (startIndex = 0; startIndex < this.promptMask.length; startIndex++) {
                if (inputElement.value[startIndex] === this.promptChar) {
                    setTimeout(function () {
                        if (toAllowForward || toAllowBackward) {
                            inputElement.selectionEnd = startIndex;
                            inputElement.selectionStart = startIndex;
                        }
                        eventArgs = {
                            selectionStart: inputElement.selectionStart,
                            event: event,
                            value: _this.value,
                            maskedValue: inputElement.value,
                            container: _this.inputObj.container,
                            selectionEnd: inputElement.selectionEnd
                        };
                        triggerFocus.call(_this, eventArgs, inputElement);
                    });
                    break;
                }
            }
            if (isNullOrUndefined(inputElement.value.match(this.promptChar))) {
                eventArgs = {
                    selectionStart: inputElement.selectionStart,
                    event: event,
                    value: this.value,
                    maskedValue: inputElement.value,
                    container: this.inputObj.container,
                    selectionEnd: inputElement.selectionEnd
                };
                triggerFocus.call(this, eventArgs, inputElement);
            }
            this.isClicked = false;
        }
    }
}
export function triggerFocus(eventArgs, inputElement) {
    this.trigger('focus', eventArgs, function (eventArgs) {
        inputElement.selectionStart = eventArgs.selectionStart;
        inputElement.selectionEnd = eventArgs.selectionEnd;
    });
}
export function maskInputBlurHandler(event) {
    this.blurEventArgs = {
        event: event,
        value: this.value,
        maskedValue: this.element.value,
        container: this.inputObj.container
    };
    this.trigger('blur', this.blurEventArgs);
    if (this.mask) {
        this.isFocus = false;
        if (this.placeholder && this.element.value === this.promptMask && this.floatLabelType !== 'Always') {
            setElementValue.call(this, '');
            var labelElement = this.element.parentNode.querySelector('.e-float-text');
            if (this.floatLabelType === 'Auto' && !isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL)) {
                removeClass([labelElement], TOPLABEL);
            }
        }
    }
}
function maskInputPasteHandler(event) {
    var _this = this;
    if (this.mask && !this.readonly) {
        var sIndex_1 = this.element.selectionStart;
        var eIndex_1 = this.element.selectionEnd;
        var oldValue_1 = this.element.value;
        setElementValue.call(this, '');
        this._callPasteHandler = true;
        setTimeout(function () {
            var value = _this.element.value.replace(/ /g, '');
            if (_this.redoCollec.length > 0 && _this.redoCollec[0].value === _this.element.value) {
                value = strippedValue.call(_this, _this.element);
            }
            setElementValue.call(_this, oldValue_1);
            _this.element.selectionStart = sIndex_1;
            _this.element.selectionEnd = eIndex_1;
            var i = 0;
            _this.maskKeyPress = true;
            do {
                validateValue.call(_this, value[i], false, null);
                ++i;
            } while (i < value.length);
            _this.maskKeyPress = false;
            _this._callPasteHandler = false;
            if (_this.element.value === oldValue_1) {
                var i_1 = 0;
                _this.maskKeyPress = true;
                do {
                    validateValue.call(_this, value[i_1], false, null);
                    ++i_1;
                } while (i_1 < value.length);
                _this.maskKeyPress = false;
            }
            else {
                triggerMaskChangeEvent.call(_this, event, oldValue_1);
            }
        }, 1);
    }
}
function maskInputCutHandler(event) {
    var _this = this;
    if (this.mask && !this.readonly) {
        var preValue_1 = this.element.value;
        var sIndex_2 = this.element.selectionStart;
        var eIndex = this.element.selectionEnd;
        this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd });
        var value_1 = this.element.value.substring(0, sIndex_2) + this.promptMask.substring(sIndex_2, eIndex) +
            this.element.value.substring(eIndex);
        setTimeout(function () {
            setElementValue.call(_this, value_1);
            _this.element.selectionStart = _this.element.selectionEnd = sIndex_2;
            if (_this.element.value !== preValue_1) {
                triggerMaskChangeEvent.call(_this, event, null);
            }
        }, 0);
    }
}
export function maskInputDropHandler(event) {
    event.preventDefault();
}
function maskInputHandler(event) {
    if (Browser.isIE === true && this.element.value === '' && this.floatLabelType === 'Never') {
        return;
    }
    var eventArgs = { ctrlKey: false, keyCode: 229 };
    extend(event, eventArgs);
    if (this.mask) {
        if (this.element.value === '') {
            this.redoCollec.unshift({
                value: this.promptMask, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd
            });
        }
        if (this.element.value.length === 1) {
            this.element.value = this.element.value + this.promptMask;
            this.element.setSelectionRange(1, 1);
        }
        if (!this._callPasteHandler) {
            removeMaskInputValues.call(this, event);
        }
        if (this.element.value.length > this.promptMask.length) {
            var startIndex = this.element.selectionStart;
            var addedValues = this.element.value.length - this.promptMask.length;
            var value = this.element.value.substring(startIndex - addedValues, startIndex);
            this.maskKeyPress = false;
            var i = 0;
            do {
                validateValue.call(this, value[i], event.ctrlKey, event);
                ++i;
            } while (i < value.length);
            if (this.element.value !== this.preEleVal) {
                triggerMaskChangeEvent.call(this, event, null);
            }
        }
        var val = strippedValue.call(this, this.element);
        this.prevValue = val;
        this.value = val;
        if (val === '') {
            setElementValue.call(this, this.promptMask);
            this.element.setSelectionRange(0, 0);
        }
    }
}
function maskInputKeyDownHandler(event) {
    if (this.mask && !this.readonly) {
        if (event.keyCode !== 229) {
            if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
                event.preventDefault();
            }
            removeMaskInputValues.call(this, event);
        }
        var startValue = this.element.value;
        if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
            var collec = void 0;
            if (event.keyCode === 90 && this.undoCollec.length > 0 && startValue !== this.undoCollec[this.undoCollec.length - 1].value) {
                collec = this.undoCollec[this.undoCollec.length - 1];
                this.redoCollec.unshift({
                    value: this.element.value, startIndex: this.element.selectionStart,
                    endIndex: this.element.selectionEnd
                });
                setElementValue.call(this, collec.value);
                this.element.selectionStart = collec.startIndex;
                this.element.selectionEnd = collec.endIndex;
                this.undoCollec.splice(this.undoCollec.length - 1, 1);
            }
            else if (event.keyCode === 89 && this.redoCollec.length > 0 && startValue !== this.redoCollec[0].value) {
                collec = this.redoCollec[0];
                this.undoCollec.push({
                    value: this.element.value, startIndex: this.element.selectionStart,
                    endIndex: this.element.selectionEnd
                });
                setElementValue.call(this, collec.value);
                this.element.selectionStart = collec.startIndex;
                this.element.selectionEnd = collec.endIndex;
                this.redoCollec.splice(0, 1);
            }
        }
    }
}
export function mobileRemoveFunction() {
    var collec;
    var sIndex = this.element.selectionStart;
    var eIndex = this.element.selectionEnd;
    if (this.redoCollec.length > 0) {
        collec = this.redoCollec[0];
        setElementValue.call(this, collec.value);
        if ((collec.startIndex - sIndex) === 1) {
            this.element.selectionStart = collec.startIndex;
            this.element.selectionEnd = collec.endIndex;
        }
        else {
            this.element.selectionStart = sIndex + 1;
            this.element.selectionEnd = eIndex + 1;
        }
    }
    else {
        setElementValue.call(this, this.promptMask);
        this.element.selectionStart = this.element.selectionEnd = sIndex;
    }
}
function autoFillMaskInputValues(isRemove, oldEventVal, event) {
    if (event.type === 'input') {
        isRemove = false;
        oldEventVal = this.element.value;
        setElementValue.call(this, this.promptMask);
        setMaskValue.call(this, oldEventVal);
    }
    return isRemove;
}
function removeMaskInputValues(event) {
    var isRemove = false;
    var oldEventVal;
    var isDeleted = false;
    if (this.element.value.length < this.promptMask.length) {
        isRemove = true;
        oldEventVal = this.element.value;
        isRemove = autoFillMaskInputValues.call(this, isRemove, oldEventVal, event);
        mobileRemoveFunction.call(this);
    }
    if (this.element.value.length >= this.promptMask.length && event.type === 'input') {
        isRemove = autoFillMaskInputValues.call(this, isRemove, oldEventVal, event);
    }
    var initStartIndex = this.element.selectionStart;
    var initEndIndex = this.element.selectionEnd;
    var startIndex = this.element.selectionStart;
    var endIndex = this.element.selectionEnd;
    var maskValue = this.hiddenMask.replace(/[>|\\<]/g, '');
    var curMask = maskValue[startIndex - 1];
    var deleteEndIndex = this.element.selectionEnd;
    if (isRemove || event.keyCode === 8 || event.keyCode === 46) {
        this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: endIndex });
        var multipleDel = false;
        var preValue = this.element.value;
        if (startIndex > 0 || ((event.keyCode === 8 || event.keyCode === 46) && startIndex < this.element.value.length
            && ((this.element.selectionEnd - startIndex) !== this.element.value.length))) {
            var index = startIndex;
            if (startIndex !== endIndex) {
                startIndex = endIndex;
                if (event.keyCode === 46) {
                    multipleDel = true;
                }
            }
            else if (event.keyCode === 46) {
                ++index;
            }
            else {
                --index;
            }
            for (var k = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? k > index : k < index; (event.keyCode === 8 || isRemove || multipleDel) ? k-- : k++) {
                for (var i = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? i > 0 : i < this.element.value.length; (event.keyCode === 8 || isRemove || multipleDel) ? i-- : i++) {
                    var sIndex = void 0;
                    if (((event.keyCode === 8 || multipleDel) && ((initStartIndex !== initEndIndex && initStartIndex !== startIndex) ||
                        (initStartIndex === initEndIndex))) || isRemove) {
                        curMask = maskValue[i - 1];
                        sIndex = startIndex - 1;
                    }
                    else {
                        curMask = maskValue[i];
                        sIndex = startIndex;
                        ++startIndex;
                    }
                    var oldValue = this.element.value[sIndex];
                    if ((isNullOrUndefined(this.regExpCollec[curMask]) && (!isNullOrUndefined(this.customCharacters)
                        && isNullOrUndefined(this.customCharacters[curMask]))
                        && ((this.hiddenMask[sIndex] !== this.promptChar && this.customRegExpCollec[sIndex][0] !== '['
                            && this.customRegExpCollec[sIndex][this.customRegExpCollec[sIndex].length - 1] !== ']')))
                        || (this.promptMask[sIndex] !== this.promptChar && isNullOrUndefined(this.customCharacters))) {
                        this.element.selectionStart = this.element.selectionEnd = sIndex;
                        event.preventDefault();
                        if (event.keyCode === 46 && !multipleDel) {
                            ++this.element.selectionStart;
                        }
                    }
                    else {
                        var value = this.element.value;
                        var prompt_1 = this.promptChar;
                        var elementValue = value.substring(0, sIndex) + prompt_1 + value.substring(startIndex, value.length);
                        setElementValue.call(this, elementValue);
                        event.preventDefault();
                        if (event.keyCode === 46 && !multipleDel) {
                            sIndex++;
                        }
                        this.element.selectionStart = this.element.selectionEnd = sIndex;
                        isDeleted = true;
                    }
                    startIndex = this.element.selectionStart;
                    if ((!isDeleted && event.keyCode === 8) || multipleDel || (!isDeleted && !(event.keyCode === 46))) {
                        sIndex = startIndex - 1;
                    }
                    else {
                        sIndex = startIndex;
                        isDeleted = false;
                    }
                    oldValue = this.element.value[sIndex];
                    if (((initStartIndex !== initEndIndex) && (this.element.selectionStart === initStartIndex))
                        || (this.promptMask[sIndex] === this.promptChar) || ((oldValue !== this.promptMask[sIndex]) &&
                        (this.promptMask[sIndex] !== this.promptChar) && !isNullOrUndefined(this.customCharacters))) {
                        break;
                    }
                }
            }
        }
        if (event.keyCode === 46 && multipleDel && isDeleted) {
            this.element.selectionStart = this.element.selectionEnd = deleteEndIndex;
        }
        if (this.element.selectionStart === 0 && (this.element.selectionEnd === this.element.value.length)) {
            setElementValue.call(this, this.promptMask);
            event.preventDefault();
            this.element.selectionStart = this.element.selectionEnd = startIndex;
        }
        this.redoCollec.unshift({
            value: this.element.value, startIndex: this.element.selectionStart,
            endIndex: this.element.selectionEnd
        });
        if (this.element.value !== preValue) {
            triggerMaskChangeEvent.call(this, event, oldEventVal);
        }
    }
}
function maskInputKeyPressHandler(event) {
    if (this.mask && !this.readonly) {
        var oldValue = this.element.value;
        if ((!event.ctrlKey) || (event.ctrlKey && event.code !== 'KeyA' && event.code !== 'KeyY'
            && event.code !== 'KeyZ' && event.code !== 'KeyX' && event.code !== 'KeyC' && event.code !== 'KeyV')) {
            this.maskKeyPress = true;
            var key = event.key;
            if (key === 'Spacebar') {
                key = String.fromCharCode(event.keyCode);
            }
            if (!key) {
                this.isIosInvalid = true;
                validateValue.call(this, String.fromCharCode(event.keyCode), event.ctrlKey, event);
                event.preventDefault();
                this.isIosInvalid = false;
            }
            else if (key && key.length === 1) {
                validateValue.call(this, key, event.ctrlKey, event);
                event.preventDefault();
            }
            if (event.keyCode === 32 && key === ' ' && this.promptChar === ' ') {
                this.element.selectionStart = this.element.selectionEnd = this.element.selectionStart - key.length;
            }
        }
        if (this.element.value !== oldValue) {
            triggerMaskChangeEvent.call(this, event, oldValue);
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function triggerMaskChangeEvent(event, oldValue) {
    var prevOnChange = this.isProtectedOnChange;
    if (!isNullOrUndefined(this.changeEventArgs) && !this.isInitial) {
        var eventArgs = {};
        this.changeEventArgs = { value: this.element.value, maskedValue: this.element.value, isInteraction: false, isInteracted: false };
        if (this.mask) {
            this.changeEventArgs.value = strippedValue.call(this, this.element);
        }
        if (!isNullOrUndefined(event)) {
            this.changeEventArgs.isInteracted = true;
            this.changeEventArgs.isInteraction = true;
            this.changeEventArgs.event = event;
        }
        this.isProtectedOnChange = true;
        this.value = this.changeEventArgs.value;
        this.isProtectedOnChange = prevOnChange;
        merge(eventArgs, this.changeEventArgs);
        /* istanbul ignore next */
        if (this.isAngular && this.preventChange) {
            this.preventChange = false;
        }
        else {
            this.trigger('change', eventArgs);
        }
    }
    this.preEleVal = this.element.value;
    this.prevValue = strippedValue.call(this, this.element);
    attributes(this.element, { 'aria-valuenow': this.element.value });
}
function maskInputKeyUpHandler(event) {
    if (this.mask && !this.readonly) {
        var collec = void 0;
        if (!this.maskKeyPress && event.keyCode === 229) {
            var oldEventVal = void 0;
            if (this.element.value.length === 1) {
                this.element.value = this.element.value + this.promptMask;
                this.element.setSelectionRange(1, 1);
            }
            if (this.element.value.length > this.promptMask.length) {
                var startIndex = this.element.selectionStart;
                var addedValues = this.element.value.length - this.promptMask.length;
                var val_1 = this.element.value.substring(startIndex - addedValues, startIndex);
                if (this.undoCollec.length > 0) {
                    collec = this.undoCollec[this.undoCollec.length - 1];
                    var startIndex_1 = this.element.selectionStart;
                    oldEventVal = collec.value;
                    var oldVal = collec.value.substring(startIndex_1 - addedValues, startIndex_1);
                    collec = this.redoCollec[0];
                    val_1 = val_1.trim();
                    var isSpace = Browser.isAndroid && val_1 === '';
                    if (!isSpace && oldVal !== val_1 && collec.value.substring(startIndex_1 - addedValues, startIndex_1) !== val_1) {
                        validateValue.call(this, val_1, event.ctrlKey, event);
                    }
                    else if (isSpace) {
                        preventUnsupportedValues.call(this, event, startIndex_1 - 1, this.element.selectionEnd - 1, val_1, event.ctrlKey, false);
                    }
                }
                else {
                    oldEventVal = this.promptMask;
                    validateValue.call(this, val_1, event.ctrlKey, event);
                }
                this.maskKeyPress = false;
                triggerMaskChangeEvent.call(this, event, oldEventVal);
            }
        }
        else {
            removeMaskError.call(this);
        }
        var val = strippedValue.call(this, this.element);
        if (!((this.element.selectionStart === 0) && (this.promptMask === this.element.value) && val === '')
            || (val === '' && this.value !== val)) {
            this.prevValue = val;
            this.value = val;
        }
    }
    else {
        triggerMaskChangeEvent.call(this, event);
    }
    if (this.element.selectionStart === 0 && this.element.selectionEnd === 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var temp_1 = this.element;
        setTimeout(function () {
            temp_1.setSelectionRange(0, 0);
        }, 0);
    }
}
function mobileSwipeCheck(key) {
    if (key.length > 1 && ((this.promptMask.length + key.length) < this.element.value.length)) {
        var elementValue = this.redoCollec[0].value.substring(0, this.redoCollec[0].startIndex) + key +
            this.redoCollec[0].value.substring(this.redoCollec[0].startIndex, this.redoCollec[0].value.length);
        setElementValue.call(this, elementValue);
        this.element.selectionStart = this.element.selectionEnd = this.redoCollec[0].startIndex + key.length;
    }
    this.element.selectionStart = this.element.selectionStart - key.length;
    this.element.selectionEnd = this.element.selectionEnd - key.length;
}
function mobileValidation(key) {
    if (!this.maskKeyPress) {
        mobileSwipeCheck.call(this, key);
    }
}
function validateValue(key, isCtrlKey, event) {
    mobileValidation.call(this, key);
    if (isNullOrUndefined(this) || isNullOrUndefined(key)) {
        return;
    }
    var startIndex = this.element.selectionStart;
    var initStartIndex = startIndex;
    var curMask;
    var allowText = false;
    var value = this.element.value;
    var eventOldVal;
    var prevSupport = false;
    var isEqualVal = false;
    for (var k = 0; k < key.length; k++) {
        var keyValue = key[k];
        startIndex = this.element.selectionStart;
        if (!this.maskKeyPress && initStartIndex === startIndex) {
            startIndex = startIndex + k;
        }
        if ((!this.maskKeyPress || startIndex < this.promptMask.length)) {
            for (var i = startIndex; i < this.promptMask.length; i++) {
                var maskValue = this.escapeMaskValue;
                curMask = maskValue[startIndex];
                if (this.hiddenMask[startIndex] === '\\' && this.hiddenMask[startIndex + 1] === key) {
                    isEqualVal = true;
                }
                if ((isNullOrUndefined(this.regExpCollec[curMask]) && (isNullOrUndefined(this.customCharacters)
                    || (!isNullOrUndefined(this.customCharacters) && isNullOrUndefined(this.customCharacters[curMask])))
                    && ((this.hiddenMask[startIndex] !== this.promptChar && this.customRegExpCollec[startIndex][0] !== '['
                        && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] !== ']')))
                    || ((this.promptMask[startIndex] !== this.promptChar) && isNullOrUndefined(this.customCharacters))
                    || (this.promptChar === curMask && this.escapeMaskValue === this.mask)) {
                    this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
                    startIndex = this.element.selectionStart;
                    curMask = this.hiddenMask[startIndex];
                }
            }
            if (!isNullOrUndefined(this.customCharacters) && !isNullOrUndefined(this.customCharacters[curMask])) {
                var customValStr = this.customCharacters[curMask];
                var customValArr = customValStr.split(',');
                for (var i = 0; i < customValArr.length; i++) {
                    if (keyValue.match(new RegExp('[' + customValArr[i] + ']'))) {
                        allowText = true;
                        break;
                    }
                }
            }
            else if (!isNullOrUndefined(this.regExpCollec[curMask]) && keyValue.match(new RegExp(this.regExpCollec[curMask]))
                && this.promptMask[startIndex] === this.promptChar) {
                allowText = true;
            }
            else if (this.promptMask[startIndex] === this.promptChar && this.customRegExpCollec[startIndex][0] === '['
                && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] === ']'
                && keyValue.match(new RegExp(this.customRegExpCollec[startIndex]))) {
                allowText = true;
            }
            if ((!this.maskKeyPress || startIndex < this.hiddenMask.length) && allowText) {
                if (k === 0) {
                    if (this.maskKeyPress) {
                        this.undoCollec.push({ value: value, startIndex: startIndex, endIndex: startIndex });
                    }
                    else {
                        var sIndex = this.element.selectionStart;
                        var eIndex = this.element.selectionEnd;
                        if (this.redoCollec.length > 0) {
                            eventOldVal = this.redoCollec[0].value;
                            setElementValue.call(this, eventOldVal);
                            this.undoCollec.push(this.redoCollec[0]);
                        }
                        else {
                            this.undoCollec.push({ value: this.promptMask, startIndex: startIndex, endIndex: startIndex });
                            eventOldVal = this.promptMask;
                            setElementValue.call(this, eventOldVal);
                        }
                        this.element.selectionStart = sIndex;
                        this.element.selectionEnd = eIndex;
                    }
                }
                startIndex = this.element.selectionStart;
                applySupportedValues.call(this, event, startIndex, keyValue, eventOldVal, isEqualVal);
                prevSupport = true;
                if (k === key.length - 1) {
                    this.redoCollec.unshift({
                        value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd
                    });
                }
                allowText = false;
            }
            else {
                startIndex = this.element.selectionStart;
                preventUnsupportedValues.call(this, event, startIndex, initStartIndex, key, isCtrlKey, prevSupport);
            }
            if (k === key.length - 1 && !allowText) {
                if (!Browser.isAndroid || (Browser.isAndroid && startIndex < this.promptMask.length)) {
                    this.redoCollec.unshift({
                        value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd
                    });
                }
            }
        }
        else {
            if (key.length === 1 && !isCtrlKey && !isNullOrUndefined(event)) {
                addMaskErrorClass.call(this);
            }
        }
    }
}
function applySupportedValues(event, startIndex, keyValue, eventOldVal, isEqualVal) {
    if (this.hiddenMask.length > this.promptMask.length) {
        keyValue = changeToLowerUpperCase.call(this, keyValue, this.element.value);
    }
    if (!isEqualVal) {
        var value = this.element.value;
        var elementValue = value.substring(0, startIndex) + keyValue + value.substring(startIndex + 1, value.length);
        setElementValue.call(this, elementValue);
        this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
    }
}
function preventUnsupportedValues(event, sIdx, idx, key, ctrl, chkSupport) {
    if (!this.maskKeyPress) {
        var value = this.element.value;
        if (sIdx >= this.promptMask.length) {
            setElementValue.call(this, value.substring(0, sIdx));
        }
        else {
            if (idx === sIdx) {
                setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx + 1, value.length));
            }
            else {
                if (this.promptMask.length === this.element.value.length) {
                    setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx, value.length));
                }
                else {
                    setElementValue.call(this, value.substring(0, idx) + value.substring(idx + 1, value.length));
                }
            }
            this.element.selectionStart = this.element.selectionEnd = (chkSupport ||
                this.element.value[idx] !== this.promptChar) ? sIdx : idx;
        }
        addMaskErrorClass.call(this);
    }
    if (key.length === 1 && !ctrl && !isNullOrUndefined(event)) {
        addMaskErrorClass.call(this);
    }
}
function addMaskErrorClass() {
    var _this = this;
    var parentElement = this.element.parentNode;
    var timer = 200;
    if (parentElement.classList.contains(INPUTGROUP) || parentElement.classList.contains(FLOATINPUT)) {
        addClass([parentElement], ERROR);
    }
    else {
        addClass([this.element], ERROR);
    }
    if (this.isIosInvalid === true) {
        timer = 400;
    }
    attributes(this.element, { 'aria-invalid': 'true' });
    setTimeout(function () {
        if (!_this.maskKeyPress) {
            removeMaskError.call(_this);
        }
    }, timer);
}
function removeMaskError() {
    var parentElement = this.element.parentNode;
    if (!isNullOrUndefined(parentElement)) {
        removeClass([parentElement], ERROR);
    }
    removeClass([this.element], ERROR);
    attributes(this.element, { 'aria-invalid': 'false' });
}
/**
 * Validates user input using masking elements '<' , '>' and '|'.
 *
 * @hidden
 */
function changeToLowerUpperCase(key, value) {
    var promptMask;
    var i;
    var curVal = value;
    var caseCount = 0;
    for (i = 0; i < this.hiddenMask.length; i++) {
        if (this.hiddenMask[i] === '\\') {
            promptMask = curVal.substring(0, i) + '\\' + curVal.substring(i, curVal.length);
        }
        if (this.hiddenMask[i] === '>' || this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|') {
            if (this.hiddenMask[i] !== curVal[i]) {
                promptMask = curVal.substring(0, i) + this.hiddenMask[i] + curVal.substring(i, curVal.length);
            }
            ++caseCount;
        }
        if (promptMask) {
            if (((promptMask[i] === this.promptChar) && (i > this.element.selectionStart)) ||
                (this.element.value.indexOf(this.promptChar) < 0 && (this.element.selectionStart + caseCount) === i)) {
                caseCount = 0;
                break;
            }
            curVal = promptMask;
        }
    }
    while (i >= 0 && promptMask) {
        if (i === 0 || promptMask[i - 1] !== '\\') {
            if (promptMask[i] === '>') {
                key = key.toUpperCase();
                break;
            }
            else if (promptMask[i] === '<') {
                key = key.toLowerCase();
                break;
            }
            else if (promptMask[i] === '|') {
                break;
            }
        }
        --i;
    }
    return key;
}
/**
 * To set updated values in the MaskedTextBox.
 *
 * @hidden
 */
export function setMaskValue(val) {
    if (this.mask && val !== undefined && (this.prevValue === undefined || this.prevValue !== val)) {
        this.maskKeyPress = true;
        setElementValue.call(this, this.promptMask);
        if (val !== '' && !(val === null && this.floatLabelType === 'Never' && this.placeholder)) {
            this.element.selectionStart = 0;
            this.element.selectionEnd = 0;
        }
        if (val !== null) {
            for (var i = 0; i < val.length; i++) {
                validateValue.call(this, val[i], false, null);
            }
        }
        var newVal = strippedValue.call(this, this.element);
        this.prevValue = newVal;
        this.value = newVal;
        triggerMaskChangeEvent.call(this, null, null);
        this.maskKeyPress = false;
        var labelElement = this.element.parentNode.querySelector('.e-float-text');
        if (this.element.value === this.promptMask && this.floatLabelType === 'Auto' && this.placeholder &&
            !isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL) && !this.isFocus) {
            removeClass([labelElement], TOPLABEL);
            addClass([labelElement], BOTTOMLABEL);
            setElementValue.call(this, '');
        }
    }
    if (this.mask === null || this.mask === '' && this.value !== undefined) {
        setElementValue.call(this, this.value);
    }
}
/**
 * To set updated values in the input element.
 *
 * @hidden
 */
export function setElementValue(val, element) {
    if (!this.isFocus && this.floatLabelType === 'Auto' && this.placeholder && isNullOrUndefined(this.value)) {
        val = '';
    }
    var value = strippedValue.call(this, (element ? element : this.element), val);
    if (value === null || value === '') {
        Input.setValue(val, (element ? element : this.element), this.floatLabelType, false);
        if (this.showClearButton) {
            this.inputObj.clearButton.classList.add('e-clear-icon-hide');
        }
    }
    else {
        Input.setValue(val, (element ? element : this.element), this.floatLabelType, this.showClearButton);
    }
}
/**
 * Provide mask support to input textbox through utility method.
 *
 * @hidden
 */
export function maskInput(args) {
    var inputEle = getMaskInput(args);
    applyMask.call(inputEle);
    var val = strippedValue.call(this, this.element);
    this.prevValue = val;
    this.value = val;
    if (args.mask) {
        unwireEvents.call(inputEle);
        wireEvents.call(inputEle);
    }
}
function getMaskInput(args) {
    addClass([args.element], UTILMASK);
    var inputEle = {
        element: args.element,
        mask: args.mask,
        promptMask: '',
        hiddenMask: '',
        escapeMaskValue: '',
        promptChar: args.promptChar ? (args.promptChar.length > 1) ? args.promptChar = args.promptChar[0]
            : args.promptChar : '_',
        value: args.value ? args.value : null,
        regExpCollec: regularExpressions,
        customRegExpCollec: [],
        customCharacters: args.customCharacters,
        undoCollec: [],
        redoCollec: [],
        maskKeyPress: false,
        prevValue: ''
    };
    createMask.call(inputEle);
    return inputEle;
}
/**
 * Gets raw value of the textbox which has been masked through utility method.
 *
 * @hidden
 */
export function getVal(args) {
    return strippedValue.call(getUtilMaskEle(args), args.element);
}
/**
 * Gets masked value of the textbox which has been masked through utility method.
 *
 * @hidden
 */
export function getMaskedVal(args) {
    return unstrippedValue.call(getUtilMaskEle(args), args.element);
}
function getUtilMaskEle(args) {
    var inputEle;
    if (!isNullOrUndefined(args) && args.element.classList.contains(UTILMASK)) {
        inputEle = getMaskInput(args);
    }
    return inputEle;
}
/**
 * Arguments to perform undo and redo functionalities.
 *
 * @hidden
 */
var MaskUndo = /** @class */ (function () {
    function MaskUndo() {
    }
    return MaskUndo;
}());
export { MaskUndo };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var maskUndo = new MaskUndo();
/* eslint-enable valid-jsdoc, jsdoc/require-jsdoc, jsdoc/require-returns, jsdoc/require-param */
