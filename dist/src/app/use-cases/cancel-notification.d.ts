import { NotificationRepository } from "../repositories/notifications-repository";
interface CancelNotificationRequest {
    notificationId: string;
}
type CancelNotificationResponse = void;
export declare class CancelNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationRepository);
    execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse>;
}
export {};
