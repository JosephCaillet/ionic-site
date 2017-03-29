/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './icon';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import3 from '@angular/core/src/linker/view_utils';
export var Wrapper_Icon = (function () {
    function Wrapper_Icon(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.Icon(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
    }
    Wrapper_Icon.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Icon.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_Icon.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Icon.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Icon.prototype.check_name = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.name = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Icon.prototype.check_ios = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.ios = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_Icon.prototype.check_md = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.md = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_Icon.prototype.check_isActive = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.isActive = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_Icon.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Icon.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_6 = this.context._hidden;
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    Wrapper_Icon.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Icon.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Icon;
}());
//# sourceMappingURL=icon.ngfactory.js.map