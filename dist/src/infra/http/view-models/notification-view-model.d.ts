import { Notification } from "src/app/entities/notifications";
export declare class NotificationViewModel {
    static toHHTP(notification: Notification): {
        id: string;
        content: import("../../../app/entities/content").Content;
        category: string;
        recipientId: string;
    };
}
