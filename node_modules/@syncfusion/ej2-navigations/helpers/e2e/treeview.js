"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class TreeViewHelper extends e2e_1.TestHelper {
    constructor(id, wrapperFn) {
        super();
        this.id = id;
        if (wrapperFn !== undefined) {
            this.wrapperFn = wrapperFn;
        }
        return this;
    }
    selector(arg) {
        return (this.wrapperFn ? this.wrapperFn(arg) : arg);
    }
    getElement() {
        return this.selector('#' + this.id);
    }
    getCollapsedStateElement() {
        return this.selector('.e-list-item.e-level-1.e-node-collapsed');
    }
    getExpandedStateElement() {
        return this.selector('.e-list-item.e-level-1');
    }
    getTreeViewInstance() {
        return this.getElement().then((ele) => {
            return ele[0].ej2_instances[0];
        });
    }
    setTreeViewProperty(propertyName, args = null) {
        return this.getTreeViewInstance().then((ej2_instance) => {
            return (ej2_instance[propertyName] = args);
        });
    }
    callTreeviewMethods(methodName, args = null) {
        return this.getTreeViewInstance().then((ej2_instance) => {
            return ej2_instance[methodName].call(ej2_instance, args);
        });
    }
    getSelectedNodes(id) {
        return this.setTreeViewProperty('selectedNodes', id);
    }
    getDisableNode(id) {
        return this.callTreeviewMethods('disableNodes', id);
    }
    getActiveElement(id) {
        this.getSelectedNodes(id);
        return this.selector('.e-list-item.e-level-1.e-active.e-node-focus');
    }
    getDisabledNodes(id) {
        this.getDisableNode(id);
        return this.selector('.e-list-item.e-level-1.e-disable');
    }
    getNodeEdit(id) {
        return this.callTreeviewMethods('beginEdit', id);
    }
    getEditableNode(id) {
        this.getNodeEdit(id);
        return this.selector('.e-text-content.e-icon-wrapper .e-input-group.e-control-wrapper');
    }
}
exports.TreeViewHelper = TreeViewHelper;
