import { formatUnit } from '@syncfusion/ej2-base';
import { contentReady, uiUpdate, scrollUiUpdate } from '../base/constant';
/**
 * `Scroll` module
 */
var Scroll = /** @class */ (function () {
    /**
     * Constructor for the scrolling.
     *
     * @param {Schedule} parent Accepts the Schedule instance
     */
    function Scroll(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} Returns the module name.
     * @private
     */
    Scroll.prototype.getModuleName = function () {
        return 'scroll';
    };
    /**
     * Internal method to set the element width
     *
     * @returns {void}
     * @private
     */
    Scroll.prototype.setWidth = function () {
        this.parent.element.style.width = formatUnit(this.parent.width);
    };
    /**
     * Internal method to set the element height
     *
     * @returns {void}
     * @private
     */
    Scroll.prototype.setHeight = function () {
        this.parent.element.style.height = formatUnit(this.parent.height);
    };
    /**
     * Internal method to bind events
     *
     * @returns {void}
     * @private
     */
    Scroll.prototype.addEventListener = function () {
        this.parent.on(contentReady, this.setDimensions, this);
        this.parent.on(uiUpdate, this.onPropertyChanged, this);
    };
    /**
     * Internal method to unbind events
     *
     * @returns {void}
     * @private
     */
    Scroll.prototype.removeEventListener = function () {
        this.parent.off(contentReady, this.setDimensions);
        this.parent.off(uiUpdate, this.onPropertyChanged);
    };
    /**
     * Internal method to set the dimensions
     *
     * @returns {void}
     * @private
     */
    Scroll.prototype.setDimensions = function () {
        this.setWidth();
        this.setHeight();
        var data = { cssProperties: this.parent.getCssProperties(), module: this.getModuleName() };
        this.parent.notify(scrollUiUpdate, data);
    };
    /**
     * Internal method to set the dimensions dynamically
     *
     * @returns {void}
     * @private
     */
    Scroll.prototype.onPropertyChanged = function () {
        this.setDimensions();
    };
    /**
     * Destroy the scroll module
     *
     * @returns {void}
     * @private
     */
    Scroll.prototype.destroy = function () {
        this.removeEventListener();
    };
    return Scroll;
}());
export { Scroll };
