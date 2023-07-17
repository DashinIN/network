import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={s.input}
                placeholder={t('Логин')}
                autofocus
            />
            <Input
                type="text"
                className={s.input}
                placeholder={t('Пароль')}
            />
            <Button
                className={s.loginBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
