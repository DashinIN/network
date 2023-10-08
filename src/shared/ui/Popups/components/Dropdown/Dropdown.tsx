import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '@/shared/ui/Button/Button';
import { AppLink } from '../../../AppLink/AppLink';
import s from './Dropdown.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupS from '../../styles/popup.module.scss';

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

export function Dropdown(props: DropdownProps) {
    const {
        className, trigger, items, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(s.Dropdown, {}, [className, popupS.popup])}>
            <Menu.Button className={popupS.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(s.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <Button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(s.item, { [popupS.active]: active })}
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
