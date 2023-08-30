import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import s from './Dropdown.module.scss';
import { Button } from '../Button/Button';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': s.optionsBottomLeft,
    'bottom right': s.optionsBottomRight,
    'top right': s.optionsTopRight,
    'top left': s.optionsTopLeft,
};

export function Dropdown(props: DropdownProps) {
    const {
        className, trigger, items, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(s.Dropdown, {}, [className])}>
            <Menu.Button className={s.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(s.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <Button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(s.item, { [s.active]: active })}
                        >
                            {item.content}
                        </Button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
