import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
 className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
            {t('article details')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
