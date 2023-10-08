import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps {
 className?: string;
 Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
 inverted?: boolean;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
    } = props;

    const mods: Mods = {
        [s.inverted]: inverted,
    };

    return (
        <Svg className={classNames(s.Icon, mods, [className])} />
    );
};
