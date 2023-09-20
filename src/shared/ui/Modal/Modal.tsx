import React, {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import s from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
 className?: string;
 children?: ReactNode;
 isOpen?: boolean;
 onClose?: () => void;
 lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsmounted] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsmounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const oKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', oKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', oKeyDown);
        };
    }, [isOpen, oKeyDown]);

    const mods: Mods = {
        [s.opened]: isOpen,
        [s.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(s.Modal, mods, [className])}>
                <Overlay onClick={closeHandler} />
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
