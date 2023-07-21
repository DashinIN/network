import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './ProfilePage.module.scss';

interface ProfilePageProps {
 className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('profile page')}
        </div>
    );
};

export default ProfilePage;
