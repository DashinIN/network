import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import s from './ArticleListItem.module.scss';
import {
    ArticleView,
} from '../../model/types/article';

interface ArticleListItemSkeletonProps {
 className?: string;
 view: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
                <Card>
                    <div className={s.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={s.username} />
                        <Skeleton width={150} height={16} className={s.date} />
                    </div>
                    <Skeleton width={300} height={50} className={s.title} />
                    <Skeleton height={400} className={s.img} />

                    <div className={s.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
            <Card>
                <div className={s.image__wrapper}>
                    <Skeleton className={s.img} height={250} width={250} />
                </div>
                <div className={s.info__wrapper}>
                    <Skeleton width={200} height={28} />
                </div>
                <Skeleton width={150} height={32} className={s.title} />
            </Card>
        </div>
    );
};
