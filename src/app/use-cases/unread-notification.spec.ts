/* eslint-disable prettier/prettier */

import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Content } from "../entities/content";
import { UnreadNotification } from "./unread-notification";
import { Notification } from "../entities/notifications";
import { NotificationNotFound } from "./errors/notification-not-found";


describe('Unread notification', () => {
    it('should be able to unread a notification', async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const unreadNotification = new UnreadNotification(NotificationsRepository);

        const notification = new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade.'),
            recipientId: 'example-recipient-id',
        });

        await NotificationsRepository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.id,
        });

        expect(NotificationsRepository.notifications[0].readAt).toBeNull();
    });

    it("should not be able to unread a non existing notification", async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const unreadNotification = new UnreadNotification(NotificationsRepository);
    
        expect(() => {
            return unreadNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound);
    })
})