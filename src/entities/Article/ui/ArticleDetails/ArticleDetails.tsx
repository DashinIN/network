import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
 className?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(s.ArticleDetails, {}, [className])}>
            {t('article details')}
        </div>
    );
};
