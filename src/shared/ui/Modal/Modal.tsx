import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode, useRef, useState } from 'react';
import s from './Modal.module.scss';

interface ModalProps {
 className?: string;
 children?: ReactNode;
 isOpen?: boolean;
 onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.closing]: isClosing,
    };

    return (
        <div className={classNames(s.Modal, mods, [className])}>
            <div className={s.overlay} onClick={closeHandler}>
                <div className={s.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
