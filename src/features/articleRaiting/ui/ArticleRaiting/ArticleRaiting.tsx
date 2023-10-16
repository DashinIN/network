import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RaitingCard } from '@/entities/Raiting';
import { useGetArticleRaiting, useRateArticle } from '../../api/articleRaitingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRaitingProps {
 className?: string;
 articleId: string;
}

const ArticleRaiting = (props: ArticleRaitingProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const [rateArticleMutation] = useRateArticle();

    const { data, isLoading } = useGetArticleRaiting({
        articleId,
        userId: userData?.id ?? '',
    });

    const raiting = data?.[0];

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RaitingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={raiting?.rate}
            className={className}
            title={t('Оцените статью')}
            hasFeedback
            feedbackTitle={t('Оставьте ваш отзыв на статью')}
        />
    );
};

export default ArticleRaiting;
