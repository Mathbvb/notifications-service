/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notifications";
import { NotificationRepository } from "../repositories/notifications-repository";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse{
    notification: Notification;
}

@Injectable()
export class SendNotification{

    constructor(private notificationsRepository: NotificationRepository) {}

    async execute(request: SendNotificationRequest,): Promise<SendNotificationResponse>{
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        });

        await this.notificationsRepository.create(notification);

        return{
            notification,
        }

        
    }
}