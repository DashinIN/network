import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
 className?: string;
 value: ArticleType;
 onChangeType: (type: ArticleType) => void

}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все'),
        },
        {
            value: ArticleType.ACTION,
            content: t('Экшен'),
        },
        {
            value: ArticleType.ADVENTURE,
            content: t('Приключения'),
        },
        {
            value: ArticleType.COMEDY,
            content: t('Комедия'),
        },
        {
            value: ArticleType.DRAMMA,
            content: t('Драмма'),
        },
        {
            value: ArticleType.ROMANCE,
            content: t('Романтика'),
        },
        {
            value: ArticleType.SCHOOL,
            content: t('Школа'),
        },
        {
            value: ArticleType.THRILLER,
            content: t('Триллер'),
        },
    ], [t]);

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
