import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
   value: string;
   content: ReactNode
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(s.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={s.tab}
                    key={tab.value}
                    onClick={clickHandler(tab)}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
