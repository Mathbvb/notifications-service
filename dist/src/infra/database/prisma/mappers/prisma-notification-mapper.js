"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationMapper = void 0;
const notifications_1 = require("../../../../app/entities/notifications");
const content_1 = require("../../../../app/entities/content");
class PrismaNotificationMapper {
    static toPrisma(notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAT: notification.createdAt,
        };
    }
    static toDomain(raw) {
        return new notifications_1.Notification({
            category: raw.category,
            content: new content_1.Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.canceldAt,
            createdAt: raw.createdAT,
        }, raw.id);
    }
}
exports.PrismaNotificationMapper = PrismaNotificationMapper;
//# sourceMappingURL=prisma-notification-mapper.js.map