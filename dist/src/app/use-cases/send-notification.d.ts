import { Notification } from "../entities/notifications";
import { NotificationRepository } from "../repositories/notifications-repository";
interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}
interface SendNotificationResponse {
    notification: Notification;
}
export declare class SendNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationRepository);
    execute(request: SendNotificationRequest): Promise<SendNotificationResponse>;
}
export {};
