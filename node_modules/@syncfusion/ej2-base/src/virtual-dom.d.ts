import { ElementProperties } from './dom';
export interface VirtualObject {
    children?: VirtualObject[];
    tagName?: string;
    attributes?: {
        style?: Object;
    };
    parent?: VirtualObject;
}
/**
 * Namespace for VirtualDOM
 * @private
 */
export declare namespace VirtualDOM {
    function createElement(tagName: string, properties?: ElementProperties): VirtualObject;
    function assignParent(childrens: VirtualObject[], parent: VirtualObject): void;
    function append(fromElements: Object[], toElement: VirtualObject): void;
    function prepend(child: Object[], toElement: {
        children: Object[];
    }): void;
    function detach(element: VirtualObject): VirtualObject;
    function vDomSelector({ ele, selector, selectAll, immediateParent }: {
        ele: VirtualObject & VirtualObject[];
        selector: string;
        selectAll: boolean;
        immediateParent?: boolean;
    }): VirtualObject[];
    function accessElement(ele: VirtualObject, mapper: any, selectAll: boolean, immediateParent?: boolean): VirtualObject[];
    function ConvertHTMLToJSon(htmlString: string): VirtualObject[];
    function cloneNode(ele: VirtualObject | Element, deep: boolean): any;
    function setStyleAttribute(element: VirtualObject, attrs: Object): void;
}
