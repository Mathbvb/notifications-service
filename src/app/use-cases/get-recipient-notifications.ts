/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notifications-repository";
import { Notification } from "../entities/notifications";

interface GetRecipientNotificationRequest {
    recipientId: string;
}

type GetRecipientNotificationResponse = {
    notifications: Notification[];
} 

@Injectable()
export class GetRecipientNotification{

    constructor(private notificationsRepository: NotificationRepository) {}

    async execute(request: GetRecipientNotificationRequest,): Promise<GetRecipientNotificationResponse>{
        const { recipientId } = request;
        
        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);
       
        return {notifications};
    }
}