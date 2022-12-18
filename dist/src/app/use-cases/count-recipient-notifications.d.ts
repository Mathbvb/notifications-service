import { NotificationRepository } from "../repositories/notifications-repository";
interface CountRecipientNotificationRequest {
    recipientId: string;
}
type CountRecipientNotificationResponse = {
    count: number;
};
export declare class CountRecipientNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationRepository);
    execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse>;
}
export {};
