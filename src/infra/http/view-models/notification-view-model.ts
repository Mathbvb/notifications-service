/* eslint-disable prettier/prettier */
import { Notification } from "src/app/entities/notifications";

export class NotificationViewModel {
    static toHHTP(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content,
            category: notification.category,
            recipientId: notification.recipientId,
          }
    }
}