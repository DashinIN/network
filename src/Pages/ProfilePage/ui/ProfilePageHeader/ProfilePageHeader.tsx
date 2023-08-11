import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import s from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
 className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(s.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />

            {canEdit && (
                <div className={s.btns__wrapper}>
                    {
                        readonly ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={s.editBtn}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>

                        ) : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    className={s.editBtn}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={s.saveBtn}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )
                    }
                </div>
            )}

        </div>
    );
};
