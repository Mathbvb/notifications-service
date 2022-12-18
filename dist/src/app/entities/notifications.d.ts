import { Content } from './content';
import { Replace } from 'src/helpers/Replace';
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}
export declare class Notification {
    private _id;
    private props;
    constructor(props: Replace<NotificationProps, {
        createdAt?: Date;
    }>, id?: string);
    get id(): string;
    set content(content: Content);
    get Content(): Content;
    set category(category: string);
    get category(): string;
    read(): void;
    unread(): void;
    get readAt(): Date | null | undefined;
    get createdAt(): Date;
    get recipientId(): string;
    get canceledAt(): Date;
    cancel(): void;
}
