var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Base } from './base';
import { Browser } from './browser';
import { isVisible, matches } from './dom';
import { Property, NotifyPropertyChanges, Event } from './notify-property-change';
import { EventHandler } from './event-handler';
import { compareElementParent } from './util';
/**
 * Droppable Module provides support to enable droppable functionality in Dom Elements.
 * ```html
 * <div id='drop'>Droppable</div>
 * <script>
 * let ele:HTMLElement = document.getElementById('drop');
 * var drag:Droppable = new Droppable(ele,{
 *     accept:'.drop',
 *     drop: function(e) {
 *      //drop handler code.
 *     }
 * });
 * </script>
 * ```
 */
var Droppable = /** @class */ (function (_super) {
    __extends(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        EventHandler.add(this.element, Browser.touchEndEvent, this.intDrop, this);
    };
    // triggers when property changed
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            var drag = this.dragData[this.scope];
            this.trigger('over', { event: event, target: element, dragData: drag });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && isVisible(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = matches(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
        this.mouseOver = false;
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = compareElementParent(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        EventHandler.remove(this.element, Browser.touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    __decorate([
        Property()
    ], Droppable.prototype, "accept", void 0);
    __decorate([
        Property('default')
    ], Droppable.prototype, "scope", void 0);
    __decorate([
        Event()
    ], Droppable.prototype, "drop", void 0);
    __decorate([
        Event()
    ], Droppable.prototype, "over", void 0);
    __decorate([
        Event()
    ], Droppable.prototype, "out", void 0);
    Droppable = __decorate([
        NotifyPropertyChanges
    ], Droppable);
    return Droppable;
}(Base));
export { Droppable };
