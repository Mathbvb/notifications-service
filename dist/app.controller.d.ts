import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").PrismaPromise<import(".prisma/client").Notification[]>;
    create(body: CreateNotificationBody): Promise<void>;
}
