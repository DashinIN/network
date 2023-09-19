import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import s from './NotificationButton.module.scss';

interface NotificationButtonProps {
 className?: string;
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    return (
        <Popover
            className={classNames('', {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
        >
            <NotificationList className={s.notifications} />
        </Popover>

    );
};
