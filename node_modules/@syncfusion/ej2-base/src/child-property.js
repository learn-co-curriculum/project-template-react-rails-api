import { getValue, setValue, merge, isBlazor } from './util';
import { Base } from './base';
/**
 * To detect the changes for inner properties.
 * @private
 */
var ChildProperty = /** @class */ (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.isComplexArraySetter = false;
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        // tslint:disable-next-line:no-empty
        this.finalUpdate = function () { };
        this.callChildDataBind = getValue('callChildDataBind', Base);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.isParentArray = isArray;
        this.setProperties(defaultValue, true);
    }
    /**
     * Updates the property changes
     * @param {boolean} val
     * @param {string} propName
     * @returns {void}
     */
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties[propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties[propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    /**
     * Updates time out duration
     */
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            var changeTime_1 = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
            var clearUpdate = function () {
                clearTimeout(changeTime_1);
            };
            this.finalUpdate = clearUpdate;
        }
    };
    /**
     * Clears changed properties
     */
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    /**
     * Set property changes
     * @param {Object} prop
     * @param {boolean} muteOnChange
     * {void}
     */
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            merge(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            merge(this, prop);
        }
    };
    /**
     * Binds data
     */
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                setValue(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                setValue(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    /**
     * Saves changes to newer values
     * @param {string} key
     * @param {Object} newValue
     * @param {Object} oldValue
     * @returns {void}
     */
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue, restrictServerDataBind) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        if (!restrictServerDataBind) {
            this.serverDataBind(key, newValue, true);
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    ChildProperty.prototype.serverDataBind = function (key, value, isSaveChanges, action) {
        if (isBlazor() && !this.parentObj.isComplexArraySetter) {
            // tslint:disable-next-line:no-any
            var parent_1;
            var newChanges = {};
            var parentKey = isSaveChanges ? this.getParentKey(true) + '.' + key : key;
            /* istanbul ignore else  */
            if (parentKey.indexOf('.') !== -1) {
                var complexKeys = parentKey.split('.');
                parent_1 = newChanges;
                for (var i = 0; i < complexKeys.length; i++) {
                    var isFinal = i === complexKeys.length - 1;
                    parent_1[complexKeys[i]] = isFinal ? value : {};
                    parent_1 = isFinal ? parent_1 : parent_1[complexKeys[i]];
                }
            }
            else {
                newChanges[parentKey] = {};
                parent_1 = newChanges[parentKey];
                newChanges[parentKey][key] = value;
            }
            /* istanbul ignore next */
            if (this.isParentArray) {
                var actionProperty = 'ejsAction';
                parent_1[actionProperty] = action ? action : 'none';
            }
            this.controlParent.serverDataBind(newChanges);
        }
    };
    ChildProperty.prototype.getParentKey = function (isSaveChanges) {
        // tslint:disable-next-line:no-any
        var index = '';
        var propName = this.propName;
        /* istanbul ignore next */
        if (this.isParentArray) {
            index = this.parentObj[this.propName].indexOf(this);
            var valueLength = this.parentObj[this.propName].length;
            valueLength = isSaveChanges ? valueLength : (valueLength > 0 ? valueLength - 1 : 0);
            index = index !== -1 ? '-' + index : '-' + valueLength;
            propName = propName + index;
        }
        if (this.controlParent !== this.parentObj) {
            propName = this.parentObj.getParentKey() + '.' + this.propName + index;
        }
        return propName;
    };
    return ChildProperty;
}());
export { ChildProperty };
