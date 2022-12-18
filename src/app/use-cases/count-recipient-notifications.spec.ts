/* eslint-disable prettier/prettier */

import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Content } from "../entities/content";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { Notification } from "../entities/notifications";
import { NotificationNotFound } from "./errors/notification-not-found";


describe('Count recipient notifications', () => {
    it('it should be able to count recipient notifications', async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const countRecipientNotification = new CountRecipientNotification(NotificationsRepository);

        await NotificationsRepository.create( new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade'),
            recipientId: 'recipient-1',
        }));

        await NotificationsRepository.create( new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade'),
            recipientId: 'recipient-1',
        }));

        await NotificationsRepository.create( new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade'),
            recipientId: 'recipient-2',
        }));

        const { count } = await countRecipientNotification.execute({
            recipientId: 'recipient-1'
        });

        expect(count).toEqual(2);
    });

})