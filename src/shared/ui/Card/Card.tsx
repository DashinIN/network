import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
 className?: string;
 children: ReactNode;
 theme?: CardTheme
}

export const Card = (props: CardProps) => {
    const {
        children,
        className,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;
    return (
        <div
            className={classNames(s.Card, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
