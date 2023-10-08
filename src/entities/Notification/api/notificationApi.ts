import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notifications';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotification: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotifications = notificationsApi.useGetNotificationQuery;
