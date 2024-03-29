import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import PinkIcon from '@/shared/assets/icons/theme-pink.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/consts/theme';

interface ThemeSwitcherProps {
 className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {/* eslint-disable-next-line no-nested-ternary */}
            { theme === Theme.LIGHT ? <LightIcon />
                : theme === Theme.DARK ? <DarkIcon />
                    : <PinkIcon />}
        </Button>
    );
});
