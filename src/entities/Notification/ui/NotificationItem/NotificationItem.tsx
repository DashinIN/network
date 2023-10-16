import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import s from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications';

interface NotificationItemProps {
 className?: string;
 item: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
    const {
        className,
        item,
    } = props;

    const path = new URL(window.location.href).host;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(s.NotificationItem, {}, [className])}
        >
            <Text
                title={item.title}
                text={item.description}
            />
        </Card>
    );

    if (item.href) {
        return (
            <a target="__blank" href={`http://${path}${item.href}`} className={s.link}>
                {content}
            </a>
        );
    }

    return (
        content
    );
};
