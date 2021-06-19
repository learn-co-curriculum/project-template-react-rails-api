import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class TreeViewHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getElement(): any;
    getCollapsedStateElement(): any;
    getExpandedStateElement(): any;
    private getTreeViewInstance;
    setTreeViewProperty(propertyName: string, args?: any): any;
    callTreeviewMethods(methodName: string, args?: any): any;
    getSelectedNodes(id: number | string): any;
    /**
   * Used to get the disableNode of the treeview component.
   */
    getDisableNode(id: string | number): any;
    /**
   * Used to get the Active element of the treeview component.
   */
    getActiveElement(id: string | number): any;
    /**
   * Used to get the disabledNodes of the treeview.
   * @example
   * const dataSource = [{
   *   id: '1', text: 'parent',
   *   child: [
   *       { id: '1-1', text: 'child' }
   *   ]
   * }];
   * this.disabledNodes(['1'])
   */
    getDisabledNodes(id: string | number): any;
    /**
   * Used to get the Editable Nodes of the treeview.
   * @example
   * const dataSource = [{
   *   id: '1', text: 'parent',
   *   child: [
   *       { id: '1-1', text: 'child' }
   *   ]
   * }];
   * tree.beginEdit(['1'])
   */
    getNodeEdit(id: string | boolean): any;
    /**
   * Used to get the Editable Node of the treeview component.
   */
    getEditableNode(id: string | boolean): any;
}
