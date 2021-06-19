"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base E2E Helper Function
 */
class TestHelper {
    selector(arg) {
        return (this.wrapperFn ? this.wrapperFn(arg) : arg);
    }
    setModel(property, value) {
        return Mapper.setModel(this.id, this.selector, property, value);
    }
    getModel(property) {
        return Mapper.getModel(this.id, this.selector, property);
    }
    invoke(fName, args = []) {
        return Mapper.invoke(this.id, this.selector, fName, args);
    }
    eventHandler(eventName, callback) {
        return this.selector('#' + this.id).then((ele) => {
            var inst = ele[0].ej2_instances[0];
            return inst[eventName] = callback;
        });
    }
}
exports.TestHelper = TestHelper;
class Mapper {
    static setModel(id, selector, property, value) {
        let result;
        if (cy) {
            result = selector('#' + id).then((ele) => {
                return ele[0].ej2_instances[0][property] = value;
            });
        }
        return result;
    }
    static getModel(id, selector, property) {
        let result;
        if (cy) {
            result = selector('#' + id).then((ele) => {
                return ele[0].ej2_instances[0][property];
            });
        }
        return result;
    }
    static invoke(id, selector, fName, args = []) {
        let result;
        if (cy) {
            result = selector('#' + id).then((ele) => {
                var inst = ele[0].ej2_instances[0];
                return inst[fName].call(inst, args);
            });
        }
        return result;
    }
}
