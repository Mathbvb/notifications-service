/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notifications-repository";

interface CountRecipientNotificationRequest {
    recipientId: string;
}

type CountRecipientNotificationResponse = {
    count: number;
} 

@Injectable()
export class CountRecipientNotification{

    constructor(private notificationsRepository: NotificationRepository) {}

    async execute(request: CountRecipientNotificationRequest,): Promise<CountRecipientNotificationResponse>{
        const { recipientId } = request;
        
        const count = await this.notificationsRepository.countManyByRecipientId(
            recipientId,
        );
       
        return {
            count,
        };
    }
}