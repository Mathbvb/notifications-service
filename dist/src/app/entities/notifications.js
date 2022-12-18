"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const crypto_1 = require("crypto");
class Notification {
    constructor(props, id) {
        var _a;
        this._id = id !== null && id !== void 0 ? id : (0, crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    set content(content) {
        this.props.content = content;
    }
    get Content() {
        return this.props.content;
    }
    set category(category) {
        this.props.category = category;
    }
    get category() {
        return this.props.category;
    }
    read() {
        this.props.readAt = new Date();
    }
    unread() {
        this.props.readAt = null;
    }
    get readAt() {
        return this.props.readAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get recipientId() {
        return this.props.recipientId;
    }
    get canceledAt() {
        return this.props.canceledAt;
    }
    cancel() {
        this.props.canceledAt = new Date();
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notifications.js.map