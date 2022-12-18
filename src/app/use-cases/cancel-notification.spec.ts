/* eslint-disable prettier/prettier */

import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Content } from "../entities/content";
import { CancelNotification } from "./cancel-notification";
import { Notification } from "../entities/notifications";
import { NotificationNotFound } from "./errors/notification-not-found";


describe('Cancel notification', () => {
    it('should be able to cancel a notification', async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(NotificationsRepository);

        const notification = new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade.'),
            recipientId: 'example-recipient-id',
        });

        await NotificationsRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id,
        });

        expect(NotificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
    });

    it("should not be able to cancel a non existing notification", async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(NotificationsRepository);
    
        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound);
    })
})