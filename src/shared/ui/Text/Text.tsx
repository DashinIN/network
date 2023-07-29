import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left'
}

export enum TextSize {
    M = 'size__m',
    L = 'size__l',
}

interface TextProps {
    className?: string;
    title? : string;
    text? : string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;
    return (
        <div className={classNames(
            s.Text,
            {},
            [className, s[theme], s[align], s[size]],
        )}
        >
            {title
       && (
           <p className={s.title}>
               {title}
           </p>
       )}
            {text
       && (
           <p className={s.text}>
               {text}
           </p>
       )}
        </div>
    );
});
