import { NotificationRepository } from "../repositories/notifications-repository";
import { Notification } from "../entities/notifications";
interface GetRecipientNotificationRequest {
    recipientId: string;
}
type GetRecipientNotificationResponse = {
    notifications: Notification[];
};
export declare class GetRecipientNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationRepository);
    execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse>;
}
export {};
