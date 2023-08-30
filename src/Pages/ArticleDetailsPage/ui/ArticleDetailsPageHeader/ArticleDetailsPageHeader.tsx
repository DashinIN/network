import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
 className?: string;
}

export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation('article-details');
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button
                onClick={onBackToList}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
};
