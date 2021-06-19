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
export declare class L10n {
    private static locale;
    private controlName;
    private localeStrings;
    private currentLocale;
    /**
     * Constructor
     */
    constructor(controlName: string, localeStrings: Object, locale?: string);
    /**
     * Sets the locale text
     * @param {string} locale
     * @returns {void}
     */
    setLocale(locale: string): void;
    /**
     * Sets the global locale for all components.
     * @param {Object} localeObject - specifies the localeObject to be set as global locale.
     */
    static load(localeObject: Object): void;
    /**
     * Returns current locale text for the property based on the culture name and control name.
     * @param {string} propertyName - specifies the property for which localize text to be returned.
     * @return string
     */
    getConstant(prop: string): string;
    /**
     * Returns the control constant object for current object and the locale specified.
     * @param {Object} curObject
     * @param {string} locale
     * @returns {Object}
     */
    private intGetControlConstant;
}
