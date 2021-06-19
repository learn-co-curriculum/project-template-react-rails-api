import { extend, isNullOrUndefined } from './util';
import { defaultCulture } from './internationalization';
/**
 * L10n modules provides localized text for different culture.
 * ```typescript
 * import {setCulture} from '@syncfusion/ts-base-library';
 * //load global locale object common for all components.
 * L10n.load({
 *    'fr-BE': {
 *       'button': {
 *            'check': 'vérifié'
 *        }
 *    }
 * });
 * //set globale default locale culture.
 * setCulture('fr-BE');
 * let instance: L10n = new L10n('button', {
 *    check: 'checked'
 * });
 * //Get locale text for current property.
 * instance.getConstant('check');
 * //Change locale culture in a component.
 * instance.setLocale('en-US');
 * ```
 */
var L10n = /** @class */ (function () {
    /**
     * Constructor
     */
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || defaultCulture);
    }
    /**
     * Sets the locale text
     * @param {string} locale
     * @returns {void}
     */
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        this.currentLocale = intLocale || this.localeStrings;
    };
    /**
     * Sets the global locale for all components.
     * @param {Object} localeObject - specifies the localeObject to be set as global locale.
     */
    L10n.load = function (localeObject) {
        this.locale = extend(this.locale, localeObject, {}, true);
    };
    /**
     * Returns current locale text for the property based on the culture name and control name.
     * @param {string} propertyName - specifies the property for which localize text to be returned.
     * @return string
     */
    L10n.prototype.getConstant = function (prop) {
        // Removed conditional operator because this method does not return correct value when passing 0 as value in localization
        if (!isNullOrUndefined(this.currentLocale[prop])) {
            return this.currentLocale[prop];
        }
        else {
            return this.localeStrings[prop] || '';
        }
    };
    /**
     * Returns the control constant object for current object and the locale specified.
     * @param {Object} curObject
     * @param {string} locale
     * @returns {Object}
     */
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if ((curObject)[locale]) {
            return (curObject)[locale][this.controlName];
        }
        return null;
    };
    L10n.locale = {};
    return L10n;
}());
export { L10n };
