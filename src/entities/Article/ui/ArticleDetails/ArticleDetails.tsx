import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articeDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { memo, useCallback, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import s from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockCoomponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
 className?: string;
  id: string;
}

const reducers: ReducersList = {
    articleDetails: articeDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={s.block}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={s.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={s.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={s.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton
                    className={s.title}
                    width={300}
                    height={32}
                />
                <Skeleton
                    className={s.skeleton}
                    width={600}
                    height={24}
                />
                <Skeleton
                    className={s.skeleton}
                    width="100%"
                    height={200}
                />
                <Skeleton
                    className={s.skeleton}
                    width="100%"
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                text={t('Ошибка при загрузке статьи')}
            />
        );
    } else {
        const types = <Text text={article?.type.join(', ')} className={s.types} />;

        content = (
            <>
                <HStack justify="center" max>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={s.avatar}
                    />
                </HStack>
                <VStack gap="4">
                    <Text
                        className={s.title}
                        size={TextSize.L}
                        title={article?.title}
                        text={article?.subtitle}
                    />
                    <HStack>
                        <Icon
                            className={s.icon}
                            Svg={EyeIcon}
                        />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon
                            className={s.icon}
                            Svg={CalendarIcon}
                        />
                        <Text text={article?.createdAt} />
                    </HStack>
                    <HStack gap="8">
                        {types}
                    </HStack>
                </VStack>
                { article?.blocks.map(renderBlock) }
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(s.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
