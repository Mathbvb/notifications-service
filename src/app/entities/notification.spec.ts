/* eslint-disable prettier/prettier */

import { Content } from "./content";
import { Notification } from "./notifications";

describe('Notification content', () => {
    it('it should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Aiaiaiai'),
            category: 'social',
            recipientId: 'example-recipient-id',
        });

        expect(notification).toBeTruthy();
    });

});