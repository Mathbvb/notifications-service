/* eslint-disable prettier/prettier */

import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Content } from "../entities/content";
import { ReadNotification } from "./read-notification";
import { Notification } from "../entities/notifications";
import { NotificationNotFound } from "./errors/notification-not-found";


describe('Read notification', () => {
    it('should be able to read a notification', async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(NotificationsRepository);

        const notification = new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade.'),
            recipientId: 'example-recipient-id',
        });

        await NotificationsRepository.create(notification);

        await readNotification.execute({
            notificationId: notification.id,
        });

        expect(NotificationsRepository.notifications[0].readAt).toEqual(expect.any(Date));
    });

    it("should not be able to read a non existing notification", async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(NotificationsRepository);
    
        expect(() => {
            return readNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound);
    })
})