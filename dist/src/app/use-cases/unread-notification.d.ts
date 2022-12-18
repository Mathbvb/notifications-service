import { NotificationRepository } from "../repositories/notifications-repository";
interface UnreadNotificationRequest {
    notificationId: string;
}
type UnreadNotificationResponse = void;
export declare class UnreadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationRepository);
    execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse>;
}
export {};
