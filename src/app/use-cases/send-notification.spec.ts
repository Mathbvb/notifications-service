/* eslint-disable prettier/prettier */

import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";


describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(NotificationsRepository);

        const { notification} = await sendNotification.execute({
            content: 'Voce recebeu uma notificacao',
            category: 'social',
            recipientId: 'example-recipient-id',
        });

        expect(NotificationsRepository.notifications).toHaveLength(1);
        expect(NotificationsRepository.notifications[0]).toEqual(notification);
    });
})