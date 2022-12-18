/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Notification } from "src/app/entities/notifications";
import { NotificationRepository } from "src/app/repositories/notifications-repository";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {

    constructor(private prisma: PrismaService) {}  
    
    async create(notification: Notification): Promise<void> {

        const raw = PrismaNotificationMapper.toPrisma(notification)

        await this.prisma.notification.create({
            data: raw,
        });
    }

    async findById(notificationId: string): Promise<Notification> {
        const notification = await this.prisma.notification.findUnique({
            where: {
                id: notificationId,
            }
        });

        if (!notification) {
            return null;
        }

        return PrismaNotificationMapper.toDomain(notification);
    }

    async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prisma.notification.update({
            where: {
                id: raw.id,
            },
            data: raw, 
        })
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
         const count = await this.prisma.notification.count({
            where: {
                recipientId,
            }
         });

         return count;
    }

    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prisma.notification.findMany({
            where: {
                recipientId,
            },
        });

        return notifications.map(PrismaNotificationMapper.toDomain);
    }

}