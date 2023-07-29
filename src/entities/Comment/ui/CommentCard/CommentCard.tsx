import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import s from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
 className?: string;
 comment: Comment;
 isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(s.CommentCard, {}, [className])}>
                <div className={s.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        height={16}
                        width={100}
                    />
                </div>
                <Skeleton
                    className={s.text}
                    height={50}
                    width="100%"
                />
            </div>
        );
    }

    return (
        <div className={classNames(s.CommentCard, {}, [className])}>
            <div className={s.header}>
                {comment.user.avatar ? (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                ) : null}
                <Text
                    className={s.username}
                    title={comment.user.username}
                />
            </div>
            <Text
                className={s.text}
                text={comment.text}
            />
        </div>
    );
};
