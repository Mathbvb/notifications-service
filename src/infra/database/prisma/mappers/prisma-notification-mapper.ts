/* eslint-disable prettier/prettier */
import { Notification as RawNotification } from "@prisma/client";
import { Notification } from "src/app/entities/notifications";
import { Content } from "src/app/entities/content";

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAT: notification.createdAt,
        }
    }

    static toDomain(raw: RawNotification): Notification {
        return new Notification({
            category: raw.category,
            content: new Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.canceldAt,
            createdAt: raw.createdAT,
        },
        raw.id,)
        ;
    }
}