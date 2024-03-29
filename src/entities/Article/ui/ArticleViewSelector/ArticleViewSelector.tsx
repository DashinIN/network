import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import s from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/consts/consts';

interface ArticleViewSelectorProps {
 className?: string;
 view: ArticleView;
 onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(s.ArticleViewSelector, {}, [className])}>
            {
                viewTypes.map((viewType) => (
                    <Button
                        key={viewType.view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames('', { [s.notSelected]: viewType.view !== view })}
                        />
                    </Button>
                ))
            }
        </div>
    );
};
