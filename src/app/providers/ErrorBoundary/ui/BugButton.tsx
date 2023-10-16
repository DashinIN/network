import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onTrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button
            onClick={onTrow}
            theme={ButtonTheme.BACKGROUND_INVERTED}
        >
            {t('Выбросить ошибку')}
        </Button>
    );
};
