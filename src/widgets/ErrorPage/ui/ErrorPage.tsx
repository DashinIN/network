import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import s from './ErrorPage.module.scss';

interface ErrorPageProps {
 className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line
        location.reload();
    };
    return (
        <div className={classNames(s.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button
                onClick={reloadPage}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t('Обновить страницу')}

            </Button>
        </div>
    );
};
