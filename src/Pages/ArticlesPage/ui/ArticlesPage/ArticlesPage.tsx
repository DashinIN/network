import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
 className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(s.ArticlesPage, {}, [className])}>
            {t('articles page')}
        </div>
    );
};

export default memo(ArticlesPage);
