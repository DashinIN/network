import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import s from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockCoomponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
 className?: string;
 article: Article;
 view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

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
                    <Text title={article.title} className={s.title} size={TextSize.L} />
                    {types}
                    <img className={s.img} alt={article.title} src={article.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={s.text__block} />
                    )}
                    <div className={s.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onOpenArticle}
                        >
                            {t('Читать далее')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
            <Card onClick={onOpenArticle}>
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
        </div>
    );
};
