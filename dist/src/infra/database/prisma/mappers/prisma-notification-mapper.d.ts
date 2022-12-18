import { Notification as RawNotification } from "@prisma/client";
import { Notification } from "src/app/entities/notifications";
export declare class PrismaNotificationMapper {
    static toPrisma(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: Date;
        createdAT: Date;
    };
    static toDomain(raw: RawNotification): Notification;
}
