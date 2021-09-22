/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { AsyncScheduler } from "./AsyncScheduler";
var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
  tslib_1.__extends(AnimationFrameScheduler, _super);
  function AnimationFrameScheduler() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AnimationFrameScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();
    do {
      if ((error = action.execute(action.state, action.delay))) {
        break;
      }
    } while (++index < count && (action = actions.shift()));
    this.active = false;
    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AnimationFrameScheduler;
})(AsyncScheduler);
export { AnimationFrameScheduler };
//# sourceMappingURL=AnimationFrameScheduler.js.map
