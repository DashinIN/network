import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
 className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text
                className={s.comment__title}
                title={t('Комментарии')}
            />
            <CommentList />
        </div>
    );
};

export default memo(ArticleDetailsPage);
