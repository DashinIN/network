import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
 className?: string;
 Svg: React.FC<React.SVGProps<SVGSVGElement>>;
 inverted?: boolean;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
        ...otherProps
    } = props;

    const mods: Mods = {
        [s.inverted]: inverted,
    };

    return (
        <Svg
            className={classNames(s.Icon, mods, [className])}
            {...otherProps}
        />
    );
};
