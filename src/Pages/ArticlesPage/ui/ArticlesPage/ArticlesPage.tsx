/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../modal/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../modal/services/initArticlesPage/initArticlesPage';
import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView,
} from '../../modal/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../modal/slices/ArticlesPageSlice';
import s from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
 className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <Page className={classNames(s.ArticlesPage, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(s.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={s.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
