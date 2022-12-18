"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationViewModel = void 0;
class NotificationViewModel {
    static toHHTP(notification) {
        return {
            id: notification.id,
            content: notification.content,
            category: notification.category,
            recipientId: notification.recipientId,
        };
    }
}
exports.NotificationViewModel = NotificationViewModel;
//# sourceMappingURL=notification-view-model.js.map