import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, ReactNode } from 'react';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
 className?: string;
 children: ReactNode
}

export const Card = (props: CardProps) => {
    const {
        children,
        className,
        ...otherProps
    } = props;
    return (
        <div
            className={classNames(s.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
