import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left'
}

export enum TextSize {
    S = 'size__s',
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

    'data-testid'?: string;
}

type HeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeadrTag: Record<TextSize, HeaderTag> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeadrTag[size];

    return (
        <div className={classNames(
            s.Text,
            {},
            [className, s[theme], s[align], s[size]],
        )}
        >
            {title
       && (
           <HeaderTag
               data-testid={`${dataTestId}.Header`}
               className={s.title}
           >
               {title}
           </HeaderTag>
       )}
            {text
       && (
           <p
               data-testid={`${dataTestId}.Paragraph`}
               className={s.text}
           >
               {text}
           </p>
       )}
        </div>
    );
});
