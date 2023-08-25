import { classNames } from 'shared/lib/classNames/classNames';
import s from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
   }

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

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
        />
    );

    return (
        <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
