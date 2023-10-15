import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RaitingCard } from '@/entities/Raiting';
import { useGetArticleRaiting } from '../../api/articleRaitingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRaitingProps {
 className?: string;
 articleId: string;
}

export const ArticleRaiting = (props: ArticleRaitingProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRaiting({
        articleId,
        userId: userData?.id ?? '',
    });

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const raiting = data?.[0];

    return (
        <RaitingCard
            rate={raiting?.rate}
            className={className}
            title={t('Оцените статью')}
            hasFeedback
            feedbackTitle={t('Оставьте отзыв на статью')}
        />
    );
};
