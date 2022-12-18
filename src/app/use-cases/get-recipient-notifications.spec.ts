/* eslint-disable prettier/prettier */

import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Content } from "../entities/content";
import { GetRecipientNotification } from "./get-recipient-notifications";
import { Notification } from "../entities/notifications";
import { NotificationNotFound } from "./errors/notification-not-found";


describe('Gey recipient notifications', () => {
    it('it should be able to get recipient notifications', async () => {
        const NotificationsRepository = new InMemoryNotificationRepository();
        const getRecipientNotification = new GetRecipientNotification(NotificationsRepository);

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

        const { notifications } = await getRecipientNotification.execute({
            recipientId: 'recipient-1'
        });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' }),
        ]))
    });

})