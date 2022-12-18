import { Notification } from "src/app/entities/notifications";
import { NotificationRepository } from "src/app/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
export declare class PrismaNotificationsRepository implements NotificationRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(notification: Notification): Promise<void>;
    findById(notificationId: string): Promise<Notification>;
    save(notification: Notification): Promise<void>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
