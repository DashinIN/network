import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import s from './ArticleListItem.module.scss';

import { ArticleTextBlockComponent } from '../ArticleTextBlockCoomponent/ArticleTextBlockComponent';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';

interface ArticleListItemProps {
 className?: string;
 article: Article;
 view: ArticleView;
 target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;

    const { t } = useTranslation();

    const types = <Text text={article.type.join(', ')} className={s.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={s.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
                <Card>
                    <div className={s.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={s.username} />
                        <Text text={article.createdAt} className={s.date} />
                    </div>
                    <AppLink
                        target={target}
                        to={RoutePath.article_details + article.id}
                    >
                        <Text title={article.title} className={s.title} size={TextSize.L} />
                    </AppLink>
                    {types}
                    <img className={s.img} alt={article.title} src={article.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={s.text__block} />
                    )}
                    <div className={s.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(s.ArticleListItem, {}, [className, s[view]])}
        >
            <Card>
                <div className={s.image__wrapper}>
                    <img src={article.img} className={s.img} alt={article.title} />
                    <Text className={s.date} text={article.createdAt} />
                </div>
                <div className={s.info__wrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={s.title} />
            </Card>
        </AppLink>
    );
};
