import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './StarRaiting.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '../../assets/icons/star-20-20.svg';

interface StarRaitingProps {
 className?: string;
 onSelect?: (starsCount: number) => void;
 size?: number;
 selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRaiting = (props: StarRaitingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;

    const [isHover, setIsHovered] = useState(false);
    const [currentStarsCount, setCurrentStarsCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(s.StarRaiting, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(s.starIcon, {
                        [s.selected]: isSelected,
                        [s.hovered]: currentStarsCount >= starNumber,
                    })}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
