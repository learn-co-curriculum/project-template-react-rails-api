import { addClass, createElement as internalCreateElement, isNullOrUndefined } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
/**
 * Initialize ButtonGroup CSS component with specified properties.
 * ```html
 * <div id='buttongroup'>
 * <button></button>
 * <button></button>
 * <button></button>
 * </div>
 * ```
 * ```typescript
 * createButtonGroup('#buttongroup', {
 *   cssClass: 'e-outline',
 *   buttons: [
 *       { content: 'Day' },
 *       { content: 'Week' },
 *       { content: 'Work Week'}
 *   ]
 * });
 * ```
 *
 * @param {string} selector
 * @param {CreateButtonGroupModel} options
 * @returns HTMLElement
 */
/**
 * Creates button group.
 *
 * @param {string} selector - Specifies the selector.
 * @param {CreateButtonGroupModel} options - Specifies the button group model.
 * @param {Function} createElement - Specifies the element.
 * @returns {HTMLElement} - Button group element.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function createButtonGroup(selector, options, createElement) {
    if (options === void 0) { options = {}; }
    var child;
    var btnElem;
    var nextChild;
    var btnModel;
    if (isNullOrUndefined(createElement)) {
        createElement = internalCreateElement;
    }
    var wrapper = document.querySelector(selector);
    addClass([wrapper], ['e-btn-group', 'e-css']);
    wrapper.setAttribute('role', 'group');
    var childs = wrapper.children;
    options.buttons = options.buttons || [];
    for (var i = 0, j = 0; j < childs.length; i++, j++) {
        child = childs[j];
        btnModel = options.buttons[i];
        if (btnModel !== null) {
            if (child.tagName === 'BUTTON') {
                btnElem = child;
            }
            else {
                btnElem = createElement('label');
                nextChild = childs[j + 1];
                if (nextChild) {
                    wrapper.insertBefore(btnElem, nextChild);
                }
                else {
                    wrapper.appendChild(btnElem);
                }
                if (child.id) {
                    btnElem.setAttribute('for', child.id);
                }
                if (btnModel && btnModel.disabled) {
                    child.disabled = true;
                }
                j++;
            }
            if (options.cssClass && btnModel && !btnModel.cssClass) {
                btnModel.cssClass = options.cssClass;
            }
            new Button(btnModel || {}, btnElem);
        }
    }
    return wrapper;
}
