import { CancelNotification } from 'src/app/use-cases/cancel-notification';
import { CountRecipientNotification } from 'src/app/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from 'src/app/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/app/use-cases/read-notification';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { UnreadNotification } from 'src/app/use-cases/unread-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
export declare class NotificationsController {
    private sendNotification;
    private cancelNotification;
    private readNotification;
    private unreadNotification;
    private countRecipientNotifications;
    private getRecipientNotifications;
    constructor(sendNotification: SendNotification, cancelNotification: CancelNotification, readNotification: ReadNotification, unreadNotification: UnreadNotification, countRecipientNotifications: CountRecipientNotification, getRecipientNotifications: GetRecipientNotification);
    cancel(id: string): Promise<void>;
    countfromRecipient(recipientId: string): Promise<{
        count: number;
    }>;
    getfromRecipient(recipientId: string): Promise<{
        notifications: {
            id: string;
            content: import("../../../app/entities/content").Content;
            category: string;
            recipientId: string;
        }[];
    }>;
    read(id: string): Promise<void>;
    unread(id: string): Promise<void>;
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: import("../../../app/entities/content").Content;
            category: string;
            recipientId: string;
        };
    }>;
}
