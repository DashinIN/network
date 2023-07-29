import { classNames } from 'shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps {
 className?: string;
 Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => (
    <Svg className={classNames(s.Icon, {}, [className])} />
);
