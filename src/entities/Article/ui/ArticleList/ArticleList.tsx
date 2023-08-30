import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { HStack } from 'shared/ui/Stack';
import s from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
   }

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const { t } = useTranslation();

    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 6 : 2)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={s.card} view={view} key={index} />
        ));

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={s.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
                <Text size={TextSize.L} text={t('Страницы не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
