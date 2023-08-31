import {
    getArticlesPageIsLoading,
    getArticlesPageError, getArticlesPageView,
} from 'Pages/ArticlesPage/modal/selectors/articlesPageSelectors';
import { initArticlesPage } from 'Pages/ArticlesPage/modal/services/initArticlesPage/initArticlesPage';
import { getArticles } from 'Pages/ArticlesPage/modal/slices/ArticlesPageSlice';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme, TextAlign } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
 className?: string;
}

export const ArticlesInfiniteList = (props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        );
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
};
