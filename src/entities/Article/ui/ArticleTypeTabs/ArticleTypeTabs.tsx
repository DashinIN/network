import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import { useCallback, useMemo } from 'react';

interface ArticleTypeTabsProps {
 className?: string;
 value: ArticleType;
 onChangeType: (type: ArticleType) => void

}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<TabItem[]>(() => {
        const typetabs: { value: string; content: ArticleType; }[] = [];
        Object.entries(ArticleType).forEach(([type, value]) => typetabs.push({
            value,
            content: value,
        }));
        return typetabs;
    }, []);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            className={classNames('', {}, [className])}
            onTabClick={onTabClick}
            value={value}
        />
    );
};
