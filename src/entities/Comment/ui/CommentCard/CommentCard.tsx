import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/consts/router';
import { HStack, VStack } from '@/shared/ui/Stack';
import s from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
 className?: string;
 comment?: Comment;
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
            <VStack max className={classNames(s.CommentCard, {}, [className, s.loading])}>
                <HStack>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        className={s.username}
                        height={16}
                        width={100}
                    />
                </HStack>
                <Skeleton
                    className={s.text}
                    height={50}
                    width="100%"
                />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack max gap="8" className={classNames(s.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={s.header}>
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
            </AppLink>
            <Text
                className={s.text}
                text={comment.text}
            />
        </VStack>
    );
};
