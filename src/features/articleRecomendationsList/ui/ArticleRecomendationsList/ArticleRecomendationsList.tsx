import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useArticleRecomendationsList } from '../../api/articleRecomendationsApi';
import s from './ArticleRecomendations.module.scss';

interface ArticleRecomendationsListProps {
    className?: string;
}

export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecomendationsList(5);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендации')}
            />
            <ArticleList
                articles={articles}
                className={s.recomendations}
                target="_blank"
            />
        </VStack>
    );
});
