/* eslint-disable prettier/prettier */
import { Body, Controller, Patch, Post } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { Notification } from 'src/app/entities/notifications';
import { CancelNotification } from 'src/app/use-cases/cancel-notification';
import { CountRecipientNotification } from 'src/app/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from 'src/app/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/app/use-cases/read-notification';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { UnreadNotification } from 'src/app/use-cases/unread-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';


@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification,
              private cancelNotification: CancelNotification,
              private readNotification: ReadNotification,
              private unreadNotification: UnreadNotification,
              private countRecipientNotifications: CountRecipientNotification,
              private getRecipientNotifications: GetRecipientNotification
              ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    })
  }

  @Get('count/from/:recipientId')
  async countfromRecipient(@Param('recipientId') recipientId: string) {
    const count = await this.countRecipientNotifications.execute({
      recipientId,
    });
    return count;
  }

  @Get('from/:recipientId')
  async getfromRecipient(@Param('recipientId') recipientId: string) {
    const {notifications} = await this.getRecipientNotifications.execute({
      recipientId,
    });
    return {notifications: notifications.map(NotificationViewModel.toHHTP)};
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    })
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const {recipientId, content, category} = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {notification: NotificationViewModel.toHHTP(notification)};
  }
}
