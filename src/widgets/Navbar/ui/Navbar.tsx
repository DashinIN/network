import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={s.mainLink}
                >
                    {t('Главная страница')}
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
